let header = document.getElementById('header');

console.dir(window);

window.addEventListener('scroll', () => {
    if(window.scrollY > 775) {
        header.style.setProperty('background', 'url(../assets/img/index.html/header-scroll.png)');
    } else if (window.scrollY > 10) {
        header.style.setProperty('background', 'rgba(0,0,0,0.3)');
    } else {
        header.style.removeProperty('background');
    }
});

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
});