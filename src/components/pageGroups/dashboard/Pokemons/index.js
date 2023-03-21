import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Index() {
  
    const pokemonsData = [
        {
          id: '1',
          name: 'pikachu',
          image: '/img/pokemon1.png',
          price: '$25'
        },
        {
          id: '2',
          name: 'Vaporeon',
          image: '/img/pokemon2.png',
          price: '$32'
        },
        {
          id: '3',
          name: 'Bulbasaur',
          image: '/img/pokemon3.png',
          price: '$29'
        },
        {
          id: '4',
          name: 'Charmander',
          image: '/img/pokemon4.png',
          price: '$35'
        },
        {
          id: '5',
          name: 'Squirtle',
          image: '/img/pokemon5.png',
          price: '$28'
        },
        {
          id: '6',
          name: 'Beedrill',
          image: '/img/pokemon6.png',
          price: '$33'
        },
        {
          id: '7',
          name: 'Charizard',
          image: '/img/pokemon7.png',
          price: '$37'
        },
        {
          id: '8',
          name: 'Butterfree',
          image: '/img/pokemon8.png',
          price: '$27'
        },
        {
          id: '9',
          name: 'Kakuna',
          image: '/img/pokemon9.png',
          price: '$25'
        },
        {
          id: '10',
          name: 'Venusaur',
          image: '/img/pokemon10.png',
          price: '$24'
        },
        {
          id: '11',
          name: 'Charmeleon',
          image: '/img/pokemon11.png',
          price: '$30'
        },
        {
          id: '12',
          name: 'wartortle',
          image: '/img/pokemon12.png',
          price: '$34'
        },
        {
          id: '13',
          name: 'Blastoise',
          image: '/img/pokemon13.png',
          price: '$33'
        },
        {
          id: '14',
          name: 'Weedle',
          image: '/img/pokemon14.png',
          price: '$30'
        },
        {
          id: '15',
          name: 'Caterpie',
          image: '/img/pokemon15.png',
          price: '$29'
        },
      ];
    
      const [pokemonAdd, setPokemonAdd] = useState(null);
    
      const addPokemon = (item) => {
        const myPokemonslocalstorage = localStorage.getItem('pokemonData')
    
        console.log(myPokemonslocalstorage)
    
        if (myPokemonslocalstorage) {
          const myPokemons = JSON.parse(myPokemonslocalstorage);
          const newMyPokemons = [...myPokemons, { id: item.id, name: item.name, image: item.image, price: item.price }];
          localStorage.setItem('pokemonData', JSON.stringify(newMyPokemons));
        } else {
          const newMyPokemons = [{ id: item.id, name: item.name, image: item.image, price: item.price }];
          localStorage.setItem('pokemonData', JSON.stringify(newMyPokemons));
        }
    
        toast("Add Pokemons Success !");
    
        setPokemonAdd(null)
    
      }
    
      return (
        <div>
          <h1 class="text-4xl font-bold text-white p-4 ml-5">Pokemon</h1>
          <img src='/img/logo.png' alt="" class="h-32 mx-auto" />
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-3 p-10 gap-x-7 gap-y-5">
            {pokemonsData.map(pokemon => {
              return (
                <div class="bg-white/25 p-5 rounded-lg ">
                  <img src={pokemon.image} alt="" class="h-44 mx-auto" />
                  <h4 class="uppercase text-center text-[#424372] font-bold p-3">{pokemon.name}</h4>
                  <div class="flex justify-between">
                    <div>
                      <p>Price</p>
                      <p class="text-lg font-bold text-[#424372] ">{pokemon.price}</p>
                    </div>
                    <div class="p-2.5">
                      {/* <label htmlFor={"my-modal" + pokemon.id} className="inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out">Add</label>
                      <input type="checkbox" id={"my-modal" + pokemon.id} className="modal-toggle" />
                      <div className="modal">
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">Add to My Pokemons?</h3>
                          <div className="modal-action">
                            <label htmlFor={"my-modal" + pokemon.id} className='inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out'>Cancel</label>
                            <label htmlFor={"my-modal" + pokemon.id} className="inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out"
                              onClick={() => addPokemon(pokemon)}>Yay!</label>
                          </div>
                        </div>
                      </div> */}
                      <button
                        onClick={() => setPokemonAdd(pokemon)}
                        className='inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out'>
                        Add
                      </button>
                    </div>
                  </div>
                  <ToastContainer />
                </div>
              );
            })}
            <input type="checkbox" checked={pokemonAdd !== null} className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box text-left">
                <h3 className="font-semibold text-slate-600 text-base">Add {pokemonAdd?.name} to My Pokemon ?</h3>
                <div className="modal-action">
                  <button className="inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out" 
                  onClick={() => setPokemonAdd(null)}>Cancel</button>
                  <button className='inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out' 
                  onClick={() => addPokemon(pokemonAdd)}>Yes !</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default Index