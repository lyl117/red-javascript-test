
// read
  // curl -X 'GET' \
   // 'http://localhost:3100/api/v1/members' \
   // = 3100번 주소에서 api서버에 버전 1에 members라는 경로로 요청했다.
   // -H 'accept: application/json'
   // = 서버에서는 json 형식으로 응답을 한다. 

   // create
   //curl -X 'POST' \
   //= post메소드를 사용한다.
    //'http://localhost:3100/api/v1/members' \
    // api는  해당 목적만 해주면 끝이다. 다시 실행한것을 보고싶으면 위에 read로 가서 확인하면 됨.
    //-H 'accept: application/json' \
    // = json 중요 !!!
    //-H 'Content-Type: application/json' \
    //-d '{
    //"name": "홍길선",
    //"age": "38"
  // }'
  // = 오브젝트로 만들어낸것.

  // update
  //curl -X 'PATCH' \
  // =ajax와서 patch를 지원한다.
    //'http://localhost:3100/api/v1/members/0' \
    // = 바꾸고 싶은 인덱스 번호 0을 추가한것을 볼 수 있다. 
    //-H 'accept: application/json' \
    //-H 'Content-Type: application/json' \
    //-d '{
    //"name": "홍길선",
    //"age": "38"
  // }'
  
  // delete 
  //curl -X 'DELETE' \
  //'http://localhost:3100/api/v1/members/0' \
  // 지우고 싶은 인덱스 번호 0을 추가함.
   // -H 'accept: application/json'
   //= 홍길선으로 수정한애를 지우겠다.
   // = 다시 확인하기위해 read를 보면 됨.
  
   // zsh = 제트쉘, 

// ** 중요 = 오브젝트 형식을 모델이라고 함(모델안에 이름과 나이가 있다).배열은 모델이 아님. 오직 오브젝트만!
const router = global.express.Router();
// 호출만 한 상태 
const members = global.mocks.members;
// = global = window

 // create
 router.post('/', function(request, response) {
  // '/' = 모든 어떤것이 와도 통신하겠다.무조건 허락된 상태.
  members.push(request.body);
  // request.body로 회원정보를 넘긴다.
  console.log('Done members post', members);
  // 이부분으로 대응을 해주겠다. 라는 뜻.
  response.status(200).send({
    result: 'Created'
  });
});
// 이전까지는 대기중. 이게 끝이나야 돌아감.(모든 crud가 그렇다)

router.get('/', function(request, response) {
  console.log('Done members get', members);
  response.status(200).send({
    result: 'Read',
    members: members
    // 내가 가지고있는 mock데이터를 넘기겠다. 이뜻.
    // ** 모르는 파일이 뜨면 끝났다는 뜻.
  });
});

router.patch('/:index', function(request, response) {
  // '/:index' = http://localhost:3100/api/v1/members/0' \<- 이주소를 request.params.index로 받는다.라는 뜻 
  // 중요 ***!!! index번호는 주소에서 수정, 수정된 내용은 body에서 나온다.
  // '/:index' = /0 으로 받겠다. 라는 뜻
  const index = Number(request.params.index);
  members[index] = request.body;
  console.log('Done members patch', members);
  response.status(200).send({
    result: 'Updated'
  });
});
// 홍길동에서 홍길선으로 바꿈.

router.delete('/:index', function(request, response) {
  const index = Number(request.params.index);
  members.splice(index, 1);
  // 지우기 위해 splice 사용. index에 첫번째 있는 걸 지우겠다. 
  console.log('Done members delete', members);
  response.status(200).send({
    result: 'Deleted'
  });
});

module.exports = router;
//❕ member 구조를 스키마 또는 모델이라고 한다.

//Frontend Server
//create = post 메소드 
//body 를 가지고 있다.

const membersCreate = function(form) {
  // form 태그에 함수를 이용한다.
  // form 태그 전체를 가리킨다.
    const memberNameObject = form['member-name'];
    const memberAgeObject = form['member-age'];
  // 이름과 나이 태그를 memberA,NameObject에 넣는다.
  // 각각의 이름태그와 나이태그를 가리킨다.
    const member = {
      name: memberNameObject.value,
  // 이름에 값을 넣어준다.
      age: memberAgeObject.value
  // 나이에 값을 넣어준다.
    };
  //오브젝트 형태로 넣어준다.
    const successFunction = function() {
  // 통신이 완료 후에 호출 될 함수이다.
      memberNameObject.value = '';
      memberAgeObject.value = '';
  // 한번 싹 다 지우기
      membersRead();
  // 지우고 난 후에 남은 것을 다시 보여준다.
  // 늘어난 정보를 다시 화면에 그려준다.
    }
    const xhrObject = new XMLHttpRequest();
  // new와 클래스로 불러온다.
    xhrObject.onreadystatechange = function() {
  // 준비된 상태 = 일단은 0, 0 부터 시작함.
  // 숫자가 변할 때마다 실행할 함수를 넣어주는 방식.
      if (xhrObject.readyState !== 4) return;
  // 4가 아니면 끝난다.
      if (xhrObject.status === 200) {
  //200으로 정상 작동시킨다.
        successFunction();
  // successFunction을 호출한다.
      } else {
        const error = {
          status: xhrObject.status,
          statusText: xhrObject.statusText,
          responseText: xhrObject.responseText
        }
        console.error(error);
      }
    };
  // 할일을 정해놓고 상황이 나타나면 일어나게끔하는것이 콜백함수이다.
  // 언제 끝날지 모르지만 실행하고 싶을 때 사용.
  
    xhrObject.open('POST', 'http://localhost:3100/api/v1/members');
  // post 메소드로 이런 주소로 통신하겠다.
    xhrObject.setRequestHeader('Content-Type', 'application/json');
  // 제이슨형식으로 할 거다.
    xhrObject.send(JSON.stringify(member));
  // 중요 !!! 새로 추가 될 내용을 제이슨 스트링파이로 감쌌다.
  // 통신은 무조건 문자로 주고 문자로 받는다. 
  };
  
  // 백엔드에서는 오브젝트로 주고, 프론트에서는 문자로 받는다.
  // 백엔드는 정보가 추가되어 6명인 상태이다.
  
  // 백엔드 통신 
  router.post('/', function(request, response) {
    members.push(request.body);
  // 바디로 넘긴다.
    console.log('Done members post', members);
    response.status(200).send({
      result: 'Created'
    });
  }); 

  // read = get
// - const membersGet = sessionStorage.getItem('members');
// - const membersLogical = membersGet || '[]';
// - const members = JSON.parse(membersLogical);
// + let members;
// 백엔드에서 회원정보를 받아와 스크립트 변수 멤버스에다 넣는다. 
// 멤버스함수를 다른 곳에서도 쓸 수 있게끔. 
// 값이 달라져서 const 보다 let을 사용.


const membersRead = function() {
  const successFunction = function(xhrObject) {
    const membersLogical = JSON.parse(xhrObject.responseText);
// resposeText의 문자를 오브젝트로 바꾸겠다. 
    members = membersLogical.members;
// 회원 6명을 불러오겠다.
    const tagDivParent = document.getElementById('tag-div-parent');
// 부모객체를 선택한다.
    tagDivParent.innerHTML = '';
// 싹다 지운다.
    const tagDivChild = document.getElementById('tag-div-child');
// 복사 당할 템플릿을 선택한다.
    for (let index in members) {
      const newDivChild = tagDivChild.cloneNode(true);
// 복사한다.
      tagDivParent.appendChild(newDivChild);
      const membersNameObject = document.getElementsByName('members-name')[index];
      const membersAgeObject = document.getElementsByName('members-age')[index];
      const membersUpdateObject = document.getElementsByName('members-update')[index];
      const membersDeleteObject = document.getElementsByName('members-delete')[index];
// 하나하나씩 선택한다.
      membersNameObject.value = members[index].name;
// 이름 인풋태그에 값을 넣겠다.
      membersAgeObject.value = members[index].age;
// 나이 인풋태그에 인덱스 값을 넣겠다.중요 ***
      membersUpdateObject.index = index;
      membersDeleteObject.index = index;
// 버튼객체는 원래 인덱스 값이 없다. 하지만 인덱스 값에 0을 넣어서 호출하겠다. 
// 속성을 하나 만든 다음에 0을 넣어준다.
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

// body로 넘기고 싶으면, create로 넘겨야한다.넘기고 싶으면 쿼리스트링으로 url주소에 추가해야함.
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

// delete =delete
// body를 가지고 있다. 
const membersDelete = function(index) {
  const url = 'http://localhost:3100/api/v1/members/' + index;
// 지우고 싶은 인덱스를 넣어야한다. 
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
// 메쏘드는 delete 주소는 url
  xhrObject.setRequestHeader('Content-Type', 'application/json');
  xhrObject.send();
};

// 백엔드 통신 
router.delete('/:index', function(request, response) {
  const index = Number(request.params.index);
// 끝에 index라서 위에 '/:index'가 인덱스이다.
  members.splice(index, 1);
// index 한개만 지우겠다.
// 동작을 하는 기능이 백엔드로 왔다라고 생각하면 쉬움.
// 프론트는 그냥 확인하는 정도 ! 
  console.log('Done members delete', members);
  response.status(200).send({
// 정상통신하겠다. 
    result: 'Deleted'
  });
});


update = patch
const membersUpdate = function(index) {
  const url = 'http://localhost:3100/api/v1/members/' + index;
  const name = document.getElementsByName('members-name')[index].value;
  const age = document.getElementsByName('members-age')[index].value;
  const member = {
    name: name,
    age: age
  };
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

// ❔ 브라우저에서 주소 치고 들어가는 것은 무조건 무슨 메소드 인가?

// = read / get 통신이용.

// ❔ 브라우저에서 주소 치고 들어가는 것은 무조건 무슨 메소드 인가

// 404: backend쪽 페이지가 없는 경우
// 400: frontend쪽에서 정보가 재대로 넘어 오지 않은 경우
// 403: 인증관련 에러 (로그인이 제대로 되지 않은 경우)
// 500: backend쪽 에러 (backend 문법 오류 또는 DB가 멈춰 있는 경우)

// swagger  
// - swagger 란 = open api specification(OAS)를 위한 프레임워크다.
