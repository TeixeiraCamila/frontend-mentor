import { Fancybox } from '@fancyapps/ui';
import { Carousel } from '@fancyapps/ui/dist/carousel/carousel.esm';
import { Thumbs } from '@fancyapps/ui/dist/carousel/carousel.thumbs.esm';

export default function initSlider() {
  Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: {
      type: 'classic',
    },
  });

  let container = document.querySelector('#slider__container');
  let options = {
    Dots: false,
    Thumbs: {
      type: 'classic',
    },
  };
  new Carousel(container, options, { Thumbs });
}
