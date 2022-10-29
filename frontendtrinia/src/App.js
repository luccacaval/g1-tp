// imports
import React from 'react';
import Header from './Header';
import Footer from './footer';
import ItemSelector from './ItemSelector';

import Form from './Form'

const App = () => {
  return (
    <div>
      <Header title='Notas'/>
      <Form/>
      <ItemSelector/>
      <Footer />
    </div>
  );
};

export default App;
