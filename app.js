
// JavaScript para el Panel de KavyGo y Estadísticas
let isLoggedIn = false;

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "admin" && password === "admin123") {
        isLoggedIn = true;
        document.getElementById("login-section").style.display = "none";
        document.getElementById("admin-panel").style.display = "block";
    } else { alert("Credenciales incorrectas"); }
}

function logout() {
    isLoggedIn = false;
    window.location.href = 'index.html';
}

window.onload = function() {
    if (isLoggedIn) {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("admin-panel").style.display = "block";
    }
}

// Mostrar Gráficas de Estadísticas
function showTab(tab) {
    document.getElementById('nacional').style.display = 'none';
    document.getElementById('departamentos').style.display = 'none';
    document.getElementById('ciudades').style.display = 'none';
    document.getElementById(tab).style.display = 'block';
}

function updateStatisticsView() {
    new Chart(document.getElementById('national-chart').getContext('2d'), {
        type: 'pie',
        data: {
            labels: ['Aprobados', 'Pendientes'],
            datasets: [{ data: [10, 5], backgroundColor: ['#4CAF50', '#FFC107'] }]
        }
    });
}
