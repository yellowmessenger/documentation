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

1. On the module switcher, click **Channels**.

   ![](https://i.imgur.com/UuFZ2eR.png)

2. Click on **Chat widget**.

    ![](https://i.imgur.com/1KzP77W.png)
	
3. Navigate to the **Secure bot** tab and expand the drop-down corresponding to **Web**.

    <img src="https://i.imgur.com/vS1MYOU.png" alt="drawing" width="80%"/> 
    
4. Enter the domain that you want to whitelist, then click **+ Add**. You can also add multiple domains based on your requirements.

    <img src="https://i.imgur.com/ljlNFo2.png" alt="drawing" width="80%"/>
     
:::note
- Whenever the chatbot script is deployed on any website, it will fetch and display the domains so that you can whitelist them if needed.
- If none of the domains are whitelisted, the chatbot will load on all domains where the script is deployed
- If one or more domains are whitelisted, the chatbot will load only on whitelisted domains.
:::

* The domain will be successfully whitelisted.

    <img src="https://i.imgur.com/PwIEU4K.png" alt="drawing" width="80%"/> 

5. If your domain is not whitelisted, a red tick mark next to your domain will be displayed. Click **Whitelist Domain** to load your bot.

   <img src="https://i.imgur.com/Yc7tIvR.png" alt="drawing" width="80%"/>

6. A pop-up is displayed with a confirmation message, click **+ Whitelist domain** to whitelist your domain.  

    <img src="https://i.imgur.com/GBsEwAh.png" alt="drawing" width="70%"/>
  
* This will whitelist your domain.

  <img src="https://i.imgur.com/yJwyZFH.png" alt="drawing" width="80%"/>   

7. To test your chatbot locally, you need to enable **Allow localhost**. Note that, you need to disable it after deployment.

    <img src="https://i.imgur.com/huMmQoZ.png" alt="drawing" width="80%"/>
    
### Remove whitelisted domains 

To remove whitelisted domains, follow these steps:
   
1. To remove the added domain, click **Remove domain** icon.

   <img src="https://i.imgur.com/ssIIv4Y.png" alt="drawing" width="70%"/>

2. A pop-up is displayed with a confirmation message, click **Remove**.

	<img src="https://i.imgur.com/vPLBYq0.png" alt="drawing" width="60%"/>    

## Whitelist Mobile apps

The platform supports whitelisting for bots deployed using all SDK frameworks, including Android, iOS, React Native, Cordova, Flutter, and Xamarin. By default, the bot will load on any app where the SDK is integrated. If you choose to whitelist one or more apps, the bot will exclusively load in the whitelisted app.

To whitelist specific apps, follow these steps:

1. Navigate to the **Secure bot** tab and expand the drop-down corresponding to **App**.

    <img src="https://i.imgur.com/E6UiqDd.png" alt="drawing" width="70%"/>
  
3. Enter the **App ID** of your app and click **+ Add**. You can also add multiple app IDs based on your requirements.

   <img src="https://i.imgur.com/FZDhq4t.png" alt="drawing" width="70%"/>
   
* This will whitelist your app. 

  ![](https://i.imgur.com/QADVly7.png)

### Remove whitelisted Mobile apps

To remove whitelisted apps, follow these steps:
   
1. To remove the added app, click **Remove domain** icon.

   <img src="https://i.imgur.com/hyXILEp.png" alt="drawing" width="80%"/>

2. A pop-up is displayed with a confirmation message, click **Confirm**.

	<img src="https://i.imgur.com/mjWmXQb.png" alt="drawing" width="60%"/> 
    
* This will remove the whitelisted app.