// 메인슬라이드
// 요소 선택
const slider = document.querySelector('.slider');
const imgSlide = document.querySelector('.img_slide');
const imgItems = document.querySelectorAll('.img_slide > li');
const ctrlBtn = document.querySelector('.ctrl_btn');
const ctrlItems = document.querySelectorAll('.ctrl_btn > li > a');

// 변수 선언
const imgWidth = imgItems[0].offsetWidth; // 이미지의 가로 길이
const slideCount = imgItems.length; // 이미지 개수
const slideDuration = 3000; // 슬라이드 지속 시간
const slideInterval = setInterval(nextSlide, slideDuration); // 슬라이드 자동 재생
let currentIndex = 0; // 현재 슬라이드 인덱스
let slideTimer = null; // 슬라이드 타이머

// 컨트롤 버튼 이벤트 등록
ctrlBtn.addEventListener('click', function(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'A') {
    return;
  }
  const index = Array.from(ctrlItems).indexOf(e.target);
  goToSlide(index);
  pauseSlide();
});

// 이전 슬라이드 보여주기 함수
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slideCount - 1;
  }
  goToSlide(currentIndex);
}

// 다음 슬라이드 보여주기 함수
function nextSlide() {
  if (currentIndex < slideCount - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  goToSlide(currentIndex);
}

// 슬라이드 이동 함수
function goToSlide(index) {
  imgSlide.style.transform = `translateX(-${index * imgWidth}px)`;
  Array.from(ctrlItems).forEach((ctrlItem) => {
    ctrlItem.classList.remove('active');
  });
  ctrlItems[index].classList.add('active');
  currentIndex = index;
}

// 슬라이드 자동 재생 함수
function playSlide() {
  slideTimer = setInterval(nextSlide, slideDuration);
}

// 슬라이드 일시 정지 함수
function pauseSlide() {
  clearInterval(slideTimer);
  slideTimer = null;
}

// 슬라이드 자동 재생
playSlide();

// 이벤트 자동슬라이드
// 자동 슬라이드 기능을 위한 변수 선언
let slideIndex = 0;
const slides = document.querySelectorAll("#e_banner .flex li");
const totalSlides = slides.length;

// 첫 번째 슬라이드 표시
slides[0].classList.add("show");

// 자동 슬라이드 함수
function autoSlide() {
  // 현재 슬라이드 숨기기
  slides[slideIndex].classList.remove("show");
  // 다음 슬라이드 인덱스 계산
  slideIndex = (slideIndex + 1) % totalSlides;
  // 다음 슬라이드 표시
  slides[slideIndex].classList.add("show");
}

// 3초마다 자동 슬라이드 실행
setInterval(autoSlide, 3000);

//모달 서식
$(function(){
  const clothes = $('.sort_con li');

  clothes.click(function(){
    $(this).find('.modal').show();
  });

  const modal_exitbtn = $('.modal_exit');

  modal_exitbtn.click(function(){
    $(this).parent().parent().fadeOut();
  });
});