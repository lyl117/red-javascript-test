

// const membersGet = sessionStorage.getItem('members');
// const membersLogical = membersGet || '[]';
// const members = JSON.parse(membersLogical);
let members;
// 백엔드에서 회원정보를 받아와 스크립트 변수 members에다 넣는다.
// members를 다른곳에서도 쓸 수 있게 끔.
// 값이 달라져서 const보다 let을 사용.

// create = post ** body를 가지고 있다.
const membersCreate = function(form) {
  const memberNameObject = form['member-name'];
  const memberAgeObject = form['member-age'];
  // 'member-name,age'의 태그를 가리킨다.
  const member = {
    name: memberNameObject.value,
    age: memberAgeObject.value
    // 각각의 name과 age에 값을 넣는다.
  };
  // 오브젝트 형태로 넣어준다.
  const successFunction = function() {
    // 통신이 완료 후에 호출될 함수이다.
    memberNameObject.value = '';
    memberAgeObject.value = '';
    // 싹 다 지운다.
    membersRead();
    // 수정된 값까지 포함해서 다시 그린다.
  }
  const xhrObject = new XMLHttpRequest();
  // new와 클래스로 불러온다.
  xhrObject.onreadystatechange = function() {
    // 준비가 된 상태 = 일단은 0,0 부터 시작함.
    // 숫자가 변할 때마다 실행할 함수를 넣어주는 방식 
    if (xhrObject.readyState !== 4) return;
    // ** 중요 4가 아니면 끝이난다.
    if (xhrObject.status === 200) {
      // 200표시로 정상 작동한다.
      successFunction();
      // successFunction을 호출한다.
      // 즉 할일을 정해놓고 상황이 나타나면 일어나게끔 하는 것이 콜백함수인데,
      // 언제 끝날지 모르지만 실행하고 싶을 때 사용.
    } else {
      const error = {
        status: xhrObject.status,
        statusText: xhrObject.statusText,
        responseText: xhrObject.responseText
      }
      console.error(error);
    }
  };
  xhrObject.open('POST', 'http://localhost:3100/api/v1/members');
  // post메소드로 이런 주소로 통신하겠다.
  xhrObject.setRequestHeader('Content-Type', 'application/json');
  // Content-Type에 application/json 형태로 통신하겠다.
  xhrObject.send(JSON.stringify(member));
  // ** 중요 새로 추가될 내용은 제이슨 스트링파이로 감쌌다.
  // 통신은 무조건 문자로 받고 문자로 전달한다.
};
// * 참고 백엔드에서는 오브젝트로 주고, 프론트에서는 문자로 받는다.
// 백엔드 통신 
// router.post('/', function(request, response) {
//   // 백엔드 통신에서는 request와 response 두가지로 응답을 하게 된다.
//   members.push(request.body);
// // 바디로 넘긴다.
//   console.log('Done members post', members);
//   response.status(200).send({
//     result: 'Created'
//   });
// }); 

// read = get
const membersRead = function() {
  const successFunction = function(xhrObject) {
    const membersLogical = JSON.parse(xhrObject.responseText);
    members = membersLogical.members;
    const tagDivParent = document.getElementById('tag-div-parent');
    // 부모에 접근 
    tagDivParent.innerHTML = '';
    // 싹 다 지움
    const tagDivChild = document.getElementById('tag-div-child');
    // 자식에 접근
    for (let index in members) {
      const newDivChild = tagDivChild.cloneNode(true);
      // 복사한다.
      tagDivParent.appendChild(newDivChild);
      const membersNameObject = document.getElementsByName('members-name')[index];
      const membersAgeObject = document.getElementsByName('members-age')[index];
      const membersUpdateObject = document.getElementsByName('members-update')[index];
      const membersDeleteObject = document.getElementsByName('members-delete')[index];
      // 각각의 name,age,update,delete버튼에 접근하여 선택하는 단계.
      membersNameObject.value = members[index].name;
      membersAgeObject.value = members[index].age;
      // 각각에 값을 넣겠다.
      membersUpdateObject.index = index;
      membersDeleteObject.index = index;
      // 버튼 객체에는 원래 인덱스값이 없다. 하지만 인덱스 값에 0을 넣어 호출하겠다. 
      // = 속성을 하나 만든 다음에 0을 넣어준다.라는 뜻 
    }
    console.log('Readed', members);
  };
  const xhrObject = new XMLHttpRequest();
  xhrObject.onreadystatechange = function () {
    if (xhrObject.readyState !== 4) return;
    if (xhrObject.status === 200) {
      successFunction(xhrObject);
    } else {
      const error = {
        status: xhrObject.status,
        statusText: xhrObject.statusText,
        responseText: xhrObject.responseText
      }
      console.error(error);
    }
  };
  xhrObject.open('GET', 'http://localhost:3100/api/v1/members');
  xhrObject.setRequestHeader('Content-Type', 'application/json');
  xhrObject.send();
};
// *** body로 넘기고 싶으면, create로 넘겨야한다.넘기고 싶으면 쿼리스트링으로 url주소에 추가해야함.
// *** read와 delete는 바디로 넘길 수 없다.
// // 백엔드 통신 
// router.get('/', function(request, response) {
//   console.log('Done members get', members);
//   response.status(200).send({
//     result: 'Read',
// // 결과적으로 완료된 상태 
//     members: members
//   });
// });


// delete = delete ** body를 가지고 있다.
const membersDelete = function(index) {
  const url = 'http://localhost:3100/api/v1/members/' + index;
  // ** 중요 꼭 지우고 싶은 인덱스 번호와 함께 적어줘야함.
  const xhrObject = new XMLHttpRequest();
  xhrObject.onreadystatechange = function () {
    if (xhrObject.readyState !== 4) return;
    if (xhrObject.status === 200) {
      membersRead();
    } else {
      const error = {
        status: xhrObject.status,
        statusText: xhrObject.statusText,
        responseText: xhrObject.responseText
      }
      console.error(error);
    }
  };
  xhrObject.open('DELETE', url);
  // 메소드는 delete, 주소는 url
  xhrObject.setRequestHeader('Content-Type', 'application/json');
  xhrObject.send();
};
// // 백엔드 통신 
// router.delete('/:index', function(request, response) {
//   const index = Number(request.params.index);
// // 끝에 index라서 위에 '/:index'가 인덱스이다.
//   members.splice(index, 1);
// // index 한개만 지우겠다.
// // 동작을 하는 기능이 백엔드로 왔다라고 생각하면 쉬움.
// // 프론트는 그냥 확인하는 정도 ! 
//   console.log('Done members delete', members);
//   response.status(200).send({
// // 정상통신하겠다. 
//     result: 'Deleted'
//   });
// });



const membersUpdate = function(index) {
  const url = 'http://localhost:3100/api/v1/members/' + index;
  // update역시나 지우고 싶은 인덱스 번호와 함께 적어줘야 한다.
  const name = document.getElementsByName('members-name')[index].value;
  const age = document.getElementsByName('members-age')[index].value;
  // 각각에 접근
  const member = {
    name: name,
    age: age
  };
  // 오브젝트 형태로 값을 넣어준다.
  const xhrObject = new XMLHttpRequest();
  xhrObject.onreadystatechange = function () {
    if (xhrObject.readyState !== 4) return;
    if (xhrObject.status === 200) {
      membersRead();
    } else {
      const error = {
        status: xhrObject.status,
        statusText: xhrObject.statusText,
        responseText: xhrObject.responseText
      }
      console.error(error);
    }
  };
  xhrObject.open('PATCH', url);
  xhrObject.setRequestHeader('Content-Type', 'application/json');
  xhrObject.send(JSON.stringify(member));
};
// //백엔드 통신 
// router.patch('/:index', function(request, response) {
//   const index = Number(request.params.index);
//   members[index] = request.body;
// // 바디로 넘긴다.
//   console.log('Done members patch', members);
//   response.status(200).send({
//     result: 'Updated'
//   });
// });

// delete의 인덱스와 create 바디와 혼합된 유형 

const membersSet = function() {
  const membersSet = JSON.stringify(members);
  sessionStorage.setItem('members', membersSet);
};

membersRead();