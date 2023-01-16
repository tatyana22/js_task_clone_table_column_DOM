'use strict';

// write your code here
const table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  let el;

  if (i === 0 || i === table.rows.length - 1) {
    el = document.createElement('th');
  } else {
    el = document.createElement('td');
  }
  el.innerText = table.rows[i].cells[1].innerText;

  const el2 = table.rows[i];

  el2.insertBefore(el, el2.children[4]);
}
