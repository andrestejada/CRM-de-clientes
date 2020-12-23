import {obtenerCliente, editarCliente} from './API.js';
import { mostrarAlerta , validar } from "./funciones.js";
(function(){

//Campos del formulario

const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const empresaInput = document.querySelector('#empresa');
const telefonoInput = document.querySelector('#telefono');
const idInput = document.querySelector('#id');

document.addEventListener('DOMContentLoaded', async ()=>{

    const parametrosURL = new URLSearchParams(window.location.search);

    const idCliente = parseInt( parametrosURL.get('id') )

    const cliente = await obtenerCliente(idCliente);

    mostrarCliente(cliente);

    //submit de formulario

    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit',validarCliente)

})


function validarCliente (e){

    e.preventDefault()

    const cliente = {
        nombre: nombre.value,
        empresa: empresa.value,
        email: email.value,
        telefono: telefono.value,
        id: parseInt(idInput.value)
    }
   
    if(validar(cliente)){
        mostrarAlerta('todos los campos son obligatorios')
        return
     }


     // actuliza la informacion de cliente
     editarCliente(cliente)
   
}

function mostrarCliente(cliente ){
    const {nombre , empresa , email , telefono , id}= cliente

    nombreInput.value = nombre;
    empresaInput.value = empresa;
    emailInput.value = email;
    telefonoInput.value = telefono;
    idInput.value = id;
}


})();