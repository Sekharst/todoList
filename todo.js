let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");

$(document).ready(function () {
//     $.get("https://jsonplaceholder.typicode.com/users",function(data,status) {
//     console.log(data,status);
// }
// );

// $.post("https://jsonplaceholder.typicode.com/posts",{title:"Thius is sekkhar", body: "yah he is sekhar find in way process.."}, function(data,status){
//     console.log(data,status)
// })

let offset = {offset: "80%"}
    $(".todos-heading").waypoint(function () {
        $(".todos-heading").addClass(
            "animate__animated animate__bounceOut");
    }, offset);

});



let todoList = [
    {
      text: "Learn HTML",
      uniqueNo: 1
    },
    {
      text: "Learn CSS",
      uniqueNo: 2
    },
    {
      text: "Learn JavaScript",
      uniqueNo: 3
    }
  ];


let todoCount = todoList.length;

function createAndAppendTodo(todo) {
    let todoId = 'todo' + todo.uniqueNo;
    let checkboxId = 'checkbox' + todo.uniqueNo;
    let labelId = 'label' + todo.uniqueNo;


  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoElement.id = todoId;
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;
  inputElement.classList.add("checkbox-input");
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.id = labelId;
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

  deleteIcon.on
  deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
  createAndAppendTodo(todo);
}


function onAddTodo() {
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;
    console.log(userInputValue)

    if(userInputValue === ""){
        alert("Enter Valid Text");
        return;
      }

      todoCount = todoCount + 1;
    
      let newTodo = {
        text: userInputValue,
        uniqueNo: todoCount
    }

      

      createAndAppendTodo(newTodo);
      userInputElement.value = "";

}



addTodoButton.onclick = function() {
      onAddTodo();
};