---
title: Localisation
sidebar_label : Localisation
---

### How to add a messages to localisation/ rendermsg? 

**Keywords** : localisation

`Step 1` : To Get Started, Click on Localization Tab

`Step 2` :Now add a unique code for this message, and type in a message English(default) .Then Click on “Add Message” and then Click on “Save Settings”

`Step 3` :Now, on the top right corner, select the language for which you want to configure the message in, an Example has been given below.

`Step 4` :Lastly, corresponding to the code , add the message in the configured language field,then click the “Save Settings” button to save changes.


#### SYNTAX:-
Here is the syntax illustrated below:-
app.renderMessage(`code-goes-here`,{input parameters as object(Only if data is passes),”fallback-message”(optional, necessary if i18n:false}) 
USAGE:-
Here is an example illustrated for you:-
```
app.sendTextMessage(app.renderMessage(“new-code”,{},”fall_back_message(if any)”)
app.sendTextMessage(app.renderMessage(“new-code”))
app.sendTexMessage(app.renderMessage("ca-number"),{ca : ca_number},"Here are the details for your CA Number: {{ca_number}}")
```

![how to make changes](https://cdn.yellowmessenger.com/932afKuEBx0C1615524884040.gif)