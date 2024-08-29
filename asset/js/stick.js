$(document).ready(function() {
  const $banner = $('#banner');
  const $window = $(window);
  $window.on('scroll', function() {
      const scrollPosition = $window.scrollTop();
      
      if (scrollPosition > 100) {
          $banner.fadeIn();
      } else {
          $banner.fadeOut();
      }
  });
});