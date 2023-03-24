---
title : Fetch Chat widget history
sidebar_label : Fetch Chat widget history
---

Chat history is a series of conversations that have happened between a user and a bot. The chat history includes details such as user’s input, bot responses, and the date and time of the conversation.

Chat history retrieves past conversations that tailor future interactions. It helps the bot to analyse the user’s inputs and provide accurate automated responses to the user’s queries. Thereby, it improves the overall efficiency and reliability of the bot.

Let's say that you want to fetch a user's chat history from a bot. To do so, you need to pass a unique identifier, the ymAuthentication token, via a bot script or init function.

:::note
Ensure that the ymAuthentication token is secured and only authorized users can access it.
:::

In this article, you will learn:

* [How to pass ymAuthentication token for a chat widget?](#1-pass-ymauthentication-for-a-chat-widget)

**Prerequisites to pass ymAuthentication token:**

Before you passing the ymAuthentication token via the script or init function, you need to enable **Show history of the conversation** in the **Settings** page.

To enable "Show history of the conversation", follow these steps:

1. On the module switcher, click **Channels**.

   ![](https://i.imgur.com/UuFZ2eR.png)

2. Click on **Chat widget**.

    ![](https://i.imgur.com/1KzP77W.png)

3. The **Widget panel** is displayed.

    ![](https://i.imgur.com/lO86cQ0.png)
	
4. Navigate to the **Settings** tab and enable **Show history of the conversation**.

   ![](https://i.imgur.com/yti0HdF.png)


## 1. Pass ymAuthentication for a chat widget

Chat history is fetched with the help of a unique token generated for each user who logs into your platform. Once this token is generated, you can verify if a user has been authenticated.

### 1.1 Pass ymAuthentication token via script

To pass ymAuthentication token via script, follow these steps:

1. Log in to [Yellow.ai Platform](https://cloud.yellow.ai).
2. On the module switcher, click **Channels**.

   ![](https://i.imgur.com/UuFZ2eR.png)

3. Click on **Chat widget**.

    ![](https://i.imgur.com/1KzP77W.png)

4. The **Widget panel** is displayed.

   ![](https://i.imgur.com/lO86cQ0.png)
	
5. Navigate to the **Deploy** tab and **COPY CODE TO Install bot**. A bot script is copied.
 
    ![](https://i.imgur.com/2Mstpsg.png)

	
**Sample bot script:**
	
```c
<script type="text/javascript">
window.ymConfig = {"bot":"x1657623696077",
"host":"https://cloud.yellow.ai"};
(function() {
    var w = window,
        ic = w.YellowMessenger;
    if ("function" === typeof ic) ic("reattach_activator"), ic("update", ymConfig);
    else {
        var d = document,
            i = function() {
                i.c(arguments)
            };

        function l() {
            var e = d.createElement("script");
            e.type = "text/javascript", e.async = !0, e.src = "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";
            var t = d.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        }
        i.q = [], i.c = function(e) {
            i.q.push(e)
        }, w.YellowMessenger = i, w.attachEvent ? w.attachEvent("onload", l) : w.addEventListener("load", l, !1)
    }
})(); 
</script>
```

To fetch the user's chat history from a bot, add the **ymAuthentication** token in the following bot script:
 
```c
<script type="text/javascript">
window.ymConfig = {"bot":"x1657623696077","host":"https://cloud.yellow.ai", "ymAuthenticationToken": "1234"};  // Add ymAuthenticationToken here
(function() {
    var w = window,
        ic = w.YellowMessenger;
    if ("function" === typeof ic) ic("reattach_activator"), ic("update", ymConfig);
    else {
        var d = document,
            i = function() {
                i.c(arguments)
            };

        function l() {
            var e = d.createElement("script");
            e.type = "text/javascript", e.async = !0, e.src = "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";
            var t = d.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        }
        i.q = [], i.c = function(e) {
            i.q.push(e)
        }, w.YellowMessenger = i, w.attachEvent ? w.attachEvent("onload", l) : w.addEventListener("load", l, !1)
    }
})(); 
</script>
```
  
### 1.2 Pass ymAuthentication token via init function

To fetch the chat history, pass the ymAuthentication token in the below init function: 

```	
    window.YellowMessengerPlugin.init({
		ymAuthenticationToken: 'Your_Unique_token'
	});

```

### 1.3 Pass ymAuthentication token for PWA bot

You can fetch the user's chat history from a PWA bot by passing the ymAuthentication token.

To pass the ymAuthentication token for a PWA bot, follow these steps:

1. Use this `https://cloud.yellow.ai/pwa/v2/live/x1657623696077` URL.  

2. In the address bar, append `?ymAuthenticationToken=12345`. 
   For example, `https://cloud.yellow.ai/pwa/v2/live/x1657623696077?ymAuthenticationToken=12345`
   
   ![](https://i.imgur.com/74H5PE5.png)
 
3. Refresh the page to view the chat history.

   ![](https://i.imgur.com/dvkn3bQ.png)