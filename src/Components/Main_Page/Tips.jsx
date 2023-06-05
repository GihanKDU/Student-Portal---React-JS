import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import girl from '../../Images/Backgrounds/girl.png'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

import Container from 'react-bootstrap/esm/Container';

export default function Tips() {
    return (
        <Container className="custom_scale_1">
           <Row>
              
                   <Col md={7}>
                   
 
<ScrollAnimation className="animate__slower" animateIn="fadeInUp">
                       <div className="heading_primary">Tips for Taking Online Classes</div>
                       <div className="list_primary"><i class="fa fa-check list-icon"></i>Treat an online course like a “real” course.</div>
                       <div className="list_primary"><i class="fa fa-check list-icon"></i>Hold yourself accountable.</div>
                       <div className="list_primary"><i class="fa fa-check list-icon"></i>Practice time management.</div>
                       <div className="list_primary"><i class="fa fa-check list-icon"></i>Create a regular study space and stay organized.</div>
                       <div className="list_primary"><i class="fa fa-check list-icon"></i>Eliminate distractions.</div>
                       <div className="list_primary"><i class="fa fa-check list-icon"></i>Figure Out How You Learn Best.</div>
                       </ScrollAnimation>
                       </Col>
                       <Col  md={5}>
               <ScrollAnimation className="animate__slower" animateIn="fadeInUp">  <Image className="why-img" src={girl} alt={"girl"}/>  </ScrollAnimation>
                   </Col>
                     
                     
           </Row>
          
       </Container>
    )
}
