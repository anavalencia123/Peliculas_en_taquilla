function mostrarFormularioReseña(pelicula) {
    document.getElementById('titulo-reseña').textContent = pelicula;
    document.getElementById('formulario-reseña').classList.remove('oculto');
}

function cerrarFormularioReseña() {
    document.getElementById('formulario-reseña').classList.add('oculto');
}

function mostrarFormularioReserva(pelicula) {
    document.getElementById('titulo-reserva').textContent = pelicula;
    document.getElementById('formulario-reserva').classList.remove('oculto');
}

function cerrarFormularioReserva() {
    document.getElementById('formulario-reserva').classList.add('oculto');
}

document.getElementById('reseña-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Reseña enviada!');
    cerrarFormularioReseña();
});

document.getElementById('reserva-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Reserva realizada!');
    cerrarFormularioReserva();
});
