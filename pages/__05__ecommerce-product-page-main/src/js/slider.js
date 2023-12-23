import { Fancybox } from '@fancyapps/ui';
import { Carousel } from '@fancyapps/ui/dist/carousel/carousel.esm';
import { Autoplay } from '@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js';

export default function initSlider() {
  Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: {
      type: 'classic',
    },
  });

  let container;
  let options;
  if (window.innerWidth > 600) {
    container = document.querySelector('.slider__main--desk');
    options = {
      infinite: true,
      Autoplay: {
        timeout: 3000,
      },
      Dots: false,
    };
    new Carousel(container, options, { Autoplay });
    return;
  } else {
    container = document.querySelector('.slider__main--mob');
    options = {
      infinite: true,
      Dots: false,
    };
    new Carousel(container, options);
  }
}
