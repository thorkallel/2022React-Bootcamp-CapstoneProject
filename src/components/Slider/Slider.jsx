import 'react-multi-carousel/lib/styles.css';

import Carousel from 'react-multi-carousel';

import { useBannersContext } from '../../providers/BannersProvider';
// eslint-disable-next-line import/no-cycle
import { SlidesItems } from '..';
import { Wrapper } from './slider.styled';

/* CAROUSEL OPTIONS */
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

function Slider() {
  /*  CONTEXT DESTRUCTURING */
  const { featured_banners: featured } = useBannersContext();

  /* SLIDES MAPPING */
  const itemsSlider = featured.map((slide) => (
    <SlidesItems slide={slide} key={slide.id} />
  ));

  return (
    <Wrapper>
      <Carousel
        swipeable
        draggable
        showDots
        responsive={responsive}
        infinite
        autoPlay={false}
        autoPlaySpeed={5000}
        customTransition="transform 10ms ease-in-out"
        transitionDuration={500}
        containerClass="slider-container"
        dotListClass="custom-dot-list-style"
      >
        {itemsSlider}
      </Carousel>
    </Wrapper>
  );
}

export default Slider;
