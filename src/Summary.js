import React from 'react';
import Card from 'react-bootstrap/Card';
import { Col ,Row } from 'react-bootstrap';


function Summary() {
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
                <b>Summary</b>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col xs={12}>
              <Card>
                <Card.Body>
                  <Card.Text>
                    &#9658; 5 Years of experience in developing software
                    applications using C#.NET,ASP.NET, LINQ, MS SQL Server,MVC 4
                    and 5.
                  </Card.Text>
                  <Card.Text>
                    &#9658; Experience in .NET 4.5/4.0/3.5 technologies
                    including C#.NET, ASP.NET, JavaScript, HTML, IIS ,MS SQL
                    Server 2008R2/2008/2012 and React JS
                  </Card.Text>
                  <Card.Text>
                    &#9658; Highly capable of quickly learning new technologies
                    and environments.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </>
    );
  }
  
  export default Summary;