---
title: Integrate a chat bot to your knowledge base
sidebar_label : Integrate KB with chatbot 
---


> You can connect your knowledge base to any chatbot from the [knowledge base settings](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/productivitytools/connecttosubdomain) page. 

Chatbots that are built on the yellow.ai platform or any other app can be integrated into the inbox knowledge base to help the end-users to use bot functionalities, and connect with the bot or the live agent faster.

To connect a chat widget, follow the below steps: 

1. Open Inbox **settings**. Search and select **Knowledge base**.

    ![](https://i.imgur.com/jPd74Ri.png)

2. Click **View** next to integrations. 

    <img src="https://i.imgur.com/dUPObzp.png" alt="drawing" width="70%"/>


3. Select **Chat bot**. 

    ![](https://i.imgur.com/9wfiWvL.png)

4. Click **Connect**. 

    ![](https://i.imgur.com/bCwI1Ms.png)

5. Add bot code.
    - If you want to connect a bot built on any third-party platform, *copy* the chatbot code (without script tags) and *paste* it on the **Bot widget code** box. 
    - To connect your KB with the bot built on the yellow platform, click **Insert bot code**.   
    (Refer to [Deploy chat widget](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/web-widget#24-deploy-chat-widget),to fetch bot code from **Channels**)
    
    ![](https://i.imgur.com/dqmVgrb.png)

    **Sample code** (copy/paste only the content available within script tags): 

    ```
    window.ymConfig = {"bot":"x1609156756707","host":"https://cloud.yellow.ai"};(function () {var w=window,ic=w.YellowMessenger;if("function"===typeof ic)ic("reattach_activator"),ic("update",ymConfig);else{var d=document,i=function(){i.c(arguments)};function l(){var e=d.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";var t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}i.q=[],i.c=function(e){i.q.push(e)},w.YellowMessenger=i,w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})();
    ```

6. Manually verify if the entered code is correct. Click **Connect**. 

![](https://i.imgur.com/7Vthk1C.png)

7. You can **Preview** the bot to see if it is functioning as expected. 

![](https://i.imgur.com/6ae0HKg.png)

#### Debug the bot code/ Delete bot on KB

8. If the bot is not functioning as expected on the Knowledge base, you must **Disconnect** the bot from the Chatbot integration page and add the new(corrected) code again(step #5). 

![](https://i.imgur.com/KdHqo6J.png)

> You can **Disconnect/Connect** the bot as and when required. 

