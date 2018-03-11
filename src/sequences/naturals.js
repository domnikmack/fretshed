 const eNaturals = [
  {
    pitch: 'E',
    strN: 5,
    fret: 7,
    status: 'display'
  },
  {
    pitch: 'E',
    strN: 4,
    fret: 2,
    status: 'display'
  },
  {
    pitch: 'E',
    strN: 3,
    fret: 9,
    status: 'display'
  },
  {
    pitch: 'E',
    strN: 2,
    fret: 5,
    status: 'display'
  },
  {
    pitch: 'E',
    strN: 1,
    fret: 0,
    status: 'display'
  },
  {
    pitch: 'E',
    strN: 2,
    fret: 5,
    status: 'display'
  },
  {
    pitch: 'E',
    strN: 3,
    fret: 9,
    status: 'display'
  },
  {
    pitch: 'E',
    strN: 4,
    fret: 2,
    status: 'display'
  },
  {
    pitch: 'E',
    strN: 5,
    fret: 7,
    status: 'display'
  },
  {
    pitch: 'E',
    strN: 6,
    fret: 0,
    status: 'display'
  }
];

//object of arrays stores status of notes
//index 0 => 1st string
//status can be 'hide, 'display', 'next', 'success', 'fail'

const d = 'hide';
const initArr = [d, d, d, d, d, d];

const naturals = {
  C: initArr,
  D: initArr,
  E: initArr,
  F: initArr,
  G: initArr,
  A: initArr,
  B: initArr
}

export default naturals;
