(function() {
    var backgroundElem = $("#background-image");

    function showHideBackgroundElem() {
      if ($(document).scrollTop() > 1000) {
        backgroundElem.css("opacity", "1");
      } else {
        backgroundElem.css("opacity", "0");
      }
    }

    $(window).scroll(function() {
      showHideBackgroundElem();
    });

    showHideBackgroundElem();

})();