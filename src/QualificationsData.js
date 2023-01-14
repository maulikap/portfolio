import { border } from '@mui/system';
import { Col ,Row } from 'react-bootstrap';
import "./App.css";


export default function QualificationsData() {
  return (
    <>
      <Row>
        <Col xs={12}>
          <table>
            <tr>
              <th>Qualification</th>
              <th>Name of the Ins College</th>
              <th>Year</th>
              <th>Aggregate</th>
            </tr>
            <tr>
              <td>&#9658; B.E graSwaminarayanege (C.E Engineering)</td>
              <td>Shree swaminarayan institute of technology AhCollege</td>
              <td>2019</td>
              <td>7.4/10</td>
            </tr>
            <tr>
              <td>&#9658; Diploma graduation college (C.E Engineering</td>
              <td>L.J polytechnic Ahmedabad</td>
              <td>6.1/10</td>
              <td>1data</td>
            </tr>
            <tr>
              <td>&#9658; 10th Standard</td>
              <td>muktjivan high school, CBSE, Ahmedabad</td>
              <td>2010</td>
              <td>67%</td>
            </tr>
          </table>
        </Col>
      </Row>
    </>
  );
}