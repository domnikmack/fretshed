// ACTION TYPES

const GET_CURRENT_NOTE = 'SET_NOTE';

// ACTION CREATORS

export const getCurrentNote = note => {
  return {
    type: GET_CURRENT_NOTE,
    status: 'correct'
  }
}

const initialState = {
  name: 'A',
  status: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_NOTE:
      return {...state, status: 'note-correct'};
    default:
      return state;
  }
}
