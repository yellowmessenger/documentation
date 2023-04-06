---
title: Chat widget notifications
sidebar_label : Chat widget notifications
---

The chat widget can notify users when they receive a new message. The following are the chat widget notifications:
1. **Notification badge** - The widget displays a notification badge on top of the bot icon when a bot is in a minimized state. 
2. **Favicon and title text** - When a user is on a different page or screen, the widget displays a favicon with a text message.
3. **Message sounds** - The chat widget notifies its users with a message sound when there are new messages from the bot or agents.

Chat widget notifications are supported for desktop icon styles such as circle, square, and bar. It is also supported for custom icons uploaded on the yellow platform. It is also supported for custom icons uploaded on the yellow platform. 


<img src="https://i.imgur.com/XdXkepR.png" alt="drawing" width="90%"/> <img src="https://i.imgur.com/1GnabKl.png" alt="drawing" width="40%"/> 

:::note
* If there are more than nine new messages, a plus sign is displayed on the notification badge. When you click on the bot icon, you can view further messages.
:::

#### Limitations of chat widget notifications    


The following are the limitations of chat widget notifications:

* Notification badges are not supported for custom icons set up on the host site, as the size details are not passed on to Yellow.
* Notification badges are not supported for mobile SDKs and PWAs as they do not have a bot icon.
* The colour of the notification badge cannot be changed at the bot level. It will remain red as per the industry standard.

## Enable chat widget notifications

To enable chat widget notifications, follow these steps:

1. On the module switcher, click **Channels**.

    ![](https://i.imgur.com/UuFZ2eR.png)

2. Click on **Chat widget**.

    ![](https://i.imgur.com/1KzP77W.png)
	
3. The *Widget panel* is displayed. Navigate to the **Settings** tab, enable the **Unread message(s) badge** and **Unread notification in browser tab** and click **Save changes**.
   
   <img src="https://i.imgur.com/sAmc02y.png" alt="drawing" width="70%"/>
     
4. Navigate to the **Deploy** tab and click **Experience  on a website**. 
 
   ![](https://i.imgur.com/y7ZwGP9.png) 
   
5. If there are new messages, you will see the notification in the Favicon when you are on a different tab, as shown below.   

    ![](https://i.imgur.com/IOBbgzn.png)

* When a bot is in a minimized state, a notification badge is displayed on top of the bot icon.

     <img src="https://i.imgur.com/RWLV22E.png" alt="drawing" width="50%"/> 


## Turn on chat widget notification sound

To turn on chat widget notification, follow these steps:

1. On the module switcher, click **Channels**.

   ![](https://i.imgur.com/UuFZ2eR.png)

2. Click on **Chat widget**.

    ![](https://i.imgur.com/1KzP77W.png)
   
3. Navigate to the **Deploy** tab and click **Experience  on a website**. 
 
   ![](https://i.imgur.com/y7ZwGP9.png) 
   
4. Click on the below highlighted icon to enable the **Turn on message sound** option to notify you when there are new messages from a bot or from agents.

    <img src="https://i.imgur.com/4D2HS91.png" alt="drawing" width="40%"/>

:::note
If there are multiple messages in a single step, you will hear the notification sound only once.
:::