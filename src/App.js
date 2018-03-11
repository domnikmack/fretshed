import React, { Component } from 'react';
// import Transition from 'react-transition-group/Transition';
import logo from './logo.svg';
import './App.css';
import InfoHeader from './components/InfoHeader.js';
import Control from './components/Control.js';
import Fretboard from './components/Fretboard.js';
import SelectNote from './components/SelectNote.js';
import naturals from './sequences/naturals.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sequences: naturals,
      note: 'E',
      index: 0
    }
    this.handleSuccess = this.handleSuccess.bind(this);
    this.nextNote = this.nextNote.bind(this);
    this.setupNotes = this.setupNotes.bind(this);
    this.clearNotes = this.clearNotes.bind(this);
  }

  setupNotes(noteName) {
    this.setState({note: noteName})
    const sequences = this.state.sequences;
    const note = this.state.note;
    const updatedNotes = sequences[note].map(el => 'pop');
    sequences[note] = updatedNotes;
    this.setState({sequences})
    console.log('sequences in APP after', this.state.sequences)
  }

  clearNotes() {
    const sequences = this.state.sequences;
    for (let key in sequences) {
      let clearedNotes = sequences[key].map(el => 'hide');
      sequences[key] = clearedNotes;
    }
    console.log('NATURALS IN CLEAR', naturals)
    this.setState({sequences: naturals})
  }

  handleSuccess() {
    // this.setState({ sequence: [...this.state.sequence, this.state.sequence[this.state.index].status = 'note-success']})
    this.setState({sequences: this.state.sequences[this.state.note[this.state.index]= 'sucess']})
  }

  nextNote() {
    this.setState({index: this.state.index + 1});
  }


  render() {
    console.log('SEQUENCES IN APP', this.state.sequences)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">FretShed</h1>
        </header>
        <InfoHeader className="info-header" sequence={this.state.sequence} />
        <Fretboard sequences={this.state.sequences} index={this.state.index}/>
        <SelectNote setupNotes={this.setupNotes} clearNotes={this.clearNotes}/>
        <Control handleSuccess={this.handleSuccess} nextNote={this.nextNote}/>
      </div>
    );
  }
}

export default App;


