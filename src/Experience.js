import React from 'react';
import Card from 'react-bootstrap/Card';
import { Col ,Row } from 'react-bootstrap';
import ExperienceData from './ExperienceData';

function Experience() {
    return (
      <>
        <Row style={{ marginTop: 20 }}>
            <Col xs={12}>
              <div
                style={{
                  marginTop: 20,
                  height: 30,
                  backgroundColor: "GrayText",
                  textAlign: "center",
                }}
              >
                <b>Experience</b>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col xs={12}>
              <Card>
                <Card.Body>
                  <ExperienceData></ExperienceData>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </>
    );
  }
  
  export default Experience;