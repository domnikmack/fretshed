import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStatus,clearNote } from '../store'
const PitchDetect = require('pitch-detect');

let intervalID;
let mediaStream;

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalID: null,
    }
    this.startListening = this.startListening.bind(this);
  }

  handleStart(evt) {
    evt.preventDefault();
  }

  startListening() {
    const selectedNote = this.props.selectedNote;
    const updateStatus = this.props.updateStatus;
    let ascending = true;
    updateStatus(['hide', 'hide', 'hide', 'hide', 'hide', 'hide'])
    setTimeout(() => updateStatus(['next', 'hide', 'hide', 'hide', 'hide', 'hide']), 400);

    navigator.mediaDevices.getUserMedia(
      {
        audio: true
      })
      .then(function (stream) {
        const pitchDetect = new PitchDetect(stream);
        let count = 0;
        let wrongCount = 0;
        let progressIndex = 0;
        let previousNote = '';
        let ready = true;
        intervalID = setInterval(() => {
          let detectedNote = pitchDetect.getPitch().note;
          if (detectedNote && detectedNote === previousNote) count++;
          if (ready && detectedNote === selectedNote) {
            if (count >= 3) {
              ready = false;
              let statusArr = ['hide', 'hide', 'hide', 'hide', 'hide', 'hide'].map((el, i) => i === progressIndex ? 'success' : 'hide');
              updateStatus(statusArr);
              setTimeout(() => {
                let statusArr = ['hide', 'hide', 'hide', 'hide', 'hide', 'hide'].map((el, i) => {
                  if(ascending) return i === progressIndex + 1 ? 'next' : 'hide';
                  if(!ascending) return i === progressIndex - 1 ? 'next' : 'hide';
                })
                updateStatus(statusArr);
                if (ascending) {
                  progressIndex++
                } else {
                  progressIndex--
                }
              }, 1000);
              setTimeout(() => {
                count = 0;
                ready = true;
              }, 1000);
            }
          } else {
            count = 0;
            if (wrongCount >= 3) {
              wrongCount = 0;
              let statusArr = ['hide', 'hide', 'hide', 'hide', 'hide', 'hide'].map((el, i) => i === progressIndex ? 'fail' : 'hide');
              updateStatus(statusArr);
              setTimeout(() => {
                let statusArr = ['hide', 'hide', 'hide', 'hide', 'hide', 'hide'].map((el, i) => i === progressIndex ? 'next' : 'hide');
                updateStatus(statusArr);
                setTimeout(() => {
                  count = 0;
                  ready = true;
                }, 1000);
              }, 1000);
            }
            if (ready & detectedNote !== undefined && previousNote === detectedNote) {
              wrongCount++;
            }
          }
          if (ascending && progressIndex === 5) {
            ascending = false;
          }
          if (!ascending && progressIndex < 0) {
            clearInterval(intervalID);
            var track = mediaStream.getTracks()[0];
            track.stop();
          }
          previousNote = detectedNote;
        }, 200)
        mediaStream = stream
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleStop(evt) {
    evt.preventDefault();
    clearInterval(intervalID);
    if(mediaStream) {
      var track = mediaStream.getTracks()[0];
      track.stop();
    }
  }

  render() {
    const { handleSuccess, nextNote } = this.props;
    return (
      <div>
        <button onClick={this.startListening} className="ctr-btn start-btn">start</button>
        <button onClick={this.handleStop} className="ctr-btn stop-btn">stop</button>
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
    },
    clearNote: function (status) {
      dispatch(clearNote())
    }
  }
};

export default connect(mapState, mapDispatch)(Control)
