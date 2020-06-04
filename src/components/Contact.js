import React, { Component } from 'react';


class Contact extends Component {

  render () {
    const titleStyle = {
      fontSize: 42,
      paddingBottom: 22,
      paddingTop: 33
    }
    const listStyle = {
      color: "#81DCEE"
    }
   
    return (
      <div>
        <div className="main">
          <h2 style={titleStyle}>My Contact Info</h2> 
          
          <div className="list-group">
            <a style={listStyle} href="https://github.com/tdw78" target="_blank" rel="noopener noreferrer" >GitHub</a>
            <a style={listStyle} href="https://www.linkedin.com/in/-timothyweiss/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <p>(415) 250-0122</p>
            <p>tdweiss1978@gmail.com</p>
          </div>
        </div>
      </div>
  );
 }
}

export default Contact;