---
title : EPIC FHIR Integration
sidebar_label : EPIC FHIR
---

You can now integrate your app on [Epic FHIR](https://fhir.epic.com/) account with the **Yellow.ai** platform using OAuth. This will let your users access patient details, search for appointment slots, and book appointments.

## 1. Connect Yellow.ai with EPIC FHIR

1. Go to your **Epic FHIR** app and fetch the **Client ID** and **Client Secret**.

![](https://i.imgur.com/MGxkK8J.png)


2. Go to your **Yellow.ai** bot and click **Integrations** in the module switcher.

![](https://i.imgur.com/BmIVufB.png)

3. Search for **EPIC FHIR**, fill in the **Client ID** and **Client Secret** and click **Connect to EPIC FHIR**.

![](https://i.imgur.com/bHEXvm6.png)


:::note 
1. Yellow.ai does not store the client’s credentials. We use the OAuth 2.0 approach to integrate with the client’s **Epic FHIR** account. 
2. This integration supports the STU3 version of API, so the  APIs based on the clients' use cases should be added while creating the **Epic** app.
:::

## 2. Use-Case

You can retrieve patient data with patient ID and  demographics, view available appointment slots, book appointments and also fetch the appointment details of a patient.

1. In the [Studio](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys) flow builder, select the **Integrations** node and click **EPIC FHIR** from the list of integrations that have been enabled for that bot.

![](https://i.imgur.com/HlhkU2S.png)

2. After clicking **EPIC FHIR**,an **Integration Action Node** will be added to the flow builder. When you click that node, you will see all the use-cases of this integration in a drop-down. Choose the one you want to use.

![](https://i.imgur.com/KMIIA9d.png)


The following table describes the use-case values in detail:

| Node Name| Functionality | 
| -------- | -------- |
| Fetch patient information | Fetch patient information from patient ID     | 
|Fetch patient diagnostic information| Fetch patient diagnostic information from patient ID|
|Fetch patient demographics| Fetch patient information using the patient's date of birth and name|
|Fetch appointment slots|Fetch available appointment slots|
|Book appointments|Book appointments with the available appointment ID from fetch appointment slots use case|
Fetch patient appointment details| Fetch the appointment details of a patient from the patient ID|


### Supported Version
This integration will support STU3 version releases. For more information, click [here](https://fhir.epic.com/Specifications).



