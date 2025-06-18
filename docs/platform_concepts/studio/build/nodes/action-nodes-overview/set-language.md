---
title: Set language node
sidebar_label: Set language
---

Set Language node allows you to interact with the bot in your preferred language at any point during the conversation. This node facilitates communication in [different languages](https://docs.yellow.ai/docs/platform_concepts/studio/build/localization#add-supported-languages-to-your-bot) by switching the bot's responses based on ISO language codes (for example, "en" for English or "es" for Spanish). By providing the appropriate ISO language code, the bot can seamlessly change its responses to match the user's selected language.

You can use the Set Language node when you want to:
   * **Communicate with users in their preferred language**: This ensures that users receive responses in the language they are most comfortable with.
   * **Support multi-region businesses**: For companies operating in multiple regions, this node allows the bot to switch languages based on user input or location, without requiring separate bots for each language.
   
**Use case**

* **Multilingual customer support**: For an e-commerce company with users in different coutries like Spain, France, and Germany, a customer support bot can enhance user experience by communicating in their preferred languages

**Configure Set language node**

Let's say you want to build a flow that asks for user's preferred language to continue the conversation.

To configure set language node, follow these steps:

1. Drag and drop the Set language node in the flow editor.
  
2. [Add the preferred languages](https://docs.yellow.ai/docs/platform_concepts/studio/build/localization#set-your-preferred-language-during-bot-conversations) to your bot.

3. Go to the flow and include a [Quick reply node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes1/quick-replies). Create different buttons for different languages and assign the ISO code as button values to the respective language option.

4. Store the response of the Quick Reply node in a variable.

5. Include the **Set language node** and choose the variable created in the previous step. Refer to the following gif to see how it works.

   ![](https://i.imgur.com/bWZvZ8c.gif)
   