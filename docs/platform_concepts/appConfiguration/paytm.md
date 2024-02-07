---
title: Paytm Payment Gateway
sidebar_label : Paytm
---

Yellow.ai Integration with Paytm Payment Gateway enables the end user to do the following:

1. Generate a payment link and receive an intimation regarding the status of the payment as to whether it was a success or failure.
2. Initiate the process of refund.
3. Check the status of the refund that was initiated.

## Configuration

You can configure the Paytm payment gateway by following the below steps:

1. Enabling the Integration in the yellow.ai Integrations Module.

    - Login to cloud.yellow.ai and click the Integrations Module from the top left corner of your screen.
    - Then search the integration named **Paytm** or choose the category named Payment from the left navigation bar and then click **Paytm**.
    - This will now open a section where we have to type in the required details to enable this integration. The required values are **Merchant ID** (To be provided by the client/Paytm spoc of the client), **Merchant Key** (To be provided by the client/Paytm spoc of the client) , **API Domain** (In case you want to use the staging domain of Paytm please use https://securegw-stage.paytm.in otherwise please use https://securegw.paytm.in) , **Channel ID** (To be provided by the client/Paytm spoc of the client), **Industry Type** (To be provided by the client/Paytm spoc of the client).
    - After entering these values, you need to click  **Connect** and the Integration will be enabled at yellow.ai’s end.
    - If you have multiple accounts, follow the above mentioned steps to add each of them.

:::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 15 merchant accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::



![](https://i.imgur.com/D6FFCed.png)


![](https://i.imgur.com/knahjjR.png)


![](https://i.imgur.com/4e8mqVP.jpg)


2. Configure the webhook URL in the Paytm dashboard.

    - Copy the webhook URL mentioned in the Instructions section of the Paytm Integration Card. Please note that based on the region of your bot i.e r1/r2/r3/r4/r5, you need to append that to the domain of the webhook URL. For example, if the domain is https://cloud.yellow.ai, you need to change it to https://r1.cloud.yellow.ai if the region of the bot is r1. If the bot belongs to the Indian region, you can use the origin domain itself.

![](https://i.imgur.com/17C5i0Y.png)


  - The client needs to log in to the Paytm dashboard and navigate to the Webhook URL Configuration section and add the provided webhook URL.

3. Receiving event in yellow.ai Bot.

    * Login to cloud.yellow.ai and click the Studio Module from the top left corner of your screen.
    * Click the Event, from the left navigation bar and then choose Integrations.
    * You will find an event named Paytm Payment Status that needs to be activated by clicking on the three dots next to the name of the event.
    * After activating the event, a flow needs to be created in the Studio module whose trigger point is this event. Now based on the event data received, an appropriate message is displayed to the end user.

![](https://i.imgur.com/D6FFCed.png)


![](https://i.imgur.com/9Xkc7SK.png)


![](https://i.imgur.com/lnAQscW.png)

:::info
If you have added multiple accounts in your platform, enable events for each of those accounts.
:::

**Sample webhook event data sent by Paytm**

```
{
 "PAYMENTEMAILID": "user@example.com",
 "PAYMENTMOBILENUMBER": "7777777777",
 "GATEWAYNAME": "WALLET",
 "RESPMSG": "Txn Success",
 "BANKNAME": "WALLET",
 "PAYMENTMODE": "PPI",
 "CUSTID": "CUST_001",
 "MID": "INTEGR7769XXXXXX9383",
 "MERC_UNQ_REF": "LI_12345",
 "RESPCODE": "01",
 "TXNID": "202005081112128XXXXXX68470101509706",
 "TXNAMOUNT": "1.00",
 "ORDERID": "ORDERID_98765",
 "STATUS": "TXN_SUCCESS",
 "BANKTXNID": "63240520",
 "TXNDATETIME": "2020-09-10 13:03:05.0",
 "TXNDATE": "2020-09-10",
 "CHECKSUMHASH": "PMXJocjUUKGq7MXGwHO0LNOV+YxwuYi4gKjRgFOIZVGVqyxqfFuec+A8boUq5Q3c87yYM9DOeCmjIj5mH20SfIiDjOJiU4eFzNxu0J1qKdc=",
 "LINKNOTES": "Link Note Description"
}
```

## Use cases 

Following are the use cases that are currently accommodated in the Integration:

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::

### Generate Payment Link

In the studio flow builder, you need to choose the node type Integrations from the dialog box and then you will see an option to select Paytm from the list of Integrations that have been enabled for that particular bot.

![](https://i.imgur.com/7r0Td7w.png)


After clicking on Paytm, you will see that an Integration Action Node is added to the flow builder. On clicking the Integration Action Node, you will see the dropdown of available use cases for this integration and you need to choose Generate Payment Link from that dropdown.

![](https://i.imgur.com/mA9hm4Q.png)


The set of mandatory fields required for the successful execution of this use case (Generate Payment Link in this case), will be displayed. The below-mentioned table consists of the sample value, data type, and description for each field present in the above screenshot:


| Field name | Sample value |  Data type   | Description |
| -------- | -------- | --- | -------- |
| Timestamp     | 1588402269     | String    | EPOCH timestamp of the time at which the request is being sent    |
|Amount|3500|String|Transaction amount|
|LinkName|Test|String|Name of the link that you want to display to the customer, link name is used to generate a long URL|
|LinkType|FIXED|String|Type of link|
|LinkDescription|Test|String|Description of the link that you want to display to the customer|
|SendSms|true/false|Boolean|Flag whether SMS is to be sent to the customer by Paytm|
|SendEmail|true/false|Boolean|Flag whether Email is to be sent to the customer by Paytm|
|CustomerName|Mahesh|String|Name of the customer|
|CustomerEmail|test@gmail.com|String|Email ID of the customer|
|CustomerMobile|9876543210|String|Mobile number of the customer|
|LinkNotes|Reference details|String|Add additional notes to your link. This won’t be shown to the customers|


The **Generate Payment Link Integration** Action Node has two possible outcomes, success or failure which are depicted by the success and fallback branches. Based on whether the execution of the Integration Action Node was successful or not, the flow will proceed to the **success** or **fallback** branches respectively.

:::note
The easiest way to identify success/failure is by looking at the key tokenType in the head object. 
If its value is **AES**, the response is a success.
:::


**Sample response for success**

In case of success, you must extract the key **shortUrl** present in the **body** object and display it to the end user with an appropriate message with the help of any of the **Message type** nodes.

```
{
    "head": {
        "version": null,
        "timestamp": "1566994462639",
        "channelId": null,
        "tokenType": "AES",
        "clientId": null
    },
    "body": {
        "linkId": 5861,
        "linkType": "GENERIC",
        "longUrl": "https://securegw-stage.paytm.in/link/PAYMENTLINKNAME/LL_5861",
        "shortUrl": "https://paytm.me/ID-PBo7",
        "expiryDate": "27/08/2020 17:44:22",
        "isActive": true,
        "merchantHtml": "",
        "createdDate": "28/08/2019 17:44:22",
        "notificationDetails": [],
        "resultInfo": {
            "resultStatus": "SUCCESS",
            "resultCode": "200",
            "resultMessage": "Payment link is created successfully"
 }
}
} 

```
**Sample response for fallback**


```
{
    "head": {
        "version": "v2",
        "timestamp": "28/08/2019 17:47:22",
        "channelId": null,
        "tokenType": null,
        "clientId": null
    },
    "body": {
        "resultInfo": {
            "resultStatus": "FAILED",
            "resultCode": "302",
            "resultMessage": "link name contains sepcial character."
        }
    }
}

```

**To use this Integration Action Node in an app.yellow.ai bot**, refer to the below-mentioned example:

```
 app.executeIntegrationAction({
    		"integrationName": "paytm",
    		"action": "Generate Payment Link",
"dynamicParams": {
    "amount": "5",
    "timestamp": "1658203708983",
    "linkName": "Test",
               "linkType": "FIXED",
               "linkDescription": "Test Description",
                          "sendSms": false,
                          "sendEmail": false,
                          "customerName": "John Doe",
                          "customerEmail":"test@test.com",
                          "customerMobile":"9955995500",
                          "linkNotes":"test note"
}
}).then((res)=>{
    console.log("response from action node", res);
    app.log(res, '||Response from action node||')
}).catch((err)=>{
    console.log("Error in action node",err);
    app.log(err, '||Error in action node||')
})


```

### Initiate Refund

In the studio flow builder, choose the node type as Integrations from the dialog box. You will see an option to select Paytm from the list of Integrations that have been enabled for that particular bot.

![](https://i.imgur.com/7r0Td7w.png)

After clicking on Paytm, you will see that an Integration Action Node is added to the flow builder. Upon clicking on the Integration Action Node, you will see the dropdown of available use cases for this integration and you need to choose Initiate Refund from that dropdown.

![](https://i.imgur.com/s6AUREb.png)


The set of mandatory fields required for the successful execution of this use case (Initiate Refund in this case), will be displayed. The below-mentioned table consists of the sample value, data type, and description for each field present in the above screenshot:

| Field name | Data type   | Description | Sample value | 
| -------- | -------- | --- | -------- |
|RequestTimestamp|String|POCH timestamp of the time at which the request is being sent|1588402269|
|OrderId|String|It is a unique reference ID for a transaction passed in the transaction request. Order ID should be passed to raise the refund|OREDRID_98765|
|ReferenceId|String|Unique Reference ID for refund transaction which is generated by merchant. Duplicate REFID will be rejected by the Paytm gateway|REFUNDID_98765|
|TransactionId|String|TXNID is the Paytm payment Transaction ID against which the refund transaction is being placed.TXNID is provided in response payload for every payment transaction| 202005081112128XXXXXX68470101509706|
|RefundAmount|String|Amount for which the refund is to be made. It can be equal to or less than the transaction amount and should be up to two decimal places. The only special character allowed is (".")|30.00|

The **Initiate Refund Integration** Action Node has two possible outcomes, success or failure which are depicted by the success and fallback branches. Based on whether the execution of the Integration Action Node was successful or not, the flow will proceed to the **success** or **fallback** branches respectively.

:::note
The easiest way to identify success/failure is by looking at the key resultStatus in the resultInfo object. If its value is not TXN_FAILURE, the response is a success.
:::


**Sample response for success**

In case of success, you need to extract the key **resultStatus**, and **resultMsg** in the **resultInfo** object and display them to the end user with an appropriate message with the help of any of the **Message type** nodes.


```
{
    "head": {
        "responseTimestamp": "1567421120859",
        "signature": "WaFdplm36GmfBtZ6jPIFClLSEffhAk9fTpJ6i8WpgqiZvtUNl53mLL7mu4JWwxPpfSa5pdexyxK/68WtoTmd53TI+R9GffjGc3USoLgWcKI=",
        "version": "v1"
    },
    "body": {
        "txnTimestamp": "2019-09-02 12:31:49.0",
        "orderId": "YOUR_ORDER_ID",
        "mid": "YOUR_MID_HERE",
        "refId": "UNIQUE_REFUND_ID",
        "resultInfo": {
            "resultStatus": "PENDING",
            "resultCode": "601",
            "resultMsg": "Refund request was raised for this transaction. But it is pending state"
        },
        "refundId": "PAYTM_REFUND_ID",
        "txnId": "PAYTM_TRANSACTION_ID",
        "refundAmount": "1.00"
    }
}    

```
**Sample response for fallback**

```
{
    "head": {
        "responseTimestamp": "1567421388384",
        "signature": "ry2bNQ+iq+geNezbFNBfIkXXWTFPUnavG6XkxciEJUNLmL7Op9S7qWP8V1TGHNYvggw2IsIt1OmprSfq92pODO5xiNJ+6pFyVtBUxnRrdL8=",
        "version": "v1"
    },
    "body": {
        "orderId": "YOUR_ORDER_ID",
        "mid": "YOUR_MID_HERE",
        "resultInfo": {
            "resultStatus": "TXN_FAILURE",
            "resultCode": "607",
            "resultMsg": "Refund can not be initiated for acanceledd transaction."
        },
        "txnId": "PAYTM_TRANSACTION_ID",
        "refundAmount": "1.00"
    }
}

```

**To use this Integration Action Node in an app.yellow.ai bot**, refer to the below-mentioned example:

```
app.executeIntegrationAction({
    		"integrationName": "paytm",
    		"action": "Initiate Refund",
"dynamicParams": {
    "requestTimestamp": "1658203708983",
    "orderId": "OREDRID_98765",
    "referenceId": "REFUNDID_98765",
               "transactionId": "202005081112128XXXXXX68470101509706",
               "refundAmount": "30.00"
}
}).then((res)=>{
    console.log("response from action node", res);
    app.log(res, '||Response from action node||')
}).catch((err)=>{
    console.log("Error in action node",err);
    app.log(err, '||Error in action node||')
})

```

### Check Refund Status

In the studio flow builder, choose the node type Integrations from the dialog box, and then you will see an option to select Paytm from the list of Integrations that have been enabled for that particular bot.

![](https://i.imgur.com/7r0Td7w.png)

After clicking on Paytm, you will see that an Integration Action Node is added to the flow builder. Upon clicking on the Integration Action Node, you will see the dropdown of available use cases for this integration and you need to choose **Check Refund Status** from that dropdown.

![](https://i.imgur.com/W4AMMOB.png)

The set of mandatory fields required for the successful execution of this use case (Check Refund Status in this case), will be displayed. The below-mentioned table consists of the sample value, data type, and description for each field present in the above screenshot:


| Field name | Sample value |  Data type   | Description |
| -------- | -------- | --- | -------- |
|RequestTimestamp|1588402269|String|EPOCH timestamp of the time at which the request is being sent|
|OrderId|OREDRID_98765|String|It is a unique reference ID for a transaction passed in the transaction request and the Initiate Refund Integration Action Node. Order ID should be passed to check the actual status of the refund|
|ReferenceId|REFUNDID_98765|String|Merchant's Reference ID unique for every refund transaction. This is REFID for which refund status is being inquired|

The **Check Refund Status Integration** Action Node has two possible outcomes, success or failure which are depicted by the success and fallback branches. Based on whether the execution of the Integration Action Node was successful or not, the flow will proceed to the **success** or **fallback** branches respectively.


:::note
The easiest way to identify success/failure is by looking at the key resultStatus in the resultInfo object. If its value is TXN_SUCCESS, the response is a success.
:::

**Sample response for success**

In case of success, extract the key(s) and display to the end user an appropriate message with the help of any of the Message type nodes.

```
{
    "head": {
        "clientId": "C11",
        "responseTimestamp": "1556719120393",
        "signature": "Stx6P9HpnEG3GADkMuOcj50dm7ZHmvMPd29b8K5rxi4aVzRcJ5hklZo//RZdtTA+zcll8sdelyAYsxqPxFs66RVE0F2b9RElTMqYSfBj89I=",
        "version": "v1"
    },
    "body": {
        "orderId": "YOUR_ORDER_ID",
        "userCreditInitiateStatus": "SUCCESS",
        "mid": "YOUR_MID_HERE",
        "merchantRefundRequestTimestamp": "2019-05-01 19:27:25.0",
        "resultInfo": {
            "resultStatus": "TXN_SUCCESS",
            "resultCode": "10",
            "resultMsg": "Refund Successfull"
        },
        "txnTimestamp": "2019-05-01 19:25:41.0",
        "acceptRefundTimestamp": "2019-05-01 19:27:25.0",
        "acceptRefundStatus": "SUCCESS",
        "refundDetailInfoList": [{
            "refundType": "TO_SOURCE",
            "payMethod": "BALANCE",
            "userCreditExpectedDate": "2019-05-02",
            "userMobileNo": "91-******7777",
            "refundAmount": "1.00"
        }],
        "userCreditInitiateTimestamp": "2019-05-01 19:27:26.0",
"totalRefundAmount": "1.00",
        "refId": "UNIQUE_REFUND_ID",
        "txnAmount": "10.00",
        "refundId": "PAYTM_REFUND_ID",
        "txnId": "PAYTM_TRANSACTION_ID",
        "refundAmount": "1.00",
        "refundReason": "Testing refund reason",
        "agentInfo": {
            "name": "Lalit",
            "employeeId": "Em1-00`",
            "phoneNo": "7777777777",
            "email": "customer@example.com"
        }
    }
}  

```
**Sample response for fallback**

```
{
    "head": {
        "clientId": "C11",
        "responseTimestamp": "1556719175104",
        "signature": "gJD0EM+p9rGekkXKRt1M0aTUTaqZ6SVcmWfysIO9s9tJKhjrfpySlCEG8Tb97G1h4iYyJuhCglTr1obhO7xX+TIFwlaIgrundaj7dyt2SdA=",
        "version": "v1"
    },
    "body": {
        "orderId": "YOUR_ORDER_ID",
        "mid": "YOUR_MID_HERE",
        "refId": "UNIQUE_REFUND_ID",
        "resultInfo": {
            "resultStatus": "PENDING",
            "resultCode": "501",
            "resultMsg": "System Error."
        }
    }
}

```

**To use this Integration Action Node in an app.yellow.ai bot**, refer to the below-mentioned example:

```
  app.executeIntegrationAction({
    		"integrationName": "paytm",
    		"action": "Check Refund Status",
"dynamicParams": {
    "requestTimestamp": "1658203708983",
    "orderId": "OREDRID_98765",
    "referenceId": "REFUNDID_98765"
}
}).then((res)=>{
    console.log("response from action node", res);
    app.log(res, '||Response from action node||')
}).catch((err)=>{
    console.log("Error in action node",err);
    app.log(err, '||Error in action node||')
})

```

