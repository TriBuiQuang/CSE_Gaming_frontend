/*!
 * Coded by Tri Bui Quang Copyright 2020
 */
import React from "react";

// reactstrap components
import { Card, CardBody, Row, Col, Modal, Button } from "reactstrap";
class AlertModalComponent extends React.Component {
   state = {};
   render() {
      const { isOpen, toggle } = this.props;
      return (
         <Modal isOpen={isOpen} toggle={toggle} size="sm">
            <Row>
               <Col md="12">
                  <Card>
                     <CardBody className="text-center">
                        <i className="fa fa-exclamation-triangle text-danger" style={{ fontSize: "4rem" }} />
                        <h4 className="mt-2 px-0 text-center">Lost connection </h4>
                        <p className="px-0 text-center">Check the internet connection and click Retry button to connect the game server</p>
                     </CardBody>
                  </Card>
               </Col>

               <Col md="12" className="text-center">
                  <Button className="btn-round " color="danger" onClick={toggle}>
                     Closed
                  </Button>
               </Col>
            </Row>
         </Modal>
      );
   }
}

export default AlertModalComponent;
