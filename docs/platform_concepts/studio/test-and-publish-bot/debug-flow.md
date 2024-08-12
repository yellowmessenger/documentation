---
title: Debug your bot flows
sidebar_label : Debug bot flows
---


Debugging flows involve finding and fixing issues in the bot's conversations to ensure smooth user interactions. This helps enhance performance and reliability by addressing errors caused by factors like logical mistakes, syntax errors, and missing information in the automated conversations.

Here are some frequently encountered errors and their corresponding solutions.

## Flow based errors

In this section we will see how to fix errors that occur at the flow level.

If you notice that certain nodes aren't being executed, consider the following steps:

### Test with a text node

Insert a[ Text node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#2-text) containing a test message into the flow both BEFORE and AFTER the node that's not executing.

For instance, you can print the user's input email right after the email node to verify its functionality.

   ![](https://i.imgur.com/uaTNNnb.png)

### Utilize the debug feature

When you [test a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#-3-test-a-specific-flow) in your bot, you'll notice that the bot automatically conducts a step-by-step debugging of each phase of the conversation. It provides insights into the occurrences at each conversation stage. This feature is valuable for identifying the precise point in the flow where the bot's functionality encountered an issue.
      
   <img src="https://i.imgur.com/andTLxy.png" alt="drawing" width="30%"/>

## Handle datatype mismatch errors

Data type mismatch happens when we assign a data type to a field, but the value we collect ends up being a different type. For instance, if you set a field as a string, but the collected value is actually a number, it causes an error. In this section, we'll explore ways to manage and address these kinds of errors.

###  Resolve variable datatype conflicts

1. Go to **Automation** and click the **Variable** icon.

   <img src="https://imgur.com/UYsqhkU.png" alt="drawing" width="70%"/>

2. Assess if the selected data type aligns with the type of value you intend to collect.

   ![](https://i.imgur.com/LyBOsUw.png)

3. If they don't match, delete that variable and [creat a new one](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#-3-create-a-variable) and [assign it to that node](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-data-in-variables).


### Resolve datatype conflicts in database column 

1. Go to **Automation** > **Database** > Click the desired table > **Table actions** > **Edit table**.

   ![](https://imgur.com/7bQjwZQ.png)

2. Go through the data type of each field of the database table under **Type**.

   ![](https://i.imgur.com/ldxkxZ1.png)


## Resolve code based errors

Code errors can lead to non-functioning aspects. To ensure a flawless user experience, it's important to review the code as well.

### Check code logs

We offer a dedicated code logs section within our platform. 

To access it:

1. Navigate to **Automation** > **Functions** > **Logs**.

For instance, if you need to troubleshoot a particular function within your flow and review its output:

2. Configure the function to display relevant text alongside the data you wish to validate in the Functions section.
3. Navigate to the **Logs** section and click on the specific logs.
4. Use ctrl/cmd + F to open the Search box, enabling you to confirm if the console is indeed displaying the log.

   ![](https://imgur.com/txbIJ4d.png)


### Set up a test function

   ![](https://i.imgur.com/4yhYCxg.png)

Once the function gets executed, you can review the logs to see if you're getting the output.

   ![](https://i.imgur.com/69J9LYp.png)

### Resolve API level errors

You can test APIs either in the API management page or within the flow.

To test it within a flow:

1. Go to the **API node** you wish to test.

   ![](https://i.imgur.com/CAoQX2H.png)

2. Click on **Test** and enter the mandatory fields.

   ![](https://i.imgur.com/yQ32pAi.png)
 
3. Click on **Run** and check if you're able to get the expected output.

  ![](https://i.imgur.com/JKkWtPF.png)


You can also test your APIs in the [Automation APIs section](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api#14-test-the-api).

:::note
If you have any questions, feel free to post them on our [Community](https://community.yellow.ai/)
:::

## 3. Common errors and solutions

#### Error: Action node failed

```
"field": "custom_fields.cf_agent",
            "message": "It should be one of these values: 'Sarath,Bharath,Ajay,Prem,Senthil,Archana,Sneha Kandasamy (Freshworks),Prashanth Thiagarajan (Freshworks),Aarabhi,Srikanth,Bibin,Ibraz,Animesh,Pawan,Arivazhahan,Kirti,Abrar,Bhavana,Chitrita,Dipesh,Ashok,Nishanth,Athulya,Chandni,Waseem,Akarsh V,Mayank'",
            "code": "missing_field"
```
```
{
            "field": "custom_fields.cf_category761533",
            "message": "It should be one of these values: 'Transaction monitoring,Credit limit IncreaseV2,Feature Ask,App Breakages,KYC Verification Dont Use,Missing Label V2,Remittance India to US V2,Remittance U.S to India V2,ACH Transfer V2,WIRE Transfer V2,Credit card Bill Payment V2,Azpire V2,Azpire (linking to fintech Apps) V2,Azpire - Transaction Failures V2,Azpire - Transfers V2,Azpire - Bill Payments V2,Rewards 2.0 V2,Activation Journey V2,Credit card Subscription V2,SIM card request V2,Statements V2,KYC documents - Credit card / Checking account V2,Disputes V2,Card unblock V2,Card Ops V2,Account Closure V2,Bureau Reporting - Unsecured V2,Card logistics V2,Credit score tracker V2,Boost Account V2,Student Loan V2,Login/VPN issues V2,Reconciliation,ATM,CC Transaction Failures,Credit card / Debit card ( linking to fintech Apps),Junk/Influencer SPAM,Callback request'",
            "code": "missing_field"
        },
```

**Problem:** Ticket creation using [Freshdesk](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/freshdesk) keeps failing because custom fields that were configured in your Freshdesk account weren't configured/passed in the Freshdesk nodes.

**Solution:** Pass the custom field names in the parameter - {”key1”:”value1”,..}. The names of the custom fields are derived from the labels given to them during their creation. All the custom fields will have 'cf_' prepended to its name, eg., if you create a custom field with the label 'test', then the name of the custom_field will be 'cf_test'.




