//displays the form
function showForm(event) {
    event.target.style.background = "violet";
    fetch("/update/" + event.target.getAttribute("data-id") + "/")
    .then(response => response.text())
    .then(form => document.getElementById("edit_form").innerHTML = form)
    //event listener that follows the submit event
    .then(edit => document.querySelector("#edit_form form").addEventListener("submit", sendEditForm))
};

const bookInfo = document.querySelectorAll(".book_info");
for(i=0; i < bookInfo.length; i++) {
bookInfo[i].addEventListener('click', showForm); 
}

function sendEditForm(event) {
    event.preventDefault(); //prevent sending the form to UpdateView without JavaScript --> Single Page App
    fetch(document.querySelector("#edit_form form").action, {method:"post", body:new FormData(document.querySelector("#edit_form form"))})
    .then(reload => location.reload()); //page reload to refresh the book list
    
}

function createForm() {
    fetch("/create/")
    .then(response => response.text())
    .then(form => document.getElementById("edit_form").innerHTML = form)
    .then(create => document.querySelector("#edit_form form").addEventListener("create", sendCreateForm)) //event listener that follows the submit event
}

function sendCreateForm() {
    fetch("/create/", {method:"post", body:new FormData(document.querySelector("#edit_form form"))})
    .then(reload => location.reload()); //page reload to refresh the book list
}

function showDelete(pk) {
    fetch("/delete/" + pk + "/")
    .then(response => response.text())
    .then(form => document.getElementById("edit_form").innerHTML = form)
    .then(edit => document.querySelector("#edit_form form").addEventListener("submit", sendDeleteForm)) //event listener that follows the submit event
}

function sendDeleteForm(event) {
    event.preventDefault(); //prevent sending the form to DeleteView without JavaScript --> Single Page App
    fetch(document.querySelector("#edit_form form").action, {method:"post", body:new FormData(document.querySelector("#edit_form form"))})
    .then(reload => location.reload()); //page reload to refresh the book list
    
}


function closeForm(event) {
    document.getElementById("edit_form").innerHTML = " ";
    location.reload();
}

