import React from 'react'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
    return (

        <Row className="main-footer">

            <Col md={3}>
            <div>Location</div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9366199662263!2d79.85230741448862!3d6.8981840950155195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bdf86d38eed%3A0xbcfebb894108e4fc!2sReservations%20Gateway%20Inc!5e0!3m2!1sen!2slk!4v1605100959084!5m2!1sen!2slk" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>



            </Col>
            <Col md={3}>
                <div>Usefull Lin</div>
              
                    <ul class="useful-links">
                        <div className="footer-text"><a href="#">Home</a></div>
                      
                    </ul>
                
            </Col>
            <Col md={3}>
<div>Contact Us</div>
            </Col>
            <Col md={3}>
            <div>Privacy and Terms</div>
</Col>


        </Row>


    )
}

