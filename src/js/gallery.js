
import Masonry from 'masonry-layout';
var msnry = new Masonry('.gallery__list', {
   itemSelector: '.gallery__item',
   columnWidth: '.gallery__item',
   originLeft: false,
   gutter: 10,
   fitWidth: true
});
   $gallery__list.imagesLoaded().progress( function() {
  $gallery__list.masonry('layout');
});


