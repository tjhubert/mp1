function randomColorGenerator() {
    var randomNumber = Math.random() * 10;
    if (randomNumber <= 10/3) {
        return "blue";
    }
    else if (randomNumber <= 20/3) {
        return "red";
    }
    else {
        return "yellow";
    }
}

function inView(element, buffer) {
    var elementTop = element.offset().top;
    var elementBottom = element.offset().top + element.height();
    var screenBottom = $(window).scrollTop() + $(window).height();
    var screenTop = $(window).scrollTop();

    if (typeof buffer === 'undefined') {
        buffer = 0;
    }

    return elementTop > screenTop - buffer && screenBottom > elementBottom - buffer;
}