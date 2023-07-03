// qna 데이터 삽입
let mainQuestion = document.querySelector(".qna");
for (let i = 0; i < qnaAry.length; i++) {
    mainQuestion.innerHTML += `
    <div class="question">
        Q. ${qnaAry[i].question}
        <i class="fa fa-angle-down fa-2x" aria-hidden="true"></i>
        <div class="answer answer-none">
        ${qnaAry[i].answer}
        </div>  
    </div>`;
}
// qna 탭메뉴 이벤트
$(".faq-selected nav ul li").on("click", function () {
    $(".faq-selected nav ul li").removeClass("on");
    $(this).addClass("on");

});
$(".faq-selected nav ul li").eq(0).on("click", function () {
    mainQuestion.innerHTML = "";
    for (let i = 0; i < qnaAry.length; i++) {
        mainQuestion.innerHTML += `
        <div class="question">
            Q. ${qnaAry[i].question}
            <i class="fa fa-angle-down fa-2x" aria-hidden="true"></i>
            <div class="answer answer-none">
            ${qnaAry[i].answer}
            </div>  
        </div>`;
    }
    arrowToggle();
});
$(".faq-selected nav ul li").eq(1).on("click", function () {
    mainQuestion.innerHTML = "";
    for (let i = 0; i < qnaAry.length; i++) {
        if (qnaAry[i].type == "order") {
            mainQuestion.innerHTML += `
            <div class="question">
                Q. ${qnaAry[i].question}
                <i class="fa fa-angle-down fa-2x" aria-hidden="true"></i>
                <div class="answer answer-none">
                ${qnaAry[i].answer}
                </div>  
            </div>`;
        }
    }
    arrowToggle();
});
$(".faq-selected nav ul li").eq(2).on("click", function () {
    mainQuestion.innerHTML = "";
    for (let i = 0; i < qnaAry.length; i++) {
        if (qnaAry[i].type == "coupone") {
            mainQuestion.innerHTML += `
            <div class="question">
                Q. ${qnaAry[i].question}
                <i class="fa fa-angle-down fa-2x" aria-hidden="true"></i>
                <div class="answer answer-none">
                ${qnaAry[i].answer}
                </div>  
            </div>`;
        }
    }
    arrowToggle();
});
$(".faq-selected nav ul li").eq(3).on("click", function () {
    mainQuestion.innerHTML = "";
    for (let i = 0; i < qnaAry.length; i++) {
        if (qnaAry[i].type == "other") {
            mainQuestion.innerHTML += `
            <div class="question">
                Q. ${qnaAry[i].question}
                <i class="fa fa-angle-down fa-2x" aria-hidden="true"></i>
                <div class="answer answer-none">
                ${qnaAry[i].answer}
                </div>  
            </div>`;
        }
    }
    arrowToggle();
});

function arrowToggle() {
    // 화살표 이벤트
    let angle = document.querySelectorAll(".question .fa-angle-down");
    for (let i = 0; i < angle.length; i++) {
        angle[i].addEventListener("click", function () {
            this.nextElementSibling.classList.toggle("answer-none");
            if (this.classList.contains("fa-angle-down")) {
                this.classList.replace("fa-angle-down", "fa-angle-up");
            }
            else {
                this.classList.replace("fa-angle-up", "fa-angle-down");
            }
        });
    }
}

// 공지사항 데이터 삽입
let noticeSelected = document.querySelector(".notice-selected");
for (let i = 0; i < noticeAry.length; i++) {
    noticeSelected.innerHTML += `
    <div class="notice-box">
        <p>${noticeAry[i].no}</p>
        <h4>${noticeAry[i].title}</h4>
        <p>${noticeAry[i].date}</p>
    </div>
    `;
}

// 공지사항 버튼 클릭
$(".select-item").on("click", function () {
    $(".select-item").removeClass("on");
    $(this).addClass("on");
});
$(".select-item").eq(0).on("click", function () {
    $(".notice-selected").css({ display: "none" });
    $(".faq-selected").css({ display: "block" });
});
$(".select-item").eq(1).on("click", function () {
    $(".notice-selected").css({ display: "block" });
    $(".faq-selected").css({ display: "none" });
});
arrowToggle();
