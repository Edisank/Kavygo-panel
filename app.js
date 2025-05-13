
// JavaScript para el Panel de KavyGo
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("admin-panel").style.display = "block";
        alert("Bienvenido Administrador");
    }
}

function addTechnician() {
    const name = document.getElementById('tech-name').value;
    const email = document.getElementById('tech-email').value;

    const tbody = document.getElementById('tech-list-body');
    const row = `<tr><td>${name}</td><td>${email}</td><td><button onclick="this.parentElement.parentElement.remove()">Eliminar</button></td></tr>`;
    tbody.innerHTML += row;

    document.getElementById('add-technician-form').reset();
}
