---
title:  Web behaviour conditions
sidebar_label: Campaign display conditions
---


When creating an Inbound campaign, you need to define when the campaign should show. You can use various conditions or strategies to run effective inbound campaigns. 

This article provides various conditions (web behaviour) that the Inbound campaign supports and helps you with setting up multiple conditions.
  
 
 ## 1. Evaluate multiple conditions
  

For every Condition set, you can have one or more conditions, and for every campaign (Web behaviour settings), you can have multiple Condition sets.
  

By default, *and* is applied between each condition within a Condition set and *or* is applied between each Condition set of Web behaviour settings. 

Hence, the campaign is displayed only when all the conditions of any Condition set are met.

 ![](https://i.imgur.com/ZFgKhu2.png)
 

To know how to define conditions, [see the following section

## 2. Trigger events
  

![](https://i.imgur.com/8H9dVFY.png)

  
Option | Description
-------- | ---------
URL | Show the campaign only when visitors are on a particular URL or if the URL includes/excludes a specific keyword. You can use *is/is not*, or *includes/ does not include*. <br/>You can also use  **Wildcard (*)**, an asterisk to mention any keyword in the URL that is not specific. For example, the URL **http://yellow.ai/*/blog** considers any value in the URL in place of *.![](https://i.imgur.com/peathJj.png)
Referrer | The source (URL) from which the visitor has redirected to the current page.
Number of site visits | The number of times a user has visited the specified website site (It considers sessions, not page views).
Device | The device from which the visitor accessed the website - mobile, desktop, or tablet.
Seconds on page | Show the campaign if the visitor has been on the page for a certain number of seconds. 
Scroll percentage | Show the campaign when a visitor scrolls down X percent of the page.
On exit intent | Show the campaign when a visitors's cursor leaves the window on the top half of the screen, usually indicating they intend to change browser tabs or close the current tab or window.
Cookie | Show the campaign either to visitors who have or do not have a specific cookie attached to them. You will have to define the cookies using *key-value* pairs.
CTA | Show the campaign when the visitor clicked on a specific page element. Use the selector and define the *key-value* pair.
Element hovered over | Show the campaign when the vision hovered on a specific element of the page. Use the selector and define the *key-value* pair.
Custom Event | Show the campaign based on custom events. See [Custom event based trigger](#21-custom-event-based-trigger)

:::note
To know when to use different trigger events, see [Web behaviour triggers for content marketing](#3-web-behaviour-triggers-for-content-marketing) and [Web behavior triggers for e-commerce](#4-web-behavior-triggers-for-e-commerce).
:::

### 2.1 Custom event based trigger

To post custom event to the bot, use the following script - 

```
document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
   event_code: 'ym-inbound-event',
   data: JSON.stringify({
      >event: { 
         code: "eventName”
         }
      })
   }))`

```

To know how to create custom event, see [Custom event](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#8-custom-event). 

  

In the Condition set, choose Custom event and select the event on which you want to set trigger condition.

![Image.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/068BB776-1320-44EE-951A-D501BCFBC578/64CABEA8-624F-4F24-8D77-48FB40D78208_2/Image.png)


***







## 3. Web behaviour triggers for content marketing

This section explains how you can configure the condition for different web pages such as Home, Solutions, Product details, Blog, and Pricing pages.

:::note
You can just use this for reference and there could be many other pages and use cases that were not covered in this section.
:::

### 3.1 Homepage

#### 1. Homepage help
Brands do not want visitors to spend too much time on the homepage. Instead, they prefer quickly moving to the next stage in the funnel (example: solutions page, blogs or pricing page). 

Use **URL targeting**, **Seconds on page**, **Seconds of inactivity** and **Scroll %** triggers to identify visitors who are stuck on the homepage, and use Inbound Campaigns to help them move to the next stage.

![](https://i.imgur.com/8TQMeeo.png)



  

![ezgif.com-gif-maker.gif](https://cdn.yellowmessenger.com/htw0adEMq1T01629804244269.gif)


***

#### 2. Homepage Ad Banner

Visitors often land on to your website through an external campaign or referrer. Such visitors have a very specific intent. 

You can identify the source from which they have come from using **URL Query Param** and **Referrer** targeting rules to create personalised engagements.

  

![Image.png](https://cdn.yellowmessenger.com/CsfBfGbQsCUx1629804257597.png)

  

![ezgif.com-gif-maker (1).gif](https://cdn.yellowmessenger.com/bchBX92IerXQ1629804274400.gif)

  

### 3.2 Solutions page

  

#### Social proof

A visitor exploring your solutions is a potential customer. Win their confidence by suggesting related blogs, customer success-stories and move them a step closer to conversion. Identify such visitors using **URL Targeting.**

![](https://i.imgur.com/Y47tty0.png)

  

![ezgif.com-gif-maker.gif](https://cdn.yellowmessenger.com/tfe0sqdg81541629804330710.gif)

  

### 3.3 Blog page

  
#### 1. Blog Recommendation 

A visitor who exists on your blog page without reading a significant chunk of your blog probably did not find what they were looking for. 

You can prevent such drop-offs by collecting visitor preference, and recommending better content right when the visitor is about to bounce off. Identify such visitors using **URL Targeting, Scroll % and Exit Intent**


![Image.png](https://cdn.yellowmessenger.com/NPjs7mYqF3QZ1629804358314.png)

  

![ezgif.com-gif-maker.gif](https://cdn.yellowmessenger.com/2dPu7xLU2ns81629804379454.gif)

  

#### 2. Collecting opt-ins 
When a visitor finishes reading the entire blog, they probably liked what they read. This might be the perfect moment to collect a WhatsApp or email opt-in in order to start sending them similar blogs. Identify such visitors using **URL Targeting and Scroll %**


![Image.png](https://cdn.yellowmessenger.com/tzb6xdugR4BZ1629804390864.png)

  

![ezgif.com-gif-maker.gif](https://cdn.yellowmessenger.com/ORxl4xBq3r1H1629804415641.gif)

  

#### 3. Pricing page

  

#### 4. Qualify leads & schedule demos
Identify visitors who want to schedule a demo, let the chatbot qualify them and set-up a meeting, ensuring that your sales team wake up to a productive calendar. Use the **CTA** event to achieve the same

![Image.png](https://cdn.yellowmessenger.com/PlWkoFTGir171629804427468.png)

  

![ezgif.com-gif-maker (1).gif](https://cdn.yellowmessenger.com/OxhEwfzByVdR1629804440683.gif)

  

#### 5. Increase conversions

You can use targeted promotions to quickly convert visitors who spend a decent time on the pricing page and are about to exit it. 

Identify such visitors using **URL targeting**, **Seconds on page**, **Seconds of inactivity** and **Exit intent**

  

![Image.png](https://cdn.yellowmessenger.com/5JeUL4F4ELkM1629804452289.png)

  

![ezgif.com-gif-maker.gif](https://cdn.yellowmessenger.com/r9qRLk7FYPDs1629804472578.gif)
  

***

## 4. Web behavior triggers for e-commerce

In this section, we have provided some examples on how you can leverage Web behaviour triggers for some e-commerce use cases. We have considered the following pages for a typical e-commerce website - *Homepage, Product search page,  Product details page**, and *Cart page*. 

  


### 4.1 Homepage

#### 1. Homepage Help 
Brands do not want visitors spending too much time on the homepage. Visitors should quickly move to the next stage in the funnel, ie, product search, product details or the cart checkout page. 

Use **URL Targeting**, **Seconds on Page**, **Seconds of Inactivity** and **Scroll %** triggers to identify visitors who are stuck on the homepage. Create Inbound campaigns to help them move to other pages.



![Image.png](https://cdn.yellowmessenger.com/nUe4p56DkEpC1628175899461.png)

  

![Shopify Homepage Help.gif](https://cdn.yellowmessenger.com/Gbz77mhH5QLl1628180208877.gif)

  

#### 2. Homepage ad. bar
Visitors often land on to your website through an external campaign or referrer. Such visitors have a very specific intent. Identify which source they have come from using **URL Query Param** and **Referrer** targeting rules, and create personalised engagements accordingly.


![Image.png](https://cdn.yellowmessenger.com/TOhLLTnkAh9j1628176246228.png)

  

![Image.png](https://cdn.yellowmessenger.com/5EqowOFREACk1628176355440.png)

  

### 4.2 Product search page


#### 1. Product search filter nudge
When a visitor spends too much time on the Product search page, you might want to nudge them to apply filters in order to find more relevant results. *

Use *URL targeting**, *Seconds on page**,  *Seconds of inactivity*, and *Scroll %* are the right triggers to identify such users.

  

![Image.png](https://cdn.yellowmessenger.com/A8gNfmc1UXks1628176482772.png)

  

![Product Search Filter Nudge.gif](https://cdn.yellowmessenger.com/vHEbQFvjwC8P1628180269801.gif)

  

#### 2. Product search exit intent
When a visitor is about to exit from the Product search page, you can do any of the following - 

 * Collect Opt-in for outbound retargeting
 * Nudge to save the search results for the next time they visit
 * Ask them to apply product filters in case they didn’t find anything relevant


To identify such visitors, use  the **Exit Intent** trigger.

![Image.png](https://cdn.yellowmessenger.com/bPCxx37UjVCj1628176592057.png)

  
![Product Search Exit Intent.gif](https://cdn.yellowmessenger.com/C005oWo04ZCY1628180303612.gif)

  

### 4.3 Product details page

  

#### 1. Product purchase urgency nudge 
When you have a visitor spending too much time on the Product details page, you might want to expedite the purchase by creating a sense of urgency. 

You can identify such visitors using *URL Targeting*, *Seconds on Page* & *Seconds of Inactivity* triggers.

  

![Image.png](https://cdn.yellowmessenger.com/XEx4bUTh9nfz1628176670704.png)

  

![Product Purchase Urgency Nudge.gif](https://cdn.yellowmessenger.com/lIE8lEF8ftVo1628181214689.gif)

  

#### 2. Product Details Page Exit Intent
When a visitor is about to exit the Product details page, you might want to increase the chances of conversion by asking them to shortlist the product, or by offering them an exciting discount. 

You can identify such visitors using a combination of **URL** and **Exit Intent** triggers.

![Image.png](https://cdn.yellowmessenger.com/GoXy0cBtJbtR1628176811949.png)

  

![Product Details Page Exit Intent.gif](https://cdn.yellowmessenger.com/bhjERW794E0k1628181249819.gif)

  

#### 3. Product add to cart upsell
When a visitor adds a product to a cart, it might be the perfect opportunity for you to do an upsell. These high intent visitors can be targeted using the **CTA clicked** trigger

  

![Image.png](https://cdn.yellowmessenger.com/wKPpHEsZUEne1628176881352.png)

  

![Product Add to Cart Upsell.gif](https://cdn.yellowmessenger.com/hZ7N0UrgJhiG1628181296760.gif)

  

### 4.4 Cart page

#### 1. Cart page urgency nudge
When you have a visitor spending too much time on the cart page, you might want to expedite the purchase by creating a sense of urgency. 

You can identify such visitors using *URL Targeting*, *Seconds on Page* and *Seconds of Inactivity* triggers.


![Image.png](https://cdn.yellowmessenger.com/0y1hjRCcsDwj1628176966290.png)

  

![Cart Page Urgency Nudge.gif](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/068BB776-1320-44EE-951A-D501BCFBC578/373D62D3-8040-4E7B-820C-FC2BEC9832E9_2/Cart%20Page%20Urgency%20Nudge.gif)

  

#### 2. Cart page exit intent 
When a visitor is about to exit the Cart Page, you might want to increase chances of conversion by offering them an exciting discount. 

You can identify such visitors using a combination of *URL* and *Exit Intent* triggers.

![Image.png](https://cdn.yellowmessenger.com/cqjPOHzA4iLb1628177078408.png)

  

![Cart Page Exit Intent.gif](https://cdn.yellowmessenger.com/rTdcBwyny5MV1628181353125.gif)



