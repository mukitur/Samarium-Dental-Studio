import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../../../../images/equipments/Aesthetic.jpeg';
import img2 from '../../../../images/equipments/Autoclave.jpg';
import img3 from '../../../../images/equipments/Composite.jpeg';
import img4 from '../../../../images/equipments/Protaper-Files.jpeg';
import img5 from '../../../../images/equipments/Protaper-Machine.jpeg';
import img6 from '../../../../images/equipments/X-Ray-RVG.jpg';

const Equipments = () => {
    return (
        <div>
            <h2 className="my-5">Equipments We Use</h2>
            <Row className="mx-5">
                <Col>
                    <Card className="border-white">
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                        <Card.Title>Protaper File Systems</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-white">
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                        <Card.Title>Autoclave UV Store Machine</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-white">
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                        <Card.Title>Composite Component</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>    
            </Row>
            <Row className="mt-4 mx-5">
                <Col>
                    <Card className="border-white">
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                        <Card.Title>Protaper File Systems</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-white">
                        <Card.Img variant="top" src={img5} />
                        <Card.Body>
                        <Card.Title>Protaper Machine</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-white">
                        <Card.Img variant="top" src={img6} />
                        <Card.Body>
                        <Card.Title>X-Ray RVG</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>    
            </Row>
        </div>
    );
};

export default Equipments;

{/* <Col>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                        <Card.Title>Protaper File Systems</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                        <Card.Title>Protaper File Systems</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                        <Card.Title>Protaper File Systems</Card.Title>
                        </Card.Body>
                    </Card>
                </Col> */}