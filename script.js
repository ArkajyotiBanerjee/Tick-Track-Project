const taskbox=document.getElementById("taskbox");
const tasklist=document.getElementById("task-list");

let currentUser = null;

window.onload = function () {
    if (localStorage.getItem("isLoggedIn") === "true") {
        currentUser = localStorage.getItem("username");
        document.getElementById("app").style.display = "block";
        document.getElementById("login").style.display = "none";
        display();
    } else {
        document.getElementById("app").style.display = "none";
        document.getElementById("login").style.display = "block";
    }
}

function login(username) {
    localStorage.setItem("isLoggedIn", "true");

    localStorage.setItem("username", username);
    currentUser = username;

    document.getElementById("app").style.display = "block";
    document.getElementById("login").style.display = "none";

    display();
}

function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    currentUser=null;
    location.reload();
}


function addTask(){
    const priority = document.getElementById("priorityInput").value;

    if(taskbox.value.trim()==""){
        taskbox.classList.add("error");
        taskbox.placeholder = "Write Some Task Name First Man!";
    }
    else{
        taskbox.classList.remove("error");
        taskbox.placeholder = "Enter a task";
        let li=document.createElement("li");
        li.textContent=taskbox.value;
        li.classList.add(priority);
        let span=document.createElement("span");
        
        span.innerHTML="\u00d7";
        li.appendChild(span);
        tasklist.appendChild(li);
    }
    taskbox.value="";
    saved();
}
tasklist.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } 
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
  saved();
}, false);

function saved(){
    if(currentUser){
        localStorage.setItem(currentUser,tasklist.innerHTML);
    }

}
function display(){
    if(currentUser){
        tasklist.innerHTML=localStorage.getItem(currentUser) || "";
    }
}
display();