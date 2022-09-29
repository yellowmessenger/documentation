---
title: WhatsApp 24hr Window Policy
sidebar_label : WhatsApp policy 
---


“In order to initiate a WhatsApp message to a person, you must first receive **opt-in permission** confirming that they wish to receive future messages from you on WhatsApp. The opt-in must (a) clearly state that the person is opting in to receive messages from you over WhatsApp and (b) clearly state your business’ name. You may **only initiate chats using an approved Message Template** (as defined in our documentation), subject to applicable pricing. Any Message Template must comply with our terms and these policies, and only be used for its designated purpose. We have the right to review, approve and reject any Message Template at any time.

If a person initiates a chat with you, you may continue that conversation via WhatsApp for up to 24 hours after the last message sent to you by that person without charge ("24-hour Window"). **Outside of the 24-hour window, you may only send messages via approved Message Templates**, for which we will charge the applicable rate.” - [WhatsApp](https://www.whatsapp.com/legal/business-policy/?lang=en)

The above rules state that,  

-   **One can only initiate a conversation with the end-user using a pre-approved Message template, provided they have opted-in** for your business service or reached out to you first   
-   **If the end-user initiates the chat** with your business first, then **no opt-ins are required**     
-   **For every message** from the end-user in a conversation, **a 24 hr window will open** during which the **business can send both normal & template messages for free.**    
-   **Post the expiry of 24hr window** from the last end-user message, the **business will not be able to respond to the end-user without using approved message templates.**

    
If you are not able to respond to the end user’s message within 24 hrs for reasons like the ticket taking time to resolve, ticket created outside working hours or during holidays, etc, then you would not be able to respond back to the end-user once the window is closed. In that case, you can still send out pre-approved message templates

### How to reinitiate the expired WhatsApp chats?

Once the 24hr window expires from the end user’s last message, Inbox would automatically remove the chatbox and show the following error callout

![<Whatsapp chat expired>](https://cdn.yellowmessenger.com/0FLnwl9mTOFF1643904544902.png)

  

Click on **Send Template** button and search for the appropriate template you’d want to send.
Click **Next** once you’ve selected the template

![Send WA template](https://cdn.yellowmessenger.com/aLue04XbbaL91643903648829.png)

  

**Map the variables/attachments** in the selected template, if applicable

![<Map variables>](https://cdn.yellowmessenger.com/3dQFDMC6EgfW1643903692320.png)

  

Preview the template message and click **Send**.

![<Preview>](https://cdn.yellowmessenger.com/ODIGuBQREBHP1643903753985.png)

  

Once the end-user replies back to the template message, the 24 hr window will be initiated post which you can interact and close the ticket.

![<img>](https://cdn.yellowmessenger.com/819eGvCJiOMk1643903788556.png)

### FAQs

 -   **What is the cost of sending WhatsApp templates?**  
    Whatsapp charges a per-message fee for all the templates sent outside the 24 hr session based on the number of messages & country you send to. For more information, [WhatsApp Pricing ](https://developers.facebook.com/docs/whatsapp/pricing/)
    
 -   **Why is my chatbox not visible even though I have sent the WA template?**  
      Just sending out the template message will not reinitiate the 24 hr window. The end-user has to reply back in the conversation.  
  
 -   **Why can’t I cannot attach my media to the template?**  
    You cannot change the type of media once the template is approved. Also, you can only send out the following types of media;
    Image - Jpeg or png format not more than 5MB.
      Video - mp4 video not more than 16MB
      Document - PDF
	
 - **Why am I not able to see any templates?**
      There are two reason why you are not able to see any WhatsApp templates within Inbox; (a) None of your templates are approved by WhatsApp yet. (b) You have not created any templates yet
	
 - **Why am I not able to see the template message content that I just sent?**
	 WhatsApp templates created with **[hsm](https://developers.facebook.com/docs/whatsapp/api/messages#hsm-object)** object will not be displayed with the actual content inside Inbox. However templates created with **[template](https://developers.facebook.com/docs/whatsapp/api/messages#template-object)** object will be displayed inside Inbox. So if you are not seeing the actual template content, then the template you sent out is most likely created with hsm object. 
	 
