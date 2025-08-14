document.addEventListener('DOMContentLoaded', () => {
    // 1. setTimeout (타이머)
    setTimeout(() => {
        console.log("3초 후 실행");
        document.body.innerHTML += "<p>⏰ 3초 후 실행됨!</p>";
    }, 3000);
    setTimeout(() => {
        const button = document.querySelector('#my');

        console.log("버튼:", button); // 요소가 제대로 잡히는지
        button.addEventListener("click", () => {
            console.log("버튼 클릭됨");
            document.body.innerHTML += "<p>🖱️ 버튼 클릭됨!</p>";
        });
    }, 3000);

    // 2. fetch (실제 작동하는 주소로 변경)
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            console.log("데이터 받음:", data);
            document.body.innerHTML += "<p>📡 데이터 받음: " + data.title + "</p>";

        })
        .catch(error => {
            console.log("에러:", error);
            document.body.innerHTML += "<p>❌ 에러 발생</p>";
        });



})
