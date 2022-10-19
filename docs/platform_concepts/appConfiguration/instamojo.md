---
title : Instamojo
sidebar_label : Instamojo
---


## Scope of Integration

Yellow.ai Integration with Instamojo Payment Gateway allows you to generate payment links, view payment status and create refund with the yellow.ai platform. 

## Use-cases 

Following are the use-cases which are currently accommodated in the Integration:

### 1. Generate Payment link
Using the action nodes, you can generate payment links according to your use cases.
Get the final amount from your cart total and call the Generate Payment link action node of integration.

![alt_text](https://cdn.yellowmessenger.com/Iwuif7lVqcdR1665990538864.png "image_tooltip")

_ Node Input Params:-_ 

|Field Name|Sample Input|Description|
|--- |--- |--- |
|Amount*|200|The amount for the request. The minimum amount is 9. And the maximum is 200000.|
|Customer Name*|John|Name of payer|
|Customer Email*|John@test.com|Email of payer|
|Customer Mobile Number*|9999999999|Mobileno of payer|
|Purpose*|Iphone|Purpose of the payment request.|
|Send Email*|false|Flag to send request link via email. If send_email is true, a request email will be sent to the email supplied. If send_email is true but no email is supplied, request creation will throw an error.|
|Send Sms*|false|Flag to send request link via SMS. If send_sms is true, a request SMS will be sent to the phone number supplied. If send_sms is true but no phone number is supplied, request creation will throw an error.|
|statusCallbackUrl*|https://alpha6.yellowmessenger.com/integrations/genericIntegration/instamojo/x1645073590274?id=l%2B%2FD1yhpi5HjWFglhONPHbDYda7KtXeCEVUofPRsNBY%3D|Copy Webhook URL from instamojo card at integration page.|

##### Sample Success Response
```
{
  "id": "05f317448ad84649aa1a9c7328edb015",
  "user": "https://api.instamojo.com/v2/users/90f01dfdacbe4fe7892fc27dbdc30906/",
  "phone": "+919999999999",
  "email": "foo@example.com",
  "buyer_name": "John Doe",
  "amount": "2500",
  "purpose": "FIFA 16",
  "status": "Pending",
  "payments": [],
  "send_sms": true,
  "send_email": true,
  "sms_status": "Pending",
  "email_status": "Pending",
  "shorturl": null,
  "longurl": "https://www.instamojo.com/@foo/05f317448ad84649aa1a9c7328edb015",
  "redirect_url": "http://www.example.com/redirect/",
  "webhook": "http://www.example.com/webhook/",
  "created_at": "2016-05-09T16:10:13.786Z",
  "modified_at": "2016-05-09T16:10:13.786Z",
  "resource_uri": "https://api.instamojo.com/v2/payment_requests/05f317448ad84649aa1a9c7328edb015/",
  "allow_repeated_payments": false,
  "mark_fulfilled": true
}
```

#### Event for receving payment confirmation on bot
Following are the events which are currently accommodated in the Integration:

Event | Description
----- | -----------
InstaMojo Payment Status | In case of payments the status can be checked with these details.
Please Activate the InstaMojo Payment Status after configuring instamojo credentials at integration page.

![alt_text](https://cdn.yellowmessenger.com/tHfJQScwtIoy1665990705590.png "image_tooltip")

### 2. Create a Refund
This will refund a payment made on Instamojo.

_ Node Input Params:-_ 

|Field Name|Sample Input|Description|
|--- |--- |--- |
|Refund Amount*|200|This field can be used to specify the refund amount. For instance, you may want to issue a refund for an amount lesser than what was paid.|
|Unique Transsction Id*|C5c0751269|Mandatory parameter in the body from the second case creation onwards for the payment to prevent duplicate case creations due to replay of APIs|
|Issue Type*|QFL|A three letter short-code identifying the reason for this case. Please refer below table for this field's value|
|Descriptiont*|Prduct is not good|Additonal text explaining the refund.|
|Payment Id*|MOJO5c04000J30502939|Payment Id received in create payment link node. store in database for further use.|


##### Valid values for type are:
|Type|Description|
|--- |--- |
|RFD||Duplicate/delayed payment.|
|TNR|Product/service no longer available.|
|QFL|Customer not satisfied.|
|QNR|Product lost/damaged.|
|EWN|Digital download issue.|
|TAN|Event was canceled/changed.|
|PTH|Problem not described above.|

```
{
  "refund": {
    "id": "C5c0751269",
    "payment_id": "MOJO5c04000J30502939",
    "status": "Refunded",
    "type": "QFL",
    "body": "Customer isn't satisfied with the quality",
    "refund_amount": "100",
    "total_amount": "100.00",
    "created_at": "2015-12-07T11:01:37.640Z"
  },
  "success": true
}
```

## Configuration

Configuring the integration with Instamojo is straightforward. Follow the steps defined below to start integrating:

1. Sign up on Instamojo
  * __Test Mode:__ This mode is for testing and for developers who are just getting started in Instamojo Integration. Test Mode is completely Free of Charge. No real charges will be made, even if we give our valid card details in the Instamojo use (https://test.instamojo.com/). for sign Up
  * __Live Mode:__ As the name suggests, In the Live Mode, we would be charged for real. In order to work on Live Mode, we have to give our bank account and KYC Details. Use (https://www.instamojo.com/) for Signup

2. After Signup . Login to Dashboard -> Go to API & Plugins -> Generate Credentials -> Select Direct Rest API Integration.

![alt_text](https://cdn.yellowmessenger.com/QMOhzge5GSgd1665990761659.png "image_tooltip")

3. Copy Client ID and Client Secret.

4. Go to integration page of cloud.yellow.ai and search for Instamojo then Paste the client Id and Client Secret in form.

5. For sanbox environment use ```https://test.instamojo.com``` as baseUrl and for production env use ```https://api.instamojo.com``` as baseUrl


# Reference

 
For more information about action nodes you use here, refer this [Create Payment](https://docs.instamojo.com/reference/create-a-payment-request-1), [webhooks](https://docs.instamojo.com/reference/what-is-a-webhook).













