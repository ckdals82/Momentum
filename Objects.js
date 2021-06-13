//오브젝트 선언 방법
const player = {
  name: "nico",
  points: 10,
  fat: true,
};

console.log(player);

//object의 조회방법
console.log(player.name);
//object의 다른 조회방법
console.log(player["name"]);

console.log(player);
//오브젝트 요소 업데이트 방법
player.fat = false;
console.log(player);

//오브젝트 요소 추가방법 //존재하지 않는 것도 추가가 가능하군
console.log(player);
player.lastname = "potato";
console.log(player);
