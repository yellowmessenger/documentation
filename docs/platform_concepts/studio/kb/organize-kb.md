---
title: Organize and Publish your files
sidebar_label: Organize & publish  files
---



Managing files involves several key actions to keep your content organized and up to date. You can perform actions such as updating a file’s status (Draft or Published), modifying its metadata, moving it to a folder or subfolder, and deleting files that are no longer needed.

These actions help to maintain a clean and searchable Knowledge Base, ensure content is properly categorized, and allow the AI agent to deliver more accurate responses.

**Best practices**

* Keep files in Draft until they are finalized.
* Regularly update metadata to maintain contextual accuracy.
* Use folders and subfolders to organize by topic, source, or department.
* Review and delete unecessary files to reduce clutter.



## View folder structure

You can view the folder structure of your Knowledge base from the left-hand panel under the **Files & folders** section. This panel displays all folders and subfolders to browse and locate content. You can expand or collapse folders to explore their hierarchy and access specific files.

Folders created from third-party sources like ServiceNow follow the structure of the source system and cannot be renamed or deleted. However, you can still view their contents and apply metadata to individual files to enhance search and retrieval accuracy.

   ![File strctur](/files/filestrctur.gif)

---

## Organize files in folders and subfolders

You can move files into folders or subfolders within the Knowledge base to better organize and manage your content. This is especially useful when grouping files by specific folders and sub-folders.

Moving files into folders does not affect how the content is synced or used by the AI agent, but it improves navigation and searchability for users managing the Knowledge base.

Select the files you want to organize, choose the destination folder or subfolder, and complete the move.

![Move folders](/files/movefolders.gif)

---

## Publish files to KB

After import, all files are saved in **Draft** mode by default. You can select multiple files from the list and publish them in bulk.

To update the status of individual files, use the **Status** column in the file list without needing to open or republish each file separately.

* **Draft**: The file is saved and can be accessed by the AI agent in Staging and Sandbox environments.
* **Published**: The file is live and can be accessed by the AI agent in the Production environment.

:::note
The file mode (Draft, Published, or Archived) remains same across all environments—Development, Testing, or Production. Once a file is published, it is available to the AI agent in all environments without needing separate actions.
:::

You can change the status directly from the Status column in the file list without needing to republish the file separately.

![Update status](/files/updatestatus.gif)

### Set status for new files

This setting allows you to define the default status for any new files added to the system, either through manual upload or automatic sync from connected sources.

**When this option is helpful**

If your AI agent is already live and has an active sync schedule, this setting ensures that any new files added during the sync are automatically set the status as Published. This helps keep your AI agent updated with the latest content instantly.

 <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/statusforfiles.png" alt="drawing" width="60%"/>

* **Draft**: The file is updated in Staging and Sandbox environments.
* **Published**: The file is Updated in Production or Live environments.

---

## Delete files
    
To delete files from your Knowledge base, select the files you no longer need and choose the delete option. This action permanently removes the selected files from the system. Ensure the content is no longer required before proceeding.

Deleted files cannot be recovered, and this action does not affect folder structure or metadata associated with other files.

![Delete file](/files/deletefile.gif)



<!-- KB AI-agent can utilize ingested data to provide more informative responses. There are multiple entry points through which data can be fed into the AI-agent.


## Upload website URLs

Easily upload your website URLs directly to our platform. When the AI-agent encounters a question related to the website, it will provide relevant answers.

To upload your website URL, follow:

1. Go to **Knowledge base** > **Files** > click **+ Add URL**.
    
    ![](https://i.imgur.com/TGDsX7Q.png)

2. Enter the website URL and click **Save**.

    ![image](https://i.imgur.com/ghqSJ32.png)

This handles all sub URLs automatically, to improve accuracy, add more URLs manually under **Upload documents**. 


:::note
Redirection links(URL) cannot be displayed within the summarized answer. 
The best practice for LLMs is to avoid generating links in responses or summarizations. This precaution is taken because LLMs can potentially miss characters like "-", which could break the link or even direct users to unsafe pages, posing a security risk. Therefore, it's safer to refrain from including links altogether.
:::


------

## Manual data ingestion 

### Upload documents from local system

Upload specific documents to enable the AI-agent to identify relevant questions and provide accurate answers from them. You can upload **Word**, **PPT**, **PDF** and **Txt** files.

To upload files from your system, follow:

1. Go to **KB** > **Upload documents** > **Your computer**.

 ![](https://imgur.com/XE1XImg.png)

2. Click **Upload document** to upload your documents here. Currently we support file sizes upto 20MB.

    <img src="https://i.imgur.com/PZmgkA6.png" alt="drawing" width="80%"/>

3. Enable **Generate Q&A** to let the AI-agent to respond to users questions with answers that resemble human-like responses.
4. Enable **Enable table parsing** to allow the AI-agent to extract structured data from tables in a document or a webpage.
5. Choose the langauge of the uploaded file and click **Add**.

:::note
- Our team is still in process of fine tuning the feature so while uploading the files, it's preferable to have data in the form of bullet points or paragraphs rather than tables.
- When docs are in indexing/pending state, you have to wait in queue. Ensure you dont enable table parsing or QnA generation when you index.
- If the PDFs belong to any language other than English, the end results might not be perfect. Please post your concerns on [community.yellow.ai](https://community.yellow.ai/) , our product experts will help you.
:::

### Add acronyms 

You can boost AI-agent understanding and search accuracy via Acronyms.

In the **Acronym** section, you can enter common phrases for specific terms. This helps the AI-agent understand and fetch accurate results from the documentation, even when users use abbreviations. For example, users might use **WA** for **WhatsApp**. If you add this acronym the AI-agent can understand it as **WhatsApp** whenever a user uses it. 

To add acronyms, follow:

1. Go to **Knowledge base** > **Files** >  **Manage acronyms**.

    ![](https://i.imgur.com/r0X2NZJ.png)

2. Click **Add new acronym** > **+ Acronym name**, enter the name of the specific term and in **Acronyms** enter the commonly used utterances for that term.

   <img src="https://i.imgur.com/eZuSYgD.png" alt="drawing" width="50%"/>

3. Click **Add list item**. 
4. You can edit the entered acronyms by selecting and deleting them or by clicking on the three dots on the right side for further modifications.

    ![image](https://imgur.com/4ObT0kh.png)


### Upload specific URLs/subdomain URLs

You can provide info to users from a specific URL/sub-URLs, this enhances the response accuracy. To add multiple URLs, follow: 

1. Go to **Knowledge base** > **Files** > **Upload documents** > **Upload URL**.

    ![](https://i.imgur.com/qrA5Y7G.png)

2. Enter the URL and click **Upload**. To add furthermore URLs, click **Add another URL**.

    <img src="https://i.imgur.com/HNxQ58E.png" alt="drawing" width="60%"/>
   
----

## Upload documents via. third-party applications

You can upload documents/folders from third-party applications (such as **AWS S3** and **Sharepoint**). 

> These documents are fetched one time from the integrations and are not auto-synced frequently. 

### AWS S3 integration

To upload folders/files from AWS S3 to cloud platform, follow:

1. Go to **Knowledge base** > **Files** > **Upload documents** > **AWS S3**.

    ![](https://i.imgur.com/FD12kKp.png)

2. Fill in the fields and click **Sync folders** select the folder from the chosen bucket to sync with.

    ![](https://i.imgur.com/qvdNJSB.png)

3. Click **Upload**.
 
### Sharepoint integration

To upload folders/files from Sharepoint to cloud platform, follow:

1. Go to **Knowledge base** > **Files** > **Upload documents** > **Sharepoint**.

    ![](https://i.imgur.com/5FA02FR.png)

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

   ![](https://i.imgur.com/PbQoEsV.png)


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
 -->









