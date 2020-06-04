import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import HomePage from "./components/HomePage";
import Skills from "./components/Skills"

function App() {
  return (
    <div className="App">
         <NavBar />
     
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
