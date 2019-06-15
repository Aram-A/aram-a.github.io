function init() {
    var input = document.getElementById('task');
    var important = document.getElementById('important');
    var button = document.querySelector('button');
    var taskListHTML = document.querySelector('.list');
    var taskLists = [];
    var id = 0;

    button.addEventListener('click', function () {
        var taskList = {
            id: id,
            text: input.value,
            important: important.checked,
        };

        if (input.value == "") {
            input.classList.add("error");
        } else {
            input.classList.remove("error");
            taskLists.push(taskList);
            id++;

            taskListHTML.insertAdjacentHTML('beforeEnd', [
                '<li data-id="' + taskList.id + '" data-important="' + taskList.important + '">',
                '<input type="checkbox">',
                input.value,
                '<i class="delete"></i>',
                '</li>',
            ].join(''));
            input.value = "";
            console.log(taskLists);
        }
    });

    taskListHTML.addEventListener('click', function (e) {
        var el = e.target;
        var parent = el.closest('[data-id]');

        if (el.matches('.delete')) {

            for (var i in taskLists) {
                if (taskLists[i].id == parent.dataset.id) {
                    taskLists.splice(i, 1);
                    break;
                }
            }
            parent.remove();
            console.log(taskLists);
        } else if (el.matches('input')) {
            parent.classList.toggle('done')
            console.log(parent);
        }
    });
}

window.addEventListener('DOMContentLoaded', init);