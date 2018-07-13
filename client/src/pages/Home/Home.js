import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import { Row } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';
import {  } from 'react-bootstrap';
import {  } from 'react-bootstrap';

const Home = () => (

    <div>
    <Navbar />
    <br /><br />
    <Grid>
     <Row>
    <Col xs={6} md={3}>
      <Thumbnail href="https://www.healthgrades.com/find-a-doctor" alt="171x180" img src={require('../../images/Medical.jpg')}/>
      <p>Find A Doctor</p>
    </Col>
    <Col xs={6} md={3}>
      <Thumbnail href="https://www.mayoclinic.org/symptom-checker/select-symptom/itt-20009075" alt="171x180" img src={require('../../images/sick.jpg')}/>
      <p>Check Symptoms</p>
    </Col>
    <Col xs={6} md={3}>
      <Thumbnail href="https://www.goodrx.com/"  img src={require('../../images/pills.jpg')}/>
      <p>Low Cost RX</p>
    </Col>
  </Row>


<br /><br /><br />

<h2> About Us</h2>
<p>info to come</p>



</Grid>;
    </div>
    );



export default Home;


//import Welcome from "../../components/Welcome";
//import Banners from "../../components/Banners";




//const Dashboard = () => {
   // const Pages = ["My Info", "My Health", "My Notes", "About Us"];
    //return(
       // <div className="container">
       // <Welcome/>
       // {Pages.map(page => <Banners pageName={page}/>)}
        //</div>
    //);
//}
