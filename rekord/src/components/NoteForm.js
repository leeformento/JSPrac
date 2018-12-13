import React, { Component } from 'react';

class NoteForm extends Component {
    constructor(props){
      super(props);
      this.state = {
          title: '',
          content: '',
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
    this.props.addNote(newNote);
    this.setState({title: '', content: ''},  () => this.props.history.push('/notesview'))
    
  }

  render() {
    return (
    <div className="form-container">
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
    )
    }
}
    
export default NoteForm;
