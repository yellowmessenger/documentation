---
title : Chat widget FAQs 
sidebar_label : Chat widget FAQs
---

<details>
 <summary>How to improve the website's performance after installing the bot?</summary>
 <div>
  <br/>
  <div>Ensure that the chatbot script is pasted in the &lt;body&gt; of the website rather than the &lt;head&gt;. This will ensure the bot loads only when the website is fully loaded without affecting its performance.</div>
   </div>
</details>

<details>
 <summary>Why is the bot not displaying or loading any of the configured messages?</summary>
 <div>
  <br/>
  <div> Make sure you have configured Welcome message in the <a href="https://docs.yellow.ai/docs/platform_concepts/studio/overview">Studio</a> . Login to cloud.yellow.ai platform. Navigate to  <b>Studio -> Welcome Message -> Add welcome message</b>. To know more, click <a href="https://docs.yellow.ai/docs/platform_concepts/studio/overview#3-conversation-settings">here</a>. </div>
   </div>
</details>

<details>
 <summary>Is it possible to deploy two bots on a single website?</summary>
 <div>
  <br/>
  <div> No, you cannot deploy 2 bots on a single website. </div>
   </div>
</details>

<details>
 <summary>How to set the position of the bot dynamically?</summary>
 <div>
  <br/>
  <div>The bot's position is set to right by default. On the <b>Chat widget settings</b> page, you can change it to left.
      To dynamically set the position of the bot on a website, set the position to <b>right</b> on the <b>Settings</b> page and pass `alignLeft:true` inside <b>ymConfig</b> of the chatbot script on the respective webpage.</div>
   </div>
</details>

<details>
 <summary>Does the Chat widget or PWA contain a pop-up component?</summary>
 <div>
  <br/>
  <div>No, the pop-up component appears only when an error message such as "device not connected to network" or "file upload limit exceeded" is displayed.</div>
   </div>
</details>

<details>
 <summary>Is drop-down option supported in the Chat widget?</summary>
 <div>
  <br/>
  <div>Currently, drop-down is not supported for the Chat widget bot.</div>
   </div>
</details>

<details>
 <summary>Chatbot is auto-scrolling upwards after navigating to a different tab by clicking the URL from the chatbot. How to resolve this issue</summary>
 <div>
  <br/>
  <div>You need to enable the "Scroll the chat window to the bottom" option in the Chat widget's <b>Settings</b> tab. Navigate to the <b>Channels > Chat widget > Settings</b></div>
   </div>
</details>

<details>
 <summary>How to trigger the closeBot() function when a specific flow ends or when you reach a specific node?</summary>
 <div>
  <br/>
  <div>You must initiate an event at the end of the specific flow and will receive a callback in onEventFromBot(_ response: YMBotEventResponse) function of YMChatDelegate, where you can add the closeBot.</div>
   </div>
</details>

<details>
 <summary>Is it possible to change the bot title and description when the bot switches from parent bot to child bot?</summary>
 <div>
  <br/>
  <div>In orchestrator setup, you cannot interact with the child bot directly, and the UI loaded will be that of the parent bot. Therefore, there cannot be a separate Title, Description, or Icon for the child bot.</div>
   </div>
</details>

<details>
 <summary>What to do if buttons are not loading on the parent website?</summary>
 <div>
  <br/>
  <div>This happens when a website blocks CDNs (Content Delivery Network). You need to whitelist these by updating content security policy:<br/> * cdn.jsdelivr.net (to load the font) <br/> * https://cdn.yellowmessenger.com (to load buttons)</div>
   </div>
</details>

<details>
 <summary>Is speech-to-text (STT) feature supported in the chat widget?</summary>
 <div>
  <br/>
  <div>Yes, STT feature is supported for the chat widget.</div>
   </div>
</details>

<details>
 <summary>How to enable chat history conversation?
</summary>
 <div>
  <div>For <a href="https://cloud.yellow.ai">cloud.yellow.ai</a> platform, ensure that <b>Show history of the conversation</b> is enabled. <br/> <img src= "https://i.imgur.com/crMFACl.png"/> <br/> For "app.yellowmessenger.com" or "app.yellow.ai" platform, ensure that <b>Reset Context for every load</b> checkbox is unchecked in the dashboard settings. <br/> <img src= "https://i.imgur.com/VVSmy15.png"/> <br/> <b>Note:</b> If you want to maintain a history across devices or browsers, you can create an authentication token, which is a unique token, and pass it in the given format, as shown below:

```
if (userIsAuthenticated) { 

  // replace this with your own auth logic and reload the bot with new info.
    
    window.YellowMessengerPlugin.init({
        ymAuthenticationToken: 'Your_Unique_token'
    });
    window.YellowMessengerPlugin.show(); // display the bot icon
}
```

</div>
  <br/>
   </div>
</details>



     
     
