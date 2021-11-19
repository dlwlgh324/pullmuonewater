// html 이 준비가 되면 실행한다.
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


    // 위로가기 기능
    $('.go-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        });
    });

    //상단 고정 메뉴 기능
    let scroll_y = $(window).scrollTop();
    let header = $('.header');
    let body = $('body')
    $(window).scroll(function () {
        scroll_y = $(window).scrollTop();
        // 오른쪽에있는 스크롤바가 몇픽셀 내려왔는지
        if (scroll_y > 70) {
            header.addClass('header-fix');
            body.addClass('body-fix')
        } else {
            header.removeClass('header-fix');
            body.removeClass('body-fix');
        };
    });


    // 센터메뉴 기능
    let center_menu = $('.center-menu');
    let center_submenu = $('.center-submenu');

    center_menu.click(function (event) {
        event.preventDefault();
        center_submenu.stop().toggle();
        $(this).toggleClass('center-menu-active');
    });

    // 카테고리 리스트 메뉴 기능
    let category_list_more = $('.category-list-more');
    let category_list_2 = $('.category-list-2');

    category_list_more.click(function (event) {
        event.preventDefault();
        category_list_2.stop().toggle();
        $(this).toggleClass('category-list-more-active');
        see_more_list.hide();


        see_more_list.hide();
        see_more_bt_open.show();
        see_more_bt_close.hide();
    });

    //더보기 접기 기능
    let see_more_bt = $('.see-more-bt');
    let see_more_bt_open = $('.see-more-bt-open');
    let see_more_bt_close = $('.see-more-bt-close');
    let see_more_list = $('.see-more-list');

    see_more_bt.click(function (event) {
        event.preventDefault();
        see_more_list.toggle();
        see_more_bt_open.toggle();
        see_more_bt_close.toggle();


        category_list_2.hide();
        category_list_more.removeClass('category-list-more-active');

    });

    // visual slide
    let sw_visual = new Swiper('.sw-visual', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: ".sw-visual-next",
            prevEl: ".sw-visual-prev",
        },
        pagination: {
            el: ".sw-visual-pg",
            type: "fraction",
        },
    });

    //sw-visual 컨트롤
    //버튼을 저장한다.
    let sw_visual_bt = $('.sw-visual-bt');
    sw_visual_bt.click(function () {

        $(this).toggleClass('sw-visual-bt-play');
        //현재 아이콘 상태를 임시로 저장한다
        let temp = $(this).hasClass('sw-visual-bt-play');
        //자동실행하라
        if (temp == true) {
            sw_visual.autoplay.stop();
        } else {
            sw_visual.autoplay.start();
        }

    });

    // 알뜰 물품 슬라이드
    new Swiper('.sw-sales', {
        slidesPerView: 3,
        spaceBetween: 16,
        slidesPerGroup: 3,
        navigation: {
            nextEl: ".sw-sales-next",
            prevEl: ".sw-sales-prev",
        },
        pagination: {
            el: ".sw-sales-pg",
            type: "fraction",
        },
    });

    // 추천 슬라이드 관련
    new Swiper('.sw-pick', {
        slidesPerView: 3,
        spaceBetween: 16,
        slidesPerGroup: 3,
        navigation: {
            nextEl: ".sw-pick-next",
            prevEl: ".sw-pick-prev",
        },
        pagination: {
            el: ".sw-pick-pg",
            type: "fraction",
        },
    });

    // 인기물품 슬라이드 관련
    new Swiper('.sw-famous', {
        slidesPerView: 7,
        spaceBetween: 10,
        slidesPerGroup: 7,
        navigation: {
            nextEl: ".sw-famous-next",
            prevEl: ".sw-famous-prev",
        },
    });

    //famous를 위한 기능
    let famous_good_box = $('.famous .good-box');
    // 목록을 보여주는 버튼들
    let famous_icon = $('.sw-famous .swiper-slide>a');
    // 목록들
    let famous_good_list = $('.famous .good-list');
    famous_good_list.eq(0).show();

    $.each(famous_icon, function (index, item) {
        $(this).click(function (event) {
            // a 태그의 href를 막는다.
            event.preventDefault();
            famous_good_list.hide();
            famous_good_list.eq(index).show();
        });
    });

    //브랜드 슬라이드
    new Swiper('.sw-brand', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".sw-brand-next",
            prevEl: ".sw-brand-prev",
        },
        pagination: {
            el: ".sw-brand-pg",
            type: "fraction",
        },
    });

    //배너슬라이드
    new Swiper('.sw-banner', {
        slidesPerView: 2,
        slidesPerGroup: 1,
        loop: true,
        navigation: {
            nextEl: ".sw-banner-next",
            prevEl: ".sw-banner-prev",
        },
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
    });

    // recipe 슬라이드
    $(".recipe-con-scroll").niceScroll({
        cursoropacitymax: 0.4,
        cursorwidth: "0.8rem",
    });

    //리뷰 슬라이드
    new Swiper('.sw-review', {
        slidesPerView: 3,
        spaceBetween: 15,
        slidesPerGroup: 3,
        navigation: {
            nextEl: ".sw-review-next",
            prevEl: ".sw-review-prev",
        },
        pagination: {
            el: ".sw-review-pg",
            type: "fraction",
        },
    });

    // 장바구니 기능
    // 1  .recipe-con-item-bt 를 저장한다.
    let recipe_con_item_bt = $('.recipe-con-item-bt');
    // 2  .recipe-con-count 를 저장한다.
    let recipe_con_count = $('.recipe-con-count .count-recipe');
    let recipe_con_count_bt = $('.recipe-con-count-bt');
    // 3  .recipe-con-buy b 를 저장한다.
    let recipe_con_buy_b = $('.recipe-con-buy b');

    $.each(recipe_con_item_bt, function (index, item) {
        $(this).click(function () {
            $(this).toggleClass('recipe-con-item-bt-active');
            카운트();
        });
    });

    function 카운트() {
        //처음에 시작하면 가격을 표시해야한다.
        //그래서 선택을 하든 아니든 함수를 실행

        // hasClass('recipe-con-item-bt-active');
        // 1  총 몇개를 가지고 있는가?
        let total = 5;
        let minus = 0;

        // 전체 금액을 계산한다.
        let total_money = 0;

        $.each(recipe_con_item_bt, function (index, item) {
            let temp = $(this).hasClass('recipe-con-item-bt-active');
            if (temp == true) {
                minus = minus + 1;
            }
            // 속성(attribute) : class, href, src, alt=
            // 우리가 만든 속성 : data-money

            let temp_money = $(this).attr('data-money');
            // 글자를 숫자로 바꾸어야 한다.
            temp_money = parseInt(temp_money);

            if (temp == false) {
                total_money = total_money + temp_money;
            }

        });

        //가격을 표시한다
        전체금액 = total_money = total_money.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        recipe_con_buy_b.text(total_money + '원');

        total = total - minus;
        recipe_con_count.text('전체 선택 ' + total + '개');
        // recipe_con_count.text(`전체 선택 ${total}개`);

        if (total != 5) {
            recipe_con_count_bt.addClass('recipe-con-count-bt-active');
        } else {
            recipe_con_count_bt.removeClass('recipe-con-count-bt-active');
        }
    }
    // 처음에 시작하면 가격을 표시해야 한다.
    // 그래서 선택을 하든 아니든 함수를 실행
    카운트();

    recipe_con_count_bt.click(function () {
        $(this).toggleClass('recipe-con-count-bt-active');
        let temp = $(this).hasClass('recipe-con-count-bt-active');
        if (temp == true) {
            해제();
        } else {
            모두();
        }
        //금액을 다시 계산
        카운트();
    });

    function 해제() {
        $.each(recipe_con_item_bt, function (index, item) {
            $(this).addClass('recipe-con-item-bt-active');
        });
        recipe_con_count.text('전체 선택 0개');
    }

    function 모두() {
        $.each(recipe_con_item_bt, function (index, item) {
            $(this).removeClass('recipe-con-item-bt-active');
        });
        recipe_con_count.text('전체 선택 5개');
    }


    //공지사항 물품소식
    let tab_menu_1 = $('.tab-menu-1');
    let tab_menu_2 = $('.tab-menu-2');
    let com_news_list_1 = $('.com-news-list-1');
    let com_news_list_2 = $('.com-news-list-2');

    tab_menu_1.click(function (event) {
        event.preventDefault();
        com_news_list_1.show();
        com_news_list_2.hide();
        $(this).addClass('tab-menu-active');
        tab_menu_2.removeClass('tab-menu-active');
    });

    tab_menu_2.click(function (event) {
        event.preventDefault();
        com_news_list_2.show();
        com_news_list_1.hide();
        $(this).addClass('tab-menu-active');
        tab_menu_1.removeClass('tab-menu-active');
    });

    //패밀리사이트
    // .familysite
    // .family-close
    // .family-list > a
    let familysite = $('.familysite')
    let family_close = $('.family-close')
    let sitemap = $('.sitemap')
    let sitemap_a = $('.sitemap>a')

    sitemap.click(function (event) {
        //href막기
        event.preventDefault();
        familysite.stop().slideToggle();
        $(this).addClass('sitemap-active');
    });

    family_close.click(function () {
        familysite.stop().slideUp('fast');
        //색상빼기
        sitemap.removeClass('sitemap-active');
    });
});