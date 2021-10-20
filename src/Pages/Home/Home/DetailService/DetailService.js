import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
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
            <h2 className="my-5"> Do you search for {singleService?.name}?</h2>

            <div className="container px-4">
                <div className="row row row-cols-1 row-cols-md-2 g-3">
                    <div className="col">
                        <div className="border bg-white"><img className="rounded" src={singleService?.img} width="100%" alt=""/></div>
                    </div>
                    <div className="col text-start">
                        <div className="p-3 bg-white">
                            <h3 >Name: {singleService?.name}</h3>
                            <p>Service Description: {singleService?.description}</p>
                            <h4>Time Duration: {singleService?.required_time} Hour</h4>
                            <h4>Price: BDT{singleService?.price}</h4>
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