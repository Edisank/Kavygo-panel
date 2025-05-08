
console.log("Panel de KavyGo cargado correctamente.");

function showAdminPanel() {
    document.getElementById('adminPanel').style.display = 'block';
    document.getElementById('technicianPanel').style.display = 'none';
}

function showTechnicianPanel() {
    document.getElementById('adminPanel').style.display = 'none';
    document.getElementById('technicianPanel').style.display = 'block';
}
