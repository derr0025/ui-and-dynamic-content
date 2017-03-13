function removeItem(){
    alert(ev.target.innerHTML + " plays!");
}

list.addEventListener("click", removeItem, true);

function addItem() {
    var list = prompt("Enter a new item for your to-buy list!");
    
    if (list != null) {
        document.getElementById("listItem").innerHTML =
            "You have added " + list + " to your list!";
    }
}

