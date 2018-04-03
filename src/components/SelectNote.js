import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNote, clearNote } from '../store';
import { updateStatus, clearStatus } from '../store';
import clickAudio from '../audio/click.mp3';
import ReactAudioPlayer from 'react-audio-player';

class SelectNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false
    }
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleSelect(evt) {
    evt.preventDefault();
    this.props.setNote(evt.target.value);
    this.props.updateStatus(['pop', 'pop', 'pop', 'pop', 'pop', 'pop'])
  }

  handleClear(evt) {
    evt.preventDefault();
    this.props.clearStatus();
    this.props.clearNote();
    this.setState({buttonClicked: true});
    setTimeout(() => this.setState({buttonClicked: false}), 500);
  }

  getAudio() {
    if(this.state.buttonClicked) return <ReactAudioPlayer src={clickAudio} autoPlay />
  }

  render() {

    return (
      <div className='key-selector'>
        <button className='btn left-key' onClick={this.handleSelect} value="C">C</button>
        <button className='btn center-key' onClick={this.handleSelect} value="D">D</button>
        <button className='btn center-key' onClick={this.handleSelect} value="E">E</button>
        <button className='btn center-key' onClick={this.handleSelect} value="F">F</button>
        <button className='btn center-key' onClick={this.handleSelect} value="G">G</button>
        <button className='btn center-key' onClick={this.handleSelect} value="A">A</button>
        <button className='btn center-key' onClick={this.handleSelect} value="B">B</button>
        <button className='btn right-key' onClick={this.handleClear} >Clear</button>
        {this.getAudio()}
      </div>
    )
  }
}

const mapDispatch = function (dispatch) {
  return {
    setNote: function (note) {
      dispatch(setNote(note));
    },
    clearNote: function (note) {
      dispatch(clearNote(note));
    },
    updateStatus: function(status) {
      dispatch(updateStatus(status))
    },
    clearStatus: function() {
      dispatch(clearStatus())
    }
  };
}

export default connect(null, mapDispatch)(SelectNote)
