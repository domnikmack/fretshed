import React, { Component } from 'react';
import { setupNotes } from '../store';

export default class SelectNote extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
    console.log('Button clicked value is: ', evt.target.value);
    console.log('PROPS in SELECTNOTE', this.props)
    this.props.setupNotes();
  }

  handleClear(evt) {
    evt.preventDefault();
    this.props.clearNotes();
  }



  render() {
    return (
      <div>
        <button onClick={this.handleClick} value="C">E</button>
        <button onClick={this.handleClick} value="D">E</button>
        <button onClick={this.handleClick} value="E">E</button>
        <button onClick={this.handleClick} value="F">E</button>
        <button onClick={this.handleClick} value="G">E</button>
        <button onClick={this.handleClick} value="A">E</button>
        <button onClick={this.handleClick} value="B">E</button>
        <button onClick={this.handleClear} >Clear</button>
      </div>
    )
  }

}



// const mapDispatch = { };
