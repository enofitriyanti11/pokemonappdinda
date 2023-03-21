import React, { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Mypokemon() {
    const [pokemonData, setPokemonData] = useState([]);

    const handleGetItem = () => {
        const dataFromStorage = localStorage.getItem("pokemonData");
        if (dataFromStorage) {
            setPokemonData(JSON.parse(dataFromStorage))
        }
    }

    useEffect(() => {
        handleGetItem()

        return () => {

        }
    }, [])

    function deletePokemon(id) {
        const newArray = pokemonData.filter((p) => p.id !== id);
        setPokemonData([...newArray]);
        localStorage.setItem('pokemonData', JSON.stringify([...newArray]));

        toast("Delete Success !");
    };

    

    return (
        <div>
            <h1 class="text-4xl font-bold text-white p-4 ml-5">My Pokemons</h1>
            <img src='/img/logo.png' alt="" class="h-32 mx-auto" />
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-3 p-10 gap-x-7 gap-y-5">
                {pokemonData.map(pokemon => {
                    return (
                        <div>
                            <div class="bg-white/25 p-5 rounded-lg ">
                                <img src={pokemon.image} alt="" class="h-44 mx-auto" />
                                <h4 class="uppercase text-center text-[#424372] font-bold p-3">{pokemon.name}</h4>
                                <div class="flex justify-between">
                                    <div>
                                        <p>Price</p>
                                        <p class="text-lg font-bold text-[#424372] ">{pokemon.price}</p>
                                    </div>
                                    <div class="p-2.5">
                                        <label htmlFor={"my-modal" + pokemon.id} className="inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out">Delete</label>
                                        <input type="checkbox" id={"my-modal" + pokemon.id} className="modal-toggle" />
                                        <div className="modal">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">Delete from My Pokemons?</h3>
                                                <div className="modal-action">
                                                    <label htmlFor={"my-modal" + pokemon.id} className='inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out'>Cancel</label>
                                                    <label htmlFor={"my-modal" + pokemon.id} className="inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out"
                                                        onClick={() => deletePokemon(pokemon.id)}>Yay!</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <ToastContainer />
        </div>
    )
}

export default Mypokemon