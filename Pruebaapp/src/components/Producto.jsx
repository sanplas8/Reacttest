import React, { useState } from "react";
import FavImg from "../imagenes/FavImg.png";
import NoFavImg from "../imagenes/FavImg2.png";

export default function Producto({
  producto,
  agregarAFavoritos,
  eliminarDeFavoritos,
}) {
  const [favorito, setFavorito] = useState(false);

  function handleClick() {
    if (favorito) {
      eliminarDeFavoritos(producto);
      setFavorito(false);
    } else {
      agregarAFavoritos(producto);
      setFavorito(true);
      
    }
  }

  return (
    <div className="producto">
      <a href={`/producto/${producto.id}`}>
        <img src={producto.image} alt="foto-producto" />
      </a>
      <div className="info">
        <p>{producto.title}</p>
        <mark>${producto.price}</mark>
      </div>

      {
      favorito ? 
        <img className="fav-ico" onClick={handleClick} src={NoFavImg} alt="" />
      :
        <img className="fav-ico" onClick={handleClick} src={FavImg} alt="" />
    
      }
    </div>
  );
}
