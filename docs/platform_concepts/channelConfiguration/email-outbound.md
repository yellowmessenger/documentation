---
title: Email channel configuration
sidebar_label: Email
---
There are two types of Email senders for pushing outbound email notifications.
1. Via the Local Email SMTP
2. Via HTTP-based Email API

## 1. Email SMTP vs. Web-based Email API

**Email SMTP**

SMTP stands for Simple Mail Transfer Protocol. It is a simple mechanism to relay (send/receive) emails from/to your mail server.
Traditionally, the one-off emails that we send from our mailbox to another are powered by SMTP.

**Web-based Email API**

Web-based Email API is a mechanism to exchange emails via HTTP.

---

## 2. Email channel configuration

The yellow.ai platform needs permission to send emails on behalf of the sending email ID. This can be done either by configuring the SMTP of the brand’s sending email ID or by adding the web-based Email API key to the platform.
Upon successful configuration, the platform can send emails from the associated Email ID.

## 3. Configure SMTP 

To configure an SMTP in the yellow.ai platform, follow the given steps: 

- Open **Channels** . Search for **Email**.

<center>
<img src="https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/81C11B9E-EA67-4CE1-8B45-B1E37ACC722C/344F2251-7419-4B68-91C2-729A05AF4B0F_2/Screenshot%202022-03-01%20at%205.36.14%20PM.png" alt="drawing" width="60%"/>
</center>

- Start editing your SMTP.
- Select ‘Basic’ type.
- Add the SMTP details of the Email ID from which you want to send emails.

:::info
→ Email and Username will be the sending Email ID. For example, support@abc.com.   
→ Example of Server /Host: smtp.gmail.com, smtp.office365.com etc.   
→ Password will be the mail password. Some mail servers like Gmail offers [safer alternatives](https://support.google.com/mail/answer/185833?hl=en) to expose the password. That can be generated and given for SMTP configuration.   
→ Add port and security type.    

The IT team of your business will be able to help you in fetching the exact SMTP details.

![Screenshot 2022-03-01 at 5.39.01 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/81C11B9E-EA67-4CE1-8B45-B1E37ACC722C/CD9AE7A3-08DF-461F-92BA-BA8E1DAD090A_2/Screenshot%202022-03-01%20at%205.39.01%20PM.png)
::: 

- You can also select **Advanced** and paste the SMTP as a JSON.  

![Screenshot 2022-03-01 at 5.52.27 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/81C11B9E-EA67-4CE1-8B45-B1E37ACC722C/85706BF6-9D22-4E63-BB95-339CA56FF330_2/Screenshot%202022-03-01%20at%205.52.27%20PM.png)

- Save the configuration and the SMTP Email configuration is completed. 

## 4. Configure Custom SMTP

:::info

**Email**: Enter the email ID using which you want to send the outgoing emails (e.g, support@xyz.com).  

**Server**: The value will be unique for each mail server. For example, it will be smtp.gmail.com for the Gmail server and smtp.office365.com for the Outlook server. In some cases like a private server, the value will be an IP address of the SMTP connector service.  

**Username**: Enter the same email ID as added in the ‘Email’ field.  

**Password**: For Gmail SMTP, go with the app password. Refer to this document on how to fetch the app password from Gmail. Do not add your mail login password.   

**Port**: The port value where you want to establish the SMTP connection can be 465, 587 or 25.   

**Security type**: Enter the appropriate security type - SSL or TLS.  
:::

### 4.1 Get your Outlook SMTP

To get outlook SMPT, follow the given steps on outlook: 

1. Go to **File**.  
2. Click **Info** > Navigate to **Account settings**.  
3. Look for the Email address you want to configure at the yellow.ai platform.  
4. Look out for the ‘Outgoing server field’.  
5. You will find the SMTP you want.   


### 4.2 Get your Gmail SMTP

For emails to be sent from smtp.gmail.com make sure you have followed these 2 steps:
1. In your google account, have 2-Step Verification enabled. 
2. Go to https://security.google.com/settings/security/apppasswords. 
    - Click **Select app** and choose Other (custom name) from the dropdown.   
    - Click **Generate**.   
    - You will receive a 16-digit code, this code should be used as a password in email configuration and the user remains as your email.  



---

## 5. Configure and get started with web-based Email API 

:::note
Reach out to the [yellow.ai team](mailto:vishnu@yellow.ai) for setting up an email account. The process will cover domain/subdomain authentication, and dedicated IP address procurement among others.
:::



## 6. Comparison: SMTP vs Email API

Use the following table as a reference to decide on when to choose SMPT and Email API: 

|SMTP  | Email API |
|--|--|
| The brand’s own SMTP can be used for sending transactional, support, workflow-driven, one-off emails. | This mechanism can be chosen when the use case is to send bulk emails for promotional goals. |
|Not recommended for sending bulk, promotional email campaigns.|This method will come with engagement metrics such as opens, and clicks.|

