---
title : Context Management
sidebar_label : Contextual Responses
---


Adding contextual responses involves providing additional context as a response to a specific prompt.

Here's an example:

* Bot: Can you share your email with me?
* User: Sure, gooduser@email.com (Expected response)
* User: What is an email? Or Why do you need my email? (Received response)

In this scenario, the user asks a question about emails instead of directly providing their email address. To handle these types of contextual intents, contextual responses can be employed to provide appropriate information or address the user's query.

## Add contextual responses

By establishing standardized contextual responses for all prompts across various user journeys in the bot, users will receive a response when they ask questions starting with words like Why, What, How, and so on, regardless of the specific prompt.

1. Go to **Automation** > **Train** > **Context Management**.

 ![](https://i.imgur.com/UhnjgWg.png)

2. For existing intents, click **Set default response** to set a default response to that intent.

 ![](https://i.imgur.com/29PQjc0.png)

3. Choose a type of default message and add the respective info.

<img src="https://i.imgur.com/fmKF1v0.png" alt="drawing" width="40%"/>

4. To add more utterances to that intent, click **Edit**, add the utterance and click **Add**.

 ![](https://i.imgur.com/b4CPnxK.png)

5. To add new intents and contextual responses, click **+ Add contextual intents**.

 ![](https://i.imgur.com/fbEI1Uh.png)

6. In **Intent name**, enter the name of the intent.
7. In **Utterances**,  add the different phrases that synonymous with the intent and click **Add**.
8. Click **Train responses** to train the bot on the added intents and responses.

## Bulk upload and download of contextual responses

### Bulk upload

To upload contextual responses in bulk into your system go to **Bulk manage > Import > Upload file**.

 ![](https://i.imgur.com/klbhfeE.png)

**Sample file**

 <img src="https://i.imgur.com/0rw3qLK.png" alt="drawing" width="40%"/>


### Bulk download

To download contextual responses in bulk, go to **Bulk manage > Export**.

![](https://i.imgur.com/hUoeWvQ.png)

All the contextual responses will be downloaded to your system as a CSV file.
