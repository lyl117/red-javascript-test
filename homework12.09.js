
// firebase 연동 
// carts firebase 연동 - carts에서 crud하기
// create, read, update, delete

let carts;

const ajax = function(method, url, data, callback) {
  const xhrObject = new XMLHttpRequest();
  // 객체 생성 구간 
  xhrObject.onreadystatechange = function(){
    // 준비가 된 상태 
    if(xhrObject.readyState !== 4) return;
    // 4가 아니면 함수 끝내지 말고 끝내라는 뜻 
    if(xhrObject.status === 200) {
      // 통신완료 후 실행할 부분.
      callback(xhrObject);
      // 콜백 함수 
    } else {
      const error = {
        status: xhrObject.status,
        statusText: xhrObject.statusText,
        responseText: xhrObject.responseText
      }
    console.error(error);
    }
  };
  xhrObject.open(method, url);
  xhrObject.setRequestHeader('Content-Type', 'application/json');
  xhrObject.send(data);
};

const cartsCreate = function(form){
  const cartsNameObject = form['carts-name'];
  const cart = {
    name: cartsNameObject.value,
    enter: moment().fomat('YYYY-MM-DD'),
    expire:moment().add(3,'days').format('YYYY-MM-DD')
    // name,enter,expire를 추가한다.
  };
  axios.post('https://red-javascript-yurim-default-rtdb.firebaseio.com/carts.json', cart).then(function() {
    // 주소를 red홈페이지로 바꾸고. 끝에 carts.json형식으로 바꾸는 것도 중요 
  cartsNameObject.value = '';
  cartsRead();
  });
};

const cartsRead = function() {
  axios.get('https://red-javascript-yurim-default-rtdb.firebaseio.com/carts.json').then(function(response) {
    carts = response.data;
    // 간단하게 response.data로 끝낼 수 있다.**
    const tagTbodyParent = document.getElementById('tag-tbody-parent');
    tagTbodyParent.innerHTML = '';
    const tagChild = document.getElementById('tag-tr-child');
    for(let index in  carts){
      const newDivChild = tagTrChild.cloneNode(true);
      tagTbodyParent.appendChild(newDivChild);
    }
      console.log('read', carts);
  });
};

const cartsDelete = function (key){
  const url = 'https://red-javascript-yurim-default-rtdb.firebaseio.com/carts/' + key + '.json';
  axios.delete(url).then(cartsRead);
};

const cartsUpdate = function(index, key) {
  const url = 'https://red-javascript-yurim-default-rtdb.firebaseio.com/carts/' + key + '.json';
  const expire = document.getElementsByName('carts-epire')[index].value;
  const carts = {
    expire: expire
  };
  axios.patch(url.carts).then(cartsRead);
};


// items 연동 - items홈페이지에서 crud하기 
// 체크 박스를 누르는 순간 똑같은 것을 복사해서 items에 넣는다. 
// 버튼을 누르는 순간 아이템으로 넘어가서 지워지는 것 그리고 새롭게 값을 넣는다.

const itemsChange = function(event){
  // itemsChange를 선언한다.
  // 이때 firebase serve로 서버를 띄운다 -> 그리고 나서 홈페이지로 이동
  // 현재 클릭한 이벤트는 onchange라는 이벤트 객체가 생성 및 받았다.
  // 체크박스 input tag에 onchange한 이벤트 객체라고 보면 됨.
  if(event.target.checked) {
    // target이 제일 중요한데, 누가(input tag자체) 이벤트를 발생했냐가 중요.
    // 체크박스에서 체크되어 수정이 된 순간, 인풋태그가 선택 됨.
    // checked =true of false (찾아서 확인할 것).
    // event는 눌렀을 때 함수호출, 이벤트는 바뀐 상황을 담는 객체
    // target = input tag, 이벤트가 일어나는 태그 및 객체, 자체 전체 다를 말함.
  }
}


