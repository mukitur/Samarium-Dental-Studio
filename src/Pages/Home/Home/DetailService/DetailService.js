import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DetailService = () => {
    const {serviceId} = useParams();
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('/fakeData.json')
            .then(res=>res.json())
            .then(data=>setServices(data))
    },[])
   
    
    const singleService = services.find(sr=> sr.serviceId === Number.id);
    //const singleService = services.find(sr=> sr.id===Number.serviceId);
    console.log(singleService)

   return (
        <div>
            <h2 className="my-5">Service {serviceId}</h2>
            <Container>
                <Row className="text-start">
                    <Col xs={6} >
                        <img src={singleService?.img} width="100%" alt=""/>
                    </Col>
                    <Col xs={6}>
                        <h3 className="mt-4">Name: {singleService?.name}</h3>
                        <p>Detail Description: {singleService?.description}</p>
                        <Link to = "/appoinments">
                        <Button variant="primary" size="lg"> Get Appointment </Button>
                        </Link>
                    </Col>
                    
                </Row>
            </Container>







            
            
        </div>
    );
};

export default DetailService;