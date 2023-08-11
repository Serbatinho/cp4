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
        console.log(task)
    });
});
