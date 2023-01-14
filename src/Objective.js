import React from 'react';
import Card from 'react-bootstrap/Card';
import { Col ,Row } from 'react-bootstrap';


function Objective() {
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
              <b>Objective</b>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Col xs={12}>
            <Card>
              <Card.Body>
                <Card.Text>
                  &#9658; To be associated with a progressive organization that
                  provides an opportunity to build a career with in a
                  challenging environment by utilizing my soft & technical
                  skills toward the organization’s exponential growth.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
  
  export default Objective;