import React, {useState} from 'react'
import Navbar from './Navbar'

function Todolist() {
    const[newItem, setNewItem]= useState("");
    const [items, setItem]= useState([]);
    const [editItems, setEditItem]= useState([]);

    function AddItem() {

        const item = {
            id:Math.floor(Math.random() * 1000),
            value: newItem
        };

        setItem(oldList => [...oldList, item]);
        setNewItem("");
    };

    function deleteItem(id) {
        const newArray = items.filter(item => item.id !== id);
        setItem(newArray);
    }


  return (
    <div>
        <>
        <Navbar/>
        </>

        <div>
            <h1 className="text-4xl font-bold text-white p-4 ml-5">Todo List</h1>
            <form>
                <div class="flex p-5 gap-4">
                    <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)}></input>
                    <div class="p-3">
                        <button class=" inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out"
                        onClick={() => AddItem()}>Add</button>
                    </div>
                </div>
            </form>
            <ul class="text-white mx-5">
                {items.map(item => {
                    return(
                        <li key={item.id}>{item.value}
                            <button onClick={() => deleteItem(item.id)}>X</button>
                            
                        </li>
                    )
                })}

            </ul>
            
        </div>

    </div>

  )
}

export default Todolist