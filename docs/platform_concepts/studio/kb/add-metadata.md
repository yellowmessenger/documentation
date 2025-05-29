---
title: Add metadata to optimize knowledge base search
sidebar_label: Set metadata to optimize search
---

## Introduction

Metadata is a descriptive information added to files in the Knowledge Base to improve the search. It functions like tags that tell the AI agent what the file contains to search and filter content.

Metadata helps the AI agent to identify and retrieve the most relevant files during a Knowledge search.  It allows the AI agent to understand the context and structure of each file, enabling it to retrieve the most relevant results based on user queries.

To improve search efficiency, always provide clear and specific descriptions when configuring metadata. These descriptions help the AI agent interpret the purpose and usage of each field accurately.

For example, metadata like "Department", "Status", or "Version" helps segment files and support contextual responses like:
  * Show me HR policies
  * List all published documents
  * Display onboarding files for IT and finance departments

### Types of Metadata

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

<!--

### Example use case for metadata in KB

**Scenario**: Add department-specific metadata to improve search filtering.

**Key name**: Department
**Data type**:
   * Use PickList if each file belongs to only one department.
   * Use Multiselect if a file applies to multiple departments.
* **Description**: "Specialized division responsible for handling a specific function or set of tasks to support the organization's overall goals."

This metadata allows the AI to handle queries like:
  * "What are the policies from the finance team?"
  * "Show IT and HR onboarding documents."

-->


## Add metadata for KB content

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

     <img src="https://cdn.yellowmessenger.com/assets/addcuskey.png" alt="drawing" width="60%"/>
    
5. Click **Add key** to save it.

Refer to the following gif to see how the metadata works:

  ![Metadat](/files/metadat.gif)  


## Set metadata for each file

You can update metadata for any file in the Knowledge Base to help the AI agent better understand, filter, and retrieve content during search. Metadata provides context that improves the accuracy and relevance of search results.

To update metadata, go to the file management interface, select a file, and open the metadata panel. You can enter or modify values for each metadata field. Changes are saved automatically and do not require republishing the file.

![Update metadta](/files/Updatemetadta.gif)