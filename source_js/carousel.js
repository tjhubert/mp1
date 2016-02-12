(function() {    
    var carouselSlides = $('.carousel-slides');
    var currentCarouselIndex = 0;
    var oldIndex;

    function hideCarouselSlide(index) {
        $(carouselSlides[index])
            .css("display", "none")
            .removeClass("carousel-yellow")
            .removeClass("carousel-red")
            .removeClass("carousel-blue");
    }

    function showCarouselSlide(index) {
        $(carouselSlides[index])
            .css("display", "block")
            .addClass("carousel-" + randomColorGenerator());
    }

    $("#arrow-carousel-right").click(function(){
        oldIndex = currentCarouselIndex;
        currentCarouselIndex++;
        if (currentCarouselIndex === carouselSlides.length) {
            currentCarouselIndex = 0;
        }   
        hideCarouselSlide(oldIndex);
        showCarouselSlide(currentCarouselIndex);
    })

    $("#arrow-carousel-left").click(function(){
        oldIndex = currentCarouselIndex;
        currentCarouselIndex--;
        if (currentCarouselIndex === -1) {
            currentCarouselIndex = carouselSlides.length - 1;
        }
        hideCarouselSlide(oldIndex);
        showCarouselSlide(currentCarouselIndex);
    })

    showCarouselSlide(0);

})();


