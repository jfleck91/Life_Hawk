import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import { Row } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';
import {  } from 'react-bootstrap';
import {  } from 'react-bootstrap';

const Home = () => (

  <div style={{background: "#e6f2ff", textAlign: 'center'}}>
    <Navbar />
    <br /><br />
    
    <Row style={{ justifyContent: 'center'}}>
    <Col style={{margin: '20px'}}>
      <Thumbnail href="https://www.healthgrades.com/find-a-doctor" img src={require('../../images/Medical.jpg')}/>
      <p>Find A Doctor</p>
    </Col>
    <Col style={{margin: '20px'}}>
      <Thumbnail href="https://www.mayoclinic.org/symptom-checker/select-symptom/itt-20009075" img src={require('../../images/sick.jpg')}/>
      <p>Check Symptoms</p>
    </Col>
    <Col style={{margin: '20px'}}>
      <Thumbnail href="https://www.goodrx.com/"  img src={require('../../images/pills.jpg')}/>
      <p>Low Cost RX</p>
    </Col>
  </Row>
 

<br /><br /><br />

<h2> About Us</h2>
<p>info to come</p>

<br /><br /><br />


</div>
);



export default Home;

