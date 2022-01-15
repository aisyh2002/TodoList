var currentTasks = document.getElementById('tasK');
var inputTasks = document.getElementById('input-tasks')
var completed = document.getElementById('completed');

function current () {
    if (inputTasks.value == "") {
        alert("Please enter your List Task");
    } else {
        var container = document.createElement('div');
        container.classList.add('container-list');

        var checklist = document.createElement('div');
        checklist.classList.add('checklist-bar');
        checklist.style.width = '20px';
        checklist.style.height = '20px';
        checklist.style.borderRadius = '50%'; 
        checklist.style.border = '1px solid black';
        checklist.style.marginRight = '10px';
        checklist.onclick = checkedTask;

        var newTask = document.createElement('h3');
        newTask.innerHTML = inputTasks.value;
        newTask.style.fontWeight = 'normal';
        newTask.style.width = '400px';
        newTask.style.textAlign = 'left';

        var deleteList = document.createElement('button');
        deleteList.classList.add ('delete-bar');
        deleteList.innerHTML = 'Delete';
        deleteList.style.padding = '10px';
        deleteList.style.borderRadius = '10px';
        deleteList.style.border = 'none';
        deleteList.style.backgroundColor = 'black';
        deleteList.style.color = 'white';
        deleteList.onclick = removed;
        
        container.append(checklist);
        container.append(newTask);
        container.append(deleteList);

        currentTasks.append(container);
        inputTasks.value = '';
    }    
}

function checkedTask () {
    var nodeList = this.parentNode;
    if (nodeList.classList.contains('completed')) {
        nodeList.classList.remove('completed');
        nodeList.querySelector('div').style.backgroundColor = 'white';
        currentTasks.append(nodeList);
        nodeList.querySelector('button').onclick = removed;
    } else {
        completed.append(nodeList);
        
        nodeList.style.backgroundColor = 'grey';
        nodeList.style.color = 'black';
        nodeList.querySelector('div').style.backgroundColor = 'red';
        nodeList.querySelector('div').onclick = checkedTask;
        nodeList.querySelector('button').onclick = removedCompleted;
        
        nodeList.classList.add('completed');
    }
}

function removed () {
    console.log(this.parentNode);
    currentTasks.removeChild(this.parentNode);
}

function removedCompleted () {
    console.log(this.parentNode);
    completed.removeChild(this.parentNode);
}