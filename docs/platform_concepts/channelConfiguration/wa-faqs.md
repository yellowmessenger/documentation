---
title: WhatsApp Frequently Asked Questions
sidebar_label : WhatsApp FAQs
---

### Whatsapp business account 

<details><summary><b> How to verify your business account with Facebook? </b></summary>
<p>

- Document verification:

1. Go to https://business.facebook.com/overview
2. Click on More Tools > Business Settings > Select your Business.
3. Select Security Centre.

You will be able to initiate verification here.
Click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration#13-verfiy-business-account-with-facebook) for more details.

</p>
</details>


<details><summary><b> Is FB Business account verification mandatory? </b></summary>
<p>

Account verification is no more mandate for creating your WA business API account and the Whatsapp bot. 
Though there are some limitations of the same as mentioned, after completing embedded sign up or the “on behalf of”(OBO) onboarding processes, businesses will be able to:

1. Respond to unlimited customer-initiated conversations(24-hour messaging windows.)
2. Send business-initiated conversations to 50 unique customers in a rolling 24-hour period.
3. Register up to two(2) phone numbers.<br/> **Note:** It is suggested to complete the business verification before making your bot live on WhatsApp to ensure unlimited business-initiated conversations after the increase in the daily limit tier.

</p>
</details>

<details>
<summary>After business verification on WhatsApp, can we change the website URL? Will there be any impact?</summary>

Yes, it is possible to change the website URL after business verification on WhatsApp. However, there may be some potential impacts on the business account that need to be considered.<br/>

Changing the website URL may require re-verification or re-approval from WhatsApp. The new URL will need to meet WhatsApp's guidelines and requirements for business verification.
</details>

<details><summary> <b> Do I need a phone number to create a bot on your platform? </b> </summary>
<p>

Yes, you can create a bot on the platform without adding a number and can even test your Whatsapp bot on our test number.

Go to the Whatsapp channel page to find the option to test your bot with the test number. 

</p>
</details>


<details><summary> <b> Will I lose my whatsapp data once I use it as a WABA Business API number?  </b> </summary>
<p>

Yes. Before initiating a WA business API setup on any number, you will have to delete your existing WA account during which you will lose all existing contacts and conversations. 

</p>
</details>

<details><summary> <b> Where can I initiate Whatsapp channel setup on the platform? </b> </summary>
<p>

You can initiate WA channel setup on the Channels page under WA logo. 

- Visit this URL after logging in on the platform - https://cloud.yellow.ai/bot/yourbotID/channels/whatsapp

- Here is the [link to the doc](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration).

</p>
</details>

<details><summary> <b> How to set up Whatsapp channel?</b> </summary>
<p>

- Requirements & Steps

You will just need a phone number and admin access to the FB business manager account to initiate the Whatsapp channel integration. 

Here is the [URL to the doc](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration

</p>
</details>

<details><summary> <b> Can the phone number be used for other purposes like Whatsapp, Calling etc? </b></summary>
<p>

Yes. The same number can be used for calling but can't be used for personal WA usage as the number would be connected to the platform. 

</p>
</details>

<details><summary><b> Can we use the platform and Mobile Whatsapp application to reply to users? </b></summary>
<p>

No. We cannot use the WA application or the phone number once the Whatsapp Business API integration is completed.

</p>
</details>


<details><summary><b> Limitations of Whatsapp? </b></summary>
<p>

Pre-Onboarding:

If onboarded with WhatsApp Business API solution provider(like WATI):
- The previous chats cannot be seen.
- The number cannot be used on any other WhatsApp apps - including the WhatsApp & WhatsApp Business mobile app.

Post Onboarding:

Businesses can send messages to customers only after a customer initiates a message. These messages are called session messages and can be sent by businesses to customers until 24 hours of the customer sending a message. After 24 hours, the session expires and businesses can only send 'template messages' to their users.
Template messages must be pre-approved by WhatsApp and can be done from the WATI dashboard. All template messages must adhere to WhatsApp Commerce Policies.
- WhatsApp Group Feature is not supported.
- WhatsApp Voice or Video Calls are not supported. Voice notes are supported.
- WhatsApp Message Forwarding Feature is not supported.
- WhatsApp apps cannot be used with the same number if using WhatsApp Business APIs.
- WhatsApp Messages cannot be replied to in a thread.

</p>
</details>

<details><summary><b> What is the duration taken for migration? </b></summary>
<p>

It generally takes 24hrs to migrate a number as infra setup has to be done at our end.

</p>
</details>

<details><summary><b> Can you still use their notification engine if 2 FA is disabled? </b></summary>
<p>

Yes.

</p>
</details>

<details><summary><b> Will the approved template be moved and be used after migration? </b></summary>
<p>

Yes. Once migrated, templates will be moved and used from the same day.

</p>
</details>

<details><summary><b> What is the difference between WA business application and WA business API? </b></summary>
<p>

WA business application is an Android app that businesses can download but has limited functionality. WA business API is the service provided by the Yellow.

</p>
</details>

<details><summary><b> Can I track the count of users clicking on "Send Message" and landing on the WhatsApp bot when redirecting from Instagram?</b></summary>
<p>

Yes, you can track the count of users clicking on "Send Message" and landing on the WhatsApp bot from Instagram. Follow these steps:<br/>1. Include UTM parameters in the URL that redirects users from Instagram to the WhatsApp bot. For example `http://sample.com?utm_campaign=testcamp&utm_medium=social&utm_source=instagram`.<br/> 2. After users have landed on the WhatsApp bot, navigate to the Insights section of your platform.<br/> 3. Access the Data Explorer or a similar feature that provides analytics and tracking capabilities.<br/> 4. Look for the <b>Message Events</b> section within the Insights or <b>Data Explorer</b>. Here, you will find relevant metrics and data related to user interactions and events within the WhatsApp bot.<br/><img src="https://i.imgur.com/UC4de37.png"/><br/>Make sure to set up the appropriate UTM parameters and utilize the Insights or Data Explorer tool to track user engagement and measure the success of your Instagram to WhatsApp bot redirection.<br/> If you have any further questions or need assistance, reach out to our <a href="mailto:support@yellow.ai">support team</a>.

</p>
</details>



### Whatsapp Business account setup 


<details><summary><b> What is the character limitation for WhatsApp display Name? </b></summary>
<p>

The display name must contain a minimum of 3 characters. There is no such upper cap at this moment 

</p>
</details>


<details><summary><b> About WhatsApp Account display name approval? </b></summary>
<p>

WhatsApp has some guidelines to be followed for display name.
The guideline is once display name is changed, it cannot be changed for 30 days.

</p>
</details>

<details><summary><b> About Display name rejection </b></summary>
<p>

Facebook has some guidelines to be followed for display name to be approved. A display name must have consistent branding with external sources(e.g., a company's website or marketing).
If they don't feel the display name is abiding all these rules, then they will approve the display name.

- For instance: Facebook account of the client is in the name of Tolaram Grp and display name "Colgate" is rejected by Facebook saying there is no link between the two names. So client has to apply for new account under the name of "Colgate Nigeria."

</p>
</details>

<details><summary><b> How long will it take for the infra setup? </b></summary>
<p>

After you have completed three steps, Whatsapp has to approve your display name which takes 24hrs to be approved. Post that infra setup process begins at our end which takes a maximum 24hrs to complete.

</p>
</details>

<details><summary><b> About getting stuck at OTP verification </b></summary>
<p>

User is getting stuck at OTP verification probably for two reasons:
1. You already have a Whatsapp business API account with another BSP.
2. If the Whatsapp business account is active, please delete the same and retry OTP verification after 5 minutes.

</p>
</details>

<details><summary><b> My bot is connected but not responding on WA </b></summary>
<p>

Answer yet to be drafted.

</p>
</details>


### WhatsApp Configuration


<details><summary><b> How to get the green tick? </b></summary>
<p>

For getting green tick, we have to raise a support ticket to Whatsapp. In this case, please reach out to your POC and share your website and facebook link with them.

</p>
</details>

<details><summary><b> Can we have multiple numbers added to the WABA account? </b></summary>
<p>

Yes. Multiple numbers can be added to the same WABA account.

</p>
</details>


<details><summary><b> Will the services be affected?</b></summary>
<p>

For 24hrs the service will remain broken during migration.

</p>
</details>


<details><summary><b> Can the display name be changed? </b></summary>
<p>

Yes. Display name can be changed after 30 days. 
To change, go to BM and apply for a display name change and then inform your POC about the same.

</p>
</details>

<details><summary><b> Can we use our WhatsApp bot number with another app like lSuperLemon to send abandoned cart notifications? Please confirm? </b></summary>
<p>

No. Once connecting a WhatsApp number with the bot you cannot use it with other apps at the same time.

</p>
</details>


<details><summary><b> About migrating whatsapp account setup from cloudym to app </b></summary>
<p>

Once infra is created, you can connect the same to any bot on the platform.

</p>
</details>


<details><summary><b> Where can I add/edit my profile in the bot? </b> </summary>
<p>

To edit the profile picture and description:
1. Go to channel
2. Click on WhatsApp where it is connected
3. Click on Edit

You can edit all the informations on this page.

</p>
</details>


<details><summary><b> Can I connect one of my prod numbers to dev to just test the bot? </b></summary>
<p>

Need doc on testing in dev mode feature.

</p>
</details>


<details><summary><b> About unable to send notifications to multiple users </b></summary>
<p>

A business starts with 1,000 business-initiated conversations per phone number when it completes business verification.

</p>
</details>

<details><summary><b> How to upgrade my Whatsapp messaging Tier? </b></summary>
<p>

To upgrade your Whatsapp tier and messaging limit, click [here](https://developers.facebook.com/docs/whatsapp/api/rate-limits#quality-rating-and-messaging-limits).

</p>
</details>

<details><summary><b> Can we create multiple chatbots on Whatsapp? </b></summary>
<p>

Yes. Mulitple chatbots can be created with the same WABA account.

</p>
</details>

<details><summary><b> How to get the customers to opt-in for sending notifications? </b></summary>
<p>

There are several ways to get opt-in from from the user.

The following are examples of supported opt-in methods:

- SMS.
- Webpage.
- WhatsApp thread.
- By phone(using an interactive voice response(IVR) flow)
- In person or on paper(customers can sign a physical document to opt in)

</p>
</details>