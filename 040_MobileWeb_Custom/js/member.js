$(".tab ul li").on("click", function () {
    $(".tab ul li").removeClass("on");
    $(this).addClass("on");
});