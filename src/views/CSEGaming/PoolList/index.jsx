/*!
 * Coded by Tri Bui Quang Copyright 2020
 */
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col, Modal, Button } from "reactstrap";

class PoolListComponent extends React.Component {
   state = {
      data: [
         {
            name: "Dev Team",
            owner: "Thuận Phan",
            score: "148800",
            member: 3,
         },
      ],
   };
   render() {
      const { isOpen, toggle } = this.props;
      const { data } = this.state;
      //list component
      const listItems =
         data && data.length === 0 ? (
            <tr key={1}>
               <td className="text-center" colSpan="6">
                  Not available!
               </td>
            </tr>
         ) : (
            data.map((todo, index) => (
               <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{data[index].name}</td>
                  <td>{data[index].owner}</td>
                  <td>{data[index].score}</td>
                  <td>{data[index].member}</td>
               </tr>
            ))
         );
      //main component
      return (
         <Modal isOpen={isOpen} toggle={toggle} size="xl">
            <div className="modal-body ">
               <Row>
                  <Col md="12">
                     <Card>
                        <CardHeader>
                           <CardTitle tag="h4" className="mt-0">
                              How to register pool?
                           </CardTitle>
                        </CardHeader>
                        <CardBody>
                           <p>Step 1. Create telegram group</p>

                           <p>
                              Step 2. Add game bot into group: <b>@cse_miner_game_bot</b>
                           </p>

                           <p>Step 3. Member of group may press play button to join the game</p>

                           <p>Step 4. Continue to press play button on chatbot box</p>

                           <p>Step 5. Read Terms and Agreement and begin to Play</p>
                        </CardBody>
                     </Card>
                  </Col>
                  <Col>
                     <Card>
                        <CardHeader>
                           <CardTitle tag="h4" className="mt-0">
                              Pool list
                           </CardTitle>
                        </CardHeader>
                        <CardBody>
                           <Table responsive striped>
                              <thead className="text-primary">
                                 <tr>
                                    <th className="text-center">#</th>
                                    <th className="text-center">Name</th>
                                    <th>Owner</th>
                                    <th>Score</th>
                                    <th>Members</th>
                                 </tr>
                              </thead>
                              <tbody>{listItems}</tbody>
                           </Table>
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

export default PoolListComponent;
