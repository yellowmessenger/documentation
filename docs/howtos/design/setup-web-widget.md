---
title: Setup Web Widget
sidebar_label : Setup Web Widget
---

### Change the name,title, sub-title, description of the bot? 

🤓 Trick : If you want to see live preview of the changes you’re making then go to your bot journeys, click on ‘Test your bot' on top right. And click on Bot Direct Link as shown here -

![how to make changes in UI](https://cdn.yellowmessenger.com/rQM5oNKoG2z51615524932605.gif)

You can also upload a new bot icon here. 

---------------------------------------

### Change the color schema and design of the bot? 

Creativity is intelligence having fun. Better color combinations and effective aesthetics can be a cherry on the cake, so we should make sure that these features, the color, font, etc can be matched with the clients websites and a standard template can be followed for all chatbots.  

`Step 1` : Access Chat Widget here - Go to app.yellowmessenger.com -> Login with YM credentials -> Open a bot -> Go to configurations tab on the left -> Go to Channels at the top -> Click on the first tile there i.e. Chat Widget as show here.

`Step 2` : Under Chat-Widget, you will see the following sections inAppearances and Settings. 

1. Basic 

2. Advance

3. General 

4. Publish your bot : Use the code snippet provided there, add it to the bottom of the ‘body’ tag. This should be shared with the client and can be added to their index.html page. 

![how to make changes in UI](https://cdn.yellowmessenger.com/kxTFANomBNWp1615525003534.png)

`Step 3` : As highlighted here in the below image. We have default theme selected now, we can change the settings in the four tabs and save it as a theme.   
![how to make changes in UI](https://cdn.yellowmessenger.com/qf09uxpvvDlS1615525022946.png)

Just one more thing, don’t forget to 'Save your Settings' and your beautiful bot is good to go! 🙂 

---------------------------------------


### How to publish a bot? 
**Keywords** : #publish, #push_bot, #take_bot_live

`Step 1` : Move bot from sandbox from staging environment. Click on the publish button at the top right of the . 

*Note* : 
1. The first push can only be done by the super admin of the bot.
2. Check the following before pushing the bot :
   1. Bot is trained
   2. Bot is tested to be moved to the further environment.  


---------------------------------------

### How to move the bot/ chat-widget position on the website? 
**Keywords** : #position, #chatWidget #bot_position

`Step 1` : Get the bot Publish Script from the platform, go to Channels > Web > Publish Bot as shown below - 
![how to make changes in UI](https://cdn.yellowmessenger.com/tbSdSoixtpRE1615525095922.png)

`Step 1` : In the same code, near bot ID add the following - 

`{ bot: 'YOUR BOT ID',alignLeft: true }`

The final code would look something like - 

```<script type="text/javascript">
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