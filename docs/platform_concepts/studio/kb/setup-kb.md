---
title: Setup Knowledge base
sidebar_label: Setup Knowledge base
---

This document outlines how to set up a knowledge base.

To set up a knowledge base, follow these steps:

**Step 1: Select the Source** 
Start by choosing the type of content source you wish to integrate. Supported options include:
* Sitemaps and URLs
* PDF files
* ServiceNow articles

The UI provides a guided onboarding experience, walking users through source selection and configuration in a step-by-step manner to ensure a smooth setup process.

**Step 2: Configure Metadata (Optional)**

Metadata—formerly referred to as "tags"—is used to enhance search relevance during Knowledge search.
   * Metadata can be imported from supported third-party platforms.
   * Alternatively, you can create and manage metadata directly within the system.

**Step 3: Configure Scheduler (Optional)**

For content that is regularly updated, users can set up automatic syncs to keep the knowledge base current.
Supported sync frequencies include:
   * Hourly (every 1, 3, 6, or 12 hours)
   * Daily
   * Weekly

**Step 4: Organize folders and subfolders (Optional)**
You can organize files by creating folders and subfolders. This helps categorize documents by topic, project, or source, enabling easier navigation and management.

Step 5: Manage update status

To streamline publishing, the traditional "Publish" step has been removed. Instead, file visibility across environments is managed using a Status column. Status options include:
   * Published: The file is accessible to the AI Agent in Production, Staging, and Sandbox environments.
   * Draft: The file is only accessible in the Staging and Sandbox environments.

::: note
Only users with the Approver or Super Admin role can modify the status of knowledge base files.
:::

