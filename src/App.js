import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Pokemons from "./routes/Pokemons";
import Mypokemons from "./routes/Mypokemons";
import Login from "./components/Login";
import Detail from "./components/Detail";
import Register from "./components/Register";
import Todolist from "./components/Todolist";

import { BrowserRouter, Route, Routes} from "react-router-dom";





function App() {
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
      </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
