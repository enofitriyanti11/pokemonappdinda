import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar';
import { FaTrashAlt, FaEdit } from "react-icons/fa";

function Todos() {
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);
    const [editItem, setEditItem] = useState(0);

    const handleChangeItem = (values) => {
        setItems(values)
        localStorage.setItem("todos", JSON.stringify(values))
    }

    const handleGetItem = () => {
        const dataFromStorage = localStorage.getItem("todos");
        if (dataFromStorage) {
            setItems(JSON.parse(dataFromStorage))
        }
    }

    useEffect(() => {
        handleGetItem()

        return () => {

            //
        }
    }, [])

    function AddItem() {
        if (newItem !== "") {
            handleChangeItem([...items, { newItem, id: `${newItem}-${Date.now()}` }]);
            setNewItem("")
        }

        if (editItem) {
            const editArray = items.find(i => i.id === editItem);
            const updatedItem = items.map((t) =>
                t.id === editArray.id ? t = { id: t.id, newItem } : { id: t.id, newItem: t.newItem });
            handleChangeItem(updatedItem);
            setEditItem(0);
            return;
        }
    };

    function deleteItem(id) {
        const newArray = items.filter((t) => t.id !== id);
        handleChangeItem(newArray);
    };

    function updateItem(id) {
        const editArray = items.find((i) => i.id === id);
        setNewItem(editArray.newItem);
        setEditItem(id);
    };

    return (
        <div>
            <>
                <Navbar />
            </>

            <div class="p-16">
                <div class="bg-white/25 mx-auto md:max-w-xl lg:max-w-2xl p-5 rounded-lg text-center shadow-md">
                    <h1 className="text-2xl font-bold text-[#424372] ">Todo List</h1>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        AddItem()
                    }}>
                        <div class="flex p-5 gap-4 justify-center ">
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
                    <div>
                        <ul class="text-[#424372]">
                            {items.map(newItem => {
                                return (
                                    <div className='grid items-center grid-cols-2'>
                                        <li key={newItem.id}>{newItem.newItem}</li>
                                        <div>
                                            <button type='button' onClick={() => deleteItem(newItem.id)}>
                                                <FaTrashAlt />
                                            </button>
                                            <button type='button' onClick={() => updateItem(newItem.id)}>
                                                <FaEdit />
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Todos