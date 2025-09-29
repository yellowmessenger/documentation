---
title : Creatio integration
sidebar_label : Creatio
---

Creatio CRM integration allows you to manage your Creatio account directly from the Yellow.ai platform.  This integration allows you to get, create, and update user contacts from your Creatio account.

### Supported Creatio CRM actions in Yellow.ai

With this integration, you can perform the following Creatio CRM actions directly from the AI agent interface.

Action | Description
-------|-------------
Create a contact | Creates a new contact
Get a contact	| Fetches a particular contact
Update a contact | Modifies details of a particular contact

### Get details from Creatio CRM account

Generate the required details - **Instance URL**, **Client ID**, **Client Secret**, and **API Base URL** -from your Creatio CRM account by following the steps below to integrate with Yellow.ai.

1. Log in to your Creatio account using your base URL.
Sample format: `https://{baseURL}.creatio.com`. Your login link may vary depending on the base URL assigned to your Creatio account.

2. Enter your **Username** and **Password**, then click **Login**.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/login-page.png)
   
3. Go to **System settings** > A**uthorization server URL for OAuth 2.0 integrations** > copy the **Default value**, which will be your **Instance URL**. For details, refer to the [Creatio setup guide](https://academy.creatio.com/docs/8.x/setup-and-administration/on-site-deployment/deployment-additional-setup/identity-service/set-up-the-identity-service-instruction).


   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/url-creatio.png)
   
4. From the Creatio home page, go to **Settings**.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/settings-creatio.png)  

5. Under **Import and integration**, select **OAuth 2.0 integrated applications**.

    <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/import-integration.png" alt="drawing" width="50%"/>
    
6. Cick **+ New** to create a new application.

     ![](https://cdn.yellowmessenger.com/assets/yellow-docs/new-app.png)
     
7. Enter the following details:
   * **Name**: Provide a name for the application.
   * **Application URL**: Enter your application URL (example, https://creatio.com/). Note that, this field is optional.
   * **Decription**: Enter a description relevant to the use case.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/new-record.png" alt="drawing" width="60%"/>
   
8. Click **Save**.

9. Open the application that you have created and copy the **Client Id** and **Client secret**.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/creatio-secret.png" alt="drawing" width="60%"/>
   
10. From the Creatio application home page, copy the **Creatio API Base URL**.
 ![](https://cdn.yellowmessenger.com/assets/yellow-docs/copy-url.png)
    
### Connect Creatio CRM with Yellow.ai

You need to add accounts only in the development or staging environment. You can access the connected accounts in the Live/Production environment.

To connect your Creatio CRM account with Yellow.ai, follow the these steps:


1. On the left navigation bar, go to **Extensions** > **Integrations** > **CRM** > **Creatio**. Alternatively, you can use the Search box to find the integration app.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/creatio.png)

    2. Under **Give account name**, provide a unique identifier. Only lowercase alphanumeric characters and underscores (`_`) are allowed.

3. In **Creatio API Base URL**, paste the URL that you have copied in step 10 of [Get configuration details from Creatio CRM account](#).

4. In **Instance URL**, paste the URL that you have copied from step 3 of [Get configuration details from Creatio CRM account](#).
   
   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/creatio-details.png)
   
5. In **Client ID** and **Client Secret**, paste the values that you have copied in the step of [Get configuration details from Creatio CRM account](#).

6. You can add up to 15 accounts. To add another Creatio CRM account, click on **Add account** and follow the steps mentioned above. 

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/addd-coount.png)
   
## Manage Creatio action in AI agent conversation

You can perform these Creatio actions directly from AI agent conversations
* [Create contact in your Creatio account](#create-user-details)
* [Fetch contact from your Creatio account](#get-user-details)
* [Update a contact ](#update-user-details)

### Create user details 

To create a contact in your Creatio account, follow these steps:

1. Go to **Automation** and [create a flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#2-create-a-flow) based on your requirement.
 
2. At the point in the flow where you want the AI agnet to interact with Creatio CRM, add the Creatio CRM node. For that, drag the node connector, go to **Integrations** > **Creatio**.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/integrations-creatio.png" alt="drawing" width="30%"/>

3. Click the node to view the drop-down with supported actions. Select **createEntity**.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/create-entity.png)
    
4. Select the table you want to create. Based on your selection, all fields related to that table will be displayed.

5. Provide the details for all the required field.

**Sample response**

```c
{
  "@odata.context": "mkpdev-2178.creatio.com/0/odata/$metadata#Contact/$entity",
  "Id": "0e7fec10-40cc-42ac-b408-ad6269320b04",
  "Name": "manish",
  "OwnerId": "410006e1-ca4e-4502-a9ec-e54d922d2c00",
  "CreatedOn": "2025-09-16T08:57:17.2377089Z",
  "CreatedById": "410006e1-ca4e-4502-a9ec-e54d922d2c00",
  "ModifiedOn": "2025-09-16T08:57:17.2377089Z",
  "ModifiedById": "410006e1-ca4e-4502-a9ec-e54d922d2c00",
  "ProcessListeners": 0,
  "Dear": "manish",
  "SalutationTypeId": "00000000-0000-0000-0000-000000000000",
  "GenderId": "00000000-0000-0000-0000-000000000000",
  "AccountId": "00000000-0000-0000-0000-000000000000",
  "DecisionRoleId": "00000000-0000-0000-0000-000000000000",
  "TypeId": "00000000-0000-0000-0000-000000000000",
  "JobId": "00000000-0000-0000-0000-000000000000",
  "JobTitle": "test job",
  "DepartmentId": "00000000-0000-0000-0000-000000000000",
  "BirthDate": "0001-01-01T00:00:00Z",
  "Phone": "8816988208",
  "MobilePhone": "8816988208",
  "HomePhone": "8819223456",
  "Skype": "testskype",
  "Email": "manish@gmail.com",
  "AddressTypeId": "00000000-0000-0000-0000-000000000000",
  "Address": "haryana",
  "CityId": "00000000-0000-0000-0000-000000000000",
  "RegionId": "00000000-0000-0000-0000-000000000000",
  "Zip": "127306",
  "CountryId": "00000000-0000-0000-0000-000000000000",
  "DoNotUseEmail": false,
  "DoNotUseCall": false,
  "DoNotUseFax": false,
  "DoNotUseSms": false,
  "DoNotUseMail": false,
  "Notes": "notes test",
  "Facebook": "manish sangwan",
  "LinkedIn": "manishjum219",
  "Twitter": "manishtwirte",
  "FacebookId": "mansiFace",
  "LinkedInId": "manishkumar219",
  "TwitterId": "manis@twirtw",
  "TwitterAFDAId": "00000000-0000-0000-0000-000000000000",
  "FacebookAFDAId": "00000000-0000-0000-0000-000000000000",
  "LinkedInAFDAId": "00000000-0000-0000-0000-000000000000",
  "PhotoId": "00000000-0000-0000-0000-000000000000",
  "GPSN": "dsfdsfsd",
  "GPSE": "dfdsfdf",
  "Surname": "sangwan",
  "GivenName": "Test account ",
  "MiddleName": "sang",
  "Confirmed": true,
  "Completeness": 0,
  "LanguageId": "6ebc31fa-ee6c-48e9-81bf-8003ac03b019",
  "Age": 0,
  "IsEmailConfirmed": false,
  "AdCampaignId": "00000000-0000-0000-0000-000000000000",
  "CustomerNeedId": "00000000-0000-0000-0000-000000000000",
  "ChannelId": "00000000-0000-0000-0000-000000000000",
  "SourceId": "00000000-0000-0000-0000-000000000000",
  "RegisterMethodId": "00000000-0000-0000-0000-000000000000",
  "LeadConversionScore": 0,
  "IsNonActualEmail": false,
  "ContactPhoto@odata.mediaEditLink": "Contact(0e7fec10-40cc-42ac-b408-ad6269320b04)/ContactPhoto",
  "ContactPhoto@odata.mediaReadLink": "Contact(0e7fec10-40cc-42ac-b408-ad6269320b04)/ContactPhoto",
  "ContactPhoto@odata.mediaContentType": "application/octet-stream"
}
```

Below is a sample screenshot of how the response is generated when a new entity (contact) is created in your Creatio account:

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/create-entity1.png)
    

### Get user details

1. Select **getEntity** action.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/get_entity.png)

2. Select the table from which you want to get the user details.

* Once the table is selected, the fields will automatically display all the entities of that table in a dropdown. You can then directly select the entity for which you want to fetch the details.

3. Store response of the user in the variable of type object.

**Sample resposne**

```clike=
{
  "@odata.context": "mkpdev-2178.creatio.com/0/odata/$metadata#Contact/$entity",
  "Id": "be5b2bf3-f859-4e0a-9644-e41a59774068",
  "Name": "Dwij jindal",
  "OwnerId": "410006e1-ca4e-4502-a9ec-e54d922d2c00",
  "CreatedOn": "2025-07-10T06:47:09.198782Z",
  "CreatedById": "410006e1-ca4e-4502-a9ec-e54d922d2c00",
  "ModifiedOn": "2025-07-10T06:47:09.198782Z",
  "ModifiedById": "410006e1-ca4e-4502-a9ec-e54d922d2c00",
  "ProcessListeners": 0,
  "Dear": "",
  "SalutationTypeId": "00000000-0000-0000-0000-000000000000",
  "GenderId": "00000000-0000-0000-0000-000000000000",
  "AccountId": "00000000-0000-0000-0000-000000000000",
  "DecisionRoleId": "00000000-0000-0000-0000-000000000000",
  "TypeId": "00000000-0000-0000-0000-000000000000",
  "JobId": "00000000-0000-0000-0000-000000000000",
  "JobTitle": "",
  "DepartmentId": "00000000-0000-0000-0000-000000000000",
  "BirthDate": "0001-01-01T00:00:00Z",
  "Phone": "",
  "MobilePhone": "+919876546497",
  "HomePhone": "",
  "Skype": "",
  "Email": "Dwij@example.com",
  "AddressTypeId": "00000000-0000-0000-0000-000000000000",
  "Address": "",
  "CityId": "00000000-0000-0000-0000-000000000000",
  "RegionId": "00000000-0000-0000-0000-000000000000",
  "Zip": "",
  "CountryId": "00000000-0000-0000-0000-000000000000",
  "DoNotUseEmail": false,
  "DoNotUseCall": false,
  "DoNotUseFax": false,
  "DoNotUseSms": false,
  "DoNotUseMail": false,
  "Notes": "",
  "Facebook": "",
  "LinkedIn": "",
  "Twitter": "",
  "FacebookId": "",
  "LinkedInId": "",
  "TwitterId": "",
  "TwitterAFDAId": "00000000-0000-0000-0000-000000000000",
  "FacebookAFDAId": "00000000-0000-0000-0000-000000000000",
  "LinkedInAFDAId": "00000000-0000-0000-0000-000000000000",
  "PhotoId": "00000000-0000-0000-0000-000000000000",
  "GPSN": "",
  "GPSE": "",
  "Surname": "jindal",
  "GivenName": "Dwij",
  "MiddleName": "",
  "Confirmed": true,
  "Completeness": 0,
  "LanguageId": "6ebc31fa-ee6c-48e9-81bf-8003ac03b019",
  "Age": 0,
  "IsEmailConfirmed": false,
  "AdCampaignId": "00000000-0000-0000-0000-000000000000",
  "CustomerNeedId": "00000000-0000-0000-0000-000000000000",
  "ChannelId": "00000000-0000-0000-0000-000000000000",
  "SourceId": "00000000-0000-0000-0000-000000000000",
  "RegisterMethodId": "00000000-0000-0000-0000-000000000000",
  "LeadConversionScore": 0,
  "IsNonActualEmail": false,
  "ContactPhoto@odata.mediaEditLink": "Contact(be5b2bf3-f859-4e0a-9644-e41a59774068)/ContactPhoto",
  "ContactPhoto@odata.mediaReadLink": "Contact(be5b2bf3-f859-4e0a-9644-e41a59774068)/ContactPhoto",
  "ContactPhoto@odata.mediaContentType": "application/octet-stream"
}
```

Below is a sample screenshot of how the user details is fetched from your Creatio account:

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/get_entity.png)
   
### Update user details   


1. Select **updateEntity** action.

    <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/update-entity.png" alt="drawing" width="60%"/>

2. Select the table from which you want to update the user details.

* Once the table is selected, the Select Object field will automatically display all the entities of that table in a dropdown. You can then directly select the entity for which you want to update the details.

3. Select the respective field for which you want to update the data. For example, user email.

**Sample response**

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/sample-update.png)

Below is a sample screenshot of how the user details is updated:

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/update-details.png" alt="drawing" width="60%"/>

