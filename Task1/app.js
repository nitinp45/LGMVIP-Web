
document.querySelector('#add').onclick =   function () {
    if (document.querySelector('#inner-body input').value.length == 0) {
        alert("Please Enter a Task")
    }

    else {
        document.querySelector('#tasks').innerHTML += `
    <div class="task">
        <span id="todoname">
            ${document.querySelector('#inner-body input').value}
        </span>
        
        <button id="delete">
            <i class="far fa-trash-alt"></i>
        </button>
    </div>
`;
        var c_tasks = document.querySelectorAll("#delete");
        for (var i = 0; i < c_tasks.length; i++) {
            c_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
    }
