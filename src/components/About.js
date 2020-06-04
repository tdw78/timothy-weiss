import React, { Component } from 'react';


class About extends Component {

  render () {
    const titleStyle = {
      fontSize: 42,
      paddingBottom: 22,
      paddingTop: 33
    }

    return (
      <div>
        <div className="main">
          <h2 style={titleStyle}>About Me</h2>  
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6" id="about-me">
              I am a full stack web developer in San Jose, California.  I have always been
              interested in computers and technology and when I began to study web development,
              I fell in love immediately.  I am passionate about building applications and continuing to sharpen my development skills.
              However, I was not always involved in web development.  I grew up around the game of golf.  I played golf in high school and then in
              college at the Univeristy of Arizona.  After graduation from the U of A, I wanted to stay close to the game, so I become
              a PGA professional.  I was a PGA professional for 12 years before switching careers. 
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </div>
  );
 }
}

export default About;