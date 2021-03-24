import React from "react";
import {Link, useLocation} from "react-router-dom";

function Tabs() {
    const location = useLocation();
    return(
        <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/portfolio"
            className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item nav-link" >
        <a href="https://drive.google.com/file/d/11Nak4ZSGcMA75Rdm6sicGxWaKMdYK8Gc/view" target="_blank">Resume</a>
        </li> 
        <br></br>
        <li className="nav-item nav-link ">
         <a href="https://github.com/oliva-sam" target="_blank"> Github </a>
        </li>
        <br></br>
        <li className="nav-item nav-link">
         <a href="https://www.linkedin.com/in/samanthaoliva95/" target="_blank"> LinkedIn </a>
        </li>
      </ul>
    )
}

export default Tabs;