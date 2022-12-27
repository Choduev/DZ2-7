document.querySelector('.addBtn').onclick = function () {
    if (document.querySelector('input').value === "") {
        alert('please enter a task')
    } else {
        (document.querySelector('.tasks').innerHTML
            += `<div class="task">
                    <span class="taskName">${document.querySelector('input').value}</span>
                    <button class="delete">x</button>   
            </div>`)
        document.querySelector('input').value = ''
        ////////delete task////////
        let current_task = document.querySelectorAll('.delete');
        for (let i = 0; i < current_task.length; i++) {
            current_task[i].onclick = function () {
                this.parentNode.remove();
            }
        }
        /////////done task/////////
        let doneTask = document.querySelectorAll('.taskName');
        for(let i = 0; i < doneTask.length; i++){
            doneTask[i].onclick = function () {
                this.classList.toggle('completed')
            }
        }
    }
}





////2
const culc1 = Number(prompt('Ведите первое число'))
const oper = prompt('Ведите математическое значение')
const culc2 = Number(prompt('Ведите второе число'))
let r = 'r'

const calculator = (calc1, oper, culc2, r) => {
    switch (oper) {
        case '+':
            alert(r = calc1 + culc2)
            break
        case '-':
            alert(r = calc1 - culc2)
            break
        case '*':
            alert(r = calc1 * culc2)
            break
        case '/':
            if (culc2 === 0){
                alert('нельзя делить на ноль')
                break
            }
            alert(r = calc1 / culc2)
            break
    }
}
calculator(culc1, oper, culc2, r)

