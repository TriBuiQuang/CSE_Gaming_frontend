/*!
 * Coded by Tri Bui Quang Copyright 2020
 */
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Table } from "reactstrap";

class DashboardTopComponent extends React.Component {
   render() {
      const { title } = this.props;
      return (
         <Card>
            <CardHeader>
               <CardTitle tag="h4" className="mt-0">
                  Top {title}
               </CardTitle>
            </CardHeader>
            <CardBody>
               <Table responsive striped>
                  <thead className="text-primary">
                     <tr>
                        <th className="text-center">#</th>
                        <th>Name</th>
                        <th className="text-center">Played</th>
                        <th className="text-right">Max Score</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td className="text-center">1</td>
                        <td>Andrew Mike</td>
                        <td className="text-center">9</td>
                        <td className="text-right">57710</td>
                     </tr>
                     <tr>
                        <td className="text-center">2</td>
                        <td>Andrew Mike</td>
                        <td className="text-center">9</td>
                        <td className="text-right">57710</td>
                     </tr>
                     <tr>
                        <td className="text-center">3</td>
                        <td>Andrew Mike</td>
                        <td className="text-center">9</td>
                        <td className="text-right">57710</td>
                     </tr>
                     <tr>
                        <td className="text-center">4</td>
                        <td>Andrew Mike</td>
                        <td className="text-center">9</td>
                        <td className="text-right">57710</td>
                     </tr>
                     <tr>
                        <td className="text-center">5</td>
                        <td>Andrew Mike</td>
                        <td className="text-center">9</td>
                        <td className="text-right">57710</td>
                     </tr>
                     <tr>
                        <td className="text-center">6</td>
                        <td>Andrew Mike</td>
                        <td className="text-center">9</td>
                        <td className="text-right">57710</td>
                     </tr>
                     <tr>
                        <td className="text-center">7</td>
                        <td>Andrew Mike</td>
                        <td className="text-center">9</td>
                        <td className="text-right">57710</td>
                     </tr>
                     <tr>
                        <td className="text-center">8</td>
                        <td>Andrew Mike</td>
                        <td className="text-center">9</td>
                        <td className="text-right">57710</td>
                     </tr>
                     <tr>
                        <td className="text-center">9</td>
                        <td>Andrew Mike</td>
                        <td className="text-center">9</td>
                        <td className="text-right">57710</td>
                     </tr>
                     <tr>
                        <td className="text-center">10</td>
                        <td>Andrew Mike</td>
                        <td className="text-center">9</td>
                        <td className="text-right">57710</td>
                     </tr>
                  </tbody>
               </Table>
            </CardBody>
         </Card>
      );
   }
}

export default DashboardTopComponent;
