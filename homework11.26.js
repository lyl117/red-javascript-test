
// 내장함수

// window 객체 
// - 옛날에는 주로 var를 사용했지만, 요즈은 window.변수명 이렇게 명시화해서 사용.
window.v3 = 'c'
// 이런식으로 앞에 window 를 써줘야 한다.
// 윈도우는 global안에 무조건 들어간다.

// window 객체 안으로 function 만들기 
function f1() {}
const condition3 = f1 === window.f1;

// - 원래는 function이 → 
const membersRead = function() {
  return members;
}; 
//이런식으로 사용이 된다. → 하지만 윈도우 객체 안으로 function을 만들 때는 그냥 function 적어주면 된다.
// - 결국 f1 과 window.f1은 같다.

confirm, alert, console.log

if (window.confirm('진행 하시겠습니까?')) { 
  // -> 창 띄워주기
  window.console.log('진행'); 
  // -> true
// console 과 alert 그리고 confirm 이 있다. 
// true건 false건 console과 alert 둘 중 하나를 사용해주면 된다. 

} else {
  window.alert('멈춤');
  // -> false 
}
// window 안에 요소들은 window. 생략 가능

// json
const string1 = '[1, 2, 3]';
// 배열이지만 문자로 들어간다.
const array1 = JSON.parse(string1);
// parse 는 인수로 전달받은 문자열을 숫자로 자바스크립트 객체로 변환하여 변환한다.
const string2 = JSON.stringify(array1);
// stringfy는 다른 사람과 통신할 때는 다시 문자로 바꿔준다.

sessionStorage, localStorage
// - 브라우저에서 사용하는 DB로, 쿠키와 비슷하다고 생각하면 된다.
// - 주로 로그인 파트에서 쿠키가 사용되고, 나머지는 주로 많이sessionStorage 나 localStorage 가 사용된다. 
// 세션스토리지와 로컬스토리지는 같기 때문에 이름만 바꿔서 사용하면 된다.

sessionStorage CRUD
// storageGet Create 
sessionStorage.setItem('ss1',1);
sessionStorage.setItem('ss2', '이');
sessionStorage.setItem('ss3',undefined);

// storageGet Read
const ss1 = sessionStorage.getItem('ss1');
const ss2 = sessionStorage.getItem('ss2');
const ss3 = sessionStorage.getItem('ss3');

// storageGet Update
sessionStorage.setItem('ss1', [1,2,3]);
sessionStorage.setItem('ss2',{
  key1: 'value1'
});
sessionStorage.setItem('ss3', function() {});

// delete
sessionStorage.removeItem('ss1');
// 하나씩 제거함.
sessionStorage.clear();
// 모두 다 제거함.

// sessionStorage 저장기간 : 새로고침 해도 남아있지만, 해당 탭이 닫히면 사라진다.
// localStorage 저장기간 : 영구 보관이 기본이나, 브라우저에 따라 모바일 환경에 따라 다르다.용량은 5MB까지
// ❔ `sessionStorage`를 `localStorage` 변경하여 확인 하기
// - ⇒ 똑같다.
// 마지막 sessionStorage.clear는 완전 전체 삭제를 의미한다.

json을 사용해 sessionStorage에 배열 넣기 

const storageGet = sessionStorage.getItem('array2');
// array2를 불러 storageGet에 null 값이 뜬다.
const storageLogical = storageGet || '[1, 2, 3]';
// storageLogical 에 storageGet이 true면 스토리지겟 값을 넣는다.false면 '[1,2,3]'값이 들어간다.
const array2 = JSON.parse(storageLogical);
// '[1,2,3]'을 숫자로 바꾼다.
const plus1 = array2.length + 1;
// '[1,2,3]' length는 3인데 3+ 1= 4 를 추가한다.
array2.push(plus1);
// 4를 추가한다.
const storageSet = JSON.stringify(array2);
// 다시 문자화한다.
sessionStorage.setItem('array2', storageSet);
// "[1,2,3,4]" 을 넣는다. 

//새로고침 할 경우 1씩 계속 배열안에 늘어난다. (" " 안에 있기 때문에 문자열이다)