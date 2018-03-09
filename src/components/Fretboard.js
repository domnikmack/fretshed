import React, { Component } from 'react';
import { connect } from 'react-redux';
import currentNote  from '../store';

class Fretboard extends Component {
  constructor(props) {
    super(props);
    console.log('HHHHHEEEEEELLLLLLLLOOOOOOO', this.props);
  }

  getClassName() {
    console.log('get classname', this.props.state.currentNote.status)
    return this.props.state.currentNote.status;
  }

  render() {
    const color = this.props;
  console.log('props on FRETBOARD',  )
    return (
      <div className="container">
        <section id="fretboard-container">
          <div className="fretboard">
            <div className="fret high-E-string"></div>
            <div className="fret high-E-string"></div>
            <div className="fret high-E-string"></div>
            <div className="fret high-E-string">
              <div className={`note ${this.getClassName()}`}></div>
            </div>
            <div className="fret high-E-string"></div>
            <div className="fret high-E-string"></div>
            <div className="fret high-E-string"></div>
            <div className="fret high-E-string"></div>
            <div className="fret high-E-string "></div>
            <div className="fret"></div>
            <div className="fret "></div>
            <div className="fret fret-right"></div>
            <div className="fret"></div>
            <div className="fret "></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret fret-right">
              <div className="marker"></div>
            </div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret">
              <div className="marker"></div>
            </div>
            <div className="fret"></div>
            <div className="fret">
              <div className="marker"></div>
            </div>
            <div className="fret"></div>
            <div className="fret">
              <div className="marker"></div>
            </div>
            <div className="fret"></div>
            <div className="fret">
              <div className="marker"></div>
            </div>
            <div className="fret"></div>
            <div className="fret "></div>
            <div className="fret fret-right"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret fret-right">
              <div className="marker"></div>
            </div>
            <div className="fret fret-bottom"></div>
            <div className="fret fret-bottom"></div>
            <div className="fret fret-bottom"></div>
            <div className="fret fret-bottom"></div>
            <div className="fret fret-bottom"></div>
            <div className="fret fret-bottom"></div>
            <div className="fret fret-bottom"></div>
            <div className="fret fret-bottom"></div>
            <div className="fret fret-bottom"></div>
            <div className="fret fret-bottom"></div>
            <div className="fret fret-bottom"></div>
            <div className="fret fret-bottom  fret-right"></div>
          </div>
        </section>
      </div>

    )
  }
}

const mapState = state => {
  return {
  state: state
  }
}

export default connect(mapState)(Fretboard);
