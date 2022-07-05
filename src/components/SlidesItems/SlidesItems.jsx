import PropTypes, { string } from 'prop-types';

import { Wrapper } from './slidesitems.styled';

function SlidesItems({ slide }) {
  /* SLIDE DESTRUCTURING */
  const {
    data: {
      title,
      main_image: {
        url,
        dimensions: { width, height }
      }
    }
  } = slide;

  return (
    <Wrapper>
      <img src={url} alt={title} width={width} height={height} />
    </Wrapper>
  );
}

SlidesItems.propTypes = {
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
export default SlidesItems;
