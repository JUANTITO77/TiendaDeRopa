const menu= document.getElementById('menu');
const abrir= document.getElementById('BotonAbrir');
const cerrar= document.getElementById('BotonCerrar');

abrir.addEventListener('click',()=>{
    menu.classList.add('visible');
})

cerrar.addEventListener('click',()=>{
    menu.classList.remove('visible');
})








