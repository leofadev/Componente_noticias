const reaction = document.querySelector(".reaction_meGusta");
const button = document.querySelector(".me_gusta");

let contador = 0;

button.addEventListener("click", () => {
    console.log("Click");
    contador = 1;
    reaction.textContent = contador;
});
