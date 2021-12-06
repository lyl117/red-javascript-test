
const ajaxTest = function() {
  const xhrObject = new XMLHttpRequest();
  xhrObject.onreadystatechange = function() {
// 준비된 상태 = 일단은 0, 0 부터 시작함.
// 숫자가 변할 때마다 실행할 함수를 넣어주는 방식.
    if (xhrObject.readyState !== 4) return;
    if (xhrObject.status === 200) {
// 404는 서버에 페이지가 없을 때 뜸.
// 200은 정상적인 통신상태.
      console.log('Done', xhrObject.responseText);
      const tagDiv = document.getElementById('tag-div');
      tagDiv.innerHTML = xhrObject.responseText;
    } else {
      const error = {
        status: xhrObject.status,
        statusText: xhrObject.statusText,
        responseText: xhrObject.responseText
      }
      console.error(error);
    }
  };
  xhrObject.open('GET', './basicTemplate.html');
  xhrObject.setRequestHeader('Content-Type', 'application/json');
  xhrObject.send();
};
// pending(= 대기중)
// cors = 유명한 에러, 통신을 못하거나 권한이 없을 시 뜨는 에러
//❔ xhrObject.open url을 ./basicTemplate2.html로 바꾼다면? = 에러남, 파일이 존재하지 않아서

//node.js 
//backend server
// BE 서버 실행 방법 
// 1. npm install
// 설치 할 때 
// 2. node index.js
// = 실행이 된다 의 의미
// 3.ctrl + c 
// 터미널 종료
// member 구조를 스키마 또는 모델이라고 한다. 
