---
title : Facebook Workplace
sidebar_label : Facebook Workplace
---

On Workplace, bots are represented as pages. A page is automatically created when you create a custom integration app. Only System Administrators of a Workplace community can create apps and generate access tokens in that community.

## Overall Workflow
1. Each YM Bot is considered as a custom integration for the workplace (page). 
2. The workplace custom integration interacts with the YM Bot through webhooks which can be configured from within the workplace settings.
3. The YM Bot consumes workplace APIs to send messages across. 

## Creating Custom Integrations
You will be needing a Super Administrator role.
To create an app for Workplace, follow the steps below:

1. In the Admin Panel, open the Integrations tab.
2. Click on the Create Custom Integration button.

![](https://cdn.yellowmessenger.com/SfBlkFwlUjXn1612757417910.png)

3. Choose a relevant name and description for the app.
4. Add a profile picture for the app. This will be used any time the app is visually represented, for instance if it makes a post to a group.
5. Choose the required permissions for the app, based on the integration functionality you require.
6. **Create Access Token** once you are landed to the Integration details page

![](https://cdn.yellowmessenger.com/3JEzEJQmYnte1612757515594.png)

7. Copy and safely store the access token that is shown to you. You will need this when making API calls and configuring in the YM Portal.

## General List of permissions required
**Message any member** - *This permission is used to send a message to any member in the workplace team.*
**Real all messages** - *See messages sent to anyone in the workplace team.*

## Configuring workplace as a channel in the Portal
1. In the portal, go to Configuration and then select Channels.
2. Now select Facebook workplace form the list of channels, there paste the App ID from the workplace integration page, and the access token which was generated earlier, and click on connect.

![](https://cdn.yellowmessenger.com/W14rzpSfqCPY1612757606237.png)

3. Now, post successful connection, copy the Webhook configuration, both callback URL and the verify token and paste under the “Page” tab of the “Configure Webhooks” section in the workplace integrations page. 

![](https://cdn.yellowmessenger.com/v014KVvMnf9h1612757653829.png)

Making sure that all the checkboxes are selected under the Page tab, click on save.
Now the created workplace integration is successfully configured with the YM Bot as a channel, and all the messages can be exchanged between.

### Documentations References
Permission Reference : [Permission Documents](https://developers.facebook.com/docs/workplace/reference/permissions)
For official documentation : [read more](https://developers.facebook.com/docs/workplace/integrations/custom-integrations/bots/)
