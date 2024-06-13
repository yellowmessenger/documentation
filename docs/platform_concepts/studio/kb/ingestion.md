---
title: Data ingestion into Knowledge base
sidebar_label: KB data ingestion
---

KB bot can utilize ingested data to provide more informative responses. There are multiple entry points through which data can be fed into the bot.


## Upload website URLs

Easily upload your website URLs directly to our platform. When the bot encounters a question related to the website, it will provide relevant answers.

To upload your website URL, follow:

1. Go to **KB** and click **+ Add URL**.
    
    ![](https://i.imgur.com/K4lw1BW.png)

2. Enter the website URL and click **Save**.

This handles all sub URLs automatically, to improve accuracy, add more URLs manually under **Upload documents**. 


:::note

Redirection links(URL) cannot be displayed within the summarized answer. 
The best practice for LLMs is to avoid generating links in responses or summarizations. This precaution is taken because LLMs can potentially miss characters like "-", which could break the link or even direct users to unsafe pages, posing a security risk. Therefore, it's safer to refrain from including links altogether.
:::


------

## Manual data ingestion 

### Upload documents from local system

Upload specific documents to enable the bot to identify relevant questions and provide accurate answers from them. You can upload **Word**, **PPT**, **PDF** and **Txt** files.

To upload files from your system, follow:

1. Go to **KB** > **Upload documents** > **Your computer**.

 ![](https://i.imgur.com/HBK3jCo.png)

2. Click **Upload document** to upload your documents here. Currently we support file sizes upto 20MB.

    <img src="https://i.imgur.com/PZmgkA6.png" alt="drawing" width="80%"/>

3. Enable **Generate Q&A** to let the bot to respond to users questions with answers that resemble human-like responses.
4. Enable **Enable table parsing** to allow the bot to extract structured data from tables in a document or a webpage.
5. Choose the langauge of the uploaded file and click **Add**.

:::note
- Our team is still in process of fine tuning the feature so while uploading the files, it's preferable to have data in the form of bullet points or paragraphs rather than tables.
- When docs are in indexing/pending state, you have to wait in queue. Ensure you dont enable table parsing or QnA generation when you index.
- If the PDFs belong to any language other than English, the end results might not be perfect. Please post your concerns on [community.yellow.ai](https://community.yellow.ai/) , our product experts will help you.
:::

### Add acronyms 

You can boost bot understanding and search accuracy via Acronyms.

In the **Acronym** section, you can enter common phrases for specific terms. This helps the bot understand and fetch accurate results from the documentation, even when users use abbreviations. For example, users might use **WA** for **WhatsApp**. If you add this acronym the bot can understand it as **WhatsApp** whenever a user uses it. 

To add acronyms, follow:

1. Go to **Studio** > **KB** > **Acronym** > **+ Add new acronyms**.

    ![](https://i.imgur.com/NjHhs90.png)

2. In **Acronym name** enter the name of the specific term and in **Acronyms** enter the commonly used utterances for that term.

   <img src="https://i.imgur.com/eZuSYgD.png" alt="drawing" width="50%"/>

3. Click **Add list item**. 
4. You can edit the entered acronyms by selecting and deleting them or by clicking on the three dots on the right side for further modifications.

    ![image](https://imgur.com/4JXrGY8.png)


### Upload specific URLs/subdomain URLs

You can provide info to users from a specific URL/sub-URLs, this enhances the response accuracy. To add multiple URLs, follow: 

1. Go to **KB** > **Upload documents** > **Upload URL**.

    ![](https://i.imgur.com/fzq1FP8.png)

2. Enter the URL and click **Upload**. To add furthermore URLs, click **Add another URL**.

    <img src="https://i.imgur.com/HNxQ58E.png" alt="drawing" width="60%"/>
   
----

## Upload documents via. third-party applications

You can upload documents/folders from third-party applications (such as **AWS S3** and **Sharepoint**). 

> These documents are fetched one time from the integrations and are not auto-synced frequently. 

### AWS S3 integration

To upload folders/files from AWS S3 to cloud platform, follow:

1. Go to **KB** > **Upload documents** > **AWS S3**.

    ![](https://i.imgur.com/aZp5qQZ.png)

2. Fill in the fields and click **Sync folders** select the folder from the chosen bucket to sync with.

    ![](https://i.imgur.com/qvdNJSB.png)

3. Click **Upload**.
 
### Sharepoint integration

To upload folders/files from Sharepoint to cloud platform, follow:

1. Go to **KB** > **Upload documents** > **Sharepoint**.

    ![](https://i.imgur.com/hRzbwGI.png)

2. Fill in the fields and select the folder from the chosen bucket to sync with.

    ![](https://i.imgur.com/jX6iB57.png)

3. Click **Upload**.


---

## Additional options for uploaded documents 

For each uploaded document, you have the following customization options:

- **Edit tags**: Add tags for identification and categorization of specific documents.
- **Edit properties**:
    - **File name**: Modify the file name as needed.
    - **Redirection URL**: When activated, redirects to a designated URL while simultaneously displaying the search results from the doc-cog.
    > Tags and properties are particularly useful when utilizing the Document Search Node > Metadata filters.
- **Preview**: View the document, providing options to explore the uploaded content.
    - **Generate QnA**: Click to generate Q&A, acting similarly to FAQs. You can access this in **Train** > **Documents** > **QnA Extract**.
- **Delete**: Remove the document.

![](https://i.imgur.com/h3WIDiv.png)


----

## Search and filter uploaded documents 

When you have uploaded multiple documents and you quickly want to find it and make some change, you can use **search** option by typing the file name. 
    ![image](https://imgur.com/OvKdNoU.png)

You can locate the uploaded documents based on the following parameters using **Filters**:

1. Click **Filters** and fill in the following fields.
    * **File name:** Type the name of the file
    * **Source:** Select the source from which the file was uploaded to the platform
    * **Status:** Select the status of the uploaded file
    * **Tags:** Type the added tags

2. Click **Apply filter**.

    ![](https://i.imgur.com/XAZdX52.png)

