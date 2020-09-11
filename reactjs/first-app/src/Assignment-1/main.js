import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../src/assets/style.css';
import Formreact from '../src/component/Formreact'
import Header from '../src/common/Header'
import Footer from '../src/common/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Formreact />
      <Footer />
    </div>
  );
}

export default App;
