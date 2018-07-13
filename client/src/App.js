import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Health from "./pages/Health";
import Info from "./pages/Info/Info";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


const App = () => (

  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Login} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Health" component={Health} />
        <Route exact path="/Info" component={Info} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
);



export default App;
