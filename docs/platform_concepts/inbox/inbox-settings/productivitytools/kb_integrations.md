---
title: Integrate a chat bot or GTM to your knowledge base
sidebar_label : Knowledgebase(integrations)
---



In this article, you will learn: 

1. [How to integrate a Chatbot in your KB?](#bot)
2. [How to integrate GTM to your KB?](#gtm)

------------

3rd party Integrations are a means to facilitate the knowledge base with additional capabilities like live chat, tracking customers, and their behavioral data, commenting, etc. These integrations will help you make use of the best tool available to boost the functionality of the current system and share data to get a 360 degree of the end-user journey and their interactions.        
**Example**:        
By adding Google analytics to your GTM and integrating it with your knowledge base, you can track data for the total page visits, time spent by the user on each of the pages along with their demographic data, event-driven analytics, ability to comment, and perform A/B testing.

Currently Inbox provides Chat bot integration and Google tag manager integration.

> There can be only one chatbot and one Knowledgebase integration active at any point in time. They can be connected/disconnected as and when required.


---------

##  <a name="bot"></a>  1. Integrate KB with chat bots(widgets)


Chat bots(widgets) that are built on the yellow.ai platform or any other app can be integrated into the inbox knowledge base to help the end-users to use bot functionalities, and connect with the bot or the live agent faster.

To connect a chat bot, follow the below steps: 

1. Open Inbox **settings**. Search and select **Knowledge base**.

    ![](https://i.imgur.com/jPd74Ri.png)

2. Click **View** next to integrations. 

    <img src="https://i.imgur.com/dUPObzp.png" alt="drawing" width="70%"/>


3. Select **Chat bot**. 

    ![](https://i.imgur.com/9wfiWvL.png)

4. Click **Connect**. 

    ![](https://i.imgur.com/bCwI1Ms.png)

5. Add bot code.
    - If you want to connect a bot built on any third-party platform, *copy* the chatbot code (without script tags) and *paste* it in the **Bot widget code** box. 
    - To connect your KB with the bot built on the yellow platform, click **Insert bot code**.   
    (Refer to [Deploy chat widget](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/web-widget#24-deploy-chat-widget), to fetch bot code from **Channels**)
    
    ![](https://i.imgur.com/dqmVgrb.png)

    **Sample code** (copy/paste only the content available within script tags): 

    ```
    window.ymConfig = {"bot":"x1609156756707","host":"https://cloud.yellow.ai"};(function () {var w=window,ic=w.YellowMessenger;if("function"===typeof ic)ic("reattach_activator"),ic("update",ymConfig);else{var d=document,i=function(){i.c(arguments)};function l(){var e=d.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";var t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}i.q=[],i.c=function(e){i.q.push(e)},w.YellowMessenger=i,w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})();
    ```

6. Manually verify if the entered code is correct. Click **Connect**. 

    ![](https://i.imgur.com/7Vthk1C.png)

7. You can **Preview** the bot to see if it is functioning as expected. 

    ![](https://i.imgur.com/6ae0HKg.png)



#### Debug the bot code/Delete bot on KB

8. If the bot is not functioning as expected on the Knowledge base, you must **Disconnect** the bot from the Chatbot integration page and add the new(corrected) code again(step #5). 

    ![](https://i.imgur.com/KdHqo6J.png)

> You can **Disconnect/Connect** the bot to your knowledge base as and when required. 


9. **Save** the changes on Knowledge base settings page.

    <img src="https://i.imgur.com/jwuPt43.png" alt="drawing" width="70%"/>



-------------


##  <a name="gtm"></a>  2. Integrate KB with google tag manager(GTM)




Google Tag Manager(GTM) is a tag management system where you can quickly and easily update measurement codes and their related code fragments collectively known as **tags** on your website or mobile app.
Instead of integrating and monitoring tracking code for tools like Google Analytics, Facebook pixel tracking, Google Ads, etc, you can create one GTM tag and monitor all the required tools in one place.  

Google Tag Manager will be an intermediate between your knowledge base and the tools(tags) you want to integrate. 


> See the tag template types(tools) that are natively supported by Google Tag Manager [here](https://support.google.com/tagmanager/answer/6106924?hl=en). 

--------

To integrate GTM with your knowledge base, follow the steps below: 

1. Create a [GTM account](https://tagmanager.google.com/#/home). Configure all the tools (required for your KB) like Google Analytics, Google Ads, Facebook pixel tracking, etc. in your GTM account. 

2. Copy the **GTM ID**/ Tag tracking code from your GTM account (found on the top bar).

    > [Learn how](https://www.youtube.com/watch?v=P4suvDuj0kI). 

    ![](https://i.imgur.com/B3x1dPf.png)


3. On [yellow.ai](https://cloud.yellow.ai/) platform. Open **Inbox > Settings**. Search and select **Knowledge base**.

    ![](https://i.imgur.com/jPd74Ri.png)

4. Click **View** next to integrations. 

    <img src="https://i.imgur.com/dUPObzp.png" alt="drawing" width="70%"/>

5. Select **Google tag manager**. 

    ![](https://i.imgur.com/WohfyTY.png)

6. Click **Connect**. 

    ![](https://i.imgur.com/TdWLYup.png)

7. Enter/paste your **GTM ID** (step#2). 
    >  (Your GTM ID starts with ```GTM-``` followed by an alphanumeric value)

    ![](https://i.imgur.com/fm3HjXg.png)

    
8. Manually verify if your GTM ID is correct. Click **Connect**. 

    > You can log in to your GTM account and verify the integration. 


#### Debug GTM ID/ Delete GTM integration on KB

9. If the GTM ID is incorrect, you must **Disconnect** GTM from the Chatbot integration page and add the new(corrected) GTM ID again(step #7). 

	![](https://i.imgur.com/jDx8Ovt.png)


> You can **Disconnect/Connect** GTM account to your knowledge base as and when required. 

10. **Save** the changes on Knowledge base settings page.

    <img src="https://i.imgur.com/jwuPt43.png" alt="drawing" width="70%"/>


---------


### 2.1 Connect Google analytics to GTM

This is one example of how to configure tools(**Google analytics-GA**) in your GTM account. 
Follow the below steps to connect **GA** to **GTM** account:

1. Copy the **Measurement ID** for your GA4 property from your [google analytics](https://analytics.google.com/) account. 

    > **Sample format**: ```G-A2ABC2ABCD``` 

2. Create a [GTM account](https://tagmanager.google.com/) by entering **Account name**, **Container name**(the URL your GA is configured for) and **Container type**(Web). 

    ![](https://i.imgur.com/rnDx7eq.png)

3. After logging into the Tag manager, you will be directed to the **Workspace** tab. Click **Add a new tag**.

    ![](https://i.imgur.com/Gsa4lOR.png)

4. Click **Tag configuration**.

    ![](https://i.imgur.com/XkbastJ.png)

5. Select **Google Analytics: GA4 Configuration** (GA4 is the latest version).

    ![](https://i.imgur.com/dbpp5jT.png)

6. Add **Measurement ID**(Step #1).     

    ![](https://i.imgur.com/Muh5Gk6.png)

7. Click **Triggering**. Select **Initialization - All Pages**. This will activate GA for all the pages on your URL. 

    ![](https://i.imgur.com/w8zSfMn.png)

8. Click **Save**. 

    ![](https://i.imgur.com/WoFrOCn.png)

9. To debug, click **Preview**. Add your **URL** and debug the configuration. Click **Submit** and submit the configuration by adding a **Name** and **Description**. 

    ![](https://i.imgur.com/q7TjCFA.png)

10. Click **Publish**. The tag will go Live and you can see the details. 

    ![](https://i.imgur.com/Hqp0zQZ.png)  




:::info

Reference:     
 
- [Debug GTM code before publishing the container](https://support.google.com/tagmanager/answer/6107056?hl=en) 
- [Set up Google Analytics for a website](https://support.google.com/analytics/answer/9304153)      
- [Configure Google Analytics in GTM](https://support.google.com/tagmanager/answer/9442095)       
- [Set up Google Analytics in GTM](https://support.google.com/tagmanager/answer/13034206) 

:::


----------

