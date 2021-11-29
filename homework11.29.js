

const queryString = new URLSearchParams(window.location.search);
// URLSearchParams 클래스의 window.location.search (html의 값으로 변환시킨것.)값을 쿼리스트링으로 쉽게 값을 가져올 수 있다. 
// 우리가 html 에서 값을 getelementbyname 을 적용하듯이, 쉽게 접근할 수 있다라는 뜻.
const q = queryString.get('q')|| '';
// script 상수에서 어디서든 사용 가능.
// = 앞에 값이 참이면 q값을 나타내고, 거짓이면(0,undefined.false nan) ''빈배열을 나타내라 라는 뜻.
const name = document.getElementsByName('q')[0];
// 검색창을 접근한다.
name.value =q;
// 그 검색창에 새로고침하면 q값이 들어가게 끔하기 위해 위의 답변을 만듬.
name.focus();
// 검색창에 검색선이 깜박이며 생긴다.

onst itemsRead = function(){
  if (items[key].name.indexOf(q) < 0) continue;
  // constinue는 맞지 않는 상황이라면 다음번으로 넘긴다라는 뜻. 
  // 아무것도 안들어오면, 배값이면 0, 귤이 들어오면 -1(배가 아니어서)
  // = if (items[key].name.indexOf(q) <= 0) continue;
  // indexof 자체가 못찾으면 -1, 찾으면 1임.
  // < 0 이 더 명확한 답변임.
  }
