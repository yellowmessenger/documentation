---
title: Email channel configuration
sidebar_label: Email
---

## 1. Introduction
There are two types of Email senders for pushing outbound email notifications.
1. Via the Local Email SMTP
2. Via HTTP-based Email API

* **Email SMTP**

Simple Mail Transfer Protocol (SMTP) is a simple mechanism to relay (send/receive) emails from/to your mail server.
Traditionally, the one-off emails that we send from our mailbox to another are powered by SMTP.

:::note
Use SMTP configuration when the purpose is to send 1:1 transactional/update email notifications through our [Notifications API](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/notification-engine/) or [Workflow}(https://docs.yellow.ai/docs/platform_concepts/engagement/workflowCampaign) campaign and not usually recommended for bulk promotional ones.
:::

* **Web-based Email API**

   Web-based Email API is a mechanism to exchange emails via HTTP.

### 1.1 SMTP vs. Email API

Use the following table as a reference to decide on when to choose between SMPT and Email API: 

|SMTP  | Email API |
|--|--|
| The brand’s own SMTP can be used for sending transactional, support, workflow-driven, or one-off emails. | This mechanism can be chosen when the use case is to send bulk emails for promotional goals. |
|Not recommended for sending bulk, promotional email campaigns.|This method will come with engagement metrics such as open rate, and click rate.|

---

## 2. Add sender email account

The yellow.ai platform needs permission to send emails on behalf of the email ID used to send emails. You can either do it by configuring the SMTP of the brand’s professional sender email ID or adding the web-based email API key to the platform.
Upon successful configuration, the platform can send emails from the associated Email ID.



### 2.1 Set up SMTP-based email account (normal)

This setup provides our platform with the permission to send emails on behalf of the email domain.


To configure an SMTP in the yellow.ai platform, follow the given steps:

1. Open your project and navigate to > **Channels** > **Email**.

   ![](https://i.imgur.com/QJpx4QX.png)


  2. Click **Add account**
  
  ![](https://i.imgur.com/3pEdg2k.png)

For SMTP set up, add the SMTP details of the email address from which you want to send emails.

3. In **Email details**, select **Basic** to add details manually. Alternatively, you can also select **Advanced** and paste the SMTP as a JSON.

  ![](https://i.imgur.com/3pEdg2k.png)


4. In **Configuration objective**, select the purpose of the current email account - Campaigns and/or support ticketing.
5. In **Email**, enter the email address (sender ID) that you want to associate with the account. For example, support@abc.com.
6. In **Server**, enter the host URL.

   The value will be unique for each mail server. For example, it will be smtp.gmail.com for the Gmail server and smtp.office365.com for the Outlook server. In some cases like a private server, the value will be the IP address of the SMTP connector service.
7. In **Username**, enter the same email address that you entered in the Email field. For shared accounts such as Microsoft, these could be different.
8. In **Password**, enter the app password of the specified email address. To know how to generate and use app password for each server, see [Google](https://support.google.com/accounts/answer/185833?hl=en), [Microsoft](https://support.microsoft.com/en-us/account-billing/using-app-passwords-with-apps-that-don-t-support-two-step-verification-5896ed9b-4263-e681-128a-a6f2979a7944)

:::note
* Some email servers like Gmail offers [safer alternatives](https://support.google.com/mail/answer/185833?hl=en) to expose the password. You can generate it and provide it in SMTP configuration.
* The IT team of your business will be able to help you in fetching the exact SMTP details.
:::

9. In **Port**, choose the desired port value where you want to establish the SMTP connection can be 465, 587 or 25.
10. In **Security type**, choose the appropriate security type - SSL or TLS.
11. Click **Save**.

Similarly, you can add multiple email accounts and choose your preferred sender ID when configuring an outbound campaign.

![](https://i.imgur.com/Txsk01e.png)


### 2.2 Set up SMTP-based email account (JSON)

You can also configure SMTP using the JSON code.

To configure an SMTP using JSON, follow the given steps -

1. Open your project and navigate to > **Channels** > **Email**.

   ![](https://i.imgur.com/QJpx4QX.png)


  2. Click **Add account**
  
  ![](https://i.imgur.com/3pEdg2k.png)

For SMTP set up, add the SMTP details of the email address from which you want to send emails.

3. In **Email details**, select **Advanced** 
4. Paste the JSON code of the SMTP.



```
{
    "service": "Outlook365",
    "auth": {
        "user": "user name to login",
        "pass": "login password"
    }
}
```


If the client’s email service provider has disabled auth, then you can remove auth object.

```
{
    "host": "smtp.outlook365.com",
    "port: 587",
    "secure": false,
    "auth": {
        "user": "user name to login",
        "pass": "login password"
    }
```

:::note
* To send mails on behalf of client, the client should enable SMTP authentication.
* In cases where clients have disabled SMTP auth for security reasons, they can whitelist ym’s IP and allow emails from that IP.
* For Ym to receive emails from the customers of the client, the client need to configure a unique forwarding address provided by ym after configuring an email on the Channels page.
:::


### 2.3 Get your Outlook SMTP

To get outlook SMTP, follow these steps on outlook - 

1. Go to **File**.  
2. Click **Info** > Navigate to **Account settings**.  
3. Look for the Email address that you want to configure in the yellow.ai platform.  
4. Look out for the **Outgoing server field**.  
5. You will find the SMTP that you want.   


### 2.4 Get your Gmail SMTP

For emails to be sent from smtp.gmail.com, make sure you have followed these 2 steps:
1. In your google account, have 2-Step Verification enabled. 
2. Go to https://security.google.com/settings/security/apppasswords. 
    
    a. Click **Select app** and choose Other (custom name) from the dropdown.   
    
    b. Click **Generate**.   
    
    c. You will receive a 16-digit code, this code should be used as a password in email configuration and the user remains as your email.  


### 2.5 Web-based email account (API)

Reach out to the [yellow.ai team](mailto:vishnu@yellow.ai) for setting up an email account. The process will cover domain/subdomain authentication, and dedicated IP address procurement among others.