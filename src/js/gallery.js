// jQuery(document).ready(function($) {
//     $('.gallery__list').masonry({
//       itemSelector: '.gallery__item',
//       columnWidth: '.gallery__item',
//       originLeft: false,
//       gutter: 10,
//       fitWidth: true,
      
//     });

// });

var elem = document.querySelector('.gallery__list');
var msnry = new Masonry( elem, {
   itemSelector: '.gallery__item',
      columnWidth: '.gallery__item',
      originLeft: false,
      gutter: 10,
      fitWidth: true
});

