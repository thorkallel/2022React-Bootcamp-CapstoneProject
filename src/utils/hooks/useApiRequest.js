/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';

import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useApiRequest({
  typeData = 'banner',
  size = 5,
  product = null,
  search = null
}) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featuredBanners, setFeaturedBanners] = useState(() => ({
    data: {},
    isLoading: true
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedBanners() {
      try {
        setFeaturedBanners({ data: {}, isLoading: true });

        const response =
          typeData === 'banner'
            ? await fetch(
                `${API_BASE_URL}/documents/search?ref=${apiRef}&q=[[at(document.type, "banner")]]&lang=en-us&pageSize=${size}`,
                {
                  signal: controller.signal
                }
              )
            : typeData === 'category'
            ? await fetch(
                `${API_BASE_URL}/documents/search?ref=${apiRef}&q=[[at(document.type, "category")]]&lang=en-us`,
                {
                  signal: controller.signal
                }
              )
            : typeData === 'product'
            ? await fetch(
                `${API_BASE_URL}/documents/search?ref=${apiRef}&q=[[at(document.type, "product")]]&lang=en-us`,
                {
                  signal: controller.signal
                }
              )
            : typeData === 'single'
            ? await fetch(
                `${API_BASE_URL}/documents/search?ref=${apiRef}&q=[[at(document.id, "${product}")]]&lang=en-us&pageSize=${size}`,
                {
                  signal: controller.signal
                }
              )
            : typeData === 'search'
            ? await fetch(
                `${API_BASE_URL}/documents/search?ref=${apiRef}&q=[[at(document.type, "product")]]&q=[[fulltext(document, "${search}")]]`,
                {
                  signal: controller.signal
                }
              )
            : null;

        const data = await response.json();

        setFeaturedBanners({ data, isLoading: false });
      } catch (err) {
        setFeaturedBanners({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedBanners();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return featuredBanners;
}
