import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img2 from '../../../../images/equipments/Autoclave.jpg';
import img3 from '../../../../images/equipments/Composite.jpeg';
import img5 from '../../../../images/equipments/Protaper-Machine.jpeg';
import img6 from '../../../../images/equipments/X-Ray-RVG.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Equipments = () => {
    return (
        <div>
            <h2 className="my-5">Equipments We Use</h2>
            <Row className="mx-5">
                <Col>
                    <Card className="border-white">
                        <Card.Img variant="top" src={img5} />
                            <Card.Body>
                            <Card.Title> <FontAwesomeIcon icon={faCheckCircle} /> Protaper Machine</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-white">
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                        <Card.Title> <FontAwesomeIcon icon={faCheckCircle} /> Autoclave UV Store </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-white">
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                        <Card.Title> <FontAwesomeIcon icon={faCheckCircle} /> Composite Component</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>    
                <Col>
                    <Card className="border-white">
                        <Card.Img variant="top" src={img6} />
                        <Card.Body>
                        <Card.Title> <FontAwesomeIcon icon={faCheckCircle} /> X-Ray RVG</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>    
            </Row>
            <h2 className="my-5">Our Healthy Teeth Treatments are:</h2>
            <Row className="mx-5">
                <Col>
                    <FontAwesomeIcon icon={faDotCircle} /> Abscess Drainage <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Abscess Drainage <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Abscess Drainage <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Abscess Drainage <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Abscess Drainage
                </Col>
                <Col>
                    <FontAwesomeIcon icon={faDotCircle} /> Abscess Drainage <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Abscess Drainage <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Abscess Drainage <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Abscess Drainage <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Abscess Drainage
                </Col>
                <Col>
                     <FontAwesomeIcon icon={faDotCircle} /> Abscess Drainage <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Abscess Drainage <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Abscess Drainage <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Abscess Drainage <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Abscess Drainage
                </Col>    
                 
            </Row>
            
        </div>
    );
};

export default Equipments;
