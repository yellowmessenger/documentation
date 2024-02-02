---
title: Cashfree Payment Gateway
sidebar_label : Cashfree Payment
---


Yellow.ai Integration with Cashfree Payment Gateway allows you to generateTransaction ID and view payment status with the yellow.ai platform.

## 1.  Configuration


Configuring the integration with Cashfree is straightforward. Follow the steps defined below to start integrating:

1. Sign up on Cashfree dashboard.
2. Copy the App ID and Secret.
3. Go to the integration page of cloud.yellow.ai and search for cashfree then Paste the app Id and Secret in the form.
4. Choose the API base URL according to the type of cashfree account that has been configured.

If you have multiple accounts, follow the above mentioned steps to add each of them.

:::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 15 merchant accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::

**Event for receiving payment confirmation on bot**

Following are the events that are currently accommodated in the Integration:

|Event|Description|
|---|---|
|Cashfree payment status|In case of successful payments the status can be checked with these details.|

:::note
* Activate the Cashfree Payment Status after configuring cashfree credentials at the integration page.
* If you have added multiple accounts in your platform, enable events for each of those accounts.
:::

**![](https://lh3.googleusercontent.com/zgmzj8u9FXIrz1BGiBzUyi6_S-k2tzQVxaVvqAiHX-pYF8_bDgIsEgqW8_AOVP4jAT_Gn25Wey8vCywa6pU-JirAQqqaEPnPxhu5za_GrP8JTUlahnifhZ-ATNnvjLJJN2Jkt6bLS2GIT2bazEeZIdXM0Tf_j1Jepa9iDC8pBwNbERLHg-S3p7RQdg)**

## 2. Use cases

Following are the use cases that are currently accommodated in the Integration:

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::

1. Generate Transaction ID
    
    Using the action nodes, you can generate transaction IDs  according to your use cases. The Transaction ID extracted can be used to initiate payments from WhatsApp pay.

**![](https://lh3.googleusercontent.com/7pNpF2HUl5qyJFYQXVMwX2PX-kjMcoZy0zrFQNBVtJLbJrrQ4hzbr1l1l1Frjj7dAEt4oNI635vERcm_atJJh1o_0HmsEdN_jtfaH_o9qLqyGp8mnWzFM-nbCs3tJ5rfQl7Oh9BB8F1AdaUVN77F8zrNz2tgjKYQlcF6SdczFJ7efNwitey8aOf7qw)**

**Node Input Params**



| Field Name |  Description |Sample Input |
| -------- | -------- | -------- |
| Order ID     |  The unique identification for the order to be created     |Order1234     |
|Order Amount|The amount for the request. The minimum amount is 1 |200|
|Order Currency*|The currency in which the order with the amount specified has to be created|INR|
|Customer ID|The unique Identification for the Payer|9999999999|
|Customer Email|Email of the payer|john@test.com|
|Order Tags|Tags that are to be attached with the order|{‘comment’: ‘note to be appended’}’|
|Notify Url|Copy Webhook URL from cashfree card at integration page|https://dummyurl.yellowmessenger.com/integrations/genericIntegration/cashfree/x1674?id=C1f1Z1htZNZ%2BFYF6c76riwNWY%3D|

**Sample Success Response**


```
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

**Reference**


For more information about action nodes to use in this integration, click [here](https://docs.cashfree.com/docs/payment-gateway).


