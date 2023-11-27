---
title : Microsoft Dynamics 365
sidebar_label : Microsoft Dynamics 365
---

You can integrate Microsoft Dynamics 365 with Yellow.ai to enhance customer engagement and streamlining interactions through intelligent conversational capabilities. With this integration, you can create, update, retrieve and delete leads. Additionally, it enables you to create, update, and delete records, as well as establish links between related field records.

## Supported Microsoft D 365 CRM actions with Yellow.ai

| Actions            | Descriptions                                                                                                              |
|--------------------|----------------------------------------------------------------------------------------------------------------------------|
| Create a Lead      | Generates a new lead entry within Microsoft.                                                                              |
| Get Lead Details    | Retrieves comprehensive lead information from the Microsoft database.                                                     |
| Update a Lead       | Modifies and updates the details of a lead within the Microsoft system.                                                    |
| Delete A Lead       | Removes specific lead details from the Microsoft database.                                                                |
| Create Record       | Initiates the creation of a fresh record within any entity in Microsoft.                                                    |
| Associate Records   | Establishes vital connections between entities in Dynamics 365, particularly useful for linking fields with complex relationships not directly supported by the create record action. |
| Picklist Options    | Retrieves predefined picklist choices for all picklist-type fields within the selected entity.                            |
| State Options       | Fetches predefined state options for all state-type fields within the selected entity.                                    |
| Status Options      | Gathers predefined status choices for all status-type fields within the selected entity.                                  |
| Search Records      | Conducts a thorough search across all records within a specific entity.                                                    |
| Update Record       | Edits and updates the value within a single record.                     |
| Deleting Records    | Erases records from the selected entities within the Microsoft system.                                                     |

## Connect Yellow.ai with Microsoft D 365 CRM

You need **Organization URL**, **Client ID**, **Client Secret** and **Tenent ID** to connect Yellow.ai with Microsoft. The following steps will take you through the process of obtaining them.

### Fetch Organization URL

The following steps will guide you through fetching Organization URL.

1. Create an account in [Microsoft Dynamic 365 Sales](https://dynamics.microsoft.com/en-gb/dynamics-365-free-trial/) and login.
2. Copy the part highlighted in the image below. This is your **Organization URL**.

   ![](https://i.imgur.com/cH9Gxdx.png)


### Fetch Client ID, Secret & Tenent ID

Obtain **Client ID**, **Client Secret** and **Tenant ID** from your **Microsoft Azure** App.

#### If you already have an app:

1. Log in to your [Azure portal](https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?redirect_uri=https%3A%2F%2Fportal.azure.com%2Fsignin%2Findex%2F&response_type=code%20id_token&scope=https%3A%2F%2Fmanagement.core.windows.net%2F%2Fuser_impersonation%20openid%20email%20profile&state=OpenIdConnect.AuthenticationProperties%3DtQVfqDvMB-GLv-r5OnQuupVWs6J8JIK4Rdk0xX6uS6-UAiSNPyAUmTdynCrfoVpnYb1NuoMUIUfGtQR4ysvsqR-M0ZPgkhwjg-LwgoQsSeFNWNWvmpRhcoopZCVoLC9kyFe8jGQuEi9CbDTUnL_pWVwR-IX9YDdh9pKHHV6dKY1f011zFHrTFm42MCwLhfhOILm2Ib-mjs4QfbmEauPHQOCiYms_YQUkT7A4eYYw9gj75ruN6KqF4pQUcf6UULALd8IWVaIAcF2a94_bGC7lOpvVNOGFhfDOinu1Pzu3esHDuIwvVMnDgXALOYz1Lw_vrpjIMcDEKnJ-iPk50MvicN9UEK_q4wdrfE71Buk_KR8ZDJoXlmHR7efd3meLfTF6CCYjbzeUabBCXrG5pbONhAsieUoXKIM8sox5NO7ZeMm7svBOtDvJSD59Op8aAD542ZKaobQaLkxK2n9Ro9WTWLvXdFusQcEg-nzLZo9dr_k8agnjXHNubbDVk0NQEHzd&response_mode=form_post&nonce=638362587856343176.MTk0ZWRlMGEtMDYzMi00NGVlLTg5YTgtMDg1M2Q1M2UwNTUyNjY4NzBmZTQtNmZkMS00MWY0LWJiYzItYWQ5YzgxYmE5ZDNl&client_id=c44b4083-3bb0-49c1-b47d-974e53cbdf3c&site_id=501430&client-request-id=d646f11a-4729-473d-9997-13972798cda2&x-client-SKU=ID_NET472&x-client-ver=6.30.1.0).
2. Go to **App Registeration**.

   ![](https://i.imgur.com/rm0mi6S.png)

3. Click on the app you'd like to connect your bot with. Ensure it is in **Current** status.

   ![](https://i.imgur.com/bciZKSU.png)

4. Copy the Client ID and Tenant ID as highlighted in the below image.

   ![](https://i.imgur.com/bAZWBQ0.png)

5. Go to **Certificates & Secrets** and copy the **Value**. If it is concealed, click **+ New client secret** to generate a new secret value. Copy and store it as that would be your **Client Secret**.

   ![](https://i.imgur.com/Lg0XKON.png)
   
6. Go to **App registrations** > **Overview** > **Redirect URIs**.

   ![](https://i.imgur.com/62aeICp.png)

7. Click **Add URI** and and copy/ paste the webhook from Yellow.ai.

   ![](https://i.imgur.com/Ei8B6CQ.png)

:::info

To retrieve the webhook:

1. Go to cloud.yellow.ai > **Integrations** > **Microsoft Dynamic 365** > Copy the URL.

   ![](https://i.imgur.com/Y1eeoUd.png)
:::


5. Click **Save**.

   
#### If you do not have an app

You need to create a new app and follow the steps mentioned above. To create a new app:

1. Log in to your [Azure portal](https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?redirect_uri=https%3A%2F%2Fportal.azure.com%2Fsignin%2Findex%2F&response_type=code%20id_token&scope=https%3A%2F%2Fmanagement.core.windows.net%2F%2Fuser_impersonation%20openid%20email%20profile&state=OpenIdConnect.AuthenticationProperties%3DtQVfqDvMB-GLv-r5OnQuupVWs6J8JIK4Rdk0xX6uS6-UAiSNPyAUmTdynCrfoVpnYb1NuoMUIUfGtQR4ysvsqR-M0ZPgkhwjg-LwgoQsSeFNWNWvmpRhcoopZCVoLC9kyFe8jGQuEi9CbDTUnL_pWVwR-IX9YDdh9pKHHV6dKY1f011zFHrTFm42MCwLhfhOILm2Ib-mjs4QfbmEauPHQOCiYms_YQUkT7A4eYYw9gj75ruN6KqF4pQUcf6UULALd8IWVaIAcF2a94_bGC7lOpvVNOGFhfDOinu1Pzu3esHDuIwvVMnDgXALOYz1Lw_vrpjIMcDEKnJ-iPk50MvicN9UEK_q4wdrfE71Buk_KR8ZDJoXlmHR7efd3meLfTF6CCYjbzeUabBCXrG5pbONhAsieUoXKIM8sox5NO7ZeMm7svBOtDvJSD59Op8aAD542ZKaobQaLkxK2n9Ro9WTWLvXdFusQcEg-nzLZo9dr_k8agnjXHNubbDVk0NQEHzd&response_mode=form_post&nonce=638362587856343176.MTk0ZWRlMGEtMDYzMi00NGVlLTg5YTgtMDg1M2Q1M2UwNTUyNjY4NzBmZTQtNmZkMS00MWY0LWJiYzItYWQ5YzgxYmE5ZDNl&client_id=c44b4083-3bb0-49c1-b47d-974e53cbdf3c&site_id=501430&client-request-id=d646f11a-4729-473d-9997-13972798cda2&x-client-SKU=ID_NET472&x-client-ver=6.30.1.0).

2. Go to **App Registeration**.

   ![](https://i.imgur.com/rm0mi6S.png)
   
3. Click **+ New Registeration**.

   ![](https://i.imgur.com/LnfdtnJ.png)

4. Fill the following fields:

   ![](https://i.imgur.com/tqPF1cI.png)

 * **Name**: Enter a name for your App.
 * **Supported account types**: Choose who all can use this app/access this API.
 * **Redirect URI**: Choose **Web** from the drop down and copy/ paste the webhook from Yellow.ai.

:::info

To copy the webhook:

1. Go to cloud.yellow.ai > **Integrations** > **Microsoft Dynamic 365** > Copy the URL.

   ![](https://i.imgur.com/Y1eeoUd.png)
:::


5. Click **Register**.


### Authorize Yellow.ai to access Microsoft

1. Go to cloud.yellow.ai > **Integrations** > **Microsoft Dynamic 365** and fill in the fields with data obtained in the previous sections.

   ![](https://i.imgur.com/zhaiafd.png)
   
:::info
1. In a two-tier environment, add account names in Development and use them in Live.
2. In a three-tier environment, add accounts in Staging and Sandbox, and they'll be available in Production.
:::

2. Click **Connect**.
3. You can add up to five merchant accounts. To add another Zoho CRM account, click on **Add account** and follow the steps mentioned above. 

   ![](https://i.imgur.com/XaeEnce.png)

## Use actions in bot conversations

To use MD 365 [supported actions](#supported-microsoft-d-365-crm-actions-with-yellowai) in bot conversations, follow these steps:

1. Go to **Studio** and [create a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow) based on your requirement. 
2. In whichever point you want the bot to access **Microsoft D 365 Sales**, inlcude the Microsoft D 365 Sales node. For that drag the node connector, go to **Integrations** > **Microsoft dynamics 365**.
   
   <img src="https://i.imgur.com/SX2CyRN.png" alt="drawing" width="80%"/>

3. In the **Microsoft dynamics 365** node, fill the following:

   <img src="https://i.imgur.com/my5eH4r.png" alt="drawing" width="80%"/>

* **Account name:** Choose the Microsoft account. If you have only one account, the account name is automatically populated. If you have multiple accounts, the first account added is auto-populated. Select the one you want to use at that moment.
* **Action:** Choose the [action](https://) to be performed.
* **Select Objects:** Choose the Microsoft entity in which the chosen action should be performed.
* Based on the chosen entity, collect user input for the relevant fields, [store the data in variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-data-in-variables), and pass these variables as an input to perform the desired action.


:::info

Some action may not require selection of entities, for example, **Create a Lead**.
:::

4. Each action returns a JSON response. [Store the response in an object variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#41-store-data-in-variables) and extract specific information from the payload. To display the response information to the user, [pass that variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#42-retrieve-data-from-variables) to a [message node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes).

   For example, if you receive the following response, you can use this syntax ``` {{{variables.variablename.companyname}}}  ``` to display only the company name.

```
{
  "@odata.context": "https://orgfd96595f.crm8.dynamics.com/api/data/v9.0/$metadata#leads(subject,companyname,firstname,lastname,emailaddress1,telephone1)/$entity",
  "@odata.etag": "W/\"2074593\"",
  "subject": "Test lead from postman",
  "companyname": "Contoso",
  "firstname": "bhaskar",
  "lastname": "k",
  "emailaddress1": "test6@gmail.com",
  "telephone1": "345345345",
  "leadid": "48669bf7-890c-ec11-b6e6-002248d4bce4"
}
```

