---
title: Handling Gen AI Knowledgebase(KB)
sidebar_label : Handling Gen AI KB   
---

With Gen AI Knowledge Base(KB), inputting a website URL or any data source into the knowledge base automatically creates a customized bot.

> For more information on KB, refer to [this documentation](https://docs.yellow.ai/docs/platform_concepts/studio/kb/overview).


The following table provides you with the insights on when to use KB and when not:

| **When to use KB** | **When not to use KB** |
|--------------------|------------------------|
| To show the information that you feed the feed the bot through links or uploaded docs | For structured/relational data searches like a database or Excel sheet |
| To generate a response from unstructured data | For recommending/promotional use cases |
| To provide instant answers to user queries from the knowledgebase (that is, generate dynamic responses) | If you need very specific keywords used in the answer |

## Data ingestion methods to optimize KB responses

In addition to the quick setup of a [knowledge base](https://docs.yellow.ai/docs/platform_concepts/studio/kb/overview), there are several methods to enhance its performance, improving the tone, complexity, and precision of generated answers:

### Web ingestion

Choose specific subdomains to include or exclude from your domain. You can perform web ingestion using methods such as Sitemap.xml (preferred), in-house crawler, or Bing search engine (add-on).

:::note
- For websites with regularly updated pages, ensure there is a sitemap.xml with mandatory details like [url, lastmod].
- For use cases requiring real-time data (e.g., prices, dates, schedules, event information), avoid web ingestion. Use CMS or custom APIs instead. If the website is managed with a Content Management System (CMS), integrate the KB directly with the CMS.
:::

### Add documents

You can upload documents with a maximum of 25,000 pages per bot (approximately 1,000 files with 25 pages each).

:::note
- OCR support is not available. That is, images and other file or links within the document will not generate any response. 
- English and Bahasa languages are benchmarked and supported. Other languages should be tested at scale (200 queries) by pre-sales before committing.
:::

### Ingest data from 3rd party sources 

- Zendesk KB
- Confluence pages
- SharePoint folders
- Amazon S3 buckets
- Salesforce KB
- Google Drive
- ServiceNow KB

### Add tags

Tag knowledge optimally to refine searches based on audience. For example, in an Edtech platform, upload documents tagged for students and parents separately. When a parent queries the bot, it pulls from parent-specific documents, while a student’s query retrieves student-focused content. Use tags like *audience:student* and *audience:parent* to filter responses effectively.
