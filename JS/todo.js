window.onload = function () {
  var button = document.getElementById('submitBtn');
  button.onclick = updateList;
}

function updateList(){
  var itemInput = document.getElementById('tasks');
  var item = itemInput.value;//get value of text input
  var ul = document.getElementById('todoList');//get ul to add content
  var li = document.createElement('li');//create li element

  li.innerHTML = item + '<input type="radio" id="taskComplete" unchecked>';//appened content to li element
  if (ul.childElementCount == 0) {
    ul.appendChild(li);
  }else{
    ul.insertBefore(li,ul.firstchild);
  }
  var span = document.createElement('span');
  var spanTxt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(spanTxt);
  li.appendChild(span);

  var close = document.getElementById('close');
  close.onclick = function () {
    var removeEl = this.parentElement;
    var containerEl =

  }
}
