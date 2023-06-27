$(".gnb li").on("mouseenter", function () {
    $(this).children(".submenu").stop().slideDown();
});
$(".gnb li").on("mouseleave", function () {
    $(this).children("div:visible").stop().slideUp();
});