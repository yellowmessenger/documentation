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

   ![image](https://imgur.com/5OcY2GO.png)

2. **Add basic introduction**:
    - **What does the user say to start this goal?**: Add the keywords or messages (separated by commas) that will trigger this conversation. For example, if the user wants to apply for a loan, keywords like "needs a loan" or "financial needs" should trigger the goal.
    - **Start message**: Write the message that will be displayed once the conversation is triggered, within 200 words. For example: "I'm glad you decided to take the first step towards your financial needs. What can I call you?"  

   ![image](https://imgur.com/rt2nTRw.png)

3. **Goal setup**: Define how the conversation will proceed and what the bot must do.
    - **Steps to follow to achieve the goal**: In 2000 words, describe how the conversation should flow. For instance, in a loan application conversation:
      ```
      1. After the user shares their name, ask for their mobile number (mandatory for loan processing).
      2. Check if there's an existing loan associated with the phone number. If so, show loan details and ask the user to contact support@yellow.ai for further assistance, as only one loan is allowed per user.
      3. If no loan exists, ask for the loan amount and repayment tenure. The tenure must be between 6 months and 5 years. Provide 5 options for both the amount and the tenure.
      ```
    - **Rules to follow during the conversation**: Define rules for the bot to follow, such as addressing the user by name. You can add rules by clicking **+ Add rule** and remove them by clicking the delete icon.  

   ![image](https://imgur.com/q1jeIa9.png)

4. **Handle user queries**: Set instructions on how the bot should handle user responses.
    - **Custom instructions**: Enable custom instructions if you want the bot to recognize specific user questions and provide predefined responses. You can list these custom instructions within 500 words. For example: When asked about interest rates, respond that they are competitive, based on credit score, loan amount, and term.
    - **Handling out-of-scope queries**: Provide guidelines (within 500 words) on how the bot should respond when the user asks questions outside the scope of the conversation. 

   ![image](https://imgur.com/ImuxdFX.png)


-------

## Configure conversations 

### Add inputs 

To capture and store user input in memory, you can configure the Agent. This is useful when you want to reuse the data later or apply it to other functions. For example, if the user's name is collected, the bot can use it in future interactions, personalizing the conversation and adding a human touch.

To configure input storage, follow these steps:

1. On the **Configure** tab, click **+Add Input** to add a new input field.

   ![image](https://imgur.com/QhaeHmB.png)

2. Provide the following details:
   - **Input description**: Describe what needs to be captured. For example, if you're collecting a user’s name, you can enter *User name*.
   - **Store response in**: Select the variable where the captured input will be stored. You can create or use an existing global variable to store this response.
   - **Validation instructions**: Provide instructions for validating the input. For example, if capturing a name, specify that only the first part should be stored as the first name.

   ![image](https://imgur.com/kSR96sT.png)

3. To delete an input, click the **Delete** icon.

   ![image](https://imgur.com/iVSyOQz.png)

4. To configure additional settings, click the **Settings** icon for that input. You can define:
   - **Mark as optional**: This marks the input as optional, meaning the agent won’t prompt the user again if they skip it.
   - **Mask input**: If enabled, the input will be masked for privacy (e.g., confidential information like credit card numbers). The data won’t be visible to the agent or stored in the database.
   - **Regex for validation**: If specific patterns (like an email address) are expected, provide the required regex pattern.
   - **Examples of expected input**: Add sample input examples that the agent should expect based on the regex.

   ![image](https://imgur.com/jYFlB3R.png)

> Inputs not marked as optional are considered mandatory.

--------


### Add skills 

Skills are background processes built with Action or Logic nodes that enhance the bot by performing tasks like calling functions, executing APIs, and managing databases. They can be linked to categories and triggered within conversations.

To add a new skill:

1. Click **Add Skill**.  
   ![image](https://imgur.com/ltfEGht.png)

2. Follow the steps to create a skill from the flows page: [Create a Skill](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/journeys#create-a-skill). 

3. Select the skill you want to add from the dropdown.  
   ![image](https://imgur.com/jZYtsNC.png)

4. Describe when this skill should be triggered. For example, "This skill checks if the user has existing loans with Yellow Loans and fetches the details."

5. **Input to skill**: Select the variables that will pass inputs from the conversation to the skill.

6. **Output from skill**: Choose the variables to store outputs/responses generated by the skill.

7. Add the response to be displayed after the skill completes. You can add multiple text responses, and one will be picked randomly.  
   ![image](https://imgur.com/pUDmvtk.png)

8. Click the delete icon to remove a skill.


------

## Failure settings

When a user provides an unexpected input and the bot cannot comprehend it, this is considered a failure. In such cases, specific actions must be taken. Configure the failure settings for the conversation as follows:
1. **Enable retries**: Allow users to retry if they input a value that is not as expected by the bot. Enabling this feature prompts users to input the correct value again.
2. **Failure message**: Enter a message to display when a failure occurs. You can click **+Add message** to add up to two messages. Use the delete icon to remove any entered message. 
3. **Configure timeout**: Set a timeout value in seconds. If the bot is expecting a response and no input is received within the configured time, it will trigger a timeout.
4. **Max conversation limit**: Enter a limit for how many attempts a user can make. Once this limit is reached and the conversation is still incomplete, the node will exit into the failure branch.
5. **Restrict ill-formatted responses**: If enabled, the bot will handle cases where the LLM sends improperly formatted responses (e.g., containing unwanted JSON) by pushing them to the failure branch. Disabling this option allows these responses to be displayed to the user, but may result in increased failures.

![Failure settings](https://imgur.com/b01cZ26.png)

----------

## Manage conversations

1. **Delete a conversation**: Click the ellipsis menu and select **Delete**.  

   ![Delete conversation](https://imgur.com/tQXE8Q6.png)

2. **Modify workflow name**: Click the existing workflow name to edit it. 

   ![Modify workflow name](https://imgur.com/T9m2CSb.png)

3. **Preview**: Click the preview icon to test the bot for the selected conversation. You can adjust the rules and goals based on how the bot functions during the test. 

   ![Preview conversation](https://imgur.com/rXInEHW.png)

4. **Save workflow**: Click **Save** to apply changes made to the workflow.  

   ![Save workflow](https://imgur.com/ZEz45zt.png)


