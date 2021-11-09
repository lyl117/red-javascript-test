
//<div>
  //<form method="get" onsubmit="alert(this['template'].value); return false;">
    //<input type="text" name="template" value="Ajax done" placeholder="Name">
    //<input type="submit" value="Alert">
  //</form>
//</div>

// ⇒ 버튼을 누르면, 파일과 통신하여 불러오고, 문자열로서 돌려준다. 
// 서버가 되어서 문자로서 돌려준다.
// 버튼을 누르면 이 html파일을 뜨게 해준다.  
// 통신을 하며 주고 받는 파일이다. 
// 문자로 해도 태그로 인식한다. 

<body>
  <div><button onclick="ajaxTest()">Ajax run</button></div>
  <div id="tag-div"></div>
</body>
// d="tag-div가 전에 배웠던 부모를 말한다.
// 위 html부분이 div안에 들어간다. 
// true는 복사해서 넣는 것이고, 그 자체를 서버에서 가져오는 것. 태그 div안에 넣었다.


const ajaxTest = function() {
  const xhrObject = new XMLHttpRequest();
  xhrObject.onreadystatechange = function() {
// 준비된 상태 = 일단은 0, 0 부터 시작함.
// 숫자가 변할 때마다 실행할 함수를 넣어주는 방식.
    if (xhrObject.readyState !== 4) return;
    if (xhrObject.status === 200) {
// 404는 서버에 페이지가 없을 때 뜸.
// 200은 정상적인 통신상태.
      console.log('Done', xhrObject.responseText);
      const tagDiv = document.getElementById('tag-div');
      tagDiv.innerHTML = xhrObject.responseText;
    } else {
      const error = {
        status: xhrObject.status,
        statusText: xhrObject.statusText,
        responseText: xhrObject.responseText
      }
      console.error(error);
    }
  };
  xhrObject.open('GET', './basicTemplate.html');
  xhrObject.setRequestHeader('Content-Type', 'application/json');
  xhrObject.send();
};

// pending (= 대기중)
// cors = 유명한 에러. 통신을 못하거나 권한이 없을 시 뜨는 에러

//Backend와 통신
  // node.js 설치
  // Backend Server = node.js
  // # BE 서버 실행 방법
  // npm install
  //= 설치 할 때
  // npm start
  // = '실행이 된다'의 의미임.
  // node index.js
  // # 터미널 종료
  // Ctrl + c
  //❕ member 구조를 스키마 또는 모델이라고 한다.
  
  // node.js 들어가는 법 
  // = 위 메뉴얼에 file에 new window에 들어가서 원하는 파일을 클릭한다.
  
  // 서버 폴더 설명 
  // mocks = 가짜 데이터, 임시적으로 쓸 수 있는 데이터, db에 들어가야 진짜 데이터임.
  // 껐다 키면 다시 초기화됨. 화면에 데이터를 기본적으로 보여주려고 가짜 데이터를 만듬.
  // npm (node product manager) 
  // swagger 사이트는 백엔드가 프론트에게 이렇게 했어라고 보여줄 수 있는 사이트.
  
  
