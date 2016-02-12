(function() {    
    var navbarElem = $("#navbar");
    var navbarButtons = $(".navbar-links");

    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        navbarElem.addClass('navbar-shrink');
      } else {
        navbarElem.removeClass('navbar-shrink');
      }
    });

    Array.prototype.forEach.call(navbarButtons, function(navbarButton) {
        $(navbarButton).mouseover(function() {
            $(navbarButton).addClass("hover-" + randomColorGenerator());
        });
        $(navbarButton).mouseleave(function() {
            $(navbarButton).removeClass("hover-blue");
            $(navbarButton).removeClass("hover-red");
            $(navbarButton).removeClass("hover-yellow");
        });
    })
})();