/*!
 * Coded by Tri Bui Quang Copyright 2020
 */
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Table } from "reactstrap";

class IntroduceUser extends React.Component {
   render() {
      const { title, data } = this.props;
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
                  <td>{data[index].played}</td>
                  <td>{data[index].score}</td>
               </tr>
            ))
         );
      //main component
      return (
         <Card>
            <CardHeader>
               <CardTitle tag="h4" className="mt-0">
                  {title}
               </CardTitle>
            </CardHeader>
            <CardBody>
               <Table responsive striped>
                  <thead className="text-primary">
                     <tr>
                        <th className="text-center">#</th>
                        <th className="text-center">Name</th>
                        <th>Played</th>
                        <th>Max score</th>
                     </tr>
                  </thead>
                  <tbody>{listItems}</tbody>
               </Table>
            </CardBody>
         </Card>
      );
   }
}

export default IntroduceUser;
