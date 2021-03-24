import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Tabs from "./components/Tabs";
import Home from "./components/pages/Home"
import Briefcase from "./components/pages/Briefcase";
// import Error from "./components/pages/Error";

function App() {
  return (
    <Router>
      <div className ="container-fluid">
        <Tabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Briefcase} /> 
        {/* <Route exact path="*" component={Error} />  */}
      </div> 
    </Router>
  );
}

export default App;
