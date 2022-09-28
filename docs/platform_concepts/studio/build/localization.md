---
title: Translation
sidebar_label: Language localisation
---


In this article, you will learn: 

1. [How to configure multilingual messages](#1)
    * [Using Bulk Manage](#11)
    * [Using Code](#12)
2. [How to configure nodes to provide multilingual support](#2)  
3. [Advance options in Translation](#3) 

---

## <a name="1"></a>  1. Translation 

Translation is used to provide multilingual support by manual translation for the bots when the user decides to switch the bot-language. 

This also allows easy shifting of the bot to include more languages without much effort imposed on a bot developer. Businesses can simply go to Translation screen and add (import) translations / auto translate after adding languages themselves. This feature is created to enable easy visibility & decision making in multilingual bots.

**Use Case**

Bot is configured to display a welcome message - **Hello, welcome to India :)**
If the user prefers to converse in Hindi, the word **Hello** can be translated with a personal touch like how a native Hindi speaker would speak - **Namaskar**.
Similarly, for Tamil, the word **Hello** can be translated to - **Wanakam**. 
Few translations that could provide a human touch can be configured using the Translation feature. 

---

On this page, you can configure your messages in multiple languages. 
To add translatins, follow the given steps: 

1. Open **Studio** > **Translation**. 
2. Click **+Add Key**.

![](https://i.imgur.com/haQzRRa.png)

3. Enter **Key**, which will be used as a keyword which will switch the language. 
4. **Description** is optional. 
5. Add the translated lines in the required languages.
 
![](https://i.imgur.com/04wtZLQ.jpg)

6. Scroll down, and click **Add**. Manual configuration is completed. 
7. You can add multiple keys and lines as per your requirement. 

### <a name="11"></a> 1.1 Bulk Manage 

In the previous section, keys were added manually one by one. Manual translations take an immense amount of effort to add translations for each node.
Using Bulk Manage, you can upload all the keys at a time.

To import/export translations in bulk, follow the steps below: 

1. Click **Bulk Manage** > **Import**.

![](https://i.imgur.com/6GhFAom.png)

> **Bulk Manage** > **Export** is used to download the existing data that is available.

2.  Create a CSV file with mandatory columns: **name** (key), **english_text**. This can be followed by the other configured languages (columns) like **hindi_text**, **kannada_text**, **tamil_text**, etc.

4. Click **Upload File**. Select the CSV file from your local system to import the keys. Click **Import**. 

![](https://i.imgur.com/BIj6OLQ.png)


### <a name="12"></a> 1.2 Using Code

Translation can also be configured via code (from the [function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) tab).
Use the following code in your function to get text message from code **app.renderMessage('code-goes-here', {}, 'default message')**

* Click **+Add Code**. Add the above line in the code along with the default message in the required language.

![](https://i.imgur.com/VCQyjt8.jpg)

---

## <a name="2"></a> 2. Configure Nodes

Nodes must be configured in order to switch to the required language when required. 
To configure translations in nodes, follow the steps below: 

1. On each of the nodes there is a Translation icon available (in the text field). Click on the icon. 

![](https://i.imgur.com/Bzlt66X.png)

2. Select the **Key** configured for that text translation (or, add new translations as you create each node). 

![](https://i.imgur.com/wmSwZYu.png)

**Example**

> Bot is configured to switch the languages automatically using ISO codes (en- English, hi- Hindi). 
> Text node is set to 'Welcome' Translation key. Irrespective of what the text gets translated to, the bot displays the phrases that are configured manually. 



![](https://i.imgur.com/anvjusp.jpg)

---

## <a name="3"></a> 3. Advanced options 

### 3.1 Variable in Translation 

With this feature, variables can be a part of the Translation messages with the help of '**Fetch from**' field available in the nodes. 

Consider a use-case **without** **Translation**: Variables are accessed directly on the **Boy says** field using {{{variables.name}}}.

![](https://i.imgur.com/yLteeOz.png)

**With Translation**, this node can be configured by following the given steps:

1. Select the localisation key on the node. 
2. Select the variable in the **Fetch from** field which must be displayed with the Translation text. 

![](https://i.imgur.com/IjmOSrM.png)


:::note
 Only variables of the datatype string can be used in the Translation text. To learn about the variable datatypes stored in each node, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables).
:::

3. Add params in the message (**Studio** > **Build** > **Translation**). 
Example- {{{variable.<var_name>}}}.

![](https://i.imgur.com/f0Y4mFa.png)



:::note
Variable values will not change. Suppose a name is entered in English, it will not get translated to any other language through-out the flow.
:::

4. This can also be accessed through code. 

- **+Add new function** in code. 
- Enter the required code. 

![](https://i.imgur.com/QoqUT9C.png)

- In the flow, add a [function](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#function) action node. 

![](https://i.imgur.com/D6fiGHo.png)

- Select a function name from the dropdown. **Store response in** a variable. 
- In the further node, select the variable name at **Fetch from** (for which the variable> function is configured via code). 

![](https://i.imgur.com/LQUae5f.png)


----

**What Next?**

* Add translations to the [nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes) and see how it impacts the bot conversation. 