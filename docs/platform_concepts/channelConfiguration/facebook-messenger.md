---
title: Facebook Messenger
sidebar_label: Facebook Messenger
---

Facebook Messenger (FBM) is a social media platform that allows you to interact with your users directly through Facebook business pages. FBM integration enables two-way conversations.

Businesses can use FBM chatbots to automate customer support, provide order updates, shipping information, and send promotional messages to their users.

This integration enables the following key features: 

* **Automated Replies**: Provides the ability to automatically respond to user messages received in the FBM chat inbox.
* **Supported message types**: You can use various message types including text, image, videos, file, carousel, and quick replies, enhancing the communication experience.

:::note
Facebook Messenger and [Facebook Comments](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/facebook-comments) function as separate communication channels.
:::

**Watch the video on how to setup Facebook Messenger:**

<iframe width="560" height="315" src="https://www.youtube.com/embed/yasMLVfatm8" title="YouTube video player" frameborder="0" allow="autoplay; clipboard-write; picture-in-picture" allowfullscreen></iframe>
<br/>

## Limitations of Facebook Business Messenger (FBM) Chat


Option | Character limit
--------------------|----------------------
Character limit in each quick reply | 22
Maximum number of quick replies | 13
Character limit for the Carousel title | 22
Character limit for Text message | 2000
 

## Setting up FBM chatbot

To set up FBM bot, you need to perform the following:

* [Connect Facebook page to Yellow.ai](#connect-your-facebook-page-to-yellowai)
* [Setup a bot](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/account-setup#create-your-first-bot) on Yellow.ai platform based on your use case.
* [Test your FBM chatbot](#test-fbm-chatbot)

## Connect your Facebook page to Yellow.ai

To connect your Facebook page to Yellow.ai, you need to have a Facebook Business account with at least one Facebook page created.

:::note
To establish a connection, you must be an admin of the Facebook account and the respective Facebook page.
:::


To connect your Facebook page to Yellow.ai, follow these steps:

1. On the left navigation bar, click **Extensions**.

    ![](https://imgur.com/PIOvT6K.png)

2. Click **Channels** > **Messaging** > **Facebook messenger**.

    ![](https://imgur.com/SB7Ec9I.png)

3. Click **Connect to your Facebook account**. 

   <center><img src="https://imgur.com/K6v6CFb.png" alt="drawing" width="90%"/></center>


4. Login to your Facebook account that is connected to your Facebook Business Page.

    <center><img src="https://i.imgur.com/47XbbF2.png" alt="drawing" width="60%"/></center>

5. After successfully logging in, click **Continue** to navigate to your page.

   <center><img src="https://i.imgur.com/e6z2lqv.png" alt="drawing" width="60%"/></center>


6. Select your business page. If you have more than one business page connected to this FB account, select the one for which you want to setup a chatbot, and then click **Next**.

   <center><img src="https://i.imgur.com/o4bt7xF.png" alt="drawing" width="60%"/></center>

:::note
You can connect to an unlimited number of FB pages within a single FB business account. 
:::  

7. Enable the required permissions, and click **Done**.

   <center><img src="https://i.imgur.com/Gzo0WJ7.png" alt="drawing" width="60%"/></center>

8. Your Facebook page will be successfully connected to our platform. Enable the toggle button to connect your bot.

    ![](https://i.imgur.com/Zgp95PF.png)


## Setup your bot

Before you start testing your bot, set up your bot with intents to automatically respond to user messages on their Facebook pages.

* **Define bot's purpose and scope**: First, understand the scope and purpose of your bot (use case). Clearly outline what types of questions or requests the bot should handle based on your intended use case.
* **[Create Intents](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents)**: Add the intents that correspond to common questions or requests from users. Within each intent, add the relevant utterances and ensure they are trained to trigger the appropriate flow.
:::note
To trigger the respective flow in the FBM chatbot, you must add the utterances `get started` and `Get Started` and train them accordingly.
:::
* **[Create flows](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys)**: Design customized conversation flows to manage responses to your FBM. You can use the nodes such as name, email, phone number, quick reply, image, video, text, file within the flow.

Once you set up the bot, verify whether the bot responds to user according to the defined use case.

## Test Facebook Business Messenger

### Test FBM Chatbot

Once you have linked your bot to your Facebook page through the Yellow.ai platform, you need to test the bot to verify whether the bot  is able to respond to user messages on their Facebook page.

To test your bot on Facebook page, follow these steps:

1. Open your Facebook account and go to your business page.
  
2. Click **Message**.
 
    ![](https://i.imgur.com/8x7cUTb.png)
    
3. Click **Get Started** to start the conversation with the bot. Make sure you have already created an intent and added the utterances `get started` and `Get Started` to trigger the corresponding flow in your FBM chatbot.

   ![](https://i.imgur.com/3dOQry2.png)
   
* The FBM chatbot will trigger the relevant flow, and you can start interacting with the bot.   
   
   <img src="https://i.imgur.com/hzNPPgs.png" alt="drawing" width="30%"/>
   
:::note
If you have not added the `get started` or `Get Started` utterances to your flow, the FBM chatbot will not trigger the intended flow. Instead, a fallback message will be displayed.
:::   
   
4. If a flow is configured for agent reply using the [raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) node to start a conversation with an agent, it initiates a conversation with the agent. Once a conversation is initiated, the user can talk to the agent.

    <img src="https://i.imgur.com/jG4pgDK.png" alt="drawing" width="50%"/>
    
5. To view the entire conversation between the live agent and user, navigate to the **Inbox** module in the platform and select **Bot messages** in the **My Chats** section.

    ![](https://i.imgur.com/o21FqgC.png)


* When the conversation between the agent and user ends, the bot takes the conversation forward with the user.   

:::note

To know about Facebook Messaging Policy, refer to the [Facebook doc](https://developers.facebook.com/docs/messenger-platform/policy/).
:::

### Test FBM chatbot with FAQs

You can also add FAQs to the bot to simplify bot responses. For example, for a product-related post, you can add all the details related to the product as questions and answers. The bot can respond to customer questions based on the FAQs that you have added.

Similarly, you can test your FBM chatbot by adding different options such as order updates, shipping information, and so on. 

First, [add few FAQs](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs#-1-add-faqs) and train them. Then, test them to ensure that they work as expected.

   <center><img src="https://i.imgur.com/dcJjGfE.png" width="40%"/></center>

## Facebook Business best practices


### Facebook Business verification process

As the verification process can take more than two weeks, we recommend starting the verification at the beginning phase of the project.


#### 1. Access Business Manager Security Center

To start the verification process, go to *Security Center* and click **Start Verification** in the Business verification section.

   ![](https://i.imgur.com/SvbZvVN.png)

The **Start Verification** button will be greyed out unless your business needs access to certain features. See the below section on how to enable the button.

   ![](https://cdn.yellowmessenger.com/4lUE9WFC5jTX1620219352063.png)


#### 2. Select your Business

If your business is already listed:

1. **Confirm your business details**
   - Select a phone number that you have access to from the drop-down menu and click **Next**.

     <img src="https://i.imgur.com/TywEtMc.png" width="50%"/>

   - Double check for any typos or other errors: you will not be able to edit this information upon submission.

2. **Get a verification code**
   - Choose to receive the verification code on your business phone number via a text message or a phone call, or via email. Note that the phone number option may not be available in all countries.
   - Please make sure that the email registered has the same domain as the website.<br/> **Accepted Values**: <br/>Email: name@business.com<br/>Site: www.business.com

:::note
The following examples are not accepted:
   - Email: name@gmail.com or name@otherbusiness.com
   - Site: www.business.com
:::

3. **Get a verification code**
   - Choose to receive the verification code on your business phone number via a text message or a phone call, or via email. Note that the phone number option may not be available in all countries.
   - Please make sure that the email registered has the same domain as the website.

4. **Verify your domain**
   - If your domain is already verified, click **Use Domain Verification**. If not, complete the domain verification process, then return to the Security Centre and select **Continue**.
   - Enter verification code (not applicable if you use domain verification)
   - Enter your verification code. Click **Submit**.
   - You can skip the remaining steps 3 & 4 below.

:::note
- If you cannot see your business in the list, please select **None of these matches**. Then proceed with [Steps 3](#3-verify-the-legal-business-name) and [Step 4](#4-verify-the-business-address-or-phone-number) below.
:::

#### 3. Verify the Legal Business name
You may be asked in step 3 to provide official documentation of your business's legal name.

Upload an official document that matches the business's legal name you entered in step 1, such as a business license, articles of incorporation, or business tax registration.

- Please check [here](#documents-checklist) for the list of the documents accepted and not accepted before submitting them.

#### 4. Verify the Business Address or Phone Number
- Upload a document that shows both the legal name of your business and the mailing address or phone number shown on the screen.
- Please check [here](#documents-checklist) for the list of the documents accepted and not accepted before submitting them.

When your business is verified, you will be notified, and you will also see the verified status in your account.


### Checklist for Facebook Business Verification

To increase the company's chances of being verified by Facebook, it is important to have the following items checked internally by the respective Business Analysts (BAs) of the projects:

- The company's website is active and complete, containing the company's name and address.
- The account email is from the same domain as the company's website provided in the documentation. (www.mywebsite.com > xyz@mywebsite.com).
- If the verification will be made through the phone number, make sure the number is able to receive the call. If the phone has IVR, ask the client to disable it temporarily.
- The company's trade name in the documentation is the same as used on the website and on the Facebook page. If different, the names need to be related in some way on the website. For example, at the footer, enter "Company ABC powered by company D."


#### Documents checklist

- Document quality / resolution should be good - no pixelation.
- Documents should always be signed, especially GST and other accepted documents.
- Documents should not be modified or show signs of tampering (e.g., handwritten notes, strikethroughs, white ink, etc.).
- The legal business documents should have a matching address. If not, please provide additional documents that prove the address.
- English documentation seems to be processed more quickly; currently, the following languages are supported for business verification:


#### Website checklist

- Website should be accessible, with no geo filters that may prevent FB teams from viewing the website.
- The website should be secure (https://).
- The website must contain the legal business name, preferably on the home page (e.g., in the footer of the website).
- The website domain and email domain (for OTP verification) must be the same. If not, upload DNS records to prove that the legal business entity owns both domains. Another option is domain verification. It is helpful to have ownership of the provided domain.
- Upload the website to FB Business Manager.

#### Duration

As the verification process can take more than two weeks, we recommend starting the verification at the beginning phase of the project.

#### Check out Facebbok's official documentation

* [Verify your business](https://www.facebook.com/business/help/2058515294227817?id=180505742745347)
* [Documents to upload](https://www.facebook.com/business/help/159334372093366)
* [Troubleshooting when the business is not verified](https://www.facebook.com/business/help/2342133782492969?id=180505742745347)