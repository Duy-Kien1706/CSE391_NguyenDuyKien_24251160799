let students = JSON.parse(localStorage.getItem("students")) || [];

let editingIndex = -1;

const btnAdd = document.getElementById("btnAdd");

const studentModal = document.getElementById("studentModal");

const closeModal = document.getElementById("closeModal");

const cancelBtn = document.getElementById("cancelBtn");

const studentForm = document.getElementById("studentForm");

const studentTableBody = document.getElementById("studentTableBody");

const modalTitle = document.getElementById("modalTitle");

const submitBtn = document.getElementById("submitBtn");

const message = document.getElementById("message");

const totalStudents = document.getElementById("totalStudents");

const avgScore = document.getElementById("avgScore");

const studentId = document.getElementById("studentId");

const fullName = document.getElementById("fullName");

const birthDate = document.getElementById("birthDate");

const className = document.getElementById("className");

const averageScore = document.getElementById("averageScore");

const email = document.getElementById("email");


// Mở modal
btnAdd.onclick = function(){
    openAddModal();
};


// Đóng modal
closeModal.onclick = closeForm;
cancelBtn.onclick = closeForm;


// Render dữ liệu
function renderStudents(){

    studentTableBody.innerHTML = "";

    if(students.length === 0){

        studentTableBody.innerHTML = `
            <tr>
                <td colspan="7" class="empty-row">
                    Chưa có dữ liệu sinh viên
                </td>
            </tr>
        `;

        return;
    }

    for(let i = 0; i < students.length; i++){

        studentTableBody.innerHTML += `
            <tr>

                <td>${students[i].id}</td>

                <td>${students[i].name}</td>

                <td>${students[i].birth}</td>

                <td>${students[i].class}</td>

                <td>${students[i].score}</td>

                <td>${students[i].email}</td>

                <td>
                    <button class="edit-btn" onclick="editStudent(${i})">
                        Sửa
                    </button>

                    <button class="delete-btn" onclick="deleteStudent(${i})">
                        Xóa
                    </button>
                </td>

            </tr>
        `;
    }
}


// Lưu localStorage
function saveStudents(){

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );
}


// Cập nhật thống kê
function updateStatistics(){

    totalStudents.innerText = students.length;

    if(students.length === 0){

        avgScore.innerText = 0;
        return;
    }

    let sum = 0;

    for(let i = 0; i < students.length; i++){

        sum += parseFloat(students[i].score);
    }

    let avg = sum / students.length;

    avgScore.innerText = avg.toFixed(2);
}


// Hiển thị thông báo
function showMessage(text){

    message.innerText = text;

    setTimeout(function(){

        message.innerText = "";

    }, 3000);
}


// Reset form
function resetForm(){

    studentForm.reset();

    clearErrors();
}


// Mở form thêm
function openAddModal(){

    editingIndex = -1;

    modalTitle.innerText = "Thêm sinh viên";

    submitBtn.innerText = "Lưu sinh viên";

    resetForm();

    studentModal.style.display = "block";
}


// Đóng form
function closeForm(){

    studentModal.style.display = "none";

    resetForm();
}





// Xóa lỗi
function clearErrors(){

    document.getElementById("errorId").innerText = "";

    document.getElementById("errorName").innerText = "";

    document.getElementById("errorBirth").innerText = "";

    document.getElementById("errorClass").innerText = "";

    document.getElementById("errorScore").innerText = "";

    document.getElementById("errorEmail").innerText = "";
}





// Sửa sinh viên
function editStudent(index){

    editingIndex = index;

    modalTitle.innerText = "Cập nhật sinh viên";

    submitBtn.innerText = "Cập nhật";

    studentId.value = students[index].id;

    fullName.value = students[index].name;

    birthDate.value = students[index].birth;

    className.value = students[index].class;

    averageScore.value = students[index].score;

    email.value = students[index].email;

    studentModal.style.display = "block";
}


// Xóa sinh viên
function deleteStudent(index){

    let confirmDelete = confirm(
        "Bạn có chắc muốn xóa sinh viên này?"
    );

    if(confirmDelete){

        students.splice(index, 1);

        saveStudents();

        renderStudents();

        updateStatistics();

        showMessage("Xóa sinh viên thành công");
    }
}


// Khởi tạo
renderStudents();

updateStatistics();