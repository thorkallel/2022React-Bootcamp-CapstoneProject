/* eslint-disable react/forbid-prop-types */
import PropTypes, { string } from 'prop-types';
import { NavLink } from 'react-router-dom';

import { useFilterContext } from '../../providers/FilterProvider';
import { Wrapper } from './banneritems.styled';

function BannerItems({ slide }) {
  /*  CONTEXT DESTRUCTURING */
  const { categoryActive, filterProducts } = useFilterContext();

  /* SLIDE DESTRUCTURING */
  const {
    data: {
      name,
      main_image: {
        url,
        dimensions: { width, height }
      }
    },
    id
  } = slide;

  return (
    <Wrapper>
      <NavLink
        to={`/products/${name}`}
        onClick={() => {
          categoryActive(id);
          filterProducts();
        }}
      >
        <div>
          <p>{name}</p>
        </div>
        <img src={url} alt={name} width={width} height={height} />
      </NavLink>
    </Wrapper>
  );
}

BannerItems.propTypes = {
  slide: PropTypes.shape({
    alternate_languages: PropTypes.oneOfType([PropTypes.array]).isRequired,
    data: PropTypes.oneOfType([PropTypes.object]).isRequired,
    first_publication_date: PropTypes.string,
    href: PropTypes.string,
    id: PropTypes.string,
    lang: PropTypes.string,
    last_publication_date: PropTypes.string,
    linked_documents: PropTypes.arrayOf(string),
    slugs: PropTypes.arrayOf(string),
    tags: PropTypes.arrayOf(string),
    type: PropTypes.string,
    uid: PropTypes.string,
    URL: PropTypes.string
  }).isRequired
};

export default BannerItems;
