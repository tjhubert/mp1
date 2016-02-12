(function(){
    var lightboxElem = $("#lightbox");
    var lightboxElemContent = $("#lightbox-content");
    var lightboxElemDescription = $("#lightbox-description");
    var worksElem = $(".modal-works");
    var worksData = [
        {
            url: "media/gray-tree.jpg",
            year: "1912",
            title: "The Gray Tree"
        },
        {
            url: "media/pier-and-ocean.jpg",
            year: "1915",
            title: "Pier and Ocean (Composition No. 10)"
        },
        {
            url: "media/farm-near-duivendrecht.jpg",
            year: "1916",
            title: "Farm Near Duivendrecht"
        },
        {
            url: "media/composition-checkerboard-dark-colors.jpg",
            year: "1919",
            title: "Composition: Checkerboard, Dark Colors"
        },
        {
            url: "media/composition-II-in-red-blue-and-yellow.jpg",
            year: "1930",
            title: "Composition II in Red, Blue, and Yellow"
        },
        {
            url: "media/tableau-number-4.jpg",
            year: "1925",
            title: "Tableau No. IV"
        },
        {
            url: "media/the-still-life-with-gingerpot-2.jpg",
            year: "1912",
            title: "The Still Life with Gingerpot II"
        },
        {
            url: "media/new-york-city-1.jpg",
            year: "1942",
            title: "New York City I"
        },
        {
            url: "media/composition-london.jpg",
            year: "1944",
            title: "Composition London"
        },
        {
            url: "media/victory-boogie-woogie.jpg",
            year: "1944",
            title: "Victory Boogie-Woogie"
        }
    ];

    var keys = {37: 1, 38: 1, 39: 1, 40: 1};

    function preventDefault(e) {
      e = e || window.event;
      if (e.preventDefault)
          e.preventDefault();
      e.returnValue = false;  
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    function disableScroll() {
      if (window.addEventListener) // older FF
          window.addEventListener('DOMMouseScroll', preventDefault, false);
      window.onwheel = preventDefault; // modern standard
      window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
      window.ontouchmove  = preventDefault; // mobile
      document.onkeydown  = preventDefaultForScrollKeys;
    }

    function enableScroll() {
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.onmousewheel = document.onmousewheel = null; 
        window.onwheel = null; 
        window.ontouchmove = null;  
        document.onkeydown = null;  
    }

    function displayLightbox(image) {
        return function() {
            lightboxElem.css('top', $(document).scrollTop());
            lightboxElem.addClass("show-lightbox");
            lightboxElemContent.css('background-image', 'url(' + image.url +')');
            var caption = image.title + ", " + image.year;
            lightboxElemDescription.find("span").html(caption);
            disableScroll();
        }
    }

    worksData.sort(function(a, b) {
        return parseInt(a.year) - parseInt(b.year);
    });


    Array.prototype.forEach.call(worksElem, function(worksElem, index) {
        $(worksElem).css("background-image", "url(" + worksData[index].url + ")")
        $(worksElem).click(displayLightbox(worksData[index]));
    });

    $("#lightbox-hide").click(function(){
        lightboxElem.removeClass("show-lightbox");
        enableScroll();
    });

    $("#lightbox-transparent").click(function(){
        lightboxElem.removeClass("show-lightbox");
        enableScroll();
    });

})();