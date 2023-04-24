---
title : Create personalised conversations using user properties
sidebar_label : Personalise conversations with user properties
---

Through the [Bot Builder](https://docs.yellow.ai/docs/platform_concepts/studio/overview), you can create personalized conversations using user data. This data can include user details, event information, preferences, and more. For example, you can address users by name during the conversation and send personalized messages based on their preferences. 

You can access user properties through any of the Prompt and Message nodes.


To use user properties in bot conversations:

1. In bot Builder, open any of the **Prompt** or **Message** nodes where you want to use the property value.
2. When adding a message, place the cursor where you want to add a property value.
3. Click on the variable icon and choose the variable you want to insert under **User properties**. You will see the variable in `{{{` as highlighted in the following screenshot. You can also add it manually using the syntax `{{{user.<propertyName>}}}`.

<center><img src="https://i.imgur.com/5eUybuX.png" width="70%"/></center>