
// JavaScript para el Panel de KavyGo
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("admin-panel").style.display = "block";
        alert("Bienvenido Administrador");
    } else if (username === "tecnico" && password === "tecnico123") {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("admin-panel").style.display = "block";
        alert("Bienvenido Técnico");
    } else {
        alert("Credenciales incorrectas");
    }
}

function showSection(section) {
    alert("Mostrando sección: " + section);
}
