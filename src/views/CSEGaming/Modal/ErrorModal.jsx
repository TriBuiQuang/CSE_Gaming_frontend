/*!
 * Coded by Tri Bui Quang Copyright 2020
 */
import React from "react";

// reactstrap components
import { Card, CardBody, Row, Col, Modal } from "reactstrap";

class ErrorModalComponent extends React.Component {
   state = {};
   render() {
      const { isOpen, toggle } = this.props;
      return (
         <Modal isOpen={isOpen} toggle={toggle} size="sm">
            <Row>
               <Col md="12">
                  <Card className="mb-0">
                     <CardBody className="text-center">
                        <i className="fa fa-exclamation  text-danger" style={{ fontSize: "4rem" }} />
                        <p className="mt-2 text-center">Account not found or your session expired!</p>
                     </CardBody>
                  </Card>
               </Col>
            </Row>
         </Modal>
      );
   }
}

export default ErrorModalComponent;
