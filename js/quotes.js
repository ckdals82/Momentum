const quotes = [
  {
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
    author: "앙드레 말로",
  },
  {
    quote: "예의는 남과 화목함을 으뜸으로 삼는다. ",
    author: "논어",
  },
  {
    quote: "두려움 때문에 갖는 존경심만큼 비열한 것은 없다.  ",
    author: "카뮈",
  },
  {
    quote:
      "사랑은 두 사람이 마주 쳐다보는 것이 아니라 함께 같은 방향을 바라보는 것이다.",
    author: "생텍쥐페리",
  },
  {
    quote: "힘 있을 때 친구는 친구가 아니다.",
    author: "헨리 애덤스",
  },
  {
    quote:
      "미래는 일하는 사람의 것이다. 권력과 명예도 일하는 사람에게 주어진다. 게으름뱅이의 손에 누가 권력이나 명예를 안겨줄까.",
    author: "힐티",
  },
  {
    quote:
      "당신이 자신은 2위로 만족한다고 일단 말하면, 당신의 인생은 그렇게 되기 마련이라는 것을 나는 깨달았다.",
    author: "존 F. 케네디",
  },
  {
    quote: "무례한 사람의 행위는 내 행실을 바로 잡게 해주는 스승이다.",
    author: "공자",
  },
  {
    quote:
      "재물을 스스로 만들지 않는 사람에게는 쓸 권리가 없듯이 행복도 스스로 만들지 않는 사람에게는 누릴 권리가 없다.",
    author: "버나드 쇼",
  },
  {
    quote: "스스로를 신뢰하는 사람만이 다른 사람들에게 성실할 수 있다.",
    author: "Sheda Savage",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
// 메쓰 랜덤은 0~1 사이의 랜덤숫자
// 여기다가 array 길이를 곱했어 즉 10이겠지
// 그리고 나서 메쓰 플로어 준거임 9.8이 나오면 9겠지
