
//# Promise

// ## Promise란
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise

// **언제 완료 될지 모르는 여러 쓰레드를 기다려다가 모두 완료 되면 처리하는 내장 함수**

// ## 기본 문법

const promise1 = new Promise(function(resolve, reject) {
   // new Promise는 promise1에 통신한다라는 뜻, 통신하면서 resolve와(해결하다) reject(실패,거부하다) 함수를 사용한다.
  // resolve('Resolved promise1');
  reject('Rejected promise1');
});
const promise2 = new Promise(function(resolve, reject) {
  // resolve('Resolved promise2');
  reject('Rejected promise2');
// pormise1과 같음
});
const promiseAll = Promise.all([promise1, promise2]).then(function(result) {
// promise1과 2 둘 다 통신하기 위해 promise all을 사용. 그리고 resolve되면 Result(promise1,2 값) 로 호출됨
  console.log(result);
// 결국 promise1,2에 대한 result값을 나타냄.
}).catch(function(error) {
// reject 된다면, catch로 넘어간다.
  console.error(error);
});

// pending, fullfilled
// Promise 값을 통신할 떄 처음에는 pending이라고 해서 값이 넘어 갈때까지 기다린다.
// 그리고 그 값이 다 넘어가면 fullfilled 되어서 값이 넘어가는 과정을 겪게 된다. 
// 이때 넘어갔을 때 받아지면 resolve, 안되면 reject 

// ### Case1
// 하나의 프로미쓰라도 reject 메소드가 실행 되었다면 다른 프로미쓰를 기다리지 않고 바로 catch 메소드 실행됨

// ### Case2
// 모든 프로미쓰가 resolve 메소드를 실행 할 경우 then 메소드가 실행 됨

// ### case3
// 하나만 resolve 된다면 나머지 promise가 fullfilled 될때까지 기다린다.

// ## Axios 대입

const promises = [];
// 배열로 값을 넘긴다는게 특징 !
promises[0] = new Promise(function(resolve, reject) {
// 위에서 배열을 사용하기 때문에 []안에 값이 들어감
// promise.push로 사용해도 됨.
  axios.get('https://red-javascript-yurim-default-rtdb.firebaseio.com/carts.json').then(function(response) {
// carts url을 넣어줌으로써 carts값을 통신해서 가져온다.
// ** 여기서 중요한 점은, axios.get.then으로 체이닝 패턴이 사용된다.
    resolve(response.data);
// resolve 된다면 데이터를 가져온다.
  }).catch(function(error) {
// 아니라면 catch= error가 뜸
    reject(error);
  })
});
promises[1] = new Promise(function(resolve, reject) {
  axios.get('https://red-javascript-yurim-default-rtdb.firebaseio.com/items.json').then(function(response) {
// items 값을 통신해서 가져온다.
// ** 여기서 중요한 점은, axios.get.then으로 체이닝 패턴이 사용된다.
    resolve(response.data);
// resolve 된다면 데이터를 가져온다.
  }).catch(function(error) {
    reject(error);
  })
});

Promise.all(promises).then(function(result) {
  console.log(result);
}).catch(function(error) {
  console.error(error);
});


// ajax 
//2000년대 초반까지 서버와 통신할 경우 페이지 이동이 필요했는데, (form태그)
//ajax를 이용하면 페이지 이동없이 통신이 가능하다. 
// = 그 자리에서 바로 업데이트 되어 이동없이 열린다.
// Asynchronous Java Script and XML 의 약자입니다.
// = async이 비동기여서, 들어오는 순서대로 안기달고 바로 일처리 쭉 함.

// option = 사전에 통신하는 것 
// create = post
// read = get
// update = patch, put
// delete = delete 

// get방식/ create =  데이터 조회(ex.영화 목록 조회)
// post방식/ reqad = 데이터 생성 등 클라이언트가 서버에게 데이터를 줄 때 사용.(ex. 로그인 등)
// * 클라이언트 
// - 클라 → 웹사이트나 앱에서 버튼, 페이지, 그림 등 사용자에게 노출되는 부분으로, 사용자에게서 정보를 획득하여 백엔드로 전송한 후 백엔드의 반응에 따라 사용자에게 표시되는 것을 변경하는 역할을 합니다.
// * 서버  
// - 클라이언트의 요청에 맞게 처리해주는 컴퓨터를 서버컴퓨터라고 합니다.
// - 우리가 볼 수 없는 곳에 위치하므로 '백엔드', '백' 등으로 불리기도 합니다.
// patch방식/ update = 데이터 변경
// delete방식/ delete = 데이터 삭제 

구조 
// => 버튼을 누르면, 파일과 통신하여 불러오고 문자열로서 돌려준다.
// 서버에서 문자로 돌려준다. 
 const xhrObject = new XMLHttpRequest();
 // ajaxㅇ의 핵심부분, 객체안에서 이루어진다.
 // new와 함께 클래스가 나오며, 클래스로 뽑아낸다. 
 // xml은 옛날에 주로 사용되었지만, 종종 지금도 사용된다.(= html안에 데이터를 담고 있는 것)
 // 첫태그와 끝태그가 있어야한다.(json은 그러지 않아도 되어서 json을 많이 사용한다.)
 // request 요청하다, respond 응답하다, 이렇게 많이 사용됨. 둘이 많이 사용.
 // new XMLHttpRequest(); 은 요청을 하는 부분이다.객체를 생성하는 구간.
 xhrObject.onreadystatechange= function(){
   // 준비가 된 상태 = 일단은 0,0 부터 시작함.
   // 숫자가 변할 때마다 실행할 함수를 넣어주는 방식.
   if(xhrObject.readyState !== 4) return;
   // 4가 되려면 통신이 완료된 상태, 4가 아니면, 함수 끝내지 말고 끝내라는 뜻.
   if(xhrObject.status === 200){
     // 통신 완료 후 실행할 부분
     // 404와 같은 에러가 뜨기도 함.
     console.log('Done', xhrObject.responseText);
   }else {
     // 통신 도중 에러가 발생할 때 실행할 부분.
     const error = {
       status: xhrObject.status,
       statusText: xhrObject.statusText,
       responseText: xhrObject.responseText
     }
     console.error(error);
   }
 };
 // 에러가 나면 실행할 부분 
    xhrObject.open('METHOD','http://url');
    // open은 어떤(get,post,patch 등) method로 통신할거고, http://url은 현재 경로를 뜻한다.
    // 이파일을 접근하겠다. 일단 여는 단계라 할 수 있다.
    // content-Type이 없으면 xhrObject.send로 넘기는 값을 서버에서 못 읽음.
    xhrObject.setRequestHeader('Content-Type', 'application/json');
    xhrObject.send(JSON.stringify({}));
    // 우리는 json방식으로 통신하겠다 이런뜻.

    

