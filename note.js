import React, { Component } from 'react';
import './Note.CSS';
class Note extends Component {
	constructor(){
	super();
	}
	render(){
	<div className="note">
	<li> {this.note.Id} - {this.noteContent}</li>
	</div>
	}
}
export default Note;