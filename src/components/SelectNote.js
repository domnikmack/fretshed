import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNote } from '../store';
import { updateStatus, clearStatus } from '../store';

class SelectNote extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleSelect(evt) {
    evt.preventDefault();
    // console.log('Button value', evt.target.value);
    // console.log('PROPS in SELECTNOTE', this.props)
    this.props.setNote(evt.target.value);
    this.props.updateStatus(['pop', 'pop', 'pop', 'pop', 'pop', 'pop'])
  }

  handleClear(evt) {
    evt.preventDefault();
    this.props.clearStatus();
  }



  render() {
    console.log('PROPS in select note', this.props)
    return (
      <div>
        <button onClick={this.handleSelect} value="C">C</button>
        <button onClick={this.handleSelect} value="D">D</button>
        <button onClick={this.handleSelect} value="E">E</button>
        <button onClick={this.handleSelect} value="F">F</button>
        <button onClick={this.handleSelect} value="G">G</button>
        <button onClick={this.handleSelect} value="A">A</button>
        <button onClick={this.handleSelect} value="B">B</button>
        <button onClick={this.handleClear} >Clear</button>
      </div>
    )
  }

}



const mapDispatch = function (dispatch) {
  return {
    setNote: function (note) {
      dispatch(setNote(note));
    },
    updateStatus: function(status) {
      dispatch(updateStatus(status))
    },
    clearStatus: function() {
      dispatch(clearStatus())
    }
  };
}


  export default connect(null, mapDispatch)(SelectNote)
