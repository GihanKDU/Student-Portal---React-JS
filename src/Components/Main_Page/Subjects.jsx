import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



import london from '../../Images/Backgrounds/london.jpg'
import london1 from '../../Images/Backgrounds/london1.jpg'
import london2 from '../../Images/Backgrounds/london2.jpg'
import Container from 'react-bootstrap/Container';






export default function Subjects() {

    return (

<Container>
<ScrollAnimation className="animate__slower" animateIn="fadeInUp">   <div className="heading_primary">Popular Cources</div></ScrollAnimation>
        <Row>
            <Col md={4}><ScrollAnimation className="animate__slower" animateIn="fadeInUp">
                <Card >
                    <Card.Img variant="top" className="" src={london} alt={"london"} />
                    <Card.Body>
                        <Card.Title className="item-v_center">GCE O/L</Card.Title>
                   
                        <div className="item-v_center"><Button variant="primary">Start Course</Button></div>
                    </Card.Body>
                </Card>
            </ScrollAnimation>
            </Col>
            <Col md={4}><ScrollAnimation className="animate__slower" animateIn="fadeInUp">
                <Card >
                    <Card.Img variant="top" className="" src={london1} alt={"london1"} />
                    <Card.Body>
                        <Card.Title className="item-v_center">GCE A/L</Card.Title>
                     
                        <div className="item-v_center"><Button  variant="primary">Start Course</Button></div>
                    </Card.Body>
                </Card>
            </ScrollAnimation>
            </Col>
            <Col md={4}><ScrollAnimation className="animate__slower" animateIn="fadeInUp">
                <Card >
                    <Card.Img variant="top" className="" src={london2} alt={"london2"} />
                    <Card.Body>
                        <Card.Title className="item-v_center">LONDON A/L</Card.Title>
                    
                        <div className="item-v_center"><Button variant="primary">Start Course</Button></div>
                    </Card.Body>
                </Card>
            </ScrollAnimation>
            </Col>





        </Row>
        </Container>


    )
}
