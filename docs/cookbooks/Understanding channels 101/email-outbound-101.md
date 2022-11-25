---
title: Email outbound 101
sidebar_label: Email outbound
---

This is a refresher guide 101 covering commonly asked questions around Email campaigns.

## Once the bulk Email campaign is setup, can we run bulk campaigns right away?

No. Unlike many channels like SMS, WhatsApp, we cannot send lakhs or thousands of emails from day one. Email is a highly regulated channel where the ISP (internet service providers and the end-user's email clients (aka email box) screens for the reputation of the IP address from which the emails are sent from.

Hence, we need to spend considerable time in increasing the reputation of the IP address from which the bulk emails are sent. This process is called ‘IP Warming’.


  
## Are these domains taken for rent?

Yes. You cannot own domains. You can only pay and get the right to use it for the approved time (say 2 years) before renewal. If you fail to renew, this will be available for someone else to buy for a rent.

The place where you pay and get the domains are called 'Registrars'. For ex, GoDaddy, CloudFlare (DNS names given are for example and not as a recommendation from yellow.ai) is a registrar from whom you can get domains.

  

## What does DNS mean?

  

In short, Domain Name System (DNS) behaves like a translator. Whenever you types something like yellow.ai on the browser, DNS translates this to computer-friendly IP address and that's why the particular page gets opened.

  

## What is Domain authentication?

Email IDs read like this: support@abc.com, marketing@companydomain.com

We send support, transactional and promotional emails from such email IDs of  our brands.

Now, we need to map the brand's email domain to a dedicated IP address for sending bulk emails. This process is called 'Domain authentication ‘.

## How to perform Domain authentication?


From the bulk email campaign account created for the brand, we will send something called ‘CNAME’ records to the mail ID suggested by the brand. CNAME records are a type of DNS records.

DNS records are like text instructions available in the DNS server (the view of this is possible in the registrar account of the brand such as GoDady account of the brand). In certain cases, instead of CNAMEs, TXT and MX records will be generated for domain authentication.

These DNS records tell what IP address is associated with what domains.

By performing domain authentication, we map an IP address to the domains/subdomains of the brand.

The CNAME records sent by us to the brand should be manually added by the brand in their DNS/ domain registrar portal.

Typically, it takes upto 48 hours for the domain to be authenticated or rejected.

  

## What to do after Domain authentication setup?


We do reverse DNS. Reverse DNS is the opposite of domain auth , that is,  connect the domain to the IP address.

  

## What is IP warming?

IP addresses need to build reputation. The higher the reputation higher is the chance for the mails to be successfully delivered to the end users’ mailbox. To improve the reputation, we perform IP warming.

IP warming is the process of incrementally adding email volume to the new IP address over multiple days and weeks to build a positive sending reputation among the mailbox providers.

Mailboxes treat a new IP address with suspicion until they build a positive sending reputation.

Typically, it takes 4-8 weeks to achieve highest deliverability (subject to vary based on email volume and engagement).

  

## What are the tips and plan for IP warm-up?


**IP warm-up tips**:
* Start your email program with the email content that you feel will perform the best with respect to engagement (opens, clicks).
* Start your email program with the users that you know are most likely to open/engage with your emails (It could be your best users, favourite customers active on email).
* As you progress with the warm-up plan, keep adding 10-15% of your older user audience to your most engaging user segment that you started with.
* During the course of the IP warming program, we should be incrementally adding the audience size from highest engaging users to the lowest, dull engaging users based on the historic experience.
* During the first two weeks, send emails to the most engage-worthy users. The brands could help with the audience.
* During the third and fourth weeks, we could include the audience users who have opened/clicked emails in last 60 days from your previous email program.
* During the first six weeks, we should avoid sending emails to the least engaged/ bounce-worthy users, spam-markers.

  

**IP warm-up plan** for new dedicated IP address (for enterprises with high-volume email program plans).

  

[Typical IP Warm-up plan.pdf](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/4980E2FD-1F82-4D61-B270-BF2F010EC67C/0D158801-34F9-48AA-B5F8-9743DC239DB7_2/Typical%20IP%20Warm-up%20plan.pdf)

  

IP warm-up plan can tweaked based on the brand’s maximum volume expected to be sent. The thumb rule is that rushing up the IP warming process is not recommended. Going incrementally and steadily is the key.

  

## What should we consider during IP warm-up plan?

  
* Different mailbox providers may delay the mail delivery, block the emails during the initial days. It is important to discover the bad user segments after each day and ensure to add the engage-worthy userbase on a daily basis during the warm-up plan.
* IP warming is not only about the incremental increase in volume but also about the engagement ( opens, clicks, bounces, getting marked as spam).
* Opens & clicks engagement positively impact the IP sending reputation.
* Bounces, invalid user email addresses, and spam reports negatively impact the IP sending reputation.
* To keep the engagement rate high, ensure to send emails only to the opted-in users.
* Begin your email sending program by sending an opt-in sign up form. You can have email opt-in across your digital portfolio such as website, WhatsApp bots etc.
* Send only high-relevant content.
* Request the users to whitelist your email ID to deliver directly to ‘primary inbox’ instead of spam or promotions.
* As the list grows, remove non-engaging users