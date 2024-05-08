---
title : Instagram
sidebar_label : Instagram
---

## Overview

Instagram is a social networking platform. This integration enables your insta users to seamlessly interact with our bot directly from your Instagram account.

You can also promote your products and services, engage with customers by responding to their comments and queries, and increase your brand’s visibility.

The following are key features of this integration:

* **Automated Replies**: Bot can automate responses to direct messages, comment or private replies, story mentions, story replies, and media share. An [event](#supported-instagram-events) is sent to the bot for each of these actions, such as comments, private replies, story mentions, story replies, and media shares.
* **Supported message types**: You can use various message types including text, image, carousel, and quick replies, enhancing the communication experience.

These features help you engage with your audience on Instagram and provide a more interactive and responsive experience.

**Watch the video on how to setup Instagram channel:**

<iframe width="560" height="315" src="https://www.youtube.com/embed/XIF3YGpzsD0" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; picture-in-picture" allowfullscreen></iframe>


### List of supported messages by Yellow.ai platform

| **Action type** | **Message type**   | **Bot Support?** | **User Support**?                                                |
|------|------|---------|-------|
| Message  | Text | Yes |Yes                                                               | Yes                                                               |
| Message         | Image                            | Yes. Supported formats: jpg, png, ico, bmp. Size: Less than 8 MB. | Yes. Supported formats: jpg, png, ico, bmp. Size: Less than 8 MB. |                                                              |
| Message         | Sticker                          | No                                                                | Yes                                                             |
| Message         | Attachments (video, voice, file) | No                                                                | Yes                                                             |
| Reaction        | React                            | No                                                                | No                                                                |
| Reaction        | Unreact                          | No                                                                | No                                                                |
| Media Share     | Image                            | Yes                                                               | Yes                                                             |
| Media Share     | Video                            | Yes                                                               | Yes                                                             |
| Media Share     | Story                            | Yes | Yes                                                               | No                                                                |
| Media Share     | IGTV                             | No                                                                | No                                                                |
| Media Share     | Reels                            | No                                                                | No                                                                |
   
### Character limitations of Instagram 

In this section, you can view the character limitations of Instagram channel.

options |	Character limit
--------------------|----------------------
Quick reply | <ul><li> A maximum of 13 quick replies are supported. </li> <li> Each quick reply allows up to 20 characters before being truncated. </li> <li> Quick replies only support plain text.</li></ul> <img src="https://i.imgur.com/EGh1d0m.png" alt="drawing" width="40%"/><img src="https://i.imgur.com/en7PHOK.png" alt="drawing" width="40%"/>
Conversation starters | A maximum of 4 conversation starters are supported. 
Carousel | <ul><li> A maximum of 80 characters are supported for the title and description. </li><li> A maximum of 3 buttons are supported in carousel.</li></ul>

##### Limitations
    
* Private replies are currently not supported for Instagram ads and IGTV comments.
* Agent can reply to the private replies within 7 days (except on Instagram Live) of the creation date of the comment.
* Private replies do not open the 24-hour window for standard messaging.


  

## Integrating Instagram to your bot

To set up Instagram bot, you need to perform the following:

* [Set up a business account on Instagram](#Connect)
* [Setup a bot](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/account-setup#create-your-first-bot) on Yellow.ai platform based on your use case.
* [Test your bot](#test)

:::note

Check out the [supported messages](#list-of-supported-messages-by-yellowai-platform) and [Character limitations](#character-limitations-of-instagram) of Instagram.
:::

### Prerequisites to setup an Instagram channel

The following are the prerequisites to setup a Instagram bot:

1. Create an [Instagram Professional Account](https://www.facebook.com/help/instagram/138925576505882) or a business account.
2. Ensure that your **Facebook Page** is connected to your [Instagram professional account](https://developers.facebook.com/docs/instagram-api/overview#pages). To create a new page, click [here](https://www.facebook.com/pages/create).
3. Ensure that you have enabled **Access to Messages** in your Instagram account. (**Settings > Privacy > Messages > Enable Allow Access to Messages**).
4. Create an additional personal or test Instagram account for testing.

### Set up a business account on Instagram

:::note
If you already have an Instagram personal account, then you can switch to a business account. For more information, click [here](https://www.facebook.com/business/help/502981923235522).
:::

To set up a business account on Instagram, follow these steps:

1. Navigate to your profile and click **Hamburger Menu > Settings**.

    ![](https://i.imgur.com/yE2nojG.png)
   
2. Click **Switch to Professional Account**.
    ![](https://i.imgur.com/Ez6bltU.png)

3. Select **Business** and then click **Next**.
    
    <img src="https://i.imgur.com/cg2AUBi.png" alt="drawing" width="50%"/>
    
4. Click **Next** to continue.
    
   <img src="https://i.imgur.com/dmn1Ms9.png" alt="drawing" width="50%"/>
    
5. Select a category for your business and click **Done**.
    
    <img src="https://i.imgur.com/dzEudGg.png" alt="drawing" width="50%"/>
    
6. Add your business details and click **Save**. <br/>Click **Don't use my contact info** to skip adding business info for testing accounts.
    
   <img src="https://i.imgur.com/Wsk7UXP.png" alt="drawing" width="50%"/>
    
7. Click **Done**. Now your Instagram personal account will be switched to a business account.
    
  <img src="https://i.imgur.com/M4ATqt5.png" alt="drawing" width="50%"/>
  
### Link your Facebook page to Instagram account

Before you proceed, you need to link your Facebook to Instagram account. This connection enables you to share posts and pictures between your FB page and Instagram,  share ads from your FB page to Instagram, and integrate third-party apps.

You can connect to Facebook either through your Facebook page settings or within the settings of your Instagram business account.

#### To connect Facebook through your Instagram account:

1. Log in to your Facebook account.
2. On your **News Feed**, click the **Page** that you have created.

   ![](https://i.imgur.com/byVle2R.png)

3. On your FB page, navigate to **Settings**.

   ![](https://i.imgur.com/oKxhhEl.png)

4. Click **Linked accounts**.

   ![](https://i.imgur.com/hb2Eep2.png)

5. Click **Connect Account**.

   ![](https://i.imgur.com/YT2FVNC.png)

6. Click **Connect**.

<center><img src="https://i.imgur.com/eiwrwgF.png" alt="drawing" width="50%"/></center>

7. Enable **Allow access to Instagram messages in Inbox** and click **Confirm**.

<center><img src="https://i.imgur.com/xGvYonA.png" alt="drawing" width="50%"/></center>
    
8. Enter your Instagram's username and password and click **Log in**.  

    <center><img src="https://i.imgur.com/aee8Gaq.png" alt="drawing" width="50%"/></center>
    
   Now your Facebook page will be connected to your Instagram account.

   <img src="https://i.imgur.com/WQ2Y2TJ.png" alt="drawing" width="60%"/>  

:::info
If you want to disconnect your page, which is linked to Instagram, click **Disconnect**. For more information, click [here](https://www.facebook.com/help/1148909221857370).

   ![](https://i.imgur.com/ICquI1l.png)
:::

### Connect your Facebook account to the Yellow.ai platform
 
1. On the left navigation bar, click **Extensions**.

    ![](https://imgur.com/PIOvT6K.png)

2. Click **Channels** > **Messaging** > **Instagram**.

    ![](https://imgur.com/01SlOVB.png)

2. Click **Connect to your Facebook account** and add your Facebook business account credentials.

    ![](https://imgur.com/Z2wU34j.png)

3. After signing into the account, click **Continue**.

   <img src="https://imgur.com/ngP2HUc.png" alt="drawing" width="60%"/>

4. Select the **Instagram business account** you want to activate and click **Next**.
 
   <img src="https://i.imgur.com/hMinH5F.png" alt="drawing" width="50%"/>


5. Select the **Facebook page** (you can select only one page) that is connected to your **Instagram Business account**.

   <img src="https://i.imgur.com/VYDn1wX.png" alt="drawing" width="50%"/>

6. Enable all the permissions and click **Done**.

   <img src="https://i.imgur.com/XhaFKeL.png" alt="drawing" width="50%"/> 
   
7. Click **OK** to continue.

   <img src="https://i.imgur.com/At8hlec.png" alt="drawing" width="50%"/> 

8. Select the Facebook page and click **Continue**.

   <img src="https://imgur.com/JMZVUGm.png" alt="drawing" width="70%"/>

* This will connect your Facebook page to the Instagram account. 

   ![](https://i.imgur.com/ikU6FUW.png)

   The table below provides description of each option:

   Option | Description 
   ------ | -----------
   Facebook Page | This is the primary Facebook page that is currently connected.
   Instagram Page | This indicates the associated Instagram page connected to the Facebook account.
   Enable Instagram Comment  | This allows you to enable or disable the ability to receive comments from Instagram posts.
   Comment Response | This setting allows you to choose where comments from Instagram posts will be responded to: either as a comment on the post itself or as a direct message in the inbox.
   Delete icon | Click this icon to remove a specific connected page.
   Manage conversaction starter | Allows you to configure the initial conversation when a user comments for the first time on a post. For more details, see [Add conversation starters](#add-conversation-starters).

:::note
If you wish to remove the entire account, click **Disconnect**. This action removes all connected pages associated with the account.
:::  
   
### Add conversation starters

Conversation starters allow you to initiate conversations with a business by providing a list of commonly asked questions.

To add conversation starters, follow these steps:

1. On the Instagram page, click **+Add conversation starter**. 
   
   ![](https://imgur.com/YyX9B19.png) 
   
2. Enter **Quick reply** and your preferred **Action**.
        
   <img src="https://i.imgur.com/RQDxqCq.png" alt="drawing" width="50%"/>
      
3. Click **+Add conversation starter** to add more conversation starters (up to 4), then click **Save**.     
   - Option 1: **Pre-purchase product queries**

    <img src="https://i.imgur.com/P87YGKj.png" alt="drawing" width="30%"/>
 
   - Option 2: **Post-purchase customer support**
        
    <img src="https://i.imgur.com/RSbkBLm.png" alt="drawing" width="30%"/>

## Enabling Instagram events

Once you have set up the Instagram bot, to initiate the personailzed conversations for particular actions like story replies, story mentions, media shares, and comments use the below events. You can automate response to user activities on Instagram by triggering specific flows based on Instagram events.

By default, these events are inactive, but you can enable them as per your requirements.

### Supported Instagram events


 Event | Description | Sample use case
---------|------|------------|
instagram-story-reply | Bot receives an event with the available information when a user replies to the business Instagram story. | Instagram story reply enables businesses to engage with their audience in real-time. When users reply with inquiries such as product details, availability, pricing, or comments about products featured in the story, businesses can start initiating conversation.<br/> <img src="https://i.imgur.com/iI0hUxL.png" alt="drawing" width="60%"/>
 instagram-story-mention | Bot receives an event with the available information when a user mentions the business in their insta story. | Users can share their feedback by mentioning the brand in their Instagram stories. This can include sharing their thoughts on the product, overall shopping experience, or any positive aspects they wish to highlight.<br/><img src="https://i.imgur.com/QFXBUxg.png" alt="drawing" width="60%"/>
instagram-media-share | Bot receives an event with the available information when the business shares a media from a post. | When businesses post details about their products, users have the ability to share this media with their followers. This enables businesses to reach a wider audience with their products.<br/> <img src="https://i.imgur.com/CIKJQSf.png" alt="drawing" width="60%"/>
instagram-comment | Bot receives an event with the available information when a user comments on the business insta post. | When businesses share details about their products on Instagram, users can engage directly by commenting on the post. These comments may include inquiries about product specifications, availability, pricing, or any additional details. <br/>**Note:** To display the comments in the comment section under the respective comment, contact the [Integrations](mailto:support@yellow.ai) team. By default, replies are currently shown in direct messages.  | 

### Enable Instagram events


1. Navigate to **Extensions** > **Channels** > **Instagram**. You will see the list of connected accounts (if available). 
2. Click on the **Events** button.

   ![](https://i.imgur.com/4eg5AeX.png)

3. Navigate to the specific event and click **Activate**.

   ![](https://i.imgur.com/elR6rxS.png)
    
            
4. Once you enable the required Instagram events, you can use these Instagram events to:
  
  * [Trigger bot flows via events](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#13-trigger-flow-using-event)
  * [Store user variables that come from user events into DB or User 360](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/store_conv_data#store-user-properties-from-bot-conversations) and create personalized conversations using the stored data.
    

   
## Setup your Instagram bot

You need to use intents to identify user utterances and automate respond to their messages on Instagram page.
    
* **Define bot's purpose and scope**: First, understand the scope and purpose of your bot (use case). Clearly outline what types of questions or requests the bot should handle based on your intended use case.
* **[Create Intents](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents)**: Add the intents that correspond to common questions or requests from users. Within each intent, add the relevant utterances and ensure they are trained to trigger the appropriate flow.
* **[Create flows](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys)**: Design customized conversation flows to manage responses to your Instram page. You can incorporate text, carousel, and quick replies within the flow.

Once you set up the bot, verify whether the bot responds to user according to the defined use case.   

## Test your Instagram bot

After connecting your bot on Yellow platform, you can test your bot as mentioned here:

1. [Setup your bot](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/create-a-bot) based on your business use case.

2. Log in to your personal Instagram account or use a secondary test account that you have created for testing purpose.

3. Send a message (as per the configured intent) to the test Instagram account that you have connected to your bot.
    
    <img src="https://i.imgur.com/yptWHk5.jpg" alt="drawing" width="30%"/>
     
   
   <br/>• If the intent does not match, the bot should be able to respond with a fallback message.   
    
4. Navigate to the Inbox module on the platform and select **Bot messages** in the **Chats** section. Here, you can view the entire conversation between the bot and user.

     ![](https://i.imgur.com/rAhMS4I.png)
     
5. If a flow is configured for agent reply using the [raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) node to start a conversation with an agent, it initiates a conversation with the agent. Once a conversation is initiated, the user can talk to the agent.

    <img src="https://i.imgur.com/8vXOiyb.png" alt="drawing" width="30%"/>
    
6. To view the entire conversation between the live agent and user, navigate to the **Inbox** module in the platform and select **Bot messages** in the **My Chats** section.

    ![](https://i.imgur.com/LNKzHHn.png)

* When the conversation between the agent and user ends, the bot takes over the conversation forward with the user.