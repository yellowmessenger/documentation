---
title : Chat widget FAQs 
sidebar_label : Chat widget FAQs
---


## Setup page related FAQs

<details>
<summary>Chatbot is auto-scrolling upwards after navigating to a different tab by clicking the URL from the chatbot. How to resolve this issue?</summary>
<div>
 <br/>
 <div>You need to enable the "Scroll the chat window to the bottom" option in the Chat widget's <b>Settings</b> tab. Navigate to the <b>Channels > Chat widget > Settings.</b></div>
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

<details>
<summary>Is it possible to change the chat widget background colour for bot and agent messages?</summary>
<div>
 <br/>
 <div>No, the background colour can be changed only for user messages. This can be done by updating the complimentary color in the <a href="https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/speech-to-text">chat widget settings</a>.
</div>
  </div>
</details>

--------

## Chat widget related FAQs

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
 <div> Make sure you have configured Welcome message in the <a href="https://docs.yellow.ai/docs/platform_concepts/studio/overview">Studio</a>. Login to cloud.yellow.ai platform. Navigate to  <b>Studio -> Welcome Message -> Add welcome message</b>. To know more, click <a href="https://docs.yellow.ai/docs/platform_concepts/studio/overview#3-conversation-settings">here</a>. </div>
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
<summary>Is it possible to integrate the Yellow AI chatbot with a NextJS website?</summary>
<div>
 <br/>
 <div>Yes, you can add the script to any NextJS page, to do so:<br/> * Create a file called static/yellowai.js and paste our script. Note: You need to remove the tags. <br/> * You can now load this file on page (page name). (jsx|tsx) file</div>


```
import Head from 'next/head';
import MyComponent from '../components/mycomponent';
export default () => (
 <div>
   <Head>
     <script type="text/javascript" src="/static/yellowai.js"></script>
   </Head>
   <MyComponent />
 </div>
)
```
 <br/>
  </div>
</details>

<details>
<summary>Is the React SDK supported for the web widget?</summary>
<div>
 <br/>
 <div>React SDK is not supported for web widget. However, you can include our <a href="https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/web-widget#24-deploy-chat-widget">script</a> at the end of the body tag in your index.html file.</div>
  </div>
</details>

<details>
<summary>Is it possible to change the language of the weekdays displayed on the Chat Widget</summary>
<div>
 <br/>
 <div>Yes, the platform supports 10+ languages for placeholder texts such as timestamps, and text fields. The bot user can choose their preferred language to see text in that language.</div>
  </div>
</details>

<details>
<summary>How to disable the like and dislike buttons shown under the chats in the chat widget (PWA)?</summary>
<div>
 <br/>
 <div>By disabling message feedback in the chat widget, the "like" and "dislike" buttons are disabled.</div>
  </div>
</details>

<details>
<summary>Is it possible to remove the user's button selection from the list or quick replies in chatbot?</summary>
<div>
 <br/>
 <div>No. Every message exchanged between a bot, users, and agents needs to be tracked/recorded so that the users are aware of the message sent/selection made. Following are the reasons: <br/>• <b>Providing feedback:</b> When a user selects an option/sends a message, they expect feedback in response. By displaying the messages, users will know that their message has been received. <br/>• <b>Transparency:</b> When a user message is displayed, it builds trust between the user and the chatbot. <br/>• <b>Clarification:</b> At times, the bot may not understand the context of the user's message. Displaying the message in such instances will be essential.
</div>
  </div>
</details>

<details>
<summary>Why does a blank space appear when scrolling in the widget?</summary>
<div>
 <br/>
 <div>This happens only for bots migrated from V1 ("app.yellowmessenger.com" or "app.yellow.ai" platform) to V2 (cloud.yellow.ai platform). On the "app.yellowmessenger.com" or "app.yellow.ai" platform, you need to disable "Voice First" for the V2 widget as it is not supported. To disable "Voice First" option, click <b>Configuration > Channels > Chat Widget > General > Voice First</b>.<br/> <img src="https://i.imgur.com/lS4ik8c.png"/>


</div>
  </div>
</details>

<details>
<summary>Is it possible to hide the chat widget icon on the website?</summary>


Yes, use "window.YellowMessengerPlugin.hide()" function to hide the icon of the chat widget on the website.


</details>

<details>
<summary>Can we pass data to the widget for every page of the website?</summary>
<div>
 <br/>
 <div>Yes, you can pass the data to the widget on its respective page of the website. For more information, see <a href="https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/chat-widget-payload">payload</a>.


</div>
  </div>
</details>

<details>
<summary>Is it possible to configure the position of the bot to be on right when the user selects Arabic and to the left when the user selects English?</summary>
<div>
 <br/>
 <div>Yes, in ymConfig, you must set "alignLeft:true".


</div>
  </div>
</details>

-----------

## PWA related FAQs

<details>
<summary>Is it possible to change the short cut iocn for PWA bot?</summary>
<div>
 <br/>
 <div>Yes, you can change the PWA bot's shortcut icon via bot mapping. Note that the icons are supported with the following resolutions: <br/> * Mobile: 192*192 <br/> * Desktop: 512*512.</div>
  </div>
</details>

<details>
<summary>Is it possible to customise the URL of the PWA bot?</summary>
<div>
 <br/>
 <div>No, you cannot customise the URL of the PWA bot.


</div>
  </div>
</details>

<details>
<summary>Is it possible to pass the data from the URL to a widget?</summary>
<div>
 <br/>
 <div>Yes, using payload, you can pass the data.


</div>
  </div>
</details>

----------

## Chat history related FAQs

<details>
<summary>Is it possible to auto-delete conversations between the user and the bot after 48 hours?</summary>
<div>
 <br/>
 <div>There is no option to delete/hide conversation history after 48 hours. It will be accessible only for 30 days.</div>
  </div>
</details>

<details>
<summary>Is it possible to share the same chat session history across PWA and mobile SDK if a script is used to integrate the chatbot?</summary>
<div>
 <br/>
 On PWA, you can use the same ymAuthenticationToken that you used on the mobile SDK. You can add the same ymAuthenticationToken at the end of the PWA URL to get the same chat session history.<br/>


 ```
  https://cloud.yellow.ai/pwa/v2/live/<your_bot_id>?ymAuthenticationToken=<your_user_token>


  ```


 <div>If a script is used to integrate the chatbot, you need to pass the token inside `window.ymConfig` in the script.</div>


```
window.ymConfig = {


  ymAuthenticationToken: "your_unique_token"


}
```


</div>
</details>

<details>
<summary>How do we add ymAuthenticationToken to the PWA script so that we can see the same chat history in the PWA and mobile SDK?</summary>
You need to pass the ymAuthenticationToken in the URL as a query parameter.


 ```
 https://cloud.yellow.ai/pwa/v2/live/<your_bot_id>?ymAuthenticationToken=<your_user_token>


 ```
</details>

--------

## General FAQs

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
<summary>Is it possible to implement the callout banner for child bots and view them when the parent bot switches to child bots in the app?</summary>
<div>
 <br/>
 <div>Yes, to view the callout banner for child bots, send an event with "ui-event-close-promotion" to close the banner. In this way, you can control when to show or turn off the banner, in this case only for child bots.</div>
  </div>
</details>

<details>
<summary>Is it possible to remove the user's button selection from the list or quick replies in chatbot?</summary>
<div>
 <br/>
 <div>No. Every message exchanged between a bot, users, and agents needs to be tracked/recorded so that the users are aware of the message sent/selection made. Following are the reasons: <br/>• <b>Providing feedback:</b> When a user selects an option/sends a message, they expect feedback in response. By displaying the messages, users will know that their message has been received. <br/>• <b>Transparency:</b> When a user message is displayed, it builds trust between the user and the chatbot. <br/>• <b>Clarification:</b> At times, the bot may not understand the context of the user's message. Displaying the message in such instances will be essential.</div>
</div> 
</details>

<details>
<summary>Can we have custom fonts for <a href="http://cloud.yellow.ai">V2</a> web bots?</summary>
<div>
 <br/>
 <div>Currently, v2 web bots do not support custom fonts as we need to validate legibility on the chat interface, ensure the availability of appropriate font weights, and then support respective languages. If you need to add a new font, reach out to the <a href="mailto:support@yellow.ai">support</a>.</div>
</div>
</details>

<details>
<summary>Is possible to display image and text in a single node?</summary>
<div>
 <br/>
 <div>Yes, you can make use of <a href="https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/chat-widget-components#14-cards">Generic card</a>, and don not include any options in it. You need to include image, and description. Store the <a href="https://docs.yellow.ai/docs/platform_concepts/studio/build/code">function</a> response in var of type array and connect it to a message carousel node.<br/>
<img src="https://i.imgur.com/UkcRGAy.png)" alt="drawing" width="40%"/>
</div>
  </div>
</details>

<details>
<summary>Is it possible to configure customized icons for carousel (card) buttons?</summary>
<div>
 <br/>
 <div>Icons are supported only in quick replies. whereas for buttons inside cards, you can use emojis.
</div>
  </div>
</details>

<details>
<summary>Is it possible to update the token without refreshing the webpage?</summary>
<div>
 <br/>
 <div>No, the token and payload are only fetched during page load. Hence, you cannot update the token automatically.
</div>
  </div>
</details>

<details>
<summary>Even though the agent is not connected to the bot, the app.yellowmessenger.com chatbot displays a green round circle, indicating that the agent is online. Is it possible to change the settings of the bot on the app platform?</summary>
<div>
 <br/>
 <div>Yes, on "app.yellowmessenger.com" or "app.yellow.ai" platform you can disable it in <b>Configuration > Channels > Chat Widget > General > Show Dot Status in Title</b>.<br/> <img src="https://i.imgur.com/NolCgJx.png"/>


</div>
  </div>
</details>

<details>
<summary>Is it possible to change the language of the bot whenever the user switches from one language to another on the website?</summary>
<div>
 <br/>
 <div>Yes, the language of the bot is changed when a user switches from one language to another on the website. You have to update the bot's language and reinitialize the bot. Note that the language of the chat history cannot be updated, as those messages were already delivered, stored, and fetched from the backend in the respective language.


</div>
  </div>
</details>

<details>
<summary>What are the minimum compatible versions of the browsers supported by the web widget?</summary>
<div>
 <br/>
 <div>Chrome 89 and later <br/>• Edge 89 and later <br/>• Firefox 70 and later <br/>• Safari 10.1 and later
</div>
  </div>
</details>

<details>
<summary>How to add the image in Quick Replies node?</summary>
<div>
 <br/>
 <div>In the quick reply node, add the image link under the Prefix image. Click <a href="https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#24-quick-replies">here</a> for more information.<br/><img src="https://i.imgur.com/CERBwzb.png"/><img src="https://i.imgur.com/FhUnKaK.png" alt="drawing" width="40%"/>
</div>
  </div>
</details>

<details>
<summary>When an agent is connected to the bot, it is possible to close the conversation and trigger a journey?</summary>
<div>
 <br/>
 <div>When an agent is connected to the bot, the bot will not trigger any flow. To trigger a particular flow and close the conversation, you need to add the "talk to bot" button in the Callout banner. You can add the button either from the UI or using the function.<br/><b>Add talk to bot button using the function</b><br/>The following is the sample function:

```
array = [{
            title: 'Wish to end your chat with our Live Agent',
            options: [
                {
   
                 title: 'End Chat', text: "talk to bot"
                }
            ]
        }]
event : ui-event-update-promotion
```
<b>Add Talk to bot button using Studio's Conversation settings</b><br/>To add the banner text for the <b>talk to bot</b> button, follow these steps:<br/> 1. Navigate to <b>Studio > Conversation settings > Callout banner</b>.<br/><img src="https://i.imgur.com/HBKYqOg.png"/><br/>2. Enter the title and button name. Click <b>Update</b>.<br/><img src="https://i.imgur.com/rorMtMu.png" alt="drawing" width="40%"/><img src="https://i.imgur.com/0qqQDEI.png" alt="drawing" width="40%"/><br/>• The callout banner will be updated accordingly.

 
</div>
  </div>
</details>




