(function() {    
    var introElems = $(".initial-hidden");
    var indexIntro = 0, indexOutro = introElems.length - 2;
    var hasAnimationStarted = false;

    function animateIntro() {
        hasAnimationStarted = true;
        // $(introElems[indexIntro]).removeClass("intro-grid-hidden");
        $(introElems[indexIntro]).css("opacity", "1");
        if (++indexIntro <= introElems.length) {
            //last element make it more dramatics
            if (indexIntro === introElems.length) {
                indexOutro = introElems.length - 2;
                setTimeout(animateOutro, 2000);
            }
            else if (indexIntro === introElems.length - 1) {
                setTimeout(animateIntro, 500);
            }
            else {
                setTimeout(animateIntro, 150);  // call myself in 3 seconds time if required
            }
        }
    };

    function animateOutro() {
        hasAnimationStarted = true;
        // $(introElems[indexIntro]).removeClass("intro-grid-hidden");
        $(introElems[indexOutro]).css("opacity", "0");
        if (--indexOutro >= -1) {
            //last element make it more dramatics
            if (indexOutro === -1) {
                indexIntro = 0;
                setTimeout(animateIntro, 3000);
            }
            else {
                setTimeout(animateOutro, 200);  // call myself in 3 seconds time if required
            }
        }
    };

    function tryStartAnimation() {
        if (inView($("#intro"), -700) && !hasAnimationStarted) {
            setTimeout(animateIntro, 500);
        }
    }

    // Array.prototype.forEach.call(introElems, function(introEl, index) {
    //     var introElem = $(introEl);
    //     introElem.mouseover(function() {
    //         if (hasAnimationStarted) {
    //             introElem.addClass("hover-" + randomColorGenerator());
    //         }
    //     });
    //     introElem.mouseleave(function() {
    //         if (hasAnimationStarted) {
    //             introElem.removeClass("hover-blue");
    //             introElem.removeClass("hover-yellow");
    //             introElem.removeClass("hover-red");
    //         }
    //     })
    // }

    $(window).scroll(function() {
        tryStartAnimation();
    });

    setTimeout(animateIntro, 500);


})();
