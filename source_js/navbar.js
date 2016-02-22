(function() {    
    var navbarElem = $("#navbar");
    var navbarButtons = $(".navbar-links");
    var isScrollInProgress = false;
    var isHovered = false, isShrink = false;

    $.extend(jQuery.easing,
            {smooth:
                function (x, t, b, c, d) {
                    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
                    return c/2*((t-=2)*t*t*t*t + 2) + b;
                }
            });

    function tryShrinkNavbar() {
        if (!isHovered) {
            if ($(document).scrollTop() > 50) {
                isShrink = true;
                navbarElem.addClass('navbar-shrink');
            } else {
                isShrink = false;
                navbarElem.removeClass('navbar-shrink');
            }
        }
    }

    function clearActiveNavbars() {
        Array.prototype.forEach.call(navbarButtons, function(navbarButton, index) {
            $(navbarButton).removeClass("navbar-active");
        })
    }

    function activateNavbar(index) {
        var navbarButtonELem = $(navbarButtons[index]);
        if (!navbarButtonELem.hasClass("navbar-active")) {
            clearActiveNavbars();
        }
        navbarButtonELem.addClass("navbar-active");
    }

    function smoothScrollTo(element, indexNavbar) {

        var page = $("html, body");

        function removePageEvent() {
            isScrollInProgress = false;
            page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
        }

        if (indexNavbar === 0) {
            offset = 100;
        }
        else if (indexNavbar === 1) {
            offset = 200;
        }
        else {
            offset = 200;
        }

        // allow user to stop smooth scroll when manual scroll is detected
        page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
           page.stop();
           removePageEvent();
        });

        $('html, body').animate(
            {
                scrollTop: element.offset().top - offset
            }, 1200, 'smooth',
            function(){
                removePageEvent();
                // after scrolling is done activate the cicked navbar
                activateNavbar(indexNavbar);
            }
        );
    };

    Array.prototype.forEach.call(navbarButtons, function(navbarButton, index) {
        var navbarButtonElem = $(navbarButton);
        navbarButtonElem.mouseover(function() {
            if (!navbarButtonElem.hasClass("navbar-active")) {
                navbarButtonElem.addClass("hover-" + randomColorGenerator());
                if (index === 0) {
                    $("#first-navbar").addClass("border-left");
                }
            }
        });
        navbarButtonElem.mouseleave(function() {
            navbarButtonElem.removeClass("hover-blue");
            navbarButtonElem.removeClass("hover-red");
            navbarButtonElem.removeClass("hover-yellow");
            if (index === 0) {
                $("#first-navbar").removeClass("border-left");
            }
        });
        navbarButtonElem.click(function(){
            if (!navbarButtonElem.hasClass("navbar-active")) {
                isScrollInProgress = true;
                clearActiveNavbars();
                if (index === 0) {
                    smoothScrollTo($("#multi-column"), 0);
                }
                else if (index === 1) {
                    smoothScrollTo($("#carousel"), 1);
                }
                else {
                    smoothScrollTo($("#modal"), 2);
                }
            }
        })
    })

    $(window).scroll(function() {
        tryShrinkNavbar();
        // prevent changing active navbar when scroll in progress
        // for smoother transition
        if (!isScrollInProgress) {
            if (inView($("#multi-column"), 100) || inView($("#video"))) {
                activateNavbar(0);
            }
            else if (inView($("#carousel"), 150)) {
                activateNavbar(1);
            }
            else if ( inView($("#background"), 300) || inView($("#modal"), 150)) {
                activateNavbar(2);
            }
            else {
                clearActiveNavbars();
            }
        }
    });

    navbarElem.mouseover(function() {
        if (isShrink) {
            navbarElem.removeClass('navbar-shrink');
            isShrink = false;
        }
        isHovered = true;
    });

    navbarElem.mouseleave(function() {
        isHovered = false;
        tryShrinkNavbar();
    });


})();