import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InfoHeader from './components/InfoHeader.js';
import Control from './components/Control.js';
import Fretboard from './components/Fretboard.js';
import SelectNote from './components/SelectNote.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">FretShed</h1>
        </header>
        <InfoHeader className="info-header"/>
        <Fretboard />
        <SelectNote />
        <Control />
      </div>
    );
  }
}

export default App;


