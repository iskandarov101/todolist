/* Description:
* Inputga qiymat yozilganda va yaratilish knopkasi bosilganda, yangi qaydi
* royihatga qoshilishi kerak. Undan tashqari, saqlash tugmachasi bosilganda
* royihatdagi ma'lumotlar modal oynasiga chiqish kerak.
*/

/* Create
* 1. Forma submit bo'lganda, inputni qiymatini olish kerak +
* 2. Obyekt prototipini yasash kerak +
* 3. Yangi element qo'shish funksiyasini yaratish kerak +
* 4. Olgan ma'lumotni arrayga qo'shish kerak (push() orqali) +
* 5. Elementlarga qaytarilmaydigan id berish kerak +
* 6. DOMga yangi qo'shilgan itemni chiqarish kerak +
* 7. Formani tozalab yuborish kerak +
*/

/* Delete
* 1. Delete knopkasiga click hodisasini qo'wiw kerak +
* 2. Bosilgan elementni DOMdan o'chirish kerak +
* 3. Arraydan elementni o'chirish kerak +
*/

var todoForm = document.querySelector("#todo-form");
var todoInput = document.querySelector("#todo-input");
var todoListHolder = document.querySelector("#todo-list-holder");
var todosCount = document.querySelector("#todos-count");

var todos = [];
var todoItemInitialId = 0;

function TodoItemPrototype(title, id) {
  this.title = title;
  this.id = id;
}

function removeTodo(todoId) {
  document.querySelector(`#todo-item-${todoId}`).remove();

  for(i = 0; i < todos.length; i++) {
    if(todos[i].id == todoId) {
      todos.splice(i, 1);
    }
  }

  todosCount.innerHTML = todos.length;
}

function createHTMLTodo(todoTitle, todoId) {
  var todolistItem = document.createElement('li');
  var deleteButton = document.createElement('button');

  todolistItem.textContent = todoTitle;
  todolistItem.setAttribute('class', 'list-group-item d-flex align-items-center justify-content-between');
  todolistItem.setAttribute('id', `todo-item-${todoId}`);
  deleteButton.textContent = `O'chirish`;
  deleteButton.setAttribute('class', 'btn btn-outline-danger');

  deleteButton.addEventListener('click', function(e) {
    e.preventDefault();

    removeTodo(todoId);
  })

  todolistItem.appendChild(deleteButton);
  todoListHolder.appendChild(todolistItem);
}

function createTodo(todoTitle) {
  todos.push(new TodoItemPrototype(todoTitle, todoItemInitialId));

  createHTMLTodo(todoTitle, todoItemInitialId);
  todoItemInitialId++;
}

todoForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  if(todoInput.value.length > 0) {
    createTodo(todoInput.value);
  }

  todosCount.innerHTML = todos.length;

  todoForm.reset();
})

// CRUD nimaligini o'rgandik
// reset()
// ProtoType function va new kalit so'zi
// createElement()
// textContent
// setAttribute()
// appendChild()
// remove()
// splice()