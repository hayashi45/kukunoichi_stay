
    
  // ギャラリースライダー
  $(".slide-items-gallery").slick({
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    arrows: false, 
    infinite: true,
    focusOnSelect:true,
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
