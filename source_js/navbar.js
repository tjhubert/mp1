(function() {    
    var navbarElem = $("#navbar");
    var navbarButtons = $(".navbar-links");
    var isScrollInProgress = false;

    $.extend(jQuery.easing,
            {smooth:
                function (x, t, b, c, d) {
                    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
                    return c/2*((t-=2)*t*t*t*t + 2) + b;
                }
            });

    function tryShrinkNavbar() {
        if ($(document).scrollTop() > 50) {
            navbarElem.addClass('navbar-shrink');
        } else {
            navbarElem.removeClass('navbar-shrink');
        }
    }

    function clearActiveNavbars() {
        Array.prototype.forEach.call(navbarButtons, function(navbarButton) {
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
        $('html, body').animate(
            {
                scrollTop: element.offset().top - 200
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
            }
        });
        navbarButtonElem.mouseleave(function() {
            navbarButtonElem.removeClass("hover-blue");
            navbarButtonElem.removeClass("hover-red");
            navbarButtonElem.removeClass("hover-yellow");
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


})();