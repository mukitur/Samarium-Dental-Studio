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

            <div className="container px-4">
                <div className="row row row-cols-1 row-cols-md-2 g-3">
                    <div className="col">
                        <div className="p-3 border bg-light"><img className="rounded" src={singleService?.img} width="100%" alt=""/></div>
                    </div>
                    <div className="col">
                        <div className="p-3 border bg-light">
                        <h3 className="mt-4">Name: {singleService?.name}</h3>
                        <p>Detail Description: {singleService?.description}</p>
                        <p><Link to = "/doctors">
                            <Button variant="warning" size="lg"> View Doctors Profile </Button>
                        </Link></p>
                        <p><Link to = "/appoinments">
                           <Button variant="primary" size="lg"> Get Appointment </Button>
                        </Link></p>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default DetailService;