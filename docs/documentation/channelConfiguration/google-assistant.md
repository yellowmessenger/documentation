---
title: Google Assistant
sidebar_label: Google Assistant
---

## How to Use

Replace BOT_ID and PROJECT_ID with applicable botId and projectId

## Prerequisites

1. Visit Actions Console and login.
2. Create a Project

Turn AdBlocker Off in case the popup doesn’t appear.
Give a project name. It takes a couple of minutes to create a project and go to the next screen Choose assistant SDK. The Screen should be somewhat similar to the below photo.

Copy the command shown in pop up which is displayed after clicking on assistant SDK

Agree to the Terms and Conditions and continue / Click Ok.

## Installing the CLI

> Please choose your OS and install from google developers.
> Make an empty folder and copy the gactions CLI into it. To be sure it has execution permissions run chmod +x ./gactions Make a file action.json in the directory and copy the following contents. Do not forget to replace BOT_ID with your botId.

```js
{
"actions": [
 {
 "name": "MAIN",
 "intent": {
 "name": "actions.intent.MAIN"
 },
 "fulfillment": {
 "conversationName": "ym"
 }
 }
 ],
"conversations": {
 "ym": {
 "name": "ym",
 "url": "https://app.yellowmessenger.com/integrations/googleAssistant/BOT_ID",  "fulfillmentApiVersion": 2
 }
 }
}
```

> Paste the command you copied in the previous step. replace PACKAGE_NAME with action.json ( eg., gactions update -- action_package action.json --project gabot-4581e)

In case if you have missed your project name. You can find it in overview -> settings or in the home screen

Follow along the CLI prompts to finish successfully deploying the bot.

> Further reading The guide to building/porting a bot for Google Assistant
