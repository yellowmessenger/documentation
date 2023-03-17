---
title : Engage FAQs
sidebar_label : Engage FAQs
featured: true
rank: 1
---

### WhatsApp 

<details>

<summary>

What is the rate limit for Notification API for WhatsApp channel?
</summary>
By default, the rate limit is set to 2000 calls/min. If you want to reduce this rate, create a ticket requesting the same or contact support.
</details>

<details>

<summary>
How to add a WhatsApp number for testing purposes in the Live environment?
</summary>

1. In Channels, select <b>WhatsApp messenger</b> in the Live environment.
2. Click on the more options icon and select **Edit**.

   ![](https://i.imgur.com/gPwidHR.png)

3. **Enable development mode** using the toggle button.

   ![](https://i.imgur.com/9RD6Jah.png)

4. Enter the number in **Developer whatsapp number**. 
5. To add more WhatsApp business numbers, click **Add phone numbers**.
6. Click **Save**.

</details>


<details>
<summary>How to add a welcome message for the WhatsApp channel?</summary>
The default message does not come automatically for WhatsApp. You have to train with initial <a href="https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#24-add-utterance">utterance </a> like “hi” or “hello” to trigger a flow.
</details>





<details>
<summary> Can we trigger an outbound message on Whatsapp whenever a new user record is added to User 360? </summary>

You can use [User360 events](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#7-user-360-events-system-events) in [Even-based workflow campaign](https://docs.yellow.ai/docs/platform_concepts/engagement/event-triggered-campaign) to send out messages on User 360 events.

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

