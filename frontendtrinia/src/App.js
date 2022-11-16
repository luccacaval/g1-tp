// imports
import React from 'react';
import Header from './Header';
import Footer from './footer';
import ItemSelector from './ItemSelector';
import Form from './Form';
import Carrusel from './Carrusel';
import { useState } from 'react';





const App = () => {
  const [hidden, setHidden] = useState(true);
  const [dataChange, setdataChange] = useState(0)
  return (
    <div>
      <Header title='Notas'/>
      <Carrusel/>
      <ItemSelector
      change = {dataChange}
      submit = {() => setdataChange(dataChange + 1)}
      />
      <div class="text-center">
      <button class="btn-warning" onClick={e => setHidden(prev => !prev)}>Crear peliculas</button>
      </div>
      <div hidden={hidden}>
      <Form
      submit = {() => setdataChange(dataChange + 1)}
      />
      </div>
      <Footer />
    </div>
  );
};

export default App;
