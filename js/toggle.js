/* sample js */
/* js/toggle.js */
$(".site-toggle-switch").find('input').click(function() {
    $(this).parents('.site-toggle-switch').toggleClass('toggled');
})