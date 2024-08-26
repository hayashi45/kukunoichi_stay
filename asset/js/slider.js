$(".slide-items").slick({
  dots: true, 
  initialSlide: 1,
  infinite: false,
  arrows: true, 
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false, 
        appendDots: $('.arrow_Dots'),
        nextArrow: '<button type="button" class="slick-next">Next</button>',
      }
    }
  ]
});


$(document).ready(function(){
  $(".slide-items-gallery").slick({
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    arrows: false, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});