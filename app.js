// JavaScript para el Panel de KavyGo

function showLogin() {
    document.getElementById("login-section").style.display = "block";
    document.getElementById("register-section").style.display = "none";
    document.getElementById("password-recovery-section").style.display = "none";
}

function showRegister() {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("register-section").style.display = "block";
    document.getElementById("password-recovery-section").style.display = "none";
}

function showPasswordRecovery() {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("register-section").style.display = "none";
    document.getElementById("password-recovery-section").style.display = "block";
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("admin-panel").style.display = "block";
        alert("Bienvenido, " + username);
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

function registerUser() {
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    if (username && email && password) {
        localStorage.setItem(username, password);
        alert("Usuario registrado correctamente");
        showLogin();
    } else {
        alert("Por favor, complete todos los campos");
    }
}

function recoverPassword() {
    const email = document.getElementById("recovery-email").value;
    alert("Se ha enviado un correo de recuperación a " + email + " (simulado)");
    showLogin();
}