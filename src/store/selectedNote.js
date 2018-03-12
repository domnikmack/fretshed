
// ACTION TYPES

const SET_NOTE = 'SET_NOTE';
const CLEAR_NOTE = 'CLEAR_NOTE';

// ACTION CREATORS
export const setNote = (note) => ({
  type: SET_NOTE,
  note
})

export const clearNote = (note) => ({
  type: CLEAR_NOTE,
  note
})




export default function reducer(state = '', action) {
  console.log('FORM THE REDUCER' , action);
  switch (action.type) {
    case SET_NOTE:
      return action.note;
    case CLEAR_NOTE:
      return '';
    default:
      return state
  }
}

