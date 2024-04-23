---
title : Instamojo integration
sidebar_label : Instamojo
---


Yellow.ai Integration with Instamojo Payment Gateway allows your bot to effortlessly generate payment links, monitor payment statuses, and facilitate refunds directly within the Yellow.ai platform. 

## Connecting Instamojo with Yellow.ai

Follow these steps to begin integrating:

### 1. Get required details from your Instamojo account


1. Sign up on Instamojo.
    * __Test Mode:__ This mode is intended for testing purposes and for developers who are just beginning their integration with Instamojo. Test Mode is completely free of charge but requires completion of KYC (Know Your Customer) verification. No actual charges will be incurred, even if valid card details are provided on the [Instamojo test environment](https://test.instamojo.com/) for sign-up.
    * __Live mode__: In Live Mode, transactions occur in real-time, and actual charges apply. To operate in Live Mode, users must provide their bank account information and complete the KYC (Know Your Customer) process. This ensures compliance with regulatory requirements and enables seamless processing of payments. To get started with Live Mode, visit [Instamojo's website](https://www.instamojo.com/) and sign up for an account.

2. After signing up, log in to the Instamojo account and go to **Dashboard** > Go to** API & Plugins** > **Generate Credentials** > Select **Direct Rest API Integration**.

   ![alt_text](https://cdn.yellowmessenger.com/QMOhzge5GSgd1665990761659.png "image_tooltip")

3. Copy the **Client ID** and **Client Secret**.

### 2. Use Instamojo details to integrate with your bot
In a two-tier environment, you can connect an integration app in the Development environment. In a three-tier environment, you can connect the integration app either in Staging or Sandbox. All connected integrations are available in the live environment.



1. On the [Cloud platform](https://cloud.yellow.a), Navigate to the Development/Staging environment and click **Extensions** > **Integrations** > **Payment** > **Instamojo**.
2. In G**ive account name,** enter a unique name for the integration. You can use only lowercase alphanumeric characters and underscores (_).
3. Enter the **Client ID** and *C*lient Secret** that was captured using the previous section.
4. For sandbox environment use ```https://test.instamojo.com``` as baseUrl and for production env use ```https://api.instamojo.com``` as baseUrl
3. To add multiple accounts, click ***+ Add account** and follow the above mentioned steps. You can add a maximum of 5 merchant accounts.

----

### 3. Enable Instamojo related events for the bot

Instamojo payment status event: Indicates an update in the payment status. Each payment undergoes different status such as Pending,Processing, Completed, Failed, Refunded, or Cancelled.

To activate an event, refer to [this section](/docs/platform_concepts/appConfiguration/overview#step-3-configure-webhook-url).

To trigger a bot flow using the activated event, click [here](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/overview#step-5-trigger-bot-flows-with-integration-events).


### 4. Manage Instamojo actions through bot conversation

This integration enables the bot to perform the following Instamojo actions:

* Generate payment link
* Create refund

1. Go to Development/Staging environment and navigate to **Studio** > **Build** > Select the flow where you want to add the Generate payment link node.

2. Click **Add node** > **Integrations** > **Instamojo**.

   ![](https://i.imgur.com/NAS0u0k.png)

#### Generate Payment link

This action allows you to generate payment link at any point in a conversation.

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
| **StatusCallbackUrl**|  Copy Webhook URL from the Instamojo card at the integration page.Example: https://dummyurl.yellowmessenger.com/integrations/genericIntegration/instamojo/x16450274?id=l%2B%2FD1yhpida7KtXeCEVUofPRsNBY%3D|


---

#### Sample Success Response

```json
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

#### Create a Refund

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

```json
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













