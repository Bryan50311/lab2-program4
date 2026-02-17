// Evento Click - Mostrar imagen
document.getElementById("clickCuadro").addEventListener("click", function () {
    document.getElementById("imagen").style.display = "block";
});


// Evento Mouseover
document.getElementById("mouseCuadro").addEventListener("mouseover", function () {
    this.style.backgroundColor = "lightyellow";
});

document.getElementById("mouseCuadro").addEventListener("mouseout", function () {
    this.style.backgroundColor = "#d4edda";
});

// Evento Doble Click
document.getElementById("dobleClickCuadro").addEventListener("dblclick", function () {
    this.style.transform = "scale(1.2)";
});

// Evento KeyUp
document.getElementById("textoInput").addEventListener("keyup", function () {
    document.getElementById("resultadoTexto").textContent = this.value;
});

// Evento Click Contador
let contador = 0;
document.getElementById("contadorCuadro").addEventListener("click", function () {
    contador++;
    document.getElementById("contador").textContent = "Clicks: " + contador;
});

// Evento Mostrar Hora
document.getElementById("horaCuadro").addEventListener("click", function () {
    const ahora = new Date();
    document.getElementById("hora").textContent = ahora.toLocaleTimeString();
});

// Evento Submit
document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    document.getElementById("saludo").textContent = "Hola " + nombre;
});

// Evento Change
document.getElementById("fondo").addEventListener("change", function () {
    document.body.style.backgroundColor = this.value;
});
