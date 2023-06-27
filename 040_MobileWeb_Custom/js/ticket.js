$("#myBtn").on("click", myfunction);
//EventListner
function myfunction() {
    // 변수할당
    var dots = $("#dots");
    var moreButton = $("#more");
    var btnText = $("#myBtn");
    var result = $("#dots").css("display");
    console.log(result);
    // display가 none이라면 
    if (result == "none") {
        dots.css({ display: "inline" });
        btnText.text("+More");
        moreButton.css({ display: "none" });
    }
    else {
        dots.css({ display: "none" });
        btnText.text("-Close");
        moreButton.css({ display: "inline" });
    }
}