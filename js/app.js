// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
    // Al presionar "Agregar al carrito" se agrega un curso
    listaCursos.addEventListener('click',agregarCurso);
}

// Funciones
function agregarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

function leerDatosCurso(curso){
    // console.log(curso);

    // Creación de un objeto con el contenido del curso actual
    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id : curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    }

    // Agregamos elementos al carrito
    articulosCarrito = [ ...articulosCarrito, infoCurso ]
    
    console.log(articulosCarrito);
}