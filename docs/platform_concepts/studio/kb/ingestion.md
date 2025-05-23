---
title: Setup Knowledge base
sidebar_label: Setup Knowledge base
---

A Knowledge base (Kb) allows your AI agent to retrieve answers directly from your various sources such as Sitemaps/URL, uploaded files, or Servicenow. This setup enables your AI agent access your organization's documents, support content, and knowledge platforms.

**Supported Knowledge base sources**

You can add content to the Knowledge base using any of the following sources:
 
* [Sitemaps or URLs](#add-sitemaps-or-urls): This source allows you to add content directly from your website by either uploading a sitemap or entering specific URLs. It is  useful for importing structured information from documentation sites, support portals, or help centers.
     * **Sitemaps**: A sitemap is a XML file that lists all the important pages of a website. 
       * It usually ends in .xml (example, https://example.com/sitemap.xml)
       * It helps fetch content from multiple web pages at once.
       * It is used for adding content from large websites or documentation portals.
     * **URL**: A URL (Uniform Resource Locator) is the web address of a specific page on your site. Example: https://example.com/help/article1
        * Use this option if you want to add only specific web pages to your Knowledge base
        * Useful when your site does not have a sitemap or you want to include select pages only.

* [Upload files](#upload-documents-from-local-system): Upload documents directly (PDF, DOCX, TXT, CSV) to add the content to Knowledge base. 
* [ServiceNow articles](#service-now-integration): Connect your ServiceNow account to automatically sync and retrieve knowledge articles from the ServiceNow platform.

**Configure a Knowledge base when** :

* Your AI agent needs to respond using detailed references such as help center articles, user manuals, or policy documents.
* You already maintain structured content on websites, in document files (PDF, DOCX, CSV, TXT), or third-party platforms.
* You manage knowledge through platforms like ServiceNow and want to surface those articles within AI conversations.

### Prerequisites

Before you begin:

* Ensure you have the correct role permissions (**Admin or Developer**) to configure the Knowledge base.
* For external integrations (example, ServiceNow), gather required credentials like:
   * Instance URL
   * Client ID
   * Client Secret

## Add Knowledge base source

### Add sitemaps or URLs

To add a sitemaps or URLs, follow these steps:

1. Navigate to **Knowledge base** > **Files** > **Sitemap/URL**.

   ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/stemap.png)

2. Choose the upload type:
    * **Sitemap**: Use this option when you want to import content from multiple web pages at once.
    * **URL**: Use this option to add specific web pages manually.

#### Using Sitemap

1. Select the upload type as **Sitemap** and click **Next**.
   
   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/chhosesite.png" alt="drawing" width="70%"/>

2. Enter the **Sitemap URL**. Example: `https://example.com/sitemap.xml`.

    <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/url.png" alt="drawing" width="80%"/>

3. You can exclude specific pages from the Knowledge base. Enable the **Exclude pages** toggle and apply one of the available filters. 

   Use these options to control which URLs you want to exclude:
   
       
    <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/toogle.png" alt="drawing" width="80%"/>

   1. **Contains**
   Excludes any URL that contains the keyword or phrase you enter.
   **Example:** If you enter `?sessionid=`, it will exclude URLs like `www.site.com/page?sessionid=123`.

   2. **Begins with**
   Excludes all URLs that start with the prefix you specify.
   **Example:** If you enter `https://dev.example.com/`, it will exclude every page under that path.

   3. **Equals to**
   Excludes only the URL that exactly matches the value you provide.
   **Example:** If you enter `https://example.com/old_page.html`, only that exact page will be excluded.


    
4. Choose the existing folder/subfolder where you want to store content. To store in a new folder, click **+ Create new folder**.

    ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/newfolder.png)
    
5. To keep your Knowledge base up to date going forward, you can [schedule regular syncs](#schedule-sync) by configuring:
   * **Frequency**: Choose from Hourly, Daily, or Weekly.
   * **Time**: Choose the time (in UTC) for the sync to run.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/sync.png" alt="drawing" width="80%"/>
  
6. Click **Done** to complete the setup.
    
#### Using URL

You can add website content to your Knowledge base by providing specific URLs. The system uses a crawling method to automatically scan web pages and extract relevant information.
    
1. In **Choose upload type**, select **URL** and click **Next**.

      <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/urlupload.png" alt="drawing" width="80%"/>

2. In **Crawling method**, select the following options:

     <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/crawl.png" alt="drawing" width="80%"/>
     
   i. **All pages**

      The **All pages** option allows the system to crawl and extract content from all the web pages of the specified domain. This is most suitable if your website contains a large set of interlinked pages that you want to make searchable within the AI agent.

    :::Tip
    Make sure that your website has well-structured internal links so the system can effectively crawl to all pages.
    :::
     

      **Use case**: Best suited for documentation sites, help centers, or blogs where all pages are accessible through internal links.

      **Example**: If you enter https://docs.yellow.ai, the crawler will scan and collect content from every page linked under that domain.
      
    **To add all pages option, follow below steps:**  
    1. Enter your Website URL and click **Next**.
    
    <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/allpages.png" alt="drawing" width="80%"/>
    
    2. To exclude specific URLs from being crawled, turn on the toggle and choose a filter type:

        i. **Contains**: This option will exclude any URL that contains the specified keyword or phrase. Example: Entering ?sessionid= excludes URLs like www.site.com/page?sessionid=123
        ii. **Begins with**: This option will exclude all URLs that start with the specified prefix. Example: Entering https://dev.example.com/ excludes all pages starting with that path.
        iii. **Equals to:** This option will exclude only the URL that exactly matches the specified text. Example: Entering https://example.com/old_page.html excludes only that exact page.

        <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/toogleenabler.png" alt="drawing" width="80%"/>
    
    3. Select a folder or subfolder to store the crawled content or click **+ Create new folder** to organize your files.
     <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/cretefodurl.png" alt="drawing" width="80%"/>


   4. To keep content up to date going forward, you can schedule regular syncs by configuring:
      * **Frequency**: Hourly, Daily, or Weekly.
      * **Time**: Choose the time (in UTC) for the sync to run.
     
      <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/weelky.png" alt="drawing" width="80%"/>
  
   5. Click **Done** to complete the setup.
    
   ii. **Specific pages**
   
      The Specific pages option crawls only to the URLs you manually enter. This is recommended when you want to include only a few targeted pages or avoid crawling the entire site.

      **Use case**: Useful for privacy policies, single-product pages, FAQs, or any specific page that contains useful standalone information.

    **Example**: If you enter https://yellow.ai/terms-and-conditions, only that single page will be crawled and added to the Knowledge Base.



    1. In **Pages to sync**, enter the specific **URL**.

       <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/specificpages.png" alt="drawing" width="80%"/>

   2. Choose a folder or subfolder to store the crawled content or click **+ Create new folder**.

      <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/cretefodurl.png" alt="drawing" width="80%"/>

   3. To keep content up to date, you can [schedule regular syncs](#schedule-sync) by choosing the:
      * **Frequency**: Hourly, Daily, or Weekly.
      * **Time**: Choose the time (in UTC) for the sync to run.
     
      <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/weelky.png" alt="drawing" width="80%"/>
  
   4. Click **Done** to complete the setup.

### Upload documents from local system  

You can upload documents directly from your local system to provide the AI agent with access to reference materials and content. This is useful when you want to include internal guides, product manuals, policy documents, or FAQ data for answering user queries.

**Supported file types**

* CSV files (in Q&A format only)
* PDF, PPT, Word, or TXT files

**Limitations**
* **CSV format restriction**: You can use CSV file only for uploading FAQs or structured data. Each row should contain a question and its corresponding answer in separate columns. 
* **File size limit**: Each uploaded file must be less than 50 MB.

#### Upload CSV file

Before starting with the process, create a CSV file with two columns: question and answer. You can also download the sample CSV for your reference.  

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/CSVsample.png)

1. Navigate to **Upload files**.

    ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/uploadfiles.png)

2. Select **CSV** and click **Next**.

     <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/fileuplof.png" alt="drawing" width="80%"/>

3. Drag & drop your file or click **Upload file** to browse and select it.

      <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/csvup.png" alt="drawing" width="80%"/>
      
4. Click **Upload**.


#### Upload PDF, PPT, Word, or TXT 

1. Navigate to **Upload files**.

    ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/uploadfiles.png)
    
2. Select **PDF, PPT, Word, or TXT** and click **Next**.

    <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/uploadppf.png" alt="drawing" width="80%"/>
    
3. Either drag & drop the file or click **Upload file** to browse and select it (up to 50 MB).

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/adddocument.png" alt="drawing" width="80%"/>
   
4. Click **Upload** to complete the process.

### Service now integration

If your knowledge base is hosted on ServiceNow, you can directly integrate your ServiceNow account to import existing content. Once connected, you can enable automatic syncs to keep your content up to date without manual imports. Scheduled syncs ensure that any updates made in ServiceNow are regularly reflected in your Yellow.ai Knowledge Base.

To add your service now account, follow these steps:

1. Go to **Knowledge base** > **Files** > **Service now**.

    ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/servicenowe.png)

* This will redirect you to the Service now configuration page.

   ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/enterservice.png)


2. In Give account name, provide a name for the integration. You can use only lowercase alphanumeric characters and underscores (_).

3. Copy and paste the **Instance URL**, **Client ID** and **Client Secret**. For more information on how to get the credential, refer to this [doc](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/service-now).

4. Click **Connect**.

5. Click **Allow** to authorize the connection to your ServiceNow account.

    <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/allowservicenow.png" alt="drawing" width="80%"/>

6. Select the folder(s) from the ServiceNow knowledge articles that you want to import into the Knowledge base. The folder structure is displayed based on the hierarchy configured in your ServiceNow account.
 
    <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/selectfolders.png" alt="drawing" width="80%"/>
    
7. To keep your content up to date without manual imports, you can **Schedule sync** to automatically update content going forward. Learn more about Scheduler sync setup.

    <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/syncschedul.png" alt="drawing" width="80%"/>
    
* Click **Done** to start the import. You will see your selected ServiceNow content and structure  in our Knowledge base. Going forward, based on the sync scheduled, the content will be updated automatically..

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/servicedata.png)
    
### Add Knowledge base source in Files & folders section

After completing the initial onboarding, you can continue managing and adding additional Knowledge base sources directly from the **Files & Folders** section. This allows you to organize and expand your content as needed.
    
![Add files](/files/add-files.gif)   

## Additonal configuration

After adding sources to the Knowledge base, you can set up additional configurations. These configurations help to configure Metadata, Schedule sync, Organize files and can be customized based on your requirements.

**Available optional configurations:**

* Configure Metadata
* Schedule sync
* Organize files into folders/subfolders

### Configure Metadata

Metadata is a descriptive information added to files in the Knowledge Base to improve the search. It functions like tags that tell the AI agent what the file contains to search and filter content.

Metadata helps the AI agent to identify and retrieve the most relevant files during a Knowledge search.  It allows the AI agent to understand the context and structure of each file, enabling it to retrieve the most relevant results based on user queries.

To improve search efficiency, always provide clear and specific descriptions when configuring metadata. These descriptions help the AI agent interpret the purpose and usage of each field accurately.

For example, metadata like "Department", "Status", or "Version" helps segment files and support contextual responses like:
  * Show me HR policies
  * List all published documents
  * Display onboarding files for IT and finance departments

**Types of Metadata**

There are two types of metadata supported in the platform:

1. **Custom metadata**: You need to manually create name, data type, and description.
2. **System metadata**: Automatically fetched from third-party sources like ServiceNow during file sync. You cannot edit the key name and data type, but descriptions can be added or modified.

**Metadata data types**

Data type |	Description
---------|-------------
String | You can use when values are a combination of text and numbers. Example, Product ID, Version Name).
Integer | You can use for numeric values only. Example: Score, Count.
Boolean | You can use for binary values: true or false.
PickList | You can use for selecting one value from a predefined list. Example, Status: Draft, Published.
Multiselect	| You can use for selecting multiple values from a list. Example, Categories: Finance, HR.
Date & Time | You can use for storing both date and time. Example, Publish Date, Scheduled Sync Time.

**Use case**

**Scenario**: Add department-specific metadata to improve search filtering.

**Key name**: Department
**Data type**:
   * Use PickList if each file belongs to only one department.
   * Use Multiselect if a file applies to multiple departments.
* **Description**: "Specialized division responsible for handling a specific function or set of tasks to support the organization's overall goals."

This metadata allows the AI to handle queries like:
  * "What are the policies from the finance team?"
  * "Show IT and HR onboarding documents."

#### Add metadata

To add metadata, follow these steps:

1. Navigate to **Knowledge base** > **Files** > **Metadata**.

      ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/metadata1.png)

2. Select **Custom** or **System** tabs to view or manage metadata.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/cusys.png)

3. To add new custom or system metadata, click **+ Add custom key**.

     ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/cuskey.png)
     
4. In **Add custom key** pop-up, enter the following details:

     * **Key name**: Enter a unique name for the metadata field.
     * **Data type**: Select the appropriate data type.
     * **Description**: Provide a clear explanation of the key’s purpose.

    <img src="https://cdn.yellowmessenger.com/assets/addcuskey.png" alt="drawing" width="70%"/>
    
5. Click **Add key** to save it.

Refer to the following gif to see how the metadata works:

  ![Metadat](/files/metadat.gif)  

### Schedule sync

Scheduler helps to keep your knowledge base up to date by automatically syncing content from connected sources.

You can set different sync schedules for each source type—Sitemaps, URLs, or ServiceNow integration.

You can configure scheduler at two stages:

1. During data source onboarding
2. From the file management section

#### Set scheduler during onboarding

When adding a new data source like Sitemap, URL, or ServiceNow, you will go through a guided setup flow. One of the final steps in this flow allows you to configure your sync schedule.

To set the scheduler, follow these steps:

1. Choose your data source: Sitemap, URL, or ServiceNow. For more information, refer to [Setup Knowledge base data source](#).

   ![image](https://cdn.yellowmessenger.com/assets/yellow-docs/KBonboarding.png)
   
2. Complete the onboarding steps:
     i. Choose upload type
     ii. Upload URL
     iii. Select content location
     iv. Proceed to the Schedule Sync step     
      <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/scedulesybcstep.png" alt="drawing" width="80%"/>

3. At the Schedule Sync step, select the following frequency and time:
    Frequency | Time
    ----------|------
    Hourly | 1, 3, 6, 12 hour
    Daily |  12 AM to 11 PM
    Weekly | Select Day (Sunday to saturday) and time from 12 AM to 11 PM
    
    <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/setsync.png" alt="drawing" width="80%"/>
    
4. Click **Done**.

* You can also skip this step during onboarding and set or update the sync schedule later from the File Management section.

   
#### Set or modify scheduler from file management

Once the source has been onboarded, you can update the scheduler settings from the **Files & folders** section.

In the scheduler panel, you can:
* Enable or disable automatic sync
* Change the sync frequency and time
* Manage scheduler settings separately for Sitemaps, URLs, and Integrations

To access and configure the scheduler:

1. Click the **Scheduler icon** located at the top-right corner of the File management screen.
  
     ![](https://cdn.yellowmessenger.com/assets/yellow-docs/schedulerset.png)
     
2. Enable the toogle button corresponding to the Sitemaps, URL, or Intrgrations for which you want to schedule.

   <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/enableschedular.png" alt="drawing" width="80%"/>
    
3.  Select the **Frequency** and **time** for the selcted data source, then click **Save**.

    <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/freqtime.png" alt="drawing" width="70%"/>
    
### Organize files in folders and sub folders

The Files & folders tab lets you structure your content and organize them better. You can group files into folders based on topics, departments, projects, or other categories to make it easier to navigate, maintain, and retrieve relevant content.

In **Files & folders** section, you can view the created list:
* **All files**: You can view the complete list of files stored in your knowledge base, regardless of their folder location
* **Uncategorzied files**: You can view all files that have not yet been placed into a specific folder. 


#### Create folders and subfolders

1. Go to **Knowledge base** > **Files & folders** > click **+** corresponsing to Folders.

    ![](https://cdn.yellowmessenger.com/assets/yellow-docs/clickplus.png)

2. Enter a **Folder name** and click the **tick mark** icon to create a folder.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/tickmark.png)

3. Click below high-lighted option and select **Create subfolder**.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/subfolder.png)

4. Enter the name for Subfolder.

    <img src="https://cdn.yellowmessenger.com/assets/yellow-docs/createsub.png" alt="drawing" width="50%"/>

* This will create a sub folder under parent folder. Smilarly you can create more subfolders.


## Manage Knowledge base articles

Managing files involves several key actions to keep your content organized and up to date. You can perform actions such as updating a file’s status (Draft or Published), modifying its metadata, moving it to a folder or subfolder, and deleting files that are no longer needed.

These actions help to maintain a clean and searchable Knowledge Base, ensure content is properly categorized, and allow the AI agent to deliver more accurate responses.

**Best practices**

* Keep files in Draft until they are finalized.
* Regularly update metadata to maintain contextual accuracy.
* Use folders and subfolders to organize by topic, source, or department.
* Review and delete unecessary files to reduce clutter.

### Update file Status after importing

After import, all files are saved in **Draft** mode by default. You can select multiple files from the list and publish them in bulk.

To update the status of individual files, use the **Status** column in the file list without needing to open or republish each file separately.

* **Draft**: The file is saved but not yet published.
* **Published**: The file is live and available for the AI agent to access during search.
* **Archived**: The file is no longer active but you can retain it if needed in the future.

:::note
The file mode (Draft, Published, or Archived) remains same across all environments—Development, Testing, or Production. Once a file is published, it is available to the AI agent in all environments without needing separate actions.
:::

You can change the status directly from the Status column in the file list without needing to republish the file separately.

![Update status](/files/updatestatus.gif)

### Set metadata for Smarter Search

You can update metadata for any file in the Knowledge Base to help the AI agent better understand, filter, and retrieve content during search. Metadata provides context that improves the accuracy and relevance of search results.

To update metadata, go to the file management interface, select a file, and open the metadata panel. You can enter or modify values for each metadata field. Changes are saved automatically and do not require republishing the file.

![Update metadta](/files/Updatemetadta.gif)

#### View folder structure

You can view the folder structure of your Knowledge base from the left-hand panel under the **Files & folders** section. This panel displays all folders and subfolders to browse and locate content. You can expand or collapse folders to explore their hierarchy and access specific files.

Folders created from third-party sources like ServiceNow follow the structure of the source system and cannot be renamed or deleted. However, you can still view their contents and apply metadata to individual files to enhance search and retrieval accuracy.

![File strctur](/files/filestrctur.gif)

### Move files to a folder

You can move files into folders or subfolders within the Knowledge base to better organize and manage your content. This is especially useful when grouping files by specific folders and sub-folders.

Moving files into folders does not affect how the content is synced or used by the AI agent, but it improves navigation and searchability for users managing the Knowledge base.

Select the files you want to organize, choose the destination folder or subfolder, and complete the move.

![Move folders](/files/movefolders.gif)

### Delete files
    
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
