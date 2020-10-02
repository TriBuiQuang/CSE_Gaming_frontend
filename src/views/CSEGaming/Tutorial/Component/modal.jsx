/*!
 * Coded by Tri Bui Quang Copyright 2020
 */
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import QRCode from "qrcode.react";
// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Modal, Button, Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";

class ModalTutorial extends React.Component {
   state = {
      value: "CSE4281DB24DE483CB9C3CEEA3",
   };
   render() {
      const { isOpen, toggle } = this.props;
      //main component
      return (
         <Modal isOpen={isOpen} toggle={toggle} size="md">
            <div className="modal-body ">
               <Row>
                  <Col>
                     <Card>
                        <CardHeader>
                           <CardTitle tag="h4" className="mt-0">
                              Deposit
                           </CardTitle>
                        </CardHeader>
                        <CardBody>
                           <p className="ml-0 pl-0">Step 1. Transfer CSE to wallet</p>
                           <Col md="12" className="text-center mb-3">
                              <QRCode value={this.state.value} />
                           </Col>

                           <InputGroup>
                              <Input placeholder={this.state.value} disabled />
                              <InputGroupAddon addonType="append">
                                 <CopyToClipboard text={this.state.value} onCopy={() => this.copyToClipboard()}>
                                    <InputGroupText>Copy</InputGroupText>
                                 </CopyToClipboard>
                              </InputGroupAddon>
                           </InputGroup>
                           <p className="ml-0 pl-0">Step 2. Wait about 10 seconds and your shop wallet will update</p>
                        </CardBody>
                     </Card>
                  </Col>
                  <Col md="12">
                     <Button className="btn-round float-right  mr-2" color="danger" data-dismiss="modal" type="button" onClick={toggle}>
                        Closed
                     </Button>
                  </Col>
               </Row>
            </div>
         </Modal>
      );
   }
}

export default ModalTutorial;
