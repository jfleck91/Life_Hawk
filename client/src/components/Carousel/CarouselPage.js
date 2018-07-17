import React, { Component } from 'react';
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container } from 'mdbreact';

class CarouselPage extends Component {
  render(){
    return(
      
      <Container>
        <br/>
        <h4 className="mt-5 mb-2">Welcome!</h4>
        <Carousel
          activeItem={1}
          length={4}
          showControls={true}
          showIndicators={false}
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="d-block w-100" img src={require('../../images/logo2.png')}  alt="First slide" />
                <Mask overlay="black-light"></Mask>
              </View>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img className="d-block w-100" img src={require('../../images/logo3.jpg')}  alt="Second slide" />
                <Mask overlay="black-strong"></Mask>
              </View>
        
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img className="d-block w-100" img src={require('../../images/logo2.png')}  alt="Third slide" />
                <Mask overlay="black-slight"></Mask>
              </View>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View>
                <img className="d-block w-100" img src={require('../../images/logo4.jpg')}  alt="Mattonit's item" />
                <Mask overlay="black-light"></Mask>
              </View>
      
            </CarouselItem>
          </CarouselInner>
        </Carousel>
      </Container>
    
    );
  }
}

export default CarouselPage;

