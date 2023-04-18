import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonsByName } from '../../../../service/pokemons'
import Navbar from '../../Navbar';
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'

function DetailPokemons() {
  const params = useParams();
  const [pokemonData, setPokemons] = useState(null);
  const [pokemonAdd, setPokemonAdd] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const myPokemonslocalstorage = localStorage.getItem('pokemonData');
    if (myPokemonslocalstorage) {
      const myPokemons = JSON.parse(myPokemonslocalstorage);
      const isAlreadyAdded = myPokemons.some((item) => item.id === pokemonData?.id);
      setIsAdded(isAlreadyAdded);
    }
  }, [pokemonData]);

  useEffect(() => {
    if (params?.id) {
      fetchPokemon(params?.id);
    }
  }, [params]);

  const fetchPokemon = async (id) => {
    try {
      const payloadDetail = await getPokemonsByName(id);
      const result = {
        ...payloadDetail.data,
        id: payloadDetail?.data?.name || "",
        name: payloadDetail?.data.name || "",
        img:
          payloadDetail?.data?.sprites?.other?.dream_world?.front_default || "",
      };
      setPokemons(result);
    } catch (error) {
      console.log(error, "error");
    }
  };

  const addPokemon = (item) => {
    const myPokemonslocalstorage = localStorage.getItem('pokemonData')

    console.log(myPokemonslocalstorage)

    if (myPokemonslocalstorage) {
      const myPokemons = JSON.parse(myPokemonslocalstorage);
      const newMyPokemons = [...myPokemons, { id: item.id, name: item.name, img: item.img }];
      localStorage.setItem('pokemonData', JSON.stringify(newMyPokemons));
    } else {
      const newMyPokemons = [{ id: item.id, name: item.name, img: item.img }];
      localStorage.setItem('pokemonData', JSON.stringify(newMyPokemons));
    }

    toast("Add Pokemons Success !");

    setPokemonAdd(null)

  }

  return (
    <div>
      <Navbar />
      <div className="bg-white/25 items-center mt-10 px-14 p-4 rounded-3xl mx-auto max-w-[40rem] lg:max-w-[60rem] grid lg:grid-cols-2">
        <div className="hidden lg:block px-5">
          <img src={pokemonData?.img} alt="event" className="w-[300px] rounded-xl shadow-xl " />
        </div>
        <div className="lg:py-12 pr-10 ">
          <h2 className="text-3xl font-semibold text-slate-700 md:text-3xl lg:text-4xl">{pokemonData?.name}</h2>
          <img src={pokemonData?.img} alt="event"
            className="pt-4 rounded-xl shadow-xl w-[250px] mx-auto sm:py-10 sm:w-[300px] lg:hidden" />
          <h6 className='font-bold'>Moves</h6>
          <p className="pt-7 text-slate-600 text-justify sm:pt-5 lg:pt-7 text-sm">
            {Array.from(pokemonData?.moves || [])
              .slice(0, 30)
              .map((item) => {
                return (
                  <span style={{ marginRight: 6 }}>{item?.move?.name}</span>
                );
              })}
          </p>
          {isAdded ? null : (
            <div className="text-center pt-8 font-bold" >
              <button
                onClick={() => setPokemonAdd(pokemonData)}
                className="rounded-3xl bg-[#8687bb] px-16 py-2 text-slate-800 uppercase hover:bg-[#d4a695]" >
                Add To My Pokemon
              </button>
            </div>
          )}
          <ToastContainer />
        </div>
        <input type="checkbox" checked={pokemonAdd !== null} className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box text-left bg-slate-800">
            <h3 className="font-semibold text-white text-base">Add {pokemonAdd?.name} to My Pokemon ?</h3>
            <div className="modal-action">
              <button className="inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out"
                onClick={() => setPokemonAdd(null)}>Cancel</button>
              <button className='inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out'
                onClick={() => addPokemon(pokemonAdd)}>Yes !</button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-extrabold text-slate-700 py-10 px-36">More Pokemons</h1>
    </div>
  )
}

export default DetailPokemons