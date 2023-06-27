const video = $("video");
// $("article").on("mouseover", function () {
//     $(this).stop().animate({ width: "70%" }, 300);
//     $(this).find("video").get(0).play();
//     console.log(1)
// });
$("article").on("mouseover", function () {
    // $(this).stop().animate({ width: "70%", left: "1" }, 300);
    // $(this).find("video").get(0).play();
    $(this).eq(0).stop().animate({ width: "64%" }, 300);
    $(this).find("video").get(0).play();
});
$("article").eq(0).on("mouseover", function () {
    // $(this).stop().animate({ width: "70%", left: "1" }, 300);
    // $(this).find("video").get(0).play();
    $(this).eq(0).stop().animate({ width: "100%" }, 300);
    $(this).find("video").get(0).play();
});
$("article").eq(1).on("mouseover", function () {
    // $(this).stop().animate({ width: "70%", left: "1" }, 300);
    // $(this).find("video").get(0).play();
    $(this).eq(0).stop().animate({ width: "85%" }, 300);
    $(this).find("video").get(0).play();
});
$("article").eq(2).on("mouseover", function () {
    // $(this).stop().animate({ width: "70%", left: "1" }, 300);
    // $(this).find("video").get(0).play();
    $(this).eq(0).stop().animate({ width: "75%" }, 300);
    $(this).find("video").get(0).play();
});

$("article").on("mouseleave", function () {
    $(this).stop().animate({ width: "12%" }, 300);
    $(this).find("video").get(0).pause();
});