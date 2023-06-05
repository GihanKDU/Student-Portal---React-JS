import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import letter from '../../Images/Backgrounds/letter.png'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';



export default function Subscribe() {
    return (

       <Row className="box-news_letter ">
                
           <Col className="item-v_center" md={5}>
           <ScrollAnimation className="animate__slower" animateIn="fadeInUp">  <Image className="letter-img" src={letter} alt={"letter"}/>  </ScrollAnimation>
           </Col>

           <Col md={7}>
           <ScrollAnimation className="animate__slower" animateIn="fadeInUp"> 
               <div className="news-letter-text_heading">Subscribe Our News Letters</div>
               <Form.Group className="flex-item"  controlId="formBasicEmail">

<Form.Control className="news-letter_input-box" type="email" placeholder="Enter email" />
<Button variant="primary" type="submit">
                            Subscribe
  </Button>

</Form.Group>
               </ScrollAnimation>
            </Col>
       
       </Row>
    )
}
