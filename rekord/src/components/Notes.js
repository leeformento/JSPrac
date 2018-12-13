import React, { Component } from 'react';
import * as actions from '../actions'
import { connect } from 'react-redux';
import NotesNote from './NotesNote';
import { withRouter, Route, Switch, Link } from 'react-router-dom';

import NoteEditter from './NoteEditter';

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
        }
    }

    addNote = event => {
        event.preventDefault();
        let newNote = {
            title: this.state.title,
            content: this.state.content
        }
        this.props.addNote(newNote);
        this.setState({ title: '', content: '' }, () => this.props.history.push('/notesview'))

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
                  {/*<button className="viewnote">View Notes</button>*/}
                  <Link to={`/notesview`}>
                    <button className="newnote">New Note</button>
                  </Link>
                </div>

                <div className="body">
                  <div className="note">
                    <NotesNote {...this.props} notes={this.props.notes} fetch={this.props.fetch} fetching={this.props.fetching} />
                  </div>
                </div>

              </div>
            </section>
            <section id="edit">
              <Switch>
                <Route path="/notesview/:id" render={props => (
                    <NoteEditter {...props} />
                  )}  />

                <Route path="/notesview" render={props => (
                    <NoteEditter {...props} />
                  )}  />
              </Switch>
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