/*!
 * Coded by Tri Bui Quang Copyright 2020
 */
import React from "react";

// reactstrap components
import { Row, Col, Modal, Button } from "reactstrap";
import CardUser from "./Component/CardUser";
import IntroduceUser from "./Component/IntroduceUser";
import PoolList from "./Component/PoolList";

class UserCSEProfile extends React.Component {
   state = {
      IntroduceData: [
         {
            name: "Tien Nguyen",
            played: 33,
            score: 92500,
         },
         {
            name: "Victor",
            played: 28,
            score: 21680,
         },
         {
            name: "Py Trần’s",
            played: 10,
            score: 3315,
         },
      ],
      FatherData: [],
   };
   render() {
      const { isOpen, toggle } = this.props;
      return (
         <Modal isOpen={isOpen} toggle={toggle} size="xl">
            <div className="modal-body CSEGaming-Profile">
               <Row>
                  <Col md="4">
                     <PoolList />
                  </Col>
                  <Col md="8">
                     <CardUser />
                  </Col>
                  <Col md="12">
                     <IntroduceUser title="Who referred you (Your F0)" data={this.state.FatherData} />
                     <IntroduceUser title="Members whom you introduced" data={this.state.IntroduceData} />
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

export default UserCSEProfile;
