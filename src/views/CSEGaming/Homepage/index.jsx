/*!
 * Coded by Tri Bui Quang Copyright 2020
 */
import React from "react";
import { Container, Row } from "reactstrap";

class TutorialComponent extends React.Component {
   componentDidMount() {
      document.body.classList.toggle("login-page");
   }
   componentWillUnmount() {
      document.body.classList.toggle("login-page");
   }
   render() {
      return (
         <Container fluid className="fullpage-scroll">
            <Row></Row>
         </Container>
      );
   }
}

export default TutorialComponent;
