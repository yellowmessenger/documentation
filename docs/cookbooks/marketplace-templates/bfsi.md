---
title: Banking, Financial Services and Insurance (BFSI) template
sidebar_label: BFSI template
featured: true
---

Online banking has now made daily transactional tasks easier for all consumers. Banks are exploring more options to provide user-friendly features through phone and online platforms, resulting in saving time, ease of usage, lower fees, improved customer service and security. 
**BFSI template** is designed to accommodate daily banking needs via WhatsApp and other web channels.


![](https://i.imgur.com/u7V7lG5.png)


**Template use case**

Pre-built use cases accommodate basic online banking features such as creating an account, applying for a loan, checking the loan Status, calculating EMI, and connecting to support for better resolution. 
The template can be customized for complex use cases, like digital banking options (paying bills online), or simple ones like applying for a debit card, and viewing transaction history. 

-------------------

## 1. Prebuilt use cases

The following are the most common use cases (flows) that are prebuilt in this template:

1. **Start**: After providing a brief introduction about the bank and its offerings, this flow provides options to bot users on WhatsApp and the web to Create an account, Apply for a loan, View the Loan Status, Calculate EMI or Connect to support for better resolution. 
2. **Create new account**: This flow assists with creating a new savings or current account for the bank customer. It collects customer details like bank account type, name, email ID, phone number, PAN, and Aadhar number. Once the PAN and aadhar numbers are verified, a new account is created. 
3. **Apply for Loan**: This flow provides loan options like Car loans, Home loans, and Education loans. It collects the loan requirements such as type of loan, phone number, name, Aadhar card, PAN number, and request loan amount. Aadhar and PAN numbers are verified, and on successful completion,  an application is generated. 
4. **Loan status**: This flow displays the loan status of the existing loan application(approved, rejected, or other comments) for the entered phone number. 
5. **EMI calculator**: This flow calculates the EMIs applicable for the loan amount. It collects the loan amount, rate of interest, and loan tenure. Based on the given details, EMI is calculated.  
6. **Connect with support**: This flow provides customer support either by fetching answers from the trained FAQs or by connecting the bot user directly to the support agent to address complex queries.

These flows are explained in detail in the further sections.



:::note
A flow triggers when a particular intent/entity/event/URL is identified or when the [Execute flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes/#15-execute-flow) node is used in other flows. See [start trigger](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#-1-configure-start-trigger) for more details.
:::

---

### 1. Start - Display the main menu 

1. **Start trigger**: Immediately after displaying the welcome message, **Start** flow is triggered. 
    - It can also be triggered at any point of the conversation when the bot user types a sentence that matches with the [intent](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents)- ```Main menu options```. 
2. **Identify the channel**: A logic node ([channel filter](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#2-channel-filter)) is used to identify the channel in which the bot conversation is happening. Nodes used in the further flow will be based on the channel.
3. **Quick reply buttons to display menu options**: Five menu options (**Create an account, Apply for loan, Loan Status, Calculate EMI, and Connect with support**) are displayed. For WhatsApp, these are shown as Quick reply buttons using the [WhatsApp list](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#22-whatsapp-list) node, and for other channels, these are shown as menu options using the [Quick reply](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies) node.

![](https://i.imgur.com/cb9AaDa.png)


#### :pushpin: Tips 

- You can add multiple [channels](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview) to your bot to reach out to your users through any mode.
- If you have varied menu options, you can add (or delete) the quick reply buttons and customize what can be displayed in the main menu.

-----------

### 1.2 Create a new account

1. **Start trigger**: This flow is triggered when the bot user selects the **Create an account** button after the menu options are displayed (start flow). 
    - It can also be triggered at any point of the conversation when the bot user types a sentence that matches with the [intent](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents)- ```Create new account```. 
2. **Fetch account type, name, email ID, and phone number**: Using a [carousel](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#16-carousel) - account type is obtained (**savings and current**) and using other prompt nodes - [name](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#12-name), [email](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#15-email) and [phone number](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#13-phone) are fetched and stored in the respective variables - ```account_type, customerName, customerEmail, customerPhone```

![](https://i.imgur.com/gC9x2sq.png)


3. **Fetch and validate PAN number**: 
    - With the [Question](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#11-question) node, the **PAN number** is obtained and stored in a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables) - ```panNumber```.  
    - [Function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) - *panValidator* is run and its response is stored in a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables)-    ```isValid```.  
    - *panValidation* function verifies if the number entered is a 10-digit alphanumeric expression. If the entered format matches the following conditions, the response is returned as *True*. 
        - The first five characters are letters in which the first three characters are a sequence of AAA-ZZZ.
        - The fourth character identifies the type of PAN card holder.
        - The fifth character is the first letter of the person's surname.
        - Remaining characters are numbers followed by the one alphabet.
    - Using a [condition](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes) node, it is validated if the response(```isValid``` variable value) is True. If it is true, PAN is verified. Otherwise, the number must be re-entered.  


4. **Fetch and validate Aadhar number**: 
    - With a [Question](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#11-question) node, **Aadhar number** is obtained and stored in a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables) - ```aadhar```.  
    - [Function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) - *aadharCardValidation* is run and its response is stored in a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables)- ```isValid```.  
    * *aadharCardValidation* function verifies if the number entered is a 12-digit regex expression. If the entered format matches ```/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/```, the response is returned as *True*. 
    - Using [condition](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes) node, it is validated if the response(```isValid``` variable value) is True. If it is true, Aadhar is verified. Otherwise, the number must be re-entered.  


![](https://i.imgur.com/nzYjMaX.png)

5. **Create account and store details in database**: After the PAN and Aadhar numbers are verified, the [database](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) node is used to store the entered details into the [table](https://docs.yellow.ai/docs/platform_concepts/studio/database) - ```Bank accounts```. Once the record is added, the account is successfully created. 


![](https://i.imgur.com/vAmYxl8.png)


#### :pushpin: Tips 


- After the account is created, you can use [message](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes) nodes to display/promote other banking features that the customers can avail immediately. 
- Using [prompt](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) nodes, customer details such as location, salary range, etc. can be obtained. 
- You can verify the phone number using [send OTP](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#12-send-otp) and [verify OTP](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#13-verify-otp) nodes.

-----------

### 1.3 Apply for loan



1. **Start trigger**: This flow is triggered when the bot user selects the **Apply loan** button when menu options are displayed (start flow). 
    - It can also be triggered at any point of the conversation when the bot user types a sentence that matches with the [intent](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents)- ```Apply for loan```.

2. **Display available loan types**: Loan types (Car loan, education loan, home loan) are displayed using a [Quick reply](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies) node. If the loan type does not match with the customer requirement, a custom type can be entered ([question node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#11-question)). Entered loan type is stored in a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables) - ```Loan```. 
3. **Fetch phone number and name**: Applicants phone number and name is obtained through [Phone](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#13-phone) and [Name](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#12-name) nodes.

![](https://i.imgur.com/WSgj4TV.png)

4. **Fetch and validate Aadhar number**: 
    - With a [Question](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#11-question) node, **Aadhar number** is obtained and stored in a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables) - ```aadhar```.  
    - [Function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) - *aadharCardValidation* is run and its response is stored in a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables)- ```isValid```.  
    * *aadharCardValidation* function verifies if the number entered is a 12-digit regex expression. If the entered format matches ```/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/```, the response is returned as *True*. 
    - [Condition](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes) node validates the isValid variable of the response. If the response is True, Aadhar is verified. Otherwise, the number must be re-entered.  

5. **Fetch and validate PAN number**: 
    - With a [Question](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#11-question) node, **PAN number** is obtained and stored in a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables) - ```panNumber```.  
    - [Function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) - *panValidator* is run and its response is stored in a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables)- ```isValid```.  
    - *panValidation* function verifies if the number entered is a 10-digit alphanumeric expression. If the entered format matches with the following conditions, the response is returned as *True*. 
        - The first five characters should be letters in PAN card where the first three chars are a sequence of AAA-ZZZ.
        - The fourth character identifies the type of PAN card holder.
        - The fifth character is the first letter of the person's surname.
        - The remaining characters are numeric followed by an alphabet.
    - [Condition](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes) node validates the isValid variable response. If it is True, PAN is verified. Otherwise, the number must be re-entered.


![](https://i.imgur.com/4uu4TwK.png)

6. **Select loan amount**: Different loan amounts (1,00,000 and 2,50,000) are displayed using a [Quick reply](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies) node (to obtain a loan of amount other than the given option, customer can contact the support)The selected amount is stored in a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables) - ```Amount```. 

7. **Display options to modify the entered details**: The entered details which are stored in respective variables are displayed through a [Quick reply](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies) node and display quick reply buttons to modify the entered details (**Loan type, phone number, name, Aadhar, PAN, loan amount**). Based on the option selected, values are modified. For example, if the name is selected, the name node is prompted and a new name can be entered, which will be stored in the [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables)-```name```. 

![](https://i.imgur.com/IgSYK5K.png)

8. **Create application and store details in the database**: If **No change** button is selected, *applicationNumber* - [function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) is called and **Application number** is generated. ```Loan application``` [table](https://docs.yellow.ai/docs/platform_concepts/studio/database) is created and all these details (variable values) are inserted into the respective columns. 


![](https://i.imgur.com/OpTJPQg.png)



#### :pushpin: Tips 

- Use [prompt](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) nodes to collect more customer details while applying for a loan.
- You can verify the phone number using [send OTP](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#12-send-otp) and [verify OTP](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#13-verify-otp) nodes.

----------

### 1.4 Loan status

1. **Start trigger**: This flow is triggered when the bot user selects the **Loan status** button from the menu options (start flow). 
    - It can also be triggered at any point of the conversation when the bot user types a sentence that matches with the [intent](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents)- ```Status of my loan```. 
2. **Fetch registered phone numbered**: Using the [phone node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#13-phone) the registered phone number is obtained and stored in the ```customerPhone``` variable. 

> There must be an existing loan application to check its status. 

3. **Search for the application status from the database table**: ```Loan application``` [table](https://docs.yellow.ai/docs/platform_concepts/studio/database) is created with required columns to store all the loan application details and their statuses. Using a [Database node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) in the flow, the application details of the entered phone number are fetched. 

> **Database node**: The response obtained from this node is a result of the **Search** operation performed on the table **Loan application** where the **Phone number** (table's column) matches the ```customerPhone``` (phone number variable entered by the bot user). This response is stored in a variable ```dbresp```. 

![](https://i.imgur.com/xxrTA8c.png)

4. **Display loan status**: Response obtained from the database consists of the status, which is stored in the ```dbresp``` variable. It is displayed using a [Text node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#1-text) and a variable: ``` {{{variables.dbresp.records.0.status}}}```
    - If the phone number entered by the customer does not exist (in the ```Loan application``` database), a message - "Application was not found, the application number does not exist." is displayed using a [Text node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#1-text).

![](https://i.imgur.com/cZE0FwK.png)


#### :pushpin: Tips 

- If the loan application does not exist, you can direct the users to apply for a loan. 
- This template can be customized to prompt the customer to apply for a loan and display other banking options (like applying for a credit card, EMI, etc.). 


-----------

### 1.5 EMI calculator 

1. **Start trigger**: This flow is triggered when the bot user selects the **Calculate EMI** button from the menu options (start flow). 
    - It can also be triggered at any point of the conversation when the bot user types a sentence that matches with the [intent](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents)- ```Calculate loan EMI```. 
2. **Fetch Amount, Interest, and Tenure**: [Question nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#11-question) are used to obtain loan amount, specified interest rate, and loan tenure in months, these values are stored in three variables (```selectedLoanAmount```, ```selectedIr``` and ```selectedTenure```)
3. **Calculate and display EMI amount**: A function node is used to calculate EMI with the data obtained through question nodes. With help of a [Text node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#1-text) expected EMI is displayed. 
``` 
EMI = P × r × (1 + r)n/((1 + r)n - 1) 
(P= Loan amount, r= interest rate, n=tenure in number of months)
```

![](https://i.imgur.com/qHw4bbD.png)

#### :pushpin: Tips 

- This flow can be cloned and math operations can be used to modify the EMI function to calculate interest obtained on a savings account, current account, fixed deposit, recurrent deposit, etc. 

----------


### 1.6 Connect with support

1. **Start trigger**: This flow is triggered when the user selects **Connect with support** quick action from the start menu. This flow can also be triggered when the bot user's input matches with any of the sentences(utterances) trained for the ```chatWithAgent``` [intent](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents).
2. **Display and verify support options (Agent/FAQs)**: With a [carousel](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#16-carousel) node, two options (Chat with support and FAQs) are displayed. The type of support selected is identified using [condition node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#1-condition). ```@queries_and_concerns``` entity is trained to identify FAQs and Chat with support as ```entity values```.  
    - If the FAQs option is selected, answers to the user queries will be fetched from the trained FAQs. 
    - If Chat with support is selected, a support agent will be connected to take the conversation forward. 
3. **FAQs**: All the FAQs are added and trained with the answers in the [FAQs section](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs). When FAQs is selected, a condition node ([channel filter](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#2-channel-filter)) is added to identify the channel from which the conversation is taking place. 
    - If the conversation is happening on WhatsApp, [WhatsApp list](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#22-whatsapp-list) node is used to display the list of FAQs.
    - If the conversation is via other channels, [Quick reply](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#14-quick-replies) node is used to display the list of FAQs. 
    -  User can also type the query in the input bar.
    -  Based on the selection/entry, the answer will be fetched from the trained FAQs. 

![](https://i.imgur.com/N3XaYml.png)


4. **Chat with support**: [Prompt nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) are used to fetch the bot user's information such as ```phone number```, ```name```, and ```query```. These details are stored in the [respective variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#31-create-a-variable-via-nodes) and passed into the [Raise ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#17-raise-ticket) action node, this will connect the user to the support agent.  

> Inbox must be set up to connect the bot user to a live support agent. A support agent must be available (online) when the support request is raised. Click [here](https://docs.yellow.ai/docs/platform_concepts/inbox) to learn about Inbox. 

![](https://i.imgur.com/FEn6CQz.png)



#### :pushpin: Tips 

- Add/ Delete the number of FAQs listed on the Quick reply node. 
- Add [FAQs](https://docs.yellow.ai/docs/platform_concepts/studio/train/add-faqs) based on your industry. 

![](https://i.imgur.com/GAmjyQ7.png)

- **Name** and **Query** are the mandatory fields to use a **Raise ticket** node. You can reduce the prompt nodes to avoid collecting details from the users prior or you can add more prompt nodes to collect other details before connecting to the agent.
- As per bank requirements, you can fetch user details (name, email address, number) using **Prompt** nodes even if the user selects FAQs. This data can be used later for acquisition or monitoring purposes. 









