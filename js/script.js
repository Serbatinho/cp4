const tasks = [];

document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.querySelector("button[type='submit']");
    addButton.addEventListener("click", (event) => {
        event.preventDefault();
        const task = [
            document.getElementById("input-task").value,
            document.getElementById("input-desc").value,
            document.getElementById("input-author").value,
            document.getElementById("input-depart").value,
            document.getElementById("importance-setter").value,
            document.getElementById("input-value").value,
            document.getElementById("input-duration").value
        ];
        tasks.push(task);
        updateTable();
    });

    const filterButton = document.querySelector("button[type='button']");
    filterButton.addEventListener("click", (event) => {
        event.preventDefault();
        const importanceFilter = document.getElementById("importance-filter").value;
        const filteredTasks = importanceFilter === "all" ? tasks : tasks.filter(task => task[4] === importanceFilter);
        updateTable(filteredTasks);
    });

    const orderButton = document.querySelector("#order-button");
    orderButton.addEventListener("click", () => {
        console.log('teste')
    });
});

function updateTable(filteredTasks = tasks) {
    const tableContent = document.getElementById("table-content");
    tableContent.innerHTML = "";

    filteredTasks.forEach((task, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${task[0]}</td>
            <td>${task[1]}</td>
            <td>${task[2]}</td>
            <td>${task[3]}</td>
            <td>${task[4]}</td>
            <td>${task[5]}</td>
            <td>${task[6]}</td>
            <td><button onclick="deleteTask(${index})">Deletar</button></td>
        `;
        tableContent.appendChild(row);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateTable();
}