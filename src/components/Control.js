import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { startListening, stopListening } from '../listen.js'
import { updateStatus } from '../store'
const PitchDetect = require('pitch-detect');

let intervalID;

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalID: null
    }

    this.startListening = this.startListening.bind(this);
  }

  handleStart(evt) {
    evt.preventDefault();

    //startListening(sequence);
  }

  startListening() {
    console.log('PROPS IN START LISTENING', this.props)
    const selectedNote = this.props.selectedNote;
    const updateStatus = this.props.updateStatus;
    updateStatus(['hide', 'hide', 'hide', 'hide', 'hide', 'hide'])
    setTimeout(() => updateStatus(['next', 'hide', 'hide', 'hide', 'hide', 'hide']), 400);

    console.log('updateStatus', updateStatus)
    navigator.mediaDevices.getUserMedia(
      {
        audio: true
      })
      .then(function (stream) {
        const pitchDetect = new PitchDetect(stream);
        let count = 0;
        let progressIndex = 0;
        let ready = true;
        intervalID = setInterval(() => {
          let detectedNote = pitchDetect.getPitch().note;
          console.log(detectedNote);
          if (ready && detectedNote === selectedNote) {
            count++;
            console.log('count', count);
            if (count >= 5) {
              console.log('SUCCESS!!!!!!!!!!!!!!')
              ready = false;
              // updateStatus(['hide', 'hide', 'hide', 'hide', 'hide', 'hide'])
              let statusArr = ['hide', 'hide', 'hide', 'hide', 'hide', 'hide'].map((el, i) => i === progressIndex ? 'success' : 'hide');
              updateStatus(statusArr);
              setTimeout(() => {
                let statusArr = ['hide', 'hide', 'hide', 'hide', 'hide', 'hide'].map((el, i) => i === progressIndex + 1 ? 'next' : 'hide');
                updateStatus(statusArr);
                progressIndex++
              }, 1000);

        setTimeout(() => {
          ready = true;
          count = 0;
        }, 1000);
      }
          } else {
  count = 0;
}
        }, 100)
      })
      .catch (err => {
  console.error(err);
});
  }

handleStop(evt) {
  evt.preventDefault();
  console.log('interval ID', intervalID)
  clearInterval(intervalID);
}


render() {
  const { handleSuccess, nextNote } = this.props;
  return (
    <div>
      <button onClick={this.startListening}>Start</button>
      <button onClick={this.handleStop}>Stop</button>
      <button onClick={handleSuccess}>Success</button>
      <button onClick={nextNote}>Next</button>
    </div>
  )
}
}


const mapState = function (state) {
  return {
    selectedNote: state.selectedNote,
  }
}

const mapDispatch = function (dispatch) {
  return {
    updateStatus: function (status) {
      dispatch(updateStatus(status))
    }
  }
};

export default connect(mapState, mapDispatch)(Control)
