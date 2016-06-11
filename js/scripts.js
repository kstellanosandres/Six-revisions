$(function() {
    var $toggle = $('.toggle-menu');
    var $menu = $('.menu');
    $toggle.on('click', function() {
        $menu.slideToggle();
    });
});
