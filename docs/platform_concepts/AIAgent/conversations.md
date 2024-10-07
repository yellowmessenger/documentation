---
title: Design smart conversations   
sidebar_label: Customise conversations  
---


On the **Conversations** page, you can design the bot's interactions with users by writing prompts that define skills (dynamic flows). These prompts, along with fine-tuned responses, enable the bot to understand user inputs and provide appropriate outputs, eliminating the need for traditional NLP training.

With **OrchLLM**, intent is identified, allowing for context-based conversations and seamless flow switching. A well-designed bot should manage multiple conversations, such as a banking bot handling loan applications, checking account balances, or creating bank accounts. Structuring these distinct flows ensures the bot can deliver accurate, context-aware responses for various requests.

-----

## Create new conversations

To create new conversations, follow these steps:

1. Click **+New conversation**.  
   ![image](https://hackmd.io/_uploads/H1rfDwXRA.png)
2. **Add basic introduction**:
    - **What does the user say to start this goal?**: Add the keywords or messages (separated by commas) that will trigger this conversation. For example, if the user wants to apply for a loan, keywords like "needs a loan" or "financial needs" should trigger the goal.
    - **Start message**: Write the message that will be displayed once the conversation is triggered, within 200 words. For example: "I'm glad you decided to take the first step towards your financial needs. What can I call you?"  
   ![image](https://hackmd.io/_uploads/BkFgpDmRR.png)

3. **Goal setup**: Define how the conversation will proceed and what the bot must do.
    - **Steps to follow to achieve the goal**: In 2000 words, describe how the conversation should flow. For instance, in a loan application conversation:
      ```
      1. After the user shares their name, ask for their mobile number (mandatory for loan processing).
      2. Check if there's an existing loan associated with the phone number. If so, show loan details and ask the user to contact support@yellow.ai for further assistance, as only one loan is allowed per user.
      3. If no loan exists, ask for the loan amount and repayment tenure. The tenure must be between 6 months and 5 years. Provide 5 options for both the amount and the tenure.
      ```
    - **Rules to follow during the conversation**: Define rules for the bot to follow, such as addressing the user by name. You can add rules by clicking **+ Add rule** and remove them by clicking the delete icon.  
   ![image](https://hackmd.io/_uploads/HJtSf5Q0C.png)

4. **Handle user queries**: Set instructions on how the bot should handle user responses.
    - **Custom instructions**: Enable custom instructions if you want the bot to recognize specific user questions and provide predefined responses. You can list these custom instructions within 500 words. For example: When asked about interest rates, respond that they are competitive, based on credit score, loan amount, and term.
    - **Handling out-of-scope queries**: Provide guidelines (within 500 words) on how the bot should respond when the user asks questions outside the scope of the conversation.  
   ![image](https://hackmd.io/_uploads/Hks7B5Q0C.png)


------

## Failure settings

When a user provides an unexpected input and the bot cannot comprehend it, this is considered a failure. In such cases, specific actions must be taken. Configure the failure settings for the conversation as follows:
1. **Enable retries**: Allow users to retry if they input a value that is not as expected by the bot. Enabling this feature prompts users to input the correct value again.
2. **Failure message**: Enter a message to display when a failure occurs. You can click **+Add message** to add up to two messages. Use the delete icon to remove any entered message. 
3. **Configure timeout**: Set a timeout value in seconds. If the bot is expecting a response and no input is received within the configured time, it will trigger a timeout.
4. **Max conversation limit**: Enter a limit for how many attempts a user can make. Once this limit is reached and the conversation is still incomplete, the node will exit into the failure branch.
5. **Restrict ill-formatted responses**: If enabled, the bot will handle cases where the LLM sends improperly formatted responses (e.g., containing unwanted JSON) by pushing them to the failure branch. Disabling this option allows these responses to be displayed to the user, but may result in increased failures.

![Failure settings](https://hackmd.io/_uploads/HJQxcqX0R.png)

----------

## Manage conversations

1. **Delete a conversation**: Click the ellipsis menu and select **Delete**.  
   ![Delete conversation](https://hackmd.io/_uploads/S1FzDcX0C.png)

2. **Modify workflow name**: Click the existing workflow name to edit it.  
   ![Modify workflow name](https://hackmd.io/_uploads/HycQOcmAA.png)

3. **Preview**: Click the preview icon to test the bot for the selected conversation. You can adjust the rules and goals based on how the bot functions during the test.  
   ![Preview conversation](https://hackmd.io/_uploads/HJyd_9mCC.png)

4. **Save workflow**: Click **Save** to apply changes made to the workflow.  
   ![Save workflow](https://hackmd.io/_uploads/BJzZY57AC.png)


