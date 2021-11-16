// 공통부분 함수화를 axios로 수정하기 

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
  axios.post('http://localhost:3100/api/v1/members', members).then(function() {
    memberNameObject.value = '';
    memberAgeObject.value = '';
    membersRead();
   });
  };

  const membersRead = function(){
    axios.get('http://localhost:3100/api/v1/members').then(function(response) {
      const memebersLogical = response.data;
      members = membersLosical.members;
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

  const membersDelete = function(index) {
    const url = 'http://localhost:3100/api/v1/members/' + index;
    // ajax('DELETE', url, undefined, membersRead);
    axios.delete(url).then(membersRead);
  };

  const membersUpdate = function(index) {
    const url = 'http://localhost:3100/api/v1/members/' + index;
    const name = document.getElementsByName('members-name')[index].value;
    const age = document.getElementsByName('members-age')[index].value;
    const member = {
      name: name,
      age: age
    };
    // ajax('PATCH', url, JSON.stringify(member), membersRead);
    axios.patch(url, member).then(membersRead);
  };