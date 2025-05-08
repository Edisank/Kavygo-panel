
const usuarios = {
    "admin": "admin123",
    "tecnico1": "tecnico123",
    "tecnico2": "tecnico123"
};

function login(event) {
    event.preventDefault();
    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value.trim();

    if (usuarios[usuario] === password) {
        if (usuario === "admin") {
            window.location.href = "panel_admin.html";
        } else {
            window.location.href = "panel_tecnico.html";
        }
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
