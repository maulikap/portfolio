import { border } from '@mui/system';
import { Col ,Row } from 'react-bootstrap';
import "./App.css";


export default function SkillData() {
  return (
    <>
    <Row >
            <Col xs={12}>
            <table>  
                  <tr><td><b>&#9658; Operating Systems</b></td><td>Windows 7, Windows 8, Windows 8.1, Windows 10</td></tr>  
                  <tr><td><b>&#9658; GUI/IDE</b></td><td>Microsoft Visual Studio .NET 2008/2010/2012/2013</td></tr>
                  <tr><td><b>&#9658; Framework</b></td><td>.Net Framework 4.0/4.5</td></tr>  
                  <tr><td><b>&#9658; Technologies</b></td><td>C#.NET, MVC, Web API, LINQ, Entity Framework, React Js</td></tr>  
                  <tr><td><b>&#9658; Database</b></td><td>MS SQL Server /2008/2012,2018, Mongo DB</td></tr>  
                  <tr><td><b>&#9658; Scripting Languages</b></td><td>JavaScript and JQuery</td></tr>  
                  <tr><td><b>&#9658; Configuration Management</b></td><td>TFS, Source Code, GIT-HUB, GIT-LAB</td></tr>  
            </table> 
             
            </Col>
          </Row>
    </>
  );
}