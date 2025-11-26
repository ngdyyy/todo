const workForm = document.getElementById('workForm')
const workInput = document.getElementById('work')
const addbtn = document.getElementById('addbtn')
const workTable = document.getElementById('workTable')

let works = JSON.parse(localStorage.getItem('works')) || [];

workForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const work = {
        work: workInput.value.trim(),
    };
    works.push(work);
    renderWorkTable();
    localStorage.setItem('works', JSON.stringify(works))
    workForm.reset();
});

function renderWorkTable() {
    workTable.innerHTML = '';
    works.forEach((w, index) => {
        workTable.innerHTML += `
        <tr>
        <td class="${w.done ? 'done' : ''}">${w.work}</td>
        <td>
        <button class="donebtn" onclick="doneWork(${index})">Done</button>
        <button class="deletebtn" onclick="deleteWork(${index})">Delete</button>
        </td>
        </tr>
        `;
    });
};

function deleteWork(index) {
    works.splice(index, 1);

    localStorage.setItem('works', JSON.stringify(works));
    renderWorkTable();
}

function doneWork(index) {
    works[index].done = !works[index].done;
    localStorage.setItem('works', JSON.stringify(works));
    renderWorkTable();
}