import logo from './logo.svg';
import './App.css';
import Pelicula from './pelicula';
import PageWrapper from './PageWrapper';
import peliculasJson from './peliculas.json';
import Paginacion from './Paginacion';
import { useState } from 'react';

function App() {

  const[pagiaActual, setPaginaActual] = useState(1);
  const TOTAL_POR_PAGINA = 7;
  let peliculas = peliculasJson;
  const cargarPeliculas = ()=>{  
    peliculas = peliculas.slice((pagiaActual) - 1 * TOTAL_POR_PAGINA, pagiaActual * TOTAL_POR_PAGINA);
  }
  const getTotalPaginas = ()=>{
    let cabtidadTotalDePeliculas = peliculasJson.length;
    return Math.ceil(cabtidadTotalDePeliculas / TOTAL_POR_PAGINA);
  }

cargarPeliculas();

  return (
    <PageWrapper>
      {peliculas.map(pelicula =>
        <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion}
          director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion}
          img={pelicula.img}>
          {pelicula.descripcion}
        </Pelicula>
      )}
      <Paginacion pagina={pagiaActual} total={getTotalPaginas()} onChange={(pagina)=>{
        setPaginaActual(pagina)
      }}/>
    </PageWrapper>
  );
}

export default App;
