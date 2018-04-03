const UPDATE_STATUS = 'UPDATE_STATUS';
const CLEAR_STATUS = 'CLEAR_STATUS';

export const updateStatus = (notes) => ({
  type: UPDATE_STATUS,
  notes
});

export const clearStatus = () => ({
  type: CLEAR_STATUS
});

export default function reducer(state = [], action) {
  switch (action.type) {
    case UPDATE_STATUS:
      return action.notes;
    case CLEAR_STATUS:
      return [];
    default:
      return state
  }
}

