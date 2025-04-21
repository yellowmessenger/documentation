---
title: Setup Knowledge base
sidebar_label: Setup Knowledge base
---

Knowledge Base sources are used to feed information into your AI agent. They allow you to connect external or internal content such as websites, documents, or knowledge platforms directly to the AI agent. These sources ensure your agent has access to the most relevant and up-to-date information without requiring you to manually re-enter data. Here are some key benefits of using Knowledge Base sources in our AI agent:

* Provides instant and accurate answers using your existing content.
* Reduces manual effort by automating responses to repetitive questions.
* Keeps responses up to date by syncing with dynamic content sources.

**You should configure a Knowledge Base if:**

* You want the AI agent to refer to detailed documents like help articles, FAQs, or product manuals.
* You already have relevant content on a website or in documents (PDF, DOCX, CSV, and TXT).
* You use platforms like ServiceNow for managing knowledge articles and want to integrate them into your AI agent.

**Knowledge Base sources**

You can add content to the Knowledge Base by using any of the following sources:
 
* [Sitemaps or URLs](#): This source allows you to add content directly from your website by either uploading a sitemap or entering specific URLs. It is  useful for importing structured information from documentation sites, support portals, or help centers.
     * **Sitemaps**: A sitemap is a XML file that lists all the important pages of a website. It acts like a map for search engines and systems like an AI agent, helping them understand the structure of your website and easily access its content.
       * It usually ends in .xml (example, https://example.com/sitemap.xml)
       * It helps fetch content from multiple web pages at once.
       * It is used for ingesting content from large websites or documentation portals.
     * **URL**: A URL (Uniform Resource Locator) is the web address of a specific page on your site. Example: https://example.com/help/article1
        * Use this option if you want to add only specific web pages to your Knowledge Base
        * Useful when your site doesn't have a sitemap or you want to include only select content

* [Upload files](#): Upload documents directly (PDF, DOCX, TXT, CSV) to populate the Knowledge Base. 
* [ServiceNow articles](#): Connect your ServiceNow account to sync knowledge articles automatically.

### Using sitemap or URL as a source

#### Add Sitemaps or URLs

To add a sitemaps or URLs, follow these steps:

1. Navigate to **Knowledge base** > **Files** > **Sitemap/URL**.

   ![image](https://hackmd.io/_uploads/S1mcgooC1e.png)

2. Choose the upload type:

**Sitemap**

1. Select the upload type as **Sitemap** and click **Next**.
   
   ![image](https://hackmd.io/_uploads/HkwUZsjC1g.png) 

2. Enter the **Sitemap URL**, example, https://example.com/sitemap.xmland.

     ![image](https://hackmd.io/_uploads/B1EfMsoRyx.png)

3. If you want to exclude any specific URL enable the toggle button and select the following options:

    i. **Contains**: This option will Exclude any URL containing the specified keyword or phrase anywhere within it. Useful for filtering out patterns. Example: Entering ?sessionid= excludes URLs like www.site.com/page?sessionid=123
    ii. **Begins with**: This option will exclude any URL that starts exactly with the specified prefix. Ideal for excluding entire directories or subdomains. Example: Entering https://dev.example.com/ excludes all pages starting with that path.
    iii. **Equals to:** Excludes only URLs that are an exact match to the specified text. Use this for specific, individual pages. Example: Entering https://example.com/old_page.html excludes only that exact page.
    
4. Select the Sitemap storage location and click **Next**.

     ![image](https://hackmd.io/_uploads/SyE7xYQJle.png)


5. To keep your AI agent’s knowledge fresh and up to date, you can configure automatic sync for content that changes frequently.
   * Select how often you want the system to check for updates: Hourly, Daily, or Weekly.
   * Choose the specific time for the sync to occur.

  ![image](https://hackmd.io/_uploads/SykkO3oA1l.png)
  
6. Click **Done** to complete the setup.   
    
**URL**
    
1. Choose the upload type as **URL** and click **Next**.

      ![image](https://hackmd.io/_uploads/rJY1IjjAye.png)

2. A crawling method is used to collect data from websites, scanning pages to gather information. In Crawling method, select the following options:
   * **All pages**: This option will scan all pages within the provided URL.
   * **Specific pages**: This option will scan only the specific page URLs that you will provide.

    ![image](https://hackmd.io/_uploads/BJd-vioA1e.png)
    
   
4. To keep your AI agent’s knowledge fresh and up to date, you can configure automatic sync for content that changes frequently.
   * Select how often you want the system to check for updates: Hourly, Daily, or Weekly.
   * Choose the specific time for the sync to occur.

  ![image](https://hackmd.io/_uploads/SykkO3oA1l.png)
  
6. Click **Done** to complete the setup.

### Upload documents from local system  

You can upload specific documents to enable the AI agent to identify relevant questions and deliver accurate answers based on the content. This method supports various file formats and is especially useful for providing internal knowledge, product guides, or structured FAQ data.

**Supported file types**

* CSV files (Q&A format only)
* PDF, PPT, Word, or TXT files

**Limitations**
* **CSV format restriction**: CSV files must be in Q&A format. Each row should have a question in one column and its answer in another.
  * You can use CSV file only for uploading FAQs or structured data. It is not suitable for rich or unstructured content.
* **Fike size limit**: Each uploaded file must be less than 50 MB.


#### Upload CSV file

Before uploading the file, download the sample CSV for formatting reference.

1. Navigate to Upload files.

    ![image](https://hackmd.io/_uploads/rJKhz0iRyg.png)

2. Select **CSV** and click **Next**.

     ![image](https://hackmd.io/_uploads/SylxQ0oAkl.png)

3. Drag & drop your file or click **Upload file** to browse and select it.

      ![image](https://hackmd.io/_uploads/HyUz4Rj01g.png)
      
4. Click **Upload**.

* This will upload the CSV file successfully.

#### Upload PDF, PPT, Word, or TXT 

1. Navigate to **Upload files**.

    ![image](https://hackmd.io/_uploads/rJKhz0iRyg.png)
    
2. Select **PDF, PPT, Word, or TXT** and click **Next**.

    ![image](https://hackmd.io/_uploads/ry5TmAiRkx.png)
    
3. Either drag & drop the file or click** Upload file** to browse and select it (up to 50 MB).

   ![image](https://hackmd.io/_uploads/HyHAEAjAJe.png)
   
4. Click **Upload** to complete the process.

### Scheduler

Scheduler helps keep your knowledge base up to date by automatically syncing content from sources that change regularly. You can configure scheduled syncs during setup or anytime later. 

Scheduler settings added during onboarding can be modified anytime. You can set different scheduler preferences for each source type (Sitemaps, URLs, or Integrations).

You can set or modify the scheduler:

1. Data source onboarding
2. File management

#### Set scheduler during onboarding

When connecting a new data source such as a Sitemap or URL, you will be guided through a setup flow. One of the final steps is to configure sync scheduling.

To set the scheduler, follow these steps:

1. Select your source **Sitemap/URL** or **Upload files**. For more information on how to proceed, refer to [Setup Knowledge base data source](#).

2. Follow the onboarding steps:
   i. Choose upload type
   ii. Select content location
   iii. Proceed to **Schedule Sync** step


3. Select Frequency (Daily, Weekly) and Time Time (in UTC).

:::note
You can skip this step during onboarding and configure it later from the file management.

#### Set or modify scheduler from file management

After onboarding, you can adjust your scheduler settings from the File Management screen.

1. Click the **Scheduler icon** in the top right corner of the screen.

2. In the scheduler panel, you can:
    i. Enable or disable sync
    ii. Adjust frequency and time
    iii. Manage syncs for Sitemaps, URLs, and Integrations.

### Metadata management

Metadata helps the AI agent to identify and retrieve the most relevant files during a Knowledge search.

**Types of Metadata**

1. **Custom metadata**: Created manually by users in the platform. Useful for tailoring metadata to specific use cases and organizational needs.
2. **System metadata**: Automatically fetched from integrated third-party sources.

:::Tip:
Always provide clear and specific descriptions. These are used by the AI agent to understand the purpose and context of each metadata field.
:::

**Metadata data types**

Data type |	Description
---------|-------------
String | You can use when values are a combination of text and numbers (example, Product ID, Version Name).
Integer | You can use for numeric values only (example: Score, Count).
Boolean | You can use for binary values: true or false.
PickList | You can use for selecting one value from a predefined list (example, Status: Draft, Published).
Multiselect	| You can use for selecting multiple values from a list (example, Categories: Finance, HR).
Date & Time | You can use for storing both date and time (example, Publish Date, Scheduled Sync Time).

**Use case**

**Scenario:** Add department information to each file.

* **Key Name:** Department
* **Data Type:**
    * Use PickList if each file belongs to a single department.
    * Use Multiselect if a file is related to multiple departments.
* **Description**: Specialized division responsible for handling a specific function or set of tasks to support the organization's overall goals.

#### Configure metadata

To add or manage metadata, follow these steps:

1. Navigate to **Knowledge base** > **Files** > **Metadata**.

      ![image](https://hackmd.io/_uploads/S1UzXuX1ex.png)

2. Select **Custom** or **System** tabs to view or manage metadata.

3. To add new custom or system metadata, click **+ CreateMetakey**.

     ![image](https://hackmd.io/_uploads/S17omdX1xl.png)
     
4. In **Add custom key** pop-up, enter the following details:

     * **Key name**: Enter a unique name for the metadata field.
     * **Data type**: Select the appropriate data type.
     * **Description**: Provide a clear explanation of the key’s purpose.

    ![image](https://hackmd.io/_uploads/H12WNu71le.png)
    
5. Click **Add key** to save it.
