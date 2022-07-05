import { useCategoriesContext } from '../../providers/CategoriesProvider';
import { useFilterContext } from '../../providers/FilterProvider';
// eslint-disable-next-line import/no-cycle
import { Category } from '..';
import { Wrapper } from './aside.styled';

function Aside() {
  /*  CONTEXT DESTRUCTURING */
  const { featured_categories: featured } = useCategoriesContext();

  const { clearFilters } = useFilterContext();

  /* SLIDES CATEGORIES */
  const itemsCategories = featured.map((category) => (
    <Category category={category} key={category.id} />
  ));

  return (
    <Wrapper>
      <ul>
        {itemsCategories}
        <li>
          <a
            href="#/"
            onClick={(ev) => {
              ev.preventDefault();
              clearFilters();
            }}
          >
            All
          </a>
        </li>
      </ul>
    </Wrapper>
  );
}

export default Aside;
