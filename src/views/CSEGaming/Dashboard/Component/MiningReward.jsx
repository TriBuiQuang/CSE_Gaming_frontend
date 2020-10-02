/*!
 * Coded by Tri Bui Quang Copyright 2020
 */
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Table } from "reactstrap";

class DashboardMiningRewardComponent extends React.Component {
   render() {
      return (
         <Card>
            <CardHeader>
               <CardTitle tag="h4" className="mt-0">
                  Mining Reward
               </CardTitle>
            </CardHeader>
            <CardBody>
               <Table responsive striped>
                  <thead className="text-primary">
                     <tr>
                        <th className="text-center">CSE</th>
                        <th>Event</th>
                        <th>Time</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td className="text-center">0.84</td>
                        <td>Reward for F0 of Peer who reached top 4</td>
                        <td>2020-09-18 00:00</td>
                     </tr>
                     <tr>
                        <td className="text-center">1.434</td>
                        <td>Reward for F0 of player deposit CSE</td>
                        <td>2020-09-11 10:09</td>
                     </tr>
                     <tr>
                        <td className="text-center">1.434</td>
                        <td>Reward for F0 of player deposit CSE</td>
                        <td>2020-09-11 10:09</td>
                     </tr>
                     <tr>
                        <td className="text-center">1.434</td>
                        <td>Reward for F0 of player deposit CSE</td>
                        <td>2020-09-11 10:09</td>
                     </tr>
                     <tr>
                        <td className="text-center">1.434</td>
                        <td>Reward for F0 of player deposit CSE</td>
                        <td>2020-09-11 10:09</td>
                     </tr>
                  </tbody>
               </Table>
            </CardBody>
         </Card>
      );
   }
}

export default DashboardMiningRewardComponent;
