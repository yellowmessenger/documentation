---
title : Engage FAQs
sidebar_label : Engage FAQs
---


### Email outbound

<details>
 <summary>Does the platform restrcit sending notifications/emails to duplicates?</summary>
 <div>
  <br/>
  <div>Yes, the platform automatically identifies duplicate identifiers before sending campaign messages or notifications.</div>
   </div>
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

<summary>What is a domain?</summary>

  

Computers are extremely fast. They can handle the IP addresses of the Internet-connected devices which are numerical. However, we humans have a lot other things to remember, right? To bail you out from remembering the numerical IPs, comes the domain names.

Domain names are human-readable address. For example, yellow.ai , google.com, Yellow and Google are the domains. `.ai` and `.com` are called top level domains.

</details>



<details>

<summary>What is a sub-domain?</summary>


In the example docs.yellow.ai, `docs` is the sub-domain of yellow.ai.

</details>





<details>

<summary>Is warm-up process needed for SMTP-based transactional/update emails?</summary>

  

No. as this is high-context, relevant and non-bulk outbound type. Also, the SMTP is expected to be sending emails already.

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

Two types: 1. Promotional 2. Transactional

Transactional notifications has three types:

a. OTP - only for banks
b. Service Implicit - transactional notifications sent based on customer’s actions (e.g, product purchase confirmations, service related info, order/delivery status info, OTP by brands )
c. Service Explicit - Notifications to existing customers only promoting other products/services of the brand
</details>

