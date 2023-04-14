import "./HeroStyle.css";
import { isLoggedIn } from "../../service/auth";
import React from 'react'
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="home-img" src='/img/home.png' alt="HomeImg" />
      </div>
      <div className="content">
        <p>Catch Em!</p>
        <h1 className=" text-white">Pokemon-GO</h1>
        {isLoggedIn() && (
          <>
            <Link to="/Pokemons" className="btn glass">Pokemons</Link>
            <Link to="/Mypokemons" className="btn glass">My Pokemons</Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Hero