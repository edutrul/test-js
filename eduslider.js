
jQuery.fn.eduslider = function(options) {
  var i = 0;
  function step(next) {
      if (i == options.imgs.length) {
        i = 0;
      }
      $(this)
          .fadeOut(1200)
          .queue(function(nextSlide){ 
            return function(next){
              $(this).css("background-image", "url('" + nextSlide + "')");
              next();
            }; 
          }(options.imgs[i]))
          .fadeIn(1200)
          .queue(step);
      i++;
      next();
  }
  $(this).queue(step);
}
