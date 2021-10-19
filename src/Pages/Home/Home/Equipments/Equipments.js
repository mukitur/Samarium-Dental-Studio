import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import img2 from '../../../../images/equipments/Autoclave.jpg';
import img3 from '../../../../images/equipments/Composite.jpeg';
import img5 from '../../../../images/equipments/Protaper-Machine.jpeg';
import img6 from '../../../../images/equipments/X-Ray-RVG.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faCheckCircle, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Equipments = () => {
    return (
        <div>
            <Container>
            <h2 className="my-5 text-primary">Equipments We Use</h2>
            <Row>
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
            <h2 className="my-5 text-primary">Our Healthy Teeth Treatments are:</h2>
            <Row className="text-start">
                <Col>
                    <FontAwesomeIcon icon={faDotCircle} /> Abscess Drainage <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Intra oral periapical view <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Acrylic Denture <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Porcelain Fused (Metal Crown/Bridge) <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Aesthetic Filling
                </Col>
                <Col>
                    <FontAwesomeIcon icon={faDotCircle} /> Periodontal Curettage <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Pulp Capping <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Children Treatment <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Extraction <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Flexible Denture
                </Col>
                <Col>
                     <FontAwesomeIcon icon={faDotCircle} /> Root Canal Treatment  <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Operculectomy <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Orthodontic Braces <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Scaling & Polishing <br/>
                    <FontAwesomeIcon icon={faDotCircle} /> Surgical Extraction
                </Col>     
            </Row>
            <Link to ="/appoinments">
                <Button className="my-5" variant="warning"> <FontAwesomeIcon icon={faCalendarCheck} /> Book For Appoinment</Button>
            </Link>
            </Container>
        </div>
    );
};

export default Equipments;
