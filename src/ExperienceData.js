import { border } from '@mui/system';
import { Col ,Row } from 'react-bootstrap';
import "./App.css";


export default function ExperienceData() {
  return (
    <>
      <Row>
        <Col xs={12}>
          <table>
            <tr>
              <th>Company name</th>
              <th>Duration</th>
              <th>Department</th>
            </tr>
            <tr>
              <td>&#9658; Welinfoweb Pvt Ltd, Ahmadabad</td>
              <td>May 2018 to Jan - 2022</td>
              <td>Web Development • MVC development , Visual Studio – 2017 , SQL server – 2010</td>
            </tr>
            <tr>
              <td>&#9658; SigmaSolve ,Ahmadabad</td>
              <td>Feb 2022 - Present</td>
              <td>Web Development • MVC development , Visual Studio – 2022 , SQL server – 2018</td>
            </tr>
          </table>
        </Col>
      </Row>
    </>
  );
}