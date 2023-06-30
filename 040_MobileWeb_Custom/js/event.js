$(".tab ul li").on("click", function () {
    $(".tab ul li").removeClass("on");
    $(this).addClass("on");
});
let itemBox = document.getElementById("item-box");

// 카드 아이템 이벤트 호출
loadCard();
// json 형태로 카드 아이템 삽입


//  셀렉박스 정렬 이벤트
function up() {
    itemBox.innerHTML = "";
    let select = document.getElementById("selectbox");
    let ary = [];
    for (let i = 0; i < itemArry.length; i++) {
        ary.push(i);
    }
    if (select.value == 1) {
        ary.sort();
    }
    else {
        ary.sort(function (a, b) {
            if (a < b) return 1;
            if (a > b) return -1;
            if (a === b) return 0;
        });
    }
    for (let i = 0; i < ary.length; i++) {
        itemBox.innerHTML += ` 
        <div class="item">
        <div class="item-img">
            <img src="${itemArry[ary[i]].src}" alt="아이템이미지${i}">
        </div>
            <h3>${itemArry[ary[i]].title}</h3> 
            <p>${itemArry[ary[i]].day}</p>
        </div>`;
    }

}
// 탭 메뉴 이벤트
$(".tab ul li").eq(0).on("click", function () {
    itemBox.innerHTML = "";
    loadCard();
});
$(".tab ul li").eq(1).on("click", function () {
    itemBox.innerHTML = "";
    for (let i = 0; i < itemArry.length; i++) {
        if (itemArry[i].type == "single") {
            itemBox.innerHTML +=
                `<div class="item">
                <div class="item-img">
                    <img src="${itemArry[i].src}" alt="아이템이미지${i}">
                </div>
                    <h3>${itemArry[i].title}</h3> 
                    <p>${itemArry[i].day}</p>
                </div>`;
        }
    }
});
$(".tab ul li").eq(2).on("click", function () {
    itemBox.innerHTML = "";
    for (let i = 0; i < itemArry.length; i++) {
        if (itemArry[i].type == "Benefits") {
            itemBox.innerHTML +=
                `<div class="item">
                <div class="item-img">
                    <img src="${itemArry[i].src}" alt="아이템이미지${i}">
                </div>
                    <h3>${itemArry[i].title}</h3> 
                    <p>${itemArry[i].day}</p>
                </div>`;
        }
    }

});

// 카드 데이터 삽입 함수
function loadCard() {
    let html = "";
    for (let i = 0; i < itemArry.length; i++) {
        html = "";
        html = `
        <div class="item">
            <div class="item-img">
                <img src="${itemArry[i].src}" alt="아이템이미지${i}">
            </div>
            <h3>${itemArry[i].title}</h3> 
            <p>${itemArry[i].day}</p>
        </div>`;
        itemBox.innerHTML += html;
    }
}