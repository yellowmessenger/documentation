---
title : Sunshine Live Chat
sidebar_label : Sunshine live chat
---



The Sunshine Live Cloud integration with the Yellow.ai bot enables Sunshine users to connect directly with bot users, enhancing communication and support capabilities. This integration allows for real-time interactions, ensuring that customer inquiries are addressed promptly and efficiently. This documentation will guide you through the setup process, empowering you to leverage the full benefits of the integration for improved customer experiences and operational efficiency.


## Integration & configuration process

### Step 1: Get API key


1. In your Zendesk application, go to **Settings** and then select **Admin Center**.
   <img src="https://i.imgur.com/zDOfpyt.png" width="70%"/>

2. Click on **Apps & Integration** and then select **APIs**. From there, choose **Conversation API**.
   ![](https://i.imgur.com/pCyJVfw.png)

3. Click on **Create API Key**.
4. Provide a name for the API Key to easily identify its purpose.
   <img src="https://i.imgur.com/FBp2gQC.png" width="60%"/>

5. Once generated, copy and securely store the secret key. Note that you will not see the full key again.

    <img src="https://i.imgur.com/d5kIl2G.png" width="60%"/>

6.  Click on **Next** to generate your Key ID.
    ![](https://i.imgur.com/hCnXUKB.png)

7. You can click on the account name to view both the App ID and Key ID associated with your account.
    ![](https://i.imgur.com/iPEDvHV.png)



### Step 2: Connect Sunshine live chat to the cloud platform (Ai Agent)

To connect your yellow.ai account with Sunshine live chat, follow these steps.

1. On the left navigation bar, go to **Extensions** > **Integrations** > **Live chat** > **Sunshine live chat 2.0**.

   ![](https://i.imgur.com/JagYT5w.png)

2. In **Give account name**, enter a unique name for the integration (up to 20 characters). You can use only lowercase alphanumeric characters and underscores (_). Fill in the required fields.


   ![](https://i.imgur.com/BOT2Vl7.png)

3. In **App ID**, copy the App ID from your Zendesk account and paste here. This identifier is necessary for the integration to function properly.
4. **API key**, paste the API key that you saved. This allows secure access to the Sunshine Live Cloud services.
5. In **Secret key**, enter the secret key used for authentication. This key is critical for maintaining secure communication between your cloud platform and the Sunshine platform.
6. Leave both these options unchecked: **Enable multiple conversations** and **Enable orchestration**.
  ![](https://i.imgur.com/xGpWIyY.png)

### Step 3: Setting Up the Raise ticket node for Sunshine Llve chat agents


To connect Sunshine agents to our bot, follow these steps:

1. Navigate to your AI agent flow where you want to configure the agent process. 
2. Add **Raise Ticket** node in your flow. 
3. Select the Sunshine integration associated with the relevant account name.

   <img src="https://i.imgur.com/i0EsNpA.png" width="60%"/>

4. Configure the following fields: 
   - **Name**: The name of the user raising the ticket.
   - **Query**: A description of the issue or request.
   - **Email**: The email address of the user.
   - **Sunshine Conversations Custom Fields**: These fields are used to pass custom data to Sunshine. If you do not have any custom fields defined, you can create a variable of type **Object** and select it under this option.
   - **User External ID**: Enter any unique identifier in this field to help track the user or their requests.

