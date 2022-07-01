const quotes = [
  {
    quote: "영원히 살 것처럼 꿈꾸고 오늘 죽을 것처럼 살아라.",
    author: "제임스 딘",
  },
  {
    quote: "오늘 할 수 있는 일을 내일로 미루지 마라.",
    author: "벤자민 프랭클린",
  },
  { quote: "그 여정이 바로 보상이다.", author: "스티브 잡스" },
  {
    quote: "아무런 위험없이 승리하는 것은 영광없는 승리에 다름 아니다.",
    author: "피에르 코르네유",
  },
  {
    quote: "나약한 태도는 성격도 나약하게 만든다.",
    author: "알버트 아인슈타인",
  },
  { quote: "성공하기까지는 항상 실패를 거친다.", author: "미키 루니" },
  {
    quote: "어떤 재능 혹은 다른 재능으로 뛰어난 사람이 될 수 있도록 노력하라.",
    author: "세네카",
  },
  {
    quote: "천재란 자신에게 주어진 일을 하는 재능 있는 사람일 뿐이다.",
    author: "토마스 A. 에디슨",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
