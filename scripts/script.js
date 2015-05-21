$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  /* Display a little headline after scrolling */
  $(window).scroll(function (e) {
    var visiblePosition = $(window).scrollTop() + $(window).height(),
        triggerPosition = $('#headline').offset().top + $('#headline').outerHeight();

    if (triggerPosition < visiblePosition && !$('#headline').attr('displayed')) {
        $('#headline')
            .attr('displayed', true)
            .animate({'margin-top': "-=5vh", 'opacity': 1}, 1000); 
    }
  })

});
