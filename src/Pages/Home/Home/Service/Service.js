import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {img, name, short_description, id} = service;
    return (
        <div>
            <div>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {short_description}
                        </Card.Text>
                        <Link to = {`/detailservice/${id}`}><Button variant="info">Book for {name}</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </div>
    );
};

export default Service;