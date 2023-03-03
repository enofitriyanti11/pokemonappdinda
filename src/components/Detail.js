import React from 'react'

function Detail() {
  return (
    <div class="py-10 mx-60">
        <div class="bg-white/25 p-5 rounded-lg grid grid-cols-2">
          <img src={require("../img/pokemon1.png")} class="h-[350px] py-auto shadow-lg rounded-lg " alt=""/>
          <div class="py-20">
            <h4 class="uppercase text-[#424372] text-4xl font-bold py-3"> Pikachu</h4>
            <p class="text-black/60 mb-3">Pikachu is an Electric-type Pokémon introduced in Generation I. It evolves from Pichu when leveled up with high friendship and evolves into Raichu when exposed to a Thunder Stone.</p>
            <button type="button" class="inline-block px-16 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out">Add to my pokemon</button>
          </div>
        </div>
    </div>
    
  )
}

export default Detail