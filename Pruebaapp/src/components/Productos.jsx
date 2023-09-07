import Producto from './Producto';


export default function Productos({productos, agregarAFavoritos,eliminarDeFavoritos}) {
  
  

  return (
    <div className="productos">
      {
      productos.length > 0 ? productos.map(producto => <Producto key={producto.id} producto={producto} agregarAFavoritos={agregarAFavoritos} eliminarDeFavoritos={eliminarDeFavoritos}/>)
      : <p>Aun no se han aniadido productos a la lista</p>
      }
    </div>
  );
}
