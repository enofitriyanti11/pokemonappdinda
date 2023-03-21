import React from 'react'
import Home from "../pages/dashboard/Home";
import Pokemons from "../pages/dashboard/Pokemons";
import SignIn from "../components/pageGroups/auth/SignIn";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Id from '../components/pageGroups/dashboard/Pokemons/[id]';
import Todos from '../components/pageGroups/dashboard/Todos';
import Mypokemons from '../pages/dashboard/My-pokemons';
import SignUp from '../components/pageGroups/auth/SignUp';

function Indexroutes() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pokemons" element={<Pokemons />} />
        <Route path="/Mypokemons" element={<Mypokemons/>} />
        <Route path="/Id" element={<Id />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Todos" element={<Todos />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Indexroutes