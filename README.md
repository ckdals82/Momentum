

##  Momentum
바닐라🍦JS를 이용한 웹앱
- Go to result https://ckdals82.github.io/Momentum/

<hr>

## ⚙ 기능

- 새로고침 데이터 유지
- 사용자 이름 입력시 인사(greeting.js)
- 시계 기능 (clock.js)
- 배경 화면 변화 (bg.js)
- To Do list 기능 (todo.js)
<hr>

## ⌨️기능 구현

greeting.js (인사 기능)<br>
-사용자가 이름을 넣으면 입력받은 사용자 이름을 활용하여 hello 사용자 이름 출력<br>
-입력 받은 내용을 기억하고 있어야 새로고침시에도 초기화 되지 않아야 하므로 로컬 스토리지 사용<br>
-로컬 스토리지 : 자바스크립트의 작은 정보들(데이터 set)을 Object 형태의 key와 value 묶음으로 브라우저 local storage에 저장 (새로고침 해도 그대로 남아 있음)<br>
<br>
clock.js (시계 기능)<br>
-시계 기능구현은 현재의 시간을 계속 가져와서 업데이트 하면 된다.<br>
-특정 클래스, 태그 html 돔으로 가져오기<br>


getTime 시간 가져오기<br>
-setInterval 1000 밀리세컨(1초)에 한번씩 getTime 콜백 함수 실행(즉, 업데이트)<br>
<br>

todo.js (todolist 기능)<br>
-init 초기화 함수 (기본 화면 출력, submit 요청)<br>
-greeting과 다르게 따로 받고 표시하는 과정이 다른 시간에 있을 필요는 없으므로 같은 화면에 input과 출력을 모두 표시<br>

출력은 ul 태그 안에 li를 넣어서 표현<br>
로컬 스토리지 사용하여 저장 삭제<br>
<br>
bg.js (배경화면 랜덤화)<br>
-초기화 init<br>
-img 개수 지정, dom으로 가져오기<br>
<br>
getRandom 함수 (랜덤 숫자 뽑기 함수)<br>
-내장함수 Math 활용<br>
-random 0.0000000000 ~ 1.00000000000 사이의 숫자를 random하게 내보냄 (자리수는 정확하지 않음)<br>
-그래서 보통 해당 숫자를 만들기 위해서 floor버림 , ceil올림을 통해서 자리수를 만들고, *를 통해서 범위를 정함<br>

