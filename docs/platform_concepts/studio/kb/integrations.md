---
title: Integrations in KB
sidebar_label: Integrations
---

You can upload documents from third-party applications. We offer integrations with AWS S3 and Sharepoint for now.

## AWS S3 integration

To integrate with AWS S3:

1. Go to **Upload documents** > **AWS S3**.

![](https://i.imgur.com/aZp5qQZ.png)

2. Fill in the fields and click **Sync folders** select the folder from the chosen bucket to sync with.

![](https://i.imgur.com/qvdNJSB.png)

3. Click **Upload**.

## Sharepoint integration

To integrate with Sharepoint:

1. Go to **Upload documents** > **Sharepoint**.

![](https://i.imgur.com/hRzbwGI.png)

2. Fill in the fields and select the folder from the chosen bucket to sync with.

![](https://i.imgur.com/jX6iB57.png)

3. Click **Upload**.

## Other actions on uploaded documents

![](https://i.imgur.com/h3WIDiv.png)

1. **Edit tags:** Add tags to identify/categorize certain docs.
2. **Edit properties:** (require KT)
3. **Preview:** Preview the document.
4. **Delete:** Delete the document.

## Using KB in node

To optimize the usage of KB, you can use the **Document search** node and leverage tags created in the tags section. For more information on using this node, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#14-document-search).

## Acronym

In the **Acronym** section, you can enter common phrases for specific terms. This helps the bot understand and fetch accurate results from the documentation, even when users use abbreviations. 

For example, **Whatsapp** is also known as **WA**. So if a user types WA, the bot understands it refers to Whatsapp and displays relevant documents.

To add an acronym:

1. Go to **Studio** > **KB** > **Acronym** > **+ Add new acronyms**.

![](https://i.imgur.com/NjHhs90.png)

2. In **Acronym name** enter the name of the specific term and in **Acronyms** enter the commonly used utterances for that term.


   <img src="https://i.imgur.com/eZuSYgD.png" alt="drawing" width="50%"/>

3. Click **Add list item**.