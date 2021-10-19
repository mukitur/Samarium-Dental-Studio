import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DetailService = () => {
    const {serviceId} = useParams();
    const [services, setServices] = useState([]);
    const [singleService, setSingleService]  = useState({});

    useEffect( ()=>{
        fetch('/fakeData.json')
            .then(res=>res.json())
            .then(data=>setServices(data))
    },[])
   
    useEffect( ()=>{
       const singleService = services.find(service => service.id == serviceId)
       setSingleService(singleService)
    } ,[services, serviceId])
    
    console.log(singleService)

   return (
        <div>
            <h2 className="my-5">Service {serviceId} You May need</h2>
            <Container>
                <Row className="text-start">
                    <Col xs={6} >
                        <img className="rounded" src={singleService?.img} width="100%" alt=""/>
                    </Col>
                    <Col xs={6}>
                        <h3 className="mt-4">Name: {singleService?.name}</h3>
                        <p>Detail Description: {singleService?.description}</p>
                        <Link to = "/doctors">
                            <p><Button variant="warning" size="lg"> View Doctors Profile </Button></p>
                        </Link>
                        <Link to = "/appoinments">
                            <p><Button variant="primary" size="lg"> Get Appointment </Button></p>
                        </Link>
                    </Col>
                </Row>
            </Container>







            
            
        </div>
    );
};

export default DetailService;