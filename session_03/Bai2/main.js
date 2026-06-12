const openModalBtn = document.getElementById("openModalBtn");
const taskModal = document.getElementById("taskModal");
const closeBtn = document.querySelector(".closeBtn");
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");

const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const deadlineInput = document.getElementById("deadline");
const priorityInput = document.getElementById("priority");

const modalTitle = document.getElementById("modalTitle");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editId = null;

openModalBtn.onclick = function () {
    taskModal.style.display = "flex";
};

closeBtn.onclick = function () {
    closeModal();
};

window.onclick = function (e) {
    if (e.target === taskModal) {
        closeModal();
    }
};

function closeModal() {
    taskModal.style.display = "none";
    taskForm.reset();
    editId = null;
    modalTitle.innerText = "Thêm Công Việc";
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showMessage(text) {
    message.innerText = text;

    setTimeout(function () {
        message.innerText = "";
    }, 2000);
}

function updateTaskSummary() {
    totalTasks.innerText = tasks.length;

    let completed = tasks.filter(task => task.completed).length;

    completedTasks.innerText = completed;
    pendingTasks.innerText = tasks.length - completed;
}

function renderTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.innerHTML = "<h3>Chưa có công việc nào</h3>";
        updateTaskSummary();
        return;
    }

    tasks.forEach(function (task) {

        let card = document.createElement("div");

        card.className = task.completed
            ? "task-card completed"
            : "task-card";

        card.innerHTML = `
            <h3>${task.title}</h3>
            <p><strong>Mô tả:</strong> ${task.description}</p>
            <p><strong>Hạn:</strong> ${task.deadline}</p>
            <p><strong>Ưu tiên:</strong> ${task.priority}</p>
            <p><strong>Trạng thái:</strong> ${task.completed ? "Đã hoàn thành" : "Chưa hoàn thành"}</p>

            <div class="actions">
                <button class="statusBtn" onclick="toggleStatus(${task.id})">
                    ${task.completed ? "Chưa xong" : "Hoàn thành"}
                </button>

                <button class="editBtn" onclick="editTask(${task.id})">
                    Sửa
                </button>

                <button class="deleteBtn" onclick="deleteTask(${task.id})">
                    Xóa
                </button>
            </div>
        `;

        taskList.appendChild(card);
    });

    updateTaskSummary();
}

taskForm.onsubmit = function (e) {
    e.preventDefault();

    let title = titleInput.value.trim();
    let description = descriptionInput.value.trim();
    let deadline = deadlineInput.value;
    let priority = priorityInput.value;

    if (title === "") {
        alert("Vui lòng nhập tiêu đề công việc");
        return;
    }

    if (description === "") {
        alert("Vui lòng nhập mô tả");
        return;
    }

    if (deadline === "") {
        alert("Vui lòng chọn hạn hoàn thành");
        return;
    }

    if (priority === "") {
        alert("Vui lòng chọn mức ưu tiên");
        return;
    }

    if (editId === null) {
        let task = {
            id: Date.now(),
            title: title,
            description: description,
            deadline: deadline,
            priority: priority,
            completed: false
        };

        tasks.push(task);

        showMessage("Thêm công việc thành công");
    }
    else {
        tasks = tasks.map(function (task) {

            if (task.id === editId) {
                return {
                    ...task,
                    title: title,
                    description: description,
                    deadline: deadline,
                    priority: priority
                };
            }

            return task;
        });

        showMessage("Cập nhật công việc thành công");
    }

    saveTasks();
    renderTasks();
    closeModal();
};

function deleteTask(id) {

    let confirmDelete = confirm("Bạn có chắc muốn xóa không?");

    if (!confirmDelete) {
        return;
    }

    tasks = tasks.filter(function (task) {
        return task.id !== id;
    });

    saveTasks();
    renderTasks();

    showMessage("Xóa công việc thành công");
}

function editTask(id) {

    let task = tasks.find(function (task) {
        return task.id === id;
    });

    titleInput.value = task.title;
    descriptionInput.value = task.description;
    deadlineInput.value = task.deadline;
    priorityInput.value = task.priority;

    editId = id;

    modalTitle.innerText = "Cập Nhật Công Việc";

    taskModal.style.display = "flex";
}

function toggleStatus(id) {

    tasks = tasks.map(function (task) {

        if (task.id === id) {
            return {
                ...task,
                completed: !task.completed
            };
        }

        return task;
    });

    saveTasks();
    renderTasks();

    showMessage("Cập nhật trạng thái thành công");
}

renderTasks();