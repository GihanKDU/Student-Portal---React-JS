import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import meeting from '../../Images/Backgrounds/meeting.jpg'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

import Container from 'react-bootstrap/esm/Container';

export default function About() {
    return (
       <Container className="custom_scale_1">
           <Row>
               <Col  md={5}>
               <ScrollAnimation className="animate__slower" animateIn="fadeInUp">  <Image className="why-img" src={meeting} alt={"meeting"}/>  </ScrollAnimation>
                   </Col>
                   <Col md={7}>
                   
 
<ScrollAnimation className="animate__slower" animateIn="fadeInUp">
                       <div className="heading_primary">Why Choose Study Portal</div>
                       <div className="list_primary"><i class="fa fa-check list-icon"></i>Get quick and guaranteed results with the best teachers.</div>
                       <div className="list_primary"><i class="fa fa-check list-icon"></i>You can save a lot of money on our lessons & resources.</div>
                       <div className="list_primary"><i class="fa fa-check list-icon"></i>Our staff and teachers are always ready to help you.</div>
                       <div className="list_primary"><i class="fa fa-check list-icon"></i>Get quick and guaranteed results with the best teachers.</div>
                       <div className="list_primary"><i class="fa fa-check list-icon"></i>You can save a lot of money on our lessons & resources.</div>
                       <div className="list_primary"><i class="fa fa-check list-icon"></i>Our staff and teachers are always ready to help you.</div>
                       </ScrollAnimation>
                       </Col>
                     
                     
           </Row>
          
       </Container>
    )
}
