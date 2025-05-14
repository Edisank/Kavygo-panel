
// JavaScript para el Panel de KavyGo
const techList = [];

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("admin-panel").style.display = "block";
    } else {
        alert("Credenciales incorrectas");
    }
}

function logout() {
    window.location.href = 'index.html';
}

function addTechnician() {
    const name = document.getElementById('tech-name').value;
    const email = document.getElementById('tech-email').value;

    techList.push({ name, email, status: 'Pendiente' });
    updateTechList();
    document.getElementById('add-technician-form').reset();
}

function updateTechList() {
    const tbody = document.getElementById('tech-list-body');
    tbody.innerHTML = '';

    const filter = document.getElementById('status-filter').value;

    techList.forEach((tech, index) => {
        if (filter === 'all' || tech.status === filter) {
            const row = `<tr>
                <td>${tech.name}</td>
                <td>${tech.email}</td>
                <td>${tech.status}</td>
                <td>
                    <button onclick="approveTechnician(${index})">Aprobar</button>
                    <button onclick="editTechnician(${index})">Modificar</button>
                    <button onclick="deleteTechnician(${index})">Eliminar</button>
                </td>
            </tr>`;
            tbody.innerHTML += row;
        }
    });
}

function filterTechnicians() {
    updateTechList();
}

function approveTechnician(index) {
    techList[index].status = techList[index].status === 'Pendiente' ? 'Aprobado' : 'Pendiente';
    updateTechList();
}

function deleteTechnician(index) {
    techList.splice(index, 1);
    updateTechList();
}

function editTechnician(index) {
    const newName = prompt('Nuevo nombre:', techList[index].name);
    const newEmail = prompt('Nuevo correo:', techList[index].email);

    if (newName && newEmail) {
        techList[index].name = newName;
        techList[index].email = newEmail;
        updateTechList();
    }
}
