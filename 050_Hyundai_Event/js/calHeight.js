$(function () {
    // 브라우저 너비 높이값 변수 할당
    var browserWidth = $(window).width();
    var browserHeight = $(window).height();
    // DOM객체에 동적 높이값 적용
    $("#wrap").css({ height: browserHeight });
});