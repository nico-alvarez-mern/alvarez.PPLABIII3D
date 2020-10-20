import {list} from '../index.js';

//completar form al hacer click en un elemento para su edicion
export const completeForm = (id)=>{
    const element = list.find( element => element.id == id );
    //traer formulario y cargar los input con los valores del elemento
    console.log(element);
}