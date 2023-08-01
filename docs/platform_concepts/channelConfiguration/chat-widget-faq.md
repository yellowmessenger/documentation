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

<details>
<summary>How to change the font size in the widget?</summary>
<div>
 <br/>
 <div>To change the font size in the widget, follow these steps :<br/> 1.Navigate to <b>Channels</b> > <b>Chat widget</b> > <b>Widget panel</b>.<br/><img src="https://i.imgur.com/Bf9iQsC.png)" alt="drawing" width="70%"/><br/>2. Expand <b>Font</b> drop-down and select your preffered font size and click <b>Save changes</b>.<br/><img src="https://i.imgur.com/i5RGQAD.png)" alt="drawing" width="70%"/>
</div>
  </div>
</details>

--------

## Chat widget related FAQs

<details>
<summary>How to resolve a website performance issue after installing the bot?</summary>
<div>
 <br/>
 <div>Ensure that the chatbot script is placed within the &lt;body&gt; tag of the host website rather than the &lt;head&gt;. This will ensure that the bot loads only when the website is fully loaded without affecting its performance.<br/><img src="https://i.imgur.com/M362zHu.jpg"/></div>
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

<details>
<summary>How can we change the font color in the bot name and description?</summary>
<div>
 <br/>
 <div>The bot name and description text color is set automatically based on the background color to ensure readability, with a contrast ratio of 4.5+. For example, white text on bright red background is hard to read, so text color is set to black. Slightly darker red shades can be tested to find a readable color combination.


</div>
  </div>
</details>

<details>
<summary>Does the chat widget support HTML tags?</summary>
<div>
 <br/>
 <div>No, the chat widget does not support HTML tags. In order to maintain security and prevent web attacks, HTML tags are blocked within the widget. Any content containing HTML tags will be converted into plain text for display.<br/><img src="https://i.imgur.com/lJ8MfpE.png)" alt="drawing" width="40%"/></div>
  </div>
</details>

<details>
<summary>Does the chat widget automatically aligns the text based on the selected language?</summary>
<div>
 <br/>
 <div>Yes, the widget automatically aligns the text based on the selected language. For example, English, Hindi, Spanish, and so on are aligned from left to right. Languages like Arabic and Dhivehi are aligned from right to left.<br/> <b>Note:</b> If a text message contains both languages, the text will be aligned based on the language set in the bot at the respective step.<br/><img src="https://i.imgur.com/55dKIEv.png"/></div>
  </div>
</details>

<details>
<summary>Does the chat widget support auto-complete feature?</summary>
<div>
 <br/>
 <div>Yes, the chat widget supports auto-complete. To set up auto-complete, follow these steps:<br/>• You need to enable auto complete in [Yellow.ai Platform](https://cloud.yellow.ai) > <b>Channels</b> > <b>Chat widget</b> > <b>Settings</b> > enable <b>Auto complete</b> > click <b>Save changes</b>. For more information, click <a href="https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/web-widget#23-configure-bot-features-other-settings">here</a><br/><img src="https://i.imgur.com/268ATI6.png)" alt="drawing" width="60%"/><br/>• Navigate to <b>Studio</b> > select a flow > click on the respective <b>node</b> > click <b>Make prompt smarter</b>. For more information, click <a href="https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#4-make-prompt-smarter">here</a>.</div>
  </div>
</details>

<details>
<summary>How to disable Message feedback?</summary>
<div>
 <br/>
 <div>By default, message feedback is enabled for all bots. This helps to gather feedback on how helpful bot responses have been to the end user. It is recommended not to disable Message feedback. However, you can disable message feedback from <b>Channels</b> > <b>Chat widget</b> > disable <b>Message feedback</b> > click <b>Save changes</b>.<br/><img src="https://i.imgur.com/rtH0zGw.png)" alt="drawing" width="60%"/></div>
  </div>
</details>

<details>
<summary>How to restrict users from clicking on carousel card buttons repeatedly?</summary>
<div>
 <br/>
 <div>Go to <b>Studio</b> > Select the <b>flow</b> > Click on <b>Carousel</b> node > Click <b>Settings</b> icon > Enable <b>Disable action after click</b><br/><img src="https://i.imgur.com/gaKpuvd.png)"/></div>
  </div>
</details>

<details>
<summary>How to deploy a website bot on sites.google.com?</summary>
<div>
 <br/>
 <div>To deploy a website bot on sites.google.com, follow these steps:<br/>Navigate to the admin portal of your Google site >
Add an <b>Embed block</b> > Select <b>Embed code</b> > <b>Paste the bot script</b> > Click <b>Next</b>. <img src="https://i.imgur.com/ilmH20B.png)"/><br/>The bot will be deployed on sites.google.com.<br/><img src="https://i.imgur.com/BoxdUeu.png)"/></div>
  </div>
</details>

<details>
<summary>Is it possible to deploy a bot in multiple locations on a website or Mobile SDK?</summary>
<div>
 <br/>
 <div>For web bots, it is not possible to have two bots on the same window simultaneously. However, you can load a default bot initially, and then when a user selects a specific order in which the bot needs to be deployed, you can trigger a new bot using the following code. </div>

```
window.YellowMessengerPlugin.init({bot: '<botId>'})
```
Note that, this will replace the previously loaded bot. On Mobile SDK, if you want to maintain a separate session and history for each order, you need to pass the ymAuthToken parameter. Ensure that these approaches allow you to manage different instances of the bot, but only one bot can be active at a time.
  </div>
</details>

<details>
<summary>How long will the session be active in the chat widget?</summary>
<div>
 <br/>
 <div>The session in the chat widget will remain active for 24 hours by default. However, if needed, you have the flexibility to customize the session duration from the backend. The session duration can be adjusted within a range of 1 minute to 1440 minutes, which is equivalent to 24 hours.<br/> By configuring the session duration according to your specific requirements, you can ensure that users have an adequate amount of time to interact with the chat widget before the session expires.<br/> If you have any additional questions or need further assistance, contact our <a href="mailto:support@yellow.ai">support team</a></div>
  </div>
</details>

<details>
<summary>When you receive new messages from a bot or agent, how do you enable scroll behaviour for the chat widget?</summary>
<div>
 <br/>
 <div>Follow the below steps to enable the scroll behaviour. <br/> Navigate <b>Channels > Chat widget > Settings ></b> expand <b>General settings > Scroll behaviour</b>.<img src="https://i.imgur.com/snvUcCX.png)"/><br/>Under Scroll behavior, choose your preferred option:<br/>• <b>Bottom</b>: Select this option to scroll the widget automatically to the bottom of the new message.<br/>• <b>Top</b>: Select this option to scroll the widget automatically to the top of the new message.<br/>• <b>Off</b>: Select this option to disable scrolling, the widget will remain at the same message when a new message is received.<br/> <img src="https://i.imgur.com/zJaqyB6.png" width="50%"/></div>
  </div>
</details>

<details>
<summary>Is it possible to drag the chatbot icon and place it anywhere on the website?</summary>
<div>
 <br/>
 <div>Yes, you need to add <b>floatingIcon: true</b> in the following chat bot script to drag the chatbot icon.</div>


```
<script type="text/javascript">
      window.ymConfig = {"bot":"x1657623696077","host":"https://cloud.yellow.ai", "floatingIcon":true};
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
            }, w.YellowMessenger = i, w.attachEvent ? w.attachEvent("onload", l) : w.addEventListener("load", l, !1)}
    })();
</script>
```
 <br/>
  </div>
</details>

<details>
<summary>Is it possible to minimise the callout banner?</summary>
<div>
 <br/>
 <div>Yes, you can minimize it using the icon highlighted in the following:<br/><img src="https://i.imgur.com/YQB6TUg.png" alt="drawing" width="40%"/></div>
  </div>
</details>

<details>
<summary>How to load the callout banner dynamically in the middle of a chat?</summary>
<div>
 <br/>
 <div>A callout banner allows you to add a banner to chatbot's conversation. Before starting a chat with the user, the callout banner is shown at the top of the chat window with a description of the chatbot’s purpose. To know more, click <a href="https://docs.yellow.ai/docs/platform_concepts/studio/overview#1-access-studio">here</a>

Banners can used to alert the users about new products, services, special offers, and promotions.

If the V1 bot consists of a banner and you want to move to V2 dynamically in the middle of th chat conversation, then you need to add a function to display the same banner in V2.

While migrating from V1 to V2 use the following function code to copy the banner from V1 to V2:

```
return new Promise(async (resolve, reject) => {
    try {
        app.log(app.profile,"in profile");
        if (app.profile && app.profile.payload && app.profile.payload.widgetVersion && app.profile.payload.widgetVersion=="v2"){
            await app.sendEvent({
                code: "ui-event-update-promotion",
                data:[{
                    title: app.renderMessage('indiatour', {}, ''),
                    options: [
                        {
                            title: app.renderMessage('activate_now', {}, 'Activate Now'),
                            text: `activate channel`
                        }
                    ]
                
            },
                    {
                        title: app.renderMessage('promotion_2', {}, ''),
                        options: [
                            {
                                title: app.renderMessage('download_now', {}, 'Download Now'),
                                url: `https://watcho.onelink.me/eyNf/4plou2wu`
                            },
                        ]
                    },
                    {
                        title: app.renderMessage('promotion_3', {}, ''),
                        options: [
                            {
                                title: app.renderMessage('subscribe', {}, 'Subscribe'),
                                text: 'Subscribe'
                            }
                        ]
                    },
            ]
        })
        }
        else{
        await app.sendEvent({
            code: "ui-event-update-promotion",
            data: {
                quickReplies: [
                    {
                        title: app.renderMessage('indiatour', {}, ''),
                        options: [
                                                        {
                               title: app.renderMessage('activate_now', {}, 'Activate Now'),
                                text: `activate channel`
                            },
                        ]
                    },
                    {
                        title: app.renderMessage('promotion_2', {}, ''),
                        options: [
                            {
                                title: app.renderMessage('download_now', {}, 'Download Now'),
                                url: `https://watcho.onelink.me/eyNf/4plou2wu`
                            },
                        ]
                    },
                    {
                        title: app.renderMessage('promotion_3', {}, ''),
                        options: [
                            {
                                title: app.renderMessage('subscribe', {}, 'Subscribe'),
                                text: 'Subscribe'
                            }
                        ]
                    },
                ],
                "autoPlay": true,
                "autoPlaySpeed": "4000",
                hide: true,
                showPromotionMessage: 'Hi! I am Dia, your <strong>d</strong>2h <strong>I</strong>ntelligent <strong>A</strong>ssistant.',
                displayShowPromotionBar: true
            }
        });
        }
        return resolve();
    } catch (e) {
        app.log(e, 'error in showPromotion');
        return resolve();
    }

});
```
<img src="https://i.imgur.com/VyvR6ZD.png" alt="drawing" width="100%"/></div>

 <br/>
  </div>
</details>

-----------

## PWA related FAQs

<details>
<summary>Is it possible to change the short cut icon for PWA bot?</summary>
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
<summary>It is possible to automatically open PWA chatbot using chat widget functions?</summary>
<div>
 <br/>
 <div>No, by default PWA bot will be opened automatically.


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
 <div>• Chrome 89 and later <br/>• Edge 89 and later <br/>• Firefox 70 and later <br/>• Safari 10.1 and later
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




