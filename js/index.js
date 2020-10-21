import {createTBody} from './components/table.js';
import {completeForm} from './components/form.js';
import {initList, list, nextId} from './components/listItem.js';
import { handleCancel, handleDelete, handleSave } from './components/btn.js';

//local storage
initList( JSON.parse( localStorage.getItem('listItem') ) );
localStorage.setItem('next-id', nextId() );

//creo tabla inicial
createTBody(list,completeForm);

//buttons
const btnGuardar = document.getElementById('btnGuardar');
btnGuardar.addEventListener('click', handleSave);
const btnEliminar = document.getElementById('btnEliminar');
btnEliminar.addEventListener('click', handleDelete);
const btnCancelar = document.getElementById('btnCancelar');
btnCancelar.addEventListener('click', handleCancel);
