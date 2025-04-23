---
title: Email templates 
sidebar_label: Email templates 
featured: true
---

In this article, you will learn: 
1. [How to create email templates?](#2)
2. [How to use email templates?](#3)

-------------

## <a name="1"></a> Email templates overview

Email templates are pre built tempaltes that can be sent to the customers directly while creating and responding to the [email tickets](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/tickets_intro). 

HTML email branding templates can help support teams (Inbox agents) communicate with customers by: 
- Providing a consistent and professional look and feel for all of the company emails.
- Aiding the support teams to ensure that their emails have a consistent layout and design, this helps the overall branding and image of the team.
- Making it easier to include links, images, and other formatting in the emails, which can make them more engaging and easier to read, customers will have clear and concise information.
- Allowing support teams to quickly and easily insert personalized information, such as the customer's name and account details, into the emails providing customers with a more personalized and positive experience.

--------------

## <a name="2"></a>  1. Create Email Template

:::note
Only Inbox admins can create email templates.
:::

To create email templates, follow the steps below:

### Step 1: Open inbox settings

1. Go to **Settings** > **Inbox**.
2. Search for and select **Email Template**.
    ![image](https://imgur.com/dS0iyN1.png)

### Step 2: Click +Create template

Click the **+Create template** button to begin creating a new email template.         
![image](https://i.imgur.com/lyLXyII.png)


### Step 3: Define template name and select editor type

When creating a new email template:

1. Enter a relevant **Template Name**.
2. Choose the appropriate **Editor Type** based on your formatting needs.

#### HTML Editor

- The HTML Editor includes boilerplate HTML (`<html>`, `<head>`, `<title>`, and `<body>`) by default.
- Insert the email title within the `<title>` tags.
- Place your content between the `<body>` tags.
- Use dynamic variables like `{{ content }}` for personalization.
- Additional HTML tags such as `<div>`, `<table>`, or `<img>` can be used for layout and design.

#### Plain Text Editor

- This editor is for plain text templates without formatting.
- Supports basic text and dynamic variables.
- Use `{{ content }}` and other supported tokens to personalize the content.


### Step 4: Add dynamic variables

Dynamic variables populate the email with relevant data, such as the agent’s name, bot name, and ticket information.

#### Insert variables

1. Click the **Variables** icon at the top of the template editor.
2. From the list of variables, click **Add** to insert them into your template.                           
![image](https://imgur.com/CCYH9Ks.png)

**Example**

| Input | Rendered output|
| -------- | -------- |
| Hi! I'm ``{{agent.name}}`` <br/> Thanks for talking to ``{{bot.botName}}``!| Hi! I'm John.<br/> Thanks for talking to MIA!     |

#### Supported variables

| Variable         | Description                            |
|------------------|----------------------------------------|
| **Agent response variables**||
`{{ content }}`   | Replaced with the agent's response.     |
| `Latest email`   | Displays only the most recent reply.    |
| `Email history`  | Includes the full conversation trail.   |
|**Ticket detail variables**||
| `Ticket ID`              | The associated ticket's unique ID.      |
| `Subject`                | Subject line of the ticket.             |
| `Assigned agent name`    | Full name of the assigned agent.        |
| `Assigned agent alias name` | Alias name of the assigned agent.   |
| `Assigned agent email`   | Email address of the assigned agent.    |
|**Bot detail variables**||
| `Bot name`   | Name of the active bot.  |


:::info
**Best practices for using variables**

Avoid including the entire email history in every template to keep the emails concise and readable. Instead, structure your template as follows:

- Start with `{{ content }}` to show the agent's latest response.
- Add the agent’s signature.
- Optionally, include `Email history` only in templates that require full context.

:::


### Step 5: Preview and save the template

1. Preview the design for both web and app interfaces.
2. Once satisfied, click **Create template** to save your changes.               
![image](https://i.imgur.com/c3eGtKq.png)



### Step 6: Manage email templates

All created email templates will be visible on the **Settings** page. From here, you can:

- **Set a default template** to be sent automatically with tickets, even if no agent is selected. Use the dropdown to assign the default.                
<img src="https://i.imgur.com/YQ9yai1.png" alt="drawing" width="60%"/>

- **Search for templates** by typing the template name into the search bar.                     
![image](https://i.imgur.com/Ll7gFjs.png)

- **Edit or delete templates** by clicking the template name and selecting the desired action.                   
![image](https://i.imgur.com/NsPctUg.png)
 
 
-----------------------------


## <a name="3"></a>  2. Use email templates to respond to email tickets

:::note
Inbox admins and agents can use email templates while responding to or creating new email tickets.
:::

Follow the steps below to insert and use an email template when handling a ticket:

1. Navigate to **Inbox** > **Tickets**.
2. On the email ticket screen. Select **template** from the dropdown.                               
3. From the list of available templates, choose the one you want to use.
4. Click **Insert** to apply the selected template to the email.                
5. Once the template is inserted:
    - Type your message in the email editor. The typed content will be dynamically inserted into the `{{ content }}` variable in the template.
    - Click **Change template** to switch to a different template.
    - Click **Delete template** to delete the applied template from the email.
    - Click **Preview** to view how the final email will look.                      
    ![Quick actions screen](https://imgur.com/ipKfBpN.gif)                   
6. Fill in the remaining required fields (such as subject or recipient, if applicable).
7. Click **Send** to deliver the response using the selected and customized email template.

