export let list = [];
export let selected = null;


export const initList = (listItem = [])=>{
    list = listItem;
}
export const addSelected = (item = null)=>{
    selected = item;
}
export const deleteItem = (id)=>{
    list = list.filter( element => element.id !== id );
    localStorage.setItem('listItem', JSON.stringify(list) );
}
export const addItem = (item)=>{
    list.push( item );
    localStorage.setItem('listItem', JSON.stringify(list) );
    localStorage.setItem('next-id', nextId() );
}
export const nextId = ()=>{
    if(list.length === 0){
        return 1;
    }
    else{
        return parseInt(list[ list.length - 1 ].id) + 1;
    }
}