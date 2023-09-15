---
title: Inbox integration with User360 (in-house customer data platform)
sidebar_label: User360 in Chats/Tickets
---

In today's fast-paced business landscape, delivering exceptional customer support is non-negotiable. Customers expect personalized interactions, swift issue resolution, and a seamless experience across all touchpoints. Inbox and User360 integration is a game-changing solution that empowers businesses to take customer support to the next level.

*"The greater the depth of customer data at our disposal, the more effectively support agents can enhance the customer experience."*


## Introduction to User360 

User360 is an in-house Customer Data Platform (CDP) that consolidates data from various sources, creating a comprehensive customer database. This centralized hub holds a wealth of information, from purchase history to communication preferences, enabling businesses to gain invaluable insights.

User360 doesn't just collect data; it transforms it into actionable intelligence. By harnessing this data, companies can tailor their interactions with customers in ways that were previously unimaginable. This, in turn, leads to enhanced customer experiences, stronger relationships, and increased loyalty.

> Learn more about User360 [here](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/overview). 


## Significance of User360 in customer support

Leveraging User360 in conjunction with Inbox enables you to seamlessly identify incoming customers from various channels while consolidating their records and data. This unified approach significantly enhances the context available to your support team.

Here's how User360 integration empowers your support team and administrators:



| Users | Use-cases |
| -------- | -------- |
| **Support agents**     | **Anticipating customer needs**: By consolidating data from multiple channels, User360 enables support agents to gain a holistic view of each customer. This insight allows them to predict customer needs and proactively address issues. <br/><br/> **Personalizing customer interactions**: With abundant customer data, agents can create personalized responses and suggestions, making customers feel valued and understood. <br/><br/> **Proactive support**: With a comprehensive understanding of a customer's history, agents can take a proactive approach to resolve issues. They can reach out to customers before problems escalate, enhancing the overall customer experience. <br/> <br/> **Building strong relationships**: When support agents have access to customer data, they can forge deeper and more meaningful connections. This leads to increased customer trust and loyalty.       |
| **Administrators**  |  **Omni Channel view**: User360 provides admins with an omni channel, comprehensive view of each customer. This proves invaluable during critical moments, such as escalations, enabling a swift and informed response. <br/><br/> **Identifying trends and patterns**: With a rich dataset at their disposal, administrators can identify trends and patterns in customer inquiries. This data-driven approach informs product enhancements and support process optimizations, driving continuous improvement. |

--------


## Get started with User360 for Inbox 

To initiate the use of User360 with Inbox, follow these steps:

### Step 1: Decide the UserId 

The choice of a unique userId for customers in Inbox should be based on the specific needs and context of your business. 

A **userId** is a unique identifier assigned to every customer, serving as a distinctive label for individual users. It plays a crucial role in recognizing users across various points of interaction, enabling the capture and updating of user data. User IDs can take the form of various unique identifiers, here are some considerations to help you decide:
- Phone number
- Email address
- External markers (Employee number, Loan ID, Account number)

> Learn more about userIds [here](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties#1-userid-as-a-property). 

:::note

- A userId is unique across the bot.
- Once a userId is assigned to a user, it cannot be edited or removed.
- Changing a userId is technically feasible but results in the loss of any previous data associated with it.
:::

-----

### Step 2. Implement user identification process


To establish user identification procedures, you should first select a userId for your bot (example- Email ID). Next, you must integrate this userId into your flows in **Studio > Build**. 

There are two distinct scenarios to consider:

#### 1. Using User360 only for live chats 

This is a relatively straightforward process. The userId can take any value that you intend to track within the flow (phone number, email, SSN, etc). 

> To understand how to capture the userId in bot flows, refer to [this documentation](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/userid-flow).

#### 2. Using User360 for both live chats and email tickets

If you're utilizing both email and live chat channels, there's a specific approach to follow. In version 1 (V1), the userId can only be the **customer's email address**. 

- UserIds for email tickets are automatically set as the respective customer's email address. Unless you are also collecting email address data in other channels, it becomes challenging to unify sessions across email and channels like WhatsApp for the same customer.

:::note
To ensure seamless operations, incorporate a step within your flow that requests the [customer's email address](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#25-email) and set this email address as your userId. 
:::


----

### Step 3. Use User360 to enhance customer context in Inbox

**Chat screen:** 

![](https://hackmd.io/_uploads/B1yU3HJ16.png)

**Ticket screen:** 

![](https://hackmd.io/_uploads/SkG6sSykT.png)


- Within the Customer details section, located on the upper right corner of your Chat/Ticket screen, you can find the customer's name, UserId (email), contact information, as well as the customer's recent activity.

    <img src="https://hackmd.io/_uploads/B1PXfVNR3.png" alt="drawing" width="60%"/>    

- Select **View contacts** to reach all the customer information extracted from User360. Agents have the ability to make adjustments to this information in the event of any changes.

    <img src="https://hackmd.io/_uploads/H1wkBrJkp.png" alt="drawing" width="60%"/>

- Select **View recent activity** to obtain a comprehensive overview of customer engagement. User 360 will display extensive data, while inbox activity will exclusively exhibit chat and ticket information, encompassing both historical and current interactions across all channels.

    <img src="https://hackmd.io/_uploads/HyyGnrN02.png" width="50%"/> 



