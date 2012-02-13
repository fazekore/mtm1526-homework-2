var list = document.getElementById('list');

var position= 100;


var createLi = function (ev) {

	var todo = document.createElement('li');
	todo.className = 'todo'; 

	document.getElementById('list').appendChild(todo);
	todo.innerHTML=document.getElementById('text').value;

	position = +20;
	todo.style.top=position;

};
 
document.getElementById('add').addEventListener('click', createLi, false);

	list.addEventListener('click', function(ev) {
  		if (ev.target.className == 'deleted') {
    	ev.target.className = '';
  		} else {
    	ev.target.className = 'deleted';
  	}
  
}, false);


