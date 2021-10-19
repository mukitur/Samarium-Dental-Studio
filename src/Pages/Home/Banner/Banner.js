import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import bgImage from '../../../images/banner-1.jpg';

const Banner = () => {
    return (
        <div >
           <Card className="bg-dark text-dark">
            <Card.Img src= {bgImage} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title><h1 style={{fontSize: '30px'}} className="mt-4">WE <span className="text-primary" >CARE</span> FOR  <br/> YOUR SMILE</h1></Card.Title>
              <Link to = "/appoinments">
                        <Button variant="primary" size="lg"> Get Appointment </Button>
                        </Link>
            </Card.ImgOverlay>
          </Card>
        </div>
    );
};

export default Banner;