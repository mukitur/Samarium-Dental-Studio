import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const DetailService = () => {
    const {serviceId} = useParams();
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('./fakeData.json')
            .then(res=>res.json())
            .then(data=>setServices(data))
    },[])
    const getService = services.filter(sr=>sr.id === serviceId);
    console.log(getService)
;    return (
        <div>
            <h2>Service {serviceId}</h2>
        </div>
    );
};

export default DetailService;