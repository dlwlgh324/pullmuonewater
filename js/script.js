$(document).ready(function () {
    let family_bt = $('.family-bt');
    let family_site_box = $('.family-site-box');

    family_bt.click(function () {
        family_site_box.stop().slideToggle();
    });
});