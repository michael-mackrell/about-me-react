import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeSlide from "./welcome_slide"

class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeSlide></WelcomeSlide>
       
      </div>
    );
  }
}

export default App;


// <AboutMeSlide></AboutMeSlide>
// <ProjectsSlide></ProjectsSlide>
