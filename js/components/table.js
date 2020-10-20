
//Recibe una funcion que va a tener disponible la ID en el click
export const createTBody = (listItems = [], callback )=>{
    
    const table = document.getElementById('myTable');
    if(table.childElementCount > 1){
        table.removeChild( table.lastChild );
    }
    const tbody = document.createElement('tbody');
    listItems.forEach( element =>{
        const tr = document.createElement('tr');
        for (const key in element) {
            const td = document.createElement('td');
            if(key === 'id'){
                td.classList.add('hidden');
            }
            const textNode = document.createTextNode(element[key]);
            td.appendChild(textNode);
            tr.appendChild(td);
            
        }
        tr.addEventListener( 'click', (e)=>{
            callback(e.target.parentElement.firstChild.textContent);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
}
