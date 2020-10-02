/*!
 * Coded by Tri Bui Quang Copyright 2020
 */
import React from "react";

// reactstrap components
import { Card, CardBody, Row, Col, Modal, Button } from "reactstrap";
import DiamondImg from "assets/img/CSEGaming/icon/diamond.png";
class DiamondModalComponent extends React.Component {
   state = {};
   render() {
      const { isOpen, toggle } = this.props;
      return (
         <Modal isOpen={isOpen} toggle={toggle} size="sm">
            <Row>
               <Col md="12">
                  <Card>
                     <CardBody className="text-center">
                        <img src={DiamondImg} alt="diamond" style={{ width: "40%" }} />
                        <p className="mt-2 px-0 text-center">SHOP CAPITAL already has lucky diamonds which is waiting for you. </p>
                        <p className="text-center">HURRY UP NOW!</p>
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

export default DiamondModalComponent;
