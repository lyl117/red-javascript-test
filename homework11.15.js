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
  // target = input tag, 이벤트가 일어나는 태그 및 객체, 자쳊 전체 다를 말함 
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

  //<td name="carts-name"></td>
  //<td name="carts-enter"></td>
  //<td class="td-expire"><input type="date" value="2021-02-02" onchange="cartsUpdate(index, key)" name="carts-expire" /></td>
 // <td class="td-delete">
    //<button class="button-delete" name="carts-delete" onclick="cartsDelete(key)"><span class="material-icons">delete</span></button>
  //</td>
//</tr>
//</tbody>