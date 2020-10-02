/*!
 * Coded by Tri Bui Quang Copyright 2020
 */
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col, Modal, Button } from "reactstrap";

class TransferHistory extends React.Component {
   state = {
      data: [
         {
            cse: 1,
            status: "Success",
            time: "2020-09-13 18:46",
            description: "Deposit Shop",
            icon: "fa fa-sign-in",
         },
         {
            cse: 1,
            status: "Success",
            time: "2020-09-13 18:46",
            description: "Deposit Shop",
            icon: "fa fa-sign-in",
         },
         {
            cse: 10,
            status: "Success",
            time: "2020-09-03 13:58",
            description: "Transfer",
            icon: "fa fa-sign-out",
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
                  <td className="text-center">{data[index].cse}</td>
                  <td className="text-center">
                     <i className={data[index].icon} />
                  </td>
                  <td>{data[index].description}</td>
                  <td>{data[index].time}</td>
                  <td>{data[index].status}</td>
               </tr>
            ))
         );
      //main component
      return (
         <Modal isOpen={isOpen} toggle={toggle} size="xl">
            <div className="modal-body ">
               <Row>
                  <Col>
                     <Card>
                        <CardHeader>
                           <CardTitle tag="h4" className="mt-0">
                              Transfer History
                           </CardTitle>
                        </CardHeader>
                        <CardBody>
                           <Table responsive striped>
                              <thead className="text-primary">
                                 <tr>
                                    <th className="text-center">CSE</th>
                                    <th className="text-center">Type</th>
                                    <th>Description</th>
                                    <th>Time</th>
                                    <th>Status</th>
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

export default TransferHistory;
