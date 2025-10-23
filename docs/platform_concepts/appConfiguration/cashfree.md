---
title: Cashfree Payment Gateway integration
sidebar_label : Cashfree Payment
---


Yellow.ai Integration with Cashfree Payment Gateway allows you to generateTransaction ID and view payment status with the yellow.ai platform.

## Connecting Cashfree with Yellow.ai

1. Login to your Cashfree dashboard and copy the App ID and Secret.
2. On the [Cloud platform](https://cloud.yellow.ai), navigate to the Development/Staging environment and click **Extensions** > **Integrations** > **Payment** > **Cashfree**. You can also search for the Cashfree app.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/connected-cashfree.png)

3. In **Give account name**, enter a unique name for the integration. You can use only lowercase alphanumeric characters and underscores (_).
4. Paste the **App Id** and **Secret key**.
4. Choose the API base URL according to the type of Cashfree account that has been configured.
5. To connect more accounts, click **+ Add account** and follow the above mentioned steps to connect each account. You can add a maximum of 15 merchant accounts.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/cashfree-details.png)


## Enable Cashfree related events for the AI agent

The `Cashfree payment status` event Indicates an update in the payment status. Each payment undergoes different status such as Pending, Processing, Completed, Failed, Refunded, or Cancelled.


:::note
* Activate the Cashfree Payment Status after configuring cashfree credentials at the integration page.
* If you have added multiple accounts in your platform, enable events for each of those accounts.
:::

   ![](https://lh3.googleusercontent.com/zgmzj8u9FXIrz1BGiBzUyi6_S-k2tzQVxaVvqAiHX-pYF8_bDgIsEgqW8_AOVP4jAT_Gn25Wey8vCywa6pU-JirAQqqaEPnPxhu5za_GrP8JTUlahnifhZ-ATNnvjLJJN2Jkt6bLS2GIT2bazEeZIdXM0Tf_j1Jepa9iDC8pBwNbERLHg-S3p7RQdg)

## Manage Cashfree actions through AI agent conversation

This integration enables the AI agent to perform the following Cashfree actions:

* Generate transaction ID

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::

### Generate Transaction ID

This action sends a POST request for creating a new transaction and generates the transaction ID.

1. In the Automation flow builder, select the **Integrations** node and click **Cashfree** from the list of integrations that have been enabled for that AI agent.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/cash-free.png" alt="drawing" width="30%"/>

2. After clicking **Cashfree**, an **Integration Action Node** will be added to the flow builder. When you click that node, you will see all use-cases of this integration in a drop-down. Choose **Generate Transaction ID**.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/transaction-id.png" alt="drawing" width="80%"/>

3. Fill in all the mandatory fields. The below-mentioned table consists of the sample value, data type and description for all these fields.

**Node Input Params**

| Field Name |  Description |Sample Input |
| -------- | -------- | -------- |
| Order ID | The unique identification for the order to be created | Order1234  |
|Order Amount | The amount for the request. The minimum amount is 1 |200|
| Order Currency | The currency in which the order with the amount specified has to be created | INR |
|Customer ID|The unique Identification for the Payer|9999999999|
|Customer Email| Email of the payer | john@test.com |
| Order Tags | Tags that are to be attached with the order | `{‘comment’: ‘note to be appended’}` |
|Notify Url|Copy Webhook URL from cashfree card at integration page|Ex: `https://dummyurl.yellowmessenger.com/integrations/genericIntegration/cashfree/x1674?id=C1f1Z1htZNZ%2BFYF6c76riwNWY%3D`)|

**Sample Success Response**


```json
{
    "cf_order_id": 2678043,
    "order_id": "order_1742302CCpwK00k2bp00fwIwblCVtyPqV",
    "entity": "order",
    "order_currency": "INR",
    "order_amount": 1.00,
    "order_expiry_time": "2022-08-19T17:00:57+05:30",
    "customer_details": {
        "customer_id": "123e344",
        "customer_name": null,
        "customer_email": "abc@gmail.com",
        "customer_phone": "1234567890"
    },
    "order_meta": {
        "return_url": null,
        "notify_url": null,
        "payment_methods": null
    },
    "settlements": {
        "url": "https://sandbox.cashfree.com/pg/orders/order_1742302CCpwK00k2bp00fwIwblCVtyPqV/settlements"
    },
    "payments": {
        "url": "https://sandbox.cashfree.com/pg/orders/order_1742302CCpwK00k2bp00fwIwblCVtyPqV/payments"
    },
    "refunds": {
        "url": "https://sandbox.cashfree.com/pg/orders/order_1742302CCpwK00k2bp00fwIwblCVtyPqV/refunds"
    },
    "order_status": "ACTIVE",
    "order_token": "WKQXlA9jzfUIytw6adbA",
    "order_note": null,
        "payment_link": "https://payments-test.cashfree.com/order/#WKQXlA9jzfUIytw6adbA",
    "order_tags": null,
    "order_splits": []
}
```

----

### Create order

This option is used to create orders with Cashfree.

1. In the Automation flow builder, select the **Integrations** node and click **Cashfree** from the list of integrations that have been enabled for that AI agent.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/cash-free.png" alt="drawing" width="30%"/>

2. After clicking **Cashfree**, an **Integration Action Node** will be added to the flow builder. When you click that node, you will see all use-cases of this integration in a drop-down. Choose **Create order**.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/create-order.png" alt="drawing" width="80%"/>

3. Fill in all the mandatory fields. The below-mentioned table consists of the sample value, data type and description for all these fields.

| Field name | Sample value| Data type |Description |
| -------- | -------- | -------- |----|
Customer details | `{"customer_name":"variables.CashfreeName","customer_phone":"variables.phoneno","customer_email":"variables.email","customer_id":"variables.ID"}` | Object | Customer details including name, email, and phone number.
Order amount  | 200 | String | The amount for the request. The minimum amount is 1
Order currency  | INR | String | The currency in which the order with the amount specified has to be created
Order tags | `{‘comment’: ‘note to be appended’}` | Object | Custom Tags in thr form of `{"key":"value"}` which can be passed for an order.
Order ID | Order1234 | String | The unique identification for the order to be created
Order Split | `[{ "amount": 10, "vendor": "john" }]` | Array | If you have Easy split enabled in your Cashfree account then you can use this option to split the order amount.

**Sample Success Response**

```json
{
  "cf_order_id": 4751313578,
  "created_at": "2025-10-08T15:26:05+05:30",
  "customer_details": {
    "customer_id": "24",
    "customer_name": "Dwij",
    "customer_email": "dwij.test@gmail.com",
    "customer_phone": "9865731549",
    "customer_uid": null
  },
  "entity": "order",
  "order_amount": 100,
  "order_currency": "INR",
  "order_expiry_time": "2025-11-07T15:26:05+05:30",
  "order_id": "order_12567533mLacG69H3JGeses26XifrGaGg",
  "order_meta": {
    "return_url": null,
    "notify_url": null,
    "payment_methods": null
  },
  "order_note": null,
  "order_splits": [],
  "order_status": "ACTIVE",
  "order_tags": {
    "product": "car",
    "~|||~sender": "1410079569550798091459993047363",
    "~|||~source": "yellowmessenger",
    "~|||~uniqueId": "85cc4ba7-aabf-4f14-82c7-df0b8d33227e"
  },
  "payment_session_id": "session_9fNT0flnHnqtzZgcDMR6lYuuAjxyuJEzZKBkLWQtZU30uOo6C0tgtq8S58ZSAL8ZtdBvEXYHE7MwseGrvl3Hkxc0nlHhQuM9w0F0ZpBMxFH8nWxR4YJEaA_79B0payment",
  "payments": {
    "url": "api.cashfree.com/pg/orders/order_12567533mLacG69H3JGeses26XifrGaGg/payments"
  },
  "refunds": {
    "url": "api.cashfree.com/pg/orders/order_12567533mLacG69H3JGeses26XifrGaGg/refunds"
  },
  "settlements": {
    "url": "api.cashfree.com/pg/orders/order_12567533mLacG69H3JGeses26XifrGaGg/settlements"
  },
  "terminal_data": null
}
```

A sample screenshot of create order:

  ![](https://cdn.yellowmessenger.com/assets/yellow-docs/create-order-smaple.png)

----

-----

### Order pay

1. In the Automation flow builder, select the **Integrations** node and click **Cashfree** from the list of integrations that have been enabled for that AI agent.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/cash-free.png" alt="drawing" width="30%"/>

2. After clicking **Cashfree**, an **Integration Action Node** will be added to the flow builder. When you click that node, you will see all use-cases of this integration in a drop-down. Choose **Order pay**.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/order-pay.png" alt="drawing" width="80%"/>

3. Fill in all the mandatory fields. The below-mentioned table consists of the sample value, data type and description for all these fields.

| Field name | Sample value| Data type |Description |
| -------- | -------- | -------- |----|
Payment session ID  | session__CvcEmNKDkmERQrxnx39ibhJ3Ii034pjc8ZVxf3qcgEXCWlgDDlHRgz2XYZCqpajDQSXMMtCusPgOIxYP2LZx0-05p39gC2Vgmq1RAj--gcn | String | Generates a payment session ID.
Payment method | `{"card":{"channel":"link","card_number":"4111111111111111","card_holder_name":"Tushar Gupta","card_expiry_mm":"06","card_expiry_yy":"22","card_cvv":"900"}}` | Object | Make payment using either plain card number, saved card instrument id or using cryptogram.

**Sample Success Response**

```json
{
  "action": "custom",
  "cf_payment_id": 4428254730,
  "channel": "qrcode",
  "data": {
    "url": null,
    "payload": {
      "qrcode": "data:image/png;base64,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"
    },
    "content_type": null,
    "method": null
  },
  "payment_amount": 100,
  "payment_method": "upi"
}
```

A sample screenshot of Order pay:

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/order-pay-screenshot.png)

---   

### Payment link generation
      
1. In the Automation flow builder, select the **Integrations** node and click **Cashfree** from the list of integrations that have been enabled for that AI agent.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/cash-free.png" alt="drawing" width="30%"/>

2. After clicking **Cashfree**, an **Integration Action Node** will be added to the flow builder. When you click that node, you will see all use cases of this integration in a drop-down. Choose **Payment link generation**.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/payment-link-generation.png" alt="drawing" width="80%"/>

3. Fill in all the mandatory fields. The below-mentioned table consists of the sample value, data type and description for all these fields.

| Field name | Sample value| Data type |Description |
| -------- | -------- | -------- |----|
Customer information | `{"customer_name": "John Doe","customer_phone": "9999999999","customer_email": "john@cashfree.com","customer_bank_account_number": 11111111111,"customer_bank_ifsc": "SBIN0001882","customer_bank_code": 7001}` | Object | Customer details including name, email, and phone number.
Amount | 100 | Number | The amount that should be the payment link. This must be in the smallest unit of the currency. For example, if you want to receive a payment of ₹299.95, you must enter the value 29995.
Currency | INR |  String | Default is INR, we also accept payments in [international currencies](https://razorpay.com/docs/payments/international-payments/#supported-currencies).
Options | Reference details | Object | Custom options
Notes |`{"key_1": "value_1","key_2": "value_2"}` | Object | Key-value pair that can be used to store additional information about the entity. Maximum 5 key-value pairs.
Link description | Payment for PlayStation 11 | String | A brief description for which payment should be collected.
Enable auto reminder | true or false | Boolean | If "true", reminders will be sent to users for collecting payments.
Link expiry time in ISO  | 1 min | String | The timestamp after which the payment link will expire.
Notification options | `{ "email": true, "sms": true }` | Object | Defines how payment link notifications will be sent (via email, SMS, or both).

**Sample success response**

```json
{
  "cf_link_id": 126598642,
  "customer_details": {
    "customer_name": "John",
    "country_code": "+91",
    "customer_phone": "9865731549",
    "customer_email": "John.test@gmail.com"
  },
  "enable_invoice": false,
  "entity": "link",
  "link_amount": 100,
  "link_amount_paid": 0,
  "link_auto_reminders": false,
  "link_created_at": "2025-10-09T13:03:44+05:30",
  "link_currency": "INR",
  "link_expiry_time": "2025-11-08T13:03:44+05:30",
  "link_id": "abff338e-f390-4b58-abab-849852e03d83",
  "link_meta": {
    "notify_url": "cloud.yellow.ai/api/galaxy/genericIntegration/cashfree/x1632218421575/cjnrfejn?id=3K4G//NmDGRj0bHGr1A91wspvXIMYjX/rKtcMVazrmk=",
    "payment_methods": "upi",
    "upi_intent": "true"
  },
  "link_minimum_partial_amount": null,
  "link_notes": {
    "product": "car",
    "sender": "1410079569550798091459993047363",
    "source": "yellowmessenger",
    "uniqueId": "abff338e-f390-4b58-abab-849852e03d83"
  },
  "link_notify": {
    "send_email": false,
    "send_sms": false
  },
  "link_partial_payments": false,
  "link_purpose": "This is to buy a game",
  "link_status": "ACTIVE",
  "link_url": "payments.cashfree.com/links/g9a0elgmqlp0",
  "order_splits": [],
  "terms_and_conditions": "",
  "thank_you_msg": ""
}
```   

-----

### Partial payment link generation
      
1. In the Automation flow builder, select the **Integrations** node and click **Cashfree** from the list of integrations that have been enabled for that AI agent.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/cash-free.png" alt="drawing" width="30%"/>

2. After clicking **Cashfree**, an **Integration Action Node** will be added to the flow builder. When you click that node, you will see all use-cases of this integration in a drop-down. Choose **Partial payment link generation**.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/cashfree-partial.png" alt="drawing" width="80%"/>

3. Fill in all the mandatory fields. The below-mentioned table consists of the sample value, data type and description for all these fields.

| Field name | Sample value| Data type |Description |
| -------- | -------- | -------- |----|
Customer information | `{"customer_name": "John Doe","customer_phone": "9999999999","customer_email": "john@cashfree.com","customer_bank_account_number": 11111111111,"customer_bank_ifsc": "SBIN0001882","customer_bank_code": 7001}` | Object | Customer details including name, email, and phone number.
Amount | 100 | Number | The amount that should be the payment link. This must be in the smallest unit of the currency. For example, if you want to receive a payment of ₹299.95, you must enter the value 29995.
Currency | INR |  String | Default is INR, we also accept payments in [international currencies](https://razorpay.com/docs/payments/international-payments/#supported-currencies).
Options | Reference details | Object | Custom options
First part payment amount | 50 | Number | Minimum amount in first installment that needs to be paid by the user if partial payments are enabled. This should be less than the link_amount.
Notes | `{"key_1": "value_1","key_2": "value_2"}` | Object | Key-value pair that can be used to store additional information about the entity. Maximum 5 key-value pairs
Enable partial payments | True or False | Boolean | Indicates whether customers can make partial payments using the payment link.Possible values:<br/>**true**: Customer can make partial payments.<br/>**false**: Customer cannot make partial payments.|
Link description | Payment for PlayStation 11 | String | A brief description for which payment should be collected.
Enable auto reminder | true or false | Boolean | If "true", reminders will be sent to users for collecting payments.
Link expiry time in ISO  | 1 min | String | The timestamp after which the payment link will expire.
Notification options | `{ "email": true, "sms": true }` | Object | Defines how payment link notifications will be sent (via email, SMS, or both).


**Sample Success Response**

```json
{
  "cf_link_id": 126602552,
  "customer_details": {
    "customer_name": "John",
    "country_code": "+91",
    "customer_phone": "9980056788",
    "customer_email": "john.test@gmail.com"
  },
  "enable_invoice": false,
  "entity": "link",
  "link_amount": 100,
  "link_amount_paid": 0,
  "link_auto_reminders": false,
  "link_created_at": "2025-10-09T13:15:49+05:30",
  "link_currency": "INR",
  "link_expiry_time": "2025-11-08T13:15:49+05:30",
  "link_id": "d4c666e5-99d4-42d8-ab9a-1b8cf13c73d7",
  "link_meta": {
    "notify_url": "cloud.yellow.ai/api/galaxy/genericIntegration/cashfree/x1632218421575/cjnrfejn?id=3K4G//NmDGRj0bHGr1A91wspvXIMYjX/rKtcMVazrmk=",
    "payment_methods": "upi",
    "upi_intent": "true"
  },
  "link_minimum_partial_amount": null,
  "link_notes": {
    "product": "car",
    "sender": "1410079569550798091459993047363",
    "source": "yellowmessenger",
    "uniqueId": "d4c666e5-99d4-42d8-ab9a-1b8cf13c73d7"
  },
  "link_notify": {
    "send_email": false,
    "send_sms": false
  },
  "link_partial_payments": true,
  "link_purpose": "This is to buy a game",
  "link_status": "ACTIVE",
  "link_url": "payments.cashfree.com/links/F9a0g1oleor0",
  "order_splits": [],
  "terms_and_conditions": "",
  "thank_you_msg": ""
}
```

A sample screenshot of Partial payment link generation:

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/cashfree-partial-paymeny-generation.png)

----   

**Reference**


For more information about action nodes to use in this integration, click [here](https://docs.cashfree.com/docs/payment-gateway).


