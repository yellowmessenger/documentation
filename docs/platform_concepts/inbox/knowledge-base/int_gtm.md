---
title: Integrate your knowledge base with google tag manager(GTM)
sidebar_label : Integrate KB with GTM
---


> You can connect GTM to your knowledgebase from the [knowledgebase settings](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/productivitytools/connecttosubdomain) page.


Google Tag Manager(GTM) is a tag management system where you can quickly and easily update measurement codes and their related code fragments collectively known as **tags** on your website or mobile app.
Instead of integrating and monitoring tracking code for tools like Google Analytics, Facebook pixel tracking, Google Ads, etc, you can create one GTM tag and monitor all the required tools in one place.  

Google Tag Manager will be an intermediate between your knowledge base and the tools(tags) you want to integrate. 


> See the tag template types(tools) that are natively supported by Google Tag Manager [here](https://support.google.com/tagmanager/answer/6106924?hl=en). 

--------


## Connect GTM to inbox knowledge base

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


---------


### Connect Google analytics to GTM

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

7. Click **Triggering**. Select **Initialization - All Pages**. This will activate GA events for all the pages on your URL, you can add advance settings to customize this further. 

    ![](https://i.imgur.com/w8zSfMn.png)

8. Click **Save**. 

    ![](https://i.imgur.com/WoFrOCn.png)

9. To debug, click **Preview**. Add your **URL** and debug the configuration. 

    ![](https://i.imgur.com/S3TQ2f1.png)



:::info

Reference:     
 
- [Debug GTM code before publishing the container](https://support.google.com/tagmanager/answer/6107056?hl=en) 
- [Set up Google Analytics for a website](https://support.google.com/analytics/answer/9304153)      
- [Configure Google Analytics in GTM](https://support.google.com/tagmanager/answer/9442095)       
- [Set up Google Analytics in GTM](https://support.google.com/tagmanager/answer/13034206) 

:::


