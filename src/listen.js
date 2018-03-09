'use strict';
import store, { setNextNote } from './store';

const PitchDetect = require('pitch-detect');
let intervalID;

const eNaturals = [
  {
    pitch: 'E',
    strN: 5,
    fret: 7,
    status: 'next'
  },
  {
    pitch: 'E',
    strN: 4,
    fret: 2,
    status: 'next'
  },
  {
    pitch: 'E',
    strN: 3,
    fret: 9,
    status: 'next'
  },
  {
    pitch: 'E',
    strN: 2,
    fret: 5,
    status: 'next'
  },
  {
    pitch: 'E',
    strN: 1,
    fret: 0,
    status: 'next'
  },
]

export function startListening() {

  console.log('This is the listen funtion.')

  navigator.mediaDevices.getUserMedia(
    {
      audio: true
    })
    .then(function (stream) {
      const pitchDetect = new PitchDetect(stream);
      let count = 0;
      let sequenceCounter = 0;

      intervalID = setInterval(() => {
        let note = pitchDetect.getPitch().note;
        console.log(note);
        if (note === 'A') {
          count++;
          console.log('counter', count);
          if (count === 5) {
            console.log('YES!!!!!!!!!!!!!!')
            sequenceCounter++;
            store.dispatch(setNextNote(eNaturals[sequenceCounter]))
            count = 0;
          }
        } else {
          count = 0;
        }
      }, 100)

      return intervalID;



    })
    .catch(err => {
      console.error(err);
    });
}

export const stopListening = id => clearInterval(intervalID);


