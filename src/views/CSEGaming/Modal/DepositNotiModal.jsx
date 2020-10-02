/*!
 * Coded by Tri Bui Quang Copyright 2020
 */
import React from "react";

// reactstrap components
import { Card, CardBody, Row, Col, Modal, Button } from "reactstrap";

class DepositNotiModalComponent extends React.Component {
   state = {};
   render() {
      const { isOpen, toggle, toggleDeposit } = this.props;
      return (
         <Modal isOpen={isOpen} toggle={toggle} size="sm">
            <Row>
               <Col md="12">
                  <Card>
                     <CardBody className="text-center">
                        <i className="fa fa-money text-danger" style={{ fontSize: "4rem" }} />
                        <p className="mt-2">Deposit CSE now to get bonus 100% point</p>
                     </CardBody>
                  </Card>
               </Col>

               <Col md="12">
                  <Button className="btn-round ml-2" color="danger" onClick={toggle}>
                     Closed
                  </Button>
                  <Button className="btn-round float-right  mr-2" color="info" onClick={toggleDeposit}>
                     Deposit
                  </Button>
               </Col>
            </Row>
         </Modal>
      );
   }
}

export default DepositNotiModalComponent;
