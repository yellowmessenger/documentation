---
title : Instamojo
sidebar_label : Instamojo
---


Yellow.ai Integration with Instamojo Payment Gateway allows you to generate payment links, view payment status, and create refunds with the yellow.ai platform. 

## Configuration

Configuring the integration with Instamojo is straightforward. Follow the steps defined below to start integrating:

1. Sign up on Instamojo.
    * __Test Mode:__ This mode is for testing and for developers who are just getting started in Instamojo Integration. Test Mode is completely Free of Charge but requires KYC to be completed. No real charges will be made, even if we give our valid card details in the Instamojo use (https://test.instamojo.com/) to sign Up.
    * __Live Mode:__ As the name suggests, In the Live Mode, we would be charged for real. To work on Live Mode, we have to give our bank account and KYC Details. Use (https://www.instamojo.com/) to Signup.

2. After signing up, log in to Dashboard > Go to API & Plugins > Generate Credentials > Select Direct Rest API Integration.

![alt_text](https://cdn.yellowmessenger.com/QMOhzge5GSgd1665990761659.png "image_tooltip")

3. Copy the Client ID and Client Secret.

4. Go to the integration page of cloud.yellow.ai and search for Instamojo then Paste the client Id and Client Secret in the form.

5. For sandbox environment use ```https://test.instamojo.com``` as baseUrl and for production env use ```https://api.instamojo.com``` as baseUrl

6. If you have multiple accounts, follow the above mentioned steps to add each of them.

:::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 5 merchant accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::


----

## Event for receiving payment confirmation on the bot
Following are the events that are currently accommodated in the Integration:

Event | Description
----- | -----------
Instamojo Payment Status | In the case of payments the status can be checked with these details.

Please Activate the Instamojo Payment Status after configuring Instamojo credentials on the integration page.


![alt_text](https://cdn.yellowmessenger.com/tHfJQScwtIoy1665990705590.png "image_tooltip")

:::info
If you have added multiple accounts in your platform, enable events for each of those accounts.
:::

##  Use cases 

Following are the use cases that are currently accommodated in the Integration:

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::

### Generate Payment link

Using the action nodes, you can generate payment links according to your use cases. 
Get the final amount from your cart total and call the Generate Payment link action node of integration.

![alt_text](https://cdn.yellowmessenger.com/Iwuif7lVqcdR1665990538864.png "image_tooltip")


**Node Input Params**

| Field Name | Description | Sample Input |
| -------- | -------- | -------- |
| **Amount**    | The amount for the request. The minimum amount is 9. The maximum is 200000     | 200     |
|**Customer Name** |Name of payer| John |
|**Customer Email**	|Email of payer|John@test.com	|
|**Customer Mobile Number**	|Mobile no. of payer|9999999999	|
|**Purpose**|Purpose of the payment request |Iphone| 
|**Send Email**	| Flag to send request link via email. If send_email is true, a request email will be sent to the email supplied. If send_email is true but no email is supplied, request creation will throw an error |False|
|**Send SMS** |Flag to send request link via SMS. If send_sms is true, a request SMS will be sent to the phone number supplied. If send_sms is true but no phone number is supplied, request creation will throw an error | False|

**StatusCallbackUrl**  : Copy Webhook URL from the Instamojo card at the integration page.
> Example: https://alpha6.yellowmessenger.com/integrations/genericIntegration/instamojo/x1645073590274?id=l%2B%2FD1yhpi5HjWFglhONPHbDYda7KtXeCEVUofPRsNBY%3D


---

#### Sample Success Response
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

### Create a Refund

This will refund a payment made on Instamojo.

**Node Input Params**

|Field Name|Description|Sample Input|
|--- |--- |--- |
|Refund Amount|This field can be used to specify the refund amount. For instance, you may want to issue a refund for an amount lesser than what was paid.|200|
|Unique Transaction ID|Mandatory parameter in the body from the second case creation onwards for the payment to prevent duplicate case creations due to replay of APIs|C5c0751269|
|Issue Type|A three-letter short code identifying the reason for this case. Please refer to the below table for this field's value|QFL|
|Description |Additional text explaining the refund|Product is not good|
|Payment Id|Payment Id received in create payment link node. store in database for further use| MOJO5c04000J30502939|


#### Valid values for different type


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

**Reference**

 
For more information about the action nodes you use here, refer to [Create Payment](https://docs.instamojo.com/reference/create-a-payment-request-1), [webhooks](https://docs.instamojo.com/reference/what-is-a-webhook).













