/*!
 * Coded by Tri Bui Quang Copyright 2020
 */
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

class UserCSEProfile extends React.Component {
   render() {
      return (
         <Card>
            <CardHeader>
               <CardTitle tag="h4" className="mt-0">
                  Pool list
               </CardTitle>
            </CardHeader>
            <CardBody>
               <ul className="list-unstyled team-members">
                  <li>
                     <Row>
                        <Col md="2" xs="2">
                           1
                        </Col>
                        <Col md="7" xs="7">
                           Dev team
                        </Col>
                        <Col className="text-right" md="3" xs="3">
                           3
                        </Col>
                     </Row>
                  </li>
               </ul>
            </CardBody>
         </Card>
      );
   }
}

export default UserCSEProfile;
