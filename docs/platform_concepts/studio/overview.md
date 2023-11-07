---
title: Studio overview
sidebar_label: Overview
id: overview
tags: [conversation settings]
---

Studio, a no-code segment of the platform, empowers you to create bots and shape their conversational paths when interacting with customers. It offers tools for training your bot in natural language processing, configuring conversation settings, and leveraging AI to craft dynamic conversation flows.

Additionally, you can implement custom logic, enabling your bot to excel in multilingual communication, integrate with third-party apps through APIs, and manage databases. 

Studio also provides access to review conversation logs, facilitating improvements in bot conversations and the creation of event-based flows.

## Access Studio

The Studio module can be accessed by two ways:

### Access Studio via module switcher

1. Go to the overview switcher on top and click **Studio**.

   ![](https://i.imgur.com/2kUZ1KQ.png)

You will land in **KB** section. 

   ![](https://i.imgur.com/PqYbCww.png)

The Knowledge base(KB) is a cutting-edge feature developed by Yellow.ai that demands minimal user intervention. Just share your website link along with a few essential supporting documents to get started. 

To know more about the functionalities offered by KB, refer to our help document [here](https://docs.yellow.ai/docs/platform_concepts/studio/kb/overview).

### Access Studio via home page

1. Click **Studio for automation**. 

   ![](https://i.imgur.com/QQRUdKo.png)

You will land in the **Build** section. The functionalities of the **Build** section has been expalined below.

   ![](https://i.imgur.com/3sBIdWE.png)

## Conversation settings

Conversation settings helps improve how the bot interacts with users, offering a better user experience. Here, you can set the bot to recognize returning users, set supported languages, assist with document searches, display banners, and define the bot's purpose.


   <img src="https://i.imgur.com/MnWdJfY.png" alt="drawing" width="60%"/>

### User identification

The User Identification flow in bot conversations involves identifying the user engaging with the bot. This is accomplished by prompting the user identifier flow for unidentified users even before starting the conversation, which may include an email address, phone number, or other unique information.

Click [here](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/userid-flow) to know in detail about setting up this flow.

### Language settings

Add the languages supported by the bot. This allows your bot to communicate in multiple languages, catering to a diverse audience.

   <img src="https://i.imgur.com/g4WdfnA.png" alt="drawing" width="60%"/>

### Suggestion

If your bot is unable to understand the user input, consider these helpful suggestions.

   <img src="https://i.imgur.com/DuwnrKd.png" alt="drawing" width="60%"/>


1. **Enable suggestions**: Turn this on to activate user input suggestions.
2. **Excluded flows:** Specify flows where suggestions will not be applied.
3. **Excluded categories**: Select the categories where these suggestions will not apply.
4. **Included categories**: Set categories where these suggestions should apply.
5. **Unsatisfactory button text**: Customize the text to display for unsatisfactory button.

   <img src="https://i.imgur.com/RgwS3Ok.png" alt="drawing" width="43%"/>

7. **Hide input**: Enable this option to hide the user input box, preventing users from entering responses.

   <img src="https://i.imgur.com/xgPODar.png" alt="drawing" width="40%"/>

9. **Message**: Provide the message to display when the bot doesn't understand the user's message.

    <img src="https://i.imgur.com/dmm73UD.png" alt="drawing" width="40%"/>

### Document search

   Document search lets the bot search documents for answers and respond to user queries. For information regarding the supported document types for upload and their corresponding procedures, please click [here](https://docs.yellow.ai/docs/platform_concepts/studio/train/what-is-document-cognition#-2-upload-files-to-document-section).     

   <img src="https://i.imgur.com/GyKQ3VN.png" alt="drawing" width="50%"/>

1. **Enable**: Activate this option to enable document search.
2. **Enable summarised results**: Opt for summarized results to have the bot condense and present information to the user.

   <img src="https://i.imgur.com/gRy9PX5.png" alt="drawing" width="40%"/>

3. **Enable links for summarized answer**: Enable this to provide summarized results with supported links.

   <img src="https://i.imgur.com/n4JYAFK.png" alt="drawing" width="40%"/>

### Call out banner

Display a callout banner at the top of your bot to convey important information to users, such as a 15% discount offer.


#### Add text banner

1. Click **+ Add a callout**.

   <img src="https://i.imgur.com/KebK3ui.png" alt="drawing" width="50%"/>

2. In **Type of banner**, select the banner type as **Text**  

   <img src="https://i.imgur.com/YXxbf37.png" alt="drawing" width="50%"/>

3. Enter the text to display in **Text** field.

   <img src="https://i.imgur.com/PNS2HWu.png" alt="drawing" width="50%"/>

4. In **Replies**, configure the response options for users. Click the button to edit them.

#### Add image banner

1. Click **+ Add a callout**.

   <img src="https://i.imgur.com/KebK3ui.png" alt="drawing" width="50%"/>

2. In **Type of banner**, select the banner type as **Image**  

   <img src="https://i.imgur.com/YXxbf37.png" alt="drawing" width="50%"/>

3. Upload the image to be displayed.

   <img src="https://i.imgur.com/TlU3Q5F.png" alt="drawing" width="50%"/>

#### Setting to Close or Minimise the banner

Here, you can choose whether to allow users to either minimize the banner with a customizable text message or completely close and remove the banner from the chat widget. **Minimise on close** offers users the option to close the banner while displaying custom text on it. **Close** enables users to fully close the banner and remove it from the bot.

1. Click **Settings** on top to define the banner's status once accessed. 

   <img src="https://i.imgur.com/5s9EvBR.png" alt="drawing" width="50%"/>

2. Choose your preference and click **Save**.

   <img src="https://i.imgur.com/8QXRABh.png" alt="drawing" width="40%"/>

### Bot objective

Specify the primary goal of the bot and the purpose for its interaction with users.

   <img src="https://i.imgur.com/HBEYg6o.png" alt="drawing" width="40%"/>



