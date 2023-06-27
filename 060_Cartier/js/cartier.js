const video = $("video");
$("article").on("mouseover", function () {
    $(this).stop().animate({ width: "35%" }, 300);
    $(this).find("video").get(0).play();
});
$("article").on("mouseleave", function () {
    $(this).stop().animate({ width: "12%" }, 300);
    $(this).find("video").get(0).pause();
});