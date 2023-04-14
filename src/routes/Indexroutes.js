import React from 'react'
import Home from "../pages/dashboard/Home";
import Pokemons from "../pages/dashboard/Pokemons";
import SignIn from "../components/pageGroups/auth/SignIn";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import DetailPokemons from '../components/pageGroups/dashboard/Pokemons/[id]';
import Todos from '../components/pageGroups/dashboard/Todos';
import MyPokemons from '../pages/dashboard/My-pokemons';
import SignUp from '../components/pageGroups/auth/SignUp';
import IndexUser from '../service/users/IndexUser';
import { isLoggedIn } from '../service/auth';
import { Navigate } from 'react-router-dom';

function Indexroutes() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pokemons" element={isLoggedIn() ? <Pokemons /> : <Navigate to="/SignIn" />} />
        <Route path="/MyPokemons" element={isLoggedIn() ? <MyPokemons /> : <Navigate to="/SignIn" />} />
        <Route path="/pokemons/:id" element={<DetailPokemons />} />
        <Route path="/SignIn" element={isLoggedIn() ? <Navigate to="/" /> : <SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Todos" element={<Todos />} />
        <Route path="/IndexUser" element={<IndexUser />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Indexroutes