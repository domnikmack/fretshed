import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startListening, stopListening } from '../listen.js'
import { setNextNote } from '../store'

class Control extends Component {
  constructor(props) {
    super(props);
    this.handleStart = this.handleStart.bind(this);
  }

  handleStart(evt) {
    evt.preventDefault();
    console.log('Started')
    startListening();
    this.props.setNextNote({
      pitch: 'E',
      strN: 6,
      fret: 0,
      status: 'next'
    },)
  }

  handleStop(evt) {
    evt.preventDefault();
    console.log('Stopped')
    stopListening();
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
        <button onClick={this.handleStart}>Play</button>
        <button onClick={this.handleStop}>Stop</button>
      </div>
    )
  }
}

// const mapDispatch = dispatch => { setNextNote };

const mapDispatch = function (dispatch) {
  return {
    setNextNote: note => {
      dispatch(setNextNote(note));
    }
  };
};

export default connect(null, mapDispatch)(Control)
