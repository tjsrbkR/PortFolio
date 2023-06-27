var video = $("#mont_video");
var btn = $("#mont_btn");
$("a").on("click", function (e) {
    e.preventDefault();
})
btn.on("click", function () {
    // 제이쿼리로 재생버튼 클릭시 재생하고 멈추기
    if (video.get(0).paused) {
        video.get(0).play();
        btn.html(' <i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
    }
    else {
        video.get(0).pause();
        btn.html(' <i class="fa fa-play-circle-o" aria-hidden="true"></i>');
    }
})
$(".answer").hide();
// $(".question").on("click", function () {
//     $(this).parent().next().slideToggle();
// });
$(".question_box").on("click", function () {
    $(this).next().slideToggle();
    var classList = $(this).children().attr("class");
    if (classList.match('fa fa-angle-down')) {
        $(this).find("i").removeClass("fa-angle-down");
        $(this).find("i").addClass("fa-angle-up");
    }
    else {
        $(this).find("i").removeClass("fa-angle-up");
        $(this).find("i").addClass("fa-angle-down");
    }
});
var listTab = $(".about_us_li span");
listTab.next().hide();
listTab.eq(0).next().show();

listTab.on("click", function () {
    listTab.removeClass("on");
    $(this).addClass("on");
    if ($(this).attr("class").match("on")) {
        listTab.next().fadeOut();
        $(this).next().fadeIn();
    }
});
$(".about_img_box").eq(0).css({ opacity: "1" });
listTab.eq(0).on("click", function () {
    $(".circle").css({ left: "13%", transition: "all 0.5s" });
    $(".about_img_box").css({ opacity: "0" });
    $(".about_img_box").eq(0).css({ opacity: "1" });
})
listTab.eq(1).on("click", function () {
    $(".circle").css({ left: "44%", transition: "all 0.5s" });
    $(".about_img_box").css({ opacity: "0" });
    $(".about_img_box").eq(1).css({ opacity: "1" });
})
listTab.eq(2).on("click", function () {
    $(".circle").css({ left: "76%", transition: "all 0.5s" });
    $(".about_img_box").css({ opacity: "0" });
    $(".about_img_box").eq(2).css({ opacity: "1" });
})


