
    
  // ギャラリースライダー
  $(".slide-items-gallery").slick({
    autoplay: true,
    autoplaySpeed: 0, 
    speed: 5000, 
    slidesToShow: 4,
    cssEase: "linear",
    useTransform: false,
    arrows: false, 
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
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
