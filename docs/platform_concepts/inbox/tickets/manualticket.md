---
title: Create tickets manually 
sidebar_label : Manual ticket creation
---

There are different methods to create email tickets in Inbox. 
- Ideally, an email ticket is created when an end user sends an email to the [configured email address](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/setupandconfig) requesting customer support. This email is automatically converted into an email ticket and auto-assigned to a live agent.   
- Alternative method is to create email tickets manually. 

In this article, you will learn: 
1. [How to create email tickets manually?](#1)
2. [What are the options available to format ticket body?](#2)

-----

**Manual email ticket creation**

Manual tickets are created by the inbox agents when in scenarios where they are urged to reach out to the customers and provide support/promotions to them through emails. For example:    
- If the customer has contacted the agent/brand via. call/website/tweet, an agent must capture the support request and create a ticket on behalf of the customer.  
- Proactive reach out when the brands have identified potential customers, promotional messages, brand discounts, updates, etc. emails can be sent to the customer for marketing and retention purpose. 

----

## <a name="1"></a>  Create email tickets 


To create an email ticket, follow the steps below: 

1. Open **Inbox** > **Tickets**. 
2. Click  **+Create ticket**.
    ![](https://i.imgur.com/sv75A6a.png)
3. Enter the ticket details: 
    - **Priority**: By default, the priority will be the value [configured for email tickets](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/emailticketing) in inbox settings, it can be changed here. 
    - **Assignee**: This ticket can be assigned to a group or the agent of a particular group. **From email ID** value gets automatically updated based on this. 
    - **Tags**: Labels configured in the [tags section](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/tags) can be selected form the dropdown. 
    - **Custom fields**: Fields configured for email tickets can be entered here. 

![image](https://hackmd.io/_uploads/SkbBm53RR.png)

4. Enter the email details: 
    - **From address**:  This field will be auto-updated with the email ID assigned to the selected group (on ticket details). If the group is not selected on the ticket details, you can select an email ID from the available IDs in the drop-down list. The first email ID will be the default ID. 
    - **Contacts**: This is the address to whom the email has to be sent. You can enter a new email address if the email ID is recognized (is a known [contact](https://docs.yellow.ai/docs/platform_concepts/inbox/contacts)), you will be able to see the history of emails sent to this contact under **Contact details**.  
    - **Subject**: Mandatory field. Enter the email subject. 
    ![image](https://hackmd.io/_uploads/HknwQ5n0A.png)
    - **Email Body/ Reply**: To create a ticket, text must be entered in the reply section. You can also add [email templates](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/productivitytools/emailtempalte) to this. 
    ![image](https://hackmd.io/_uploads/HyDcm520R.png)


5. Click **Create ticket**. 

6. This email ticket will be available in the **Tickets** section. You can track the email thread and maintain all the communications in this ticket. Through this method, agents can reach out to their end users and continue their conversation and provide a resolution within the SLAs and timing constraints, like a regular support ticket.

    ![](https://i.imgur.com/hGLJV2z.png)


-----------


## <a name="2"></a> Ticket body formatting options

The following are some key features available in the Yellow.ai inbox tickets screen to enhance the user experience.

| Feature                         | Description                                                                 |
|----------------------------------|-----------------------------------------------------------------------------|
| Free text                        | Allows users to input and edit text freely.                                 |
| Copy-paste text, attachments, files | Users can copy and paste text, attachments, and files directly into the editor. |
| Auto save draft                  | Automatically saves a draft of your message to prevent data loss.           |
| Canned responses                 | Enables quick replies with predefined responses.                            |
| Send template                    | Send messages using pre-configured templates.                               |
| Upload multiple attachments      | Upload multiple files simultaneously within a conversation.                 |
| Text formatting (B, I, U)        | Supports bold, italic, and underline text formatting options.                |
| Braces                           | Allows inserting braces for better code readability.                        |
| Numbered bullet                  | Adds numbered lists to the message.                                         |
| Bullet                           | Adds bulleted lists to the message.                                         |
| Strikethrough                    | Apply strikethrough to selected text.                                       |
| Insert code                      | Allows embedding inline code snippets.                                      |
| Hyperlink                        | Insert and manage hyperlinks within the message.                            |
| Copy & paste links               | Easily copy and paste links into the editor.                                |
| Font hierarchy                   | Adjust the size of fonts to reflect hierarchy (e.g., headers).              |
| Alignment (Left, Center, Right, Justify) | Provides options to align text left, center, right, or justify.           |
| Inline images (upload, copy-paste, drag & drop) | Supports inline images through upload, copy-paste, or drag-and-drop.  Maximum file size for attachments is 25 MB.                                 |
| Forwarding inline images         | Forward inline images within conversations.                                 |
| Table (insert table, add/delete column left/right, delete table) | Create tables and modify columns or delete tables. |
| Copy-paste table                 | Allows users to copy and paste tables into the editor.                      |
| Code block                       | Supports code block insertion for multi-line code snippets.                 |
| Horizontal ruler                 | Insert horizontal rulers to separate sections within the text.              |
| Undo                             | Undo the most recent action.                                                |
| Redo                             | Redo an action that was undone.                                             |


![image](https://hackmd.io/_uploads/S1K8N5hR0.png)



-------------

### Keyboard shortcuts in the tickets screen

The tickets screen in the Yellow.ai inbox comes with a set of predefined keyboard shortcuts, designed to enhance productivity. Depending on the features you’re using in the tickets screen, some shortcuts may vary.

#### Essentials

| Command                  | Windows/Linux   | macOS       |
| ------------------------ | --------------- | ----------- |
| Copy                     | Control + C     | Cmd + C     |
| Cut                      | Control + X     | Cmd + X     |
| Paste                    | Control + V     | Cmd + V     |
| Paste without formatting  | Control + Shift + V | Cmd + Shift + V |
| Undo                     | Control + Z     | Cmd + Z     |
| Redo                     | Control + Shift + Z | Cmd + Shift + Z |
| Add a line break          | Shift + Enter   | Shift + Enter |
| Send (within conversation)| Control + Enter | Cmd + Enter |

#### Text formatting

| Command                  | Windows/Linux   | macOS       |
| ------------------------ | --------------- | ----------- |
| Bold                     | Control + B     | Cmd + B     |
| Italicize                | Control + I     | Cmd + I     |
| Underline                | Control + U     | Cmd + U     |
| Strikethrough            | Control + Shift + S | Cmd + Shift + S |
| Highlight                | Control + Shift + H | Cmd + Shift + H |
| Code                     | Control + E     | Cmd + E     |

#### Paragraph formatting

| Command                  | Windows/Linux   | macOS       |
| ------------------------ | --------------- | ----------- |
| Apply normal text style   | Control + Alt + 0 | Cmd + Alt + 0 |
| Apply heading style 1     | Control + Alt + 1 | Cmd + Alt + 1 |
| Apply heading style 2     | Control + Alt + 2 | Cmd + Alt + 2 |
| Apply heading style 3     | Control + Alt + 3 | Cmd + Alt + 3 |
| Apply heading style 4     | Control + Alt + 4 | Cmd + Alt + 4 |
| Apply heading style 5     | Control + Alt + 5 | Cmd + Alt + 5 |
| Apply heading style 6     | Control + Alt + 6 | Cmd + Alt + 6 |
| Ordered list              | Control + Shift + 7 | Cmd + Shift + 7 |
| Bullet list               | Control + Shift + 8 | Cmd + Shift + 8 |
| Task list                 | Control + Shift + 9 | Cmd + Shift + 9 |
| Blockquote                | Control + Shift + B | Cmd + Shift + B |
| Left align                | Control + Shift + L | Cmd + Shift + L |
| Center align              | Control + Shift + E | Cmd + Shift + E |
| Right align               | Control + Shift + R | Cmd + Shift + R |
| Justify                   | Control + Shift + J | Cmd + Shift + J |
| Code block                | Control + Alt + C   | Cmd + Alt + C   |
| Subscript                 | Control + ,         | Cmd + ,         |
| Superscript               | Control + .         | Cmd + .         |

#### Text selection

| Command                    | Windows/Linux | macOS       |
| -------------------------- | ------------- | ----------- |
| Select all                 | Control + A   | Cmd + A     |
| Extend selection (left)     | Shift + ←     | Shift + ←   |
| Extend selection (right)    | Shift + →     | Shift + →   |
| Extend selection (up)       | Shift + ↑     | Shift + ↑   |
| Extend selection (down)     | Shift + ↓     | Shift + ↓   |




