import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../imagenes/logo.png";


export default function Header() {
  return (
    <header className="header">
      <Link to={"/"}>
        <img className="logo-cabecera" src={LogoImg} alt="logo cabecera"></img>
      </Link>
      <nav className="navbar">
        <Link to={'/'} >Productos</Link>
        <Link to={'/favoritos'}>Favoritos</Link>
      </nav>
    </header>
  );
}
