window.onload = function () {
    class Student {
        constructor (name) {
            this.name = name;
            this.calculus = 0;
            this.literature = 0;
            this.physics = 0;
            this.average = 0;
        }
    }
    var studentList = [
        new Student("John Doe"),
        new Student("Mary Moe"),
        new Student("July Dooley")
    ];
    
    buttonListener()
    modalListener(studentList)
}

function buttonListener() {
    for (button of document.getElementsByClassName("btn btn-primary btn-minus")) {
        button.onclick = function () {
            var id = this.id.replace("btn-minus-", "");
            var element = document.getElementById("class-" + id)
            if (parseInt(element.innerHTML) > 1) {
                element.innerHTML = parseInt(element.innerHTML) - 1;
            }
        }
    }
    for (button of document.getElementsByClassName("btn btn-primary btn-plus")) {
        button.onclick = function () {
            var id = this.id.replace("btn-plus-", "");
            var element = document.getElementById("class-" + id);
            if (parseInt(element.innerHTML) < 8) {
                element.innerHTML = parseInt(element.innerHTML) + 1;
            }
        }
    }
}

function modalListener (studentList) {
    for (click of document.getElementsByClassName("student-row")) {
        click.onclick = function () {
            var id = this.id.replace("row-", "");

            var title = document.getElementById("title-" + id).innerHTML;
            var modalTitle = document.getElementById("modal-title");
            modalTitle.innerHTML = title;

            confirm = document.getElementById("confirm-btn");
            confirm.onclick = function () {
                studentList[id].calculus = parseInt(document.getElementById("calculus").value);
                studentList[id].literature = parseInt(document.getElementById("literature").value);
                studentList[id].physics = parseInt(document.getElementById("physics").value);
                studentList[id].average = ((studentList[id].calculus + studentList[id].literature + studentList[id].physics) / 3).toFixed(1);
                document.getElementById("grade-" + id).innerHTML = studentList[id].average;
            }
        }
    }
}

