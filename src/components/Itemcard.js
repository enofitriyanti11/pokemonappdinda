import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Itemcard() {
  const [cartItems, setCartItems] = useState([]);

  const HandleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        { ...ProductExist, quantity: ProductExist.quantity + 1 } : item)
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  console.log({cartItems});

  const pokemons = [
    {
      id: '1',
      name: 'pikachu',
      image: '/img/pokemon1.png',
      price: '$25'
    },
    {
      name: 'Vaporeon',
      image: '/img/pokemon2.png',
      price: '$32'
    },
    {
      name: 'Bulbasaur',
      image: '/img/pokemon3.png',
      price: '$29'
    },
    {
      name: 'Charmander',
      image: '/img/pokemon4.png',
      price: '$35'
    },
    {
      name: 'Squirtle',
      image: '/img/pokemon5.png',
      price: '$28'
    },
    {
      name: 'Beedrill',
      image: '/img/pokemon6.png',
      price: '$33'
    },
    {
      name: 'Charizard',
      image: '/img/pokemon7.png',
      price: '$37'
    },
    {
      name: 'Butterfree',
      image: '/img/pokemon8.png',
      price: '$27'
    },
    {
      name: 'Kakuna',
      image: '/img/pokemon9.png',
      price: '$25'
    },
    {
      name: 'Venusaur',
      image: '/img/pokemon10.png',
      price: '$24'
    },
    {
      name: 'Charmeleon',
      image: '/img/pokemon11.png',
      price: '$30'
    },
    {
      name: 'wartortle',
      image: '/img/pokemon12.png',
      price: '$34'
    },
    {
      name: 'Blastoise',
      image: '/img/pokemon13.png',
      price: '$33'
    },
    {
      name: 'Weedle',
      image: '/img/pokemon14.png',
      price: '$30'
    },
    {
      name: 'Caterpie',
      image: '/img/pokemon15.png',
      price: '$29'
    },
  ];

  return (
    <div>
      <h1 class="text-4xl font-bold text-white p-4 ml-5">Pokemon</h1>
      <img src={require("../img/logo.png")} alt="" class="h-32 mx-auto" />
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-3 p-10 gap-x-7 gap-y-5">
        {pokemons.map(pokemon => {
          return (
            <div class="bg-white/25 p-5 rounded-lg " id={pokemon.id}>
              <Link to="/Detail" >
                <img src={pokemon.image} alt="" class="h-44 mx-auto" />
                <h4 class="uppercase text-center text-[#424372] font-bold p-3">{pokemon.name}</h4>
              </Link>
              <div class="flex justify-between">
                <div>
                  <p>Price</p>
                  <p class="text-lg font-bold text-[#424372] ">{pokemon.price}</p>
                </div>
                <div class="p-2.5">
                  <button type="button" class="inline-block px-3 py-2.5 bg-[#8687bb] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#d4a695] hover:shadow-lg focus:bg-[#8687bb] focus:shadow-lg focus:outline-none focus:ring-0 active:[#d4a695] active:shadow-lg transition duration-150 ease-in-out"
                    onClick={() => HandleAddProduct(pokemons)}>
                    Add
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Itemcard