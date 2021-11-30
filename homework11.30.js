
// 내장함수 

// VSCode 서로 다른 파일 비교하는 방법 설명워

// - 원하는 파일의 오른쪽 버튼에 compare with selected 누른다.
// - 나머지 하나의 오른쪽 버튼에 select for compare을 누른다.
// - 두개 비교해보기 - 끝

document.write.location

debugger;
document.write('documentWrite1');
document.write('documentWrite2');
document.write('documentWrite3');
// document.write는 쭉 적혀지게 됨.

document.writeln('documentWrite4');
document.writeln('documentWrite5');
// writeln은 스페이스를 누른 것 처럼 띄어쓰기가 됨.

document.write('documentWrite7');
document.write('documentWrite8');
document.write('documentWrite9');
// window.location.reaload();
// -> 새로 고침.
// window.location.href = 'https://naver.com';
// -> 적은 링크로 들어감.
// window.history.back();
// -> 뒤로 가기 

// document.write.location 실습 
const membersGet = sessionStorage.getItem('members');
// members를 불러 membersGet에 넘기게 되는데, 값이 없으니 null값이 뜬다.
const membersLogical = membersGet || '[]';
// membersLogical에 membersGet이 true면 스토리지겟 값을 넣고, false면 '[]'값을 넣음 
const members = JSON.parse(membersLogical);
// '[]'문자형 배열에서 [] 배열로 바뀜.

const membersCreate = function(member) {
  members.push(member);
  // member 값을 넣기
  membersSet();
  // membersSet을 실행시키기
window.location.reload();
// 새로 고침
  return members;
  // 새로고침 후 members을 나타냄. 
};

const membersRead = function() {
for (let index in members) {
  // 괄호 안에서 in을 기준으로 오른쪽에 반복해서 불러올 변수 혹은 객체를 넣어주면, 
  // for in문이 한 번씩 반복될 때마다 반복 변수에 하나씩 값의 인덱스가 들어갑니다.
  document.writeln(members[index]);
  // 흰 창에 index번호에 맞는 members값을 한칸씩 띄어서 적어낸다.
}
  return members;
};

const membersDelete = function(index) {
  members.splice(index, 1);
  // index값의 1개를 지우겠다.
  membersSet();
window.location.reload();
  return members;
};

const membersUpdate = function(index, member) {
  // membersUpdate(index번호, member(이름))추가 하겠다.
  members[index] = member;
  //memeber값, index번호를 members에 넘김.
  membersSet();
window.location.reload();
  return members;
};

const membersSet = function() {
  const membersSet = JSON.stringify(members);
  // 다시 자바스크립트화 시키기 위해 stringfy시킴.
  sessionStorage.setItem('members', membersSet);
};

// 여기까지가 선언부
membersRead();
// 데모와 동일하게 하기위해서 (새로고침을 하면 새로 이름이 자동적으로 뜨게끔 함)선언부이후에 선언해주면 됨.
