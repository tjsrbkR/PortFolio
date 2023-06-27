var sliderIndex = 1;

function minusSlides(num) {
    sliderIndex += num;
    currentSlides();
}
function plusSlides(num) {
    sliderIndex += num;
    currentSlides();
}

function currentSlides() {
    var dot = $(".dot");
    var slider = $(".slide");
    if (sliderIndex > slider.length) {
        sliderIndex = 1;
    }
    $(".slide").hide();
    $(".slide").eq(sliderIndex - 1).show();
    if (sliderIndex < 1) {
        sliderIndex = slider.length;
    }

    $(dot).css({ backgroundColor: "#ccc" });
    $(dot).eq(sliderIndex - 1).css({ backgroundColor: "blue" });
}

