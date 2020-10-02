/*!
 * Coded by Tri Bui Quang Copyright 2020
 */
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow";
// reactstrap components
import { Row } from "reactstrap";

//imgage
import step1_1 from "assets/img/CSEGaming/step1_1.png";
import step1_2 from "assets/img/CSEGaming/step1_2.png";
import step1_3 from "assets/img/CSEGaming/step1_3.png";
import step2 from "assets/img/CSEGaming/step2.png";
import step3 from "assets/img/CSEGaming/step3.png";
import step4 from "assets/img/CSEGaming/step4.png";

class TutorialFullPageComponent extends React.Component {
   onLeave(origin, destination, direction) {
      console.log("Leaving section " + origin.index);
   }
   afterLoad(origin, destination, direction) {
      console.log("After load: " + destination.index);
   }
   render() {
      return (
         <Row>
            <ReactFullpage
               scrollOverflow={true}
               navigation={true}
               controlArrows={false}
               slidesNavigation={true}
               sectionsColor={["#0a1626", "#0d2334", "#0a1626", "#0d2334", "#0a1626", "#0d2334"]}
               onLeave={this.onLeave.bind(this)}
               afterLoad={this.afterLoad.bind(this)}
               render={({ state, fullpageApi }) => {
                  return (
                     <div id="fullpage-wrapper">
                        <div className="section section1 ">
                           <h2 className="text-center">Tutorial</h2>
                           <p>
                              Hi, your shop wallet is <b>2460</b> point You should read below steps to know how to deposit CSE to the Shop.
                           </p>
                           <p>
                              Our policy: <b>1 CSE</b> =<b>10.000</b> points
                           </p>
                        </div>
                        <div className="section">
                           <div className="slide ">
                              <h4>Step 1. Press Shop button as below red marked image</h4>
                              <img src={step1_1} alt="step1-1" />
                              <p className="mt-2">- You will see Shop window as on the right</p>
                           </div>
                           <div className="slide">
                              <img src={step1_2} alt="step1-2" />
                           </div>
                           <div className="slide">
                              <p>
                                 [1]: It is your current shop points (SP). Once you transfered CSE to Shop, system will increase point of SP, current
                                 policy 1 x CSE &rarr; 10k points
                              </p>
                              <p>[2]: Deposit button, if you want to transfer CSE to SP then press this button</p>
                              <p>
                                 [3]: Shop area, which displays some energy things for mining to increase score, you should to choose appropriately
                                 things with your strategy
                              </p>
                              <p>
                                 [4]: Game buttons area, you should press <img src={step1_3} alt="step1-3" style={{ display: "initial" }} /> button to
                                 continue to play game after buy Energy thing, system will minus point of Energy thing in SP
                              </p>
                           </div>
                        </div>
                        <div className="section">
                           <h4>Step 2. Deposit CSE to Shop</h4>
                           <p>
                              - After you pressed "Deposit" button, you will see short guide to do "deposit CSE to the Shop" as below image, and then
                              scan QR code or click “Copy" button to copy CSE wallet that you need to send to it
                           </p>
                           <img src={step2} alt="step2" />
                        </div>
                        <div className="section">
                           <div className="slide">
                              <h4>
                                 Step 3. Login to the <a href="https://csewallet.io">https://csewallet.io</a> or sign up at{" "}
                                 <a href="https://csewallet.io/signup">https://csewallet.io/signup</a>
                              </h4>
                           </div>
                           <div className="slide">
                              <img src={step3} alt="step3" style={{ height: "74%" }} />
                           </div>
                        </div>
                        <div className="section">
                           <div className="slide">
                              <h4>Step 4. Send CSE to Shop wallet</h4>
                              <img src={step4} alt="step4" style={{ height: "60%" }} />
                           </div>
                           <div className="slide">
                              <p>- Paste “copied cse wallet" from step 2 to the square marked [1]</p>
                              <p>- Input amount of CSE to send to the square marked [2]</p>
                              <p>- Input 2FA code to the square marked [3]</p>
                              <p>- Click “Send Now" to send</p>
                           </div>
                        </div>
                        <div className="section">
                           <h4>Step 5. Finish</h4>
                           <p>- You need to wait for minimum in 10s, system will update points of SP on the game</p>
                           <p>- Congratulate to you have the opportunity to be Top 10 CSE Miner!</p>
                        </div>
                     </div>
                  );
               }}
            />
         </Row>
      );
   }
}

export default TutorialFullPageComponent;
