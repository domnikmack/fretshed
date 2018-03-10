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
  {
    pitch: 'E',
    strN: 2,
    fret: 5,
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
    strN: 4,
    fret: 2,
    status: 'next'
  },
  {
    pitch: 'E',
    strN: 5,
    fret: 7,
    status: 'next'
  },
  {
    pitch: 'E',
    strN: 6,
    fret: 0,
    status: 'next'
  }
];

// ACTION TYPES

const SET_INDEX = 'SET_INDEX';
const UPDATE_STATUS = 'UPDATE_STATUS';

// ACTION CREATORS
export const setIndex = (index) => ({
  type: SET_INDEX,
  index
})

export const updateStatus = status => ({
  type: updateStatus,
  status
})

const initialState = {
  sequence: eNaturals,
  index: 0,
};

export default function reducer(state = initialState, action) {
  console.log('FORM THE REDUCER' , action);
  switch (action.type) {
    case UPDATE_STATUS:
      return {...state, sequence: [...state.sequence, state.sequence[state.index] = action.status]};
    case SET_INDEX:
      return {...state, index: action.index};
    default:
      return state
  }
}


/*

{
  pitch: 'E',
  string: 6,
  fret: 0,
  status: 'show', 'next', 'ok', 'wrong'

}
*/
