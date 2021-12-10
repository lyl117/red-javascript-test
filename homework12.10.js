
// item 연동
// 체크 박스를 누르는 순간 똑같은 것을 복사해서 items에 넣는다.
// 최종기능은 꺼지면 지워지는 것, 남아있는 것이 아니라.
// 버튼을 누른 순간 아이템으로 넘어가서 지워지는 것


const itemsChange = function(event) {
  // itemsChange를 선언한다.
  // 이때 firebase serve 로 서버를 띄운다.-> 그리고 나서 홈페이지로 이동.
  // 현재 클릭한 이벤트는 onchange라는 이벤트객체가 생성 및 받았다.
  // 체크박스 input tag에 onchange한 이벤트 객체라고 보면 됨.
    if (event.target.checked) {
  // target이 제일 중요한데, 누가(input tag 자체) 이벤트를 발생했냐가 중요
  // 체크박스에서 체크되어 수정이 된 순간, 인풋태그가 선택됨.
  // checked = true or false (찾아서 확인할 것 )
  // event는 눌렀을 때 함수 호출, 이벤트는 바뀐 상황을 담는 객체 
  // target = input tag, 이벤트가 일어나는 태그 및 객체, 자체 전체 다를 말함 
      console.log('TODO: item 생성')
  // todo는 할 목록 이라는 뜻으로 item 생성을 하라는 뜻.
      console.log(event.target.key)
  // key값을 불러옴. = carts는 스크립트 변수라 접근하면 됨
  // 어떻게 가져오느냐? event.target.key로 
  // 누구한테 가져오느냐? input tag에서 
      console.log(carts)
  // db에서 전체 다 가져옴
      console.log(carts[event.target.key])
  // 전체 중 내가 원하는 key값을 가져옴
  // 해당 키의 값을 carts에서 가져옴 
  // 데이터베이스에서(firebase) 받은 카트 정보는 어디에 들어있나? => carts
  // [event.target.key] 는 오브젝트 형태임.
  // 이 문장의 의미는 이벤트.타겟(= inpput).키는 인풋태그에 키 값을 넣어주고 있음.
  // for문을 돌면서 체크하기도 전에 인풋태그에다 키값을 주고 있는 형태.
      console.log(event)
      axios.post('https://red-javascript-yurim-default-rtdb.firebaseio.com/items.json', carts[event.target.key]);
  // 1. create에서 가져옴 
  // 2. then(function() { 를 없애기 
  // = 앞서 쓴 홈페이지 주소에서 체크했던 라인에 담긴 모든 내용을 넘긴다. 
   } else {
      console.log('TODO: item 삭제')
    }
  }

  // <tbody>
             // <tr id="tag-tr-child">
               // <td><input name="carts-checkbox" type="checkbox" onchange="itemsChange(event)" /></td>
// 01.빈 체크박스 -> 체크 됨, 02. 체크된 박스 -> 지워짐.
// event를 넘기는 것은 change event를 가져오는것
// event는 고유의 기능임.
// name으로 접근을 해야하고 이에 따른 이름을 carts-checkbox를 지정.

               // <td name="carts-name"></td>
               // <td name="carts-enter"></td>
               // <td class="td-expire"><input type="date" value="2021-02-02" onchange="cartsUpdate(index, key)" name="carts-expire" /></td>
                //<td class="td-delete">
                 // <button class="button-delete" name="carts-delete" onclick="cartsDelete(key)"><span class="material-icons">delete</span></button>
                //</td>
              //</tr>
            //</tbody>

  const itemsChange = function(event){
    const url = 'https://red-javascript-yurim-default-rtdb.firebaseio.com/items/' + event.target.key + '.json';
    // url을 한번 선언을 제대로 앞에 해주면 뒤에 아무리 겹쳐도 알아서 url 주소와 여러 키값 중 내가 원하는 키값을 선택하여
    // console.log나, patch,delete에 들어가게 된다.
    if(event.target.checked){
      console.log('TODO:item 생성')
      console.log(event.target.key)
      console.log(carts)
      console.log(carts[event.target.key])
      console.log(event)
      console.log(url);
      // url을 console.log로 나타내준다.
      axios.patch(url, carts[event.target.key]);
      // update
    } else{
      console.log('TODO: item 삭제')
      axios.delete(url);
  // delete
    }
  }

  // items.js파일에서 추가 및 수정 

const itemsNameObject = document.getElementsByName('items-name')[index];
// name/ 복수, 인덱스값을 가져옴, id/ 단수
      itemsNameObject.innerHTML = items[key].name;
      const itemsEnterObject = document.getElementsByName('items-enter')[index];
      itemsEnterObject.innerHTML = items[key].enter;
      const itemsExpireObject = document.getElementsByName('items-expire')[index];
      itemsExpireObject.innerHTML = items[key].expire;
      // itemsExpireObject.key = key;
      // itemsExpireObject.index = index;
      const itemsDeleteObject = document.getElementsByName('items-delete')[index];
      itemsDeleteObject.key = key;
      // const itemsCheckboxObject = document.getElementsByName('items-checkbox')[index];
      // itemsCheckboxObject.key = key;

      const itemsUpdateObject = document.getElementsByName('items-update')[index];
      itemsUpdateObject.key = key;

// 추가하기 

const itemsUpdateModal = function(key) {
  // TODO: 눌러진 버튼을 바탕으로 해당 중의 데이터를 모달창에 적용
  console.log(key);
};

const itemsUpdateModal = function(key) {
  // TODO: 눌러진 버튼을 바탕으로 해당 중의 데이터를 모달창에 적용
  const itemNameObject = document.getElementsByName('item-name')[0];
  itemNameObject.value = items[key].name;
  const itemEnterObject = document.getElementsByName('item-enter')[0];
  itemEnterObject.value = items[key].enter;
  const itemExpireObject = document.getElementsByName('item-expire')[0];
  itemExpireObject.value = items[key].expire; 
  const itemNameObject = document.getElementsByName('item-update')[0];
  itemUpdateObject.key = key;
  
// edit 화면을 열었을 때 
// name,enter,expire에 셋다 하나씩 접근해서 값을 넣는 것.
};
const itemUpdateObject = document.getElementsByName('item-update')[0];
  itemUpdateObject.key = key
// edit을 열었을 때 
// 노랑색 버튼 (수정 버튼)을 누름과 동시에 key값이 넘어간다. 

const itemUpdate = function(key) {
  // carts에서 가져온거기 때문에 itemUpdate에다 추가함.
    const url = 'https://red-javascript-yurim-default-rtdb.firebaseio.com/items/' + key + '.json';
    const name = document.getElementsByName('item-name')[0].value;
    const enter = document.getElementsByName('item-enter')[0].value;
    const expire = document.getElementsByName('item-expire')[0].value;
  // name,enter,expire 이름 변환 후, item으로 수정, [0]배열로 수정.
    const item = {
      name: name,
      expire: expire,
      enter: enter
  // name,expire,enter 각각 추가
    };
    axios.patch(url, item).then(itemsRead);
    modalToggle();
  // items.html에서 추가 
  };

  const queryString = new URLSearchParams(window.location.search);
// URLSearchParams 클래스의 window.location.search (html의 값으로 변환시킨것.)값을 쿼리스트링으로 쉽게 값을 가져올 수 있다. 
// 우리가 html 에서 값을 getelementbyname 을 적용하듯이, 쉽게 접근할 수 있다라는 뜻.
const q = queryString.get('q')|| '';
// script 상수에서 어디서든 사용 가능.
// = 앞에 값이 참이면 q값을 나타내고, 거짓이면(0,undefined.false nan) ''빈배열을 나타내라 라는 뜻.
const name = document.getElementsByName('q')[0];
// 검색창을 접근한다.
name.value =q;
// 그 검색창에 새로고침하면 q값이 들어가게 끔하기 위해 위의 답변을 만듬.
name.focus();
// 검색창에 검색선이 깜박이며 생긴다.

const itemsRead = function(){
  if (items[key].name.indexOf(q) < 0) continue;
  // constinue는 맞지 않는 상황이라면 다음번으로 넘긴다라는 뜻. 
  // 아무것도 안들어오면, 배값이면 0, 귤이 들어오면 -1(배가 아니어서)
  // = if (items[key].name.indexOf(q) <= 0) continue;
  // indexof 자체가 못찾으면 -1, 찾으면 1임.
  // < 0 이 더 명확한 답변임.
  }