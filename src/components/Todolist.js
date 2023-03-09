import React, {useState} from 'react'
import Navbar from './Navbar'

function Todolist() {
    const[newItem, setNewItem]= useState("");
    const [items, setItem]= useState([]);
    const [editItem, setEditItem] =useState(0);

    function AddItem() {

        if (newItem !==""){
            setItem([...items,{newItem, id: `${newItem}-${Date.now()}`}]);
            setNewItem("")
        }

        // const item = {
        //     id:Math.floor(Math.random() * 1000),
        //     value: newItem
        // };

        // setItem(oldList => [...oldList, item]);
        // setNewItem("");

        if(editItem) {
            const editArray =  items.find(i => i.id === editItem );
            const updatedItem = items.map((t) =>
            t.id === editArray.id ? t={ id: t.id, newItem} : {id: t.id, newItem: t.newItem});
            setItem(updatedItem);
            setEditItem(0);
            return;
        }
    };

    function deleteItem(id) {
        const newArray = items.filter((t) => t.id !== id);
        setItem(newArray);
    };

    function updateItem(id) {
        const editArray =  items.find((i) => i.id === id );
        setNewItem(editArray.newItem);
        setEditItem(id);
    };

  return (
    <div>
        <>
        <Navbar/>
        </>

        <div>
            <h1 className="text-4xl font-bold text-white p-4 ml-5">Todo List</h1>
            <form onSubmit={(e) => { e.preventDefault() 
                AddItem()}}>
                <div class="flex p-5 gap-4">
                    <input 
                        type="text" 
                        value={newItem} 
                        onChange={e => setNewItem(e.target.value)}></input>
                    <div class="p-3">
                        <button class=" inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg"
                         type="button" 
                         onClick={() => AddItem()}>Add</button>
                    </div>
                </div>
            </form>
            <ul class="text-white mx-5">
                {items.map(newItem => {
                    return(
                        <li key={newItem.id}>{newItem.newItem}
                        <button type='button'onClick={() => deleteItem(newItem.id)}>X</button>
                        <button type='button'onClick={() => updateItem(newItem.id)}>edit</button>
                        </li>
                    )
                })}
            </ul>
        </div>
        
    </div>
  )
}

export default Todolist