window.addEventListener('DOMContentLoaded', 
	function(){
		var input = document.getElementById('task');
		var button = document.querySelector('button');
		var taskListHTML = document.querySelector('.list');
		var taskList = [];
		

		button.addEventListener('click', function(){
			if (input.value == "") {
					return;
			}
			else {
				taskList.push(input.value);
				
				taskListHTML.insertAdjacentHTML('beforeEnd', '<li>' + input.value + '<i></i></li>')
				input.value = "";
				console.log(taskList);
			}

		})
		
	});