import React, { useState, useEffect } from 'react'
import { getPokemons, getPokemonsByName } from '../../../../service/pokemons';
import { toast, ToastContainer } from 'react-toastify';

function Index() {
  const [pokemonData, setPokemons] = useState([]);

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    try {
      const payload = await getPokemons();
      const promises = Array.from(payload?.data?.results || []).map(
        async (item) => {
          const payloadDetail = await getPokemonsByName(item?.name || "");
          return {
            ...payloadDetail.data,
            id: payloadDetail?.data?.name || "",
            name: payloadDetail?.data?.name || "",
            img:
              payloadDetail?.data?.sprites.other.dream_world.front_default ||
              "",
          };
        }
      );
      const results = await Promise.all(promises);
      setPokemons(results);
    } catch (error) {
      console.log(error, "error");
    }
  };
  
  return (
    <div>
      <h1 class="text-4xl font-bold text-white p-4 ml-5">Pokemon</h1>
      <img src='/img/logo.png' alt="" class="h-32 mx-auto" />
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-3 p-10 gap-x-7 gap-y-5">

        {Array.from(pokemonData || []).map((item, index) => {
          return (
            <div key={index} id={item?.id} className='bg-white/25 p-5 rounded-lg'>
              <img src={item?.img} alt="" className='h-44 mx-auto'/>
              <h5 className='uppercase text-center text-[#424372] font-bold p-3'>{item?.name}</h5>
              <div className='items-end'>
                <button
                  className='inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out'>
                  Add
                </button>
              </div>
            </div>

          );
        })}
      </div>
    </div>
  )
}

export default Index