/*!
 * Coded by Tri Bui Quang Copyright 2020
 */
import React from "react";

// reactstrap components
import { Card, CardBody, Row, Col, Modal, Button } from "reactstrap";

class BuyNotiModalComponent extends React.Component {
   state = {};
   render() {
      const { isOpen, toggle } = this.props;
      //list component

      //main component
      return (
         <Modal isOpen={isOpen} toggle={toggle} size="sm">
            <Row>
               <Col md="12">
                  <Card>
                     <CardBody className="text-center">
                        <i className="fa fa-exclamation-circle text-danger" style={{ fontSize: "4rem" }} />
                        <p className="mt-2">Buying limit of the item is at this level</p>
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

export default BuyNotiModalComponent;
