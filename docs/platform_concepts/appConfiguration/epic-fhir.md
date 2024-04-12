---
title : EPIC FHIR Integration
sidebar_label : EPIC FHIR
---

The Epic FHIR integration lets your bot access medical records from your Epic FHIR app and manage patient details, search for appointment slots, and book appointments.


## Supported Epic FHIR actions with Yellow.ai

After integrating with Epic FHIR, you can perform the following tasks directly from the Yellow.ai platform:

| Action| Description | 
| -------- | -------- |
| Fetch patient information | Fetch patient information from patient ID     | 
|Fetch patient diagnostic information| Fetch patient diagnostic information from patient ID|
|Fetch patient demographics| Fetch patient information using the patient's date of birth and name|
|Fetch appointment slots|Fetch available appointment slots|
|Book appointments|Book appointments with the available appointment ID from fetch appointment slots use case|
Fetch patient appointment details| Fetch the appointment details of a patient from the patient ID|

## Connect Epic FHIR with Yellow.ai

**Prerequsites:**

1. An app on Epic FHIR. To know about creating an app on Epic FHIR, click [here](https://fhir.epic.com/Documentation?docId=epiconfhirrequestprocess).
2. An active yellow.ai account.

To connect your Epic FHIR account with Yellow.ai, follow the these steps:

1. Go to your app on Epic FHIR and copy the **Client ID** and **Client Secret**.

   ![](https://i.imgur.com/MGxkK8J.png)


2. On the left navigation bar, go to **Extensions** > **Integrations**.

   ![](https://i.imgur.com/JagYT5w.png)

3. Navigate to **CRM** > **EPIC FHIR**. Alternatively, you can use the Search box to find the integration app.

   ![](https://i.imgur.com/nnlaQQJ.png)

4. Enter the **Client ID** and **Client Secret** and click **Connect to EPIC FHIR**.

   ![](https://i.imgur.com/uZL82XT.png)
   
:::info
1. In a two-tier environment, add account names in Development and use them in Live.
2. In a three-tier environment, add accounts in Staging and Sandbox, and they'll be available in Production.
:::

5. You can add up to 15 accounts. To add another Epic FHIR account, click on **Add account** and follow the steps mentioned above. 


:::note 
1. Yellow.ai does not store the client’s credentials. We use the OAuth 2.0 approach to integrate with the client’s **Epic FHIR** account. 
2. This integration supports the STU3 version of API, so the  APIs based on the clients' use cases should be added while creating the **Epic** app.
:::

## Use actions in bot conversations

This integration lets your users access patient's medical records and fetch/book appointments.

1. Go to **Studio** and build a flow based on how you want the bot to take the user through the process.
2. Include the integration node at the point in the flow where you want to let the user access Epic FHIR info. To accomplish this, navigate to **Integrations** and select **EPIC FHIR**.

     ![](https://i.imgur.com/HlhkU2S.png)


3. Once the node gets added, click the node, choose the EPIC FHIR account for that action and [choose the action](#supported-epic-fhir-actions-with-yellowai) you want to carry out.

   ![](https://i.imgur.com/KMIIA9d.png)

4. Depending on the selected action, the corresponding fields will be shown. Collect this information as input from users by constructing a flow accordingly and [store the input in variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-data-in-variables). These variables will then be used in this context.
5. Each Epic FHIR action returns a response as a JSON object or an array. [Store that response in a variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-data-in-variables) and and to extract the required information from the payload [pass that variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#42-retrieve-data-from-variables) in a [message node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes) to display that response to the end user.
