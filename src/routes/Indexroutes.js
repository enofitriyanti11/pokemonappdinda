import React from 'react'
import Home from "../pages/dashboard/Home";
import Pokemons from "../pages/dashboard/Pokemons";
import Mypokemons from "../pages/dashboard/Mypokemons";
import Login from "../components/pageGroups/auth/Login";
import Detail from "../components/pageGroups/dashboard/Pokemons/Detail";
import Register from "../components/pageGroups/auth/Register";
import Todolist from "../components/pageGroups/dashboard/Todolist";
import Mypokemonitem from "../components/pageGroups/dashboard/Mypokemonitem";
import { BrowserRouter, Route, Routes} from "react-router-dom";

function Indexroutes() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pokemons" element={<Pokemons />} />
        <Route path="/Mypokemons" element={<Mypokemons />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Todolist" element={<Todolist />} />
        <Route path="/Mypokemonitem" element={<Mypokemonitem />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Indexroutes