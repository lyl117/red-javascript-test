// 내장 함수 

// 1. div태그 복사 
// =  div는 html에서 구간을 나눌 때 가장 많이 사용된다. 
// 문서상 큰 의미 없음
// <div id="tag-div-parent"></div>
// <div style="display: none;">
// 이 display: none이 있어야 템플릿인 child의 input,button들을 가릴 수 있다. 
// 템플릿(= 형태) 화면에 보여주고 싶지 않고, 복사해서 쓰기 위해서 부모에다가 display: none을 거는것,
// 회원을 보여주고 싶지 않은 것을 display: none을 거는 것, 템플릿인것을 숨겨놓는 역할 .
//  <div id="tag-div-child">
// getElementsByName(복수), getElementById(단수)
// 이 둘의 차이점은 name은 name명을 통해서 접근하며, 배열형태([](배열), '') 값을 얻어오며, 중복이 가능한다. = getElementsByName('name')[숫자]
// id는 id명을 통해서 접근하며, 중복이 불가능하며, 하나의 object를 반환한다.
// name은 첫번째  <div id="tag-div-child"> 이 태그만 보인다면, id는 모든 내용을(input박스,delete,update박스) 다 보여준다.
   // <input type="text" name="members-name" value="">
  // <button name="members-update" onclick="membersUpdate(index)">Update</button>
  // <button name="members-delete" onclick="membersDelete(index)">Delete</button>
  // </div>
// </div>

const membersRead = function(){
  const tagDivParent = document.getElementById('tag-div-parent');
  const tagDivParent = document.getElementsById('tag-div-child');
  // html에서 parent와 child를 불러내는 구간, 접근하는 중 
  // id는 맨위에 있는 하나만 넘긴다.
  // 아무것도 없는 상태, 접근만 된 상태
  tagDivParent.innerHTML ='';
  // 한번 싹 다 지우는 구간.
  for(let index in members) {
    const newDivChild = tagDivParent.cloneNode(true);
    // cloneNode라는 내장함수로 이용해 tagDivChild를 복사해서 만든다.
    // true면 자식까지 복사, 없으면 div태그만 복사.
    // <button name = "members-update" onclick= "membersUpdate(index)">Update</button>
    // <button name = "members-delete" onclick= "membersDelete(index)">Delete</button>
    tagDivParent.appendChild(newDivChild);
    // newDivChild라는것을 넣겠다.
  }
  console.log('Readed', members);
  return members;
};

// dom 객체 접근하기 
const memebersNameObject = document.getElementsByName('memebers-name')[index];
// members-name이라는 이름으로 접근
const memebersNameObject = document.getElementsByName('memebers-update')[index];
// members-update라는 이름으로 접근, 즉 membersUpdateObject 상수에 값을 넘긴다.
const memebersNameObject = document.getElementsByName('members-delete')[index];
// Name으로 접근했단는 것이 중요, name은 배열형이고, 한개여도, 빈배열이어도 배열로 넘긴다.
// name은 배열 ,id는 한개만 넘긴다.

memebersNameObject.value = members[index];
memebersUpdateObject.index = index;
memebersDeleteObject.index = index;
// ** 중요 ** 모두 세개 다 객체이다.
// 객체 안에 인덱스라는 변수를 만들고, 현재 index번호를 넣을려는 과정이다.
// ** 중요 ** 클릭했을 때 인덱스 값을 넘긴다고 보면 됨.
// 무조건 문자로 넘긴다.
// 아래  html 참고.
// <html>
// <div id="tag-div-parent"></div>
 // <div style="display: none;">
//     <div id="tag-div-child">
//       <input type="text" name="members-name" value="">
//       <button name="members-update" onclick="membersUpdate(index)">Update</button>
// // ** 여기서 onclick 전에 index = '123'값이(무조건 문자!) 들어가게 된다.  
// // ** 버튼을 클릭하면 eval태그가 적용되면서 문자를 지우고, 해당 부분을 실행하게 만드는 것이다. 버튼을 누르기 전까지는 문자이다. 
// // ** 클릭하는 순간 eval이 입혀지면서 membersUpdate라는 함수를 호출하는 것이다.
//       <button name="members-delete" onclick="membersDelete(index)">Delete</button>
// // delete도 마찬가지 !!
//     </div> 

// 회원정보에 나이 추가
// create / form태그 
// <input type="text" name="member-name" value="" placeholder="Name">
// <input type="text" name="member-age" value="" placeholder="Age">
// 지우고 추가해줌.
const memeberNameObject = form['member-name'];
const memberAgeObject = form['member-age'];
// form태그 안에 name,age에 접근
members.push({
  name:memeberNameObject.value,
  age: memberAgeObject.value
});
// name,age값을 넣어줌.
memeberNameObject.value ='';
memeberAgeObject.value = '';
// 다시 지움
membersSet();
return membersRead();
// 다시 나타내줌.


// read 
//<input type="text" name="members-age" value="">
const membersAgeObject = document.getElementsByName('members-age')[index];
// html의 members-age값에 접근.
memebersNameObject.value = members[index].name;
memebersNameObject.value = members[index].age;
// html의 name,age값의 index번호까지 membersAge,nameObject각각에 넣어줘서 나타낸다.
memebersUpdateObject.index = index;
memebersDeleteObject.index = index;

// update 
const membersUpdate = function(index){
  const memberNameObject = document.getElementsByName('memebers-name')[index];
  const memberAgeObject = document.getElementsByName('memebers-age')[index];
  // age를 접근하기위해서 새로 만들어줌.
  console.log(membersNameObject.value);
  const name = memberNameObject.value;
  const age = memberNameObject.value;
  // 여기서도 age 추가!
	// 1번. 오브젝트안에 name과 age를 감싸줌
  members[index] = {
    name: name,
    age: age
  };
  // 2번 미리 변수명으로 된 name과 age로 적어줌.
  membersSet();
  // sessionStorage를 수정
  return membersRead();
  // 다시 내용을 나타내줌.
};

