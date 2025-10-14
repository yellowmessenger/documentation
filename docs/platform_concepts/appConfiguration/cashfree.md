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
| Order ID     |  The unique identification for the order to be created | Order1234  |
|Order Amount| The amount for the request. The minimum amount is 1 |200|
| Order Currency | The currency in which the order with the amount specified has to be created | INR |
|Customer ID|The unique Identification for the Payer|9999999999|
|Customer Email| Email of the payer | john@test.com |
| Order Tags | Tags that are to be attached with the order | `{‘comment’: ‘note to be appended’}` |
|Notify Url| Copy Webhook URL from cashfree card at integration page|Ex: `https://dummyurl.yellowmessenger.com/integrations/genericIntegration/cashfree/x1674?id=C1f1Z1htZNZ%2BFYF6c76riwNWY%3D`)|

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

**Reference**


For more information about action nodes to use in this integration, click [here](https://docs.cashfree.com/docs/payment-gateway).


