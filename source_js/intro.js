(function() {    
    var initialHiddenElems = $(".initial-hidden");
    var j = 0;

    (function loop() {
        // $(initialHiddenElems[j]).removeClass("intro-grid-hidden");
        $(initialHiddenElems[j]).css("opacity", "1");
        if (++j < initialHiddenElems.length) {
            //last element make it more dramatics
            if (j === initialHiddenElems.length - 1) {
                setTimeout(loop, 500);
            }
            else {
                setTimeout(loop, 150);  // call myself in 3 seconds time if required
            }
        }
    })();
})();
