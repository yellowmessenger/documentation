---
title : PayU Business
sidebar_label : PayU Business
---


[PayU Business integration](https://payu.in/about-us?_ga=2.219146714.274874686.1677657469-282964387.1677657469) enables your bot to receive PayU payments from your users. You can generate payment links, UPI intents for whatsapp pay and receive notifications on the success/failure of the payments.

## 1. Integrating PayU with Yellow.ai

To connect your PayU account with yellow.ai, follow these steps:

### 1.1 Get API keys for your PayU account

You need to write to [PayUBiz team](mailto:integration@payu.in) for the API keys. They will provide the keys for both the modes.

1. **Test Mode:** The test mode is a simulation mode that you can use to test your integration flow. Your customers will not be able to make payments in this mode.
2. **Live Mode:** Once you have tested your integration, you can switch to the live mode by replacing the test mode keys(in the yellow.ai integration section) with the live mode keys to accept payments from customers.

Enter the API keys in the **Client ID** field of Yellow.ai's integration module, which we will cover in the following section.

### 1.2 Connect PayU Business to yellow.ai 

In a two-tier environment, you can connect an integration app in the Development environment. In a three-tier environment, you can connect the integration app either in Staging or Sandbox. All connected integrations are available in the live environment.

1. Navigate to the Development/Staging environment and go to **Extensions** > **Integrations** > **Payment**  > **PayU Business**.

   ![](https://i.imgur.com/WOrjMUu.png)


2. In **Give account name**, enter a unique name for the integration. You can use only lowercase alphanumeric characters and underscores (_).

3. In **Salt value**, enter the unique hash for each transaction, which is then used to verify the authenticity of the transaction. The Salt Value is provided by PayU and should be kept confidential.
4. Enter the **Client ID**, enter your PayU account's client ID.
5. In **Payu base URL**, enter the base URL to send API requests to the PayU payment gateway for payment processing.
6. In **Payu UPI base URL**, enter the base URL of the PayU UPI to send API requests to the PayU UPI payment gateway for UPI payment processing.

::note
Payu base URL and and Payu UPI base URL will differ for test and live modes.
Example:

* Test mode - https://test.payu.in
* Live mode - https://info.payu.in
:::


7. Click **Connect** when you're done.
8. To add another account, click **+ Add account** and proceed with the previous steps. You can add a maximum of 15 accounts.


### 1.3 Configure webhook URL 

Copy the webhook URL and the API key mentioned in the **Instructions** section of the PayUBiz Integration section in the yellow.ai platform.

![](https://i.imgur.com/2cyhP5e.png)


Use the webhook URL specific to your region -  [India](https://cloud.yellow.ai/integrations/genericIntegration/payu-payment-gateway/x1668670622130?id=VVKB60XTmBsVV3sALdpMw0Z3rzXHJ2MTA5cOtiHEzRs%3D), [MEA](https://r1.cloud.yellow.ai/integrations/genericIntegration/payu-payment-gateway/x1668670622130?id=VVKB60XTmBsVV3sALdpMw0Z3rzXHJ2MTA5cOtiHEzRs%3D), [Jakarta](https://r2.cloud.yellow.ai/integrations/genericIntegration/payu-payment-gateway/x1668670622130?id=VVKB60XTmBsVV3sALdpMw0Z3rzXHJ2MTA5cOtiHEzRs%3D), [Singapore](https://r3.cloud.yellow.ai/integrations/genericIntegration/payu-payment-gateway/x1668670622130?id=VVKB60XTmBsVV3sALdpMw0Z3rzXHJ2MTA5cOtiHEzRs%3D),[ USA](https://r4.cloud.yellow.ai/integrations/genericIntegration/payu-payment-gateway/x1668670622130?id=VVKB60XTmBsVV3sALdpMw0Z3rzXHJ2MTA5cOtiHEzRs%3D), and [Europe](https://r5.cloud.yellow.ai/integrations/genericIntegration/payu-payment-gateway/x1668670622130?id=VVKB60XTmBsVV3sALdpMw0Z3rzXHJ2MTA5cOtiHEzRs%3D).

PayUBiz will whitelist the webhook URL provided by the merchant in their systems. You can write to the [PayU Integration team](mailto:integration@payu.in) for more information.

### 1.4 Enable PayU event to receive event in bot 

1. On the [Cloud Platform](https://cloud.yellow.ai) go to Staging/Development environment.
2. On the left navigation bar, click **Studio** > **Event** > **Integrations** and search for `Payu Biz Payment Status`.

   ![](https://i.imgur.com/vI6zufl.png)

3. Click on the more options icon and select **Activate**. If you have connected multiple accounts, you need to enable the event for each account.

4. Once the event is activated, you can create a flow in the Studio > Build and use the event at the start of the flow to trigger a specific action, such as displaying a message indicating that the payment is completed.

   <img src="https://i.imgur.com/hFfvxaR.png" width="70%"/>



## 2. PayU payment actions through bot conversations


:::note
If there are multiple accounts, you can select from which account you want to perform the action.
:::

### 2.1 Generate payment link

1. In the [Studio flow builder](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys), choose the node type as **Integrations** and select **PayU** from the list of integrations that have been enabled for that particular bot. An **Integration Action Node** will be added to the flow builder.

   <img src="https://i.imgur.com/gOTE1zk.png" alt="drawing" width="60%"/>


2. When you click the node, you will see the a drop-down with supported actions in this integration. Select **Generate Payment Link**.

   ![](https://i.imgur.com/saWr4er.png)


3. Fill in the fields based on the details provided in the following table. 

    | Field name |Sample value | Data type|Description|
    | -------- | -------- | -------- |-------|
    | Amount     | 100    | String     | Amount to be paid using the payment link.  |
    |ProductInfo|Iphone|String|Name of the product the user wants to purchase.|
    |Description|Test|String|Description of the product.|
    |CustomerName|Manish|String|Name of the customer.|
    |CustomerEmail|test@test.com|String|Email address of the customer.|
    |CustomerMobileNumber|9999933344|String|Contact number of the customer.|
    |txnID|Order123|String|The unique transaction ID that is generated dynamically.|
    |CustomerAddress|Ashoka Road, Mysore, Karnataka|String|Address of the customer.|
    |CustomerCity|New york|String|City of the customer.|
    |CustomerResidentState|Karnataka|String|State of the customer.|
    |CustomerZipcode|845309|String|Pincode of the customer.|
    |Send Email|false|Boolean|The email address of the customer to send the invoice.|
    |Time Unit|h|String|Frequency(in days, hours, minutes) at which a recurring payment will be charged.| 
    |UDF|Shipping Method| String| User defined field - used to store any information corresponding to a particular transaction. |
    |Validation Period|1|Number|Determines how long PayU will continue trying to charge the customer if the initial payment fails.|


To use this Integration Action Node in an app.yellow.ai bot, refer the following example:

```js
app.executeIntegrationAction({
    "integrationName": "payu-payment-gateway",
    "action": "Generate Payment Link",
    "dynamicParams": {
        "amount": "1",
        "productInfo": "testProduct",
        "customerFirstName": "Test Customer",
        "customerEmail": "test@test.com",
        "customerMobileNumber": "9999999999",
        "txnid": "123456789"
    }
}).then((res)=>{
    console.log("response from action node", res);
    app.log(res, '||Response from action node||')
}).catch((err)=>{
    console.log("Error in action node",err);
    app.log(err, '||Error in action node||')
})
```

### 2.1 Generate UPI intent


1. From the PayU Business node, select the *Create UPI intent.

   ![](https://i.imgur.com/gkeqscs.png)

2. Provide the necessary inputs by selecting the relevant variable for each parameter. Below is a table containing sample values, data types, and descriptions for each of these fields.

    | Field name |Sample value | Data type|Description|
    | -------- | -------- | -------- |-------|
    | Amount     | 100    | String     | Amount to be paid using the payment link.  |
    |CustomerEmail|test@test.com|String|Email address of the customer.|
    |CustomerPhoneNumber|9999933344|String|Contact number of the customer.|
    |CustomerName|Manish|String|Name of the customer.|
    Fail URL|https://alpha6.yellowmessenger.com/ |String|The redirection URL in case there's a payment failure.|
    |Success URL|https://alpha6.yellowmessenger.com/ |String
    The redirection URL in case of successful payment.|
    |TXN S2S flow|4|number|Txn S2S flow.|
    |Transaction ID|Order123|String|The unique transaction ID that is generated dynamically.|
    |Product Info|Iphone|String|Description of the product.|
    |UDF| CustomField|String|User defined Field - used to store any information corresponding to a particular transaction. |

3. The **Generate UPI intenrt Integration Action Node** has two outcomes, **success** or **failure**. If the payment link is generated successfully, the **Integration Action Node** returns a **Success** response code as shown below:

```json
{
       "metaData": {
         "message": null,
         "referenceId": "af65159e8566652849bc12a3450a8fca",
         "statusCode": null,
         "txnId": "wa5iy6b82pvquxcd1vby",
         "txnStatus": "pending",
         "unmappedStatus": "pending"
       },
       "result": {
         "paymentId": 15961819086,
         "merchantName": "wwwmerchantnamecom",
         "merchantVpa": "payumoney@hdfcbank",
         "amount": "1.00",
         "intentURIData": "pa=payumoney@hdfcbank&pn=Gaurav Dua&tr=15961819086&tid=wa5iy6b82pvquxcd1vby&am=1.00&cu=INR&tn=UPI Transaction for wa5iy6b82pvquxcd1vby",
         "acsTemplate": "PGh0bWw+PGJvZHk+PGZvcm0gbmFt"
       }
     }

```
If generating UPI intent fails, the **Integration Action Node** returns a Failure response code as shown below:

```json
{
  "message": "[INTG ERROR] Node API Execution failed for payu-payment-gateway_Create UPI Intent in bot x1645073590274: 4xx or 5xx series code encountered",
  "name": "IntegrationNodeAPIError",
  "apiResponseBody": {
    "result": null,
    "status": "failed",
    "error": "EX117",
    "message": "Invalid amount #~#Please ensure that you send all mandatory parameters in the transaction request to PayU.<br><div style='font-size: 13px;padding: 0 150px; padding: 0 150px; line-height: 18px;'>Mandatory parameters which must be sent in the transaction are: <br><b>key, txnid, amount, productinfo, firstname, email, phone, surl, furl, hash</b></div>.<br><div style='font-size: 13px;padding: 0 150px; line-height: 18px;'>The parameters which you have actually sent in the transaction are: <br><b> key, txnid, amount, productinfo, surl, hash, firstname, email, phone</b>.</div><br><div style='font-size: 13px;padding: 0 150px; line-height: 18px;'>Mandatory parameter missing from your transaction request are: <br><b></b>.</div><br><div style='font-size: 13px;padding: 0 150px; line-height: 18px;'>Please re-initiate the transaction with all the mandatory parameters.</div></p> "
  },
  "apiResponseStatusCode": 500
}
```

To use this **Integration Action Node** in an app.yellow.ai bot, refer the following example:

```js

app.executeIntegrationAction({
    "integrationName": "payu-payment-gateway",
    "action": "Create UPI Intent",
    "dynamicParams": {
        "amount": "1",
        "customerName": "farhan",
        "customerEmail": "farhan.jafri2011a@gmail.com",
        "customerMobileNumber": "9643999539",
        "productInfo": "test",
        "txnid":"wa5iy6b82pvquxcd1vby",
        "successUrl":"https://staging.yellow.ai",
        "failUrl":"https://staging.yellow.ai",
        "txnFlow": 4
    }
}).then((res)=>{
    console.log("response from action node", res);
    app.log(res, '||Response from action node||')
}).catch((err)=>{
    console.log("Error in action node",err);
    app.log(err, '||Error in action node||')
})
```













































