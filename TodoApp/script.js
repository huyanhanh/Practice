const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const input = $('.input')
const todos = $('.todos')
const form = $('form')
const edit = $('.edit')
// console.log(edit)
form.onsubmit = (e) => {
    e.preventDefault()
    let val = input.value.trim()

    if(val) {
        addTodo({
            text: val,
        })
        saveTodo()
        
        input.value = ''
    }
    
}

function addTodo(todo) {

    let li = document.createElement('li');
    li.setAttribute('class', 'list-item')

    li.innerHTML = `
        <span class="item-content">${todo.text}</span>
        <i class="delete fa-solid fa-trash"></i>
    `

    if(todo.status === 'completed') {
        li.setAttribute('class', 'completed')
        saveTodo()
    }


    // delete
    li.querySelector('i').onclick = function() {
        this.parentElement.remove()
        saveTodo()
    }

    todos.appendChild(li)

}

function saveTodo() {
    let todolist = document.querySelectorAll('li')
    let todoListStorage = []
    todolist.forEach(function(item) {
        let value = item.querySelector('span').innerText
        let status = item.getAttribute('class')

        todoListStorage.push({
            text: value,
            status: status
        })
    })

    
    localStorage.setItem('todolist', JSON.stringify(todoListStorage) )
}

function init() {
    let data = JSON.parse(localStorage.getItem('todolist')) || []

    data.forEach(function(item) {
        addTodo(item)
    })  
}

init()