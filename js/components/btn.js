import {selected,deleteItem,list, addSelected, addItem} from './listItem.js';
import { completeForm, emptyForm } from './form.js';
import {createTBody} from './table.js';
import { Anuncio_Auto } from './Anuncio.js';

export const handleDelete = ()=>{
    deleteItem(selected.id);
    createTBody( list,completeForm );
    const divBtns = document.getElementById('btns');
    divBtns.classList.add('hidden');
    emptyForm();
}
export const handleCancel = ()=>{
    addSelected();
    const divBtns = document.getElementById('btns');
    divBtns.classList.add('hidden');
    emptyForm();
}
export const handleSave = ()=>{
    const form = document.getElementById('myForm');
    const transaccion = (form.transaccion.value === 'venta') ? 'venta' : 'alquiler';
    const newItem = new Anuncio_Auto(
        '',form.titulo.value,
        transaccion,
        form.descripcion.value,
        form.precio.value,
        form.puertas.value,
        form.kilometros.value,
        form.potencia.value
    )
    if(selected){
        newItem.id = selected.id;
        deleteItem( selected.id );
    }else{
        newItem.id = localStorage.getItem('next-id');
    }
    addItem( newItem );
    createTBody( list,completeForm );   
    emptyForm();
}