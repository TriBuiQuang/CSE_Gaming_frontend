/*!
 * Coded by Tri Bui Quang Copyright 2020
 */
import React from "react";

// reactstrap components
import { Card, CardBody, Input, InputGroup, InputGroupAddon, InputGroupText, Button } from "reactstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import NotificationAlert from "react-notification-alert";

class CardUser extends React.Component {
   state = {
      value: "http://t.me/cse_miner_game_bot?start=ref_839241845",
      copied: false,
      passwordType: "password",
   };
   notify = (place) => {
      let options = {
         place: place,
         message: <div>Copied to clipboard</div>,
         type: "primary",
         icon: "nc-icon nc-bell-55",
         autoDismiss: 3,
      };
      this.refs.notificationAlert.notificationAlert(options);
   };
   copyToClipboard = () => {
      this.setState({ copied: true });
      this.notify("tr");
   };
   PasswordHide = () => {
      const { passwordType } = this.state;
      if (passwordType === "password") this.setState({ passwordType: "text" });
      else this.setState({ passwordType: "password" });
   };

   render() {
      const { passwordType } = this.state;
      return (
         <>
            <NotificationAlert ref="notificationAlert" />
            <Card className="">
               <CardBody>
                  <p className="pl-0 mb-0">Ref link</p>
                  <InputGroup>
                     <Input placeholder={this.state.value} disabled />
                     <InputGroupAddon addonType="append">
                        <CopyToClipboard text={this.state.value} onCopy={() => this.copyToClipboard()}>
                           <InputGroupText>Copy</InputGroupText>
                        </CopyToClipboard>
                     </InputGroupAddon>
                  </InputGroup>
               </CardBody>
            </Card>
            <Card className="">
               <CardBody>
                  <p className="mt-3 mb-0 pl-0">
                     Your Reward: <b className="color-sky">4.95036</b> CSE
                  </p>

                  <div className="button_responsive">
                     <Input placeholder="Wallet address" className="mb-3" />
                     <Input placeholder="Amount" className="mb-3" />
                     <InputGroup className="mb-3">
                        <Input type={passwordType} placeholder="Password" />
                        <InputGroupAddon addonType="append">
                           <InputGroupText className="pt-0 pb-0" onClick={this.PasswordHide}>
                              <i className="fa fa-eye" />
                           </InputGroupText>
                        </InputGroupAddon>
                     </InputGroup>

                     <Input placeholder="F2A" />
                     <div className=" text-center ">
                        <Button className="btn-round ">Transfer</Button>
                     </div>
                  </div>
               </CardBody>
            </Card>
         </>
      );
   }
}

export default CardUser;
