import React, { Component } from 'react';
import * as actions from '../actions'
import { connect } from 'react-redux';
import NotesNote from './NotesNote';
import SingleNote from './SingleNote';
import { withRouter, Route, Switch} from 'react-router-dom';

// import NotesList from '../components/NotesNote';



class Notes extends Component {
  constructor(props){
    super(props);
    this.state = {
        title: '',
        content: ''
    }
}
  
handleChange = event => {
  this.setState({ [event.target.name]: event.target.value });
}


addNote = event => {
  event.preventDefault();
  let newNote = {
      title: this.state.title,
      content: this.state.content
  }
  this.props.addNote(newNote, this.props.history);
  this.setState({title: '', content: ''
  },  () => this.props.history.replace('/notesview'))
  
}


  componentDidMount = () => {
    this.props.fetchNotes();
  }

  render() {

    return (
      <div className="app-container">
    <section id="panel">
    <div className="header" id="tabs">
      <ul>
        <li className="selected"><a href="/select"><span className="fa fa-file-text-o"></span><span className="tooltiptext">Notes</span></a></li>
        <li><a href="/search"><span className="fa fa-search"></span><span className="tooltiptext">Search</span></a></li>
        <li><a href="/tags"><span className="fa fa-tags"></span><span className="tooltiptext">Tags</span></a></li>
        <li><a href="/cog"><span className="fa fa-cog"></span><span className="tooltiptext">Preferences</span></a></li>
      </ul>
    </div>
    <div className="currentpanel" id="noteslist">
      <div id="tools">
        <div className="sort">Sort<span className="fa fa-caret-down"></span>
          <ul>
            <li>Title (ascending)</li>
            <li>Title (descending)</li>
            <li>Newest first</li>
            <li>Oldest first</li>
          </ul>
        </div>
        <button className="newnote">New Note</button>
      </div>
      <div className="body">
        <div className="note">
        <Route path="/notesview" render={props => (
        <NotesNote {...props} notes={this.props.notes} fetch={this.props.fetch} fetching={this.props.fetching} />
      )} />
      <Switch>
      <Route path="/notesview/:id" render={props => (
          <SingleNote {...props} note={this.props.note} />
        )}  />
        </Switch>
        </div>

      </div>
    </div>
  </section>
  <section id="edit">
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
      <form onSubmit={this.addNote}>
      <input 
      className="input-title"
      type="text" 
      name="title" 
      id="title" 
      onChange={this.handleChange} 
      value={this.state.title} 
      required></input>
      
      <input 
      type="textarea" 
      name="content"
       id="content" 
       onChange={this.handleChange} 
       
       value={this.state.content} 
       required >
       </input>
      {/* <input className="input-title" type="text" name="title" onChange={this.handleChange} value={this.state.title} required placeholder= "Add a title..."/>
      <input id="content" contentEditable="true" type="textarea" name="content" onChange={this.handleChange} value={this.state.content} required /> */}
          <button className="add-note"> <i className="fas fa-check"></i></button>
      </form>
    </div>
  </section>
</div>

    );
  }
}

const mapStateToProps = state => {
    return {
      fetching: state.fetching,
      fetched: state.fetched,
      notes: state.notes,
      error: state.error,
      fetchingNote: state.fetchingNote,
      noteFetched: state.noteFetched,
      note: state.note,
      updating: state.updating,
      updated: state.updated,
    }
  }
  
  export default withRouter(connect(mapStateToProps, actions)(Notes));
