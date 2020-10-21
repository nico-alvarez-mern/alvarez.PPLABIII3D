import {list,addSelected} from './listItem.js';

//completar form al hacer click en un elemento para su edicion
export const completeForm = (id)=>{
    const element = list.find( element => element.id == id );
    const form = document.getElementById('myForm');
    form.titulo.value = element.titulo;
    form.descripcion.value = element.descripcion;
    form.precio.value = element.precio;
    form.puertas.value = element.num_puertas;
    form.kilometros.value = element.num_KMs;
    form.potencia.value = element.potencia;
    if(element.transaccion === 'venta'){
        form.venta.checked = true;
        form.alquiler.checked = false;
    }else{
        form.venta.checked = false;
        form.alquiler.checked = true;
    }
    const divBtns = document.getElementById('btns');
    divBtns.classList.remove('hidden');
    addSelected(element);
}

export const emptyForm = ()=>{
    const form = document.getElementById('myForm');
    form.titulo.value = '';
    form.descripcion.value = '';
    form.precio.value = '';
    form.puertas.value = '';
    form.kilometros.value = '';
    form.potencia.value = '';
}