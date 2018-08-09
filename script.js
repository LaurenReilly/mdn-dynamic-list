var ul = document.querySelector('ul');
var input = document.querySelector('input');
var btn = document.querySelector("button");

btn.onclick = function () {
    var item = input.value;
    input.value = '';
    var list = document.createElement('li');
    var span = document.createElement("span");
    var del = document.createElement("button");
    list.appendChild(span);
    span.textContent = item;
    list.appendChild(del);
    del.textContent = "Delete";
    ul.appendChild(list);

    del.onclick = function(e) {
       ul.removeChild(list);
    }
    input.focus();
}