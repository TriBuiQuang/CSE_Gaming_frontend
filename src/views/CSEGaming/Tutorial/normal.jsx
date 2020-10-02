/*!
 * Coded by Tri Bui Quang Copyright 2020
 */
import React from "react";

// reactstrap components

//imgage
import step1_1 from "assets/img/CSEGaming/step1_1.png";
import step1_2 from "assets/img/CSEGaming/step1_2.png";
import step1_3 from "assets/img/CSEGaming/step1_3.png";
import step2 from "assets/img/CSEGaming/step2.png";
import step3 from "assets/img/CSEGaming/step3.png";
import step4 from "assets/img/CSEGaming/step4.png";

class TutorialComponent extends React.Component {
   render() {
      return (
         <>
            <p>
               Hi, your shop wallet is <b>2460</b> point You should read below steps to know how to deposit CSE to the Shop.
            </p>
            <p>
               Our policy: <b>1 CSE</b> =<b>10.000</b> points
            </p>
            <h4 className="font-weight-bold">Step 1. Press Shop button as below red marked image</h4>
            <img src={step1_1} alt="step1-1" id="step1" className="mb-3" />
            <p className="mt-2">- You will see Shop window as below</p>
            <img src={step1_2} alt="step1-2" id="step1_2" className="mb-3" />
            <p>
               [1]: It is your current shop points (SP). Once you transfered CSE to Shop, system will increase point of SP, current policy 1 x CSE
               &rarr; 10k points
            </p>
            <p>[2]: Deposit button, if you want to transfer CSE to SP then press this button</p>
            <p>
               [3]: Shop area, which displays some energy things for mining to increase score, you should to choose appropriately things with your
               strategy
            </p>
            <p>
               [4]: Game buttons area, you should press <img src={step1_3} alt="step1-3" id="step1_3" /> button to continue to play game after buy
               Energy thing, system will minus point of Energy thing in SP
            </p>
            <h4 className="font-weight-bold">Step 2. Deposit CSE to Shop</h4>
            <p>
               - After you pressed "Deposit" button, you will see short guide to do "deposit CSE to the Shop" as below image, and then scan QR code or
               click “Copy" button to copy CSE wallet that you need to send to it
            </p>
            <img src={step2} alt="step2" id="step2" />
            <h4 className="font-weight-bold">
               Step 3. Login to the <a href="https://csewallet.io">https://csewallet.io</a> or sign up at{" "}
               <a href="https://csewallet.io/signup">https://csewallet.io/signup</a>
            </h4>
            <div>
               <img src={step3} alt="step3" id="step3" />
            </div>
            <h4 className="font-weight-bold">Step 4. Send CSE to Shop wallet</h4>
            <img src={step4} alt="step4" id="step4" className="mb-3" />

            <p>- Paste “copied cse wallet" from step 2 to the square marked [1]</p>
            <p>- Input amount of CSE to send to the square marked [2]</p>
            <p>- Input 2FA code to the square marked [3]</p>
            <p>- Click “Send Now" to send</p>
            <h4 className="font-weight-bold">Step 5. Finish</h4>
            <p>- You need to wait for minimum in 10s, system will update points of SP on the game</p>
            <p>- Congratulate to you have the opportunity to be Top 10 CSE Miner!</p>
         </>
      );
   }
}

export default TutorialComponent;
