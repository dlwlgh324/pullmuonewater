$(document).ready(function () {

    //모달창
    let modal = $('.modal');
    let modal_cont = $('.modal-cont');
    let modal_close = $('.modal-close');
    let modal_show = $('.modal-show');

    // modal_close클릭 시 modal 사라지기
    modal_close.click(function () {
        modal.fadeOut();
    });

    //modal클릭 시 modal사라지기
    modal.click(function () {
        modal.fadeOut();
    });

    //.modal-cont 를 마우스로 클릭하면 사라지지않기
    modal_cont.click(function (event) {
        event.stopPropagation();
    });

    //modal-show href막기 & 사라지게하기
    modal_show.click(function (event) {
        event.preventDefault();
        modal.fadeOut();
    });



    let header_menu_list = $('.header-menu-list')
    let header_menu_list_li = $('.header-menu-list>li');
    let gnb_bg = $('.gnb-bg');
    let sub_menu = $('.sub-menu');

    $.each(header_menu_list_li, function (index, item) {
        $(this).mouseenter(function () {
            $(this).find('.sub-menu').show();
            // gnb_bg.stop().slideDown('fast');   
            gnb_bg.addClass('gnb-bg-active');
        });

        $(this).mouseleave(function () {
            $(this).find('.sub-menu').hide();
            gnb_bg.removeClass('gnb-bg-active');
        });
    });

    let family_bt = $('.family-bt');
    let family_site_box = $('.family-site-box');

    family_bt.click(function () {
        family_site_box.stop().slideToggle();
    });

    // all menu
    let all_bt = $('.all-bt');
    let all_close = $('.all-close');
    let depth_1 = $('.depth1');

    all_bt.click(function (event) {
        event.preventDefault();
        depth_1.show();
        all_bt.hide();
        all_close.show();
    });

    all_close.click(function (event) {
        event.preventDefault();
        depth_1.hide();
        all_bt.show();
        all_close.hide();
    });
});