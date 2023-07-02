$(".tab ul li").on("click", function () {
    $(".tab ul li").removeClass("on");
    $(this).addClass("on");
});

let tabMenu = document.querySelectorAll(".tab ul li");
let mileage = document.querySelector(".mileage");
let service = document.querySelector(".service");
let cupone = document.querySelector(".cupone");
service.style.display = "none";
cupone.style.display = "none";
for (let i = 0; i < tabMenu.length; i++) {
    tabMenu[i].addEventListener("click", function () {
        mileage.style.display = "none";
        service.style.display = "none";
        cupone.style.display = "none";
        if (i == 0) {
            mileage.style.display = "block";
        }
        else if (i == 1) {
            service.style.display = "block";
        }
        else {
            cupone.style.display = "block";
        }
    })
}

