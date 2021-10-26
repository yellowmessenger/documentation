---
id: multilingual
title: Setup a multilingual bot
description: All steps to create, manage a multilingual bot.
featured: true
rank: 
---

1. Add languages under the configure section
Go to the Configure section at the bottom left and add languages, we support over 105 languages as mentioned over [here](https://docs.yellow.ai/docs/platform_concepts/studio/languages-supported). 

Don't forget to press the save button before switching the tab.

![](https://i.imgur.com/ttY156K.png)


2. Filter option for language for all available nodes

![](https://i.imgur.com/ol1zXSw.png)

3. Enable auto-detect language under tools, the bot will detect users language and automatically change to the respective language. 

![](https://i.imgur.com/8e7Uk4F.png)


4. Using the 'set language' node, create change language journey

Ask user about their preferred language via the quick reply node, can add languages as the buttons.

![](https://i.imgur.com/Hm92IUM.png)

For every button under the button settings, add the ISO codes for the various languges. 
![](https://i.imgur.com/mpMZKsH.png)

Pass language from the quick replies to the set language node from the earlier quick reply node. 
![](https://i.imgur.com/DcGskqK.png)

5. Adding FAQs in other languages
Can select the language filter available in FAQs section on the top right. Or bulk manage also allows FAQ answers upload in multiple languages. 

6. Training the bot in other languages
It is not necessary but you can train your bot in multiple languages. 
