import React from "react";
import Navbar from "../../components/Navbar";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Thumbnail } from 'react-bootstrap';
import CarouselPage from "../../components/Carousel";

const Home = () => (

  <div style={{backgroundImage: 'url(' + require('../../images/home.jpg') + ')',backgroundSize: 'cover',backgroundPosition: "center center", textAlign: 'center'}}>

  
    <Navbar />
    <CarouselPage />   
    
    
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
<br />

<p style={{marginLeft: "11%", marginRight: "11%"}}> Having worked in the medical field for nearly five years. Ive learned the biggest issue facing consumers is the shear amount of information you need to keep track of when it comes to your health and insurance. This app allows users to keep track of all their insurance info, doctors, last appointments, medications, ongoing condition and much more all in one app. Our goal isnt just to help our users stay organized, but by staying organized we can help you live healthier, and in turn save you money.</p>

<br /><br /><br />


</div>
);



export default Home;

