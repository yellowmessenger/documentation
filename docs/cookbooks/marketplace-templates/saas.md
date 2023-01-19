---
title: SaaS template
sidebar_label : SaaS template
---


Software as a service (or SaaS) is an industry concept of delivering applications over the internet. Marketplace's SaaS template is designed to promote an industry's SaaS products to customers and offer them a product demo.

Along with an option to explore products and offerings, customers can also view case studies of how this product was implemented to renowned customers and how it benefited them (customer testimonials). Customer can also book a product demo with a company executive and chat with live support agents.

You can customize this template as per your industry and business requirements. Reuse this flow design for your platform offerings (SaaS products), and add your customer use cases. 

![](https://i.imgur.com/halY2LR.png)

**Template use case**
This template is built around the use case to help customers explore the products provided by yellow.ai. One can learn about the platform offerings based on the descriptions of custom use cases, channels (like WhatsApp, or Instagram), or industries(government, private sector). These flows are built to promote products and urge the user to book a demo. 
Bot users can also read customer use cases from the main flow, directly book a demo, or talk to an agent. 




------

## 1. Prebuilt use cases 

The most common use cases (flows) are prebuilt in this template for a SaaS industry to promote their products, following are the flows:


1. **Home flow/Display menu**: After the welcome message is displayed, WelcomeLCsXc is executed. It is the home flow that is designed for WhatsApp and other channels. It displays the menu a bot user can select as soon as the bot starts conversing.
2. **Explore products and offerings**: This flow is designed to provide insights into the available products. Based on the user's choice, the flow will switch to the respective product flow (explore by use case/channel/industry).
    - **Explore by (use case, channel, and industry)**: These flows are cloned flows. They are all designed to display a description of the product and prompt the bot users to book a demo. 
3. **Customer case studies**: This flow is designed to give a brief description of the company and its impact on the industries. It allows the bot user to select and explore the use cases implemented for a list of industries and read their testimonials. A pre-recorded demo/images can be displayed as a promotion and finally, the bot user will be prompted to book a demo.
4. **Book a demo**: This flow collects the bot user's details(name, number, email) and displays a calendar and clock to select a preferred time and date to schedule a call with the executive to understand the product in depth. 
5. **Connect with support**: This flow provides customer support either by fetching answers from the trained FAQs or by connecting the bot user directly to the support agent after collecting the details (name, number, query).




These flows are explained in detail in the further sections. 

:::note
The start trigger is a starting point at which the flow gets triggered(or executed). A flow can get triggered when a particular intent/entity/event/URL is identified or a flow can get triggered when [Execute flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes/#15-execute-flow) node is used in other flows. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#-1-configure-start-trigger) to learn more.
:::

---

### 1.1 Display the main menu

1. **Start trigger**: Immediately after displaying the welcome message, WelcomeLCsXc is triggered. 
    - At the end of each flow there is an option to go back to the main menu, when the *Main menu* button is clicked, WelcomeLCsXc is expected to be triggered. 
    - It can also be triggered at any point of the conversation when the bot user types a sentence that matches the intent- *Main menu* options. You can customize this [intent.](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#11-zero-shot-model) 
2. **Identify the channel**: A logic node ([channel filter](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#2-channel-filter)) is used to identify the channel in which the bot conversation is happening. Nodes used in the further flow will be based on the channel.
3. **Quick reply buttons to display menu options**: For WhatsApp channel, [WhatsApp list](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#22-whatsapp-list) node is used to display the 4 menu options. Similarly, for other channels, [Quick reply](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies) node is used to display the 4 menu options (Explore products and offerings, Customer case studies, Book a demo, and Connect with support).

![](https://i.imgur.com/xNrrTlI.png)


#### :pushpin: Tips

- You can add [multiple channels](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview) to your bot, to reach the users through any mode.
- If you have varied products/menu options, you can add (or delete) the quick reply buttons and customize what can be displayed in the main menu. 

---

### 1.2 Explore products and offerings

1. **Start trigger**: This flow is triggered when the bot user selects Explore products and offerings button when menu options are displayed. 
    - It can also be triggered at any point of the conversation when the bot user types a sentence that matches with the intent- *Products and offers* options. You can customize this [intent.](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#11-zero-shot-model) 
2. **Display categories of products**: With a [carousel](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#16-carousel) node, 3 product categories are displayed. 
3. **Verify product selection and execute the next flow**: After the bot user selects an option from the carousel node, the response (which is a trained entity value) is identified for the category using an if-else logic ([condition node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#1-condition)) and the respective flow for the selected category is executed by using [Execute flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#15-execute-flow) node. 
    - ```Explore_products```  is an [entity](https://docs.yellow.ai/docs/platform_concepts/studio/train/entities) which is trained for 3 categories of ```entity value``` (explore by use case, channel, and industry). The response obtained by clicking the carousel button will be identified as an entity value. 
    - If ```entity value``` is equal to ```Explore by use case```- **Explore by use case** flow will get executed.
    - Else, if ```entity value``` is equal to ```Explore by channel```- **Explore by channel** flow will get executed.
    - Else, if ```entity value``` is equal to ```Explore by industry```- **Explore by industry** flow will get executed.
    - If none of the options are selected, a text will be displayed ([text node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#1-text)) asking the bot user to retry. 



![](https://i.imgur.com/0FdumwC.png)

#### :pushpin: Tips

- You can add more details about your product using a text node before displaying a carousel node. 
- You can add text, images, and more product category buttons to the carousel node. 
    - If you add new products, train those entity values on the [entity](https://docs.yellow.ai/docs/platform_concepts/studio/train/entities) section. Edit @explore_products and add a new list of product entity values.

![](https://i.imgur.com/UMqgMp3.png)

- If none of the if-else conditions(categories) are selected, you can connect the last else condition to the **Execute flow** node and execute book a demo/connect to an agent or any of your custom flows. 

-----
### 1.3 Explore by use case, channel or industry

> Explore by use case, Explore by channel and Explore by industry flows are designed in the same fashion to provide details about the respective category. Only the information(text/images) varies. This flow is explained by using Explore by channel as an example. 

1. **Start trigger**: This flow is triggered when the category is selected in the **Explore products and offerings** flow. 
2. **Display sub-categories**: Using a [carousel node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#16-carousel), sub-categories (Channels: Voice, Instagram, WhatsApp) are displayed. 
3. **Verify the selected category and display details**: ```Explore_by_channel```  is an [entity](https://docs.yellow.ai/docs/platform_concepts/studio/train/entities) which is trained for 3 categories of ```entity value``` (Voice, Instagram, WhatsApp). The response obtained by clicking the carousel button will be identified as an entity value. If ```entity value``` is equal to ```Voice automation```, voice related details are displayed using [Text](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#1-text), [Video](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#4-video), and [Image](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#2-image) nodes. Similarly, when Instagram/WhatsApp are identified, the respective details are displayed. 
4. **Next action**: After learning about the product, the bot user can select what to do next- two options (Book a demo and Main menu) are displayed using the [carousel](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#16-carousel) node. Book a demo or WelcomeLCsXc flow is executed next based on the response. 

![](https://i.imgur.com/eHluZ3i.png)


#### :pushpin: Tips

- Display varied number of sub categories by adding(or deleting) new buttons to step 1 (carousel node). Update the newly added values in @explore_by_channel on the entities page. 
- Use other [message nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes) like files or carousel to display product details. 
- Next action carousel node can also have options to connect to an agent or any of your custom flows. 

------


### 1.4 Case studies 

1. **Start trigger**: Triggered when the **Customer case studies** option is selected from the main menu (WelcomeLCsXc). 
    - It can also be triggered when the bot user types a sentence that matches the intent- *customer case studies* options. You can customize this [intent.]
2. **Display an intro and sub-categories**: Using a [text node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#1-text), details about the company are displayed followed by a carousel node to allow the bot user to select a category that they would like to learn more about (banking, retail, and government). 
3. **Verify the category selected**: The selected category from the carousel is identified using a [condition node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#1-condition). 
- ```@case_studies``` entity is trained to identify case studies categories as ```entity values```.  
    - If ```entity value``` is equal to ```Retail``` the flow continues to show details pretaining to Retail. Likewise for the other categories. 

> After selecting a category, the flow can be further designed to help the user understand the product, read case studies, watch demos, etc. This can be replicated for all the categories. 

4. **Display introduction for the case study**: With [message nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes) all the information related to the case study can be displayed. A **Text node** is used here.
5. **Identify channel and display quick replies**: Channel is identified using [channel filter](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#2-channel-filter) node. If the bot user is conversing from a WhatsApp channel, [Carousel](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#16-carousel) node is used to display the 3 menu options. Similarly, for other channels, [Quick reply](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies) node is used to display the 3 menu options (Read more, See bot in action, Go back).
6. **Identify the selected option and display details**: [Condition node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#1-condition) is used to identify the selected options.
    - If **Read more** is selected, [Text node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#1-text) is used to display the detailed case study. 
    - If **See bot in action** is selected, an [image node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#2-image)/ [video node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#4-video) is used to display demo. 
    - If **Go back** is selected, the flow goes back to the previous node. This is configured in the [Tools section > Behaviour > Go back alias](https://docs.yellow.ai/docs/platform_concepts/studio/tools#221-behaviour).
7. **Next action**: 2 options (Book a demo and Main menu) are displayed using a carousel node. Depending on the option selected, intent is identified and respective flows are executed. 

![](https://i.imgur.com/WecYR8R.png)

#### :pushpin: Tips

- Use message nodes to display more details.
- Provide varied options to the bot users by adding/deleting buttons on the carousel/ quick reply nodes. 


----------

### 1.5 Book a demo 

1. **Start trigger**: This flow is triggered when the bot user selects **Book a demo** button when menu options are displayed. 
    - It can also be triggered at any point of the conversation when the bot user types a sentence that matches with the intent- *I want to book a demo* options. You can customize this [intent](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents).
2. **Collect user details and identify the channel**: [Text nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#1-text) are used to create a conversational flow. [Name](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#12-name), [Email](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#15-email) and [Phone](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#13-phone) nodes are used to collect user details. [Channel filter](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#2-channel-filter) (condition node) is used to identify the channel in which the user is conversing in, based on the channel, date and time are collected. 

> Different methods(nodes) are used for different channels as the format to obtain the date and time in each channel is different. 


3. **Schedule demo (obtain Date and Time) for WhatsApp channel**: 
    - Using [Question](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#11-question) node, the bot user is asked to enter the date in DD/MM/YYYY format. 
    - ```@demo_date``` [entity](https://docs.yellow.ai/docs/platform_concepts/studio/train/entities) is trained in the entities section for the pattern - 	```([0-2][0-9]|(3)[0-1])(/)(((0)[0-9])|((1)[0-2]))(/)\d{4}```. Using [Condition](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#1-condition) node, it is verified if the user entered the date in DD/MM/YYYY format.
    - If the date entered is correct, the date value is stored in a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables) - **demoDate**.
    - Using [Question](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#11-question) node, the bot user is asked to enter the time in HH:MM format. 
    - ```@demo_time``` [entity](https://docs.yellow.ai/docs/platform_concepts/studio/train/entities) is trained in the entities section for the pattern - 	```([0-1]?[0-9]|2[0-3]):[0-5][0-9]```. Using [Condition](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#1-condition) node, it is verified if the user has entered the date in HH:MM format.
    - If the time entry is correct, the time value is stored in a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables) - **demoTime**.
    - **getCalenderTime** is a [function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) that is written to return **start** and **end** date-time (each scheduled meeting lasts for 30 min). **demoDate** and **demoTime** variables are passed into getCalenderTime function, and the code will calculate and return the **start** and **end** date and time. This output is stored in **StartDateTime** variable. 

![](https://i.imgur.com/cTfgzDz.png)


4. **Schedule demo (obtain Date and Time)  for other channels**: Using the [Date](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#21-date) node (**Single date picker** widget type for date and **Time picker** widget type for time), Date and Time are stored in 2 [variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#31-create-a-variable-via-nodes) (Day and Timeslot). Day and Timeslot variables are passed into the getCalenderTime function. 
    - **getCalenderTime** is a [function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) that is written to return **start** and **end** date-time (each scheduled meeting lasts for 30 min). **Day** and **Timeslot** variables are passed into getCalenderTime function, the code will calculate and return the **start** and **end** date and time. This output is stored in **StartDateTime** variable. 

![](https://i.imgur.com/5tR24lf.png)

5. **Create Google calender event**: [Google calender third party integration](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/google-calendar) is enabled from the **Integrations** section. The details obtained from the conversation are passed into the **Google calendar** node to schedule a meeting (Title, Description, Start and End time, and Host and guest email).
6. **Identify the channel and display options to Confirm or Reschedule booking**: After the meeting is scheduled successfully, using the [Condition](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#2-channel-filter) node, the channel is identified. If the identified channel is WhatsApp, [Carousel](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#16-carousel) node is used to display options to **Reschedule/Confirm**. If the bot conversation is happening from other channels, the [Quick replies](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies) node is used to display **Reschedule/Confirm** options. 

    - **Reschedule booking**: If Reschedule is selected, the flow is directed back to step#3 to schedule a meeting from the beginning. 
    - **Confirm booking**: If the booking is confirmed, using a [Database](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) node, meeting details(**name, email, phone, demodate and demotime**) are stored in ```book_a_demo``` table ([table](https://docs.yellow.ai/docs/platform_concepts/studio/database) and respective columns are existing with the name ```book_a_demo```)


![](https://i.imgur.com/oBJQqzn.png)


#### :pushpin: Tips 

- Date and time format can be edited by changing the pattern of the respective entities. 
- Other integrations can be used to book a meeting.
- Collect required details using [Prompt](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) nodes and store the data in variables. 

---------

### 1.6 Connect with support

1. **Start trigger**: This flow is triggered when the user selects **Connect with support** quick action from the main menu (WelcomeLCsXc flow). This flow can also be triggered when the bot user's input matches with any of the sentences(utterances) trained for **Queries and concerns** [intent](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents).
2. **Display and verify support options (Agent/FAQs)**: With a [carousel](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#16-carousel) node, two options (Chat with support and FAQs) are displayed. The type of support selected is identified using [condition node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#1-condition). ```@queries_and_concerns``` entity is trained to identify FAQs and Chat with support as ```entity values```.  
    - If the FAQs option is selected, answers to the user queries will be fetched from the trained FAQs. 
    - If Chat with support is selected, a support agent will be connected to take the conversation forward. 
3. **FAQs**: All the FAQs about the company are added and trained with the answers in the [FAQs section](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs). When FAQs is selected, a condition node ([channel filter](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#2-channel-filter)) is added to identify the channel from which the conversation is taking place. 
    - If the conversation is happening on WhatsApp, [WhatsApp list](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#22-whatsapp-list) node is used to display the list of FAQs.
    - If the conversation is via other channels, [Quick reply](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies) node is used to display the list of FAQs. 
    -  User can also type the query in the input bar.
    -  Based on the selection/entry, the answer will be fetched from the trained FAQs. 

![](https://i.imgur.com/OFyuQW1.png)


4. **Chat with support**: [Prompt nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) are used to fetch the bot user's information such as **phone number**, **name** and **query**. These details are stored in the [respective variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#31-create-a-variable-via-nodes) and passed into the [Raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) action node, this will connect the user to the support agent.  

> Inbox must be set up to connect the bot user to a live support agent. A support agent must be available (online) when the support request is raised. Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox) to learn about Inbox. 

![](https://i.imgur.com/0vH57oY.png)



#### :pushpin: Tips 

- Add/ Delete the number of FAQs listed on the Quick reply node. 
- Add [FAQs](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs) based on your industry. 

![](https://i.imgur.com/lVV0HnS.png)


- **Name** and **Query** are the mandatory fields to use a **Raise ticket** node. You can reduce the prompt nodes to avoid collecting details from the users prior or you can add more prompt nodes to collect other details before connecting to the agent.
- You can fetch user details using **Prompt** nodes even if the user selects FAQs. This data can be used later for acquisition or monitoring purposes. 

------

<!--
## 2. Build your use case 

TBA
-->


