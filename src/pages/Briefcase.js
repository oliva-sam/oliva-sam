import React from "react";
import lazyfoodieDemo from "../assets/lazy-foodie-demo.gif";
import weatherdashDemo from "../assets/weather-dashboard-actual.gif";
import eatburgerDemo from "../assets/eat-burger-demo.gif";

function Briefcase () {
    return (
        <div>

            <div className="row">
                <h2>Portfolio</h2>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <a href="https://oliva-sam.github.io/RnRSearch/" target="_blank">
                    <img className="projects" src={lazyfoodieDemo} alt="project-1"/>
                    </a>
                    <p> Lazy Foodie API</p>
                    <a href="https://github.com/oliva-sam/RnRSearch" target="_blank"><p> GitHub Repository </p> </a>
                </div>
                <div className="col-sm-6">
                    <a href="https://oliva-sam.github.io/06-Weather-Dashboard/" target="_blank">
                    <img className="projects" src={weatherdashDemo} alt="weather-dashboard-gif"/>
                    </a>
                    <p>Weather Dashboard</p> 
                    <a href="https://github.com/oliva-sam/06-Weather-Dashboard" target="_blank"><p> GitHub Repository </p> </a>
                </div>
            </div>
            <br/>
            <div className ="row">
                <div className ="col-sm-12">
                <a href ="https://ancient-plains-35245.herokuapp.com/" target="_blank">
                <img id="burger" src={eatburgerDemo} alt="eat-burger-gif" />
                </a>
                <p>Eat the Burger</p>
                <a href="https://github.com/oliva-sam/eat-da-burger" target="_blank"><p> GitHub Repository </p> </a>
                </div>
            
            </div>

        </div>



    )
}

export default Briefcase;