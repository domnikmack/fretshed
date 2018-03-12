import React, { Component } from 'react';
import { connect } from 'react-redux';
import setupAudio from '../audio/setup-audio.mp3';
import successAudio from '../audio/success-audio.mp3';
import failAudio from '../audio/fail-audio.mp3';
import bellAudio from '../audio/bell.mp3';
import ReactAudioPlayer from 'react-audio-player';

const NotePop = ({ addToClass }) => {
  return (
    <svg className={`note note-pop animated bounceIn ${addToClass}`} width="60" height="60" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" /></svg>
  )
}

const NoteNeutral = ({ addToClass }) => {
  return (
    <svg className={`note note-neutral ${addToClass}`} width="60" height="60" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" /></svg>
  )
}

const NoteNext = ({ addToClass }) => {
  return (
    <svg className={`note note-next animated bounceIn ${addToClass}`} width="60" height="60" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1412 897q0-27-18-45l-91-91q-18-18-45-18t-45 18l-189 189v-502q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v502l-189-189q-19-19-45-19t-45 19l-91 91q-18 18-18 45t18 45l362 362 91 91q18 18 45 18t45-18l91-91 362-362q18-18 18-45zm252-1q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" /></svg>
  )
}

const NoteSuccess = ({ addToClass }) => {
  return (
    <svg className={`note note-success animated bounceIn ${addToClass}`} width="60" height="60" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" /></svg>
  )
}

const NoteFail = ({ addToClass }) => {
  return (
    <svg className={`note note-fail animated shake ${addToClass}`} width="60" height="60" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" /></svg>
  )
}


class Fretboard extends Component {
  constructor(props) {
    super();
    this.state = {
      show: false,
      noteClass: 'note note-hidden'
    };
    this.handleWrongNote = this.handleWrongNote.bind(this);
  }

  handleWrongNote() {
    this.setState({ noteClass: 'animated bounceIn' })
  }

  handleToggle() {
    this.setState(({ show }) => ({
      show: !show
    }))
  }

  getComponent(pos, addToClass) {
    const selectedNote = this.props.selectedNote;
    const notesStatus = this.props.notesStatus;
    console.log('selecteNote in getComponent', selectedNote)
    console.log('notesStatus in getComponent', notesStatus)
    if (!selectedNote || !notesStatus.length) return null;

    if (selectedNote === pos.note && notesStatus[pos.noteIndex] === 'hide') return null;

    if (selectedNote === pos.note && notesStatus[pos.noteIndex] === 'next') {
      return (
        <div>
          <NoteNext addToClass={addToClass} />
          <ReactAudioPlayer src={setupAudio} autoPlay />
        </div>
      )
    }

    if (selectedNote === pos.note && notesStatus[pos.noteIndex] === 'success') {
      return (
        <div>
          <NoteSuccess addToClass={addToClass} />;
          <ReactAudioPlayer src={successAudio} autoPlay />
        </div>
      )
    }


    if (selectedNote === pos.note && notesStatus[pos.noteIndex] === 'fail') {
      return (
        <div>
          <NoteFail addToClass={addToClass} />
          <ReactAudioPlayer src={failAudio} autoPlay />
        </div>
      )
    }
    if (selectedNote === pos.note && notesStatus[pos.noteIndex] === 'pop') {
      return (
        <div>
          <NotePop addToClass={addToClass} />
          <ReactAudioPlayer src={bellAudio} autoPlay volume='0.1' />
        </div>
      )
    }
    if (selectedNote === pos.note && notesStatus[pos.noteIndex] === 'neutral') return <NoteNeutral addToClass={addToClass} />;
  }


  render() {
    console.log('PROPS IN FRETBOARD', this.props);
    const { sequence } = this.props;

    const { show } = this.state;
    return (
      <section id="fretboard-container">
        <div className="fretboard">
          <div className="fret fret-top fret-left">
            {this.getComponent({ note: 'E', noteIndex: 5 }, 'note-open')}
            {this.getComponent({ note: 'F', noteIndex: 5 })}
          </div>
          <div className="fret fret-top"></div>
          <div className="fret fret-top">{this.getComponent({ note: 'G', noteIndex: 5 })}</div>
          <div className="fret fret-top"></div>
          <div className="fret fret-top">{this.getComponent({ note: 'A', noteIndex: 5 })}</div>
          <div className="fret fret-top"></div>
          <div className="fret fret-top">{this.getComponent({ note: 'B', noteIndex: 5 })}</div>
          <div className="fret fret-top">{this.getComponent({ note: 'C', noteIndex: 5 })}</div>
          <div className="fret fret-top"></div>
          <div className="fret fret-top">{this.getComponent({ note: 'D', noteIndex: 5 })}</div>
          <div className="fret fret-top"></div>
          <div className="fret fret-top"></div>
          <div className="fret fret-left">
            {this.getComponent({ note: 'B', noteIndex: 4 }, 'note-open')}
            {this.getComponent({ note: 'C', noteIndex: 4 })}
          </div>
          <div className="fret"></div>
          <div className="fret">{this.getComponent({ note: 'D', noteIndex: 4 })}</div>
          <div className="fret"></div>
          <div className="fret">{this.getComponent({ note: 'E', noteIndex: 4 })}</div>
          <div className="fret">{this.getComponent({ note: 'F', noteIndex: 4 })}</div>

          <div className="fret"></div>
          <div className="fret">{this.getComponent({ note: 'G', noteIndex: 4 })}</div>
          <div className="fret"></div>
          <div className="fret">{this.getComponent({ note: 'A', noteIndex: 4 })}</div>
          <div className="fret"></div>
          <div className="fret">
            <div className="marker"></div>
          </div>
          <div className="fret fret-left">
          {this.getComponent({ note: 'G', noteIndex: 3 }, 'note-open')}
          </div>
          <div className="fret">{this.getComponent({ note: 'A', noteIndex: 3 })}</div>
          <div className="fret">
            <div className="marker"></div>
          </div>
          <div className="fret">{this.getComponent({ note: 'B', noteIndex: 3 })}</div>
          <div className="fret">{this.getComponent({ note: 'C', noteIndex: 3 })}
            <div className="marker"></div>

          </div>
          <div className="fret"></div>
          <div className="fret">{this.getComponent({ note: 'D', noteIndex: 3 })}
            <div className="marker"></div>
          </div>
          <div className="fret"></div>
          <div className="fret">{this.getComponent({ note: 'E', noteIndex: 3 }, '')}
            <div className="marker"></div><div></div>
          </div>
          <div className="fret">{this.getComponent({ note: 'F', noteIndex: 3 })}</div>
          <div className="fret"></div>
          <div className="fret"></div>
          <div className="fret fret-left">{this.getComponent({ note: 'D', noteIndex: 2 }, 'note-open')}</div>
          <div className="fret">{this.getComponent({ note: 'E', noteIndex: 2 }, '')}<div></div></div>
          <div className="fret">{this.getComponent({ note: 'F', noteIndex: 2 }, '')}</div>
          <div className="fret"></div>
          <div className="fret">{this.getComponent({ note: 'G', noteIndex: 2 }, '')}</div>
          <div className="fret"></div>
          <div className="fret">{this.getComponent({ note: 'A', noteIndex: 2 }, '')}</div>
          <div className="fret"></div>
          <div className="fret">{this.getComponent({ note: 'B', noteIndex: 2 }, '')}</div>
          <div className="fret">{this.getComponent({ note: 'C', noteIndex: 2 }, '')}</div>
          <div className="fret"></div>
          <div className="fret">
            <div className="marker"></div>
          </div>
          <div className="fret fret-left">
          {this.getComponent({ note: 'A', noteIndex: 1 }, 'note-open')}
          </div>
          <div className="fret">{this.getComponent({ note: 'B', noteIndex: 1 }, '')}</div>
          <div className="fret">{this.getComponent({ note: 'C', noteIndex: 1 }, '')}</div>
          <div className="fret"></div>
          <div className="fret">{this.getComponent({ note: 'D', noteIndex: 1 }, '')}</div>
          <div className="fret"></div>
          <div className="fret">{this.getComponent({ note: 'E', noteIndex: 1 }, '')}</div>
          <div className="fret">{this.getComponent({ note: 'F', noteIndex: 1 }, '')}</div>
          <div className="fret"></div>
          <div className="fret">{this.getComponent({ note: 'G', noteIndex: 1 }, '')}</div>
          <div className="fret"></div>
          <div className="fret"></div>
          <div className="fret fret-bottom">
          {this.getComponent({ note: 'E', noteIndex: 0 }, 'note-open')}
          {this.getComponent({ note: 'F', noteIndex: 0 }, '')}
          </div>
          <div className="fret fret-bottom"></div>
          <div className="fret fret-bottom">{this.getComponent({ note: 'G', noteIndex: 0 }, '')}</div>
          <div className="fret fret-bottom"></div>
          <div className="fret fret-bottom">{this.getComponent({ note: 'A', noteIndex: 0 }, '')}</div>
          <div className="fret fret-bottom"></div>
          <div className="fret fret-bottom">{this.getComponent({ note: 'B', noteIndex: 0 }, '')}</div>
          <div className="fret fret-bottom">{this.getComponent({ note: 'C', noteIndex: 0 }, '')}</div>
          <div className="fret fret-bottom"></div>
          <div className="fret fret-bottom">{this.getComponent({ note: 'D', noteIndex: 0 }, '')}</div>
          <div className="fret fret-bottom"></div>
          <div className="fret fret-bottom"></div>

          <div>
          </div>
        </div>
      </section>

    )
  }

}


const mapState = function (state) {
  return {
    notesStatus: state.notesStatus,
    selectedNote: state.selectedNote,
  };
};

export default connect(mapState)(Fretboard);
