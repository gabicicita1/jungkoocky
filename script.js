function mostrarArticulo(elemento) {
    var titulo = elemento.querySelector('h3').innerText;
    var contenido = elemento.querySelector('p').innerText;

    document.getElementById('modal-titulo').innerText = titulo;
    document.getElementById('modal-contenido').innerText = contenido;

    document.getElementById('modal').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modal').style.display='none';}