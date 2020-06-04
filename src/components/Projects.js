import React, { Component } from 'react';


class Projects extends Component {

  render () {
    const titleStyle = {
      fontSize: 42,
      paddingBottom: 52,
      paddingTop: 33
    }
    const listHeader = {
      color: "#F9F9ED",
      fontSize: 28,
      textDecoration: "underline",
      paddingTop: 12
    }
    const listStyle = {
      color: "#F9F9ED",
      fontSize: 24,
      lineHeight: 2.5
    }
    return (
      <div>
       
        <div className="main">
          
          <div>
            <h2 style={titleStyle}>My Projects</h2>
          </div>

         <div className="row">
           <div className="col-lg-6">
             <a href="https://tdw78-shopping-app.herokuapp.com/" target="_blank" rel="noopener noreferrer" > <img src="../../images/shoppingapp.png" alt="Shopping App" /> </a>
           </div>
           <div className="col-lg-4 list-group"> 
             <p style={listHeader}>The Shopping App</p>
             <a style={listStyle} href=" https://tdw78-shopping-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">Check it out!</a>
             <a style={listStyle} href="https://github.com/tdw78/shopping-app" target="_blank" rel="noopener noreferrer" >GitHub</a> 
             <p className="proj-description">
               The Shopping App allows signed-in users to create a shopping list and 
               share it with other users in order to save time in the store.  Each user can
               add, delete or edit an item in the list in real time.
               <br></br> I built this app with MongoDB, Express, React, Node and Socket.io.
            </p>
           </div>
         </div>

         <br></br>
         
         <div className="row">
           <div className="col-lg-6">
            <a href="https://tdw78-capstone.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <img src="../../images/partyapp.png" alt="Party Planning App"/> </a>
           </div>
           <div className="col-lg-4 list-group">  
             <p style={listHeader}>Party Planning App</p>
             <a style={listStyle} href="https://tdw78-capstone.herokuapp.com" target="_blank" rel="noopener noreferrer">Check it out!</a>
             <a style={listStyle} href="https://github.com/tdw78/capstone" target="_blank" rel="noopener noreferrer">GitHub</a>
             <p className="proj-description">
               This app allows users to view the company’s products, photo albums 
               and customer reviews.  Signed-in users are able to receive a quote 
               for the items they have placed in their cart.<br></br>The Party Planning App
               is built with Node.js, Express, Passport, PostgreSQL, Sequelize and Jasmine.
             </p>
           </div>
         </div>

         <br></br>

         <div className="row">
           <div className="col-lg-6">
           <a href="https://tdw78-bloc-jams.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <img src="../../images/bloc-jams.png" alt="Bloc Jams"/> </a>
           </div>
           <div className="col-lg-4 list-group">  
             <p style={listHeader}>Bloc Jams</p>
             <a style={listStyle} href="https://tdw78-bloc-jams.herokuapp.com/" target="_blank" rel="noopener noreferrer">Check it out!</a>
             <a style={listStyle} href="https://github.com/tdw78/bloc-jams-react" target="_blank" rel="noopener noreferrer">GitHub</a>
             <p className="proj-description">
               Bloc Jams is a music player app which allows users to upload and listen to their 
               music libraries.<br></br> I built Bloc Jams with React, Firebasea and Bootstrap.
             </p>
           </div>
         </div>

         <br></br>

         <div className="row">
           <div className="col-lg-6">
           <a href="https://tdw78-blocipedia.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <img src="../../images/blocipedia.png" alt="Blocipedia"/> </a>
           </div>
           <div className="col-lg-4 list-group">  
             <p style={listHeader}>Blocipedia</p>
             <a style={listStyle} href="https://tdw78-blocipedia.herokuapp.com/" target="_blank" rel="noopener noreferrer">Check it out!</a>
             <a style={listStyle} href="https://github.com/tdw78/blocipedia" target="_blank" rel="noopener noreferrer">GitHub</a>
             <p className="proj-description">
               Blocipedia is an app which allows users to post and/or edit public wikis.
               Users can also pay to upgrade their account in oder to create private
               wikis. <br></br> I built this app with Node, Express, PostgreSQL, 
               Sequelize and Passport.
             </p>
           </div>
         </div>


        </div>
      </div>
  );
 }
}

export default Projects;