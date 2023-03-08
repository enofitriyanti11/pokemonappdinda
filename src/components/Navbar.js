import "./NavbarStyle.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
 
 function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

   return (
     <div className="header">
        <img src={require("../img/logo.png")} alt="" class="h-10 ml-5"/>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Pokemons">Pokemons</Link>
            </li>
            <li>
                <Link to="/Mypokemons">My Pokemons</Link>
            </li>
            <li>
                <Link to="/Todolist">Todo list</Link>
            </li>
            <li>
                <Link to="/Login">Logout</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color:"#fff"}}/>) : (<FaBars size={20} style={{color:"#fff"}}/>)}
            
        </div>

     </div>
   )
 }
 
 export default Navbar