(function() {    
    var paintingElems = [$(".initial-hidden-a"), $(".initial-hidden-b"), $(".initial-hidden-c"),  $(".initial-hidden-d")]; 
    var indexIntro = 0, indexOutro;
    var currentPainting, nextPaintingIndex, prevPaintingIndex = -1;



    function animateIntro(paintingIndex) {

        function animateElemIntro() {
        $(currentPainting[indexIntro]).removeClass("animate-intro");
        $(currentPainting[indexIntro]).addClass("animate-outro");
            if (++indexIntro <= currentPainting.length) {
                //last element make it more dramatics
                if (indexIntro === currentPainting.length) {
                    indexOutro = currentPainting.length - 1;
                    setTimeout(animateOutro(paintingIndex), 2500);
                }
                else if (indexIntro === currentPainting.length - 1) {
                    setTimeout(animateIntro(paintingIndex), 500);
                }
                else {
                    setTimeout(animateIntro(paintingIndex), 150); 
                }
            }
        }

        return function() {
            currentPainting = paintingElems[paintingIndex];
            if (indexIntro === 0 && prevPaintingIndex !== -1) {
                Array.prototype.forEach.call(paintingElems[prevPaintingIndex], function(deleteElem) {
                    $(deleteElem).css("display", "none");
                });
                Array.prototype.forEach.call(currentPainting, function(blockElem) {
                    $(blockElem).css("display", "inline-block");
                });
                setTimeout(animateElemIntro, 0);
            }
            else {
                animateElemIntro();
            }
           
        }
    };

    function animateOutro(paintingIndex) {
        return function() {
            currentPainting = paintingElems[paintingIndex];
            // $(introElems[indexIntro]).removeClass("intro-grid-hidden");
            $(currentPainting[indexOutro]).removeClass("animate-outro");
            $(currentPainting[indexOutro]).addClass("animate-intro");
            if (--indexOutro >= -1) {
                if (indexOutro === -1) {
                    indexIntro = 0;
                    prevPaintingIndex = paintingIndex;
                    nextPaintingIndex = paintingIndex < paintingElems.length - 1 ? ++paintingIndex : 0;
                    
                    setTimeout(animateIntro(nextPaintingIndex), 800);
                }
                else {
                    setTimeout(animateOutro(paintingIndex), 150);
                }
            }
        }
    };

    animateIntro(0)();

})();
