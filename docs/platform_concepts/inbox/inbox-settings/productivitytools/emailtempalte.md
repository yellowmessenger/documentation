---
title: Email templates 
sidebar_label: Email templates 
featured: true
---

In this article, you will learn: 
1. [How to create email templates?](#2)
2. [How to use email templates?](#3)


#### <a name="1"></a> Email Templates 

With the email templates feature, inbox admins can create branding templates that can be used by the inbox agents to establish that the agent interactions follow the branding guidelines.  It can be sent to the customers directly while creating and responding to the [email tickets](https://docs.yellow.ai/docs/platform_concepts/inbox/tickets/tickets_intro).  These pre-made Email templates can be designed with complete details (without the agent's input) or admins can allow the agents to add their responses to the template. 



## <a name="2"></a> 1. Create email templates 

:::note
Only inbox admins can create email templates.
:::

To create email templates, follow the below steps: 

1. Open **Inbox** > **Settings**. 
2. Search and select **Email template**. 

![](https://i.imgur.com/AfrCf8k.png)

3. Click **+Create template**. 

![](https://i.imgur.com/lyLXyII.png)

4. Enter any relevant template **Name** and select the **Body** (editor type) based on the elements you would like to add to your template.
    - **HTML editor**: HTML tags are added by default, you can enter the title between the title tags. Enter the email text between body tags. Add variables using ```{{ content }}```. Other elements can be added following the HTML syntax.
    ![](https://i.imgur.com/JvSvP4r.png)
    - **Plain text editor**: You can add only text and variables to this template. Add variables using ```{{ content }}```. 
    ![](https://i.imgur.com/Ckq4mwM.png)


:::note
**Add Dynamic variables to email templates**

To add variables to the template that gets dynamically updated with the relevant data, click on the variables icon available at the top of the editor. Click **Add** next to the available variables. 

![](https://i.imgur.com/Ha7ENeC.png)

- {{content}} gets updated with the agent's response. 
- Other Ticket details and bot details are automatically updated. For example, Hi! I'm {{agent.name}} Thanks for talking to {{bot.botName}}! will be rendered as Hi! I'm John! Thanks for talking to MIA!
:::



5. Check how the design looks on the web and app interface. Click **Create template**. 

![](https://i.imgur.com/c3eGtKq.png)

**Other options: **

6. All the email templates will be visible on the settings page. 
    - You can select a default template to be sent to the users automatically with the ticket (even without agents selection) by selecting a template name from the dropdown.  
    
    <img src="https://i.imgur.com/YQ9yai1.png" alt="drawing" width="60%"/>
    
    - Search and select a template by typing the name on the search bar. 
    
    ![](https://i.imgur.com/Ll7gFjs.png)
    
    - Click the template name and choose to Edit/Delete the template. 
    
    ![](https://i.imgur.com/NsPctUg.png)




## <a name="3"></a> 2. Use email templates to respond to email tickets 

:::note
Inbox admins and agents can use email templates while responding to or creating new email tickets. 
:::

Follow the below steps to use email templates: 

1. Click the **Quick actions** option that is available on the email ticket screen (**Inbox** > **Tickets**). Click **Send template**.

![](https://i.imgur.com/HBlpiAy.png)

2. Select the required template and click **Insert**. 

![](https://i.imgur.com/7x4Dy1D.png)

3. The template is inserted. 
    - Type the content in the email that will get updated to the ```{{content}}``` variable in the template. 
    - Click **Change** to add a different template. 
    - Click **Remove** to delete this template from the email. 
    - Click **Preview** to view the complete template. 

![](https://i.imgur.com/ao5BT3t.png)

**Sample preview:** 

![](https://i.imgur.com/nCo1hLa.png)

4. Fill in the other details and send the response. 


![](https://i.imgur.com/Vpl0WR7.png)



