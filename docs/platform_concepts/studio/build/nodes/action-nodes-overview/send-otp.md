---
title: Send OTP
sidebar_label: Send OTP
---

Send OTP node is used to send a one-time password (OTP) via SMS to users within a conversational flow. You can use this node for authentication and verification processes, such as during sign-up, login, or when authorizing transactions.

You can use the OTP node in the following scenarios:

* **Login Verification:** Send an OTP to confirm a user’s identity during the login process.
* **Transaction Authentication:** Validate high-value purchases or transfers by sending an OTP to the user.
* **User Registration:** Verify mobile numbers during sign-up by sending an OTP.
* **Password Reset:** Confirm a user’s identity with an OTP before allowing a password reset.

### Configure Send OTP node

Let's say you want to build a sample flow that collects user information such as name, phone number, and Email and want to verify the phone number with OTP.

To configure the Send OTP node, follow these steps:

1. Drag and drop the Send OTP Node in the workflow where user verification is needed.

   ![](https://i.imgur.com/DqQzo9Q.png)
 
2. Choose the variable to store the user's mobile number. This could either be a dynamic value received from the user input (for example, through a "Phone number" node) or a value fetched from a database.

     ![](https://imgur.com/CaVI0i9.png)
     
Refer to the following gif to see how the Send OTP node works.

   ![](https://imgur.com/Cw6pzMN.gif)

#### Limitations of Send OTP node

* This node only supports the Yellow Messenger channel and does not support WhatsApp channel. This means that users on WhatsApp cannot receive OTPs using this node, and you need to use an alternative mechanism for such cases.
* This node is supported only for Indian phone numbers. (need to verify).
