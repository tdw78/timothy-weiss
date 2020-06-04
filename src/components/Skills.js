import React, { Component } from 'react';


class Skills extends Component {

  render () {
    const titleStyle = {
      fontSize: 42,
      paddingBottom: 22,
      paddingTop: 33
    }
    const listStyle = {
      color: "#81DCEE",
      textAlign: "center"
    }
   
    return (
      <div>
        <div className="main">
          <h2 style={titleStyle}>Technical Skills</h2>
          <div className="row">
            <div className="col-lg-3"></div>
          <div className="col-lg-6" id="skills-list">
            <p style={listStyle}>Front-End:<br></br>  React, Redux, CSS3, Bootstrap, HTML5, JavaScript ES6, Express</p>
            <p style={listStyle}>Back-End:<br></br>  Node.js, PostgreSQL, Sequelize, MongoDB, Firebase</p>
            <p style={listStyle}>Additional Tools:<br></br>  Wireframes, Jasmine, Mocha, Chai, Heroku, NPM, Git, GitHub, Web Sockets</p>
          </div>
          <div className="col-lg-2"></div>
         </div>
        </div>
      </div>
  );
 }
}

export default Skills;