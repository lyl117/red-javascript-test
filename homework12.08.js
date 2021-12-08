const router = require("./homework12.07");

// read = get 
const membersRead = function() {
  const successFunction = function(xhrObject) {
    const membersLosical = JSON.parse(xhrObject.resposeText);
    // resposeText의 문자를 오브젝트로 바꾸겠다.
    members = membersLosical.members;
    // 회원 6명을 불러오겠다.
    const tagDivParent = document.getElementsById('tag-div-parent');
    // 부모 객체를 선택한다.
    tagDivParent.innerHTML = '';
    // 싹다 지운다.
    const tagDivParent = doument.getElementsById('tag-div-child');
    // 복사 당할 탬플릿을 선택한다.
    for(let index in members){
      const newDivChild = tagDivParent.cloneNode(true);
      // 복사한다.
      tagDivParent.appendChild(newDivChild);
      const membersNameObject = document.getElementsByName('members-name')[index];
      const membersAgeeObject = document.getElementsByName('members-age')[index];
      const membersUpdateObject = document.getElementsByName('members-update')[index];
      const membersDeleteObject = document.getElementsByName('members-delete')[index];
    // 하나씩 선택한다.
    membersNameObject.value = members[index].name;
    //이름 인풋태그에 값을 넣겠다.
    membersAgeeObject.value = members[index].age;
    // 나이 인풋태그에 인덱스 값을 넣겠다. 중요 ***
    membersUpdateObject.index = index;
    membersDeleteObject.index = index;
    //버튼 객체는 원래 인덱스 값이 없다. 하지만 인덱스 값에 0을 넣어서 호출하겠다.
    // 속성을 하나 만든 다음에 0을 넣어준다.
    }
    console.log('read', memebrs);
    };
    const xhrObject = new XMLHttpRequest();
    xhrObject.onreadystatechange = function() {
      if(xhrObject.readyState !==4)return;
      if(xhrObject.status === 200){
        successFunction(xhrObject);
      } else {
        const error = {
          status: xhrObject.status,
          statusText: xhrObject.statusText
        }
        console.error(error);
      }
    };
    xhrObject.open('GET','http://localhost:3100/api/v1/members');
    xhrObject.setRequestHeader('Content-Type', 'application/json');
    xhrObject.send();
};
// body로 넘기고 싶으면, create로 넘겨야 한다. 넘기고 싶으면 쿼리스트링으로 url주소에 추가해야함.
// read와 delete는 바디로 넘길 수 없다.

// 백엔드 통신 
router.get('/', function(request, response) {
  console.log('Done members get', members);
  response.status(200).send({
    result: 'Read',
// 결과적으로 완료된 상태 
    members: members
  });
});

// delete = delete
// body를 가지고 있다.
 
const membersDelete = function(index){
  const url = 'http://localhost:3100/api/v1/members/' + index;
  //지우고 싶은 인덱스를 넣어야한다.
  const xhrObject = new XMLHttpRequest();
  xhrObject.onreadystatechange = function();
  if(xhrObject.readyState !==4)return;
  if(xhrObject.status === 200){
    membersRead();
  }else {
    const error = {
      status: xhrObject.status,
      statusText: xhrObject.statusText,
      responseText: xhrObject.responseText
    }
    console.error(error);
  }
};
  xhrObject.open('DELETE',url);
  // 메쏘드는 delete, 주소는 url 
  xhrObject.setRequestHeader('content-Type', 'applicaion/jsn');
  xhrObject.send();

  // 백엔드 통신
  router.delete('/:index', function(request,response){
    const index = Number(request.params.index);
    // 끝에 index라서 위에 '/:index'가 인덱스임.
    members.splice(index,1);
    // index 한개만 지우겠다.
    // 동작을 하는 기능이 백엔드로 왔다라고 생각하면 쉬움.
    // 프론트는 그냥 확인하는 정도!
    console.log('Done members delete',members);
    response.status(200).send({
    // 정상 통신하겠다.
    result: 'deleted'
  });
});

// update =patch
const membersUpdate = function(index) {
  const url = 'http://localhost:3100/api/v1/members/' + index;
  const name = document.getElementsByName('members-name')[index].value;
  const age = document.getElementsByName('members-age')[index].value;
  const member = {
    name: name,
    age: age
  };
  const xhrObject = new XMLHttpRequest();
  xhrObject.onreadystatechange = function(){
    if(xhrObject.readyState !==4)return;
    if(xhrObject.status === 200){
      membersRead();
    }else {
      const error = {
        status: xhrObject.status,
        statusText: xhrObject.statusText,
       responseText: xhrObject.responseText
      }
      console.error(error);
  }
};
xhrObject.open('PATCH', url);
xhrObject.setRequestHeader('content-Type', 'application/json');
xhrObject.send(JSON.stringify(member));
};

//백엔드 통신 
router.patch('/:index', function(request, response) {
  const index = Number(request.params.index);
  members[index] = request.body;
// 바디로 넘긴다.
  console.log('Done members patch', members);
  response.status(200).send({
    result: 'Updated'
  });
});

// delete의 인덱스와 create 바디와 혼합된 유형 

// ?브라우저에서 주소 치고 들어가는 것은 무조건 무슨 메소드인가?
// = read/ get 통신이용.
// 404: background쪽 페이지가 없는 경우
// 400: frontend 쪽에서 정보가 제대로 넘어오지 않는 경우
// 403: 인증관련 에러(로그인이 제대로 되지 않는 경우)
// 500: backend쪽 에러 (backend문법 오류 또는 Db가 멈춰있는 경우)

// ? 공통부분 함수화하기 (리팩토링)
const ajax = function(method,url,data,callback){
};
// 위의 내용을 바탕으로 순서대로 메소드, url, 데이터, 콜백함수를 차례대로 create,read,update,delete를 적어나간다.

const ajax = function(method, url, data, callback) {
  const xhrObject = new XMLHttpRequest();
  xhrObject.onreadystatechange = function() {
    if (xhrObject.readyState !== 4) return;
    if (xhrObject.status === 200) {
      callback(xhrObject);
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
// 공통구간은 const xhrObject부터 };까지.
// ** 중요 !! create부터 delete까지, 공통부분이 필요할 때 ajax에 와서 거친 후 콜백으로 들어가는 것이다.

// create
const membersCreate = function(form) {
  const memberNameObject = form['member-name'];
  const memberAgeObject = form['member-age'];
  const member = {
    name: memberNameObject.value,
    age: memberAgeObject.value
  };
  const successFunction = function() {
    memberNameObject.value = '';
    memberAgeObject.value = '';
    membersRead();
  }
  ajax('POST', 'http://localhost:3100/api/v1/members', JSON.stringify(member), successFunction);
// 메소드는 post, url은 위에 써있다시피, 데이터는 JSON.stringify(member), 콜백함수는 successFunction.
// 여기서 콜백함수는 내가 필요할 때 사용할 수 있는 함수를 미리 적어놓는 구간이다. 
// scuccessFunction이 콜백함수인이유는, 함수로 들어가서 membersRead로 새롭게 추가된 내용까지 보여줘야 하기 때문이다.
};


const membersRead = function() {
  const successFunction = function(xhrObject) {
    const membersLogical = JSON.parse(xhrObject.responseText);
    members = membersLogical.members;
    const tagDivParent = document.getElementById('tag-div-parent');
    tagDivParent.innerHTML = '';
    const tagDivChild = document.getElementById('tag-div-child');
    for (let index in members) {
      const newDivChild = tagDivChild.cloneNode(true);
      tagDivParent.appendChild(newDivChild);
      const membersNameObject = document.getElementsByName('members-name')[index];
      const membersAgeObject = document.getElementsByName('members-age')[index];
      const membersUpdateObject = document.getElementsByName('members-update')[index];
      const membersDeleteObject = document.getElementsByName('members-delete')[index];
      membersNameObject.value = members[index].name;
      membersAgeObject.value = members[index].age;
      membersUpdateObject.index = index;
      membersDeleteObject.index = index;
    }
    console.log('Readed', members);
  };
  ajax('GET', 'http://localhost:3100/api/v1/members', undefined, successFunction);
// 메소드는 get, url은 위에 보이시다시피,데이터는 없기 때문에 undefined, 콜백함수는 successFunction.
};



const membersDelete = function(index) {
  const url = 'http://localhost:3100/api/v1/members/' + index;
  ajax('DELETE', url, undefined, membersRead);
};


// const membersUpdate = function(index, member) {
//   members[index] = member;
//   membersSet();
//   // window.location.reload();
//   return members;
// };
const membersUpdate = function(index) {
  const url = 'http://localhost:3100/api/v1/members/' + index;
  const name = document.getElementsByName('members-name')[index].value;
  const age = document.getElementsByName('members-age')[index].value;
  const member = {
    name: name,
    age: age
  };
  ajax('PATCH', url, JSON.stringify(member), membersRead);
// 메소드는 patch, url은 url, 데이터는 JSON.stringify(member), 콜백함수는 membersRead.
};



const membersSet = function() {
  const membersSet = JSON.stringify(members);
  sessionStorage.setItem('members', membersSet);
};

membersRead();

// axios 
// 공통 부분 함수화를 axios로 수정하기 
const membersCreate = function(form) {
  const memberNameObject = form['member-name'];
  const memberAgeObject = form['member-age'];
  const member = {
    name: memberNameObject.value,
    age: memberAgeObject.value
  };
  const successFunction = function() {
    memberNameObject.value = '';
    memberAgeObject.value = '';
    membersRead();
  }
  axios.post('http://localhost:3100/api/v1/members', member).then(function() {
    memberNameObject.value ='';
    memberAgeObject.value='';
    membersRead();
});
};
const membersRead = function(){
  axios.get('http://localhost:3100/api/v1/members').then(function(response){
    const membersLogical = response.data;
    members = membersLogical.members;
    const tagDivParent = document.getElementById('tag-div-parent');
    tagDivParent.innerHTML = '';
    const tagDivChild = document.getElementById('tag-div-child');
    for (let index in members) {
      const newDivChild = tagDivChild.cloneNode(true);
      tagDivParent.appendChild(newDivChild);
      const membersNameObject = document.getElementsByName('members-name')[index];
      const membersAgeObject = document.getElementsByName('members-age')[index];
      const membersUpdateObject = document.getElementsByName('members-update')[index];
      const membersDeleteObject = document.getElementsByName('members-delete')[index];
      membersNameObject.value = members[index].name;
      membersAgeObject.value = members[index].age;
      membersUpdateObject.index = index;
      membersDeleteObject.index = index;
    }
    console.log('Readed', members);
  });
};
const membersDelete = function(index){
  const url = 'http://localhost:3100/api/v1/members/' + index;
  axios.delete(url).then(membersRead);
};

const membersUpdate = function(index){
  const url ='http://localhost:3100/api/v1/members/' + index;
  const name = document.getElementsByName('members-name')[index].value;
  const age = document.getElementsByName('members-age')[index].value;
  const member = {
    name: name,
    age: age
  };
  // ajax('PATCH', url, JSON.stringify(member), membersRead);
  axios.patch(url, member).then(membersRead);
};
