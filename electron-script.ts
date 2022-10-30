import {ipcRenderer} from 'electron';

let list = (document.getElementById("list") as HTMLInputElement);
let newTask = (document.getElementById("newTask") as HTMLInputElement);

document.getElementById("addTask").addEventListener('click', () => {
    list.insertAdjacentHTML('beforeend', `<li class="list-group-item">${newTask.value}</li>`);
    ipcRenderer.invoke('show-notification', newTask.value);
    newTask.value = '';
});