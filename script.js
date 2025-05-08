
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
        document.getElementById('loginSection').style.display = 'none';
        if (usuario === "admin") {
            document.getElementById('adminPanel').style.display = 'block';
            alert("Bienvenido Administrador");
        } else {
            document.getElementById('technicianPanel').style.display = 'block';
            alert("Bienvenido " + usuario);
        }
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
