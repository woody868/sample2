console.log("연결");
let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
    console.log("버튼1 클릭");
});

function greet(name) {
    return `안녕하세요, ${name}님!`;
}

console.log(greet("이해주"));  // 콘솔을 통해 호출

