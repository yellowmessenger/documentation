---
title: Amazon Connect Live Chat
sidebar_label: Amazon connect live chat
---



For businesses using Amazon Connect for contact center support, the Amazon Connect Live Chat integration enables your Yellow.ai AI Agent to escalate conversations to a live Amazon Connect agent when needed. Using the **Raise Ticket** node in the agent flow, you can trigger a live chat session, allowing end users to seamlessly transition from bot-driven conversations to real-time agent support on Amazon Connect.


---

## 1. Prerequisites

Before integrating Amazon Connect Live Chat with Yellow.ai, ensure you have the following details from your AWS account: 

- **[Region](#-region)**: AWS region where your Amazon Connect instance is hosted. Once you login to the console, you can see the Region ID in the Select Region and in the URL.
- **[Access Key ID & Secret Access Key](#-access-key--secret)**: IAM user credentials with appropriate Amazon Connect permissions.
- **[Instance ID](#-instance-id)**: Found in your Amazon Connect ARN.
- **[Contact Flow ID](#-contact-flow-id)**: Unique ID of the contact flow used for chat.
   1. On **AWS Management**, navigate to the **Amazon Connect console**. 
   2. Go to the **Instances** page console and select your Connect instance. 
   3. On the **Routing** tab, you'll see a list of contact flows. 
   4. Click on the specific contact flow you want to find the ID for. 
   The Contact Flow ID will be part of the ARN displayed in the overview. 

---


## 2. Find required AWS Parameters

### 🌍 Region

To find the **AWS Region** (specifically for your Amazon Connect instance), follow these steps:


#### Option 1: From the Amazon Connect Console

1. **Go to** the [Amazon Connect console](https://console.aws.amazon.com/connect/).
2. On the **Instances** page, locate your instance.
3. The **Region** is shown in the URL and instance details.
   For example:

   ```
   https://<instance-alias>.awsapps.com/connect/home
   ```

   * If the URL is `https://my-support.awsapps.com/connect/home`, the region can often be inferred from the instance's full ARN (see below).

#### Option 2: From the Instance ARN

1. In the Amazon Connect console, go to your instance's **Account overview**.
2. Copy the **Instance ARN**.
   Example:

   ```
   arn:aws:connect:us-east-1:123456789012:instance/abcd1234-ef56-gh78-ij90-klmnopqrstuv
   ```
3. The **third segment** in the ARN (`us-east-1`) is the **Region** where your instance is hosted.


  **Region examples**

  | Region Name           | Region Code    |
  | --------------------- | -------------- |
  | US East (N. Virginia) | `us-east-1`    |
  | US West (Oregon)      | `us-west-2`    |
  | Asia Pacific (Mumbai) | `ap-south-1`   |
  | Europe (Frankfurt)    | `eu-central-1` |


:::note
* [Find your Amazon Connect instance ID and region (AWS Docs)](https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html)
:::

### 🔐 Access Key & Secret

To generate an access key and secret for an IAM user:

1. Sign in to the [AWS Management Console](https://console.aws.amazon.com/iam/) as an IAM user with appropriate permissions.
2. Navigate to **IAM** → **Users**.
3. Select the desired user.
4. Go to the **Security credentials** tab.
5. Under **Access keys**, click **Create access key**.
   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/aws.png)
6. Choose **Command Line Interface (CLI)** as the use case.
7. Click **Next**, then **Create access key**.
8. Download and securely store the access key ID and secret access key.([AWS Documentation][1], [AWS Documentation][2])

:::note
*  It is recommended to avoid using root user credentials for daily tasks. If necessary, root users can create access keys by navigating to **My Security Credentials** in the AWS Console and selecting **Create access key** under the **Access keys** section. ([AWS Documentation][3])
:::

---

### 🆔 Instance ID

To locate your Amazon Connect Instance ID:

1. Open the [Amazon Connect console](https://console.aws.amazon.com/connect/).
2. On the **Instances** page, select your instance alias.
3. On the **Account overview** page, in the **Distribution settings** section, find the **Instance ARN**.
4. The Instance ID is the segment following `instance/` in the ARN.([AWS Documentation][4])

*Example ARN:*

```

arn:aws:connect:us-east-1:123456789012:instance/abcd1234-ef56-gh78-ij90-klmnopqrstuv
```

*Here, `abcd1234-ef56-gh78-ij90-klmnopqrstuv` is the Instance ID.*&#x20;

---

### 🔁 Contact Flow ID

To create Contact Flow ID, you need to have the contact flow and the Amazon Connect instance in the same AWS Region to avoid region conflicts.

To retrieve the Contact Flow ID:

1. Sign in to the [Amazon Connect console](https://console.aws.amazon.com/connect/) with an Admin account or an account assigned to a security profile that has permissions to view contact flows.
2. In the navigation pane, choose **Routing**, then **Contact flows**.
3. Select the desired contact flow.
4. Click **Show additional flow information** to view the Flow ID.([AWS Documentation][6])



[1]: https://docs.aws.amazon.com/cli/v1/userguide/cli-authentication-user.html?utm_source=chatgpt.com "Authenticating using IAM user credentials for the AWS CLI"
[2]: https://docs.aws.amazon.com/keyspaces/latest/devguide/access.credentials.IAM.html?utm_source=chatgpt.com "Create an IAM user for programmatic access to Amazon Keyspaces ..."
[3]: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html?utm_source=chatgpt.com "Manage access keys for IAM users - AWS Documentation"
[4]: https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html?utm_source=chatgpt.com "Find your Amazon Connect instance ID or ARN"
[5]: https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeInstance.html?utm_source=chatgpt.com "DescribeInstance - Amazon Connect"
[6]: https://docs.aws.amazon.com/connect/latest/adminguide/find-contact-flow-id.html?utm_source=chatgpt.com "Find the flow ID when integrating Apple Messages for Business with ..."



---

## 3. Integrate Amazon Connect with Yellow.ai

1. Log into your Yellow.ai bot and switch to the appropriate environment (Development/Staging/Sandbox).
2. Navigate to **Extensions** > **Integrations** > **Live Chat** > **Amazon Connect Live Chat**.
   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/amazon.png)
3. Configure the following fields to integrate **Amazon connect live chat**:
   ![Integration Fields Screenshot](https://i.imgur.com/oFUZHBc.png)


  | Field Name                  | Description                                                                                                                           |         
  | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | 
  | **Account Name**            | A unique name for the Amazon Connect account. Use only lowercase alphanumeric characters and underscores (_). The same name will be used in the production environment as well. Example value: `support_team_account`                     |
  | **[Region](#region)**                  | The AWS region where your Amazon Connect instance is hosted.    <br/>Example value:  `us-east-1`                                |
  | **[Access Key ID](#🔐-access-key--secret)**           | AWS access key ID for an IAM user with required permissions for Amazon Connect.    <br/>Example value: `AKIAIOSFODNN7EXAMPLE`           |
  | **[Secret Access Key](#🔐-access-key--secret)**       | AWS secret access key corresponding to the above key. Keep this confidential.  <br/>Example value: `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY` |
  | **[Contact Flow ID](#🔐-access-key--secret)**         | The ID of the contact flow that defines the chat experience.<br/>Example value: `12345678-1234-1234-1234-123456789012`     |
  | **[Instance ID](#🆔-instance-id)**             | Unique identifier of your Amazon Connect instance. <br/>Example value: `abcd1234-ef56-gh78-ij90-klmnopqrstuv`     |
  | **Polling Timeout (ms)**    | Time in milliseconds to wait for a response before timing out (before auto-closing chat). <br/>Example value: `30000`                                    |
  | **Chat Duration (minutes)** | Maximum time in minutes that a chat session can remain active. (default: 25 hours, configurable: 60–10,080 minutes)  <br/>Example value: `60`                                       |


4. Click **Connect**. You can connect up to 15 accounts in total.

---

## 4. Connect your Amazon Connect Live Chat account to your AI agent

To Configure Connect Live Chat in your AI agent conversation:

1. In the Automation module, go to [Build](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys).
2. Navigate to the flow where you want to add the live agent flow and insert **Raise a ticket** node (**Integration** > **Raise a ticket**).
3. In **Live chat agent**, select **Amazon connect live chat**.
4. Configure the following details:

  | **Option**                          | **Description**                                                                                                      |
  | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
  | **Account name**                    | Select the account you want to associate with the live chat.                                                                           |
  | **Message after ticket assignment** | Enter the message to be sent automatically once the ticket is assigned to a live agent.                              |
  | **Name**                            | Provide a label or identifier for the ticket. This helps categorize and reference it easily.                         |
  | **Mobile**                          | Select the mobile number associated with the ticket. Useful for contacting the user if needed.                       |
  | **Email** *(Optional)*              | Select the email address linked to the ticket, if applicable.                                                        |
  | **Query**                           | Select the variable where you want to capture the user's query |
  | **Amazon connect live agent custom fields*** | Select the object variable to pass custom field values to live agents. <br/> Example: ```{"ticketId": "hello"}``` |
5. To customize how your tickets are handled and processed, you can enable and configure **Advanced options**. These options allow you to set ticket priority, enable auto-translation, and add custom fields, tags, and departments.