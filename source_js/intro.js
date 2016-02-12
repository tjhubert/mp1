(function() {    
    var initialHiddenElems = $(".initial-hidden");
    var j = 0;
    var hasAnimationStarted = false;

    function animateIntro() {
        hasAnimationStarted = true;
        // $(initialHiddenElems[j]).removeClass("intro-grid-hidden");
        $(initialHiddenElems[j]).css("opacity", "1");
        if (++j < initialHiddenElems.length) {
            //last element make it more dramatics
            if (j === initialHiddenElems.length - 1) {
                setTimeout(animateIntro, 500);
            }
            else {
                setTimeout(animateIntro, 150);  // call myself in 3 seconds time if required
            }
        }
    };

    function tryStartAnimation() {
        if (inView($("#intro"), -700) && !hasAnimationStarted) {
            setTimeout(animateIntro, 500);
        }
    }

    $(window).scroll(function() {
        tryStartAnimation();
    });

    setTimeout(animateIntro, 500);


})();
