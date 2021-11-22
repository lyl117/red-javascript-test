let items;

// const queryString = new URLSearchParams(window.location.search);
// const nameText = queryString.get('input-text');
// // const inputTextObjects = document.getElementsByName('input-text');
// // const inputTextObject = inputTextObjects[0];
// const inputTextObject = document.getElementsByName('input-text')[0]; 
// inputTextObject.value = nameText;
// inputTextObject.focus();
// inputTextObject.blur();

const itemsCreate = function(form) {
  const itemNameObject = form['item-name'];
  const item = {
    name: itemNameObject.value,
    enter: moment().fomat('YYYY-MM-DD'),
    expire: moment().add(3,'day').fomat('YYYY-MM-DD')
  };
  axios.post('https://red-javascript-yurim-default-rtdb.firebaseio.com/items.json', item).then(function() {
    itemNameObject.value = '';
    itemsRead();
  });
};

const itemsRead = function() {
  axios.get('https://red-javascript-yurim-default-rtdb.firebaseio.com/items.json').then(function(response) {
    items = response.data;
    const tagDivParent = document.getElementById('tag-tbody-parent');
    tagDivParent.innerHTML = '';
    const tagDivChild = document.getElementById('tag-tr-child');
    let index = 0;
    for (let key in items) {
      const newDivChild = tagTrChild.cloneNode(true);
      tagTbodyParent.appendChild(newDivChild);
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
      index++;
    }
    console.log('Readed', items);
  });
};



const itemsDelete = function(key) {
  const url = 'https://red-javascript-yurim-default-rtdb.firebaseio.com/items/'+ key + '.json';
  axios.delete(url).then(itemsRead);
};

const itemsUpdate = function(index, key) {
  const url = 'https://red-javascript-yurim-default-rtdb.firebaseio.com/items/' + key + '.json';
  const expire = document.getElementsByName('items-expire')[index].value;
  const item = {
    expire: expire
  };
  axios.patch(url, item).then(itemsRead);
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
    
};

const itemsChange = function(event) {
  const url = 'https://red-javascript-yurim-default-rtdb.firebaseio.com/items/' + event.target.key + '.json';
  if(event.target.checked) {
    axios.patch(url, items[event.target.key]);
    axios.post('https://red-javascript-yurim-default-rtdb.firebaseio.com/items.json', items[event.target.key]);
  } else {
    console.log('TODO: item 삭제')
    axios.delete(url);
  }
}

itemsRead();

