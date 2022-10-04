import React from 'react';
import Index from './api-hook';
import Head from './api-hook/komponen/header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Head/>
      <Index/>
    </div>
  );
}

export default App;
