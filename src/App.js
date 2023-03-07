import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Pokemons from "./routes/Pokemons";
import Mypokemons from "./routes/Mypokemons";
import Login from "./components/Login";
import Detail from "./components/Detail";

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
    </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
