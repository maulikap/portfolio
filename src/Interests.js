import React from 'react';
import Card from 'react-bootstrap/Card';
import { Col ,Row } from 'react-bootstrap';


function Interests() {
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
                <b>Interests</b>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col xs={12}>
              <Card>
                <Card.Body>
                  <Card.Text>
                    &#9658; Sports.
                  </Card.Text>
                  <Card.Text>
                    &#9658; E-Book Reading.
                  </Card.Text>
                  <Card.Text>
                    &#9658; Social Activities.
                  </Card.Text>
                  <Card.Text>
                    &#9658; Traveling.
                  </Card.Text>
                  <Card.Text>
                    &#9658; Watching movies, leasing song.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </>
    );
  }
  
  export default Interests;