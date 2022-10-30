let list = (document.getElementById("list") as HTMLInputElement);
let newTask = (document.getElementById("newTask") as HTMLInputElement);

document.getElementById("addTask").addEventListener('click', () => {
    list.insertAdjacentHTML('beforeend', `<li class="list-group-item">${newTask.value}</li>`);
    newTask.value = '';
});