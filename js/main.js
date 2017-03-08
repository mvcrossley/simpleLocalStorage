(function(){
	var list = document.querySelector('#list');
	var saveAll = document.querySelector('#saveAll');
	var clearAll = document.querySelector('#clearAll');

	function emptyStorage(e){
		localStorage.clear();
		console.log("clearing the list");
	}

	function fillStorage(){
		localStorage.setItem('todoList', list.innerHTML);
		console.log("Filling the list");
	}

	function loadTodo(){
		if(window.localStorage){
			if(localStorage.getItem('todoList')){
				list.innerHTML = localStorage.getItem('todoList');
			}
		}else{
			console.log("Get a better browser ya flim flam");
		}
	}

	clearAll.addEventListener('click', emptyStorage, false);
	saveAll.addEventListener('click', fillStorage, false);
	loadTodo();
})();