$(".tab ul li").on("click", function () {
    $(".tab ul li").removeClass("on");
    $(this).addClass("on");
});
let item = document.querySelector(".item-box");
for (let i = 0; i < itemArry.length; i++) {
    item.innerHTML += `
        <div class="item">
            <div class="item-img">
                <img src="${itemArry[i].src}" alt="아이템이미지${i}">
            </div>
            <h3>${itemArry[i].title}</h3> 
            <p>${itemArry[i].day}</p>
        </div>`;
}
function up() {
    let select = document.getElementById("selectbox");

}   