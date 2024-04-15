---
title : Domain whitelisting for Chat widget 
sidebar_label : Domain whitelisting
---

Domain whitelisting allows you to secure your chatbot and ensures chatbot acces only in authorized domains. It prevents unauthorized users from copying the script and embedding the bot on their websites and Mobile SDK apps (Android and iOS apps). 

Yellow.ai allows businesses to whitelist domain(s) where you want to deploy the chatbot.

:::note
* When a domain (example: yellow.ai) is whitelisted, all its subdomains (example: cloud.yellow.ai, live.yellow.ai) will also be whitelisted by default.
* Yellow.ai and yellowmessenger.com are whitelisted by default to allow you to preview your chatbot seamlessly.
:::

## Whitelist domain(s) to deploy chat widget

To whitelist a domain to deploy chat widget, follow these steps:

1. On the left navigation bar, click **Extensions**.

    ![](https://imgur.com/VFuwPIE.png)

2. Click on **Chat widget**.

   ![](https://imgur.com/c3JFOYN.png)
	
3. Navigate to the **Secure bot** tab and expand the drop-down corresponding to **Web**.

    <img src="https://imgur.com/DLa7YyD.png" alt="drawing" width="80%"/> 
    
4. Enter the domain that you want to whitelist, then click **+ Add**. You can also add multiple domains based on your requirements.

    <img src="https://imgur.com/QH47wL3.png" alt="drawing" width="80%"/>
     
:::note
- Whenever the chatbot script is deployed on any website, it will fetch and display the domains so that you can whitelist them if needed.
- If none of the domains are whitelisted, the chatbot will load on all domains where the script is deployed
- If one or more domains are whitelisted, the chatbot will load only on whitelisted domains.
:::

* The domain will be successfully whitelisted.

    <img src="https://imgur.com/Chc2vY9.png" alt="drawing" width="80%"/> 

5. If your domain is not whitelisted, a red tick mark next to your domain will be displayed. Click **Whitelist Domain** to load your bot.

   <img src="https://imgur.com/5yKvqfZ.png" alt="drawing" width="80%"/>

6. A pop-up is displayed with a confirmation message, click **+ Whitelist domain** to whitelist your domain.  

    <img src="https://i.imgur.com/GBsEwAh.png" alt="drawing" width="70%"/>
  
* This will whitelist your domain.

  <img src="https://imgur.com/lOeuxw8.png" alt="drawing" width="80%"/>   

7. To test your chatbot locally, you need to enable **Allow localhost**. Note that, you need to disable it after deployment.

    <img src="https://imgur.com/qmQWkDm.png" alt="drawing" width="80%"/>
    
### Remove whitelisted domains 

To remove whitelisted domains, follow these steps:
   
1. To remove the added domain, click **Remove domain** icon.

   <img src="https://imgur.com/vrIcR0I.png" alt="drawing" width="70%"/>

2. A pop-up is displayed with a confirmation message, click **Remove**.

	<img src="https://i.imgur.com/vPLBYq0.png" alt="drawing" width="60%"/>    

## Whitelist Mobile apps

The platform supports whitelisting for bots deployed using all SDK frameworks, including Android, iOS, React Native, Cordova, Flutter, and Xamarin. By default, the bot will load on any app where the SDK is integrated. If you choose to whitelist one or more apps, the bot will exclusively load in the whitelisted app.

To whitelist specific apps, follow these steps:

1. Navigate to the **Secure bot** tab and expand the drop-down corresponding to **App**.

    <img src="https://imgur.com/xUDlGcT.png" alt="drawing" width="70%"/>
  
3. Enter the **App ID** of your app and click **+ Add**. You can also add multiple app IDs based on your requirements.

   <img src="https://imgur.com/4XbtpB4.png" alt="drawing" width="70%"/>
   
* This will whitelist your app. 

  ![](https://imgur.com/v8LLx4k.png)

### Remove whitelisted Mobile apps

To remove whitelisted apps, follow these steps:
   
1. To remove the added app, click **Remove domain** icon.

   <img src="https://imgur.com/9rR0ORo.png" alt="drawing" width="70%"/>

2. A pop-up is displayed with a confirmation message, click **Confirm**.

	<img src="https://i.imgur.com/mjWmXQb.png" alt="drawing" width="60%"/> 
    
* This will remove the whitelisted app.