const itemsChange = function(event) {
  const url = 'https://red-javascript-yurim-default-rtdb.firebaseio.com/items/' + event.target.key + '.json';
  // url을 한번 선언을 제대로 앞에 해주면 뒤에 아무리 겹쳐도 알아서 url 주소와 여러 키값중 내가 원하는 키값을 선택하여 
  // console.log나 patch, delete에 들어가게 된다.
    if(event.target.checked) {
      console.log('TODO: item 생성')
      console.log(event.terget.key)
      console.log(carts)
      console.log(carts[event.target.key])
      console.log(event)
      console.log(url);
  // url을 console.log로 나타내준다.
      axios.patch(url, carts[event.target.key]);
  // update    
  axios.post('https://red-javascript-yurim-default-rtdb.firebaseio.com/items.json', carts[event.target.key]);
  // create
   } else {
      console.log('TODO: item 삭제')
      axios.delete(url);
  // delete
    }
  }

  const itemsNameObject = document.getElementsByName('items-name')[index];
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
// name,enter,expire,delete를 각각 하나씩 접근해서 값을 넣어준다.(키값)
  
const itemsUpdateObject = document.getElementsByName('items-update')[index];
      itemsUpdateObject.key = key;

// 추가하기 

const itemsUpdateModal = function(key) {
  // TODO: 눌러진 버튼을 바탕으로 해당 중의 데이터를 모달창에 적용
  console.log(key);
};

// 추가하기 