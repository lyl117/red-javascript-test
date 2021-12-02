const queryString = new URLSearchParams(window.location.search);
const inputText  = queryString.get('input-text');
const inputHiddens = queryString.getAll('input-hidden');
const inputHidden = inputHiddens[0];

const inputTextObject = document.getElementsByName('input-text')[0];
inputTextObject.value = inputText;
inputTextObject.focus();

const membersGet = sessionStorage.getItem('members');
const membersLogical = membersGet || '[]';
const members = JSON.parse(membersLogical);

const membersCreate = function(form) {
  const inputTextObject = form['input-text'];
  members.push(❔ 문제);
  membersSet();
  return membersRead();
};


const membersRead = function() {
  const tagPre = document.getElementById('tag-pre');
  return members;
};

const membersDelete = function(index) {
  members.splice(index, 1);
  membersSet();
  return membersRead();
};

const membersUpdate = function(index) {
  const name = ❔ 문제
  members[index] = name;
  membersSet();
  return membersRead();
};


const membersSet = function() {
  const membersSet = JSON.stringify(members);
  sessionStorage.setItem('members', membersSet);
};

const membersSubmit = function(form) {
  const inputTextObject = form['input-text'];
  try {
    const evalReturn = eval(inputTextObject.value);
    console.log(evalReturn);
  } catch(error) {
    console.error(error);
    alert(error);
    return false;
  }
}

membersRead();