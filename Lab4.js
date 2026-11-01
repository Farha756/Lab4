"use strict";
let Task = [];
let d = document.getElementById('taskDiv');
console.log(d);
let add = document.getElementById('add');
let taskInput = document.getElementById('taskInput');
add.addEventListener("click", adder);
function adder() {
    const task = taskInput.value;
    Task.push(task);
    render();
}
function render() {
    const p = document.createElement('p');
    p.textContent = Task[Task.length - 1];
    d.appendChild(p);
}
