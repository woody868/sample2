// 콜백함수 테스트 영역 찾기
const callbackSection = document.querySelector('h1'); // 첫 번째 h1 (콜백함수 테스트)

// 먼저 출력되는 내용
callbackSection.insertAdjacentHTML('afterend', '<p>먼저 출력됨, 3초 뒤에 안녕뜸.</p>');

// 3초 후 실행되는 콜백함수
setTimeout(() => {
    // "먼저 출력됨" 다음에 "안녕!" 추가
    const 먼저출력됨 = document.querySelector('p'); // 첫 번째 p 태그 찾기
    먼저출력됨.insertAdjacentHTML('afterend', '<p>안녕!</p>');
}, 3000);