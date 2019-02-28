import React, { Component } from 'react';
import { ReactDOM } from "react-dom"
import logo from './logo.svg';
import './App.scss';
import WelcomeSlide from "./welcome_slide";
import CardContainer from "./cards/card_container";


class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeSlide></WelcomeSlide>

        <CardContainer></CardContainer>
      </div>
    );
  }
}

export default App;


// 
// <ProjectsSlide></ProjectsSlide>  <WelcomeSlide></WelcomeSlide>
