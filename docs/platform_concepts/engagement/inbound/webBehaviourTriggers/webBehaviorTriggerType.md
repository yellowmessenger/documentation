---
title: Types of Web Behavior Triggers
sidebar_label: Types of Web behavior triggers
---


## In this guide

1. This guide introduces you to the various types of Web Behaviour Triggers and what each of them mean. A Web Behaviour Trigger is used to define **When** the campaign will be executed
2. This guide also gives a quick walkthrough of how to set up multiple conditions and condition sets, and how they can be used to create **AND**, or **OR** Conditions

### Here are the types of triggers you can choose:

You will have various Web Behaviour Triggers to choose from:

- **URL** – When the visitor is on the URL defined, display the campaign. There are a few ways to target by URL, some of which are “is/is not”, and "includes / does not include."
   - **Wildcard (*) →** ***(an asterisk)** is a wildcard symbol that stands for any amount of letters or characters in your URL.

Test [http://yellow.ai/search/](http://yellow.ai/search/)

      • URLs like [**http://yellow.ai/search/**](http://yellow.ai/search/) (will work for anything after 

      • URLs like [**http://yellow.ai/*/blog**](http://yellow.ai/*/blog) will also work

![Image.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/068BB776-1320-44EE-951A-D501BCFBC578/528AEFE5-87E8-49DD-84EE-8F8D545741CC_2/Image.png)

![Screen Recording 2021-07-12 at 7.54.55 PM.gif](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/068BB776-1320-44EE-951A-D501BCFBC578/17E1E522-2331-45F9-8778-2A2610E59CE3_2/Screen%20Recording%202021-07-12%20at%207.54.55%20PM.gif)

- **Referrer** – This is the URL that refers the website to the page they're on now ([google.com](http://google.com))
- **Number of Site Visits** – The number of times a user has visited your site (*sessions*, not page views).
- **Device** – The options here are mobile, desktop, or tablet
- **Seconds on Page** – After somebody has been on the page for a certain number of seconds, the campaign will get triggered.
- **Scroll percentage** – After a visitor scrolls X percent of a page, the campaign will get triggered.
- **On Exit Intent** – This triggers when a user's cursor leaves the window on the top half of the screen, usually indicating they intend to change browser tabs or close this tab/window.
- **Cookie** – display your campaign to users who have or don't have a specific cookie attached to them! You will have to define the cookies using *key=value* pairs
- **CTA** - here you define an element of the page, which when clicked, will execute the campaign. Use the selector here and define the *key=value* pair.
- **Element Hovered Over** - here you define an element of the page, which when hovered over, will trigger the campaign. Use the selector here and define the *key=value* pair.
- **Custom Event -** You can send custom events to the bot to trigger an inbound campaign. Follow the steps below to use custom events:
   - Use the following script to post custom events to the bot ⬇️

   `document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({`

   `event_code: 'ym-inbound-event',
data: JSON.stringify({
event: {
code: "eventName”
}
})
}))`

   - Create a custom event in the Event Hub using the same name ⬇️

![Image.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/068BB776-1320-44EE-951A-D501BCFBC578/52C9274F-B15B-473C-9097-AEC1F3A1277F_2/Image.png)

   - Use the **custom event** trigger in the condition node ⬇️

![Image.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/068BB776-1320-44EE-951A-D501BCFBC578/64CABEA8-624F-4F24-8D77-48FB40D78208_2/Image.png)

## Creating multiple conditions and condition sets

When to use "**AND**” or "**OR**”:

By default, every “condition” within a “condition set” will have an **AND** between one another. Every “condition set” will have an **OR** between one another. When ALL conditions in ANY of the condition sets are met, the campaign will get triggered.

![Screen Recording 2021-07-12 at 7.57.13 PM.gif](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/068BB776-1320-44EE-951A-D501BCFBC578/94BC3EB3-F5AF-4AF7-9ED0-D85B993D1BFF_2/Screen%20Recording%202021-07-12%20at%207.57.13%20PM.gif)



## Up next

We will talk about [Web Behavior triggers to identify in e-commerce.](https://docs.yellow.ai/docs/platform_concepts/engagement/inbound/webBehaviourTriggers/webBehaviorsInEcomm)
