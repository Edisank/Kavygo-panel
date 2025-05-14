
// JavaScript para el Panel de KavyGo
const techList = [];

function addTechnician() {
    const name = document.getElementById('tech-name').value;
    const email = document.getElementById('tech-email').value;
    const password = document.getElementById('tech-password').value;

    techList.push({ name, email, password, status: 'Pendiente' });
    updateTechList();
    document.getElementById('add-technician-form').reset();
}

function updateTechList() {
    const tbody = document.getElementById('tech-list-body');
    tbody.innerHTML = '';

    techList.forEach((tech, index) => {
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
    });
}

function approveTechnician(index) {
    techList[index].status = 'Aprobado';
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
