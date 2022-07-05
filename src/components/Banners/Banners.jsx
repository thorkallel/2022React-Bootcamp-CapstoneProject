/* eslint-disable import/no-cycle */
import 'react-multi-carousel/lib/styles.css';

import Carousel from 'react-multi-carousel';

import { useCategoriesContext } from '../../providers/CategoriesProvider';
// eslint-disable-next-line no-unused-vars
import { BannersItems } from '..';
import { Wrapper } from './banners.styled';

/* CAROUSEL OPTIONS */
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 2
  }
};

function Banners() {
  /*  CONTEXT DESTRUCTURING */
  const { featured_categories: featured } = useCategoriesContext();

  /* SLIDES MAPPING */
  const bannerSlider = featured.map((banner) => (
    <BannersItems slide={banner} key={banner.id} />
  ));

  return (
    <Wrapper>
      <Carousel
        swipeable
        draggable
        showDots={false}
        responsive={responsive}
        infinite
        autoPlay={false}
        autoPlaySpeed={5000}
        customTransition="transform 10ms ease-in-out"
        transitionDuration={500}
        containerClass="banners-container"
        dotListClass="custom-dot-list-style"
      >
        {bannerSlider}
      </Carousel>
    </Wrapper>
  );
}

export default Banners;
