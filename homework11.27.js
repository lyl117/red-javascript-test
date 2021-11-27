
// 내장함수

sessionStorage,localStorage 실습

// const members = [];

const membersGet = sessionStorage.getItem('members');
const membersLogical = membersGet || '[]';
// memebersGet이 사실이면(null이 아니면) logical에 해당 값이 들어가고, 거짓이면(null이면) '[]'이 답으로 들어간다.
const members = JSON.parse(membersLogical);
// '[]'문자형배열에서 [] 배열로 바뀜 

const membersCreate = function(member) {
  members.push(member);
const membersSet = JSON.stringify(members);
sessionStorage.setItem('members', membersSet);
  return members;
};
// membersCreate = '홍길동';

const membersRead = function() {
const membersSet = JSON.stringify(members);
sessionStorage.setItem('members', membersSet);
  return members;
};


const membersDelete = function(index) {
  members.splice(index, 1);
const membersSet = JSON.stringify(members);
sessionStorage.setItem('members', membersSet);
  return members;
};
// membersDelete = (0);

const membersUpdate = function(index, member) {
  members[index] = member;
const membersSet = JSON.stringify(members);
sessionStorage.setItem('members', membersSet);
  return members;
};
// membersUpdate = (0, '김유신');

//1. `membersCreate`, `membersDelete`, `membersUpdate`에 추가된 `공통 부분`을 `함수`로 만들고, `membersSet` `Script 상수`에 넣고
     //`membersCreate`, `membersDelete`, `membersUpdate`에서 `membersSet` 실행 시키기

     const membersGet = sessionStorage.getItem('members');
     const membersLogical = membersGet || '[]';
     const members = JSON.parse(membersLogical);
     
     const membersSet = function(){
     // 공통된 함수 넣기
       const membersSet = JSON.stringify(members);
     // membersSet 스크립트 상수에 넣기
       sessionStorage.setItem('members', membersSet);
     }
     
     const membersCreate = function(member) {
       members.push(member);
       membersSet();
     // membersSet 실행시키기 
       return members;
     };
     
     const membersRead = function() {
       return members;
     };
     
     const membersDelete = function(index) {
       members.splice(index, 1);
       membersSet();
       return members;
     };
     
     const membersUpdate = function(index, member) {
       members[index] = member;
       membersSet();
       return members;
     };