import React, { Component } from 'react';
import { connect } from 'react-redux';
import currentNote from '../store';
import circle from '../images/circle.svg';

class Fretboard extends Component {
  constructor(props) {
    super(props);

  }

  getClassName(note) {
    const sequence = this.props.sequence;
    const index = this.props.index;
    console.log('sequence in getClassName', sequence);
    console.log('index in geClassName', index);
    // if (next.pitch && note.pitch === next.pitch && note.stringNumber) {
    //   return 'note-next';
    // }
    // if (note.pitch === next.pitch && note.strN === next.strN) {
    //   return 'note note-next';
    // }
    // if (note === 'now' && next.pitch === 'E') {
    //   return 'svg-success';
    // }
    if(index === 0) {return "hidden"};
    if(index === 3) {return "svg"};
  }

  handleSuccess(evt) {
    evt.preventDefault();
    return 'svg-success'
  }


  render() {
    // const next = this.props.next;
    console.log('NEXT IN GET RENDER', this.props.next)

    const color = this.props;
    return (
      <div className="container">
        <section id="fretboard-container">
          <div className="fretboard">
            <div className="fret fret-top fret-left">
              <div className={`note note-open ${this.getClassName({ pitch: 'E', strN: 1 })} note-open`}>
              </div>
            </div>
            <div className="fret fret-top"></div>
            <div className="fret fret-top"></div>
            <div className="fret fret-top"></div>
            <div className="fret fret-top"></div>
            <div className="fret fret-top"></div>
            <div className="fret fret-top"></div>
            <div className="fret fret-top"></div>
            <div className="fret fret-top "></div>
            <div className="fret fret-top"></div>
            <div className="fret fret-top"></div>
            <div className="fret fret-top"></div>
            <div className="fret fret-left"></div>
            <div className="fret "></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"><div className={`note ${this.getClassName({ pitch: 'E', strN: 2 })}`}></div></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret">
              <div className="marker"></div>
            </div>
            <div className="fret fret-left"></div>
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
              <div className="marker"></div><div className={`note ${this.getClassName({ pitch: 'E', strN: 3 })}`}></div>
            </div>
            <div className="fret"></div>
            <div className="fret "></div>
            <div className="fret"></div>
            <div className="fret fret-left"></div>
            <div className="fret"><div className={`note ${this.getClassName({ pitch: 'E', strN: 4 })}`}></div></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret">
              <div className="marker"></div>
            </div>
            <div className="fret fret-left"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"><div className={`note ${this.getClassName({ pitch: 'E', strN: 5 })}`}></div></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret"></div>
            <div className="fret fret-bottom">
              <div className={`${this.getClassName({ pitch: 'E', strN: 6 })} note-open`}></div>
            </div>
            <div className="fret fret-bottom">
              <div className={`${this.getClassName({ pitch: 'E', strN: 6 })} note-open`}></div>
              {this.getClassName({pitch: 'E', strN: 6})}
            </div>
            <div className="fret fret-bottom">

            </div>
            <div className="fret fret-bottom"></div>
            <div className={this.getClassName()}>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50 " viewBox="-263.5 236.5 26 26">
                <g className="svg-success">
                  <circle cx="-250.5" cy="249.5" r="12" />
                  <path d="M-256.46 249.65l3.9 3.74 8.02-7.8" />
                </g>
              </svg>
            </div>

            <div className="fret fret-bottom"></div>
            <div className="fret fret-bottom"></div>
            <div className="fret fret-bottom"></div>
            <div className="fret fret-bottom"></div>
            <div className="fret fret-bottom"></div>
            <div className="fret fret-bottom"></div>
            <div className="fret fret-bottom"></div>
            <div className="fret fret-bottom"></div>

          </div>
        </section>
      </div>

    )
  }
}

const mapState = state => {
  return {
    sequence: state.notes.sequence,
    index: state.notes.index
  }
}

export default connect(mapState)(Fretboard);
