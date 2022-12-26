---
title : Razorpay
sidebar_label : Razorpay
---

You can integrate the Yellow.ai platform with your [Razorpay ](https://razorpay.com/)account to receive payments from your end users. Along with receiving payments, you can also perform the following actions:

* Generate a payment link and receive the status (success/failure) of the payment.
* Generate a payment link to receive partial payments and receive the status (success/failure) of the payments.
* Initiate refund process.
* Check refund status. 

## 1. Connect Razorpay with Yellow.ai

Connect your Yellow.ai platform with your Razorpay account by following the below-mentioned steps.

### 1.1 Generate API keys on Razorpay dashboard

1. Log into your **Razorpay** account and select the mode (Test/Live) for which you want to generate the API key.

![](https://i.imgur.com/74zbT2o.png)


* **Test Mode:** The test mode is a simulation mode in which you can test your integration flow. Your customers cannot make payments in this mode. Check out this [video](https://www.youtube.com/watch?v=Xwiv6zSVVCM) to know more.
* **Live Mode:** When your integration is complete, switch to **Live** mode and generate live mode API keys. Replace test mode keys with live mode keys in the integration to accept payments from customers.Check out this [video](https://www.youtube.com/watch?v=30REpNtYSak) to know more.

**To generate API keys for a  mode**,

 Navigate to **Settings** > **API Keys** > **Generate Key** to generate key for the selected mode. 

![](https://i.imgur.com/vFHopPF.png)

The **Key Id** and **Key Secret** will appear on the following page. Downalod them to use in your Yellow.ai platform.

![](https://i.imgur.com/7RPBlMe.png)


### 1.2 Enable the Integration in Yellow.ai's Integrations Module.


1. Login to [cloud.yellow.ai](https://cloud.yellow.ai/auth/login), go to the **Overview Switcher** and click **Integrations**.

![](https://i.imgur.com/x4dJgOZ.png)


3. Look for **Razorpay** in the search box or click the **Payment** category on the left navigation bar and then click **Razorpay**.

![](https://i.imgur.com/TMzGetO.png)



5. Fill in the fields and click **Connect**.

 
### 1.3 Configure webhook URL in Razorpay Dashboard 

To receive events, you need to configure the webhook URL in the **Razorpay Dashboard**.

Copy the webhook url and the api key mentioned in the **Instructions** section of the Razorpay Integration Card. Append the region of your bot to the domain of the webhook url. r1/r2/r3/r4/r5 are the regions of your bot, you can refer the following list for the same.

r1 = MEA
r2 = Jakarta
r4= USA
r5 = Europe
r3 = Singapore

For example, if the domain is https://cloud.yellow.ai, you need to change it to https://r1.cloud.yellow.ai if the region of the bot is MEA. If the bot belongs to India, you can use origin domain itself.

### 1.4 Set up webhooks on RazorPay dashboard

1. Log into the [Razorpay Dashboard](https://dashboard.razorpay.com/#/access/signin) and navigate to **Settings** → **Webhooks**.
2. Click **+ Add New Webhook** on the right corner.

![](https://i.imgur.com/aE5zgwH.png)



3. In the **Webhook Setup** pop-up, enter the URL in which you'd like to receive the webhook payload when an event is triggered. We recommend using a **HTTPS URL**.

![](https://i.imgur.com/uDShz45.png)



::: Tip
* You can set upto 10 URLs to receive Webhook notifications. Webhooks can only be delivered to public URLs. If you attempt to save a localhost endpoint as part of a webhook setup, you will encounter an error.
:::

4. Enter a **Secret** for the webhook endpoint. This secret will be used to validate whether the webhook is from **RazorPay**. Do not expose this secret publicly. Click [here](https://razorpay.com/docs/webhooks/validate-test/) to know more validating webhooks. 
5. In the **Alert Email** field, enter the email address to which the notifications should be sent in case there's a webhook failure.
6. Select the required events from the list of **Active Events**.
7. Click **Create Webhook**. After you set a webhook, it appears on the list of webhooks.

:::note
To modify the webhook further, you can select the webhook and click **Edit**. You can refer this [video](https://www.youtube.com/watch?v=qojkh8Vbnek) as well.
:::

### 1.4 Receive events in Yellow.ai

1. Login to cloud.yellow.ai and click **Studio**. 
2. Click **Event** from the left navigation bar and then choose **Integrations**.
3. Activate the event **Razorpay Payment Status** by clicking the three dots next to it.

![](https://i.imgur.com/fK1Eoii.png)

4. A journey with its trigger point as this event should be created in **Studio**. Based on the received event data, an appropriate message will be displayed to the end user.

![](https://i.imgur.com/Bs6iIH8.png)


## 2. Use-cases

The following are the use-cases that are supported in this integration.

### 2.1 Generate Payment Link

1. In the Studio flow builder, select the **Integrations** node and click **Razorpay** from the list of integrations that have been enabled for that bot.
![](https://i.imgur.com/iBzozGD.png)



2. After clicking **Razorpay**,an **Integration Action Node** will be added to the flow builder. When you click that node, you will see all use-cases of this integration in a drop-down. Choose **Generate Payment Link** from them.

![](https://i.imgur.com/wYYsSxX.png)


3. Fill in all the mandatory fields. The below-mentioned table consists of the sample value,data type and description for all these fields.



| Field name | Sample value| Data type |Description |
| -------- | -------- | -------- |----|
| Text     | Text     | Text     |
Amount|100|String|The amount that should be the payment link. This must be in the smallest unit of the currency. For example, if you want to receive a payment of ₹299.95, you must enter the value 29995.|
|Currency|INR|String|Default is **INR**, we also accept payments in [international currencies](https://razorpay.com/docs/payments/payments/international-payments/#supported-currencies).|
|Description|Test|String|A brief description of the payment link.|
IsUPILinkedEnabled|true|Boolean| Indicates if the payment link is a UPI payment link.<br/> **true:** A UPI payment link has been created.<br/> **false:** It is a standard payment link and not a UPI payment link. <br/>|
|CustomerObject|{ "contact": "+919999999999", "email": "gaurav.kumar@example.com", "name": "Gaurav Kumar" },|Object|Customer details|
|Notes|{ "policy_name": "Jeevan Bima" }|Object|Set of key-value pairs that can be used to store additional information. You can enter a maximum of 15 key-value pairs, with each value having a maximum limit of 256 characters.|
|NotifyOptions|{ "email": true, "sms": true }|object|Defines who handles the payment link notifications.|
CallbackUrl |https://example-callback-url.com/ |String|if specified it adds a redirect URL to the payment link. Once a customer completes the payment, they will be redirected to the specified URL.|
|CallbackMethod|get|String| If callback_url parameter is passed, callback_method must be passed with the value get.|
|EnableRemindertrue||Boolean|This is used to send reminders for the payment link. Possible values:<br/> **true:** To send reminders.<br/> **false:** To disable reminders.<br/>
|CustomOptions | Reference details|Object|Custom options|

4. The **Generate Payment Link Integration Action** Node has two outcomes, success or failure. Based on the success/failure of the execution of the **Integration Action Node**, the flow will proceed to **success** or **fallback** branches respectively.

**Sample response in case of success:**
```
{
  "accept_partial": false,
  "amount": 1000,
  "amount_paid": 0,
  "callback_method": "get",
  "callback_url": "https://example-callback-url.com/",
  "cancelled_at": 0,
  "created_at": 1591097057,
  "currency": "INR",
  "customer": {
    "contact": "+919999999999",
    "email": "gaurav.kumar@example.com",
    "name": "Gaurav Kumar"
  },
  "description": "Payment for policy no #23456",
  "expire_by": 1691097057,
  "expired_at": 0,
  "first_min_partial_amount": 100,
  "id": "plink_ExjpAUN3gVHrPJ",
  "notes": {
    "policy_name": "Jeevan Bima"
  },
  "notify": {
    "email": true,
    "sms": true
  },
  "payments": null,
  "reference_id": "TS1989",
  "reminder_enable": true,
  "reminders": [],
  "short_url": "https://rzp.io/i/nxrHnLJ",
  "status": "created",
  "updated_at": 1591097057,
  "user_id": ""
}
```
**Sample response in case of fallback:**
```
{
  "error": {
    "code": "BAD_REQUEST_ERROR",
    "description": "The api key provided is invalid",
    "source": "NA",
    "step": "NA",
    "reason": "NA",
    "metadata": {}
  }
}
```
To use this **Integration Action Node** in an app.yellow.ai bot, refer the following example:

```
app.executeIntegrationAction({
   "integrationName": "razorpay",
   "action": "Generate Payment Link - Partial Payments”,
   "dynamicParams": {
       "amount": "500",
       "currency": "INR",
       "description": "test",
       "isUPILinkEnabled": true,
       "customerObject": { "name": "GaurarKumar", "contact": "+919999999999", "email": "gaurav.kumar@example.com" },
       "notes": {
           "policy_name": "Jeevan Bima"
       },
       "notifyOptions": {
           "sms": true,
           "email": true
       },
       "callbackUrl": "https://example-callback-url.com/",
       "callbackMethod": "get",
       "enableReminder": "true",
       "customOptions": {
           "test":"testing"
       }
   }
}).then((res) => {
   console.log("response from action node", res);
   app.log(res, '||Response from action node||')
}).catch((err) => {
   console.log("Error in action node", err);
   app.log(err, '||Error in action node||')
})
```
:::note
### Payment status event payload
```
{
          "id": "rfnd_FS8TWyPrCsa0OB",
          "entity": "payment",
          "amount": 50000,
          "currency": "INR",
          "payment_id": "pay_FPoJKWQQ8lK13n",
          "notes": {
            "comment": "Customer Notes for Webhooks."
          },
          "receipt": null,
          "acquirer_data": {
            "arn": null
          },
          "created_at": 1597734071,
          "batch_id": null,
          "status": "processed",
          "speed_processed": "normal",
          "speed_requested": "optimum"
        }

```
:::
### 2.2 Generate Payment Link for Partial Payments

1. In the Studio flow builder, select the **Integrations** node and click **Razorpay** from the list of integrations that have been enabled for that bot.
![](https://i.imgur.com/ysUIxfa.png)



2. After clicking **Razorpay**,an **Integration Action Node** will be added to the flow builder. When you click that node, you will see all use-cases of this integration in a drop-down. Choose **Generate Payment Link** from them.

![](https://i.imgur.com/tMcsRTb.png)


3. Fill in all the mandatory fields. The below-mentioned table consists of the sample value,data type and description for all these fields.

| Field name | Sample value| Data type |Description |
| -------- | -------- | -------- |----|
| Text     | Text     | Text     |
Amount|100|String|The amount that should be the payment link. This must be in the smallest unit of the currency. For example, if you want to receive a payment of ₹299.95, you must enter the value 29995.|
|Currency|INR|String|Default is **INR**, we also accept payments in [international currencies](https://razorpay.com/docs/payments/payments/international-payments/#supported-currencies).|
|Description|Test|String|A brief description of the payment link.|
IsUPILinkedEnabled|true|Boolean| Indicates if the payment link is a UPI payment link.<br/> **true:** A UPI payment link has been created.<br/> **false:** It is a standard payment link and not a UPI payment link. <br/>|
|CustomerObject|{ "contact": "+919999999999", "email": "gaurav.kumar@example.com", "name": "Gaurav Kumar" },|Object|Customer details|
|Notes|{ "policy_name": "Jeevan Bima" }|Object|Set of key-value pairs that can be used to store additional information. You can enter a maximum of 15 key-value pairs, with each value having a maximum limit of 256 characters.|
|NotifyOptions|{ "email": true, "sms": true }|object|Defines who handles the payment link notifications.|
CallbackUrl |https://example-callback-url.com/ |String|if specified it adds a redirect URL to the payment link. Once a customer completes the payment, they will be redirected to the specified URL.|
|CallbackMethod|get|String| If callback_url parameter is passed, callback_method must be passed with the value get.|
|EnableRemindertrue||Boolean|This is used to send reminders for the payment link. Possible values:<br/> **true:** To send reminders.<br/> **false:** To disable reminders.<br/>
|CustomOptions | Reference details|Object|Custom options|
|isPartialPaymentAccepted|true|Boolean|Indicates whether customers can make partial payments using the payment link. <br/> **Possible values:** <br/> **true:** Customer can make partial payments.<br/>**false (default):** Customer cannot make partial payments.<br/>|

**Sample response in case of success:**

```

{
  "accept_partial": false,
  "amount": 1000,
  "amount_paid": 0,
  "callback_method": "get",
  "callback_url": "https://example-callback-url.com/",
  "cancelled_at": 0,
  "created_at": 1591097057,
  "currency": "INR",
  "customer": {
    "contact": "+919999999999",
    "email": "gaurav.kumar@example.com",
    "name": "Gaurav Kumar"
  },
  "description": "Payment for policy no #23456",
  "expire_by": 1691097057,
  "expired_at": 0,
  "first_min_partial_amount": 100,
  "id": "plink_ExjpAUN3gVHrPJ",
  "notes": {
    "policy_name": "Jeevan Bima"
  },
  "notify": {
    "email": true,
    "sms": true
  },
  "payments": null,
  "reference_id": "TS1989",
  "reminder_enable": true,
  "reminders": [],
  "short_url": "https://rzp.io/i/nxrHnLJ",
  "status": "created",
  "updated_at": 1591097057,
  "user_id": ""
}
```

**Sample response in case of fallback:**
```
{
  "error": {
    "code": "BAD_REQUEST_ERROR",
    "description": "The api key provided is invalid",
    "source": "NA",
    "step": "NA",
    "reason": "NA",
    "metadata": {}
  }
}
```
To use this **Integration Action Node** in an app.yellow.ai bot, refer the following example:

```
app.executeIntegrationAction({
   "integrationName": "razorpay",
   "action": "Generate Payment Link",
   "dynamicParams": {
       "amount": "500",
       "isPartialPaymentAccepted":true,
       "currency": "INR",
       "description": "test",
       "isUPILinkEnabled": true,
       "customerObject": { "name": "GaurarKumar", "contact": "+919999999999", "email": "gaurav.kumar@example.com" },
       "notes": {
           "policy_name": "Jeevan Bima"
       },
       "notifyOptions": {
           "sms": true,
           "email": true
       },
       "callbackUrl": "https://example-callback-url.com/",
       "callbackMethod": "get",
       "enableReminder": "true",
       "customOptions": {
           "test":"testing"
       }
   }
}).then((res) => {
   console.log("response from action node", res);
   app.log(res, '||Response from action node||')
}).catch((err) => {
   console.log("Error in action node", err);
   app.log(err, '||Error in action node||')
})

```
### 2.3 Intiate refund

1. In the Studio flow builder, select the **Integrations** node and click **Razorpay** from the list of integrations that have been enabled for that bot.

![](https://i.imgur.com/NTGBdtv.png)



2. After clicking **Razorpay**,an **Integration Action Node** will be added to the flow builder. When you click that node, you will see all use-cases of this integration in a drop-down. Choose **Generate Payment Link** from them.

![](https://i.imgur.com/WxXY6fZ.png)



3. Fill in all the mandatory fields. The below-mentioned table consists of the sample value,data type and description for all these fields.


| Field Name | Sample value | Data type |Description|
| -------- | -------- | -------- |---|
| Amount|100|String| The amount to be refunded (in the smallest unit of currency).  For example, refund in INR, a value of 100 means 100 paise (equivalent to ₹1).|
|paymentId|pay_FgR9UMzgmKDJRi|String|The unique identifier of the payment for which a refund is initiated|
refundType|normal|String|Speed at which the refund should be processed. <br/> **Possible values:**<br/>**normal:** Indicates that the refund will be processed at a normal speed i.e. within 5-7 working days.<br/>**optimum:** Indicates that the refund will be processed at an optimal speed based on Razorpay's internal fund transfer logic.<br/> If the refund has to be processed instantly, **Razorpay** will do so irrespective of the payment method.<br/> If an instant refund is not possible, Razorpay will initiate a refund  at the normal speed. For example, in case of payments made using debit cards, netbanking or unsupported credit cards.
notes|{}|object|Key-value store for storing your reference data. A maximum of 15 key-value pairs can be included.|

4. The **Generate Payment Link Integration Action** Node has two outcomes, success or failure. Based on the success/failure of the execution of the **Integration Action Node**, the flow will proceed to **success** or **fallback** branches respectively.

**Success Response:**

```

{
  "id": "rfnd_FgRAHdNOM4ZVbO",
  "entity": "refund",
  "amount": 10000,
  "currency": "INR",
  "payment_id": "pay_FgR9UMzgmKDJRi",
  "notes": {
    "notes_key_1": "Beam me up Scotty.",
    "notes_key_2": "Engage"
  },
  "receipt": null,
  "acquirer_data": {
    "arn": "10000000000000"
  },
  "created_at": 1600856650,
  "batch_id": null,
  "status": "processed",
  "speed_processed": "normal",
  "speed_requested": "normal"
}
```
To use this **Integration Action Node** in an app.yellow.ai bot, refer the following example:

```
app.executeIntegrationAction({
   "integrationName": "razorpay",
   "action": "Generate Payment Link",
   "dynamicParams": {
       "amount": "500",
       "refundType":"normal",
       "paymentId":"pay_FgR9UMzgmKDJRi",
       "notes": {
           "policy_name": "Jeevan Bima"
       }
   }
}).then((res) => {
   console.log("response from action node", res);
   app.log(res, '||Response from action node||')
}).catch((err) => {
   console.log("Error in action node", err);
   app.log(err, '||Error in action node||')
})
 
```










    




































    








