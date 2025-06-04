const taskInput = document.getElementById('taskInput');
const prioritySelect = document.getElementById('prioritySelect');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const doneList = document.getElementById('doneList');
const deleteAllBtn = document.getElementById('deleteAllBtn');
const tanggal = document.getElementById('tanggal');

const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
tanggal.textContent = today.toLocaleDateString('id-ID', options);

addBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  const priority = prioritySelect.value;

  if (task === '') return;

  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const taskText = document.createElement('span');
  taskText.innerHTML = `[<span class="priority-${priority}">${priority}</span>] ${task}<br><small>${today.toLocaleDateString('id-ID')}</small>`;

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      li.classList.add('done');
      doneList.appendChild(li);
    } else {
      li.classList.remove('done');
      todoList.appendChild(li);
    }
  });

  li.appendChild(checkbox);
  li.appendChild(taskText);
  todoList.appendChild(li);

  taskInput.value = '';
});

deleteAllBtn.addEventListener('click', () => {
  todoList.innerHTML = '';
  doneList.innerHTML = '';
});
