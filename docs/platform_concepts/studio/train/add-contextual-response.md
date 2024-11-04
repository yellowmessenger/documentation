---
title : Context Management
sidebar_label : Contextual Responses
---


Adding contextual responses involves providing additional context as a response to a specific prompt.

Here's an example:

* AI-agent: Can you share your email with me?
* User: Sure, gooduser@email.com (Expected response)
* User: What is an email? Or Why do you need my email? (Received response)

In this scenario, the user asks a question about emails instead of directly providing their email address. To handle these types of contextual intents, contextual responses can be employed to provide appropriate information or address the user's query.

## Add contextual responses

To add contextual response, follow these steps:

1. Go to **Automation** > **Train** > **Context management**.

    ![](https://imgur.com/1hrVJSC.png)

2. For existing intents, click **Set default response** to set a default response to that intent.

    ![](https://imgur.com/aLQ9uLE.png)

3. Choose a type of default message and add the respective info.

   <img src="https://imgur.com/3XaeEwZ.png" alt="drawing" width="40%"/>

4. To add more utterances to that intent, click **Edit**, add the utterance and click **Add**.

   ![](https://i.imgur.com/b4CPnxK.png)

5. To add new intents and contextual responses, click **+ Add contextual intents**.

    ![](https://imgur.com/jDv0yXT.png)

6. Enter **Intent name**, **Utterances** that synonymous with the intent.
7. To add another uttrancs, click **Add another uttrance**. Similarly, you can add multiple utterances.
8. Click **Add**. 

      <img src="https://imgur.com/eNI0Vc9.png" alt="drawing" width="50%"/>
      
9. Click **Train responses** to train the AI-agent on the added intents and responses.

    ![](https://imgur.com/f0KK4h0.png)
        
## Bulk upload and download of contextual responses

### Import contextual responses

You can upload bulk responses only in CSV file format. 

To upload contextual responses in bulk into your system:

1. Create a CSV file with two columns - *intent* as the first column header and *utterance* as the second column header.
2. Go to **Bulk manage > Import > Upload file**.

   ![](https://imgur.com/w46nlPL.png)
  

2. Click **Upload file** and pick the file that you have created.

   ![](https://imgur.com/iPIU3Ze.png)


### Download contextual responses

To download contextual responses in bulk:

1. Go to **Bulk manage > Export**.

   ![](https://imgur.com/rhJPbmq.png)

* All the contextual responses will be downloaded to your system as a CSV file.
