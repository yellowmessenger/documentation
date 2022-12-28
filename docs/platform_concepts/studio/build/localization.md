---
title: Translation
sidebar_label: Language translation
---

In this article, you will learn:

1. [How to configure multilingual messages](#1)
	* [Using bulk manage](#11)
	* [Using code](#12)
2. [How to configure nodes to provide multilingual support](#2)
3. [Advance options in Translation](#3)

  

---

## <a name="1"></a> 1. Translation

  

Translation is used to provide multilingual support by manual translation for the bots when the user decides to switch the bot language.
This also allows easy shifting of the bot to include more languages without much effort imposed on a bot developer. Businesses can simply go to the Translation screen and add (import) translations/auto-translate after adding languages themselves. This feature is created to enable easy visibility & decision-making in multilingual bots.

**Use Case**

The bot is configured to display a welcome message - **Greetings, welcome to India :)**
If the user prefers to converse in Hindi, the word **Greetings** can be translated with a personal touch like how a native Hindi speaker would speak - **Namaskar**.
Similarly, for Tamil, the word **Greetings** can be translated to - **Wanakam**.
Few translations that could provide a human touch can be configured using the Translation feature.

---

On the translations page, you can configure your messages in multiple languages. To add translations, follow the given steps:

  

1. Open **Studio** > **Translation**.
2. Click **+Add Key**.

![](https://i.imgur.com/haQzRRa.png)

  

3. Enter **Key**, which will be used as a keyword that will switch the language.
4.  **Description** is optional.
5. Add the translated lines in the required languages.

![](https://i.imgur.com/04wtZLQ.jpg)

  

6. Scroll down, and click **Add**. This will complete the manual configuration.
7. You can add multiple keys and lines as per your requirement.

  

### <a name="11"></a> 1.1 Add multiple translations at once

In the previous section, you learnt how keys can be added manually one after the other. Manual translations take immense effort to add translations for each node. Using **Bulk Manage**, you can upload all the keys at a time.

To import/export translations in bulk, follow the steps below:

1. Click **Bulk Manage** > **Import**.

![](https://i.imgur.com/6GhFAom.png)

>  **Bulk Manage** > **Export** is used to download the existing data that is available.

2. Create a CSV file with mandatory columns: **name** (key), **english_text**. This can be followed by the other configured languages (columns) like **hindi_text**, **kannada_text**, **tamil_text**, etc.
3. Click **Upload File**. Select the CSV file from your local system to import the keys. Click **Import**. 

<img  src="https://i.imgur.com/BIj6OLQ.png"  alt="drawing"  width="70%"/>


### <a name="12"></a> 1.2 Add translations using code

Translation can also be configured via code (from the [function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) tab).

Use the following code in your function to get a text message from the code 
```app.renderMessage('code-goes-here', {}, 'default message')```

  
1. Click **+Add Code**. Add the above line in the code along with the default message in the required language.
![](https://i.imgur.com/VCQyjt8.jpg)

---

## <a name="2"></a> 2. Configure nodes

Nodes must be configured to use the translation feature and switch to the required language when needed. To configure translations in nodes, follow the steps below:

1. On each node, there is a Translation icon available (in the text field). Click on the icon.

![](https://i.imgur.com/Bzlt66X.png)

2. Select the **Key** that is already configured for that text translation (or, add new translations as you create each node).

![](https://i.imgur.com/wmSwZYu.png)


**Example**
> Bot is configured to switch the languages automatically using ISO codes (en- English, hi- Hindi).
> Text node is set to 'Welcome' Translation key. Irrespective of what the text gets translated to, the bot displays the phrases that are configured manually.

![](https://i.imgur.com/anvjusp.jpg)

  

---

  

## <a name="3"></a> 3. Advanced options

  

### 3.1 Using variables in translation

Variables can be a part of the Translation messages with the help of the **Fetch from** field available in the nodes.
Consider a use-case **without**  **Translation**: Variables are accessed directly on the **Bot says** field using {{{variables.name}}}.

![](https://i.imgur.com/yLteeOz.png)

  

**With Translation**, this node can be configured by following the given steps:

1. Select the localization key on the node.
2. Select the variable in the **Fetch from** field which must be displayed with the Translation text.

![](https://i.imgur.com/IjmOSrM.png)

:::note
- Variable values will not change. Suppose a name is entered in English, it will not get translated to any other language throughout the flow.
- Only variables of the datatype string can be used in the Translation text. To learn about the variable datatypes stored in each node, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables).
:::

3. Add params in the message (**Studio** > **Build** > **Translation**).
	- Example: ```{{{variable.<var_name>}}}```

  

![](https://i.imgur.com/f0Y4mFa.png)


4. Variables can also be added to translations through code.
	-  On the functions screen, click **+Add new function** and enter the required code for translation using variables.
	 ![](https://i.imgur.com/QoqUT9C.png)

	- In the flow, add a [function](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#function) action node. Select a function name from the dropdown. **Store response in** a variable.
	<img  src="https://i.imgur.com/D6fiGHo.png"  alt="drawing"  width="80%"/>

	- In the further node, select the variable name at **Fetch from** (for which the variable> function is configured via code).
	<img  src="https://i.imgur.com/LQUae5f.png"  alt="drawing"  width="80%"/>

----

  

**What Next?**

  

* Add translations to the [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes) and see how it impacts the bot conversation.