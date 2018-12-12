import React, { Component } from 'react';


class NotesList extends Component {

  render() {
    return (
        <div className="notes-list-container">
            <div className="note-card">
        <h3>Title: {this.props.title}&nbsp;</h3>
        </div>
        <div className="note-card">
        <h3>Content: {this.props.content}&nbsp;</h3>
        </div>
        </div>
    );
  }
}

export default NotesList;