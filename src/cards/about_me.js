import React from "react";
import { ReactDOM } from "react-dom"
import '../App.scss';


const AboutMe = () => {

    return (
        <div className="slideTwo">
            <h1>About Me</h1>
            <div>
                <h4>At Keyboard</h4>
                <p>Full time Software Engineer with a passion for front end devlopment</p>
            </div>
            


            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className="container">
                <h4>Away From Keyboard</h4>

                <div className="row">

                    <div className="col-sm">
                        <h5>Hiking</h5>
                        <div className="slideTwo_image_ice_lake"></div>
                        <p className="slideTwo_image_text">lorem ipsum        </p>
                    </div>

                    <div className="col-sm">
                        <h5>Powerlifting</h5>
                        <div className="slideTwo_image_powerlifting"></div>
                        <p className="slideTwo_image_text">lorem ipsum        lorem ipsum        lorem ipsum        lorem ipsum        lorem ipsum        lorem ipsum        lorem ipsum        lorem ipsum        lorem ipsum        lorem ipsum        lorem ipsum        lorem ipsum        lorem ipsum        </p>
                    </div>








                </div>
            </div>
        </div>
        
    ); 
    
    
    
}

export default AboutMe;