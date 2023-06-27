// 1. 초기값 설정 | 함수 호출후 변수값 1을 만들기 위해 0으로 세팅
var slideIndex = 0;

// 3.자동슬라이드 실행함수 호출
autoSlide();


// 2.자동 슬라이드 실행함수
function autoSlide() {
    // a. 변수선언
    var i;
    var slide = $(".slide");
    var dot = $(".dot");
    // b. 로딩시 슬라이드 이미지 모두 가리기
    for (i = 0; i < slide.length; i++) {
        slide.eq(i).stop().hide();
    }



    // c.slideIndex 동적으로 세팅
    slideIndex++;
    // d. 데이터 유효성 코딩 : 슬라이드 이미지 갯수보다 slideIndex 초과하면 1로 값 세팅
    if (slideIndex > slide.length) {
        slideIndex = 1;
    }
    // e. 첫번쨰 슬라이드 이미지 보이도록 코딩
    slide.eq(slideIndex - 1).css({ display: 'block' });
    // f. 첫번쨰 도트에 컬러 보이도록 코딩
    dot.eq(slideIndex - 1).css({ backgroundColor: '#20727d' });
    dot.eq(slideIndex - 2).css({ backgroundColor: '#ccc' });

    // 2초 마다 새로고침(재귀호출)
    setTimeout(autoSlide, 2000);



}

