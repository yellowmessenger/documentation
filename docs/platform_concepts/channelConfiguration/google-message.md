---
title: Google Business Messages (GBM)
sidebar_label: Google Business Message
---

## 1. Introduction

Google Business Messages (GBM) is a mobile conversational channel that combines multiple entry points on Google Maps, and Search to create rich, asynchronous messaging experiences that delight customers and drive business results.
 
With GBM, you give your customers the opportunity to interact with your organization when they search for the organization on their mobile browser (Android phone) or in Google Maps.

Depending on how bot users start conversations with the GBM agent, you have two different [entry points](#11-understand-entry-point). 


### 1.1 Understand entry point


Entry points are surfaces where users can start conversations with Business Messages bot. Each entry point has a unique appearance and appears in a different place.

With GBM, you can launch your bots with the Non-local, and Local entry point groups, each of which enables multiple entry points. Each entry point your bot supports increases your bot's visibility and drives more conversations for your bot.

#### Local entry point

The Local entry point group encompasses entry points that rely on locations.

Local entry points can be used for organisations which have a physical location. This entry point enables conversations with locations associated with your brand from the Maps app (Supports Android and IOS) and when a user finds the location in Search (Supports Android and IOS with the Google Maps app installed).

|  |  |
| -- | -- |
<img src="https://secure-res.craft.do/v2/ApoqpVP8dN7x9m9uxqRYwYHcnyAYCkDj94X3GchdiatMxCm9zav2pYtDeQNFAuwKM2HZCdPoRsGUw13kERz4CtsBNLcmdvhddhSKDZrHsXYwWnyLhYNNgxeCLBKSaVozz5ajkZnSK1vqBybXsSgwVQRvhtn281eZ72ogJNj4VSN58yx/Screenshot_20220806-121747_Chrome.jpg" width="80%"/> |  <img src="https://secure-res.craft.do/v2/ApoqpVP8dN7x9m9uxqRYwYHcnyAYCkDj94X3GchdiatMxCm9zav2pYtDeQNFAuwKM2HZCdPoRsGUw13kERz4CtsBNLcmdvhddhSKDZrHsXYwWqQ92Ey4gxYBqMrfHhwHbsJ7xjwWryBzgQPCiMXLvJWpmMF7rSZT1sjJZKEZFg5VsZN/Screenshot_20220806-131149_Maps.jpg" width="60%"/>

#### Non-local entry Point

The Non-local entry point group contains entry points that do not rely on locations. If the brand does not have a physical location, or does not want to share its physical location on Google, you can use Google Business Messages with Non-local entry points.

Here are some examples of non-local entry points:
1. Sitelinks 
2. Snippets 
3. Phone

![](https://i.imgur.com/BrKhx0l.png)


### Supported message types

With Business Messages, you can receive messages from users and send response messages.

Yellow.ai supports the following Business Messages:

* Plain text
* Images
* Suggested action replies
* Authentication requests

Likewise, the agent may send the following types of information to the user:

* Plain text
* Rich text with limited Markdown formatting support
* Suggested replies
* Suggested actions
* Suggestions to request a live agent
* Rich cards containing multiple pieces of information, usually at least media and a title
* Rich card carousels that string together multiple rich cards


***


## 2. Limitations

The following are the limitations of the GBM channel in different bot functionalities:

#### Welcome message limitations

The following are the limitations for a Welcome message.

|   |    |
|-- | --- |
Quick reply buttons | 5 
Length of quick reply | 35 characters

#### Flow limitation

The following are limitations in flows.


|   |    |
|-- | --- |
Quick replies | 13
Quick reply character length | 25

> [See more details](https://developers.google.com/business-communications/business-messages/reference/rest/v1/conversations.messages#resource:-message)

#### Text message
* A text message sent to the user can have up to 3072 characters.

#### Image file
The following are the limitations of the file shared by the bot.

|  |  |
| - | - | 
Image sharing | Use only publicly reachable URL of the file. The platform determines the MIME type of the file from the content-type field in the HTTP headers when the platform fetches the file. The content-type field must be present and accurate in the HTTP response from the URL.
Max file size | 5 MB.
Supported formats | image/jpeg, image/jpg, image/png, image/webp

> [See more details](https://developers.google.com/business-communications/business-messages/reference/rest/v1/conversations.messages#ContentInfo)

#### Carousel card

| | |
- | - | 
Min. cards | 2
Max. cards | 10
Max. buttons in card | 4
> [See more details](https://developers.google.com/business-communications/business-messages/reference/rest/v1/conversations.messages#carouselcard)


***


## 3. Steps to connect a bot to GBM

### Prerequisites

-   Ensure that a live agent configuration has been set up on Inbox. GBM requires its bots to have at least one live agent.

### 1. Go to the channels configuration page
1.  Log on to [https://cloud.yellow.ai](https://cloud.yellow.ai) and navigate to **Channels** > **Google business messages**.
2.  Click **Connect your account**.

   ![](https://i.imgur.com/HSqDeI4.jpg)

    You will see a prompt to check if you have a live agent configured in Inbox.

### 2.  Enter brand details.
   a. **Brand Name**: Enter the name of the client. As this was verified by the Google support team over email, we would recommend you to keep the brand name similar to your domain.

   b. **Point of contact name**: Name of the point of contact(PoC) from the client.

   c. **Contact email**: The email address of the PoC.

   d. **Website URL**: Website address of the brand associated with the bot. This should be a publicly available URL starting with `https://` 
   
   e. Click **Save and next** to proceed to [setting up bot details](#3-enter-bot-details).

   ![](https://i.imgur.com/kTFWTA8.png)
  


:::note
The brand name will be visible when the bot goes live on GBM. The name of the brand's POC won't be visible, it is used only for verification purposes.
:::

### 3.  Enter bot details
Enter the bot details based on the descriptions provided for each field in the following table and click **Save and next** to proceed to configuring [Business locations](#4-enter-your-business-location). 

![](https://i.imgur.com/6YJsEZN.png)

   Option | Description
   ------ | -----------
   **Bot details** | -
   Bot name |  The name of the bot to appear to the end-users. It is recommended to choose a bot name that corresponds with the brand instead of a personal or random name. Do not use words such as personal, test, or demo in bot names.
   Bot logo | 1024x1024 px. In conversations, logos appear in 1024px diameter circles. Make sure that your logo appears well in the circle.
   [Entry points](#11-understand-entry-point) | Select where users can start conversations with the bot. **Local** if the organisation has a physical location, select **Non-Local** otherwise. You can also select both the options.
   Domain |  The org's domain URL. Use **Add domain** to add multiple domain addresses.
   Regions | Countries and localities in which the bot is allowed to launch the non-local entry points.
   Customer care number | The customer care contact number to display in Google results.
   Call deflection phone number | The fallback phone number when the customer care number is not reachable. This number is not shown in Google results.
   Contact as URL | The URL of the Contact us page from the organisation's website.
   **Conversational settings** | -
   Language | Languages that the bot supports. This will be pre-filled based on the configuration setting saved in the builder. You can also set the default language using the check box next to this.
   Privacy policy | Provide the link where the privacy policy details of your organisation are available.
   Welcome message | The first message in a conversation between a bot and a user. The welcome message automatically appears when a user starts a new conversation.
   Offline message | Message to be displayed to the bot user during non-operational hours, when the human agent is offline.
   Quick replies | Conversation starters appear as vertically stacked suggested replies and directly follow the welcome message. When the end-user taps a conversation starter, the bot receives predefined content. You can add up to five quick replies. Quick replies are not visible (when the live agent is not available) if an offline message is set.
   **Interactions** | -
   Primary interaction | The primary mode of interaction with the bot users. It is mandatory to have a live agent configuration for GBM. If human messaging is not available 24*7, uncheck **Always available** and specify the available days, time, and timezone.
   Secondary interaction | Secondary mode of interaction to activate when the primary mode is unable to respond to user queries.
   Start day | Weekdays from when the live-agent is available. You can choose from Monday to Sunday. For example, available from Monday (Start day) - Friday (End day).
   Start time (hours, minutes) | Set the available from time in hours and minutes. For example, available from 10hrs. 00min. - 18hrs 00min in the selected available days.
   End day | Weekdays until when the live-agent is available. You can choose from Monday to Sunday. For example, available from Monday (Start day) - Friday (End day).
   End time (hours, minutes) | Set the available time in hours and minutes. For example, available from 10hrs. 00min. - 18hrs 00min in the selected available days.
   Timezone | Base timezone considered for the specified availability period.
   

### 4.  Enter your business location
Add location IDs as per the operating mode of business. You must add at least one business location if you chose Local entry point in the previous step.

   a. **Place ID**: Enter the unique ID the location (in Google places) that you want to add to the GBM configuration. To search for a place ID, click **[Find place ID](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)**.

   ![](https://i.imgur.com/vBLSZYJ.png)

   ![](https://i.imgur.com/3am8xDQ.gif)

   
   b. Click **Add location** to add another location.

:::note
   To upload multiple locations at once, click *Upload locations* and upload the CSV file containing different place IDs.
:::
   
   c. Click **Save and next** to proceed to next step.


With this, the GBM bot configuration is completed. You then need to verify that everything is working fine. 

### 5.  Verify the bot

For the *Live* environment, you need to complete the verification and launch processes to ensure your bot goes live on GBM.

:::note
In Development environment, you do not need to complete the verification and launch process. Copy the Test URLs for Android or iOS and open it in the respective devices to test the bot on GBM.
:::

The bot needs to be verified along with its associated locations before going live. The process includes bot and location verification, bot and location launch.


![](https://i.imgur.com/k8efR78.jpg)



You need to request for verification. A verification email will be sent to the point of contact to confirm if the bot information provided is correct.

![](https://i.imgur.com/fSLzJqG.png)


Google sends two separate emails asking for permission to send messages.

* One email will contain the instructions and the submitted information.

![](https://i.imgur.com/CiSLwvw.png)


* The second email will have the security key.

To verify the bot, the contact person needs to reply to the first email with the following information: 

* The recipient's name	
* Title of the employee	
* Google-provided security key from separate email

> **Standard format**
> I, [name of brand employee], and [title of employee], grant yellow.ai the right to send Business Messages using the information specified in this email. Security key: [Google-provided security key from separate email]

Next, Google will verify this email and mark the bot as verified if all the information is as per Google's guidelines.

> Know Google's [Acceptable use policy](https://developers.google.com/business-communications/support/aup).

### 6. Verify locations associated with bot 

After you verify a bot, verify locations associated with that bot. Once a location is verified and the bot is launched, you can launch the location with the bot.

### 7. Launch bot

When you launch a bot, Business Messages performs checks for necessary approvals before beginning the launch process. Once the launch process begins, the agent is available to users within a few hours.

### 8. Launch locations	
When you launch a verified location, the location is available to users within a few hours. 

***

## 4. Monitor your bot performance

The super admin of yellow.ai receives the bot performance metrics on a weekly basis. To know the performance of your GBM bot, contact our support team.

The following are the different metrics that GBM shares -

* CSAT (Customer Satisfaction) 80% + (over trailing 7 days),
* MRR (Merchant Response Rate) 95% + (over trailing 7 days),
* HMRR (Human Merchant Response Rate) 95% + (over trailing 7 days).
 
:::note
Google bases these calculations on a minimum of 10 survey scores (CSAT), 10 sessions (MRR), and 10 live agent requests (HMRR) within the last 7 days. The MRR of bots with fewer than 10 sessions is based on the last 3 to 9 sessions within the last 35 days and is required to be only 60%+.
:::

Metric | Definition | Sample Value
-------- | ----------- | ----------
Survey score | Percentage of positive survey responses. | Ranges from 0% to 100%
MRR | Merchant response rate (MRR). The number of sessions that had responses (bot or live agent) relative to the total number of sessions. | Ranges from 0% to 100%
HMRR | Human merchant response rate (HMRR). The number of sessions that had live agent responses was relative to the total number of sessions that contained one or more live agent requests or live agent responses. | Ranges from 0% to 100%

> To know more see [here](https://developers.google.com/business-communications/business-messages/guides/how-to/measure/metrics#performance)

