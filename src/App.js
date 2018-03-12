import React, { Component } from 'react';
// import Transition from 'react-transition-group/Transition';
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
    this.handleSuccess = this.handleSuccess.bind(this);
    this.nextNote = this.nextNote.bind(this);
    this.setupNotes = this.setupNotes.bind(this);
    this.clearNotes = this.clearNotes.bind(this);
  }

  setNewNote(newNote) {
    console.log('current note', this.state.note)
    console.log('new note passed in', newNote)
    console.log('this ', this)
    this.setState({note: newNote}, () => this.setupNotes());
  }
  setupNotes(noteName) {
    // console.log('NOTE NAME in SETUP NOTES', noteName)
    // console.log('STATE IN SETUP NOTES', this.state);

    console.log('STATE AFTER SETTING NOTE NAME', this.state)
    const sequences = this.state.sequences;
    const note = this.state.note;
    const updatedNotes = sequences[note].map(el => 'pop');
    sequences[note] = updatedNotes;
    this.setState({sequences})
  }

  clearNotes() {
    const sequences = this.state.sequences;
    for (let key in sequences) {
      let clearedNotes = sequences[key].map(el => 'hide');
      sequences[key] = clearedNotes;
    }
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
    // console.log('SEQUENCES IN APP', this.state.sequences)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">fretShed</h1>
        </header>
        <InfoHeader className="info-header" sequence={this.state.sequence} />
        <Fretboard />
        <SelectNote />
        <Control sequence={this.state.sequences}  handleSuccess={this.handleSuccess} nextNote={this.nextNote} />
        <Footer className="footer"/>
      </div>
    );
  }
}

export default App;


