
const usuarios = {
    "admin": "admin123",
    "tecnico1": "tecnico123",
    "tecnico2": "tecnico123"
};

function login(event) {
    event.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if (usuarios[usuario] === password) {
        if (usuario === "admin") {
            document.getElementById('adminPanel').style.display = 'block';
            document.getElementById('technicianPanel').style.display = 'none';
        } else {
            document.getElementById('adminPanel').style.display = 'none';
            document.getElementById('technicianPanel').style.display = 'block';
        }
        alert("Bienvenido " + usuario);
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
