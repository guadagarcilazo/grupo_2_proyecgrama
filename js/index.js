let header = document.getElementById('header');
let logo = document.getElementById('logo');


window.addEventListener('scroll', () => {
    if(window.scrollY > 775) {
        header.style.setProperty('background', 'url(../assets/img/index.html/header-scroll.png)');
        logo.style.setProperty('visibility', 'visible');
    } else if (window.scrollY > 10) {
        header.style.setProperty('background', 'rgba(0,0,0,0.3)');
    } else {
        header.style.removeProperty('background');
        logo.style.setProperty('visibility', 'hidden');
    }
});