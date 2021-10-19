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
              <Card.Title><h1 className="mt-4 fs-1 fw-bolder">WE <span className="text-primary" >CARE</span> FOR  <br/> YOUR SMILE</h1></Card.Title>
              <Link to = "/appoinments">
                        <Button variant="primary" size="lg"> Get Appointment </Button>
                        </Link>
            </Card.ImgOverlay>
          </Card>
        </div>
    );
};

export default Banner;