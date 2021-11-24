
// javascript 복습 
// 변수와 상수 

// let a(변수) = 1; 
// * 변수
// 변수하면 let을 주로 사용하는데, 값이 담기고 데이터를 저장하는 공간이다.
// 값을 가지고 있고, 이값을 언제든 바뀔 수 있으며 사용할 수 있다.
// ex) var,let
// - 특히 var는 중복선언이 가능하다. 그래서 겹칠 수 있기에 권장하지 않음
// - let은 중복선언이 가능하다. 그래서 안정성 있고, 변수의 데이터를 바꿀 수 있다.
let v1 = true;
let v2 = 100;
let v3 = 'abc';
console.log(v1, v2, v3);
v1 = false;
v2 = -10;
v3 = 'def';
console.log(v1, v2, v3);
// 자료형 데이터를 보관 할 수 있고, 자유롭게 값 수정할 수 있다. 
//boolean(true,false), 숫자, 문자 이 3가지가 주로 쓰임.
// v1변수가 let을 2번 선언할 수 없다. 
// v4변수가 없는데 console.log(v4); 를 찍는다면 에러가 나타남.

// * 상수
// 상수는 const를 주로 사용하는데 한번 선언하면 바꿀 수 없다.
// ex) const 
// - 중복선언이 불가능하며, 변수의 할당된 데이터가 변경되지 않는다
// - 한번 선언된 값의 변경을 막기위해 사용됨.
// - c1에 상수에 const를 2번 선언하면 에러가 뜬다.
// - c1 상수에 값을 변경할 수 없다.

// 변수명 짓기 
// - 변수 이름은 카멜케이스 방법으로 작성
// ex) userName, user_name
// - 변수 이름은 _(언더바), 있는 $,문자로만 시작한다.
// - 상수나 축약어는 대문자와 스네이크케이스 방식으로 작성 
// ex) HTML,MAX_LEVEL(스네이크케이스 = 단어사이를 _언더바로 구분)
// - 제어문으로 사용 불가(if,for,switch,while)
// - 연산자 이름으로 사용 불가(+, -,*,/,==, !, < , >)
// - 자료형 또는 예약어 사용불가(true,false,null,NaN,delete)
// - 숫자를 앞으로 사용 불가
// - 대소문자 구분

// 자료형 = 값의 유형, 그리고 값이 가질 수 있는 여러가지 유형을 구분한 개념.
// ex) 숫자형, 문자열형, 논리형, null, undefined 등

// typeof = 피연산자의 자료형을 문자열로 반환
// 문자형 = ''," ", 따옴표로 구분. html 파일은 " "로, js파일은 ' '로 사용
// 논리형 = true, false(boolean)
// undefined = undefined
// null = null(object)

//참조타입 (참조자료형, 또는 참조형)
// 배열 (array) = [ ]
// 객체 (object) = { }
// 함수 (funtion) = ( ), { }

// 숫자형  (number)
// - 모든 숫자의 형태를 허용한다.
// - nan(숫자가 아니다 not a number ), infinity (무한수) 이 존재한다.

// 문자형(string)
// - 큰따옴표나 작은 따옴표로 둘러 쌓인 값
// - 문장에 작은 따옴표가 있으면 큰따옴표로 시작 (반대로 해도 가능)
// - 여러가지 섞여 있을 때 이스케이프 문자 이용(\n(한줄 띄어서 출력),\t(문자 사이 간격을 탭만큼 띄워 출력함, \\두번하면 단순 슬래시로 적용됨.))

//undefined
// - 자동으로 부여된다.

//null 
// - 명시적으로 변수공간이 비어있음을 의미할 때 사용합니다.
// - 의도적으로 비워났음을 의미

//논리형 (boolean)
// - true or false의 두가지 답변으로 이루어져있다.

// = 값을 대입할 때 사용, 즉 오른쪽에 쓴값을 왼쪽에 할당할 때 사용.
// === 일치 연사자는 피연산자들끼리 자료형과 값이 둘 다 같을 경우만 참을 반환.값과 타입을 같이 비교한다
// == 동등연산자, 연산자를 이용하여, 서로 다른 유형의 두변수의 값만 비교한다.
// 변수를 비교하거나 항상 연산자를 사용할 것을 권장.(가독성이 좋아진다.)

// 한줄에 변수 여러개 선언하기 (선언문)
let a, b, c;

// 문자열끼리 연산하기
let string1 = '1';
let string2 = '2';
let result1 = string1 - string2;
let result2 = string1 * string2;
let result3 = string1 / string2;
let result4 = string1 + string2;

result1 = -1
result2 = 2
result3 = 0.5
result4 = "12"

'1'-> 1 로 변환
result1 = -1
result2 = 2
result3 = 0.5
result4 = "12"

string1 = 1 -> 'a'
string2 = 2 -> 'b'

result 1,2,3 = NaN
result4 = "ab"


// ==(동등 연산자) 연사자와 ====(일치 연산자) 연산자의 차이 
let oNum1 = 1 == '1';
let oNum2 = 1 === '1';
let true1 = 1 == true;
let true2 = 1 === true;
let true3 = 1 != true;
let true4 = 1 !== true;
let false1 = 0 == false;
let false2 = 0 === false;
let char1 = true == 'true';
let char2 = true === 'true';
// *** ==는 '값'만 비교하고, ====는 '타입'까지 비교한다.
// 정답
oNum1 = true 
oNum2 = false
true1 = true
true2 = false
true3 = false
// 부등 비교 연산자의 반대값
// -> 양 쪽 비교 데이터의 타입이 숫자와 문자열로 다르기 때문에 오른쪽 문자열은 
// 숫자로 캐스팅되고 양쪽 값은 같은 값이 됩니다. 따라서 이 비교식은 1!=1 과 동일한 비교가 됩니다.
true4 = true
// 엄격한 부등 비교 연산자의 반대값 
// 타입이 다를 경우 값이 다른것으로 간주 
// 예를 들어 1!=='1'은 true로 반환
// 양쪽 값의 타입이 숫자와 문자로 다르므로 같지 않은지를 비교하는 엄격한 부등비교 연산자의 결과값은 true 가 된다.
false1 = true
// 자바스크립트에서 0은 무조건 false이다.
false2 = false
char1 =  false
char2 = false

const x = 1 === 2;
console.log(x);

// 비교 연산자
let compare1 = 1 < 1;
// = 미만
let compare2 = 2 <= 2;
// = 이하
let compare3 = 3 > 3;
// = 초과
let compare4 = 4 >= 4;
// = 이상 

// 논리 연산자 
let logical1 = true && true;
// 모두 true인 경우 true
let logical2 = false || false;
// 어느 하나가 true 인경우 true
// - `&&`를 사용하는 상황: 로그인이 되어 있고, 글수정 권한이 있는 아이디인 경우, 글수정 버튼 활성화
// - `||`를 사용하는 상황: 프리미엄 회원이거나 광고를 본 경우, 영상 시청 가능

const y = (true === false);
console.log(y);

// 거짓 조건 비교하기
// - 거짓조건은 false,0,null,undefined,NaN이고 나머지는 모두 참인 조건이 된다.
let d1;
// 선언 하고 값을 넣지 않으면 undefined
let d2 = null;
// 선언 하고 null 값을 넣으면 null
let condition1 = d1 == d2; // 참,true
let condition2 = d1 === d2; // 거짓,false
if (condition1) {
  console.log('참'); // 결국 console창에는 참이 뜬다.
} else {
  console.log('거짓');
}

if(1 === 1){
  console.log('참');
};

// 3항 연산자 
const condition3 = 1 === 1 ? 'a' : 'b';
// - 1 === 1 조건문이 true면,'a', false면 'b'

// 문제 풀이 
const condition4 = 2 === 3 ? 'c' : 'd';

배열 
// 배열을 사용하는 이유
1//. 순차적인 반복 작업에 사용한다. (주로 동일한 데이터 타입으로 묶인 경우가 많다.)
2.// 숫자(index)를 바탕으로 해당 데이터에 접근 한다.

// 배열의 CRUD
// create 
array1.push(1);
array1.push('2');
array1.push('삼');

// read
const a1 = array1[0];
const a2 = array[1];
const a3 = array1[2];

// update 
array1[0] = undefined;
array1[1] = false;
array1[2] = [1,2,3];

// delete 
array1.splice(0,1);
array1.splice(1,1);
array1.splice(2,1);

for문
// ### **for문을 사용하는 이유**
1.// 반복 작업을 한곳으로 묶기 위해 사용함 (주로 배열이 사용 된다.)
2.// 주로 게시판에 목록을 보여줄때 주로 사용함

// for문 문법
// 기본구조 
for (초기문; 조건문; 증감문) {
  실행문;
  ...
}

for (let index1 = 0;초기문 index1 < 3; 조건문 index1++ 증감문) {
  console.log(index1);
}

// break 
for (let index2 = 1; index2 <= 3; index2++) {
  console.log(index2);
  break;
}
// 이제 더이상 반복하지 말고 바로 for문이나 while문으로 끝내라 = switch문, 
// 레이블 문과 결합한 문장을 빠져나올 때 사용한다. break를 사용하면 switch문을 종료하고
//  다음 명령어로 넘어갑니다. 레이블문은 특정 레이블 문에서 끝난다.

for (let index3 = 1; index3 <= 3; index3 += 1) {
  if (index3 === 2) {
    continue;
  }
  console.log(index3);
}
// 반복을 끝내지는 않지만 for문이나 while문의 { } 안에서 continue 문장을 만나는 순간,
// continue문 아래에 있는 실행해야 하는 문장들을 건너뛰고 다음 반복을 시작한다.

// 1번 문제 
for(let index4 = 1; index4 <=10; index4 += 2) {
  console.log(index4);
}
// 2번 문제 
for(let index5 = 2; index5 <=10; index5 +=2){
  console.log(index5);
}
// 홀수와 짝수 표현하기 
for(let index6 = 1; index6<=10; index6 +=1){
  if(index6 % 2 === 1){
    console.log('숫자' + index6 +'은 홀수 입니다.');
  } else {
    console.log('숫자' + index6 + '은 짝수 입니다.');
  }
  const oddEven = index6 % 2 ? '홀수': '짝수';
  console.log('숫자'+ index6 + '은' + oddEven +'입니다.');
}

// 문제 풀이 
let total = 0; 
for(let index8 = 1; index8<=5; index8++){
  total += index8;
}
console.log(total1);

// 문제 풀이 
let total1 = 0;
let index8 = 1;
for(; index8<=5; index8++){
  total1 += index8;
}
const count = index8 - 1;
const avg1 = total1 / count;
// 5를 바로 넣지 않고, count를 넣는것이 제일 중요 !
// count = 배열의 길이를 구하기 위한 함수. 
console.log(avg1);

// for문에서 배열 사용하기
const array1 = [1,2,3];
for(let index9 =0; index9 < array1.length; index9++) {
  console.log(array1[index9]);
}

// 문제풀이 
const array1 = [1,2,3];
for(let index9 =0; index9 < array1.length; index9++) {
  console.log(array1[index9]);
}
console.log(array2);
// 결과적으로 array2는 array1을 복사하였다.
// array1 ==== array2는 참일까?
// -> 거짓, fasle다. 왜냐하면 메모리주소가 달라서.

// 메모리 설명
let array3 = [1, 2, 3];
let array4 = array3;
// array3 === array4 참일까?
// -> 참

array3 = 3;
array4 = 4;
// array3에서 사용하던 배열에 다시 접근할 수 있을까?
// 없다.(따라서 배열은 const사용해야함.)

함수 
// 함수를 사용하는 이유
1.// 여러줄에 걸쳐 실행되던 동일한 작업을, 함수 호출 한줄로 동일한 결과를 만들어 낼 수 있다. `DRY`: (Don't repeat yourself)
2.// 반복됐던 만큼 코드양이 줄어 가독성을 높일 수 있다.

// 함수 문법 
// 1. 기본 구조
// 함수 선언부
const 함수명 = function(인자1, 인자2, ...) {
  실행문;
  ...
  return 반환값;
};

// 함수 호출부
const 반환받는상수 = 함수명(인수1, 인수2, ...);

// 예제 
const func1 = function(parameter1, parameter2) {
  // let parameter1 = 인수1 (사실은 이렇게 되어있는 샘)
    const sum1 = parameter1 + parameter2;
    return sum1;
  };
  const returned1 = func1('argument1', 'argument2');

  // 문제 풀이 
  const f1 = function(){
    console.log('함수 호출');
  }
  f1();
  // 호출 : 앞에 호출시키고 싶은 상수 + ();
  
  // 인수에 자료형 데어터 넘기기
  const scriptConst2 = 'a';
  // scriptConst2 = 'a'
  const func2 = function(parameter1) {
      const compare1 = scriptConst2 === parameter1;
      // scriptConst2 === parameter1;  = 'a' 똑같은 값을 가짐.
      parameter1 = 'b';
      const compare2 = scriptConst2 === parameter1;
      // 값이 'b'값으로 바뀜.
  };
  func2(scriptConst2);
  
  정답 
  scriptConst2 === parameter1; 
  // 이름은 다르지만, 똑같은 자료형이 들어있기 때문에 true
  parameter1 = 'b';
  scriptConst2 === parameter1;
    // parameter1이 'b'로 바뀌면서 false
  
  // 인수에 자료형 데어터 넘기기
    const scriptConst3 = [];
    // *** 중요 ! 배열을 넘김.
  const func3 = function(parameter1) {
    const compare1 = scriptConst3 === parameter1;
    parameter1.push('a');
    scriptConst3.push('b');
    const compare2 = scriptConst3 === parameter1;
};
func3(scriptConst3);

compare1 -> true
compare2 -> true

// 빈 배열을 넣은 것이다. 
// 앞서 본 자료형이 아닌 객체(object), 배열, 함수는 같은 메모리 주소를 같기 때문에 
// 주소만 같다면 true, 아니라면 flase

// ❔ `compare2`는 `참`일까, `거짓`일까?
// —  true 
// = 빈 배열 같이 scriptConst3 과 parameter1 에 넣은 것이다. 결국 다른 값으로 push 를 해도 메모리 주소는 같다.

// 인수에 함수 넘기기 
const scriptConst4 = function() {};
const func4 = function(parameter1) {
    const compare1 = scriptConst4 === parameter1;
    parameter1 = function() {};
    const compare2 = scriptConst4 === parameter1;
};
func4(scriptConst4);

// compare1 -> true
// compare2 -> false 
// compare2가 거짓인 이유는 중간에 parameter1에 새로운 함수를 넣었기 때문.

// 익명 함수를 인수로 넘기기 
- func4(scriptConst4);

func4(function() {
  // function()= 콜백 함수.
  console.log('익명함수 호출');
});
//  문제: 인수로 넘긴 익명 함수를, 인자로 호출 시키기
// parameter1();
// 인수로 함수를 넘기고, 인자로 호출시키는 함수를 `콜백 함수`(Callback function)라 한다.
// - 콜백 함수 = 함수를 변수 또는 다른 함수의 변수처럼 사용할 수 있다. 
// 함수를 콜백함수로 사용할 경우, 함수의 이름만 넘겨주면 된다. ex) callback, finishFunc처럼 () 를 붙일 필요가 없단는 것이다.

// Create
membersCreate('홍길동');

// Read
membersRead();

// Update
membersUpdate(0, '김유신');

// Delete
membersDelete(0);


// 1. create
const members = [];
// 1)  빈 배열을 일단 호출 
const membersCreate = function(member) {
  // member 호출(변수명 및 내가 추가 할 이름) 
  members.push(member);
  // member push 
  return members;
  // members로 다시 리턴
};

// 2. read 
const membersRead = function() {
  return members;
};
// members 를 그대로 가져오기

// 3. delete 
const membersDelete = function(index) {
  members.splice(index, 1);
  return members;
};
// index(몇번째 및 번호)를 1개 삭제한다.

// 4. update 
const membersUpdate = function(index, member) {
  members[index] = member;
  return members;
};
//index (몇 번쨰 및 번호) 를 member (내가 새로 추가할 정보 및 이름) 으로 업데이트한다.


const members =[];
const membersCreate = function(member) {
  members.push(member);
  return members;
};
const membersRead = function(){
  return members;
};
const membersDelete = function(index){
  memebers.splice(index,1 );
  return members;
};
const membersUpdate = function(index, member){
  members[[index]= member;
  return members;
};


// 오브젝트 (객체)
// 오브젝트를 사용하는 이유
// 1. 효율적인 관리를 위해 여러 변수를 한곳에 묶어서 사용한다.
// 배열과 오브젝트의 차이점
// ❕ 배열은 숫자(index)로  요소에 접근하고, 오브젝트는 문자(key)로 요소에 접근한다.

// 기본구조
const 오브젝트명 = {
  키1: 값1
  키2: 값2
};

const object1 = {};
const object2 = {
  key1: '값1',
  key2: [1, 2, 3],
  key3: function() {
    // console.log(this.key1);
    return this;
  },
  key4: {
    k1: 'v1',
    k2: 'v2'
  }
};
// — 오브젝트는 문자열, 배열, 함수, 2항 오브젝트를 사용할 수 있다.

// 오브젝트 crud 
// create 
object1.key = 1;
object1.key = '2';
object1['key3'] = '삼';

// read 
const o1 = object1.key1;
const o2 = object1['key2'];
const o3 = object1.key3;

// update 
object1['key1'] = [];
object1.key2 = function() {};
object1.key3 = {};

// delete 
delete object1.key1;
delete object1.key2;
delete object1['key3']

// object2.key2` 배열의 `length` 구하기 (`. 연산자`, `대괄호 연산자` 사용)
// = object2.key.length

// `object2.key3` 함수 호출 시키기 (`. 연산자`, `대괄호 연산자` 사용)
// = object2.key3();

// this 연산자의 개념 설명, // console.log(this.key1); 주석을 푼다면
// — this 는 object2의 부모라고 생각하면 된다.
// 그래서 object2 == this 라고 보면 된다. 
// 주석을 풀게 되면 답은 '값' 이나오게 된다.

// object2.key4 오브젝트의 k1키 삭제 하기 (. 연산자, 대괄호 연산자 사용)
// = delete object2.key4.k1

// 키이름에 대한 규칙
// `영문, 숫자, _, $`를 자유롭게 조합해서 쓸 수 있다.
// 숫자를 앞으로 사용 불가 (1a, 2b, ...)

// 오브젝트의 for in 문 
for (const c1 in object2) {
  const value1 = object2[c1];
  console.log(c1);
  console.log(value1);
  console.log(object2.c1);
}

// — for문은 반복문이기 때문에 console.log 끝까지 돌게 된다.

// 1. c1 이 key1값을 가지게 된다.
// 2. value1에 "값1" 을 가지게 된다.
// 3. console.log (c1); 값으로 "key1"을 가지게 된다.
// 4. console.log(value1); 값으로 "값1"을 가지게 된다.
// 5. console.log(object2,c1); 값으로 undefined값을 가지게 된다. *이유는 object2에는 c1 변수명이 없기 때문이다.

// — 이 과정을 key4까지 돌게 된다.


// Object.keys 메소드 확인**

// const array2 = Object.keys(object2);
// array2.length;

// — keys를 주로 사용해서 length를 확인 할 수 있다. 
// =  아래 값으로 확인하게 된다.

array(4)
0: "key1"
1: "key2"
2: "key3"
3: "key4"
length : 4

// Create
membersCreate({
  name: '홍길동',
  age: 20
});

// Read
membersRead();

// Update
membersUpdate(0, {
  name: '김유신',
  age: 30
});

// Delete
membersDelete(0);

// try catch문(제어문 > 예외처리문)**

// try catch문을 사용하는 이유?**
// 1. 에러가 발생할 경우 처리를 위해 사용한다
// 2. try문 밖에서 에러가 발생할 경우 프로그램 진행이 멈추지만, try문 안에서 발생할 경우 프로그램이 계속 진행 된다.

// 실행문에서 에러가 뜸 → 그럼 catch 에서 에러가 발생했기 때문에 catch 실행문이 실행 됨 → 그리고 계속해서 이어지게 끔 해주는 역할을 try catch가 해준다. (보통 에러가 떠서 그다음으로 못넘어감 )

//기본 구조
try {
  실행문;
  ...
} catch(에러객체) {
  // try block에서 에러가 발생할 경우 실행
  실행문;
  ...

  // 예제 
  try {
    t1;
    console.log('진행 가능1?');
  } catch(error) {
    console.warn(error);
  // 경고 차원에서 노랑색으로 뜸.
    console.error(error);
  // 에러 차원에서 빨간색으로 뜸.
  }
  console.log('진행 가능2?')
