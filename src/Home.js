import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import maulik from './image/maulik.jpg';
import { Col ,Row } from 'react-bootstrap';
import Objective from './Objective';
import Summary from './Summary';
import TechnicalSkill from './TechnicalSkill';
import AcademicQualifications from './AcademicQualifications';
import Experience from './Experience';
import ProjectSummery from './ProjectSummery';
import Interests from './Interests';


function Home() {
    return (
      <>
        <Container style={{ marginBottom: 20 }}>
          
          <Row style={{ marginTop: 20 }}>
            <Col xs={3}>
              <Card>
                <Card.Img variant="top" src={maulik} />
              </Card>
            </Col>
            <Col xs={9}>
              <Card>
                <Card.Body>
                  <Card.Title>Maulik Amrutbhai Parmar.</Card.Title>

                  <Card.Text>
                    <b>Address :</b> A-36 , Kashivishwanath soc part- 2, near
                    jageshwari society, isanpur, Ahmedabad - 382443
                  </Card.Text>
                  <Card.Text>
                    <b>E-mail Id :</b> maulikap229@gmail.com
                  </Card.Text>
                  <Card.Text>
                    <b>Date of Birth :</b> 22th September 1995
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Objective></Objective>
          <Summary></Summary>
          <TechnicalSkill></TechnicalSkill>
          <AcademicQualifications></AcademicQualifications>
          <Experience></Experience>
          <ProjectSummery></ProjectSummery>
          <Interests></Interests>
        </Container>
      </>
    );
  }
  
  export default Home;