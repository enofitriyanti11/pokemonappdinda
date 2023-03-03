import React from 'react'

function Itemcard() {
  return (

    <div>
        <h1 className="text-4xl font-bold text-white p-4 ml-5">Pokemon</h1>
        <img src={require("../img/logo.png")} alt="" class="h-32 mx-auto"/>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-3 p-10 gap-x-7 gap-y-5">
        <div class="bg-white/25 p-5 rounded-lg ">
          <img src={require("../img/pokemon1.png")} alt="" class="h-44 mx-auto"/>
          <h4 class="uppercase text-center text-[#424372] font-bold p-3"> Pikachu</h4>
          <div class="flex justify-between">
            <div>
                <p>Price</p>
                <p class="text-lg font-bold text-[#424372] ">$ 25</p>
            </div>
            <div class="p-2.5">
                <button type="button" class=" inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out">Add</button>
            </div>
          </div>
        </div>
        <div class="bg-white/25 p-5 rounded-lg ">
          <img src={require("../img/pokemon2.png")} alt="" class="h-44 mx-auto"/>
          <h4 class="uppercase text-center text-[#424372] font-bold p-3"> Vaporeon</h4>
          <div class="flex justify-between">
            <div>
                <p>Price</p>
                <p class="text-lg font-bold text-[#424372] ">$ 25</p>
            </div>
            <div class="p-2.5">
                <button type="button" class=" inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out">Add</button>
            </div>
          </div>
        </div>
        <div class="bg-white/25 p-5 rounded-lg ">
          <img src={require("../img/pokemon3.png")} alt="" class="h-44 mx-auto"/>
          <h4 class="uppercase text-center text-[#424372] font-bold p-3"> Bulbasaur</h4>
          <div class="flex justify-between">
            <div>
                <p>Price</p>
                <p class="text-lg font-bold text-[#424372] ">$ 25</p>
            </div>
            <div class="p-2.5">
                <button type="button" class=" inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out">Add</button>
            </div>
          </div>
        </div>
        <div class="bg-white/25 p-5 rounded-lg ">
          <img src={require("../img/pokemon4.png")} alt="" class="h-44 mx-auto"/>
          <h4 class="uppercase text-center text-[#424372] font-bold p-3"> Charmander</h4>
          <div class="flex justify-between">
            <div>
                <p>Price</p>
                <p class="text-lg font-bold text-[#424372] ">$ 25</p>
            </div>
            <div class="p-2.5">
                <button type="button" class=" inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out">Add</button>
            </div>
          </div>
        </div>
        <div class="bg-white/25 p-5 rounded-lg ">
          <img src={require("../img/pokemon5.png")} alt="" class="h-44 mx-auto"/>
          <h4 class="uppercase text-center text-[#424372] font-bold p-3"> Squirtle</h4>
          <div class="flex justify-between">
            <div>
                <p>Price</p>
                <p class="text-lg font-bold text-[#424372] ">$ 25</p>
            </div>
            <div class="p-2.5">
                <button type="button" class=" inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out">Add</button>
            </div>
          </div>
        </div>
        <div class="bg-white/25 p-5 rounded-lg ">
          <img src={require("../img/pokemon6.png")} alt="" class="h-44 mx-auto"/>
          <h4 class="uppercase text-center text-[#424372] font-bold p-3"> Beedrill</h4>
          <div class="flex justify-between">
            <div>
                <p>Price</p>
                <p class="text-lg font-bold text-[#424372] ">$ 25</p>
            </div>
            <div class="p-2.5">
                <button type="button" class=" inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out">Add</button>
            </div>
          </div>
        </div>
        <div class="bg-white/25 p-5 rounded-lg ">
          <img src={require("../img/pokemon7.png")} alt="" class="h-44 mx-auto"/>
          <h4 class="uppercase text-center text-[#424372] font-bold p-3"> Charizard</h4>
          <div class="flex justify-between">
            <div>
                <p>Price</p>
                <p class="text-lg font-bold text-[#424372] ">$ 25</p>
            </div>
            <div class="p-2.5">
                <button type="button" class=" inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out">Add</button>
            </div>
          </div>
        </div>
        <div class="bg-white/25 p-5 rounded-lg ">
          <img src={require("../img/pokemon8.png")} alt="" class="h-44 mx-auto"/>
          <h4 class="uppercase text-center text-[#424372] font-bold p-3"> Butterfree</h4>
          <div class="flex justify-between">
            <div>
                <p>Price</p>
                <p class="text-lg font-bold text-[#424372] ">$ 25</p>
            </div>
            <div class="p-2.5">
                <button type="button" class=" inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out">Add</button>
            </div>
          </div>
        </div>
        <div class="bg-white/25 p-5 rounded-lg ">
          <img src={require("../img/pokemon9.png")} alt="" class="h-44 mx-auto"/>
          <h4 class="uppercase text-center text-[#424372] font-bold p-3"> Kakuna</h4>
          <div class="flex justify-between">
            <div>
                <p>Price</p>
                <p class="text-lg font-bold text-[#424372] ">$ 25</p>
            </div>
            <div class="p-2.5">
                <button type="button" class=" inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out">Add</button>
            </div>
          </div>
        </div>
        <div class="bg-white/25 p-5 rounded-lg ">
          <img src={require("../img/pokemon10.png")} alt="" class="h-44 mx-auto"/>
          <h4 class="uppercase text-center text-[#424372] font-bold p-3"> Venusaur</h4>
          <div class="flex justify-between">
            <div>
                <p>Price</p>
                <p class="text-lg font-bold text-[#424372] ">$ 25</p>
            </div>
            <div class="p-2.5">
                <button type="button" class=" inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out">Add</button>
            </div>
          </div>
        </div>
        <div class="bg-white/25 p-5 rounded-lg ">
          <img src={require("../img/pokemon11.png")} alt="" class="h-44 mx-auto"/>
          <h4 class="uppercase text-center text-[#424372] font-bold p-3"> Charmeleon</h4>
          <div class="flex justify-between">
            <div>
                <p>Price</p>
                <p class="text-lg font-bold text-[#424372] ">$ 25</p>
            </div>
            <div class="p-2.5">
                <button type="button" class=" inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out">Add</button>
            </div>
          </div>
        </div>
        <div class="bg-white/25 p-5 rounded-lg ">
          <img src={require("../img/pokemon12.png")} alt="" class="h-44 mx-auto"/>
          <h4 class="uppercase text-center text-[#424372] font-bold p-3"> wartortle</h4>
          <div class="flex justify-between">
            <div>
                <p>Price</p>
                <p class="text-lg font-bold text-[#424372] ">$ 25</p>
            </div>
            <div class="p-2.5">
                <button type="button" class=" inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out">Add</button>
            </div>
          </div>
        </div>
        <div class="bg-white/25 p-5 rounded-lg ">
          <img src={require("../img/pokemon13.png")} alt="" class="h-44 mx-auto"/>
          <h4 class="uppercase text-center text-[#424372] font-bold p-3"> Blastoise</h4>
          <div class="flex justify-between">
            <div>
                <p>Price</p>
                <p class="text-lg font-bold text-[#424372] ">$ 25</p>
            </div>
            <div class="p-2.5">
                <button type="button" class=" inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out">Add</button>
            </div>
          </div>
        </div>
        <div class="bg-white/25 p-5 rounded-lg ">
          <img src={require("../img/pokemon14.png")} alt="" class="h-44 mx-auto"/>
          <h4 class="uppercase text-center text-[#424372] font-bold p-3"> Weedle</h4>
          <div class="flex justify-between">
            <div>
                <p>Price</p>
                <p class="text-lg font-bold text-[#424372] ">$ 25</p>
            </div>
            <div class="p-2.5">
                <button type="button" class=" inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out">Add</button>
            </div>
          </div>
        </div>
        <div class="bg-white/25 p-5 rounded-lg ">
          <img src={require("../img/pokemon15.png")} alt="" class="h-44 mx-auto"/>
          <h4 class="uppercase text-center text-[#424372] font-bold p-3"> Caterpie</h4>
          <div class="flex justify-between">
            <div>
                <p>Price</p>
                <p class="text-lg font-bold text-[#424372] ">$ 25</p>
            </div>
            <div class="p-2.5">
                <button type="button" class=" inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out">Add</button>
            </div>
          </div>
        </div>
    </div>
    
    </div>
  )
}

export default Itemcard