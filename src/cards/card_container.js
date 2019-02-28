import React from "react";
import { ReactDOM } from "react-dom"
import '../App.scss';

import AboutMeSlide from "./about_me";
import ProjectsSlide from "./projects_slide";
import ContactSlide from "./contact_slide";





const CardContainer = () => {

    return (
        <div className="card-container">
            
        <AboutMeSlide></AboutMeSlide>
        <ProjectsSlide></ProjectsSlide>
        <ContactSlide></ContactSlide>
        </div>
        
    ); 
    
    
    
}

export default CardContainer;