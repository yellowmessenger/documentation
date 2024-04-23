---
title: Cashfree Payment Gateway integration
sidebar_label : Cashfree Payment
---


Yellow.ai Integration with Cashfree Payment Gateway allows you to generateTransaction ID and view payment status with the yellow.ai platform.

## Connecting Cashfree with Yellow.ai

1. Login to your Cashfree dashboard and copy the App ID and Secret.
2. On the [Cloud platform](https://cloud.yellow.ai), navigate to the Development/Staging environment and click **Extensions** > **Integrations** > **Payment** > **Cashfree**. You can also search for the Cashfree app.
3. In **Give account name**, enter a unique name for the integration. You can use only lowercase alphanumeric characters and underscores (_).
4. Paste the **App Id ** and **Secret key**.
4. Choose the API base URL according to the type of Cashfree account that has been configured.
5. To connect more accounts, click **+ Add account** and follow the above mentioned steps to connect each account. You can add a maximum of 15 merchant accounts.


## Enable Cashfree related events for the bot

The `Cashfree payment status` event Indicates an update in the payment status. Each payment undergoes different status such as Pending, Processing, Completed, Failed, Refunded, or Cancelled.


:::note
* Activate the Cashfree Payment Status after configuring cashfree credentials at the integration page.
* If you have added multiple accounts in your platform, enable events for each of those accounts.
:::

   ![](https://lh3.googleusercontent.com/zgmzj8u9FXIrz1BGiBzUyi6_S-k2tzQVxaVvqAiHX-pYF8_bDgIsEgqW8_AOVP4jAT_Gn25Wey8vCywa6pU-JirAQqqaEPnPxhu5za_GrP8JTUlahnifhZ-ATNnvjLJJN2Jkt6bLS2GIT2bazEeZIdXM0Tf_j1Jepa9iDC8pBwNbERLHg-S3p7RQdg)

## Manage Cashfree actions through bot conversation

his integration enables the bot to perform the following Cashfree actions:

* Generate payment link
* Create refund


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


