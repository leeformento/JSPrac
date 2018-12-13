import React, { Component } from 'react'
import { deleteNote, updateNote, fetchNotes, addNote } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class NoteEditter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: ""
        }
    }

    componentDidMount(){
        this.getNoteData(this.props.match.params.id);

        this.unlisten = this.props.history.listen((location, action) => {
          let noteId = location.pathname.split("/")[2];
          this.getNoteData(noteId);
        });
    }

    getNoteData(noteId){
        if(!noteId){
            return this.setState({
                title: "",
                content: ""
            });
        }

        axios.get(`https://backend-project-lee.herokuapp.com/notes/${noteId}`)
            .then(response => {
                this.setState({
                    title: response.data.title,
                    content: response.data.textBody
                });
            })
            .catch(error => {
                console.log("Error in fetching note details");
            });
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    updateNote = event => {
        event.preventDefault();
        let updatedNote = {
            id: this.props.match.params.id,
            title: this.state.title,
            content: this.state.content
        }
        this.props.updateNote(updatedNote, this.props.history);

        setTimeout(() => {
            this.props.fetchNotes();
        }, 1000);
    }

    addNote = event => {
        event.preventDefault();

        let note = {
            title: this.state.title,
            content: this.state.content
        };
        this.props.addNote(note, this.props.history);

        setTimeout(() => {
            this.props.fetchNotes();
        }, 1000);
    }

    deleteNote = event => {
        event.preventDefault();

        let note = {
            title: this.state.title,
            content: this.state.content
        };
        this.props.deleteNote(note, this.props.history);

        setTimeout(() => {
            this.props.fetchNotes();
        }, 1000);
    }


    render() {
        let title = this.state.title;
        let content = this.state.content;
        let noteId = this.props.match.params.id;
        return (
            <div>
                <div className="header" id="tools">
                  <ul id="toolbar">
                    <li><span className="fa fa-bold"></span></li>
                    <li><span className="fa fa-italic"></span></li>
                    <li><span className="fa fa-underline"></span></li>
                    <li><span>Font <span className="fa fa-caret-down"></span></span></li>
                    <li><span className="fa fa-align-left"></span></li>
                    <li><span className="fa fa-align-center"></span></li>
                    <li><span className="fa fa-align-right"></span></li>
                    <li><span className="fa fa-align-justify"></span></li>
                  </ul>
                  <div className="menu-toggle"><span className="fa fa-ellipsis-v"></span></div>
                </div>
                <div id="editor">
                  <form>
                    <input 
                        className="input-title"
                        type="text" 
                        name="title" 
                        id="title" 
                        placeholder="Add a title..."
                        onChange={this.handleChange} 
                        value={title} 
                        required />
                      
                    <input 
                        type="textarea" 
                        name="content"
                        id="content" 
                        onChange={this.handleChange} 
                        value={content} 
                        required />

                    {
                        noteId && (
                            <div>
                            <button className="add-note" onClick={this.updateNote}>
                                update <i className="fas fa-check"></i>
                            </button>
                            <button onClick={() => this.props.deleteNote(this.props.match.params.id)}>X</button>
                            </div>

                        )
                    }

                    {
                        !noteId && (
                            <button className="add-note" onClick={this.addNote}>
                                Add Note<i className="fas fa-check"></i>
                            </button>
                        )
                    }
                    
                  </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.fetching,
        fetched: state.fetched,
        note: state.note,
        error: state.error
    }
}

export default withRouter(connect(mapStateToProps, { deleteNote, updateNote, fetchNotes, addNote })( NoteEditter ))



