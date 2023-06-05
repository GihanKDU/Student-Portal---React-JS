

import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import team from '../../Images/Backgrounds/team-1.jpg';
import teama from '../../Images/Backgrounds/team-2.jpg';
import teamb from '../../Images/Backgrounds/team-3.jpg';
import teamc from '../../Images/Backgrounds/team-4.jpg';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Container from 'react-bootstrap/esm/Container';


export default function Team() {
    return (
        <Container className="custom_scale_1">
            <ScrollAnimation className="animate__slower" animateIn="fadeInUp">   <div className="heading_primary">Our Instructors</div></ScrollAnimation>
        <Row>
            <Col className="text-center" md={3}>
            <ScrollAnimation className="animate__slower" animateIn="fadeInUp">  <Image className="img_team" src={team} alt={"team"}/>  </ScrollAnimation>
            <ScrollAnimation className="animate__slower" animateIn="fadeInUp"><div>
                <div className="team-heading_text">Gihan Supun</div>
                <div className="team-job_text" >Lecturer</div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation className="animate__slower" animateIn="fadeInUp">
            <div className="item-v_center">
            <a href="https://www.facebook.com/"><i class=" job-icon fa fa-facebook" ></i></a>
            <a href="https://www.google.lk/"><i class=" job-icon fa fa-google" ></i></a>
            <a href="https://www.instagram.com/"><i class=" job-icon fa fa-instagram" ></i></a>
            <a href="https://www.linkedin.com/"><i class=" job-icon fa fa-linkedin" ></i></a>
           
            </div>
            </ScrollAnimation>
                </Col>
                <Col className="text-center" md={3}>
            <ScrollAnimation className="animate__slower" animateIn="fadeInUp">  <Image className="img_team" src={teama} alt={"teama"}/>  </ScrollAnimation>
            <ScrollAnimation className="animate__slower" animateIn="fadeInUp"><div>
                <div className="team-heading_text">Jenny Anderson</div>
                <div className="team-job_text" >Lecturer</div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation className="animate__slower" animateIn="fadeInUp">
            <div className="item-v_center">
            <a href="https://www.facebook.com/"><i class=" job-icon fa fa-facebook" ></i></a>
            <a href="https://www.google.lk/"><i class=" job-icon fa fa-google" ></i></a>
            <a href="https://www.instagram.com/"><i class=" job-icon fa fa-instagram" ></i></a>
            <a href="https://www.linkedin.com/"><i class=" job-icon fa fa-linkedin" ></i></a>
           
            </div>
            </ScrollAnimation>
                </Col>
                <Col className="text-center" md={3}>
            <ScrollAnimation className="animate__slower" animateIn="fadeInUp">  <Image className="img_team" src={teamb} alt={"teamb"}/>  </ScrollAnimation>
            <ScrollAnimation className="animate__slower" animateIn="fadeInUp"><div>
                <div className="team-heading_text">Henry Jcob</div>
                <div className="team-job_text" >Lecturer</div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation className="animate__slower" animateIn="fadeInUp">
            <div className="item-v_center">
            <a href="https://www.facebook.com/"><i class=" job-icon fa fa-facebook" ></i></a>
            <a href="https://www.google.lk/"><i class=" job-icon fa fa-google" ></i></a>
            <a href="https://www.instagram.com/"><i class=" job-icon fa fa-instagram" ></i></a>
            <a href="https://www.linkedin.com/"><i class=" job-icon fa fa-linkedin" ></i></a>
           
            </div>
            </ScrollAnimation>
                </Col>
                <Col className="text-center" md={3}>
            <ScrollAnimation className="animate__slower" animateIn="fadeInUp">  <Image className="img_team" src={teamc} alt={"teamc"}/>  </ScrollAnimation>
            <ScrollAnimation className="animate__slower" animateIn="fadeInUp"><div>
                <div className="team-heading_text">Emma Flex</div>
                <div className="team-job_text" >Lecturer</div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation className="animate__slower" animateIn="fadeInUp">
            <div className="item-v_center">
            <a href="https://www.facebook.com/"><i class=" job-icon fa fa-facebook" ></i></a>
            <a href="https://www.google.lk/"><i class=" job-icon fa fa-google" ></i></a>
            <a href="https://www.instagram.com/"><i class=" job-icon fa fa-instagram" ></i></a>
            <a href="https://www.linkedin.com/"><i class=" job-icon fa fa-linkedin" ></i></a>
           
            </div>
            </ScrollAnimation>
                </Col>

                </Row>
                </Container>
    )
}
