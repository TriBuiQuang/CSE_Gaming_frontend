/*!
 * Coded by Tri Bui Quang Copyright 2020
 */
import React from "react";
import { Modal, Button, Row, Col, Card, CardHeader, CardTitle, CardBody } from "reactstrap";

import NormalPage from "./normal";

class TutorialComponent extends React.Component {
   render() {
      const { isOpen, toggle, toggleDeposit } = this.props;
      return (
         <Modal isOpen={isOpen} toggle={toggle} size="xl" className="fullpage-scroll CSEGaming-tutorial">
            <div className="modal-body ">
               <Row>
                  <Col md="12">
                     <Card>
                        <CardHeader>
                           <CardTitle tag="h5" className="mt-0">
                              Tutorial
                           </CardTitle>
                        </CardHeader>
                        <CardBody>
                           <NormalPage />
                           <Col md="12">
                              <Button className="btn-round float-right  mr-2" color="info" onClick={toggleDeposit}>
                                 Deposit
                              </Button>
                              <Button className="btn-round float-right  mr-2" color="danger" onClick={toggle}>
                                 Closed
                              </Button>
                           </Col>
                        </CardBody>
                     </Card>
                  </Col>
               </Row>
            </div>
         </Modal>
      );
   }
}

export default TutorialComponent;
