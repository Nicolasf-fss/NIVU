window.addEventListener("load", () => {

    const splash = document.getElementById("splash");
    const hero = document.getElementById("hero");
    const btn = document.getElementById("explorar");

    // Ocultar splash después de 2 segundos
    setTimeout(() => {
        splash.classList.add("hide");
    }, 2000);

    // Al tocar "Explorar en tiempo real"
    btn.addEventListener("click", () => {

        // Desaparece el hero
        hero.classList.add("hide");

        // Espera un poco y baja al mapa
        setTimeout(() => {
            document.getElementById("mapa")
                .scrollIntoView({ behavior: "smooth" });
        }, 500);

    });

});