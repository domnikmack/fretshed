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
    const sequence = this.props.sequence;
    const index = this.props.index;
    console.log('SEQUENCE IN CONTROL', sequence)
    startListening(sequence);
  }

  handleStop(evt) {
    evt.preventDefault();
    console.log('Stopped')
    stopListening();
  }

  // startListening(evt) {
  //   evt.preventDefault();
  //   console.log('Play')
  // }

  // stopListening(evt) {
  //   evt.preventDefault();
  //   console.log('Stop')
  // }

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

const mapState = function (state) {
  return {
    sequence: state.notes.sequence,
    index: state.notes.index
  }
}

const mapDispatch = function (dispatch) {
  return {
  };
};

export default connect(mapState, mapDispatch)(Control)
