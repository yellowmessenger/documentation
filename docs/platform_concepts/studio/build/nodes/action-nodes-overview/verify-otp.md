---
title: Verify OTP node
sidebar_label: Verify OTP
---

Verify OTP node is used to send a one-time password (OTP) via SMS to users within a conversational flow.

You can use this node to confirm the One-Time Password (OTP) that has been sent to bot users during the conversation.

You can use this node to verify the identity of a user during account creation, password resets, or completing secure transactions. By using this node, businesses can prevent unauthorized access, fraud, and other security risks.

**Use case**:

* **Password reset**: When a user requests to reset their password, the bot sends an OTP to their registered phone or email. The Verify OTP node verifies the entered OTP to ensure the user is authorized to reset the password.
* **Transaction approval**: For secure transactions, the bot sends an OTP to the user’s registered contact.
The Verify OTP node confirms the OTP before proceeding with the transaction.
* **Two-Factor Authentication (2FA)**: During login, the bot sends an OTP as part of the two-factor authentication process. The Verify OTP node checks the OTP to verify the user's identity before granting access.

**Configure Verify OTP node**

To configure Verify OTP node, follow these steps:

1. Add a [prompt node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) to get the OTP to this phone number and store that in a variable.

   <img src="https://imgur.com/pAhI2pp.png" alt="drawing" width="80%"/>
   
2. Add [Send OTP](#) node and select the variable (for example, userPhoneNumber) where the phone number is stored.

     ![](https://imgur.com/QYW6AZm.png)
     
* This node will send an OTP to the phone number provided by the user.
     
3. Add another prompt node to ask the user to enter the OTP they received. Store the entered OTP in a variable (for example,userEnteredOTP).

    <img src="https://imgur.com/1y5cLoA.png" alt="drawing" width="80%"/>

2. Add **Verify OTP** node.

     * **OTP variable**: Choose the variable that stores the otp input.
     * **Store response in**: Select or create a variable to store the verification result.

    ![](https://imgur.com/4E4E2Xh.png)

3. Add a [text node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes1/text-node) to **Success** and **Fallback**. Success indicates that verification of the otp is successful (for example, "Your OTP has been successfully verified"). Fallback indicates that the verification has failed (for example, "The OTP verification failed. Please try again").
   
   <img src="https://imgur.com/jt5Tm6d.png" alt="drawing" width="80%"/>


Refer to the following GIF to see how the verify OTP node works.

   ![](https://imgur.com/x3FEDAw.gif)

**Limitation**

* This node is not supported for WhatsApp channel.
* OTP expires after a certain time (for example, 5 minutes). If the user does not enter the OTP within that time, it will no longer be valid, and a new one will need to be sent.