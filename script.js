$(document).ready(function() {
    var menu = $(".right-side-menu");
    var toggleButton = $("#menu-toggle");

    // Toggle menu visibility when clicking the menu toggle button
    toggleButton.click(function(event) {
        event.stopPropagation(); // Prevent the click event from propagating to the document
        menu.toggleClass("hidden");
        $('body').removeClass('scroll-disabled')
    });

    // Close menu when clicking on the document
    $(document).on("click", function(event) {

        if (!menu.is(event.target) &&
            !toggleButton.is(event.target) &&
            menu.has(event.target).length === 0
        ) {
            menu.addClass("hidden");
        }
    });
});


$('#menu-toggle').click(function() {
    $('body').addClass('scroll-disabled')
});


$(".responsive-close").click(function() {
    $(".right-side-menu").addClass("hidden");
    $('body').removeClass('scroll-disabled')
});


$(document).ready(function() {
    $(".more-services.mb-4.tech-talents").click(function() {
        $(this).toggleClass("open");
        $(".more-content.pt-4").toggleClass("open");
        $(".more-services:not(.mb-4.tech-talents)").removeClass("open");
        $(".more-content:not(.pt-4)").removeClass("open");
    });

    $(".more-services:not(.mb-4.tech-talents)").click(function() {
        $(this).toggleClass("open");
        $(".more-content:not(.pt-4)").toggleClass("open");
        $(".more-services.mb-4.tech-talents").removeClass("open");
        $(".more-content.pt-4").removeClass("open");
    });

    $(".tabing").click(function() {
        var tab = $(this).data("tab");
        $(".tabing").removeClass("current");
        $(this).addClass("current");
        $(".accoContain").removeClass("current in");
        $("#" + tab).addClass("current in");
    });

    $(".tap-content").click(function(event) {
        event.stopPropagation(); // Prevent the click event from propagating to the document
        $(this).toggleClass("open");
        $(this).prev(".tap-click").toggleClass("open");
    });

    $(".tap-click").click(function(event) {
        event.stopPropagation(); // Prevent the click event from propagating to the document
        if ($(window).width() < 768) {
            var tapContent = $(this).next(".tap-content");
            var isTabing = $(this).hasClass("tabing");

            if (!isTabing) {
                tapContent.toggleClass("open");
                tapContent.slideToggle();
            }
        }
    });

    $(window).resize(function() {
        if ($(window).width() >= 768) {
            $(".tap-content").show();
        } else {
            $(".tap-content").hide();
            $(".tap-click").removeClass("open");
        }
    });
});