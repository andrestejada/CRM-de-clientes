import { mostrarAlerta , validar } from "./funciones.js";
import {nuevoCliente} from './API.js';

(function(){

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit',validarFormulario);


function validarFormulario(e){

e.preventDefault();

 const nombre = document.querySelector('#nombre').value;
 const telefono = document.querySelector('#telefono').value;
 const email = document.querySelector('#email').value;
 const empresa = document.querySelector('#empresa').value;

 const cliente = {
     nombre,
     empresa,
     email,
     telefono
 }

 if(validar(cliente)){
    mostrarAlerta('todos los campos son obligatorios')
    return
 }

    nuevoCliente(cliente)

}




})();