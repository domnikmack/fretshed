import React, { Component } from 'react';
import { connect } from 'react-redux';

function InfoHeader (props) {
  return (
    <div>
    <h1>{props.note || 'Select a Note'}</h1>
    </div>
  )
}

const mapState = state => ({note: state.selectedNote});

export default connect(mapState)(InfoHeader);
