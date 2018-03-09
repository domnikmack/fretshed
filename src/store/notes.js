// ACTION TYPES

const GET_CURRENT_NOTE = 'SET_NOTE';
const SETUP_NOTES = 'SETUP_NOTES';
const SET_NEXT_NOTE = 'SET_NEXT_NOTE';

// ACTION CREATORS
export const setNextNote = note => ({
  type: SET_NEXT_NOTE,
  note
})

const initialState = {
  setup: '',
  next: {},
  ok: {},
  wrong: {}
};

export default function reducer(state = initialState, action) {
  console.log('FORM THE REDUCER' , action);
  switch (action.type) {
    case SET_NEXT_NOTE:
      return Object.assign({}, state, {next: action.note} );
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
