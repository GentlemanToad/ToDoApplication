
 function submitItem () {
   var userInput = document.getElementById("item").value;
   if (!userInput || userInput == "" || userInput == " ") {
    return false;
  }
  updateList(document.getElementById("todoList"), userInput);
  item.focus();
  item.select();
}

var totalItems = 0;
function updateList(list, userInput) {
  totalItems ++
  var li = document.createElement("li");
  li.id = "listItem_"+totalItems;

  var checkBox = document.createElement("input");
  checkBox.type = "checkBox";
  checkBox.id = "cb_" + totalItems;
  checkBox.onclick = updateListStatus;

  var span = document.createElement("span");
  span.id = "item_"+ totalItems;
  span.innerText = userInput;

  var editItem = document.createElement("span");
  editItem.id="edit_"+ totalItems;
  editItem.innerText = String.fromCharCode(9998);
  editItem.onclick = editInput;


  var closeBtn = document.createElement("span");
  closeBtn.id = "closeBtn_" + totalItems;
  closeBtn.innerText =String.fromCharCode(10060);
  closeBtn.onclick = removeListItem;


  li.appendChild(checkBox);
  li.appendChild(span);
  li.appendChild(closeBtn);
  li.appendChild(editItem);
  list.appendChild(li);
}
function updateListStatus() {
    var cbId = this.id.replace("cb_","");
    var itemText  = document.getElementById("item_"+cbId);
    if(this.checked){
        itemText.className="checkedBox";
    } else {
      itemText.className = "";
    }
  }

  function removeListItem() {
    var  itemId = this.id.replace("closeBtn_","");
    var removeEl = document.getElementById("listItem_"+itemId);
    var containerEl = removeEl.parentNode;
    containerEl.removeChild(removeEl);
    }

  function editInput() {
    var userInput = prompt("What would you like to change this task to ?");
    var itemId = this.id.replace("edit_", "");
    var itemToChange = document.getElementById("item_"+itemId);
    itemToChange.innerText = userInput;
}

var item = document.getElementById("item");
item.focus();

var submitBtn = document.getElementById("submitBtn");
submitBtn.onclick = submitItem;
