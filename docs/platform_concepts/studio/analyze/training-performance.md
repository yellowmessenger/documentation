---
title: Training Performance
sidebar_label : Training Performance
---


Training performance refers to how well the chatbot has been trained to understand and respond to user input in a conversational context. It is typically evaluated by testing the bot's ability to generate accurate and relevant responses to a set of input that it has not seen before. 

To access this option, go to **Studio** > **Analysis** > **Training Performance**.

![](https://i.imgur.com/o0Ap5Qy.png)


## 1. Filter messages 

 The **Filters** section lets you set the criteria based on which the utterances should be displayed.

![](https://i.imgur.com/wAfXdlT.png)


* **Date**

 Utterances that fall under this date range will be displayed. 

* **Confidence range**

 Confidence range is the % value based on the accuracy of the predicted Intent. Confidence score lies between 0 and 1. If the **Confidence Range** is 1, all the messages would be displayed, if it is .85, only the unidentified utterances would be displayed.

* **Small talk**

 [Small talk](https://docs.yellow.ai/docs/platform_concepts/studio/train/smalltalk) responds to casual conversations with the users. Enable **Hide out of domain** to avoid displaying messages that doesn't mean anything.

 Once you have set the filters, click the **Apply filter** button at the bottom to apply the changes. To reset these filters, click the **Reset filters** button.

![](https://i.imgur.com/VC2ymlk.png)

## 2. Map unidentified utterances

 Messages display the unidentified utterances of the bot. If the filters are set, messages will be displayed based on that. Click on a message to see the entire conversation in which it was used. 

![](https://i.imgur.com/O76PAFF.png)

 You can map these utterances to intents by clicking the dropdown right next to them.

![](https://i.imgur.com/qU8xhLY.png)


