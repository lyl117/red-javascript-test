
// 내장함수 

// input.value crud 
// create
inputTextObject.value ='abc';
// inputTextObject.value에 'abc'를 넣는다.

// read 
inputTextObject.a1 = inputTextObject.value;
inputTextObject.a2 = inputTextObject.value;
// inputTextObject.value 값을 a1과 a2라는 변수에 넣는다

// update 
inputTextObject.value = 'membersDelete(0)';

//delete 
delete inputTextObject.value;
// delete하나로 지울 수 없다.똑같은 화면 그대로 나타남.
inputTextObject.value ='';
// 이렇게 빈 문자열을 넣어서 바꿔주기.

//pre.innerhtml crud
const tagPre = document.getElementsById('tag-pre');

