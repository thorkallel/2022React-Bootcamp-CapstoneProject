import PropTypes, { string } from 'prop-types';
import { useEffect, useState } from 'react';

import { useFilterContext } from '../../providers/FilterProvider';

function Category({ category }) {
  /*  CONTEXT DESTRUCTURING */
  const {
    filters: { activecategory },
    categoryActive,
    filterProducts
  } = useFilterContext();

  /* STATE OF CURRENT CLASS */
  const [currentClass, setCurrentClass] = useState(null);

  /* CATEGORIES DESTRUCTURING */
  const {
    id,
    data: { name }
  } = category;

  /* USE EFFECT HOOK TO SWITCH THE ACTIVE CLASS */
  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      const changeStateClass = () => {
        // eslint-disable-next-line no-nested-ternary
        const getChangeClass = activecategory
          ? activecategory.indexOf(id) !== -1
            ? 'active'
            : null
          : null;
        setCurrentClass(getChangeClass);
      };
      changeStateClass();
    }

    return () => {
      unmounted = true;
    };
  }, [activecategory, id]);

  return (
    <li className={currentClass}>
      <a
        href="#/"
        onClick={(ev) => {
          ev.preventDefault();
          categoryActive(id);
          filterProducts();
        }}
        id={id}
        className={currentClass}
      >
        {name}
      </a>
    </li>
  );
}

Category.propTypes = {
  category: PropTypes.shape({
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

export default Category;
