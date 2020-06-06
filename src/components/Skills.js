import React, { Component } from 'react';


class Skills extends Component {

  render () {
    const titleStyle = {
      fontSize: 42,
      paddingTop: 33
    }
    const headerStyle = {
      fontSize: 28,
      paddingTop: 29,
      textDecorationLine: 'underline'
    }
    const listStyle = {
      color: "#81DCEE",
      textAlign: "center",
      fontSize: 19,
      wordSpacing: 8,
      lineHeight: 1,
      letterSpacing: 2.5
    }
   
      {/* <p style={listStyle}>React, Redux, CSS3, Bootstrap, HTML5, JavaScript ES6, Express</p> */}
    return (
      <div>
        <div className="main">
          <h2 style={titleStyle}>Technical Skills</h2>

          <div className="row">
            <div className="col-lg-2"></div>
              <div className="col-lg-8" id="skills-list">
           
            
                <p style={headerStyle}>Front-End<br></br> </p>
            
                <div class="row">
                  <div class="col-lg-2"></div>
                  <div class="col-lg-8">  
                    <p style={listStyle}>React | Redux | JavaScript ES6 | Express</p>
                  </div>
                </div>
               
                <div class="row"> 
                  <div class="col-lg-2"></div>
                  <div class="col-lg-8">
                    <p style={listStyle}>CSS | Bootstrap | HTML5</p>
                  </div>
                </div>

            <p style={headerStyle}>Back-End<br></br></p>
            {/* <p style={listStyle}>Node.js, PostgreSQL, Sequelize, MongoDB, Firebase</p> */}
            
            <div class="row">
                  <div class="col-lg-2"></div>
                  <div class="col-lg-8">  
                    <p style={listStyle}>Node.js | PostgreSQL | Sequelize</p>
                  </div>
                </div>
               
                <div class="row"> 
                  <div class="col-lg-3"></div>
                  <div class="col-lg-6">
                    <p style={listStyle}>MongoDB | Firebase</p>
                  </div>
                </div>

            
            <p style={headerStyle}>Additional Tools<br></br> </p> 
            {/* <p style={listStyle}> Wireframes, Jasmine, Mocha, Chai, Heroku, NPM, Git, GitHub, Web Sockets</p> */}
          
            <div class="row">
                  <div class="col-lg-2"></div>
                  <div class="col-lg-8">  
                    <p style={listStyle}>Jasmine | Mocha | Chai | Heroku | Git</p>
                  </div>
                </div>
               
                <div class="row"> 
                  <div class="col-lg-2"></div>
                  <div class="col-lg-8">
                  <p style={listStyle}>NPM | GitHub | Wireframes | Web Sockets</p>
                  </div>
                </div>

          </div>

          <div className="col-lg-2"></div>
         </div>

      </div>
    </div>
  );
 }
}

export default Skills;