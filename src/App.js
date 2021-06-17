import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Tabs from "./components/Tabs";
import  Home  from "./pages/Home"
import  Briefcase  from "./pages/Briefcase";
// import Error from "./components/pages/Error";

function App() {
  return (
    
    <Router>
      <div className ="container-fluid">
        <Tabs />
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/oliva-sam">
          <Home></Home>
        </Route>
        <Route exact path="/Briefcase">
          <Briefcase></Briefcase>
        </Route>
        
        {/* <Route exact path="*" component={Error} />  */}
      </div> 
    </Router>
  );
}

export default App;
