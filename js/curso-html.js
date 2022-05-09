let header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 775) {
        header.style.setProperty('background', 'url(../assets/img/presentacion-html/scrollgtml.png)');
    } else if (window.scrollY > 10) {
        header.style.setProperty('background', 'rgba(0,0,0,0.3)');
    } else {
        header.style.removeProperty('background');
    }
});


const enviarComentario = document.getElementById('enviar-comentario');
const textArea = document.getElementById('textarea');

enviarComentario.addEventListener('click', event => {
    event.preventDefault();
    swal("Formulario enviado", "Comentario enviado con éxito", "success");
    textArea.value = '';
});

