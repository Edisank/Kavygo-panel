
let recargas = [];
let creditos = [];

function addRecarga() {
    const conductor = prompt('Ingrese el nombre del conductor:');
    const tiempo = prompt('Ingrese el tiempo de recarga (horas):');
    recargas.push({ conductor, tiempo, fecha: new Date().toLocaleString() });
    showRecargasCreditos();
}

function addCredito() {
    const pasajero = prompt('Ingrese el nombre del pasajero:');
    const puntos = prompt('Ingrese los puntos otorgados:');
    creditos.push({ pasajero, puntos, fecha: new Date().toLocaleString() });
    showRecargasCreditos();
}

function showRecargasCreditos() {
    const recargasList = document.getElementById('recargasList');
    const creditosList = document.getElementById('creditosList');
    recargasList.innerHTML = recargas.map((r, index) => `<li>${index + 1}. Conductor: ${r.conductor}, Tiempo: ${r.tiempo} horas, Fecha: ${r.fecha}</li>`).join('');
    creditosList.innerHTML = creditos.map((c, index) => `<li>${index + 1}. Pasajero: ${c.pasajero}, Puntos: ${c.puntos}, Fecha: ${c.fecha}</li>`).join('');
}

function filterByDateAndName() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const nameFilter = document.getElementById('nameFilter').value.toLowerCase();

    const filteredRecargas = recargas.filter(r => new Date(r.fecha) >= new Date(startDate) && new Date(r.fecha) <= new Date(endDate) && r.conductor.toLowerCase().includes(nameFilter));
    const filteredCreditos = creditos.filter(c => new Date(c.fecha) >= new Date(startDate) && new Date(c.fecha) <= new Date(endDate) && c.pasajero.toLowerCase().includes(nameFilter));

    showRecargasCreditos();
}
