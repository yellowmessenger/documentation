---
title : Google Calendar
sidebar_label : Google Calendar
---

## Scope of Integration

Yellow.ai Integration with Google Calendar enables you to seamlessly access google calendar services. Any customer who has a google account will be able to connect with yellow.ai using OAuth. Using this integration you can create, read events and also you can search for the busy time slots of the person and this can help you to create events according to it.

## Configuration

Configuring the integration with Google calendar is straightforward. Follow the steps defined below to start integrating:

### Navigate to integrations tab
Inside your project, navigate to the integrations tab and then from the left side bar select Tools & Utilities, You will find Google Calendar.

<img src="https://cdn.yellowmessenger.com/M02XhZS2AFTl1649089328587.png" alt="drawing" width="60%"/>


### Connect your google account
Click on **Sign in with Google**. After you click that, you will notice that you will be prompted to login to your google account, once you provide your login credentials, you have to click on **Allow** in the consent screen.

![](https://cdn.yellowmessenger.com/WBu6CUgNfcbE1649089756563.gif)

Following the above steps will connect your Google calendar with yellow.ai platform.

If you have multiple accounts, follow the above mentioned steps to add each of them.

:::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 5 merchant accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::

## Use-cases

Following are the use-cases which are currently accommodated in the Integration:

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::

### Simple integration with Oauth

Google calendar integration with yellow.ai happens through the Oauth 2.0 approach.
While integrating, yellow.ai navigates the user to the login page of Google, user has to login into his google account and has to provide his consent to access his calendar data.

### Do actions with google calendar action nodes

You can create a new calendar event by specifying the timings, event title, description etc.. You can check the time slots of the person where you get busy time slots of the person and can create the event accordingly.

You can also read the calendar event with the event id to get the updates of that event.

<img src="https://cdn.yellowmessenger.com/veE7Ulzsxzjw1649088649948.png" alt="drawing" width="60%"/>

<img src="https://cdn.yellowmessenger.com/yy0eWx9HVl8u1649089127778.png" alt="drawing" width="60%"/>


For more information about action nodes you use here, refer this [doc](https://developers.google.com/calendar/api/v3/reference/events/)

