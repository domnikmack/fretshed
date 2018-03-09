import React, { Component } from 'react';
import { startListening, stopListening } from '../listen.js'
import { getCurrentNote } from '../store'

export default class Control extends Component {
  constructor(props) {
    super(props);

  }

  startListening(evt) {
    evt.preventDefault();
    console.log('Play')
  }

  stopListening(evt) {
    evt.preventDefault();
    console.log('Stop')
  }



  render() {
    return (
      <div>
        <button onClick={startListening}>Play</button>
        <button onClick={stopListening}>Stop</button>
      </div>
    )
  }
}

const mapDispatch = { getCurrentNote };
