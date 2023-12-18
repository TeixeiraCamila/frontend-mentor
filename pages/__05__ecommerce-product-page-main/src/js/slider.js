import lightgallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import { tns } from 'tiny-slider';

export function initSliderDesktop() {
  if (window.innerWidth > 694) {
    lightgallery(document.getElementById('animated-thumbnails'), {
      speed: 500,
      plugins: [lgThumbnail, lgZoom],
      showZoomInOutIcons: true,
      actualSize: false,
    });
  } else {
    tns({
      container: '#slider_main',
      items: 1,
      center: true,
      loop: false,
      swipeAngle: false,
      speed: 400,
      nav: false,
      controlsText: ["<", ">"],
      gutter: 20,
    });
  }
}
