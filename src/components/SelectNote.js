import React, { Component } from 'react';
import { setupNotes } from '../store';

export default class SelectNote extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
    console.log('Button clicked', evt.target.value)
  }


  render() {
    return (
      <div>
        <button onClick={this.handleClick} value="E">E</button>
      </div>
    )
  }

}



const mapDispatch = { };
