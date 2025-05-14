
// JavaScript para el Panel de KavyGo y Estadísticas
const techList = [];

// Mostrar Gráficas de Estadísticas
function showTab(tab) {
    document.getElementById('nacional').style.display = 'none';
    document.getElementById('departamentos').style.display = 'none';
    document.getElementById('ciudades').style.display = 'none';
    document.getElementById(tab).style.display = 'block';
}

window.onload = function() { updateStatisticsView(); }

function updateStatisticsView() {
    new Chart(document.getElementById('national-chart').getContext('2d'), {
        type: 'pie',
        data: {
            labels: ['Aprobados', 'Pendientes'],
            datasets: [{ data: [10, 5], backgroundColor: ['#4CAF50', '#FFC107'] }]
        }
    });
}
