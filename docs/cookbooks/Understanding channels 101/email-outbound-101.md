---
title: Understanding Email outbound 101
sidebar_label: Email outbound
---

This is a refresher guide 101 covering commonly asked questions around Email campaigns.

## What is an Email outbound campaign ?

Email outbound is a way to push outgoing emails by the brands to the end consumers for promotional and transactional objectives.

## What are the types of Email outbound campaigns?

Crisply written for you.

1.  Bulk email campaign for **promotional reasons** (for ex, Holiday offers, New product launch)

2.  1-o-1 high-context email notifications for **transactional reasons /updates** (for ex, Appointment reminder, Email confirmation , OTP, password change)

## Is there anything about the frequency of emails?

Certainly, yes. Emails can be one-off or drip-based.

**One-off:** If a brand decides to send a holiday email for once, it is sent as a one-off and the campaign ends there.

**Drip-based:** There are usecases such as event date reminders. Assume one user sighned up for your brand’s webinar event. The timely reminders can be sent as T-10 days , T-5 days, T-1 day.

## How can the bulk email campaigns can be sent?

The bulk email campaigns can be sent from the yellow.ai platform’s Engage Outbound module user interface.

## What are the prerequsites/preparedness required to run bulk email campaigns?

The yellow.ai will help in setting up a ‘Bulk email campaign account’.

## What are the steps involved?

→ Creating a bulk email campaigns account for the brand
→ Procuring a dedicated IP address for the brand's email campaign account
→ Doing domain authentication and reverse DNS setup along with the brand's DNS team
→ Time taken for this activity: 7-10 working days

## What after the Bulk Email campaign setup for the brand? Can we run bulk campaigns right away?

Oh nah, nah. Nope.

Unlike many channels like SMS, WhatsApp, we cannot send lakhs or thousands of emails from day 1. Email is a highly regulated channel where the ISP (internet service providers and the end-user's email clients (AKA emailbox) screens for the reputation of the IP address from which the emails are sent from.

Hence, we need to spend considerable time in increasing the reputation of the IP address from which the bulk emails are sent. This process is called ‘IP Warming’.

## Before explaining about ‘IP warming’ can I brief you what is an IP address?

Internet Protocol Address (shortly IP address) is a unique numerical address that defines your location on the internet. Roughly , this is like your house address which is needed to locate you and your identity .

Each of internet-connected device will have an IP address. Do you want to know what is your local IP address? Google - “ What is my IP?” and you will get the answer.

## Now that you understood what is an IP address, let’s see what is a domain.

Mahn, computers are extremely fast. They can handle the IP addresses of the Internet-connected devices which are numerical. But, we humans have a lot other things to remember right? To feed your dog or to complete this office work. So, to bail you out from remebering the numerical IPs comes the domain names.

Domain names are human-readable address. For ex, yellow.ai , google.com, yellow and google are the domains. .ai and .com are called Top level domains.

## What is a sub-domain?

Simple. If you take docs.yellow.ai, docs is the sub-domain.

## Where does these domains are taken for rent?

Yes. You cannot own domains. You can only pay and get the right to use it for the approved time (say 2 years) before renewal. If you fail to renew, this will be available for someoneelse to buy for a rent.

The place where you pay and get the domains are called 'Registrars'. For ex, GoDaddy, CloudFlare (DNS names given are for example and not as a recommendation from yellow.ai) is a registrar from whom you can get domains.

## Now, What does DNS mean/do?

In short, Domain Name System (DNS) behaves like a translator. Whenever you types something like yellow.ai on the browser, DNS translates this to computer-friendly IP address and that's why the particular page gets opened.

## Great learning so far. Let’s quickly understand what is ‘Domain Authentication’?

Email IDs read like this right: support@abc.com, marketing@companydomain.com

We send support, transactional and promotional emails from such email IDs of the our brands, don’t we?

Now, we need to map the brand's email domain to a dedicated IP address for sending bulk emails. This process is called 'Domain authentication ‘.

## How do we perform ‘Domain authentication'?

From the bulk email campaign account created for the brand, we will send something called ‘CNAME’ records to the mail ID suggested by the brand. CNAME records are a type of DNS records.

DNS records are like text instructions available in the DNS server (the view of this is possible in the registrar account of the brand such as GoDady account of the brand). In certain cases, instead of CNAMEs, TXT and MX records will be generated for domain authentication.

These DNS records tell what IP address is associated with what domains.

By performing domain authentication, we map an IP address to the domains/subdomains of the brand.

The CNAME records sent by us to the brand should be manually added by the brand in their DNS/ domain registrar portal.

Typically, it takes upto 48 hours for the domain to be authenticated or rejected.

## After Domain authentication , what is next?

We do reverse DNS. Reverse DNS is the opposite of domain auth ie to connect the domain to the IP address.

## Awesome, the domain auth and reverse DNS is completed. Let's get started with IP warming.

IP addresses need to build reputation. The higher the reputation higher is the chance for the mails to be successfully delivered to the end users’ mailbox. To improve the reputation, we perform IP warming.

IP warming is the process of incrementally adding email volume to the new IP address over multiple days and weeks to build a positive sending reputation among the mailbox providers.

Mailboxes treat a new IP address with suspicion until they build a positive sending reputation.
Typically, it takes 4-8 weeks to achieve highest deliverability (subject to vary based on
email volume and engagement).

## Let me share with you the IP warm-up tips & plan.

IP warm-up tips to note:
→ Start your email program with the email content that you feel will perform the best with respect to
engagement (opens, clicks).

→ Start your email program with the users that you know are most likely to open/engage with your emails (It could be your best users, favourite customers active on email).

→ As you progress with the warm-up plan, keep adding 10-15% of your older user audience to your most engaging user segemt that you started with.

→ During the course of the IP warming program, we should be incrementally adding the
audience size from highest engaing users to the lowest, dull engaging users based on the
historic experience.

→ During the first two weeks, send emails to the most engage-worthy users. The brands could
help with the audience.

→ During the third and fourth weeks, we could include the audience users who have  
 opened/clicked emails in last 60 days from your previous email program.

→ During the first six weeks, we should avoid sending emails to the least engaged/ bounce-
worthy users, spam-markers.

IP warm-up plan for new dedicated IP address (for enterprises with high-volume email program plans).

[Typical IP Warm-up plan.pdf](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/4980E2FD-1F82-4D61-B270-BF2F010EC67C/0D158801-34F9-48AA-B5F8-9743DC239DB7_2/Typical%20IP%20Warm-up%20plan.pdf)

IP warm-up plan can tweaked based on the brand’s maximum volume expected to be sent. The thumb rule is that rushing up the IP warming process is not recommended. Going incrementaly and steadily is the key.

## Some things to keep in mind during IP warm-up plan.

→ Different mail box providers may delay the mail delivery, block the emails during the initial days. It’s important to discover the bad user segments after each day and ensure to add the engage-worthy userbase on a daily basis during the warm-up plan.

→ IP warming is not only about the incremental increase in volume but also about the engagement ( opens, clicks, bounces, getting marked as spam).

→ Opens & clicks engagement positively impact the IP sending reputation.

→ Bounces, invalid user email addresses, and spam reports negatively impact the IP sending reputation.

→ To keep the engagement rate high, ensure to send emails only to the opted-in users.

→ Begin your email sending program by sending an opt-in sign up form. You can have email opt-in across your digital portfolio such as website, WhatsApp bots etc

→ Send only high-relevant content

→ Request the users to whitelist your email ID to deliver directly to ‘primary inbox’ instead of spam or promotions

→ As the list grows, remove non-engaging users

## Can we discuss a little about transactional 1-o-1 email notifications ?

Sure. For 1-o-1 email notifs, the SMTP server details of the email ID of the brand is good enough.

SMTP is needed to send emails from your email ID to the receiver’s email ID. The brand’s IT team can help in sharing the SMTP credentials of the sending email domain. _The typical details of the SMTP are:_ SMTP user name, SMTP password, Host/server, Port, security type. User name is nothing but the sending email ID.

By configuring the SMTP of the brand to our platform, our platform is given the permission to send emails on behalf of the email domain.

![Screenshot 2022-02-09 at 10.42.29 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/4980E2FD-1F82-4D61-B270-BF2F010EC67C/DE78C8C9-954B-452D-9656-83D3DA38C288_2/Screenshot%202022-02-09%20at%2010.42.29%20PM.png)

## On what usecases SMTP can be made use of?

SMTP configuration can be used when the usecase is to send 1-o-1 transactional/update email notifs via our Notifications API or workflow and not usually recommended for bulk promotional ones.

## Is warm-up process needed for SMTP-based transactional/update emails?

No. Because this is high-context, relevant and non-bulk outbound type. Also, the SMTP is expected to be sending emails already.
