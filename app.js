// selectors
const button = document.querySelector(".add-item");
const input = document.querySelector(".list-input");
const parent = document.querySelector("ul")
const resetBtn = document.querySelector(".reset-btn")



// event listeners
button.addEventListener("click", addListItem);
parent.addEventListener("click", deleteOrCheckListItem)
resetBtn.addEventListener("click", reset)




// functions
function addListItem(event) {
    event.preventDefault();

    if (input.value !== "") {
        // create new div, new list item
        const listDiv = document.createElement("div");
        listDiv.classList.add("list-div-style")
        const listLi = document.createElement("li");
        listLi.textContent = input.value;
        input.value = "";
        // append list item to div

        listDiv.appendChild(listLi);

        // check button
        const checkBtn = document.createElement("button");
        checkBtn.innerHTML = '<i class="fas fa-check"></i>';
        checkBtn.classList.add("check-btn-style")
            // append check button to div
        listDiv.appendChild(checkBtn);

        // delete button
        const deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'
        deleteBtn.classList.add("delete-btn-style")
            // append delete button to div
        listDiv.appendChild(deleteBtn)

        // appending whole div to the parent ul
        parent.appendChild(listDiv)
    }

};

function deleteOrCheckListItem(element) {
    // get current click target which will be one of the parent Ul children nodes
    const item = element.target
        // make trash can icon remove the child node
    if (item.innerHTML === '<i class="fas fa-trash-alt"></i>') {
        const trashParent = item.parentElement;
        trashParent.classList.add("fall-away")
        trashParent.addEventListener("transitionend", () => {
            trashParent.remove()
        })


    }
    // make a line through when check box clicked
    else if (item.innerHTML === '<i class="fas fa-check"></i>') {
        const checkParent = item.parentElement;
        checkParent.classList.toggle("checked-list-item");
    }
};

// remove all new divs
function reset() {
    resetBtn.classList.add("reset-clicked");
    const grabDivs = document.querySelectorAll("div");
    for (let i = 0; i < grabDivs.length; i++) {
        grabDivs[i].remove()
    }
}