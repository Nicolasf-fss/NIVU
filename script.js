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

        hero.style.transition = "opacity .6s ease, transform .6s ease";
        hero.style.opacity = "0";
        hero.style.transform = "translateY(-40px)";

        setTimeout(() => {

            hero.remove();

            document.getElementById("mapa")
                .scrollIntoView({ behavior: "smooth" });

        }, 650);

    });

    // Obtener clima real
    obtenerClima();

});

// ==========================
// CLIMA REAL
// ==========================

async function obtenerClima() {

    // Coordenadas aproximadas de Medellín
    const lat = 6.2442;
    const lon = -75.5812;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation_probability,weather_code`;

    try {

        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        const actual = datos.current;

        document.getElementById("temp").textContent =
            `${Math.round(actual.temperature_2m)}°C`;

        document.getElementById("humidity").textContent =
            `${actual.relative_humidity_2m}%`;

        document.getElementById("wind").textContent =
            `${Math.round(actual.wind_speed_10m)} km/h`;

        document.getElementById("rain").textContent =
            `${actual.precipitation_probability}%`;

        document.getElementById("condition").textContent =
            traducirCodigo(actual.weather_code);

    } catch (error) {

        document.getElementById("condition").textContent =
            "No se pudo cargar el clima";

        console.error(error);

    }

}

// Traducir códigos meteorológicos
function traducirCodigo(codigo) {

    const mapa = {
        0: "Despejado",
        1: "Mayormente despejado",
        2: "Parcialmente nublado",
        3: "Nublado",
        45: "Niebla",
        48: "Niebla con escarcha",
        51: "Llovizna ligera",
        53: "Llovizna moderada",
        55: "Llovizna intensa",
        61: "Lluvia ligera",
        63: "Lluvia moderada",
        65: "Lluvia fuerte",
        80: "Chubascos ligeros",
        81: "Chubascos moderados",
        82: "Chubascos fuertes",
        95: "Tormenta eléctrica"
    };

    return mapa[codigo] || "Condición desconocida";

}