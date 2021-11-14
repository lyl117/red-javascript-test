
let carts;

// const queryString = new URLSearchParams(window.location.search);
// const nameText = queryString.get('input-text');
// // const inputTextObjects = document.getElementsByName('input-text');
// // const inputTextObject = inputTextObjects[0];
// const inputTextObject = document.getElementsByName('input-text')[0]; 
// inputTextObject.value = nameText;
// inputTextObject.focus();
// inputTextObject.blur();



const cartsCreate = function(form) {
  const cartNameObject = form['cart-name'];
  const cart = {
    name: cartNameObject.value,
    enter: moment().fomat('YYYY-MM-DD'),
    expire: moment().add(3,'day').fomat('YYYY-MM-DD')
  };
  axios.post('https://red-javascript-yurim-default-rtdb.firebaseio.com/carts.json', cart).then(function() {
    cartNameObject.value = '';
    cartsRead();
  });
};


const cartsRead = function() {
  axios.get('https://red-javascript-yurim-default-rtdb.firebaseio.com/carts.json').then(function(response) {
    carts = response.data;
    const tagDivParent = document.getElementById('tag-tbody-parent');
    tagDivParent.innerHTML = '';
    const tagDivChild = document.getElementById('tag-tr-child');
    let index = 0;
    for (let key in carts) {
      const newDivChild = tagDivChild.cloneNode(true);
      tagDivParent.appendChild(newDivChild);
      const cartsNameObject = document.getElementsByName('carts-name')[index];
      cartsNameObject.innerHTML = carts[key].name;
      const cartsEnterObject = document.getElementsByName('carts-enter')[index];
      cartsEnterObject.innerHTML = carts[key].enter;
      const cartsExpireObject = document.getElementsByName('carts-expire')[index];
      cartsExpireObject.value = carts[key].expire;
      cartsExpireObject.key=key;
      cartsExpireObject.index = index;
      const cartsDeleteObject = document.getElementsByName('carts-delete')[index];
      cartsDeleteObject.key= key;
      index++;
    }
    console.log('Readed', carts);
  });
};



const cartsDelete = function(key) {
  const url = 'https://red-javascript-yurim-default-rtdb.firebaseio.com/carts/'+ key + '.json';
  axios.delete(url).then(cartsRead);
};



const cartsUpdate = function(index, key) {
  const url = 'https://red-javascript-yurim-default-rtdb.firebaseio.com/carts/' + key + '.json';
  const expire = document.getElementsByName('carts-expire')[index].value;
  const cart = {
    expire: expire
  };
  axios.patch(url, cart).then(cartsRead);
};

const itemsChange = function(event) {
  if(event.target.checked) {
    console.log('TODO: item 생성')
    console.log(event.terget.key)
    console.log(carts)
    console.log(carts[event.target.key])
    console.log(evnt)
    axios.post('https://red-javascript-yurim-default-rtdb.firebaseio.com/items.json', carts[event.target.key]);)
  } else {
    console.log('TODO: item 삭제')
  }
}

cartsRead();

