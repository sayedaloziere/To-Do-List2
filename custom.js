const todoBtn = document.querySelector('.todobtn'); 
const todoInput = document.querySelector('#todoInput');
const todoUl = document.querySelector('.todo-list')

todoBtn.addEventListener('click',addTask )
todoUl.addEventListener('click' , check)
function addTask(e){
    e.preventDefault();

    const todoLi = document.createElement('li')
    todoLi.classList.add('todo');

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo-item')

    todoDiv.innerText = todoInput.value ; 

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = `<i class="fa fa-check"></i>`

    const trashBtn = document.createElement('button')
    trashBtn.classList.add('trash')
    trashBtn.innerHTML = `<i class="fa fa-trash"></i>`

    todoLi.appendChild(todoDiv);
    todoLi.appendChild(completeBtn);
    todoLi.appendChild(trashBtn);
    todoUl.appendChild(todoLi);

    todoInput.value = '';

}



function check(e){
    // console.log(e.target)
    const item = e.target 
    if (item.classList[0] ==='complete') {
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
    if (item.classList[0] ==='trash') {
        const todo = item.parentElement;
        todo.classList.toggle('fall');
        todo.addEventListener('transitionend',()=>{
            todo.remove();
        } )
    }
}