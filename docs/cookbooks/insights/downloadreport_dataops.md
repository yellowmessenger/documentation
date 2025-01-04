---
title: Export reports for a timeframe longer than 190 days
sidebar_label: Download reports for longer duration
---


Under **Insights > Data Explorer**, you can view or export notification reports(or other reports) for only the past 190 days. To generate annual or longer-duration reports, use the **Insights > Data Ops** section.

For more details about Data Ops, refer to the [documentation here](https://docs.yellow.ai/docs/platform_concepts/growth/dataops).

## Steps to export data older than 190 days

### 1. Access Data Ops
Navigate to **Insights > Data Ops**, then click **+ Create Export Rule**.

![Create Export Rule](https://imgur.com/BMkvsPa.png)

### 2. Configure Export Rule
- Provide a name for the export.
- Select **Notification Reports** from the data list.
- Choose the export format (JSON or CSV).
- Click **Next**.

![Select Notification Reports](https://imgur.com/tyq9Dyi.png)

### 3. Set Export Frequency
- For historical data, choose **One-time Export**.
- Click **Next**.

![Select Frequency](https://imgur.com/lZaMKff.png)

### 4. Define Date Range
- Select the desired date range in the dropdown menu.
- A confirmation message will display the selected period (e.g., "You’ll receive data between ___ to ___").
- Verify the range and click **Next**.

![Select Date Range](https://imgur.com/GRyCwFN.png)

### 5. Choose Export Destination
- Select your preferred destination: **Amazon S3**, **Azure Blob**, **Google Cloud Storage**, or **SFTP Server**.
- Follow the prompts to connect your destination.
- Click **Next**.

![Export Destination](https://imgur.com/0WDjHN4.png)

### 6. Create the Export Rule
- Review the configuration and click **Create Export Rule**.

### 7. Monitor Export Logs
- After creating the rule, click on the rule name to view logs, including:
  - Export date and frequency.
  - Status of export (Scheduled, Ongoing, Success, or Failure).
  - Size of exported data.
- For detailed insights, click on **Job IDs** to access:
  - Data source and type (JSON/CSV).
  - Size of data.
  - Export status (Success or Failure).
  - Error details (if the export failed).

:::info

**Export Other Data Types**

The above procedure can be followed for other available data types in **Data Ops**.
:::