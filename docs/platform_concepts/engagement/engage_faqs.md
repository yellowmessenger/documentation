---
title : Engage FAQs
sidebar_label : Engage FAQs
featured: true
rank: 1
---

## Outbound Campaigns/Notification API

<details>
<summary> How can we ensure that campaign messages are not sent to users who respond with DND?</summary>

To prevent sending campaigns to users who respond with DND, follow these steps:

1. Create and train an [intent on relevant uttrences like DND and unsubscribe](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#add-intents-and-utterances).
2. Set up a flow triggered by the respective intent.
3. Within the flow, [update the opt-in property when the intent is triggered.
4. Use this updated property as a [condition in segment](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data_segments/creating_managing_user_segment) targeting to exclude users who have opted for DND from receiving further campaign messages.

For a detailed help guide, refer to [Engage user guide](https://docs.yellow.ai/docs/cookbooks/engage/optout-campaigns).

</details>


<details>
<summary> How can I trigger outbound campaigns through API?</summary> 

You can initiate outbound campaigns using notification APIs. These APIs provide the necessary functionality to trigger campaigns programmatically, allowing for seamless integration with your existing systems or applications.

For more details, see[Notification APIs](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/notification-engine#23-postman-collections).

</details>




<details>
<summary> Do we receive any event on the AI-agent if users click on the CTA used in Outbound campaigns? </summary>

No, for CTA button clicks, you will not receive any events on the AI-agent.

</details>

<details>
<summary> How to capture data sent through templates? </summary>

To capture the data sent in the template, You can capture template ID, variable data, and sender ID on Quick Reply buttons, you can use the Quick Reply event. This event will provide you with access to the event data (`{{data.event.data}}`), event name (`{{data.event.templateName}}`), and sender ID (`{{sender}}`).

</details>



<details>
<summary>
 How do I capture additional details from the messages sent?</summary>


To capture additional details from the messages sent, you can pass inside  the `customPayload` in the `config` object. This allows you to include specific data within the message payload, which can then be accessed and processed by your AI-agent. You can pass upto three variables.

For example, you can include relevant variables such as waybill numbers, IDs, or codes within the customPayload field of the config object.

Here's an example of how to structure the customPayload field within the Config object:

```json

{
    "userDetails": {
        "number": ""
    },
    "notification": {
        "type": "whatsapp",
        "sender": "917888000000",
        "templateId": "order_out_for_delivery_prepaid_copy",
        "params": {
            "orderId":"1234",
            "quickReplies": {
                "ctaUrlParam": "order?order_id=2392409"
            }
        }
    },
    "config": {
        "customPayload": {
            "waybill": "15893217051240",
            "cp_id": "4",
            "account_code": "Delhivery Express"
        }
    }
}

```


Then, to retrieve data within your AI-agent, you can use the following syntax:


`{{{data.event.extraParams.customPayload.{variableName}}}}`

For example:


`{{{data.event.extraParams.customPayload.waybill}}}`


</details>


<details>
<summary> How can I mask URL or PDF links in campaigns when the template type is media?

   </summary>
While applying media templates, you don't need to provide the actual invoice file link. Instead, you can share a sample image during the template creation process. For instance, to send invoices, consider replacing standard campaigns with event-triggered campaigns to ensure that the image links are not exposed on the platform. This approach helps maintain confidentiality and prevents unauthorized access to sensitive information.

</details>



### WhatsApp 

<details>

<summary>What is the rate limit for Notification API for WhatsApp channel?</summary>

By default, the rate limit is set to 2000 calls/min. If you want to reduce this rate, create a ticket requesting the same or contact support.
</details>


<details>

<summary>
What’s the ideal image size for a WhatsApp outbound campaign?</summary>
WhatsApp automatically resizes images. It is recommended to keep the aspect ratio of 1:1.
</details>


<details>

<summary>
How to add a WhatsApp number for testing purposes in the Live environment?
</summary>

1. In Channels, select <b>WhatsApp messenger</b> in the Live environment.
2. Click on the more options icon and select **Edit**.

   ![](https://i.imgur.com/8uSndt0.png)

3. **Enable development mode** using the toggle button.

   ![](https://i.imgur.com/MkazXQE.png)

4. Enter the number in **Developer whatsapp number**. 
5. To add more WhatsApp business numbers, click **Add phone numbers**.
6. Click **Save**.

</details>

<details>

<summary>Is there a way to access the delivery status as a response from the Yellow.ai notification API call itself?</summary>

No, there isn't a direct way to access the delivery status as part of the response from the Yellow.ai notification API call. You need to use webhook URL to receive delivery status updates.

The delivery status is asynchronous. This means that we don't have a precise timeframe for when a message will be delivered or read. Consequently, waiting for an unknown duration is not a feasible approach to obtain the delivery status within the API call response.

</details>

<details>
<summary>How to add a welcome message for the WhatsApp channel?</summary>
The default message does not come automatically for WhatsApp. You have to train with initial <a href="https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#24-add-utterance">utterance </a> like “hi” or “hello” to trigger a flow.
</details>


<details>
<summary>If a user replies to a WhatsApp notification with quick reply buttons and triggers a flow using /quick-reply-event, will the /quick-reply-event be triggered again for subsequent quick reply interactions within the same flow?</summary>

No, the /quick-reply-event is specific to WhatsApp notifications and will only be triggered for replies to those notifications. It will not be triggered again for subsequent quick reply interactions within the same flow.
</details>



<details>
<summary> Can we trigger an outbound message on Whatsapp whenever a new user record is added to User 360? </summary>

You can use [User360 events](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#7-user-360-events-system-events) in [Even-based workflow campaign](https://docs.yellow.ai/docs/platform_concepts/engagement/event-triggered-campaign) to send out messages on User 360 events.

</details>


<details>
<summary>Getting this error when creating a WhatsApp template `Cannot read property 'wabaID' of null`</summary>

This error can occur when you are trying to create a WhatsApp template or access a WhatsApp Business number, and the corresponding variable is null or undefined.

To address this error, ensure that the [WhatsApp business account is configured](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration) successfully.

</details>


### Email outbound

<details>
 <summary>Does the platform restrcit sending notifications/emails to duplicates?</summary>
 <div>
  <br/>
  <div>Yes, the platform automatically identifies duplicate identifiers before sending campaign messages or notifications.</div>
   </div>
</details>

<details>
<summary>What are the prerequisites to run bulk email campaigns?</summary>
  

The yellow.ai will help in setting up a Bulk email campaign account. The following are the steps involved:

   - Creating a bulk email campaigns account for the brand.
   - Procuring a dedicated IP address for the brand's email campaign account
   - Doing domain authentication and reverse DNS setup along with the brand's DNS team.
   - Time taken for this activity: 7-10 working days.

</details>


<details>
 <summary>Once the bulk Email campaign is setup, can we run bulk campaigns right away?</summary>

 <div>

   No. Unlike many channels like SMS, WhatsApp, we cannot send lakhs or thousands of emails from day one. Email is a highly regulated channel where the ISP (internet service providers and the end-user's email clients (aka emailbox) screens for the reputation of the IP address from which the emails are sent from.

   Hence, we need to spend considerable time in increasing the reputation of the IP address from which the bulk emails are sent. This process is called ‘IP Warming’.

</div>
</details>

<details>
<summary>What is an IP address?</summary>

Internet Protocol Address (shortly, IP address) is a unique numerical address that defines your location on the internet. Roughly , this is like your house address which is needed to locate you and your identity .

  

Each of internet-connected device will have an IP address. To know your local IP address, Google for *What is my IP?*, and you will get the answer.
</details>


<details>
<summary>
What is IP warming?</summary>

IP addresses need to build reputation. The higher the reputation higher is the chance for the mails to be successfully delivered to the end users’ mailbox. To improve the reputation, we perform IP warming.

IP warming is the process of incrementally adding email volume to the new IP address over multiple days and weeks to build a positive sending reputation among the mailbox providers.

Mailboxes treat a new IP address with suspicion until they build a positive sending reputation.

Typically, it takes 4-8 weeks to achieve highest deliverability (subject to vary based on email volume and engagement).

</details>



<details>
<summary>
What are the tips for IP warm up planning?</summary>


- Start your email program with the email content that you feel will perform the best with respect to engagement (opens, clicks).
- Start your email program with the users that you know are most likely to open/engage with your emails (It could be your best users, favourite customers active on email).
- As you progress with the warm-up plan, keep adding 10-15% of your older user audience to your most engaging user segment that you started with.
- During the course of the IP warming program, we should be incrementally adding the audience size from highest engaging users to the lowest, dull engaging users based on the historic experience.
- During the first two weeks, send emails to the most engage-worthy users. The brands could help with the audience.
- During the third and fourth weeks, we could include the audience users who have opened/clicked emails in last 60 days from your previous email program.
- During the first six weeks, we should avoid sending emails to the least engaged/ bounce-worthy users, spam-markers.

  **IP warm-up plan** for new dedicated IP address (for enterprises with high-volume email program plans).

  

[Typical IP Warm-up plan.pdf](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/4980E2FD-1F82-4D61-B270-BF2F010EC67C/0D158801-34F9-48AA-B5F8-9743DC239DB7_2/Typical%20IP%20Warm-up%20plan.pdf)

  

IP warm-up plan can tweaked based on the brand’s maximum volume expected to be sent. The thumb rule is that rushing up the IP warming process is not recommended. Going incrementally and steadily is the key.

 </details>
 
<details>
<summary> 
What should we consider for IP warm-up plan?</summary>
 

  
- Different mailbox providers may delay the mail delivery, block the emails during the initial days. It is important to discover the bad user segments after each day and ensure to add the engage-worthy userbase on a daily basis during the warm-up plan.
- IP warming is not only about the incremental increase in volume but also about the engagement ( opens, clicks, bounces, getting marked as spam).
- Opens & clicks engagement positively impact the IP sending reputation.
- Bounces, invalid user email addresses, and spam reports negatively impact the IP sending reputation.
- To keep the engagement rate high, ensure to send emails only to the opted-in users.
- Begin your email sending program by sending an opt-in sign up form. You can have email opt-in across your digital portfolio such as website, WhatsApp bots etc.
- Send only high-relevant content.
- Request the users to whitelist your email ID to deliver directly to ‘primary inbox’ instead of spam or promotions.
- As the list grows, remove non-engaging users.

</details>
 







<details>

<summary>What is a domain?</summary>

  

Computers are extremely fast. They can handle the IP addresses of the Internet-connected devices which are numerical. However, we humans have a lot other things to remember, right? To bail you out from remembering the numerical IPs, comes the domain names.




Domain names are human-readable address. For example, yellow.ai , google.com, Yellow and Google are the domains. `.ai` and `.com` are called top level domains.

</details>



<details>

<summary>What is a sub-domain?</summary>


In the example docs.yellow.ai, `docs` is the sub-domain of yellow.ai.

</details>


<details>

<summary>
Are these domains taken for rent?
</summary>

Yes, you cannot own domains. You can only pay and get the right to use it for the approved time (say 2 years) before renewal. If you fail to renew, this will be available for someone else to buy for a rent.

The place where you pay and get the domains are called 'Registrars'. For example, GoDaddy, CloudFlare (DNS names given are for example and not as a recommendation from yellow.ai) is a registrar from whom you can get domains.
</details>




<details>

<summary>What is DNS?</summary>

In short, Domain Name System (DNS) behaves like a translator. Whenever you types something like yellow.ai on the browser, DNS translates this to computer-friendly IP address and that's why the particular page gets opened.

</details>



<details>

<summary>Is warm-up process needed for SMTP-based transactional/update emails?</summary>

  

No. as this is high-context, relevant and non-bulk outbound type. Also, the SMTP is expected to be sending emails already.

</details>


<details>

<summary>When to use SMTP configuration?</summary>

  
SMTP configuration can be used when the purpose is to send 1:1 transactional/update email notifications through our Notifications API or Workflow campaign and not usually recommended for bulk promotional ones.

</details>





## SMS outbound

<details>

<summary>
Who regulates SMS communication in India?
</summary>


Telecom Regulatory Authority of India (TRAI) is the regulatory body for brand-customer communication.

</details>


<details>

<summary>
Who are the telco operators?
</summary>

Telecom (Or Telco) operators are the likes of brands like Airtel, Jio, Vodafone in India that ensures flow of SMSs (from brands to customers, in this case).

</details>


<details>

<summary>
What is a DLT account?</summary>

Distributed Ledger Technology (DLT) is an account which brands need to create by giving relevant business info. The DLT account is in place to prevent customers from being SMS-spammed.

Brands should create a new DLT account with one of the Telco providers.
</details>


<details>
<summary>
What is an Entity ID?
</summary>

Entitiy ID is the unique ID given to the brand by the TRAI upon successful creation of the DLT account. There can be only one DLT account per business.
</details>


<details>

<summary>
What is a Sender ID (or Header)?
</summary>

Sender ID or Header is a 6-digit alphabetic name for transactional messages and telco operator-fixed 6-digit number for promotional messages. This is a personification of the brand’s contact name with respect to SMS.
</details>

<details>
<summary>
What is a template ID?
</summary>

This is the unique reference to the template message that you apply in the your DLT portal.
</details>


<details>
<summary>
What are the types of SMS notifications brands cans send?
</summary>

There are two types of SMS notifications  - 1. Promotional 2. Transactional.

Transactional notifications has three types:

a. OTP - only for banks.<br/>
b. Service Implicit - transactional notifications sent based on customer’s actions (e.g, product purchase confirmations, service related info, order/delivery status info, OTP by brands).<br/>
c. Service Explicit - Notifications to existing customers only promoting other products/services of the brand.<br/>
</details>


## Campaign errors & troubleshooting

<details>

<summary> Campaign failed with error "Malformed issue" </summary>

The 'Malformed issue' typically occurs when essential properties in your template, such as the phone number, are not available for some users. To resolve this, ensure that the required property variables are accurately captured.

</details>


<details>
<summary> 
WhatsApp message not received by end user
</summary> 


When a campaign triggered via the yellow.ai platform or through API notification fails to deliver the template to the end user's WhatsApp number, it's essential to identify and resolve the issue promptly. This guide provides steps to troubleshoot and resolve WhatsApp message failures effectively.

**To access failure reports, you need access to AI-agent admin or insights admin***.

#### Steps to resolve

**A. If the campaign is triggered from our Yellow.ai platform:**

1. Navigate to the Engagement module and select the Outbound option under the Engage module.
2. [Download the campaign report](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/view-outbound#download-and-analyse-campaign-report) for the specific campaign to identify any failures.
3. Two reports will be sent to your email address: one indicating the achievement of the set goal and the other highlighting failures with reasons under the error resolution column.

  ![campaign reort](https://i.imgur.com/jQd2VqR.png)
 
**B. If the campaign is triggered using the Notification API**:

1. In the Insights module, navigate to **Data Explorer** page .
2. Open the notification report and filter by campaign ID, template name, or status and click **Apply filters**.

   ![img](https://i.imgur.com/jegyYyw.png)

3. In the Error messages column, hover on the row for which you want to see the reason for message failure.

   ![](https://i.imgur.com/VI1YO88.png)


Additionally, to receive API reports:

For campaigns triggered using API notifications, you can receive the notification report via email based on your preference (This is not applicable for campaigns scheduled via the campaign manager module).


1. In the left navigation bar, go to **Settings** > **API report** under the Engage option.
 
  ![img](https://i.imgur.com/bIDJeND.png)

2. In **Send notification API reports to**, add each email address, and press enter after each.
3. Select the date range for receiving the report and click **Confirm**.

   ![img](https://i.imgur.com/jrpsPte.png)



</details>

