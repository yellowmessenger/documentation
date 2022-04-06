---
title : Microsoft Dynamics 365
sidebar_label : Microsoft Dynamics 365
---

## Scope of Integration

Yellow.ai Integration with Microsoft Dynamics 365 allows you to seamlessly connect your Dynamics 365 organisation with the yellow.ai platform. Any customer who has a dynamics account will be able to connect with yellow.ai using OAuth. This connector will make sure you can do actions on your leads. Using this integration you can create, update, read, delete the leads.

## Use-cases

Following are the use-cases which are currently accommodated in the Integration:

### Simple integration with Oauth

Yellow.ai leverages OAuth 2.0 approach for integrating with the client's dynamics 365 account.

While integrating, the user has to provide some client credentials and then yellow.ai navigates the user to the login page of microsoft, the user has to login and provide his consent.

### Do actions with Microsoft Dynaomics action nodes

You can store a new Lead and save it in your dynamics 365 account. You can also update, read, delete the lead too with the leadId.

<img src="https://cdn.yellowmessenger.com/XzXHeQEHSnUp1649095288332.png" alt="drawing" width="60%"/>

<img src="https://cdn.yellowmessenger.com/AuiKUKB9cvZL1649223437204.png" alt="drawing" width="60%"/>

## Configuration

Configuring the integration of Microsoft Dynamics 365 is straightforward. Follow the steps defined below
to start integrating:

### Navigate to integration tab

Inside your project, navigate to the Integrations tab and then on the left side bar, select CRM. You will find Microsoft Dynamics 365.

<img src="https://cdn.yellowmessenger.com/BIOuqSZuFCfl1649095846294.png" alt="drawing" width="60%"/>

### Connect your Microsoft Dynamics 365 account

Please follow the instructions in integration page to get the client Id, client secret and tenant Id, then you have to provide your complete organisation url (ex: https://orgfd96595f.crm8.dynamics.com) and then you have to click on connect with Microsoft Dynamics 365. After you click that, you will notice that you will be prompted to login into your Micro account.

Following the above steps will connect your dynamics 365 account with yellow.ai platform.

![](https://cdn.yellowmessenger.com/gNwq8y3gIaj41649222821326.gif)

## Reference

For more information about action nodes you use here, refer this [doc](https://docs.microsoft.com/en-us/powerapps/developer/data-platform/webapi/create-entity-web-api)

