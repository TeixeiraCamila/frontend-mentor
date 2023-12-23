import { Fancybox } from '@fancyapps/ui';
import { Carousel } from '@fancyapps/ui/dist/carousel/carousel.esm';

export default function initSlider() {
  Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: {
      type: 'classic',
    },
  });
  const container = document.querySelector('.slider__main');
  const options = { infinite: false, dotTpl: false };

  new Carousel(container, options);
}
