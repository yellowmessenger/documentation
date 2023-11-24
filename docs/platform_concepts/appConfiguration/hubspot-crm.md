---
title : Hubspot CRM
sidebar_label : Hubspot CRM
---

Yellow.ai seamlessly integrates with Hubspot CRM, providing you with the capability to manage your Hubspot CRM account directly through yellow.ai's bot. This integration allows you to effortlessly create, fetch, update, delete and search for contacts in your Hubspot CRM account.


## Supported Hubspot CRM actions in Yellow.ai

 Action                          | Description                                                                                                                                                   |
|---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Create a contact                    |    Creates a new contact                                                                                                 |
| Get a contact                    | Fetches a particular contact                                                                                                     |
| Delete a contact                   | Deletes a contact|
|Update a contact| Modifies details of a particular contact|
|Search a contact by phone| Looks for a contact using phone number|
|Search a contact by email| Looks for a contact using email address|

## Connect Hubspot CRM with Yellow.ai

**Prerequsites:**

1. An active Hubspot CRM account
2. An active yellow.ai account.

To connect your Hubspot CRM account with Yellow.ai, follow the these steps:

1. Go to cloud.yellow.ai and click **Integrations** on the module switcher.

   ![](https://i.imgur.com/1EjCvqy.png)


2. Search for **Hubspot** in the search box or go to the category **CRM** > **Hubspot**.

   ![](https://i.imgur.com/2kHRX0G.png)

3. In **Give account name** give a unique name to your Hubspot CRM account and click **Connect**.

:::info
1. In a two-tier environment, add account names in Development and use them in Live.
2. In a three-tier environment, add accounts in Staging and Sandbox, and they'll be available in Production.
:::

4. Sign in to your **Hubspot CRM** account when prompted. From there, select the Hubspot CRM account you want to link with Yellow.ai and click **Choose Account** to authorize Yellow.ai to access **Hubspot CRM**.
 
   <img src="https://i.imgur.com/8hvI81j.png" alt="drawing" width="60%"/>

5. You can add up to five merchant accounts. To add another Hubspot CRM account, click on **Add account** and follow the steps mentioned above.

   ![](https://i.imgur.com/ncdA1T2.png)


## Enable events for Hubspot CRM actions

For the bot to perform certain actions when an event occurs in Hubspot CRM, the event needs to be activated.

The following are the events available for Hubspot in Yellow.ai:

| Event                      | Description                               |
| -------------------------- | ----------------------------------------- |
| hubspot-contact-created    | Contact is created in Hubspot       |
| hubspot-contact-changed    | Contact is modified in Hubspot     |
| hubspot-contact-deleted    | Contact is deleted in Hubspot      |
| hubspot-contact-merged     | Contacts are merged in Hubspot       |
| hubspot-contact-restored   | Contact is restored in Hubspot     |


### Add webhook to receive events

You need to add the webhook URL from the integration page in your Hubspot CRM app to receive the events mentioned above. To do so:

1. Go to **Hubspot CRM integration** in cloud.yellow.ai and copy the Webhook URL.

   ![](https://i.imgur.com/Qmd7rxZ.png)

2. Go to your **Hubspot CRM** account and click the **Settings** icon.

   ![](https://i.imgur.com/x1eUiqz.png)

3. Go to **Integrations** > **Private Apps** and click **Create a private app**.

   ![](https://i.imgur.com/7r7HQyo.png)

4. In **Basic Info**, enter a **Name** and **Description**. You can also upload a logo for that app if required.

   ![](https://i.imgur.com/QiTtI94.png)

5. Go to **Scopes**, and enable the scopes for the actions for which you wish to recieve events from Hubspot.

   ![](https://i.imgur.com/dlWYtXU.png)
   
6. Go to **Webhooks** and past the Webhook URL copied in step 1. then, click **Create Subscription** to create the app.

   ![](https://i.imgur.com/otbZ7pA.png)

7. In the following screen, select the object types and the events you'd like to get notified. Then, click **Subscribe**.

   
   <img src="https://i.imgur.com/REVgszK.png" alt="drawing" width="50%"/>
   
 8. Click **Create app** on the top right corner.

   ![](https://i.imgur.com/BkgUaxh.png)


### Activate events in Yellow.ai

 To activate an event and use it in your flow,

1. Go to **Event** and click **Integrations**.

  ![](https://i.imgur.com/gBBZZ68.png)


2. Search for Hubspot events and click **Activate** next to the respective event.

   ![](https://i.imgur.com/BHmLQQk.png)

3. Go to a flow and include that event in the Start node and [build the flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow) to carry out the action when that event occurs.

   ![](https://i.imgur.com/br6ofma.png)
    

## Use actions in bot conversations

To carry out a certain action in your Hubspot CRM account, follow these steps:

1. Go to **Studio** and [create a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow) based on your requirement. 
2. In whichever point you want the bot to access Hubspot CRM, inlcude the Hubspot CRM node. For that, drag the node connector, go to **Integrations** > **Hubspot**.

   ![](https://i.imgur.com/KUo5DgA.png)

3. Configure the **Hubspot CRM** node based on the descriptions provided in the following:

   <img src="https://i.imgur.com/vQVD6rB.png" alt="drawing" width="60%"/>

* **Account name:** Choose the Hubspot CRM account.
* **Action:** Choose the [action](#supported-hubspot-crm-actions-in-yellowai) to be performed.
* Depending on the selected object, the corresponding fields will be shown. To fill those fields, you need to collect it as an input from users beforehand. Construct the flow accordingly and [store the data in variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-data-in-variables). These variables will then be passed in those fields.


4. Each Hubspot CRM action returns a response as a JSON object. [Store that response in a variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-data-in-variables) and [pass that variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#42-retrieve-data-from-variables) in a [message node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes) to display that response to the end user.

For example, if you receive the following response, you can use this syntax ``` {{{variables.variablename.results.0.properties.lastname}}}  ``` to filter out the contact's last name.

```
{
  "total": 0,
  "results": [
    {
      "createdAt": "2019-10-30T03:30:17.883Z",
      "archived": false,
      "id": "512",
      "properties": {
        "company": "Biglytics",
        "createdate": "2019-10-30T03:30:17.883Z",
        "email": "bcooper@biglytics.net",
        "firstname": "Bryan",
        "lastmodifieddate": "2019-12-07T16:50:06.678Z",
        "lastname": "Cooper",
        "phone": "(877) 929-0687",
        "website": "biglytics.net"
      },
      "updatedAt": "2019-12-07T16:50:06.678Z"
    }
  ],
  "paging": {
    "next": {
      "link": "?after=NTI1Cg%3D%3D",
      "after": "NTI1Cg%3D%3D"
    }
  }
}
```



