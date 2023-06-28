// Video 제어버튼 CSS
// 피규어 중에 모든버튼을 찾고 css를 적용
$('figure').find('button').css({
    position: 'absolute',
    right: '400px',
    top: '50px',
    cursor: 'pointer',
    background: 'none',
    outline: 'none'
});
$("figure").find("i").css({
    fontSize: "30px",
    color: "#fff"
});
$("figure").find("button").eq(0).css({
    right: "540px"
});
$("figure").find("button").eq(1).css({
    right: "470px"
});

// Video 제어 스크립트
const video = $("video")
let plag = 0;
$("figure").find("button").eq(0).click(function () {
    if (plag == 0) {
        video.get(0).play();
        plag = 1;
        $("figure").find("button").eq(0).children("i").removeClass("fa-play-circle-o")
        $("figure").find("button").eq(0).children("i").addClass("fa-pause-circle-o")
    }
    else if (plag == 1) {
        video.get(0).pause();
        $("figure").find("button").eq(0).children("i").removeClass("fa-pause-circle-o")
        $("figure").find("button").eq(0).children("i").addClass("fa-play-circle-o")
        plag = 0;
    }
    console.log(plag)
});
// $("figure").find("button").eq(1).click(function () {
// });
$("figure").find("button").eq(1).click(function () {
    plag = 0;
    $("figure").find("button").eq(0).children("i").removeClass("fa-pause-circle-o")
    $("figure").find("button").eq(0).children("i").addClass("fa-play-circle-o")
    video.get(0).load();
});