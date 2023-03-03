import "./HeroStyle.css";

import React from 'react'
import HomeImg from "../img/home.png"
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
        <div className="mask">
            <img className="home-img" src={HomeImg} alt="HomeImg"/>
        </div>
        <div className="content">
            <p>Catch Em!</p>
            <h1 className=" text-white">Pokemon-GO</h1>
            <Link to="/Pokemons" className="btn">Pokemon</Link>
            <Link to="/Mypokemons" className="btn btn-light">My Pokemon</Link>


        </div>

    </div>
  )
}

export default Hero