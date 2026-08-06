window.addEventListener("load", () => {

    const splash = document.getElementById("splash");
    const hero = document.getElementById("hero");
    const btn = document.getElementById("explorar");

    // Splash inicial
    setTimeout(() => {
        splash.classList.add("hide");
    }, 2000);

    // Entrar al modo mapa
    btn.addEventListener("click", () => {

        // Animación de salida
        hero.style.transition = "opacity .6s ease, transform .6s ease";
        hero.style.opacity = "0";
        hero.style.transform = "translateY(-40px)";

        // Después de la animación, eliminar completamente el hero
        setTimeout(() => {

            hero.remove(); // ← desaparece para siempre

            // Ir al mapa
            document.getElementById("mapa")
                .scrollIntoView({ behavior: "smooth" });

        }, 650);

    });

});