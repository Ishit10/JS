console.log("Jay Bajranbali");



const input = document.getElementById("input");
const addbtn = document.getElementById("addbtn");
const listgroup = document.getElementById("listgroup");


addbtn.addEventListener('click', addItem);
input.addEventListener('keypress', function(e){
    if(e.key == "Enter"){
        addItem();
    }
});

function addItem(e) {
    let li = document.createElement("li");
    let editbtn = document.createElement("button");
    let span = document.createElement("span");
    li.innerHTML = `<span class="taskList w-10">${input.value}</span>`;
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
    listgroup.appendChild(li);
    // editbtn.classList.add("edit","btn","btn-black");
    // editbtn.type="button";
    // editbtn.innerText = "Edit"
    // li.appendChild(editbtn);
    span.innerHTML = `<i class="fa fa-trash-o delete" style="font-size:24px"></i>`
    li.appendChild(span);
    span.classList.add("btn", "btn-sm", "btn-white");
    input.value = '';

    // editbtn.addEventListener('click', (e) => {
    //     if(editbtn.innerText.toLowerCase() == 'Edit'){
    //         editbtn.innerText = "save";
    //         editbtn.removeAttribute("readonly");
    //         input.focus();
    //     }
    //     else{
    //         editbtn.innerText = "edit";
    //         editbtn.setAttribute("readonly","readonly");
    //     }
    // })

    span.addEventListener('click', (e) => {
        listgroup.removeChild(li);
    });    

    
}









