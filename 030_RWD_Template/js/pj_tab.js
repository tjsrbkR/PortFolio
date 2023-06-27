// DOM 객체 탭메뉴 갯수를 콘솔에 출력
var tab = $("#menu_gnb").find("li");

var tabImg = $("section div");
// event Listner
function tab_menu(num) {
    var i;
    for (i = 0; i < tab.length; i++) {
        if (num == i) {
            // a-1. active 클래스 적용
            tab.eq(i).addClass("active");
            // b-1. 해당 콘텐츠 보여주기
            tabImg.eq(i).show();
        }
        else {
            // a-2. active 클래스 적용
            tab.eq(i).removeClass("active");
            // b-2. 나머지 콘텐츠 가리기
            tabImg.eq(i).hide();
        }
    }
}