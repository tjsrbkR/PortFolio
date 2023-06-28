// 스와이퍼 생성 | .swiper-container = 구조 Swiper 클래스
var swiper = new Swiper('.swiper-container', {
    /* a. 슬라이드 보이는 갯수 */
    slidesPerView: 1,
    /* b. 슬라이드 사이 간격 */
    spaceBetween: '1%',
    /* c. 슬라이드 반복 여부 */
    loop: true,
    /* d. 그룹수 맞추기 => 안 맞을경우 빈칸으로 채우기 여부 */
    loopFillGroupWidthBlank: false,
    /* e. 활성 슬라이드 항상 가운데 배치하기 */
    centeredSlides: true,
    autoplay: true,
    // 페이지, 넘버링
    pagination: {
        // 적용 구조에 코딩된 클래스명
        el: '.swiper-pagination',
        type: 'bullets',
        // bullets 적용후, 점박이 클릭시 해당 슬라이드로 링크여부
        clickable: true,
        type: 'fraction',
    },

    // 네비게이션 좌우 화살표
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // }
});


var swiper2 = new Swiper('.swiper', {
    /* a. 슬라이드 보이는 갯수 */
    slidesPerView: 1,
    /* b. 슬라이드 사이 간격 */
    spaceBetween: '12%',
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    // 페이지, 넘버링
    pagination: {
        // 적용 구조에 코딩된 클래스명
        // el: '.swiper-pagination',
        type: 'bullets',
        // bullets 적용후, 점박이 클릭시 해당 슬라이드로 링크여부
        clickable: true,
        type: 'fraction',
    },
    // freeMode: true,

});

var swiper3 = new Swiper('.swiper-product', {
    /* a. 슬라이드 보이는 갯수 */
    slidesPerView: 1,
    /* b. 슬라이드 사이 간격 */
    spaceBetween: '1%',

    scrollbar: {
        el: '.swiper-scrollbar',
    },
    // 페이지, 넘버링
    pagination: {
        // 적용 구조에 코딩된 클래스명
        // el: '.swiper-pagination',
        type: 'bullets',
        // bullets 적용후, 점박이 클릭시 해당 슬라이드로 링크여부
        clickable: true,
        type: 'fraction',
    },
    on: {
        slideChange: function () {
            $(".product .swiper-scrollbar").css({ opacity: "1" });
            setTimeout(() => {
                if ($(".product .swiper-scrollbar").css({ opacity: "1" })) {
                    $(".product .swiper-scrollbar").css({ opacity: "0", transition: "all 0.5s" });
                }
            }, 1000);
        },
    },
    freeMode: true,
});