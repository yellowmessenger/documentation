---
title: Widget Functions and Events
sidebar_label: Widget Functions and Events
---

The web widget can be customized in various ways using functions and events to match any use-case. In this doc, we'll take a deep dive into:-

1. [What is a bot script](#script)
2. [How to pass values from the client to the bot](#payload)
3. [Functions](#functions)
4. [Events](#events)
5. [Authentication](#auth)
6. [Chrome Extension](#ext)
7. [Mobile](#mobile)

## <a name="script"></a> Bot Script
All of our bots on follow the same web widget script. To know more on how to configure the colors and font of your bot, you can check out our docs on [web widget styling](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/web-widget)

> Paste your script at the end of the `</body>` tag

**Sample script**
```
<script type="text/javascript"> 
  window.ymConfig = {
   "bot":"x1655954196162",
  "host":"https://cloud.yellow.ai"};
  (function () {var w=window,ic=w.YellowMessenger;
  if("function"===typeof ic)
     ic("reattach_activator"),ic("update",ymConfig);
  else {
     var d=document,i=function(){i.c(arguments)
  };

  function l(){var e=d.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";var t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}i.q=[],i.c=function(e){i.q.push(e)},w.YellowMessenger=i,w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})();
</script>

```

Here, Host depends on the region in which your bot is deployed in

#### Bot Regions



| Region Code | Region | Host |
| --- | --- | --- |
| R1 |  | https://r1.cloud.yellow.ai |
| R2 |  | https://r2.cloud.yellow.ai |
| R3 |  | https://r3.cloud.yellow.ai |
| R4 |  | https://r4.cloud.yellow.ai |
| R5 |  | https://r5.cloud.yellow.ai |
|Global| Global| https://cloud.yellow.ai |






## <a name="payload"></a> How to pass values from the web client to the bot
To pass values from your parent interface to the bot, you can make use of our **payload data** which needs to be configured in the bot script itself.

```
<script type="text/javascript">
    window.ymConfig = 
    {
      "bot":"ENTER_YOUR_BOT_ID_HERE",
      "host":"https://cloud.yellow.ai",
      
      "payload":
      {
          "name": name,             // Add payload data here
          "email": email           // The values can be dynamic
      },
      
      "partiallyOpen":false,"alignLeft":"right"
    };
    .
    .
    .        //Rest of the chatbot script
    .
</script>
```

Our bot undergoes initialization on page load. Once the boat loads in, we can assign these values to variables using our [Variables node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes/#variables).

> Variable format is {{profile.payload.Your_Field_Name}}

![](https://i.imgur.com/3Np2ozp.png)

<!-- 
## Authenticating users
We make use of session tokens to authenticate all our users and maintain their chat history

```
Sample code block that's formatted well
``` -->

## <a name="functions"></a> Functions

You can make use of these out of the box functions to play around with our bot based on your specific use-case.

| Function                                  | Functionality                                                                                                       |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| window.YellowMessengerPlugin.hide()       | Hides bot icon                                                                                                      |
| window.YellowMessengerPlugin.show()       | Unhides/Shows bot icon                                                                                              |
| window.YellowMessengerPlugin.openBot()    | Opens chat widget                                                                                                   |
| window.YellowMessengerPlugin.closeBot()   | Closes chat widget                                                                                                  |
| window.YellowMessengerPlugin.toggleChat() | Toggles chat widget to opposite state i.e., Open chat widget if already closed. Closes chat widget if already open. |

## <a name="events"></a>Events

**To send events to the bot**
```
window.YellowMessengerPlugin.sendEvent(eventName, true)
const eventName = {
	code: "Event name",
	data: Event Data
}
```
**To listen to events thrown by the bot**

```
<script type="text/javascript">
         window.addEventListener('message', function(eventData) {

// make sure to verify origin to prevent XSS attacks.
// https://blog.yeswehack.com/yeswerhackers/introduction-postmessage-vulnerabilities/

// if (event.origin !== <your_origin>) throw new Error('Message not allowed");
            
            console.log(eventData,"eventData");
         })
</script>
```

**List of events we track**


| Event                        | Functionality                                                                              |
| ---------------------------- | ------------------------------------------------------------------------------------------ |
| ym-bot-opened                | Bot opened                                                                                 |
| ym-bot-closed                | Bot closed                                                                                 |
| ym_event_quick_reply         | Quick Reply clicked                                                                        |
| ym_event_image_clicked       | Image opened in preview                                                                    |
| ym_event_card_action         | Card action button clicked                                                                 |
| ym-bot-loaded-on-page-reload | When the refresh context is false, the bot will receive events as soon as the page reloads |
| ym_home                      | Home button clicked                                                                        |
| page-url-based-trigger       | Whenever a notification is sent in the bot (for electron apps)                             |

## <a name="auth"></a>Authentication
Authentication is done with the help of a unique token generated for each user that logs into your platform.

Once this token is generated you can conditionally check if a user has been authenticated with the following script.

```
if (userIsAuthenticated) { 

        // replace this with your own auth logic.
	// reload the bot with new info.
	
    window.YellowMessengerPlugin.init({
		ymAuthenticationToken: 'Your_Unique_token'
	});
	window.YellowMessengerPlugin.show(); // display the bot icon
}



// ----- OR -----




if(userIsAuthenticated) { 

// replace this with your own auth logic.
	window.YellowMessengerPlugin.init({
		payload: {
			email: 'ted.lasso@yellow.ai',
			member_id: '1231basd' // you can pass any info you want to be associated with the user based on your use case here. Note that this can be read by the bot using the {{profile.payload.member_id}} variable.
		}
	});
	window.YellowMessengerPlugin.show(); // display the bot icon
}
```

## <a name="ext"></a>Chrome Extension

The chrome extension allows you to paste the script of your bot on any webpage to test your development bot's payload and authentication locally on your device without having to publish changes to Live.

![](https://i.imgur.com/pcoRoWo.png)

![](https://i.imgur.com/MPbAQh8.png)



**[Link to our chrome extension](https://chrome.google.com/webstore/detail/yellowai-web-widget-launc/hlajdopahpkoakfedombhdpomlpmafbb)**


## <a name="mobile"></a>Mobile

If you've integrated the bot with Android, refer the docs [here](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/android).

If you've integrated the bot with iOS, refer the docs [here](https://docs.yellow.ai/docs/platform_concepts/mobile/chatbot/ios).

