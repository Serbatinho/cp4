const tasks = [];

document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.querySelector("button[type='submit']");
    if (addButton) {
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
    }

    const filterButton = document.querySelector("button[type='button']");
    if (filterButton) {
        filterButton.addEventListener("click", (event) => {
            event.preventDefault();
            const importanceFilter = document.getElementById("importance-filter").value;
            const filteredTasks = importanceFilter === "all" ? tasks : tasks.filter(task => task[4] === importanceFilter);
            updateTable(filteredTasks);
        });
    }

    const orderButton = document.querySelector("#order-button");
    orderButton.addEventListener("click", () => {
        orderTasksByImportance();
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

function orderTasksByImportance() {
    const orderedTasks = tasks.slice().sort((a, b) => {
        if (a[4] === "high") return -1;
        if (b[4] === "high") return 1;
        if (a[4] === "medium" && b[4] === "low") return -1;
        if (a[4] === "low" && b[4] === "medium") return 1;
        return 0;
    });

    const descriptionList = orderedTasks.map(task => task[1]).join("\n");
    const descriptionListContainer = document.getElementById("description-list");
    descriptionListContainer.innerHTML = descriptionList;
}