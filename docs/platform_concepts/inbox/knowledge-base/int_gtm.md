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

<!--

## Connect Google analytics to GTM

> This is an example of how to configure tools in your GTM account. You can add other tools in the same manner. 

1. Create a GTM account by entering **Container name** and **Container type**. 
2. 


> Reference:     
> [Set up](https://support.google.com/analytics/answer/9304153) Google Analytics for a website     
> [Configure](https://support.google.com/tagmanager/answer/9442095) Google Analytics in GTM      
> [Set up](https://support.google.com/tagmanager/answer/13034206) Google Analytics in GTM


-->