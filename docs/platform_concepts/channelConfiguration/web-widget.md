---
title: Setup Web Widget
sidebar_label : Web Widget
---

### Change the color schema of the bot? 

Creativity is intelligence having fun. Better color combinations and effective aesthetics can be a cherry on the cake, so we should make sure that these features, the color can be matched with the clients websites and a standard template can be followed for all chatbots.  

1. Go to Channels tab on the top and go to `Chat widget` > `DESIGN`.

![](https://i.imgur.com/DYx8tl9.png)

2. Under `DESIGN` you can find two fields:

    1. Primary color: This color will be used in the header of the chat widget.

    2. Secondary color: This color will be used for other components of your bot like chat.

3. Click on paint icon of any of these fields to change the color. You'll be shown a pop to select color. Move the bubble to select color accoriding to your preference.
![](https://i.imgur.com/3Xkb6uE.png)

Just one more thing, don’t forget to 'Save your Settings' and your beautiful bot is good to go! 🙂 

---------------------------------------

### How to move the bot/ chat-widget position on the website? 
**Keywords** : #position, #chatWidget #bot_position

1. Get the bot Publish Script from the platform, go to Channels > Web > Publish Bot as shown below.

![how to make changes in UI](https://cdn.yellowmessenger.com/tbSdSoixtpRE1615525095922.png)

2. In the same code, near bot ID add the following - 

`{ bot: 'YOUR BOT ID',alignLeft: true }`

The final code would look something like - 

```js
<script type="text/javascript">
    window.ymConfig = { bot: 'YOUR BOT ID',alignLeft: true };  (function () {var w=window,ic=w.YellowMessenger;if("function"===typeof ic)ic("reattach_activator"),ic("update",ymConfig);else{var d=document,i=function(){i.c(arguments)};function l(){var e=d.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://app.yellowmessenger.com/widget/main.js";var t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}i.q=[],i.c=function(e){i.q.push(e)},w.YellowMessenger=i,w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})();
</script>
```