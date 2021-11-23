
// 배열 crud 

// create 
array1.push(1);
array1.push('2');
array1.push('삼');

//read
const a1 = array[0];
const a2 = array1[1];
const a3 = array[2];

// update
array1[0] = undefined;
array1[1] = false;
array1[2] = [1,2,3];

// delete 
array1.splice(0,1);
array1.splice(1.1);
array1.splice(2,1);


// 오브젝트 crud

// 오브젝트 Create
object1.key1 = 1;
object1.key2 = '2';
object1['key3'] = '삼';

// 오브젝트 Read (. 연산자, 대괄호 연산자)
const o1 = object1.key1;
const o2 = object1['key2'];
const o3 = object1.key3;

// 오브젝트 Update
object1['key1'] = [];
object1.key2 = function() {};
object1.key3 = {};

// 오브젝트 Delete
delete object1.key1;
delete object1.key2;
delete object1['key3']


