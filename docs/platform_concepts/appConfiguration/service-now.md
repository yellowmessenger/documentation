---
title : Service Now
sidebar_label : Service Now
---

## Scope of Integration

Yellow.ai Integration with servicenow allows you to seamlessly connect your Servicenow instance with yellow.ai platform. Any customer who has a servicenow instance will be able to connect their instance with yellow.ai using OAuth. This connector will make sure you can do actions on Tickets(Incidents) and Requests. Using this integration you can create, update, close tickets, and requests.

## Configuration

Configuring the integration with servicenow is straightforward. Follow the steps defined below
to start integrating :

### Create an application

Before going to oauth you have to create an application in your servicenow instance, the instructions are provided in the integration page. Follow them and fill out the details asked there which you got from the application.

### Navigate to integrations tab

Inside your project, navigate to the Integrations tab and from the left sidebar select **ITSM**. You will find serviceNow.

<img src="https://cdn.yellowmessenger.com/RXvuoVKWrsYq1649092705906.png" alt="drawing" width="80%"/>

### Connect your servicenow account

Click **Connect with service now**. After you click that, you will notice that you will be prompted to login to your servicenow instance.

Following the above steps will connect your servicenow instance with the yellow.ai platform.

![](https://cdn.yellowmessenger.com/Hftbvxr2VfqP1649147830014.gif)

If you have multiple accounts, follow the above mentioned steps to add each of them.

:::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 5 merchant accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::

## Use Cases

Following are the use-cases which are currently accommodated in the Integration:

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::

### Simple integration with Oauth

Yellow.ai leverages OAuth 2.0 approach for integrating with client’s servicenow Instance.
While integrating, yellow.ai navigates the user to the login page of ServiceNow, user has to login into his serviceNow instance and has to provide his consent.

### Do actions with servicenow action nodes

Using the action nodes you can create,update and close incidents and requests in your instance.

<img src="https://cdn.yellowmessenger.com/C9eECBimnDr71649092561946.png" alt="drawing" width="60%"/>
<img src="https://cdn.yellowmessenger.com/2FK5MukCAhnM1649223376928.png" alt="drawing" width="60%"/>


## Reference

For more information about action nodes you use here, refer this [doc](https://docs.servicenow.com/bundle/rome-application-development/page/integrate/inbound-rest/concept/c_TableAPI.html)