---
title: WhatsApp 24hr Window Policy
sidebar_label : WhatsApp policy 
---

In this article, you will learn: 

1. [What is the WhatsApp Business Policy for Inbox?](#policy)
2. [How to reinitiate expired WhatsApp chats?](#expchats)
3. [FAQ](#faq).

“In order to initiate a WhatsApp message to a person, you must first receive **opt-in permission** confirming that they wish to receive future messages from you on WhatsApp. The opt-in must clearly state the below conditions: 
-  State that the person is opting in to receive messages from you over WhatsApp.
- State the business’ name. You may **only initiate chats using an approved Message Template** (as defined in our documentation), subject to applicable pricing. Any Message Template must comply with our terms and policies, and only be used for its designated purpose. We have the right to review, approve and reject any Message Template at any time.

:::note
If a person initiates a chat with you, you may continue that conversation via WhatsApp for up to 24 hours after the last message was sent to you by that person- without any charge (24-hour Window). 
**Outside the 24-hour window, you may only send messages via approved Message Templates**, for which you will be charged with the applicable rate. 
> Learn more about the [WhatsApp Business Policy](https://www.whatsapp.com/legal/business-policy/?lang=en).  
 
:::

<a name="policy"></a>  WhatsApp Business Policy is summarized below:    

1. **One can only initiate a conversation with the end-user using a pre-approved Message template, provided they have opted-in** for your business service or reached out to you first   
2. **If the end-user initiates the chat** with your business first, then **no opt-ins are required**     
3. **For every message** from the end-user in a conversation, **a 24 hr window will open** during which the **business can send both normal & template messages for free.**    
4. **Post the expiry of 24hr window** from the last end-user message, the **business will not be able to respond to the end-user without using approved message templates.**

:::info    
If you are not able to respond to the end user’s message within 24 hrs (if the ticket is taking too long to resolve, the ticket is created outside working hours or during holidays, etc.) you will not be able to respond to the end-user once the window is closed. 
In that case, you can send out the pre-approved message templates.
:::

## <a name="expchats"></a> 1. Reinitiating expired WhatsApp chats

To reinitiate the expired WhatsApp chats, follow the given steps: 

1. Once the 24hr window expires from the end user’s last message, Inbox would automatically remove the chatbox and show the following error callout.

<img src="https://i.imgur.com/pVKcpx1.jpg" alt="drawing" width="60%"/>  


2. Click **Send Template** and search for the appropriate template you want to send. Click **Next** once you’ve selected the template.

<img src="https://i.imgur.com/7kKgk3l.png" alt="drawing" width="60%"/>
  

3. **Map the variables/attachments** in the selected template (if applicable).

<img src="https://i.imgur.com/AmNhyzP.png" alt="drawing" width="60%"/>

  
4. Preview the template message and click **Send**.  

<img src="https://i.imgur.com/GYmYHyW.png" alt="drawing" width="60%"/>    

5. Once the end-user replies back to the template message, the 24 hr window will be initiated (after which you can interact and close the ticket).    

<img src="https://i.imgur.com/qyhUsRy.png" alt="drawing" width="60%"/>


-----

## <a name="faq"></a>  2. FAQs

 1. **What is the cost of sending WhatsApp templates?**  
    Whatsapp charges a per-message fee for all the templates sent outside the 24 hr session based on the number of messages & country you send to. For more information, click [here](https://developers.facebook.com/docs/whatsapp/pricing/).  
      
 2. **Why is my chatbox not visible even though I have sent the WA template?**  
      Just sending out the template message will not reinitiate the 24 hr window. The end-user has to reply back in the conversation.    
    
 3. **Why can’t I cannot attach my media to the template?**  
    You cannot change the type of media once the template is approved. Also, you can only send out the following types of media:  
    - **Image** - Jpeg or png format not more than 5MB.
    - **Video** - MP4 video not more than 16MB.
    - **Document** - PDF.  
	  
4. **Why am I not able to see any templates?**
      There are two reasons why you are not able to see any WhatsApp templates within your  Inbox:
      - None of your templates are approved by WhatsApp yet.
      - You have not created any templates yet.  
	  
5. **Why am I not able to see the template message content that I just sent?**
     WhatsApp templates created with [hsm](https://developers.facebook.com/docs/whatsapp/api/messages#hsm-object) object will not be displayed with the actual content inside Inbox. However templates created with [template](https://developers.facebook.com/docs/whatsapp/api/messages#template-object) object will be displayed inside Inbox. If you are not seeing the actual template content, then the template you sent out is most likely created with hsm object. 
	 
