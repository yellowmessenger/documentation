---
title: Localization
sidebar_label: Localization
---


Localization is used to provide multilingual support by manual translation for the bots when the user decides to switch the bot-language. 

This also allows easy shifting of bot to include more languages without much effort imposed on a bot developer. Businesses can simply go to Localization screen and add (import) translations / autotranslate after adding languages themselves. This feature is created to enable easy visibility & decision making in multilingual bots.

For example: 
Bot is configured to display a welcome message - **Hello, welcome to India :)**
If the user prefers to converse in Hindi, the word **Hello** can be translated with a personal touch like how a native hindi speaker would speak - **Namaskar**.
Similarly, for tamil, the word **Hello** can be translated to - **Wanakam**. 
Few translations that could provide a human touch can be configured using the localization feature. 

This document discusses the following topics: 

1. How to configure multilingual messages
    * Using Bulk Manage
    * Using Code
3. How to configure nodes to provide multilingual support 


## 1. Localization 

On this page, you can configure your messages in multiple languages. 
Follow the given steps: 

1. Open Studio > Localization. 
2. Click **+Add Key**.

![](https://i.imgur.com/WTzQQDm.png)

3. Enter **Key**, which will be used as a keyword which will simply switching the language. 
4. **Description** is optional. 
5. Add the translated lines in the required languages.
 
![](https://i.imgur.com/1VMLDCm.png)

6. Scroll down, click **Update**. Manual configuration is done. 

![](https://i.imgur.com/nXctsoC.jpg)

7. You can add multiple keys and lines as per your requirement. 

### 1.1 Bulk Manage 

In the previous step we manually added the keys one by one. Manual translations would take an immense amount of effort to add translations for each node.
Using Bulk Manage, we can upload all the keys at a time.

Follow the steps below: 

1. Click **Bulk Manage** > **Import**.

![](https://i.imgur.com/HZdBe1z.png)

> **Bulk Manage** > **Export** is used to download the existing data that is available.

2.  Create a CSV file with mandatory columns: **name** (key), **english_text**. This can be followed by the other configured languages (columns) like **hindi_text**, **kannada_text**, **tamil_text**, etc.

4. Click **Upload File**. Select the CSV file from your local system to import the keys. Click **Import**. 

![](https://i.imgur.com/LzuohyH.png)


### 1.2 Using Code

Localization can also be configured via code (from the [code](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) tab).
Use the following code in your function to get text message from code **app.renderMessage('code-goes-here', {}, 'default message')**

* Click +Add Code. Add the above line in code along with the default message in the required language.

![](https://i.imgur.com/ccojeyK.jpg)


## 2. Configure Nodes

Nodes must be configured in order to switch to the required language when required. 
Follow the steps below: 

1. On each of the node there is a localization icon available (in the text field). Click on the icon. 

![](https://i.imgur.com/Bzlt66X.png)

2. Select the Key configured for that text translation (or, add new translations as you create each node). 

![](https://i.imgur.com/wmSwZYu.png)

### Example

> Bot is configured to switch the languages automatically using ISO codes (en- English, hi- Hindi). 
> Text node is set to 'Welcome' localization key. Irrespective of what the text gets translated to, the bot displayes the phrases that are configured manually. 



![](https://i.imgur.com/jBv9ih6.png)
