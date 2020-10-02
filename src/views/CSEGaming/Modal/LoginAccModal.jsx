/*!
 * Coded by Tri Bui Quang Copyright 2020
 */
import React from "react";

// reactstrap components
import { Card, CardBody, Row, Col, Modal, Button, InputGroup, Input, InputGroupAddon, InputGroupText } from "reactstrap";
import DiamondImg from "assets/img/CSEGaming/icon/diamond.png";
class LoginAccModalComponent extends React.Component {
   state = {};
   render() {
      const { isOpen, toggle } = this.props;
      return (
         <Modal isOpen={isOpen} toggle={toggle} size="md">
            <Row>
               <Col md="12">
                  <Card>
                     <CardBody className="text-center">
                        <img src={DiamondImg} alt="diamond" style={{ width: "40%" }} />
                        <InputGroup className="mt-2">
                           <InputGroupAddon addonType="prepend">
                              <InputGroupText className="pr-2">
                                 <i className="fa fa-user" />
                              </InputGroupText>
                           </InputGroupAddon>
                           <Input placeholder="Username" />
                        </InputGroup>

                        <InputGroup>
                           <InputGroupAddon addonType="prepend">
                              <InputGroupText className="pr-2">
                                 <i className="fa fa-key" />
                              </InputGroupText>
                           </InputGroupAddon>
                           <Input placeholder="Password" type="password" />
                        </InputGroup>
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

export default LoginAccModalComponent;
