---
title: Microsoft Teams
sidebar_label: Microsoft Teams
---

## What is Microsoft Teams

Microsoft Teams is a communication and collaboration platform that combines workplace chat, video meetings, file storage, and application integration.

This integration will let you connect your yellow messenger bot with Microsoft Team Channel. Using Azure bot service you can create bot and connect with different channels including MS Team. The message that users send can be received at YM configured endpoint and YM bot would be able to reply to the conversation on both Personal chat or channels on MS Team.

How does an MS Teams app integrate with YM?
![](https://lh4.googleusercontent.com/TysvA6st4vsK9LOkPrVJTzon6rjovsUoX3oOulcvG_6H77Tm0tUNmOpR4E286GMnSW-vhOzUba_QvGUiYuhWJh6QVahH57ncdNYG8oMHtrpSZSsi2AOENSQ4LsphXnMwab1VH3vN)

## Getting Started
### Creating a new Teams App

For Integrating Yellow Messenger MS Team channel, you will need to create a new azure app and azure bot service for which you will receive Client ID, Client Secret.

Steps to create a bot service :

**Step 1**: Goto https://portal.azure.com/ then Search for Bot Services and click on Add Button.

![Azure Home > Bot Services](https://lh4.googleusercontent.com/EgvnrCsp6MrsjSkSnig0J4xlMHx85HTDE4Zv8xOrYEyTbEqlSw3OFhPnnCW143DDUNgV1c73lTgONTftL6j2ujl5X3QkMlSWx7T4dLBGkdeob7mpaLBy1r3p7Kccpk6R64PyViCF)


**Step 2**: Select the Bot Channel Registration and Click on the Create button.

![Bot Services > Create](https://lh5.googleusercontent.com/fo6oL845viHLoJhkbcUk5bqJ9Q9fRdKSFP9uqyC4jWJS9Ibsx4sQtak-iC1HsjvUvkfZ7vYeZJaQtgcbDhXN6Q2JqmE_AZZNAD_PqB8YRfcmBSuHzfVEh5onZTJwa0ilvCjv2irb)


**Step 3**: Fill the form according to the below image.


> Bot Handle: Set a unique bot identifier
> Subscription: Create new if haven’t created earlier.
> Resource Group: Create new if haven’t created earlier.
> Messaging endpoint: https://app.yellowmessenger.com/integrations/botframework/[botID]
> Microsoft App ID and Password: Auto create.


![](https://lh3.googleusercontent.com/BsFNhWA5qczUz_HJ-AO-WofnN7EenFWkDyxMMfWOq7Oaojz3dxANHIzG7T5reRm3F62n0fK21XqQHXe38HIFHj0JobIrRcOdw3pUG0d1mL66yiVZB_1Y2z6I9O-gni8ehd-qP4NX)


**Step 4**: After successfully deployment of Bot Service, Go to Azure Home > App Registrations and select your created App.

![](https://lh4.googleusercontent.com/JjYfm2YAL5dLzGu07o8h6qaYN6iiFNh6vSF0kXHdkcHexaRkhBdEBDv2E2DdA-FeVP7fsEBOEoYAv0jM7DAyqfxHenL2hnusGTeduO08tKXd-LZj4D5swqPz-EJOJwqvjbKA-B8X)


Save the Application/Client ID and tenant ID for future use and go to Certificates & Secrets

![](https://lh6.googleusercontent.com/TG1sKk4JqfF-GB_PP5cjIiC9q9AGTRE5ml06XPtLPC_r3aPwrYkM-gcoRGLl7ZUCN2_P5AD_YRcduzYnKnfbE2B4QLKtZ13f22tFjmBktPWPd9pS9CPoA2NXjKbFyd1AIbRplOr6)



**Step 5**: Click on the New client secret > Fill the description & select expires to Never, After clicking on Add button a Client Secret will be generated, save the value of the Client Secret for future use.

![](https://lh4.googleusercontent.com/9dbq3EdLvcCRSdbnml_Dbd3_mhmBCvG10VC85FSpvmGaPds3B9X8CaiTPdCnxV2S0itOcf-J-2Z1Hi2QcNbzugxiY-jtxT4F4dNJPs2r2nca6AewQZMk-vpXXVDYNRzGAWrJJ0IQ)


**Adding Redirect URL**
Goto Authentication > Add a platform > Web > Add the redirect url > Save
Redirect-Url: https://app.yellowmessenger.com/integrations/azureauth/


**Add / Remove permission and Grant Admin consent for the App**
Goto API Permissions > Add the required permissions


**Step 6**: Now go back to Bot Services and select your Bot service from the list and click on the Channels option.

![](https://lh6.googleusercontent.com/KyiXHuok0hwEyaSbaoIWhBzog9IsfC6a0GNLqARUrOQUK5Gyn6OvB4r3bUWhZRHjudK7r9bzxUZWybxAhKDwGbwvi4znTZBR4wEqzBbbpdQByUU5l1uIhsGqVR60zrtQZCAwslg9)



![](https://lh5.googleusercontent.com/3gQiHcaPS6cIcR-Ze4GMAo6Of2qcXaE5rUCpdNQLxHjg-sMo5e10xoGBY03kiPtdgtR4ALvxEniyl6FuDnHYR_VZ5q7LXRraVgkTBZNJCMLsUV7dxe6lCWJvMnBzmfN2bUxvdztK)

Add the MS Team channel using Add a featured channel, then click on the Microsoft Teams (with Running health) and open it using Web or Window App.

You will find your bot added in the MS Team chat and can start interacting after the next step.

![](https://paper-attachments.dropbox.com/s_8951A943FC1CC19315A9C55D5C64E03C1256EF2C3ACB23CCBF66E8C16FF2F40E_1600235662156_image.png)

## Connect your Teams app with YM bot

Go to yellow messenger MS Team channel and fill those Client ID and Client Secret, now you are ready to use MS team with Yellow Messenger bot. Test by sending a message using app.sendTextMessage() .


![](https://lh3.googleusercontent.com/2jujF7XExhGEP22XK_5yJxjK9GWgh71Bg_VCzE1sznz3mTid006WnHFSzJGucZTr6_-5eP_FVBmgvm_KWyBDSr1vCyVYGSsmOPxRZ155fwPS46bLBsublaOaWlDF_GKlgJTz2c3-)


## Create your app manifest using your Azure bot service with Teams App Studio

Add App Studio from App Store which allows you to create bot manifest, Command Suggestions, Message Extensions, publishing your app etc.


![Install App Studio to your MS Team](https://lh5.googleusercontent.com/gAC2XCk1xtteOmvCJFcz51ZvqC5ri6LTaI7ydhgb2JSsZaTpFR7iiVkuKePfb9P_nh567Bxylb6x_0FFrup2AyI9aEfGDmuUkhAoRVkZveDkapoR60NwxfitYAOIp9voHJKk-c1x)



>For creating a new App in App Studio:
>Click on the Create a new App and fill the app details, enter client ID in App ID field.
>Connect your app studio bot with azure bot services by configuring Client ID in the Bots Section, For Testing: Install bot using Test & Distribute Section.


## Authentication : Active Directory & Graph APIs

App Registration on Azure AD: Click [here](https://yellowmessenger.atlassian.net/wiki/spaces/docs/pages/432799757/Active+Directory+LDAP).
Connecting YM bot to MS Teams : Please follow Section 'Getting Started' from above for Team Integration.

How to set dynamic scopes in Login url:
```js
    let consent = "&prompt=consent"
    let scopeMp = "People.Read User.ReadBasic.All Presence.Read"

    {
       "type": "Action.OpenUrl",
       "title": "Login",
       "url": app.azure.auth() + encodeURIComponent(scopeMp) + consent                    
    }
```

**Add / Remove permission and Grant Admin consent for the App**,
Goto Azure Portal > App Registration > API Permissions

![](https://lh6.googleusercontent.com/z37T-8_2hO-v88FOY15bYZs3ZhNy7HK2hX3mR_uKF6Qh1L77cnBuHBc2IPXZX_Qm-glHTF5mBPkQnWNVa2eo3t6MmkDGhQWrpg-jDZdVWr3So_JH7QKeS9milnNcDW7YWTDj1dhP)


For enabling multi tenant: Enable multi tenant in the Azure AD integration in Yellow messenger and enable multi tenant on the App registration > Authentication

**Graph APIs**:
Documentation: https://docs.microsoft.com/en-US/graph/api/overview?view=graph-rest-1.0

Explorer: https://developer.microsoft.com/en-us/graph/graph-explorer

> Note: For APIs that require Admin consent, Admin can consent for their organisation via Azure Portal or at the time of Login itself.


## Adaptive cards in MS Teams

Adaptive Cards are an open card exchange format enabling developers to exchange UI content in a common and consistent way.

Designer: https://adaptivecards.io/designer/

Documentation: https://docs.microsoft.com/en-us/adaptive-cards/

Designer functionality: https://adaptivecards.io/explorer/AdaptiveCard.html

**Sending Adaptive Card using yellow messenger**:

```js
    let CARD_PAYLOAD_FROM_DESIGNER = {
        "type": "AdaptiveCard",
        "body": [
            {
                "type": "TextBlock",
                "text": "sOME TEXT"
            }
        ],
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "version": "1.0"
    }

    let card = {
           "contentType": "application/vnd.microsoft.card.adaptive",
           "content": CARD_PAYLOAD_FROM_DESIGNER
    }
    app.sendAdaptiveCard(card).then(() => {
           resolve();
    })



    Sending a Carousel Card:
    let card = {
           "type": "adaptive",
           "content": CARD_PAYLOAD_FROM_DESIGNER
    }

    let cardCarousel = [card,card,card]   //array of cards
    app.sendCards(cardCarousel).then(() => {
           resolve();
    })
```

**Receiving Form Submission data from Adaptive Card in YM bot**:

![Adaptive Card Example](https://lh4.googleusercontent.com/f8H8NE_VxqDlEh1GllZh5HsIENtuRbYqA3RC-GsHcUmKOPzuqs15PhjEcijTZuYXvlqQMrWVZBvQ9tuDS_k_oJY0dba49zM3EILtHi9sEgoKx8vFSPoAcZS_IQPI4FEX4PcBj7ml)

```js
    //Received app.data
    app.log(app.data);

    ---In Log---
    {
     "message":"form-data",
      "value":{
          "action":"saveName",
          "namearea":"Adam"
      }
    }

```

## Advanced features


**Command Suggestions**


![](https://lh6.googleusercontent.com/Fx5GPrPTOVWuZEA81h-fOB2QY8ro3P4mSbSCFmZTTMESktQGtMNLbsUF683UyUUEHwAmEtOTAM5TIPQ0-0XgadZv-PyMQHfi05zOeLO92YmOMkj9X6VGWdqYRXTizjK_1gygmZ8q)


**Step 1**: Goto App Studio > Select your App > Bots > Setup your bot using Client ID and click on the Add button in the Commands section to add suggestion commands.


![](https://lh6.googleusercontent.com/Rcla8_oDt5BLFaAA8dV_Q6uwNWZP12yW_6vypZ3dHNxtOHGVaGfWnhdhU6fkJ65XlRN104Tf_5K6LSiuhdoCx_LpzoGnUsI7PcUSGw8t2MVlt7eD3bxHYbddFV6_7VPpV_SJuAz-)


**Step 2**: Fill the new command fields > Click on Save. You would find Bot suggesting you the commands after reinstalling the app.


![](https://lh3.googleusercontent.com/r3j_W2Y7J4XcGnsnKEqPIsQp3_ryIJ8lCcEC8z6O2zi_UTOAWTK2mM0UWoWWrbenTRRKg-9iS_j4wLDCdJexW2nSx-05sRE4QyqzqjsQV9alcz1lNj6lW12wbzf0FWxAzZbGw5jT)


**Message Extensions**

Messaging extensions allow users to interact with your web service through buttons and forms in the Microsoft Teams client. They can search, or initiate actions, in an external system from the compose message area, the command box, or directly from a message

Documentation: https://docs.microsoft.com/en-us/microsoftteams/platform/messaging-extensions/what-are-messaging-extensions


Steps to integrate ME with Yellow Messenger:

**Step 1**: Goto App Studio > Select your App > Messaging extensions > Set up

![](https://lh4.googleusercontent.com/gQFKtWaYejsyGaE5wqDwmxs188vsZsud4TJBRUob7v9najqluRBTQMlEjCvFlbH6wOfDC9BXcLj74AcmcDPeiFU6jXeM62YPfrOBbVIeKB4eC3UtPjpodNGkK1p0uGAVjTjJIv0R)


**Step 2**: Configure your bot and change messaging endpoint to: https://app.yellowmessenger.com/integrations/sync/microsoft/extensions/[botID]

![](https://lh4.googleusercontent.com/nsD_snWZRoTvoYJwLvQJom89AM3AS4dsqFNm9vI3HsTXEPu9Qs7nIvH9PqXF5dLGK_ie6SJWcW4AoS79rToiTGk7FmXSaKnxi9e-X5dVC2mOyTUTjvQDHgML0Dv5aX69XHiGxfIV)


**Step 3**: Click on Add Button and choose method according to the requirement then fill out the details and parameters for your message extensions.

Action Type: Allows you to open a pop up and take multiple field values.  (e.g: Add Task)
Query Type: Allows you to run a query in the search field itself. (e.g: Wikipedia Search)

![](https://lh3.googleusercontent.com/_KsG4Vgw53hdWjE9Hf1y82w6A2THRZA8G4PlXHajX8i5NWQsW1q2un8PDYGpwUNy3ytJoeY4OiNoDZavHjToxNRXmnPmUw-PeobGKTexMlxCjssqhslvnPUadGhpHC0eyzjOUNrM)

Receiving responses in yellow messenger:
```js
Query Type:

    app.log(app.data)
    //In logs----------
       {
           "commandType": "composeExtension/query",
           "value": {
               "commandID" : "findwikipedia",
               "parameters" : [
                   {
                       "name": "searchquery",
                       "value":"Bumblebee"
                   }
               ]
           }
       }
```
 >Note:
 >  For initial run or empty query
 >    , app.data.value.parameters[0].name = "initialRun"



Action Type Submission:

```js
    app.log(app.data)
    //In logs----------
       {
           "commandType": "composeExtension/submitAction",
           "value": {
               "commandID" : "addtask",
               "data" : {
                   "taskname": "Some Task",
                   "taskduedate":"2020-09-10"
               }
           }
       }

```

Responding to the Message Extensions:
```js
    let messageExt = {
       "composeExtension": {
           "type": "result",
           "attachmentLayout": "list",
           "attachments": [
               {
                   "contentType": "application/vnd.microsoft.card.adaptive",
                   "content": {
                       "type": "AdaptiveCard",
                       "body": [
                           {
                               "type": "Container",
                               "items": [
                                   {
                                       "type": "TextBlock",
                                       "text": "Some Details",
                                   }
                               ]
                           }
                       ],
                       "version": "1.0"
                   },
                 "preview": {
                    "contentType": "application/vnd.microsoft.card.thumbnail",
                    "content": {
                           "title": "Preview Title",
                           "text": "Preview Text"
                       }
                   }
               }
           ]
       }
    }
    //Send reply directly to message extensions
    app.sendAdaptiveCard(messageExt);
    //Note: For multiple responses use attachments as an Array.
```

To run Message extension from Search bar, @mention the bot (example @Bumblebee) and select your bot from suggestion.

![Message Extension using Search bar](https://lh3.googleusercontent.com/GOOgO5k1l8g4PoA0fzCqKf5YcldUOhNT0WK9rgS1EuO9ESN_bWqN_LeipnOGuvTAbq7seaiWbf6duMmRKa2PIPIEjJ18fFLD7Hld2Se6rJJZsODu0m1FaZR_Vv35ksM7NCVJePUO)


After clicking on the preview user can view the Adaptive Card attached with the preview.

![Message Extension using Search bar](https://lh4.googleusercontent.com/bePbJOD8e8ACjYJj5bdtRXBRkQgMsELw8-SyXCP3eTxL2tpbrE5e-gMuAl-8UgxPJBHU8L9JepYtZO25oN9roc1I2YIfPhFn9LCJBapQFcNqV6IFwXEjM9HJnLw8M0VfI-gaT_98)



![Message Extension using Compose area](https://lh6.googleusercontent.com/gImu1kA5DxyC_QsfU31wxdxDf_qX7O9NCYgMdKYob01z-LGqR9jeWK3yVOfCS2q394a5E7Q5kgbnXcOKTpbpHPmCK-vJ5UAYuy9Wj5yDhMMFbsmgyjkOk2QRTPrIKQJueViuQQpT)



## Task Module

Task modules allow you to create modal popup experiences in your Teams application. Inside the popup you can run your own custom HTML/JavaScript code, show an [iframe]-based widget such as a YouTube or Microsoft Stream video or display an Adaptive card.

Documentation: https://docs.microsoft.com/en-us/microsoftteams/platform/task-modules-and-cards/what-are-task-modules


Create TM using Deeplink:
```js
    let adaptiveCard = {
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": ADAPTIVE_CARD_PAYLOAD
    }

    let cardLoad = encodeURIComponent(JSON.stringify(adaptiveCard))

    let deeplink= `https://teams.microsoft.com/l/task/<App ID from App Studio>?card=${cardLoad}&height=300&width=600&title=Some Title&completionBotId=<Client ID>`;

    app.sendQuickReplies({
        title: 'Task Module Check',
        options: [{
             title: 'Open',
             url: deeplink
         }]
     })

```

**Group Conversation**:  (Teams / Channel)

The bot must be @mentioned. Your bot will not receive a message when the team or channel is mentioned, or when someone replies to a message from your bot without @mentioning it.

Documentation: https://docs.microsoft.com/en-us/microsoftteams/platform/bots/how-to/conversations/channel-and-group-conversations?tabs=json


**Adding a bot in a team or channel**:
Goto channel and click on the + button with the tabs

![](https://paper-attachments.dropbox.com/s_8951A943FC1CC19315A9C55D5C64E03C1256EF2C3ACB23CCBF66E8C16FF2F40E_1600234853416_image.png)


For published bot: you can add using the search.
For development bot:

1. Goto App studio and download the bot that you want to add in the teams.
2. Click on the Manage apps and then Upload a custom app from the bottom-right.
3. Upload the downloaded .zip of the app.
![](https://paper-attachments.dropbox.com/s_8951A943FC1CC19315A9C55D5C64E03C1256EF2C3ACB23CCBF66E8C16FF2F40E_1600235101024_image.png)



More References
1. Try to learn as much about Teams apps as you can. Try to install different apps and observe the workflow and user experience.
2. Learn basics of MS Teams
    1. [Getting started with Teams](https://docs.microsoft.com/en-us/microsoftteams/platform/#pivot=get-started)
    2. [Guidebook](https://www.microsoft.com/microsoft-365/partners/resources/guidebook-building-apps-for-microsoft-teams)
    3. [Tutorial](https://www.youtube.com/watch?v=ZH0sqPeNVbk&feature=youtu.be), [examples of use cases](https://www.youtube.com/watch?v=LvAYtqQiLv0&feature=youtu.be&t=3046) (retail, cpg, fmcg, sales, etc)
    4. [More links](https://www.notion.so/shubhi101/MS-Teams-IP-Co-sell-28c277e956354cb3a3b6be44507f7d7e)
3. MS Teams UI elements
    1. Learn about bots, tabs, message extensions
    2. Learn about [adaptive cards](https://adaptivecards.io/)
4.  Additional
    1. [App templates](https://docs.microsoft.com/en-us/microsoftteams/platform/)
    2. [Webhook for Graph API](https://docs.microsoft.com/en-us/graph/api/resources/webhooks?view=graph-rest-1.0)
    3. [MS Graph Web Toolkit](https://docs.microsoft.com/en-us/graph/toolkit/overview?context=graph%2Fapi%2F1.0&view=graph-rest-1.0)
    4. [REST API integration with BotFramework](https://docs.microsoft.com/en-us/azure/bot-service/rest-api/bot-framework-rest-connector-quickstart?view=azure-bot-service-4.0)
5. Learn about Active Directory authentication
    1. [Auth flow](https://docs.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/authentication/auth-flow-tab)
    2. [Auth in Teams tabs](https://docs.microsoft.com/en-us/microsoftteams/platform/tabs/how-to/authentication/auth-tab-aad)
