---
title : Deploy chatbot using the GTM integration
sidebar_label : GTM integration
---

This document provides instructions for deploying a web bot on your website, if it is integrated with Google Tag Manager (GTM).

## Setup chatbot on the website using GTM integration 

To set up a chatbot using GTM integration, follow the steps outlined below:

### Create a Tag

1. Login to your [Google Tag Messenger](https://tagmanager.google.com/) and create an account.

2. Navigate to [Google Tag Messenger](https://tagmanager.google.com/) account and select the container you want to configure.

    ![](https://i.imgur.com/cBk3SEF.png)
    
3. Click **Tags** > **New**.

    ![](https://i.imgur.com/gRoavVU.png)
    
4. Choose the **Custom HTML** tag type.
   
   ![](https://i.imgur.com/VWWpOHQ.png)
     
5. Copy the below script and paste it under the **Custom HTML** tag.     

```js
<script>
window.ymConfig = { bot: "bot id", host: "https://r1.cloud.yellow.ai" };
function botScript() {
var w = window,
ic = w.YellowMessenger;
if ("function" === typeof ic){
ic("reattach_activator");
ic("update", ymConfig);
}
else {
var d = document,
i = function () {
i.c(arguments);
};
i.q = [];
i.c = function (e) {
i.q.push(e);
};
w.YellowMessenger = i;
if(w.attachEvent) {
w.attachEvent("onload", l)
}
else {
window.addEventListener('load', l);
w.addEventListener("load", l, !1)
}
}
function l() {
var e = d.createElement("script");
e.type = "text/javascript";
e.async = !0;
e.src = "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";
var t = d.getElementsByTagName("script")[0];
t.parentNode.insertBefore(e, t);
}
}
botScript();
</script>
```
:::note
In the above script, you need to update the "Bot ID" and appended regions - r0/r1/r2/r3/r4/r5.
:::

| Region Code | Region | Host |
| --- | --- | --- |
| R0 | INDIA - India | https://cloud.yellow.ai |
| R1 | MEA - UAE North | https://r1.cloud.yellow.ai |
| R2 | JAKARTA | https://r2.cloud.yellow.ai |
| R3 | SINGAPORE | https://r3.cloud.yellow.ai |
| R4 | USA  | https://r4.cloud.yellow.ai |
| R5 | EUROPE | https://r5.cloud.yellow.ai |

   ![](https://i.imgur.com/js6hlPz.png)
   
6. Click **Save** to change the configuration changes.   
   
### Create a Trigger

To control when the chatbot loads on your website, you need to define when to load the bot on your website with a trigger.

To create a Trigger, follow these steps:

1. Click **Trigger** > **New**.

    ![](https://i.imgur.com/EazLj3W.png)
    
2. Choose the trigger type as **Page view**.
 
    ![](https://i.imgur.com/xvsZy9d.png)
    
3. In the Page view section, select **Some page views**.

   ![](https://i.imgur.com/bCDpc9N.png)   
    
4. In the *Trigger configuration*, under "Page view," perform the following:

    i. In *This trigger fires on*, select **Some Page Views**.
    
    ![](https://i.imgur.com/bCDpc9N.png)
      
    ii. In *Fire this event when an event occurs and all of these conditions are true* section, select **Page URL** and **Contains** from the drop-down and enter the URL of your website page.
    * Click **Save**.
    
        ![](https://i.imgur.com/AMZgwDt.png)
        
    
    A reference to your trigger associated with the tag will be displayed.
    
      ![](https://i.imgur.com/fOA0ymB.png)

5. On top of the menu bar, click **Preview**.

    ![](https://i.imgur.com/6dL1joJ.png)
    
6. Enter your website URL and click **Connect**.

   ![](https://i.imgur.com/SvfTC79.png)   

7. Enter the URL of your site to connect your chatbot, and click **Connect**.

This will redirect to your website, and the Tag Assistant will be connected. Open the chatbot to start the conversation.

   ![](https://i.imgur.com/bAGSAgE.jpg)