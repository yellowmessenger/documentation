---
title: Email channel configuration
sidebar_label: Email
---

xThere are two types of Email sender types for pushing outbound email notifications.

1. Via the Local Email SMTP
2. Via HTTP-based Email API

## What is an Email SMTP?

SMTP stands for Simple Mail Transfer Protocol. It is a simple mechanism to relay (send/receive) emails from/to your mail server.

Traditionally , the one-off emails that we send from our mailbox to another is powered by SMTP.

## What are web-based Email API?

Web-based Email API is a mechanism to exchange emails via HTTP.

## What is Email channel configuration?

The yellow.ai platform needs permission to send emails on behalf of the sending email ID. This can be done either by configuring the SMTP of the brand’s sending email ID or by adding the web-based Email API key to the platform.

Upon successful configuration, the platform can send emails from the associated Email ID.

## How to configure an SMTP in the yellow.ai platform?

- Go to Channels → and look for ‘Email’

![Screenshot 2022-03-01 at 5.36.14 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/81C11B9E-EA67-4CE1-8B45-B1E37ACC722C/344F2251-7419-4B68-91C2-729A05AF4B0F_2/Screenshot%202022-03-01%20at%205.36.14%20PM.png)

- Start editing your SMTP
- Select ‘Basic’ type
- Add the SMTP details of the Email ID from which you want to send emails.

→ Email and Username will be the sening Email ID. For ex, support@abc.com
→ Example of Server /Host: smtp.gmail.com, smtp.office365.com etc
→ Password will be the mail password. Some mail servers like Gmail offers [safer alteratives](https://support.google.com/mail/answer/185833?hl=en) to expose the password. That can be genrated and given for SMTP configuration.
→ Add port and security type

The IT team of your business will be able to help you in fetching the exact SMTP details.

![Screenshot 2022-03-01 at 5.39.01 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/81C11B9E-EA67-4CE1-8B45-B1E37ACC722C/CD9AE7A3-08DF-461F-92BA-BA8E1DAD090A_2/Screenshot%202022-03-01%20at%205.39.01%20PM.png)

- You can also select 'Advanced' and paste the SMTP as a JSON.

![Screenshot 2022-03-01 at 5.52.27 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/81C11B9E-EA67-4CE1-8B45-B1E37ACC722C/85706BF6-9D22-4E63-BB95-339CA56FF330_2/Screenshot%202022-03-01%20at%205.52.27%20PM.png)

- Save the configuration and you're done with the SMTP Email configuration

## How to configure and get started with web-based Email API in the yellow.ai platform?

Reach out to the yellow.ai team for setting up an email account. The process will cover domain/subdomain authentication , dedicated IP address procurement among others.

## When to choose: SMTP vs Email API?

**SMTP:**

→ The brand’s own SMTP can be used for sending transactional, support, workflow-driven, one-off emails.

→ Not recommended for sending bulk, promotional email campaigns

**Email API:**

→ This mechanism can be chosen when the usecase is to send bulk emails for promotional goals

→ This method will come with engagement metrics such as opens, clicks.
