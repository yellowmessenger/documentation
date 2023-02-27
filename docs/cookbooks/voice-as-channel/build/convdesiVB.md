---
title: Using conversation designer to build a voice bot 
sidebar_label : Using conversation design  
---


:::info 
:bulb: Complete details on designing a voice bot conversation using the conversation design module are explained [here](https://docs.yellow.ai/docs/platform_concepts/design/convdesignvoice). 
:::

In this article, you will understand how to design a conversation with help of an example. 


**Example use case to build a voice bot**

Let us consider a use case to build a *Banking voice bot* that asks a set of questions to identify the user and provide a resolution for the asked queries (as shown in the below conversation). This is a happy conversation flow where the bank account holder provides his name and phone number and asks for the eligible home loan and the bot replies with the details. 

![](https://i.imgur.com/zWCv0tr.png)


Let's break down the conversation:


* **Bot** (asks): What is your name? 
* **User**(replies): Karan
* **Bot**(stores): Karan as Name 
* **Bot** (asks): How may I help? 
* **User**(replies): Loan eligibility 
* **Bot**(understands): User request = Loan eligibility
* **Bot**(logic): Required phone number to calculate Loan eligibility
* **Bot** (asks): What is your phone number?
* **User**(replies): 9890******
* **Bot**(validates if the number is correct): Uses logic to calculate Loan eligibility
* **Bot** (response): You can avail X amount on X% interest. 

--- End of the call ---

:::note
For guidelines to build a good conversation, click [here](https://docs.yellow.ai/docs/cookbooks/getting_started). 
:::

-----

To build this, 

1. Open **Conversation design**. 

    > This will work as a voice conversation designer only if you had selected the Type as Voice while creating a bot). 
    
:::note
Bot persona is already configured with the default settings. To customize further, click **Settings** and select the required options. 

![](https://i.imgur.com/vmKrZgv.png)
:::
    
2. Create a dialogue for the initial conversation: 
    -  Add initial conversation, fetch user details (Example: Name)
    - Ask the determining question to fetch the response from the user(example: Response). 
    - The answer fetched will be the intent based on which the next flows will be executed.

    ![](https://i.imgur.com/fwfSd3u.png)

3. Determine the **Intent** (next action) based on the user input using a condition.
    - If the user response is identified as Loan eligibility, execute **Loan eligibility** flow. 
    - If the response is to create a new bank account, execute the **Crete account** flow. So on...  

    ![](https://i.imgur.com/AzIT8BX.png)

4. Create the next flows based on the obtained information. That is- loan eligibility flow. 
    - Two dialogues are used in this because, after obtaining the phone number a logical action must be performed where the number is verified on the database and the loan details are obtained. This can be added on **Studio**. 

    ![](https://i.imgur.com/pwa8dss.png)    

5. **SSML Settings**:

    - Configure fallbacks that are spoken out when the user responds with an unexpected message. 

    ![](https://i.imgur.com/eJCDSe2.png)

    - Add node-level settings like emphasis, interpret, pause, and music. 

    ![](https://i.imgur.com/cvgJlI4.png)

6. You can [preview](https://docs.yellow.ai/docs/platform_concepts/design/convdesignvoice) the design by connecting your bot to the IVR number and requesting a call. 

7. Switch to **Studio**. Flows are in sync with the design module.
    - Text entered in the dialogue boxes are segregated and converted to Voice inpute nodes with SSML configurations. 
    - You can edit the flows further. For example, open the **Loan eligibility** flow, add database and function to calculate the loan and interest rate. 

    ![](https://i.imgur.com/tbvwtgH.png)

8. Publish the changes. Once approved, the voice bot will go live and can receive customer calls. 