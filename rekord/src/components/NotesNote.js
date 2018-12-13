import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import NotesList from './NotesList';

class NotesNote extends Component {
  
  render() {
    return (
        <div>
      {this.props.notes.map(note => {
                 return (
                    <div className="panel">
                     <div className="note">
                         <Link to={`/notesview/${note.id}`}>
                             <NotesList title={note.title} content={note.textBody} />
                             
                         </Link>
                         </div>
                     </div>
                 )
             })}
         </div>
         )
     }
 }
 
 export default NotesNote;