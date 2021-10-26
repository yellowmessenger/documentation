---
title: Setup Web Widget
sidebar_label : Web Widget
---

### Change the name,icon, description of the bot? 

Go to `Configure` tab from the left sidebar. Here you can change the Name, Industry, Description as well as Icon of the bot.

![Bot Configurations](https://cdn.yellowmessenger.com/Qx2DI0mwl0SS1615900904627.png)

---------------------------------------

### Change the color schema and design of the bot? 

Creativity is intelligence having fun. Better color combinations and effective aesthetics can be a cherry on the cake, so we should make sure that these features, the color, font, etc can be matched with the clients websites and a standard template can be followed for all chatbots.  

1. Go to Channels tab tab on the left -> from the top select `Web`.

![](https://cdn.yellowmessenger.com/w36vn4XsT1Ue1615901155155.png)

2. Under Web Widget, you will see the following tiles. 

    1. Bot Icon & animations

    2. Background

    3. Buttons

    4. Chat

    5. Font

    6. Header

    7. Publish your bot : Use the code snippet provided there, add it to the bottom of the ‘body’ tag. This should be shared with the client and can be added to their index.html page. 


3. As highlighted here in the below image. We have default theme selected now, we can change the settings in these 6 tabs and save it as a theme.

![Theme](https://cdn.yellowmessenger.com/91UzPsCpQlf91615901289359.png)

For example, to create a dark theme in your bot first you need to create a new theme. Click on the `Create theme` button to create a new theme. 

Go to `Background` tile and change the `Background color` and `Title background color`. On the left side, you can also see the changes in the bot appearence. 

![](https://cdn.yellowmessenger.com/m2mrtl9jkDCB1615901355555.png)

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

---------------------------------------

### How to change the font of a bot? 
Good fonts means 5 more marks for good handwriting! Haha! Let's see how we can change the font of the bot. 
This document will help in changing font for PWA/ Website Bots. 

**Keywords** : #fonts, #chatWidget #botUI 
**References** : [Google Fonts](https://fonts.google.com/)

`Step 1` : Browse through the [Google fonts](https://fonts.google.com/)link and choose your favorite style.   

![select](https://cdn.yellowmessenger.com/6qBJm6XADFgl1615525148325.png)


`Step 2` : Select a style, get the URL. URL would look something like this - [Google Fonts](https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap)

`Step 3` : Open this link in a different tab and get the *.woff2* link from there. 
![select](https://cdn.yellowmessenger.com/hkNILl8iCOUh1615525202345.png)

`Step 4` : Now add this link to the Channels > Web > Font > Advanced > Custom Font URL 
![select](https://cdn.yellowmessenger.com/WKmKF2h3N0u61615525230595.png)