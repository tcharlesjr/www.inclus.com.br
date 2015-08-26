$(function () {
    var menu_s = $('#menu-s');
    menu = $('nav ul');
    menuHeight = menu.height();

    $(menu_s).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function () {
        var w = $(window).width();
        if (w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});