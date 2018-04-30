import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InfoHeader from './components/InfoHeader.js';
import Footer from './components/Footer.js';
import Control from './components/Control.js';
import Fretboard from './components/Fretboard.js';
import SelectNote from './components/SelectNote.js';
import naturals from './sequences/naturals.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sequences: naturals,
      note: '',
      index: 0
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">fretShed</h1>
        </header>
        <InfoHeader className="info-header" />
        <Fretboard />
        <SelectNote />
        <Control />
        <Footer className="footer"/>
      </div>
    );
  }
}

export default App;
