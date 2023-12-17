import lightgallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export default function initSlider() {
  lightgallery(document.getElementById('animated-thumbnails'), {
    speed: 500,
    plugins: [lgThumbnail, lgZoom],
    showZoomInOutIcons: true,
    actualSize: false,
  });
}
