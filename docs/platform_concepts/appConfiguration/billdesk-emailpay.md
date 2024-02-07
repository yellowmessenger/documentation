---
title : BillDesk EmailPay 
sidebar_label : BillDesk EmailPay
---


# BillDesk EmailPay

Integrate your Yellow.ai account with [BillDesk EmailPay](https://www.billdesk.com/web/) to receive payments from your users. This integration allows the following,

1. Generate a payment link to receive payments
2. Check the status of the payments and recieve notifications on the same.

## 1. Connect BillDesk EmailPay with Yellow.ai

To connect your BillDesk account with yellow.ai, follow these steps:

### 1.1 Enable the integration in yellow.ai

1. Go to cloud.yellow.ai and click **Integrations** from the module switcher.

![](https://i.imgur.com/sOirlTU.png)


2. Search for **Billdesk EmailPay** or choose the category named Payment from the left navigation bar and click **Billdesk EmailPay**.

![](https://i.imgur.com/eILS2u2.png)


3. Fill in the following fields. Reach out to the **BillDesk** team for this info.

* Message code
* Secret key
* Campaign ID
* Campaign code
* BillDesk base URL(this is already populated)

4. If you have multiple accounts, follow the above mentioned steps to add each of them.

:::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 15 accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::

### 1.2 Configure webhook URL in Billdesk dashboard.

1. Copy the webhook URL mentioned in the **Instructions to connect** section of the **Billdesk EmailPay Integration Card** (previous screenshot). 
2. Append the region of your bot to the domain of the webhook url. r1/r2/r3/r4/r5 are the regions of your bot, you can refer the following list for the same.

* r1 - MEA 
* r2 - Jakarta 
* r4 - USA 
* r5 - Europe 
* r3 - Singapore

For example, if the domain is https://cloud.yellow.ai, you need to change it to https://r1.cloud.yellow.ai if the region of the bot is MEA. If the bot belongs to India, you can use origin domain itself.

3. Share the webhook URL to **BillDesk SPOC**. They will configure the webhook at their end.

### 1.3 Define the fields to be passed in the API

Please specify the **Min length**, **Max length** and the **data type**(numeric/alphanumeric) for the UDFs that are mentioned in this table.

| params | data_type | Min Length |Max Length |UDF Field mapped to BillDesk|
| -------- | -------- | -------- |-----|--|
| amount     | numeric     | 1     |10000000|UDF 1|
|phone_num|alphanumeric|1|10| UDF 2|
|name|alphanumeric| 1|50|UDF 3|
|sender|alphanumeric|1|50|UDF 4|
|source|alphanumeric|1|25|UDF 5|
|unique_ID|alphanumeric|1|50|UDF 6|
|order_ID|alphanumeric|1|25| UDF 7|

### 1.4 Receive events in Yellow.ai

1. Login to cloud.yellow.ai and click **Studio**.
2. Click **Event** from the left navigation bar and then choose **Integrations**.
3. Activate the event **Billdesk EmailPay Payment Status** by clicking the three dots next to it.

![](https://i.imgur.com/T0fRth0.png)


4. A journey with its trigger point as this event should be created in **Studio**. Based on the received event data, an appropriate message will be displayed to the end user.

![](https://i.imgur.com/Bmi1ELe.png)

:::info
If you have added multiple accounts in your platform, enable events for each of those accounts.
:::


## 2. Use-case

You can generate payment links for your customers to pay.

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::

### 2.1 Generate Payment Link

1. In the Studio flow builder, select the **Integrations** node and click **Billdesk EmailPay** from the list of integrations that have been enabled for that bot.

![](https://i.imgur.com/kHnNZrh.png)


2. After clicking **Billdesk EmailPay**, an **Integration Action Node** will be added to the flow builder. Click that node and select **Generate Payment Link** from them.

![](https://i.imgur.com/PCSXyiW.png)


3. Fill in all the mandatory fields. The below-mentioned table consists of the sample value, data type and description for all these fields.



| Field Name | Sample Value | Data type |Description|
| -------- | -------- | -------- |--|
| Amount     | 100     | String     | Amount to be paid using the Payment Link. Only two digit after decimal is supported.|
|Customer Phone Number|INR|String|Customer phone number.|
|Customer Name|Test|String|Name of the customer.|
|Order ID|TestOrder122|String|Unique Order ID.|
|Send Email|false|Boolean|Sending link through email<br/>**True:** Payment link will be sent via email (Currently not supported).<br/>**False:** Payment link will be generated in the bot.

4. The **Generate Payment Link** Integration Action Node has two outcomes, success or failure. If the payment link is generated successfully, the **Integration Action Node** returns a **Success** response code as shown below.


```
{
      "url": "https://uat.billdesk.com/MercOnline/URLRenderer/C7g",
       "status": "success"
      }


```
If generating payment link fails, the **Integration Action Node** returns a **Failure** response code as shown below.

```
{
"errorCode": "<<Error Code>>"
"errorMessage": "<<Error Message/Description>>"
"status": "failed"
}
```

To use this **Integration Action Node** in an app.yellow.ai bot, refer the following example:

```
app.executeIntegrationAction({
  "integrationName": "billdesk-emailpay",
  "action": "Generate payment link",
  "dynamicParams": {
    "amount": 10.00,
    "customerName": "John",
    "customerMobileNumber": "9955557879",
    "orderId": "TestOrder123",
    "sendEmail": "false"
  }
}).then((res) => {
  console.log("response from action node", res);
  app.log(res, '||Response from action node||')
}).catch((err) => {
  console.log("Error in action node", err);
  app.log(err, '||Error in action node||')
})

```






