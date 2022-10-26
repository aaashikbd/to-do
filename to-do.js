

var myInput = document.getElementById('todo');

var list = document.getElementById('list');

var submit = document.getElementById('add');



submit.addEventListener('click',function(){
   
      var item = document.createElement("li");
       item.innerHTML = myInput.value;
       list.appendChild(item);
       
       
    var removeTask = document.createElement('button');
    removeTask.innerHTML="Remove";
    removeTask.setAttribute("id", "removeButton");
    removeTask.addEventListener('click', function() {
        item.parentNode.removeChild(item);
    });
    item.appendChild(removeTask);  
    myInput.value="";

});











