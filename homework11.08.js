// ajax
// create = post, read = get, update = patch,put, delete = delete
const xhrObject = new XMLHttpRequest();
// new XMLHttpRequest(); 은 요청을 하는 부분이라고 할 수 있다. 객체를 생성하는 구간.
xhrObject.onreadystatechange = function() {
  // 준비된 상태 = 일단은 0, 0 부터 시작함.
// 숫자가 변할 때마다 실행할 함수를 넣어주는 방식.
if (xhrObject.readyState !== 4) return;
// 4가 되면 통신이 완료된 형태. 4가 아니면 함수를 끝내지 말고 끝내라는 뜻.
if(xhrObject.status === 200){
  // 통신 완료 후 실행할 부분 
  // 404와 같은 에러가 뜨기도 함.
  console.log('Done', xhrObject.responseText);
} else {
  // 통신 도중 에러가 발생 할 때 실행할 부분
  const error = {
   // 에러가 나면 실행할 부분 
    status: xhrObject.status,
    statusText: xhrObject.statusText,
    responseText: xhrObject.responseText
  }
  console.error(error);
  }
};

xhrObject.open('METHOD', 'http://url');
// opend은 get method로 통신, htttp://url은 현재경로를 뜻한다. 이파일로 접근하겠다. 일단 여는 단계라 할 수 있다.
xhrObject.setRequestHeader('Content-Type', 'application/json');
// content-type를 json 포맷으로 데이터를 만들어서 요청하겠다.
xhrObject.send(JSON.stringify({}));
//우리는 json방식으로 통신하겠다 이런뜻 

