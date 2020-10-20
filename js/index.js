import {createTBody} from './components/table.js';
import {completeForm} from './components/form.js';
export const list = [{id: '1', nombre: 'nicolas',apellido: 'alvarez',edad: '27', genero: 'masculino'}];

createTBody(list,completeForm);
