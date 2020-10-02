/*!
 * Coded by Tri Bui Quang Copyright 2020
 */
import React from "react";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

// reactstrap components
import { Collapse, NavbarBrand, Navbar, NavItem, Nav, Container } from "reactstrap";
import ModalDashboard from "views/CSEGaming/Dashboard";
import ModalPoolList from "views/CSEGaming/PoolList";
import ModalProfile from "views/CSEGaming/Profile";
import ModalTransferHistory from "views/CSEGaming/TransferHistory";
import ModalTutorial from "views/CSEGaming/Tutorial";
import ModalDeposit from "views/CSEGaming/Tutorial/Component/modal";
import ModalDepositNoti from "views/CSEGaming/Modal/DepositNotiModal";
import BuyNotiModal from "views/CSEGaming/Modal/BuyNotiModal";
import DiamondModal from "views/CSEGaming/Modal/DiamondModal";
import AlertModal from "views/CSEGaming/Modal/AlertModal";
import LoginAccModal from "views/CSEGaming/Modal/LoginAccModal";
import LoginModal from "views/CSEGaming/Modal/LoginModal";
import ErrorModal from "views/CSEGaming/Modal/ErrorModal";

class AuthNavbar extends React.Component {
   //#region constructor
   constructor(props) {
      super(props);
      this.state = {
         collapseOpen: false,
         color: "navbar-transparent",
         modalDashboard: false,
         modalProfile: false,
         modalPoolList: false,
         modalTransferHistory: false,
         modalTutorial: true,
         modalDeposit: false,
         modalDepositNoti: false,
         modalBuyNoti: false,
         modalDiamond: false,
         modalAlert: false,
         modalLoginAcc: false,
         modalLogin: false,
         modalError: false,
      };
   }

   componentDidMount() {
      window.addEventListener("resize", this.updateColor);
   }
   // this function opens and closes the collapse on small devices
   // it also adds navbar-transparent class to the navbar when closed
   // ad bg-white when opened
   toggleCollapse = () => {
      let newState = {
         collapseOpen: !this.state.collapseOpen,
      };
      if (!this.state.collapseOpen) {
         newState["color"] = "bg-white";
      } else {
         newState["color"] = "navbar-transparent";
      }
      this.setState(newState);
   };
   //#endregion

   //customize
   //#region toogle
   toggleModalDashboard = () => {
      this.setState({
         modalDashboard: !this.state.modalDashboard,
      });
   };
   toggleModalProfile = () => {
      this.setState({
         modalProfile: !this.state.modalProfile,
      });
   };
   toggleModalPoolList = () => {
      this.setState({
         modalPoolList: !this.state.modalPoolList,
      });
   };
   toggleModalTransferHistory = () => {
      this.setState({
         modalTransferHistory: !this.state.modalTransferHistory,
      });
   };
   toggleModalTutorial = () => {
      this.setState({
         modalTutorial: !this.state.modalTutorial,
      });
      if (this.state.modalDiamond === false) this.toggleDiamond();
   };
   toggleDeposit = () => {
      this.setState({
         modalDeposit: !this.state.modalDeposit,
      });
      if (this.state.modalTutorial === true) this.toggleModalTutorial();
   };

   toggleDepositNoti = () => {
      this.setState({
         modalDepositNoti: !this.state.modalDepositNoti,
      });
   };
   toggleBuyNoti = () => {
      this.setState({
         modalBuyNoti: !this.state.modalBuyNoti,
      });
   };
   toggleDiamond = () => {
      this.setState({
         modalDiamond: !this.state.modalDiamond,
      });
   };
   toggleAlert = () => {
      this.setState({
         modalAlert: !this.state.modalAlert,
      });
   };
   toggleLoginAcc = () => {
      this.setState({
         modalLoginAcc: !this.state.modalLoginAcc,
      });
   };
   toggleLogin = () => {
      this.setState({
         modalLogin: !this.state.modalLogin,
      });
   };
   toggleError = () => {
      this.setState({
         modalError: !this.state.modalError,
      });
   };
   //#endregion

   render() {
      return (
         <>
            <Navbar className={classnames("navbar-absolute fixed-top", this.state.color)} expand="lg">
               <Container>
                  <div className="navbar-wrapper">
                     <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
                        CSE Mining
                     </NavbarBrand>
                  </div>
                  <button
                     aria-controls="navigation-index"
                     aria-expanded={false}
                     aria-label="Toggle navigation"
                     className="navbar-toggler"
                     data-toggle="collapse"
                     type="button"
                     onClick={this.toggleCollapse}
                  >
                     <span className="navbar-toggler-bar navbar-kebab" />
                     <span className="navbar-toggler-bar navbar-kebab" />
                     <span className="navbar-toggler-bar navbar-kebab" />
                  </button>

                  <Collapse isOpen={this.state.collapseOpen} className="justify-content-end" navbar>
                     <Nav navbar>
                        <NavItem>
                           <NavLink to="#" className="nav-link" onClick={this.toggleModalDashboard}>
                              Dashboard
                           </NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink to="#" className="nav-link" onClick={this.toggleModalProfile}>
                              Profile
                           </NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink to="#" className="nav-link" onClick={this.toggleModalPoolList}>
                              Pool list
                           </NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink to="#" className="nav-link" onClick={this.toggleModalTransferHistory}>
                              Transfer history
                           </NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink to="#" className="nav-link" onClick={this.toggleModalTutorial}>
                              Deposit to shop
                           </NavLink>
                        </NavItem>
                     </Nav>
                  </Collapse>
               </Container>
            </Navbar>

            <ModalDashboard isOpen={this.state.modalDashboard} toggle={this.toggleModalDashboard} />
            <ModalPoolList isOpen={this.state.modalPoolList} toggle={this.toggleModalPoolList} />
            <ModalProfile isOpen={this.state.modalProfile} toggle={this.toggleModalProfile} />
            <ModalTransferHistory isOpen={this.state.modalTransferHistory} toggle={this.toggleModalTransferHistory} />
            <ModalTutorial isOpen={this.state.modalTutorial} toggle={this.toggleModalTutorial} toggleDeposit={this.toggleDeposit} />
            <ModalDeposit isOpen={this.state.modalDeposit} toggle={this.toggleDeposit} />
            <ModalDepositNoti isOpen={this.state.modalDepositNoti} toggle={this.toggleDepositNoti} toggleDeposit={this.toggleDeposit} />
            <BuyNotiModal isOpen={this.state.modalBuyNoti} toggle={this.toggleBuyNoti} />
            <DiamondModal isOpen={this.state.modalDiamond} toggle={this.toggleDiamond} />
            <AlertModal isOpen={this.state.modalAlert} toggle={this.toggleAlert} />
            <LoginAccModal isOpen={this.state.modalLoginAcc} toggle={this.toggleLoginAcc} />
            <LoginModal isOpen={this.state.modalLogin} toggle={this.toggleLogin} />
            <ErrorModal isOpen={this.state.modalError} toggle={this.toggleError} />
         </>
      );
   }
}

export default AuthNavbar;
