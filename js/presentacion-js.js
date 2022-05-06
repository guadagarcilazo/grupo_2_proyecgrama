let header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 775) {
        header.style.setProperty('background', 'url(../assets/img/presentacion-js/scroll.png)');
    } else if (window.scrollY > 10) {
        header.style.setProperty('background', 'rgba(0,0,0,0.3)');
    } else {
        header.style.removeProperty('background');
    }
});