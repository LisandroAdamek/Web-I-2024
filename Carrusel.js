let botonsiguiente = document.getElementById("flechaD");
let botonatras = document.getElementById("flechaI");

const imagenes = [
    "img/jugadores/Cavani.png",
    "img/jugadores/Rojo.png",
    "img/jugadores/Merentiel.jpeg"
];

const img = document.getElementById("ijugador");
let move = 0;


function cambiarImagen(){
    img.src = imagenes[move];
}

botonsiguiente.addEventListener("click", () => {
    move = (move +1)%imagenes.length;
    cambiarImagen();
});
botonatras.addEventListener("click", () => {
    move = (move -1 + imagenes.length)%imagenes.length;
    cambiarImagen();
});