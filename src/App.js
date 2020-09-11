import React from 'react';
import Conversor from './Conversor'
import './App.css';

class App extends React.Component {
  render() {
    return (
    <div className="App">
      <h1>Conversor de Moedas</h1>
      <div className="AppDiv">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
    </div>
    )
  }
}

export default App;
