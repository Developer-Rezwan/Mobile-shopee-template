$(document).ready(function () {
  bannerSlider();
  topSale();
  specialPrice();
  new_phone();
  latest_blog();
  quantity();
  quantityOfCart();
});

/* Banner Slider Controller Funtion */
function bannerSlider() {
 $('#banner-area .owl-carousel').owlCarousel({
  items: 1,  
  loop: true,
  autoplay: true,
  autoplayTimeout : 3000,
  dots: true,
  autoplayHoverPause: true
 });
}

/* Top Sale Section image Controller */
function topSale() {
 $('#top-sale .owl-carousel').owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  autoplay: true,
  responsive: {
   0: {
    items : 1
   },
   768: {
    items : 3
   },
   992: {
     items : 5
    }
  }
});
}

/* Special Price section controller */
function specialPrice() { 
var $grid = new isotope('.grid' ,{
   itemSelector: '.grid-item',
   layoutMode : 'fitRows'
});
  /* Filter items by clicking button */
  $(".button-group").on('click', 'button', function () {
    let filterValue = $(this).attr('data-filter');
    $grid.arrange({
      filter: filterValue
    });
  });
  
}
/* New phone Section image Controller */
function new_phone() {
 $('#new_phone .owl-carousel').owlCarousel({
  nav: false,
  dots: true,
  autoplay: true,
  responsive: {
   0: {
    items : 1
   },
   768: {
    items : 3
   },
   992: {
     items : 5
    }
  }
});
}

/* Latest Blog section */
function latest_blog() {
  $('#latest-blog .owl-carousel').owlCarousel({
    dots: true,
    autoplay : true,
    responsive: {
      0: {
        items : 1
      },
      768: {
        items : 3
      }
    }
  }) 
}

/*A product page Quantity Section */
function quantity() {
  let inputField = $('.qty_input');
  $('#product .qty-up').on('click', function () {
    if (inputField.val() >= 1 && inputField.val() < 10) {
         inputField.val(function (index, oldValue) {
        return ++oldValue;
      });
      }
    });
  $('#product .qty-down').on('click', function () {
    if (inputField.val() > 1 && inputField.val() <= 10) {
      inputField.val(function (index , oldValue) {
        return --oldValue;
      });
    }
    });
}

/* Cart Quantity */
function quantityOfCart() {
  
  /* Up Button */
  $('#shoping-cart .qty-up').on('click', function () {
    let upButton = $(this).data('upbuttonid');
    // let inputField = $(`#inputId${downButton}`);                         (Also can do it)
    let inputField = $(`.qty_input[data-inputid='${upButton}']`);
    if (inputField.val() >= 1 && inputField.val() < 10) {
      inputField.val(function (index, oldValue) {
        return ++oldValue;
      });
    }
  });

  /* Down Button */
    $('#shoping-cart .qty-down').on('click', function () {
    let downButton = $(this).data('downbuttonid');
   // let inputField = $(`#inputId${downButton}`);                                          (Also can do it)
    let inputField = $(`.qty_input[data-inputid='${downButton}']`);
    if (inputField.val() > 1 && inputField.val() <= 10) {
      inputField.val(function (index, oldValue) {
        return --oldValue;
      });
    }
  });
}