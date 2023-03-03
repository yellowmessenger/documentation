---
title : PayU Business
sidebar_label : PayU Business
---


Integrate your Yellow.ai platform with [PayU ](https://payu.in/about-us?_ga=2.219146714.274874686.1677657469-282964387.1677657469)account to receive payments from your users through PayU. You can generate payment links, UPI intents for whatsapp pay and receive notifications on the success/failure of the payments.

## 1. Connect PayU with Yellow.ai

To connect your PayU account with yellow.ai, follow these steps:

### 1.1 Get API keys for your PayU account

You need to write to [PayUBiz team](mailto:integration@payu.in) for the API keys. They will provide the keys for both the modes.

1. **Test Mode:** The test mode is a simulation mode that you can use to test your integration flow. Your customers will not be able to make payments in this mode.
2. **Live Mode:** Once you have tested your integration, you can switch to the live mode by replacing the test mode keys(in the yellow.ai integration section) with the live mode keys to accept payments from customers.

Enter the API keys in the **Client ID** field of Yellow.ai's integration module, which we will cover in the following section.

### 1.2 Enable the integration in yellow.ai 

1. Login to cloud.yellow.ai and click **Integrations**.

![](https://i.imgur.com/RcDIdCN.png)


2. Look for **PayU Business** in the search box or choose the **Payment** category and click **PayU Business**.
![](https://i.imgur.com/zWeFVSs.png)


3. Fill in the following fields:

* **Salt value:** Salt Value is used to create a unique hash for each transaction, which is then used to verify the authenticity of the transaction. The Salt Value is provided by PayU and should be kept confidential.
* **Client ID:** Enter the **API** keys here.
* **Payu base URL:** Payubase URL is used to send API requests to the PayU payment gateway for payment processing.
* **Payu UPI base URL:** Payu UPI base URL is used to send API requests to the PayU UPI payment gateway for UPI payment processing.

Payu base URL and and Payu UPI base URL will differ for test and live modes.

**Payubase URL** 

* Test mode - https://test.payu.in
* Live mode - https://info.payu.in

**Payu UPI Base URL**

* Test mode - https://test.payu.in
* Live mode - https://secure.payu.in

4. Click **Connect** when you're done.

### 1.3 Configure webhook url 

Copy the webhook URL and the API key mentioned in the **Instructions** section of the PayUBiz Integration section in the yellow.ai platform.

![](https://i.imgur.com/2cyhP5e.png)


Use the webhook URL specific to your region -  [India](https://cloud.yellow.ai/integrations/genericIntegration/payu-payment-gateway/x1668670622130?id=VVKB60XTmBsVV3sALdpMw0Z3rzXHJ2MTA5cOtiHEzRs%3D), [MEA](https://r1.cloud.yellow.ai/integrations/genericIntegration/payu-payment-gateway/x1668670622130?id=VVKB60XTmBsVV3sALdpMw0Z3rzXHJ2MTA5cOtiHEzRs%3D), [Jakarta](https://r2.cloud.yellow.ai/integrations/genericIntegration/payu-payment-gateway/x1668670622130?id=VVKB60XTmBsVV3sALdpMw0Z3rzXHJ2MTA5cOtiHEzRs%3D), [Singapore](https://r3.cloud.yellow.ai/integrations/genericIntegration/payu-payment-gateway/x1668670622130?id=VVKB60XTmBsVV3sALdpMw0Z3rzXHJ2MTA5cOtiHEzRs%3D),[ USA](https://r4.cloud.yellow.ai/integrations/genericIntegration/payu-payment-gateway/x1668670622130?id=VVKB60XTmBsVV3sALdpMw0Z3rzXHJ2MTA5cOtiHEzRs%3D), and [Europe](https://r5.cloud.yellow.ai/integrations/genericIntegration/payu-payment-gateway/x1668670622130?id=VVKB60XTmBsVV3sALdpMw0Z3rzXHJ2MTA5cOtiHEzRs%3D).

PayUBiz will whitelist the webhook URL provided by the merchant in their systems. You can write to the [PayU Integration team](mailto:integration@payu.in) for more information .

### 1.4 Receive event in yellow.ai 

1. Login to cloud.yellow.ai and click the **Studio** module from module-switcher.
2. Go to **Event** > **Integrations**. Activate the event 'PayUBiz Payment Status' by clicking the three dots next to it. 

![](https://i.imgur.com/yVp8jkd.png)

4. Once the event is activated, create a flow in the **Studio** module with this event as its trigger point. Based on the received event data, a message will be displayed to the end user. 

The following is an example of payment status event, once the payment is received, 'Payment Done' message will be displayed to the user. 

![](https://i.imgur.com/hFfvxaR.png)


## 2. Use-Cases

The following use-cases are accomodated in this integration.

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
```
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

1. In the [Studio flow builder](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys), choose the node type as **Integrations** and select **PayU** from the list of integrations that have been enabled for that particular bot. An **Integration Action Node** will be added to the flow builder.

<img src="https://i.imgur.com/gOTE1zk.png" alt="drawing" width="60%"/>

2. When you click the node, you will see the a drop-down with supported actions in this integration. Select **Generate Payment Link**.

![](https://i.imgur.com/gkeqscs.png)

3. Fill in the following fields for the execution of the use-case. The following is a table that consists of the sample value,data type and description for each of these fields.

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

4. The **Generate UPI intenrt Integration Action Node** has two outcomes, **success** or **failure**. If the payment link is generated successfully, the **Integration Action Node** returns a **Success** response code as shown below:

```
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

```

{"message":"[INTG ERROR] Node API Execution failed for payu-payment-gateway_Create UPI Intent in bot x1645073590274: 4xx or 5xx series code encountered","name":"IntegrationNodeAPIError","apiResponseBody":{"result":null,"status":"failed","error":"EX117","message":"Invalid amount #~#Please ensure that you send all mandatory parameters in the transaction request to PayU.<br><div style='font-size: 13px;padding: 0 150px; padding: 0 150px; line-height: 18px;'>Mandatory parameters which must be sent in the transaction are: <br><b>key, txnid, amount, productinfo, firstname, email, phone, surl, furl, hash</b></div>.<br><div style='font-size: 13px;padding: 0 150px; line-height: 18px;'>The parameters which you have actually sent in the transaction are: <br><b> key, txnid, amount, productinfo, surl, hash, firstname, email, phone</b>.</div><br><div style='font-size: 13px;padding: 0 150px; line-height: 18px;'>Mandatory parameter missing from your transaction request are: <br><b></b>.</div><br><div style='font-size: 13px;padding: 0 150px; line-height: 18px;'>Please re-initiate the transaction with all the mandatory parameters.</div></p> "},"apiResponseStatusCode":500}
```

To use this **Integration Action Node** in an app.yellow.ai bot, refer the following example:

```

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













































