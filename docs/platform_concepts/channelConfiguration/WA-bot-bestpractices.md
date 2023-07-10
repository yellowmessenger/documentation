---
title: WhatsApp starter guide
sidebar_label: WhatsApp starter guide
---

This document provides details on the best practises and limitations that you need to follow while creating the WhatsApp (WA) bot. For more information on WA limitations, click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-char-limit).

## Create a flow for WhatsApp bot

Before creating a flow for the WhatsApp bot, you need to consider the following points:

* Determine the purpose and scope of the bot (use case) to create a flow for a WhatsApp bot, like what type of questions or requests the bot should handle based on your use case.
* Select the appropriate environment for flow creation. The following are the bot environments:
   * Two environments - Develpoment and Live
   * Three environments - Sandbox, Staging, and Production
* If a flow is configured and published in a specific environment, it will not respond to queries in other environments.
* If your bot has 3 environments such as sandbox, staging, and production, you need to use sandbox bot for building the chatbot or making changes in existing flows. Once you are done with creating the flows, you can publish the bot from the sandbox to staging.
* Include intents for common questions or requests that align with your conversation flow, aiding in proper training of the bot to identify user intent.
* Use WhatsApp nodes such as [WhatsApp quick replies](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#24-quick-replies), [WhatsApp list](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#32-whatsapp-list), and [prompt carousel](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#26-carousel) to enhance the flow's functionality.



### Using WhatsApp nodes

#### Prompt carousel node

The WA bot will respond with a number list even if the buttons are configured in the quick reply node. In this case, you can use the [prompt carousel](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#26-carousel) node instead of quick reply to display the buttons in the bot response.

<img src="https://i.imgur.com/1coMBB2.png)" alt="drawing" width="40%"/>

##### Limitations of prompt carousel

* Supports a single carousel card.
* Supports a maximum of 3 buttons.
* The maximum number of characters supported is 1024.
* Carousel button - The maximum number of characters supported is 20.

#### Quick reply node

<img src="https://i.imgur.com/u1R8BGI.png)" alt="drawing" width="60%"/>

##### **Best Practices**

* To know more about how to use the WA quick reply node, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#24-quick-replies).
* You can trigger a flow when a user clicks on the quick reply option on WhatsApp. For more information, click [here](https://docs.yellow.ai/docs/cookbooks/studio/qr-node).
* To add a quick reply button, you need to switch the channel filter to Website. Eventually, if you try to add a button in the WA channel filter, then the add button option will be disabled.
   <img src="/img/channels/WAgif.gif" alt="drawing"/>
* If you want to delete a quick reply node, you have to switch to Website from the channels filter and then delete the buttons.

##### Configure Dynamic WA quick reply and Dynamic WA list message

* For more information on how to create dynamic quick replies, click [here](https://docs.yellow.ai/docs/cookbooks/studio/dynamic-quickreplies).

##### Pass data to quick reply buttons and title using variable

* You can also pass the data to the quick reply buttons and title using the variable. Use the following code to pass the data:
  
     `{{{variables.info}}}, {{{variables.info1}}}`
	 	 
	 
	 <img src="https://i.imgur.com/b1CXn3D.png" alt="drawing" width="70%"/><img src="https://i.imgur.com/DcM2YNL.png" alt="drawing" width="60%"/>
	 
For more information on how to create a variable, to store, and retrieve data from variables, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#31-create-a-variable-via-nodes).

##### **Limitations of Quick reply**

* The WhatsApp quick reply supports a maximum of 3 buttons and 20 characters per button. If more than 3 buttons are added, it defaults to a numbered list.
* If a quick reply button exceeds 20 characters, the message containing that button will not display while the bot is reacting.

#### WhatsApp list

* To know more about how to use the WA list node, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#24-quick-replies).

#### WA list options 

<img src="https://i.imgur.com/883ZHGx.png)" alt="drawing" width="30%"/><img src="https://i.imgur.com/2j0bYE7.png)" alt="drawing" width="30%"/> 

#### **Limitations**

* A maximum of 10 buttons can be added. Multiple buttons cannot be selected at once and are not supported in notifications.
* The character limit for the body is 1024.
* The character limit for the footer is 60.
* The character limit for button text and response is 24.

### WhatsApp template

A WhatsApp template is a predefined message format that is used to send outbound messages to your users on the WhatsApp messaging platform. It is designed to enable businesses to send structured and consistent messages to your users. For more information on the template and guidelines, click [here](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/templates/whatsapptemplate).

After creating the template, it must be submitted for Facebook review. Usually, the review process takes up to 48 hours. The template will be accepted if it meets Facebook's rules.

   <img src="https://i.imgur.com/LsjMeBS.png" alt="drawing" width="70%"/>


:::note
To view the status of the template approval, you need to click on the **Sync template** button. 
![](https://i.imgur.com/5iO2AK8.png)
:::

For more information on how to execute a campaign, click [here](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign#33-whatsapp-campaign).

For more information on how to trigger a flow when a user clicks on a quick reply option on WhatsApp, click [here](https://docs.yellow.ai/docs/cookbooks/studio/qr-node).

## Set up a WhatsApp channel

To set up a WhatsApp channel, you need to have an active WhatsApp business account. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration).

Once your account is set up, you need to apply WA for an official business account.

To apply for an official business account, follow these steps:

1. Login to your Facebook business manager account and select **Accounts > WhatsApp accounts**.

      ![](https://i.imgur.com/yXUdLYI.png)
	  
2. Under *Account* tools, select **Phone Number** and click on the **Setting** icon.	  

      ![](https://i.imgur.com/DVeJfDp.png)
	  
3. Under *Phone numbers*, select **Profile** > click **Submit Request** to apply for the official business account.	  
 
    ![](https://i.imgur.com/RG8eAHO.png)


Once you apply for an official business account, you need to verify your business account with Facebook. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration#12-verify-business-account-with-facebook).

After setting up your WA channel, you can change the  display picture and description.

To change the display picture and description, follow these steps:

1. On the WA channel page, click on the icon highlighted below and click **Edit**.

    ![](https://i.imgur.com/cdMln3A.png)
	
2. Under **Basic details**, you can edit the display picture and description based on your requirements.	

      ![](https://i.imgur.com/GpOkqLl.png)

:::note
* You cannot change the display name on the platform. To change the display name, you have to go to the Facebook business manager account. 
:::

To change the WA display name, follow these steps:

1. Login to your Facebook business manager account and select **Accounts > WhatsApp accounts** > **WhatsApp Manager**.

      ![](https://i.imgur.com/ck9gziG.png)
	  
2. Select **Phone numbers**.

     ![](https://i.imgur.com/ifaxupp.jpg) 
	 
3. Under *Name*, click **Edit** icon to edit the display name.

     ![](https://i.imgur.com/jNtOL3r.png)	 
	 

## Test your WhatsApp bot 

After successfully creating your WhatsApp business account and configuring the flow, you need to select the **WhatsApp** channel from the **Channels** filter to test your bot and ensure all the flows you configured are working as intended. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration#3-test-your-bot-on-whatsapp). 

  ![](https://i.imgur.com/9MBMVC6.png)
  
### Add WhatsApp number for testing

You can add the WhatsApp number for testing purposes in the Live environment.

:::note
You can test the WA bot in staging and sandbox environments by enabling **Development mode**. The numbers that you have added for testing purposes will respond with the Staging/Sandbox configured flows.
:::

1. On the **Channels** page, select <b>WhatsApp messenger</b> in the Live environment, click on the **More options** icon, and select **Edit** icon.

   ![](https://i.imgur.com/fI8jt1s.png)

3. **Enable development mode** using the toggle button.

   <img src="https://i.imgur.com/MkazXQE.png" alt="drawing" width="70%"/> 

4. Enter the number in **Developer WhatsApp number**. 
5. To add more WhatsApp business numbers, click **Add phone numbers**.
6. Click **Save**.  
 

### 24-hour WhatsApp policy

If a live agent connects with the WhatsApp bot user and does not close the ticket within 24 hours of the chat initiation, the chat will be automatically disabled under the **Chats** section > **Bot messages** of the Inbox module. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/inbox/chats/whatsapp-24hr-window-policy#-2-reinitiate-expired-whatsapp-chats). 

<img src="https://i.imgur.com/pVKcpx1.jpg" alt="drawing" width="50%"/> 

To upgrade your WhatsApp tier and messaging limit, click [here](https://developers.facebook.com/docs/whatsapp/api/rate-limits#quality-rating-and-messaging-limits).