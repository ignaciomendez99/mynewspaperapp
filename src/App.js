import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //definir la categoria y noticias

  const [ categoria, setCategoria ] = useState('');

  const [ noticias, setNoticias ] = useState([]);


  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=a80c6e7e38174c89bfd4c5e4af895be0`;

      const respuesta = await fetch(url);

      const noticias = await respuesta.json();

      setNoticias(noticias.articles);
    }

    consultarAPI();
  }, [categoria])


  return (
    <Fragment>
      <Header 
        titulo="Buscador de noticias"
      />

      <div className="container white">
        <Formulario 
          setCategoria={setCategoria}
        />

        <ListadoNoticias 
          noticias={noticias}
        />
      </div>

    </Fragment>
      
    
    

  );
}

export default App;
