'use strict';
import store, {getCurrentNote } from './store';

const PitchDetect = require('pitch-detect');
let intervalID;

export function startListening() {

  console.log('This is the listen funtion.')

  navigator.mediaDevices.getUserMedia(
    {
      audio: true
    })
    .then(function (stream) {
      const pitchDetect = new PitchDetect(stream);
      // console.log(pitchDetect.getPitch());

      // function update() {
      //   requestAnimationFrame(update);
      //   console.log(pitchDetect.getPitch());
      // }
      // update();
      let count = 0;

      intervalID = setInterval(() => {
        let note = pitchDetect.getPitch().note;
        console.log(note);
        if (note === 'A') {
          count++;
          console.log('counter', count);
          if (count === 5) {
            console.log('YES!!!!!!!!!!!!!!')
            store.dispatch(getCurrentNote())
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


