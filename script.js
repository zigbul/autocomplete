const input = document.querySelector('.input');
const list = document.querySelector('.list');
const list2 = document.querySelector('.list2');

const btn = document.createElement('div');
btn.classList.add('btn');
btn.append('X');

const itemList = document.createElement('li');
itemList.classList.add('list-item');

const data = ['Redux', 'Redux-thunk', 'Redux-actions', 'React-redux', 'Redux-saga'];

input.addEventListener('keyup', () => {

   for (el of data) {

      if (el.includes(input.value)) {

         let newItem = itemList.cloneNode(false);
         list.append(newItem);
         newItem.append(el);

      } else {

         return false;

      }

   }

   if (input.value === "") {

      list.style.visibility = 'hidden';

      while (list.firstChild) {
         list.removeChild(list.firstChild);
      }

   } else {

      list.style.visibility = "visible";

   }

});

list.addEventListener('click', (e) => {
   let newListItem = e.target.cloneNode(true);
   newListItem.classList.remove('list-item');
   newListItem.classList.add('list-item-2');
   list2.append(newListItem);
   let newBtn = btn.cloneNode(true);
   newListItem.append(newBtn);

   newListItem.addEventListener('click', (e)=> {
      if (e.target === newBtn) {
         newListItem.remove();
      }
   })
})