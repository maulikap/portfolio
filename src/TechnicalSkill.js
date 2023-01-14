import React from 'react';
import Card from 'react-bootstrap/Card';
import { Col ,Row } from 'react-bootstrap';
import SkillData from './SkillData';

function TechnicalSkill() {
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
                <b>Technical Skill</b>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col xs={12}>
              <Card>
                <Card.Body>
                  <SkillData></SkillData>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </>
    );
  }
  
  export default TechnicalSkill;