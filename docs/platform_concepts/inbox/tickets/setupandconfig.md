---
title:  Setup and configuration of email tickets on inbox 
sidebar_label : Setup and configuration 
---

This article explains how to set up inbox configuration to process email tickets without having to write any code.          
Once this configuration is complete, any emails sent to the support email will be converted into tickets and will be available on the **Tickets** page which will be automatically assigned to an inbox agent for resolution.

There are three steps to be followed in the given order: 
1. [Create an email channel(email ID)](#1)
2. [Link  email channel to Inbox (with forwarding address)](#22)
3. [Enable email ticketing from settings](#2)



## <a name="1"></a>  1. Set up Email channel  


Configure the email channel from the channels module, follow the below steps:


1. Open **Channels** > **Email**. You can create an email(/account) for your group that handles email tickets. 
2. Select **Basic/Advance** and add **Email server**, **Username**, **Password**, etc.  Click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/email-outbound) for detailed documentation.  
3. In **Configuration object** field, select **Support ticketing**.     
      
    ![](https://i.imgur.com/DlVVjbc.png)

4. **Save** the changes.   
5. Once the email account details are Saved, **Forwarding Address** will be displayed. 

    ![](https://i.imgur.com/dCNKHXz.png)


:::info

**Purpose of Forwarding address** 

When any new email is sent to this particular email ID (that was created for support ticketing), the user email will be forwarded to the current Inbox section. 
That is, the emails sent to the email ID will be available on the yellow.ai platform so that the Agent - customer communication can take place in the Inbox Email chat rather than Email chat. 
:::

-----

## <a name="22"></a>  2. Set mail forwarding 

To forward mails from the email chatbox to the yellow.ai platform, follow the below steps: 

1. Copy the **Forwarding address** from the channels page. 
2. Log in and open your mailbox (Gmail, Outlook, etc).

### For Gmail

3. Open **All settings** and go to **Forwarding and POP/IMAP** tab. 

    ![](https://i.imgur.com/COXCn9T.jpg)

4. Click **Add a forwarding address** and paste the copied address. 
5. An email verification will be sent to the Inbox to ensure that the configuration is authorized. Open **Inbox** > **Chats** > **Bot Messages**. 

    ![image](https://imgur.com/HkOFiI9.png)

6. Copy the verification from the Inbox and paste it into Gmail settings to enable the forwarding of messages.

    ![image](https://imgur.com/JwM08Bh.png)

### For Outlook 

3. Log in to your Outlook account. Click on the **Outlook settings** icon in the top right corner.
4. Navigate to Mail and **select Forwarding and IMAP**.
5. Toggle the **Enable forwarding** switch.  
    ![image](https://hackmd.io/_uploads/rytJbwsdC.png)      
6. Under the **Forward my email to** text box, enter the forwarding address you copied from your Yellow.ai bot (example format: bot-ID_ID@parse.yellow.chat).
![image](https://hackmd.io/_uploads/SyAZGwiOR.png)     
7. Confirm forwarding in Yellow.ai:
    - Open your Yellow.ai bot and go to **Inbox > Chats > Bot messages.**
    - Look for an automated message requesting confirmation to forward emails from your Outlook account to the forwarding address.
    - Click on the confirmation link in the message.
![image](https://hackmd.io/_uploads/SkVFXvidA.png)

8. Check synced emails:
    - After confirming, emails sent to your Outlook email ID will appear in the Yellow.ai inbox under **Inbox > Tickets**.
    - The email thread in the Yellow.ai inbox will stay synchronized with your Outlook account.

------

## <a name="2"></a>  3. Enable email ticketing settings 

The email ticketing toggle must be enabled from the Inbox settings. Explained in detail [here](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/emailticketing)

![](https://hackmd.io/_uploads/S12xu_lvn.png)
