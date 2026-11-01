let Task: string[] = [];
let d= document.getElementById('taskDiv') as HTMLInputElement;
let add= document.getElementById('add') as HTMLInputElement;
let taskInput = document.getElementById('taskValue') as HTMLInputElement;


add.addEventListener("click",adder);
 function adder(): void {
 const task = taskInput.value;

Task.push(task);
render();
}
function render(): void{
        const p = document.createElement('p') ;
        p.textContent = Task[Task.length-1];
       d.appendChild(p);
    
}