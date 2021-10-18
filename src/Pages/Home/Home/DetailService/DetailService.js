import React, { useState } from 'react';
import { useParams } from 'react-router';

const DetailService = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState();
    return (
        <div>
            <h2>Service {serviceId}</h2>
        </div>
    );
};

export default DetailService;