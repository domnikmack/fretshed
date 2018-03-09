import React, { Component } from 'react';
import { connect } from 'react-redux';
import currentNote from '../store';
import circle from '../images/circle.svg';

class Fretboard extends Component {
  constructor(props) {
    super(props);

  }

  getClassName(note) {
    const next = this.props.next;
    console.log('nexst in classname', next);
    console.log('from note in classname', note);
    // if (next.pitch && note.pitch === next.pitch && note.stringNumber) {
    //   return 'note-next';
    // }
    if (note.pitch === next.pitch && note.strN === next.strN) {
      return 'note note-next';
    }
    return 'note'
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
              <div className={`${this.getClassName({ pitch: 'E', strN: 6 })} note-open`}>
              </div>
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

          </div>
        </section>
      </div>

    )
  }
}

const mapState = state => {
  return {
    next: state.notes.next
  }
}

export default connect(mapState)(Fretboard);
