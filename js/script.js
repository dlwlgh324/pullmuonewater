$(document).ready(function () {
    let header_menu_list = $('.header-menu-list')
    let header_menu_list_li = $('.header-menu-list>li');
    let gnb_bg = $('.gnb-bg');
    let sub_menu = $('.sub-menu');

    $.each(header_menu_list_li, function (index, item) {
        $(this).mouseenter(function () {
            $(this).find('.sub-menu').show();
        });

        $(this).mouseleave(function () {
            $(this).find('.sub-menu').hide();
        });
    });

    header_menu_list.mouseenter(function () {
        gnb_bg.show();
    });

    header_menu_list.mouseleave(function () {
        gnb_bg.hide();
    });

    sub_menu.mouseleave(function () {
        gnb_bg.hide();
    });

    let family_bt = $('.family-bt');
    let family_site_box = $('.family-site-box');

    family_bt.click(function () {
        family_site_box.stop().slideToggle();
    });
});