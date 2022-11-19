// imports
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ItemSelector from './ItemSelector';
import Form from './Form';
import { useState } from 'react';





const App = () => {
  const [hidden, setHidden] = useState(true);
  const [dataChange, setdataChange] = useState(0)
  return (
    <div>
      <Header title='Notas'/> 
      <ItemSelector
      change = {dataChange}
      submit = {() => setdataChange(dataChange + 1)}
      />
      <div className="text-center">
      <button className="btn-info" onClick={e => setHidden(prev => !prev)}>Crear peliculas</button>
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
