---
title: Speech-to-Text
sidebar_label: Speech-to-Text
---

The Speech-to-Text feature (SST) in the chat widget enables the conversion of spoken words into text. This allows the chatbot to recognize the spoken language of the user and respond to their queries in the form of text. 

STT helps users save time by eliminating the need to type their messages. Based on the user's spoken words, the chatbot can accurately interpret the user's intent, which is often more accurate than interpreting intent from text-based messages.

STT is a paid feature. You need to upgrade to enterprise subscription to access this feature. To enable STT for your chatbots, contact [support](mailto:support@yellow.ai).

:::note
* STT feature is supported only for the chat widget. It is not supported for PWA or mobile SDK.
* TTS currently supports Arabic (Saudi), Arabic (UAE), Bengali, English (India, Australia, Canada, United Kingdom, Ireland, and United States), French, Gujarati, Hindi, Indonesia, Kannada, Marathi, Malayalam, Malay (Malaysia), Tamil, Telugu, Urdu (Pakistan), and Vietnamese.
:::

## Enable STT in your chatbot

To Enable STT in your chatbot, follow these steps:

1. On the module switcher, click **Channels**.

    ![](https://i.imgur.com/UuFZ2eR.png)

2. Click on **Chat widget**.

    ![](https://i.imgur.com/1KzP77W.png)
	
3. Navigate to the **Settings** tab and expand the **Speech & Dictation** drop-down.
  
    <img src="https://i.imgur.com/Fo2sgOa.png)" alt="drawing" width="70%"/>

4. Enable **Speech to text** option. If you wish to automatically send the spoken text without clicking on the send button, you can enable the **Auto send** option and click **Save changes**.  

    <img src="https://i.imgur.com/JRE5ejK.png)" alt="drawing" width="70%"/>

5. Navigate to **Deploy** > **Web** > **Experience on a Website**.

     <img src="https://i.imgur.com/r3eNUCT.png" width="70%"/>

6. To provide your input via spoken words to the chatbot, click the **Mic** button and grant the system to use your microphone by clicking the **Allow** button.

   ![](https://i.imgur.com/QqZmWmV.png)

7. Once you start speaking, the chatbot can understand your words and automatically start converting them to text messages.

   ![](https://i.imgur.com/QSvEtDx.png)
   
:::note
* The Mic button is displayed in the input bar when STT option is enabled. It is turned off by default. 
* Enabling the Auto Send option allows translated messages to be sent automatically after 3 seconds once the user stops speaking. Otherwise, users need to click on the Send button to send the translated message. 
:::