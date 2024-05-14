---
title: Configure multiple themes on Web and Mobile SDKs
sidebar_label: Configure themes on Web and Mobile SDKs
---

You have the option to set a default theme and customize various themes for different pages on your website or mobile app. The configuration includes:
* Bot name
* Primary color
* Secondary color
* Bot icon
* Bot description
* Bot click icon

To implement this on the web, pass the following values inside window.ymConfig in the bot script:

```javascript
theme:{
botName:" ", //Text upto 50 characters
botDesc:" ", //Text upto 50 characters
primaryColor:" ", //RGB or HEX value
secondaryColor:" ", //RGB or HEX value
botBubbleBackgroundColor:" ", //RGB or HEX value
botIcon:" ", //CDN link
botClickIcon:" " //CDN link
}
```

For mobile SDK, send the values as mentioned below:

```c
let theme = YMTheme()
theme.botName = " "
theme.botDesc = " "
theme.primaryColor = " "
theme.secondaryColor = " "
theme.botIcon: " "
config.theme = theme
```