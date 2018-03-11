
// ACTION TYPES

const SET_NOTE = 'SET_NOTE';

// ACTION CREATORS
export const setNote = (note) => ({
  type: SET_NOTE,
  note
})




export default function reducer(state = '', action) {
  console.log('FORM THE REDUCER' , action);
  switch (action.type) {
    case SET_NOTE:
      return action.note;
    default:
      return state
  }
}

