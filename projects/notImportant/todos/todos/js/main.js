console.log('Todos');
var gTodos;
var isFilter;
init();

function init() {
    gTodos = getTodos();
    renderTodos(gTodos)
}


function renderTodos(gTodos) {
    var elTodos = document.querySelector('.todos');
    var strHtmls = '';

    // Even better with Map
    gTodos.forEach(function (todo, idx) {
        var strHtml = `
                <li>
                  <input type="checkbox" id="c${idx}" onchange="toggleTodo(${idx})"  />
                  <label for="c${idx}" ><span></span>${todo.txt}</label>
                </li>
        `
        strHtmls += strHtml
    });
    elTodos.innerHTML = strHtmls;
}


function getTodos() {
    var todos = [];

    todos.push(getTodo('Style with Flexbox'));
    todos.push(getTodo('Master your HTML'));
    todos.push(getTodo('Practice Array Extras'));

    return todos;
}

function getTodo(txt) {
    return {
        txt: txt,
        isDone: false,
        isDeleted: false
    }
}


function toggleTodo(idx) {
    gTodos[idx].isDone = !gTodos[idx].isDone;
    gTodos[idx].isDone = true;
}

var isOn;
function addTodo() {
    if (!isOn) {
        var elText = document.querySelector('.addtodo');
        elText.style.display = 'block';
        isOn = true;
    }
    else {
        var elText = document.querySelector('.addtodo');
        elText.style.display = 'none';
        gTodos.push(getTodo((document.querySelector('.text-new-todo').value)));
        renderTodos(gTodos);
        isOn = false;
    }
    document.querySelector('.text-new-todo').value = '';
}


function deleteTodo() {

    var idx = +prompt('which you want to delete?');
    saveToStorage(idx, gTodos[idx])
    gTodos[idx].isDeleted = true;
    gTodos = gTodos.filter(function (gTodo) {
        return gTodo.isDeleted === false;
    });
    if (!gTodos.length) {
        document.querySelector('.todos').innerHTML = 'Nothing To Show';
    }
    else renderTodos(gTodos);

}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}


var isButtonOn;
function showButtons() {
    renderTodos(gTodos);
    cleanHead()
    if (!isButtonOn) {
        var elText = document.querySelector('.filter');
        elText.style.display = 'block';
        isButtonOn = true;
    }
    else {
        elText = document.querySelector('.filter');
        elText.style.display = 'none';
        isButtonOn = false;
    }

}

function showAll() {

    if(isFilter)  document.querySelector('.filter').innerHTML='';
    renderTodos(gTodos);
}

function showActive() {
    var activeToDo = gTodos.filter(function (gTodos) {
        return (gTodos.isDone === false && gTodos.isDeleted === false);
    });
    renderTodos(activeToDo);
}

function showDone() {
    var doneToDo = gTodos.filter(function (gTodos) {
        return gTodos.isDone === true;
    });
    if (!doneToDo.length) {
        document.querySelector('.todos').innerHTML = 'Nothing To Show';
    }
    else renderTodos(doneToDo);
}


function Archive() {
    var deletes = [];

    if (!localStorage.length) document.querySelector('.delted-headline').innerHTML = 'Nothing to show';
    else {
        var elhead1 = document.querySelector('.delted-headline');
        elhead1.innerHTML = 'Your deleted items:'
     
        for (var i = 0; i < localStorage.length; i++) {
            var archive = JSON.parse(localStorage.getItem(i));
            deletes.push(archive);
        }
    }

    renderTodos(deletes);
}

function getFromStorage(key) {
    var str = localStorage.getItem(key);
    return JSON.parse(str);
}


function filterMenu() {
    document.querySelector('.delted-headline').innerHTML='';
    if (!isFilter) {
        var elButtons = document.querySelector('.filter');
        var strHtml = `
    <ul>
        <li><button class="filter-all" onclick="showAll()">All</button></li>
         <li><button class="filter-Active" onclick="showActive()">Active</button></li>
        <li><button class="filter-Done" onclick="showDone()">Done</button></li>
    </ul>
`
        elButtons.innerHTML = strHtml;
        isFilter = true;
    }
    else {
        isFilter = false;
        document.querySelector('.filter').innerHTML='';
    }

}

function cleanHead(){
    document.querySelector('.head').innerHTML = '';
}