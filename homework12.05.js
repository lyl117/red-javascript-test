
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
하나의 프로미쓰라도 reject 메소드가 실행 되었다면 다른 프로미쓰를 기다리지 않고 바로 catch 메소드 실행됨

// ### Case2
모든 프로미쓰가 resolve 메소드를 실행 할 경우 then 메소드가 실행 됨

// ### case3
하나만 resolve 된다면 나머지 promise가 fullfilled 될때까지 기다린다.

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

