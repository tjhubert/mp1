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
        if (indexNavbar === 0) {
            offset = 100;
        }
        else if (indexNavbar === 1) {
            offset = 200;
        }
        else {
            offset = 200;
        }
        $('html, body').animate(
            {
                scrollTop: element.offset().top - offset
            }, 1200, 'smooth',
            function(){
                isScrollInProgress = false;
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
            isHovered = true;
        }
    });

    navbarElem.mouseleave(function() {
        if (isHovered) {
            navbarElem.addClass('navbar-shrink');
            isHovered = false;
        }
    });


})();