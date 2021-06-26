const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
//2자리수 ,앞자리에 0을 추가함
getClock(); //get clock을 호출하고
setInterval(getClock, 1000); //매초마다 get clock을 다시 실행하고 있음.
