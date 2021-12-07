
// backend 서버

const router = global.express.router();
// 호출만 한 상태
const members = global.mocks.members;
// global = window

// create 
router.post('/', function(request, response) {
  // '/' = 모든 어떤것이 와도 통신하겠다. 무조건 허락 된 상태 
  console.log('Done members post', members);
  // requset.body를 회원정보를 넘긴다.
  response.status(200).send({
    result: 'created'
  });
});
// 이전까지는 대기중. 이게 끝이나야 돌아감.(모든 crud가 그렇다.)

router.get('/', function(requset, response){
  console.log('Done members get', members);
  response.status(200).send({
    result:'Read'
    members: members
    // 내가 가지고 있는 mock데이터를 넘기겠다. 이뜻.
    // 모르는 파일이 뜨면 끝났다는 뜻.
  })
});

router.patch('/:index', function(request, respose) {
  // '/:index' = http://localhost:3100/api/v1/members/0' \<- 이주소를 request.params.index로 받는다.라는 뜻 
    // 중요 ***!!! index번호는 주소에서 수정, 수정된 내용은 body에서 나온다.
    // '/:index' = /0 으로 받겠다. 라는 뜻
    const index = Number(requset.params.index);
    members[index]= request.body;
    console.log('Done members patch', members);
    response.status(200).send({
      result: 'Updated'
    });
  });
  // 홍길동에서 홍길선으로 바꿈.)
});

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
  
  // ❕ member 구조를 스키마 또는 모델이라고 한다.

// frontend 서버 
// create = post메소드 
// body를 가지고 있음 

const membersCreate = function(form){
  // form태그에 함수를 이용한다.
  // form태그 전체를 가리킨다.
  const memberNameObject = form['member-name'];
  const memberAgeObject = form['member-age'];
  // 이름과 나이태그를 memberA,NameObject에 넣는다.
  // 각각의 이름태그와 나이태그를 가리킨다.
  const member = {
    name: memberNameObject.value,
    // 이름에 값을 넣어준다.
    age: memberAgeObject.value
    // 나이에 값을 넣어준다.
  };
  // 오브젝트 형태로 넣어준다.
  const xhrObject = new XMLHttpRequest();
  // new와 클래스로 불러온다.
  // XMLHttpRequest 객체를 생성한다.
    xhrObject.onreadystatechange = function() {
  // 준비된 상태 = 일단은 0, 0 부터 시작함.
  // 숫자가 변할 때마다 실행할 함수를 넣어주는 방식.
      if (xhrObject.readyState !== 4) return;
  // 4가 아니면 끝난다.
      if (xhrObject.status === 200) {
  //200으로 정상 작동시킨다.
        successFunction();
  // successFunction을 호출한다.
  
  // 에러 콜백함수
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
  // 왜나하면 애초에 제이슨 형식(문자)으로 받았기 때문에
    xhrObject.send(JSON.stringify(member));
  // 중요 !!! 새로 추가 될 내용을 제이슨 스트링파이로 감쌌다.
  // 통신은 무조건 문자로 주고 문자로 받는다. 
  // send()라는 메소드로 전송한다.
  };