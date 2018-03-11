// 'use strict';
// import store, { updateStatus, setIndex } from './store';

// const PitchDetect = require('pitch-detect');
// let intervalID;


// export function startListening(sequence) {
//   console.log('SEQUENCE', sequence)
//   navigator.mediaDevices.getUserMedia(
//     {
//       audio: true
//     })
//     .then(function (stream) {
//       const pitchDetect = new PitchDetect(stream);
//       let count = 0;
//       let sequenceIndex = 0;
//       let ready = true;
//       intervalID = setInterval(() => {
//         let note = pitchDetect.getPitch().note;
//         console.log(note);
//         if (ready && note === sequence[sequenceIndex]) {
//           count++;
//           console.log('count', count);
//           if (count >= 5) {
//             console.log('YES!!!!!!!!!!!!!!')
//             store.dispatch(updateStatus('success'))
//             store.dispatch(setIndex(sequenceIndex))
//             sequenceIndex++;
//             ready = false;
//             setTimeout(() => {
//               ready = true;
//               count = 0;

//             }, 1000);
//           }
//         } else {
//           count = 0;
//         }
//       }, 100)

//       return intervalID;



//     })
//     .catch(err => {
//       console.error(err);
//     });
// }

// export const stopListening = id => clearInterval(intervalID);


