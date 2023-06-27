window.onscroll = function () {
    progressBar()
};
// 상단 스크롤 게이지
function progressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementsByClassName("progress-bar")[0].style.width = scrolled + "%";
}
$("a").on("click", function (e) {
    e.preventDefault();
})
// 혜택
$(".top_sub p").on("click", function () {
    $("#wrap aside").toggle();
});
// 카드 이벤트
$(".infochamp").hide();
var champ = $(".md_pick_area ul li");
$(champ).on("mouseenter", function () {
    var divText = this.lastElementChild.lastElementChild;
    $('#curtain').stop().fadeIn();
    divText.style.opacity = "1";
})
$(champ).eq(0).on("click", function () {
    $('#curtain').stop().fadeIn();
    $(".kazix").stop().fadeIn();
})
$(champ).eq(1).on("click", function () {
    $(".reksai").stop().fadeIn();
    $('#curtain').stop().fadeIn();
})
$(champ).eq(2).on("click", function () {
    $('#curtain').stop().fadeIn();
    $(".kasadin").stop().fadeIn();
})
$(".infochamp i").on("click", function () {
    $(".infochamp").stop().fadeOut();
    $('#curtain').fadeOut()
})
$(".md_pick li").on("mouseleave", function () {
    $('#curtain').fadeOut()
    $(".md_pick_area div").css({ opacity: "0" })


});
// 카드 호버 셀로판지
// real_title
var realTime = $(".real_time ul li");

$(".zed").show();
var video = $(".real_time_video video");
$(realTime).eq(1).on("mouseenter", () => {
    $(video).css("display", "none");
    $(".mobile-store").css("display", "block");
});
$(realTime).eq(2).on("mouseenter", () => {
    $(video).css("display", "none");
    $(".create").css("display", "block");
});
$(realTime).eq(3).on("mouseenter", () => {
    $(video).css("display", "none");
    $(".update").css("display", "block");
});
$(realTime).eq(4).on("mouseenter", () => {
    $(video).css("display", "none");
    $(".esports").css("display", "block");
});
$(realTime).eq(5).on("mouseenter", () => {
    $(video).css("display", "none");
    $(".sinematic").css("display", "block");
});
$(realTime).on("mouseleave", () => {
    $(video).css("display", "none");
    $(".zed").css("display", "block");
});


$(".caxa_sns ul li").on("click", function () {
    document.querySelector(".background").className = "background show";
    for (let i = 0; i < $(".caxa_sns ul li").length; i++) {
        if (this.firstElementChild.alt == (i + 1)) {
            // data.js 에 있는 제이슨 형태 데이터 삽입
            $("#world_img").attr("src", world[i].img);
            $(".world_explanation").text(world[i].story);
        }
    }
});






function close() {
    document.querySelector(".background").className = "background";
}
function show() {
    document.querySelector(".background").className = "background show";
}


$(".background").on("click", close);

// 모달창 