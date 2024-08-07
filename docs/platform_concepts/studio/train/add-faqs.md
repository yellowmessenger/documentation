---
title: FAQ Bots
sidebar_label : FAQ Bots
tags: [bot answers questions, faq bot, bot to answer questions ,bot that can answer any question, question answer bot, bot that answers questions, question bot]
---

Adding FAQs to the chatbot improves user experience by providing self-service support to users to find answers to their questions. FAQs are trained to recognize various forms of questions to understand natural language and respond to user inquiries.

FAQs can used to assist users with common queries and provide answers to frequently asked questions in messaging platforms, mobile apps to provide 24/7 customer support, and websites to improve user engagement.

**Key features of FAQ bots:**

* **Question recognition**: FAQ are trained to recognize various forms of questions, allowing users to ask questions in natural language rather than using specific commands.
* **Self-service support**: FAQ offer self-service support by enabling users to find answers to their questions
* **Response generation**: FAQ bots generate responses based on the question that is trained. Responses can include text, links, images, or other multimedia elements to provide answers to user queries.

## Create FAQs

You need to create a bot with FAQ to provide a self-serve support to your users.

### Add FAQs to bot

To create FAQs for your bot and provide self-serve support to your users, follow these steps: 

### Add FAQs under Default category

To add FAQs under default category, follow these steps:

1. Go to **Automation** > **Train** > **FAQs** > **+ Add new question**. 

   ![](https://imgur.com/voP4aaJ.png)
   
2. Enter the **Question** and **Default response**, then click **Add**. 

     <img src="https://imgur.com/t0wMrZx.png" alt="drawing" width="80%"/>

* The added question will be displayed under the **Default category**.

    ![](https://imgur.com/AE3PbC8.png)
    
### Add FAQs under FQAs category

To add the FAQs under FQAs category follow the same steps in the [Add FAQs under Default category](#) section.

### Create a category and add FAQs

To a create a category and add the FAQs, follow these steps:

1. Click on the **+** icon.

2. Enter the **Category name** and click **Create category**. 

     ![](https://imgur.com/jWL0gDP.png)
     
* You can view the created category under the Default category drop-down.

     <img src="https://imgur.com/7Xuj4x0.png" alt="drawing" width="40%"/>

3. Select the category name to add FAQs under it. Click **Add new question**.

    ![](https://imgur.com/vsfeanW.png)

4. Add a **Question** and a **Default** response, then click **Add**. 

    <img src="https://imgur.com/Pkgllwa.png" alt="drawing" width="80%"/>

5. You can add more than one response by clicking **Add multiple text for randomizing**. Note that, only one of these responses will be displayed during the conversation. 

    ![](https://imgur.com/qNheaMG.png)

6. Click **+ Add answer** to add Text, Images, Videos, Files or even a flow as a response. 

    ![](https://imgur.com/WpTguwx.jpg)

* You can add multiple FAQs by following the above steps. 

:::note
To display custom links along with your FAQs, create a flow that displays the corresponding custom links and choose that flow in **Execute flow** option.
:::

### Add FAQs in bulk

#### Create CSV file

Before you upload the file on the platform, ensure that the column headers are correct. Open the CSV file in any text editor like VS Code, Sublime, or vim and check if the column headers are included in quotes.
Example: In the image below, on line 1, column headers are not wrapped in quotes. 

   ![Modify CSV file headers](https://cdn.yellowmessenger.com/rGQEGn9NZbml1615887097398.png)

You can add quotes manually and save the changes. 

   ![Modify CSV file headers in an editor](https://cdn.yellowmessenger.com/2d5K8sdYcT0B1615887133256.png)
:::

6. Continue from step 2, Click **+Upload file** and select the file from your local system. 

   ![](https://i.imgur.com/bA3q9an.png)

7. After the file is uploaded, click **Upload**.

    ![](https://i.imgur.com/3GyWyQe.jpg)
    
* Once the file uploaded, the FAQs will be added to your bot.


#### Upload CSV file

To upload multiple FAQs at once, you can use the bulk import option.

1. Go to **FAQs** > **Bulk manage**. Select **Import** from the **Bulk manage** dropdown. 

    ![](https://imgur.com/mEh4y3I.png)

2. Click **Download format here to get started** link to download the CSV template in which you want to enter the FAQs.

   ![](https://i.imgur.com/g4nXAw9.png)

3. Open the downloaded file in Excel.

   ![FAQs Structure](https://cdn.yellowmessenger.com/7rPR31TWzQCY1615886956450.png)


:::note
Ensure that the column headers must in the format: "category", "question", "variations", "answer_en", "answer_hi", and so on. For any configured language, header format is "answer_LanguageIsoCode". 
:::

4. Add FAQs data in the respective columns: 

    - **Category**: Type the category to which you want to add these FAQs. Make sure that the categories you have entered here exist on the platform.
    - **Question**: Enter the question based on your requirement.
    - **Variation**: Add multiple variations to the question. The first question and variation will remain the same even if you add multiple variations.
    - **Answer_en**: Provide the answer to the respective question. Here, 'en' in `answer_en` stands for English. You can add answers in different languages too. For example, to add an answer in Hindi, you can add a column header as `answer_hi`. 

      ![](https://i.imgur.com/8szvhAn.jpg)


5. Save the file in CSV file format. 



## Create multilingual FAQ bots

You can the add FAQs in multiple languages, follow the given steps:

### Configure languages

1. Navigate to **Automation** > **Build** > **Flows** > **Conversation settings**.

   ![](https://imgur.com/2OzMDH8.png)
   
2. To add FAQs for multi-lingual bots, click **Language settings** to add the languages that you want to add to your bot. 

    <img src="https://imgur.com/wogF8tg.png" alt="Converstion settings" width="50%"/>
   

3. In **Add Language** dialog box, select the languages from the drop-down and click **Save**.

    <img src="https://imgur.com/39PjTGm.png" alt="drawing" width="60%"/>

4. Your bot's language settings have been successfully updated. You can [add FAQs](#1-add-faqs-add-faqs) in different languages.


## Train and test FAQs

After adding all the FAQs, you can train the bot to understand these FAQs by clicking [Train Intents](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#3-train-intents). 

To train intents for FAQs, follow these steps:

1. Click **Train** > **FAQs** > **Train intents** drop-down.  

   ![](https://imgur.com/bWxVxED.png)

2. In **Train your model** dialog box, select **Multilingual** and click **Train**.

    <img src="https://imgur.com/FCpE469.png" alt="Converstion settings" width="60%"/>

### Test FAQs

After adding and training the FAQs, you can test the FAQs on the preview bot. 

To test the FAQs:

* Go to **Build** > **Flows** > **Preview**.

     ![](https://imgur.com/hKjc2Kr.png)










    




