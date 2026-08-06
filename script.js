window.addEventListener("load", () => {

    const splash = document.getElementById("splash");

    setTimeout(() => {

        splash.classList.add("hide");

    }, 2000);

});

window.addEventListener('load', () => {

    const splash = document.getElementById('splash');

    setTimeout(() => {
        splash.classList.add('hide');
    }, 2000);

    const btn = document.getElementById('explorar');

    btn.addEventListener('click', () => {
        document.getElementById('mapa')
            .scrollIntoView({ behavior: 'smooth' });
    });

});