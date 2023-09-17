// const reaction = document.querySelector(".reaction_meGusta");
// const button = document.querySelector(".me_gusta");

// let contador = 0;

// button.addEventListener("click", () => {
// console.log("Click");
// contador = 1;
// reaction.textContent = contador;
// });

// Obtener una referencia al botón y al contador
const botonMeGusta = document.getElementById('botonMeGusta');
const contador = document.getElementById('contador_MeGusta');

// Inicializar el estado del botón (sin "Me gusta" inicialmente)
let liked = false;
let likes = 0;

// Mostrar la cantidad inicial de "Me gusta"
contador.textContent = likes;

// Agregar un evento de clic al botón
botonMeGusta.addEventListener('click', function () {
if (liked) {
likes--; // Decrementar el contador si ya le dio "Me gusta"
} else {
likes++; // Incrementar el contador si no había dado "Me gusta"
}

// Actualizar el estado del botón y el contador
liked = !liked;
contador.textContent = likes;

// Actualizar el texto del botón según el estado actual
botonMeGusta.textContent = liked ? "Quitar Me gusta" : "Me gusta";
});
