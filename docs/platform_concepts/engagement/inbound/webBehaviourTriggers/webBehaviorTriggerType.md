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
- **URL Path** – This is the /path (in this example" **/pricing**)that displays after the core URL (https://yellow.ai/pricing)
- **URL Host** – This is the subdomain or core domain of the URL (**https://yellow.ai**/pricing)
- **URL Query Param** – This is any query parameter within a URL. You will have to define the Query Param using _key=value_ pair

![](https://cdn.yellowmessenger.com/d3FDOkTJVTmR1626110277617.gif)

- **Referrer** – This is the URL that refers the website to the page they're on now ([google.com](http://google.com))
- **Number of Site Visits** – The number of times a user has visited your site (_sessions_, not page views).
- **Device** – The options here are mobile, desktop, or tablet
- **Seconds on Page** – After somebody has been on the page for a certain number of seconds, the campaign will get triggered.
- **Scroll percentage** – After a visitor scrolls X percent of a page, the campaign will get triggered.
- **On Exit Intent** – This triggers when a user's cursor leaves the window on the top half of the screen, usually indicating they intend to change browser tabs or close this tab/window.
- **Cookie** – display your campaign to users who have or don't have a specific cookie attached to them! You will have to define the cookies using _key=value_ pairs
- **CTA** - here you define an element of the page, which when clicked, will execute the campaign. Use the selector here and define the _key=value_ pair.

## Creating multiple conditions and condition sets

When to use "**AND**” or "**OR**”:

By default, every “condition” within a “condition set” will have an **AND** between them. Every “condition set” will have an **OR** between them. When all conditions in any of the condition sets are met, the campaign will get triggered.

![](https://cdn.yellowmessenger.com/xRDoOqdVPvPI1626110808224.gif)
