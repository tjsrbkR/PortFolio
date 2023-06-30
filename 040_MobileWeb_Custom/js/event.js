$(".tab ul li").on("click", function () {
    $(".tab ul li").removeClass("on");
    $(this).addClass("on");
});
let itemBox = document.getElementById("item-box");
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