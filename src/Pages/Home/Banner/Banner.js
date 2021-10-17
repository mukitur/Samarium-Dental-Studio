import React from 'react';
import { Card, Button } from 'react-bootstrap';

import bgImage from '../../../images/banner-1.jpg';

const Banner = () => {
    return (
        <div>
           <Card className="bg-dark text-dark">
  <Card.Img src= {bgImage} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title><h1 style={{fontSize: '60px'}} className="mt-4">We <span className="text-primary" >Care</span> for  <br/> your SMILE</h1></Card.Title>
    <Card.Text><Button variant="outline-primary">Appoinment</Button></Card.Text>
  </Card.ImgOverlay>
</Card>
        </div>
    );
};

export default Banner;