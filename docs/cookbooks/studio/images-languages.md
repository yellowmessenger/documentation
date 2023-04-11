---
title : How to display images based on different languages?
sidebar_label : Display images for different languages
---

1. Click the **Language** button on the left tile and add the preferred languages. 

<img src="https://i.imgur.com/SdsOthh.png" alt="drawing" width="60%"/>


2. Create a [global variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#21-custom-variables) for language.

<img src="https://i.imgur.com/CYsussz.png" alt="drawing" width="80%"/>


3. Add a [variable node](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#-1-variables), in **Name** include the global variable and in **Value** enter one of the preferred [language codes](https://docs.yellow.ai/docs/platform_concepts/studio/languages-supported#1-languages-supported).

![](https://i.imgur.com/P575QBh.png)


4. Add [Set Language node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#31-set-language) and add the global variable here.

![](https://i.imgur.com/yxqWbNh.png)

5. Add an [image node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#2-image) and add an image to it. This image will be mapped to the language code you entered in step 3.

![](https://i.imgur.com/xBhEte4.png)


4. Click the **Language** button on the left tile again, and select the language you want to update. Navigate to the image node, and change the current image with the corresponding image for the selected language. Repeat this step for all the languages.

![](https://i.imgur.com/ap27ou3.png)


5. Whenever you set a language code in the variable node, the respective image will be displayed in the bot.

![](https://i.imgur.com/GA7xqdP.gif)

