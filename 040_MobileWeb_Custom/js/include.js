$('.footer').load('./include/footer.html', function () {
    $("a").on("click", function (e) {
        e.preventDefault();
    })
});
$('.header').load('./include/header.html', function () {
});