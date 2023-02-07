---
title : Generic Webhook
sidebar_label : Generic Channel Integration
---

Below are the steps for integrating any Channel with Yellow.ai Bots via Webhook.

## Instructions
### Steps for Integrations : 

1. Steps for setting the route for Webhook in Controller.
    a. In the Webhook send the channel access token as a param.
    b. Check the message signature if the channel support that (Optional).
    c. Check if the reply is to be send in the same response (Async or Sync Calls).

2. Open the Messaging API for the channel and figure out the message types you can support .

3. Write the Routes for the different message types in the Controller.

4. When you will get a event in the webhook route you will get a token which will be used for the sending the reply so store it in the message data.

5. Do the necessary changes for the different message types in executor for the sending the reply back(In the message object store the channel access token and reply token(It can sender id or reply token or something else.

6. Test all the message types supported before pushing the changes.  

7. For quick Replies and Cards  check the number of actions or cards limit and send the reply accordingly.

>**Message Types to Check**
>1. Text Message
>2. Image Message 
>3. Video Message
>4. Audio Message
>5. Cards(Carousel) Message 
>6. Quick Replies
>7. WebView (Only supported in Yellow.ai)