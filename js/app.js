import {obtenerClientes,eliminarCliente} from './API.js'


(function () {
  const listado = document.querySelector('#listado-clientes')
  const eliminar = document.querySelector('eliminar')

  document.addEventListener('DOMContentLoaded', mostrarCliente);
  listado.addEventListener('click',confirmarEliminar)
  

  async function mostrarCliente () {

    const clientes = await obtenerClientes()


    clientes.forEach(cliente => {

      const { nombre, telefono, empresa, email ,id } = cliente;

      const row = document.createElement('tr')
      row.innerHTML += `
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                    <p class="text-sm leading-10 text-gray-700"> ${email} </p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                <p class="text-gray-700">${telefono}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                <p class="text-gray-600">${empresa}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
            </td>
    `

        listado.appendChild(row)
    })
  }


  function confirmarEliminar(e){

    
    if(e.target.classList.contains('eliminar')){
      
      const clienteId = parseInt(e.target.dataset.cliente);
      const confirmar = confirm('Estas seguro que quiere eliminar este Cliente?')

      if(confirm){
        eliminarCliente(clienteId)
      }
      
    }

    
  }

})()
