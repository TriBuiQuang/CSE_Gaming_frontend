/*!
 * Coded by Tri Bui Quang Copyright 2020
 */
import React from "react";
import ReactDatetime from "react-datetime";

// reactstrap components
import { Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, FormGroup, Modal, Button } from "reactstrap";
import classnames from "classnames";
//Component
import MiningReward from "./Component/MiningReward";
import Top from "./Component/Top";

class DashboardComponent extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         activeTab: "1",
      };
   }

   toggle = (tab) => {
      if (this.state.activeTab !== tab) this.setState({ activeTab: tab });
   };
   render() {
      const { isOpen, toggle } = this.props;
      const { activeTab } = this.state;
      return (
         <>
            <Modal isOpen={isOpen} toggle={toggle} size="xl">
               <div className="modal-body CSEGaming-Dashboard">
                  <Row>
                     <Col md="6">
                        <MiningReward />
                     </Col>
                     <Col className="hide">
                        <FormGroup>
                           <ReactDatetime
                              inputProps={{
                                 className: "form-control",
                                 placeholder: "Date Picker Here",
                              }}
                              timeFormat={false}
                           />
                        </FormGroup>
                     </Col>
                     <Col md="6">
                        <Nav tabs>
                           <NavItem>
                              <NavLink
                                 className={classnames({ active: activeTab === "1" })}
                                 onClick={() => {
                                    this.toggle("1");
                                 }}
                              >
                                 Peer
                              </NavLink>
                           </NavItem>
                           <NavItem>
                              <NavLink
                                 className={classnames({ active: activeTab === "2" })}
                                 onClick={() => {
                                    this.toggle("2");
                                 }}
                              >
                                 Pool
                              </NavLink>
                           </NavItem>
                           <NavItem>
                              <NavLink
                                 className={classnames({ active: activeTab === "3" })}
                                 onClick={() => {
                                    this.toggle("3");
                                 }}
                              >
                                 Affiliate
                              </NavLink>
                           </NavItem>
                           <FormGroup>
                              <ReactDatetime
                                 inputProps={{
                                    className: "form-control",
                                    placeholder: "Date Picker Here",
                                 }}
                                 timeFormat={false}
                              />
                           </FormGroup>
                        </Nav>

                        <TabContent activeTab={activeTab}>
                           <TabPane tabId="1">
                              <Row>
                                 <Col md="12">
                                    <Top title="Peer" />
                                 </Col>
                              </Row>
                           </TabPane>
                           <TabPane tabId="2">
                              <Top title="Pool" />
                           </TabPane>
                           <TabPane tabId="3">
                              <Top title="Affiliate" />
                           </TabPane>
                        </TabContent>
                     </Col>
                     <Col md="12">
                        <Button className="btn-round float-right  mr-2" color="danger" data-dismiss="modal" type="button" onClick={toggle}>
                           Closed
                        </Button>
                     </Col>
                  </Row>
               </div>
            </Modal>
         </>
      );
   }
}

export default DashboardComponent;
