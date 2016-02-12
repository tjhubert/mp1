(function() {
    var backgroundElem = $("#background");

    function showHideBackgroundElem() {
      if ($(document).scrollTop() > 1000) {
        backgroundElem.removeClass("hide");
      } else {
        backgroundElem.addClass("hide");
      }
    }

    $(window).scroll(function() {
      showHideBackgroundElem();
    });

    showHideBackgroundElem();

})();