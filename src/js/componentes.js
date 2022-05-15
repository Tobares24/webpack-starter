// Importar css en este archivo
import '../css/componentes.css'

// Importar imagen
// import webpacklogo from '../assets/img/webpack-logo.png';



// Agregar export para exportar esta función o cualquier otra
export const saludar = (nombre) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}!!!`;

    document.body.append(h1);

    // Agregar una imagen
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append(img);
}