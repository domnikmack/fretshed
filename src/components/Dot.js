import React from 'react';
import { currentNote } from '../store';
import { connect } from 'react-redux';

function Dot(props) {
  console.log(props)
  console.log(props.currentNote)
  console.log(props.currentNote.name)
  console.log(props.currentNote.status)
  const status = props.currentNote.status;

  let displayDot = function() {

  }
  return (
    <div className={`note ${status}`}>Dot</div>
  )
}


const mapState = state=> {
  return {
    status: state.currentNote.status
  }
}

export default connect(mapState)(Dot);
