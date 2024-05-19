const menu= document.getElementById('menu');
const abrir= document.getElementById('BotonAbrir');
const cerrar= document.getElementById('BotonCerrar');

abrir.addEventListener('click',()=>{
    menu.classList.add('visible');
})

cerrar.addEventListener('click',()=>{
    menu.classList.remove('visible');
})

// slider de promociones

const slider = document.querySelector('.slider-contenedor');
const sliderIndividual = document.querySelectorAll('.contenido-slider'); // Cambiado a querySelectorAll
let contador = 0;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener('resize', () => {
    width = sliderIndividual[0].clientWidth; // Recalcula el ancho en caso de redimensionar la ventana
});

setInterval(() => {
    slides();
}, intervalo);

function slides() {
    contador++;
    if (contador >= sliderIndividual.length) {
        contador = 0;
    }
    slider.style.transform = 'translate(' + (-width * contador) + 'px)';
    slider.style.transition = 'transform 0s';
}





