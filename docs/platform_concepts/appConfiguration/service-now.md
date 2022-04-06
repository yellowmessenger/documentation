---
title : Service Now
sidebar_label : Service Now
---

## Scope of Integration

Yellow.ai Integration with servicenow allows you to seamlessly connect your Servicenow instance with yellow.ai platform. Any customer who has a servicenow instance will be able to connect their instance with yellow.ai using OAuth. This connector will make sure you can do actions on Tickets(Incidents) and Requests. Using this integration you can create, update, close tickets, and requests.

## Use Cases

Following are the use-cases which are currently accommodated in the Integration:

### Simple integration with Oauth

Yellow.ai leverages OAuth 2.0 approach for integrating with client’s servicenow Instance.
While integrating, yellow.ai navigates the user to the login page of ServiceNow, user has to login into his serviceNow instance and has to provide his consent.

### Do actions with servicenow action nodes

Using the action nodes you can create,update and close incidents and requests in your instance.

<img src="https://cdn.yellowmessenger.com/C9eECBimnDr71649092561946.png" alt="drawing" width="60%"/>
<img src="https://cdn.yellowmessenger.com/2FK5MukCAhnM1649223376928.png" alt="drawing" width="60%"/>

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

## Reference

For more information about action nodes you use here, refer this [doc](https://docs.servicenow.com/bundle/rome-application-development/page/integrate/inbound-rest/concept/c_TableAPI.html)