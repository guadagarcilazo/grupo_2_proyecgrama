const items = document.querySelectorAll('li');
const estados = document.querySelectorAll('.estado');

// recorro el array para darle añadirle un evento a cada elemento
items.forEach( e => {    

    const icon = e.firstElementChild.lastElementChild.firstElementChild;

    // acá le añado el evento a cada elemento del array
    e.addEventListener('click', () =>{

        if(!e.classList.contains('open')){

            // cambio clases a los elementos
            e.classList.add('open');
            e.classList.remove('closed');
            e.lastElementChild.classList.remove('opciones-cerrado');           
            e.lastElementChild.classList.add('opciones-abierto');
            icon.classList.remove('rotate0');
            icon.classList.add('rotate90');
        
        } else {
            
            // cambio clases a los elementos
            e.classList.add('closed');
            e.classList.remove('open');
            e.lastElementChild.classList.remove('opciones-abierto');    
            e.lastElementChild.classList.add('opciones-cerrado');
            icon.classList.remove('rotate90');
            icon.classList.add('rotate0');
        }

    });
});


