// React modules
import React, { Component } from 'react';

class Modal extends Component {
  render() {
  	const {
  		body,
  		title,
  	}=this.props.data;

    return (
      <div className="overlay">
        <div className="wrapper">
        	<p onClick={this.props.resetData} className="close">Close</p>
        	<p>Title:----> {title}</p>
        	<p>Body:----> {body}</p>
        </div>
      </div>
    );
  }
}

export default Modal;
