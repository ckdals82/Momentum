const title = document.querySelector(".hello h1");

function handleTiltleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleTiltleClick);

//클래스명이 h1이라는 태그를 타이틀에 담아서 가져온것이고 --타이틀 엘리먼트를 찾을 방법을 이용한것
//핸들타이틀클릭이라는 함수를 만들고
//타이틀에 이벤트 리스너를 추가해 클릭 이벤트가 발생하면
//핸들타이틀클릭 이라는 함수가 실행되게끔

//내가 직접 실행버튼을 누르지 않고 javascript에 이 function 이름을 넘겨저서
//유저가 title을 click할 경우에 javascript가 나 대신 실행버튼을
//눌러주게 하는것

//여기 이 tltle이란 html element가 하나 있다고 가정하고
//addEventListener를 호출하고 listn하고 싶은 event이름을 알려줄거야~
//event가 발생하면 호출할 function을 전달해주면 돼
