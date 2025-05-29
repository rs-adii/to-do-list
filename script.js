const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("priority");
const todoList = document.getElementById("todoList");
const doneList = document.getElementById("doneList");
const timeElement = document.getElementById("time");

// Tampilkan waltu saat ini
function showTime() {
const now = new Date();
const option = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
timeElement.textContent = now.toLocaleDateString('id-ID', options);
}
showTime();

// Tambah tugas
function addTask() {
    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;

    if(taskText === "") {
        alert("Tugas Tidak Boleh Kosong!");
        return;
    }

    const listItem = document.createElement("li");
    listItem.innerHTML = `
    <input type="checkbox" onchange="markAsDone(this)">
    <span>[${priority}] ${taskText}</span>
    <small style="display:block; font-size:0.8em; color:#666;">${new Date().toLocaleDateString('id-ID')}</small>
`;

todoList.appendChild(listItem);
taskInput.value = "";
prioritySelect.value = "Low";
}

// Centang = pindah ke Done
function markAsDone(checkbox){
    const listItem = checkbox.parentElement;
    listItem.classList.add("done");
    listItem.removeChild(checkbox);
    doneList.appendChild(listItem);
}

// Hapus semua
function deleteAll() {
    if(confirm("Yakin ingin menghapus semua tugas?")) {
        todoList.innerHTML = "";
        doneList.innerHTML = "";
    }
}