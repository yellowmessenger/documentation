---
title: Ccavenue integration
sidebar_label : Ccavenue Payment
---

**CcAvenue** is a leading payment gateway that allows businesses to securely accept online payments through credit cards, debit cards, net banking, and other methods.

By integrating CcAvenue with Yellow.ai, your AI agent can generate payment links directly within conversations, making transactions seamless and convenient for customers.


## Get configuration details from the CcAvenue portal

You need the following details to integrate CcAvenue with Yellow.ai:
* Merchant ID
* Environment (Sandbox or Production)
* Primary Working Key
* Access Codes and Working Keys for the listed IPs (these differ for Sandbox and Production environments).

To get these details from the CcAvenue portal, follow these steps:

1. Log in to your [CcAvenue dashboard](https://dashboard.ccavenue.com/).

2. Go to **Settings** > **API Key**.

3. Locate the first URL under API details (this will be your Primary URL).

4. Copy the **Working Key** associated with the Primary URL.

5. Collect the **Access Code** and **Working Key** for the specific IP addresses, as shown below:

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/fields-ccavenue.png)

### Connect CcAvenue to yellow.ai

:::note
* In a two-tier environment, connect the integration app in the Development environment.
* In a three-tier environment, connect it in Staging or Sandbox.
* Once connected, integrations are automatically available in the Live environment.
:::

To connect your CcAvenue account with Yellow.ai, follow these steps:

1. Navigate to the **Development/Sandbox** environment and 
2. Go to **Extensions** > **Integrations** > **Payment**  > **CcAvenue**. You can also search for **CcAvenue** in the search box. 

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/ccavenue.png)
    
3. In **Give account name**, enter a unique name for the integration. You can use only lowercase alphanumeric characters and underscores (_).

4. In **Merchant ID**, enter the ID copied from the CcAvenue portal.

5. In **Environment**, select Sandbox (testing) or Production (live).

6. In **Primary working key**, paste the key retrieved from API Key settings.

7. In **Access codes** and **Working keys**, enter the values for each IP address.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/merchantID.png)
   
### Configure Webhook URL in CcAvenue account

The webhook URL acts as a callback endpoint where your CcAvenue account can send notifications or updates about payment events. This enables your AI agent or application to respond automatically when a payment status changes.

To configure the webhook URL, follow these steps:

1. Go to the connected **CcAvenue integration** and copy the **Webhook URL**.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/cc-webhook.png)

2. Log in to your **CcAvenue account**, navigate to the **Webhook URL Configuration** section, and add the webhook URL you copied from Yellow.ai platform. 
   
### Enable CcAvenue event to receive event in AI agent

You can enable payment status events to trigger actions in the AI agent once a transaction is completed.

1. On the [Cloud Platform](https://cloud.yellow.ai) go to Staging/Development environment.
2. On the left navigation bar, click **Automation** > **Event** > **Integrations** and search for `CcAvenue Payment Status`.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/ccactivate.png)

3. Click on the more options icon and select **Activate**. If multiple accounts are connected, activate the event for each one.

4. Once activated, create a flow under **Automation** > **Build**, and use this event as a trigger to display actions such as payment confirmation messages.

   <img src="https://cdn.yellowmessenger.com/assets/yelow-docs/paymentevent.png" width="90%"/>


## Generate CcAvenue invoice link from AI agent conversation

1. When building [Conversation flows](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys), add an **Integration action node** and select **CcAvenue** from the list of enabled integrations.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/nodescc.png" alt="drawing" width="30%"/>
   
   


2. When you click the node, you will see a drop-down with supported actions in this integration. Select **Generate Quick Invoice**.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/quick-invoice.png)


3. Fill in the fields based on the details provided in the following table. 

    | Field name |Sample value | Data type|Description|
    | -------- | -------- | -------- |-------|
     Amount | 100 | Number | Amount to be paid using the payment link
     Currency| INR | String | Cuurency for which the invoice to be generated
     Customer Email ID | John@gmail.com |String | | Email ID on which the invoice will be sent.
     Customer Email Subject | Invoice for your order | String | Subject line of the email containing the invoice.
     Customer Mobile No | 9876543210 | Number | Mobile number of the customer
     Customer Name | John Doe | String | Name of the customer receiving the invoice.
     Valid for  | 10 | Number | Duration for which the invoice remains valid.
     Valid Type | days | Number | Unit of duration (minutes / hours / days / month / year).
     Invoice Description | Payment for Order #123 | String | Description of the invoice (sent in email).
     Merchant Reference No | INV123 | String | Unique merchant identifier for the invoice.
     Sub Account ID | sub_001 | String | Unique sub-account ID (if applicable)
     Terms and Conditions | All sales are final and non-refundable. | String | Terms and conditions to be displayed in the invoice.
     
**Sample response for success**

```c
{
  "error_desc": "",
  "invoice_id": "5393524984",
  "tiny_url": "payit.cc/CCAVEN/IIt0JWU532",
  "qr_code": "iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAYAAACPgGwlAAACQUlEQVR42u3dQW7DMAwEQP__0-kLegjCpWhqFsglENxGY0CmZNnPR67LowugC3SBLtAFukAX6AJdoAt0gS7QBbpAF-gCXaBD__lgz1P--fb4_7VP_JZT_QAdOnToB9ETx0l3TtWJlO4H6NChQx-CXjUWf3v89ImU_lvQoUOHfiF61ZibvjaADh06dOjRH1s141c11kOHDh26Gbny8XrCdYVpWOjQob8UPb2e_pbv3UQBHTr0BeidSSyIJMq3kX0HHTp06PWzXumFj_StVlXt11_IQYcOfRN6Ynw8NTOW2IhxVckGHTr0G2bkJpdanXfDXrXgAh069E3oVaXcLyfSqbtk09uxoUOHDn3ImF7VJl3WVf1vnX0IHTp06ENKts5boTpn2CaUjdChQ4feXLJ1PqUhvf6eGH_X7GWDDh36zejpMuTUJoV02QgdOnTowxdcqhZQqhZcEm0SpeUrZuSgQ4d-A3rng_1PlV3pfXDX7k-HDh361s0OVVinTrbE_jjo0KFDX1ayVbXv_D5xzQAdOnTow0u2qpIn0SZRcqb3ykGHDh36wDG983ogXV6dekgRdOjQob90waWzczqfmLH-HS7QoUP_eFtTywJE5wt5q_pn5f506NChb0VPb1tOQ0-4boEOHTr0xejp8XHa4oi3KkOHDv1y9FOzf-njQIcOHfrlM3KntgxPeHIFdOjQoTejd25bnvAU6M5SFDp06NCb0eUdgQ5doAt0gS7QBbpAF-gCXaALdIEu0AW6QBfoAv3O_AEAhUV-1jUFZQAAAABJRU5ErkJggg",
  "invoice_status": 0,
  "error_code": "",
  "merchant_reference_no": ""
}
```     

Below is a sample screenshot of how the payment link will appear to the user:

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/payment.png)
     