
// carts.html 중에서
//</thead>
//<tbody id="tag-tbody-parent"></tbody>
//</table>
//<table style="display: none;">
//<tbody>
  //<tr id="tag-tr-child">
    //<td><input type="checkbox" onchange="" /></td>
    //<td name="carts-name"></td>
    //<td name="carts-enter"></td>
    //<td class="td-expire"><input type="date" value="2021-02-02" onchange="cartsUpdate(index, key)" name="carts-expire" /></td>
    //<td class="td-delete">
      //<button class="button-delete" name="carts-delete" onclick="cartsDelete(key)"><span class="material-icons">delete</span></button>
    //</td>
  //</tr>
//</tbody>
//</table>

// *** 중요 모든 tag나 내용은 <td>와 </td> 사이에 있어야 한다. 
// *** 대부분의 오류는 오타가 제일 많이 일어나고, 순서대로 디버그 하면서 관계를 이해하고 찾아야한다.
// *** 그리고 모든 코딩을 마치고 잘 돌아가는지 확인 해야한다. 

// carts.js 중에서 
let index = 0;
    for (let key in carts) {
      const newDivChild = tagDivChild.cloneNode(true);
      tagDivParent.appendChild(newDivChild);
      // html
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
      // db 
      index++;
    }