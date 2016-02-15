(function() {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        alert("Please use a laptop or desktop computer to access this website.");
    }
    else if (navigator.userAgent.indexOf('Chrome') <= -1 && navigator.userAgent.indexOf('Firefox') <= -1) {
        alert("Please use Google Chrome or Firefox browser to access this website.");
    }
})();