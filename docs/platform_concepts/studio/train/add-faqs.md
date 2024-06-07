---
title: FAQ Bots
sidebar_label : FAQ Bots
tags: [bot answers questions, faq bot, bot to answer questions ,bot that can answer any question, question answer bot, bot that answers questions, question bot]
---

FAQ bots are populated with a set of common questions and corresponding answers, and they use natural language processing (NLP) to understand and respond to user inquiries. FAQ chatbots can be integrated into websites, messaging platforms, and mobile apps to provide 24/7 customer support and improve user engagement.


In this article, you will learn:

1. [Why have an FAQ bot?](#1-why-choose-a-faq-bot-over-a-faq-page)
2. [How to add FAQs?](#21-add-faqs-to-bot)
3. [How to add multiple FAQs?](#22-add-faqs-in-bulk)
4. [ Multilingual FAQ bots](#3-create-multilingual-faq-bots)
5. [How to train the bot with FAQs?](#-4-train-and-test-faqs)
 

----
## 1. Difference between FAQ bot and FAQ page

1. **Interactivity**: Chatbots allow users to interact with the information in a conversational manner, rather than just reading through a static page. This makes the experience more engaging and can help users find the information they need more quickly and easily.

2. **Personalization**: Chatbots can provide a personalized experience by asking questions and tailoring the information they provide based on the user's responses. This can help users find the information they need more quickly and efficiently.

3. **Speed**: Chatbots can provide answers to simple questions almost instantly, which can save users time compared to searching through a long FAQ page. 

4. **Analytics**: Chatbots can collect data on user interactions, such as the questions asked and the answers provided, which can help organizations improve their FAQ content over time.

Overall, FAQ chatbots offer a more dynamic, personalized, and efficient way for users to find the information they need compared to traditional FAQ pages.

---

## <a name="add"></a> 2. Create FAQ bot

The following are the steps to create a bot with FAQ support

### 2.1 Add FAQs to bot

1. To add FAQs one by one, follow the given steps:

 Open **Studio** > **Train** > **FAQs**. 

 ![](https://i.imgur.com/oTTrw8K.png)


2. You can add a **Default Category** to categorise the FAQs. 
    - Click **+**. 
    - Add a **Category name**.
    - Click **Create category**. 

 ![](https://i.imgur.com/dIckuva.png)

3. Select the category name (or the default category) and add FAQs under it.
    - Click **Add new question**.
    - Add a **Question** and a **Default** response. 
    - Click **Add**. 

 ![](https://i.imgur.com/OSPqF7t.png)

4. You can add more than one response by clicking **Add multiple text for randomizing**. Only one of these responses will be displayed during the conversation. 

 ![](https://i.imgur.com/kLF1VuW.png)

5. You can also use Text, Images, Videos, Files or even a flow as a response. 

 ![](https://i.imgur.com/ob1EKl1.jpg)

6. Multiple FAQs can be added in the same way. 

:::note
To display custom links along with your FAQs, create a flow that displays the corresponding custom links and choose that flow in **Execute flow** option.
:::

---

### 2.2 Add FAQs in bulk

To upload multiple FAQs at once, you can use the bulk import option

1. Open **Studio** > **Train** > **FAQs**. Click **Import** on the **Bulk manage** dropdown. 

 ![](https://i.imgur.com/H8nHsmC.png)


2. Click **Download format here to get started** link to download the CSV template in which you want to enter the FAQs.

 ![](https://i.imgur.com/g4nXAw9.png)


3. Open the downloaded file in Excel or other spreadsheet editor.

 ![FAQs Structure](https://cdn.yellowmessenger.com/7rPR31TWzQCY1615886956450.png)


:::note
The column headers must in the format: "category", "question", "variations", "answer_en", "answer_hi" and so on. For any configured language, header format is "answer_LanguageIsoCode". 
:::

4. Add FAQs in the respective columns: 

    - **Category**: Type the category to which you want to add these FAQs. Make sure that the categories you've entered here exist on the platform.
    - **Question**: You can enter the question based on your requirement.
    - **Variation**: Add multiple variations to the question. The first question and variation will remain the same even if you add multiple variations.
    - **Answer_en**: Answer to the respective question. Here, 'en' in `answer_en` stands for English. You can add answers in different languages too. For example, to add an answer in Hindi, you can add a column header as `answer_hi`. 

 ![](https://i.imgur.com/8szvhAn.jpg)


5. **Download** / **Save** the file as CSV file. 

:::tip
Before you upload the file on the platform, ensure that the column headers are correct. Open the CSV file in any text editor like VS Code, Sublime, or vim and check if the column headers are included in quotes.
Example: In the image below, on line 1, column headers are not wrapped in quotes. 

![Modify CSV file headers](https://cdn.yellowmessenger.com/rGQEGn9NZbml1615887097398.png)

You can add quotes manually and save the changes. 

![Modify CSV file headers in an editor](https://cdn.yellowmessenger.com/2d5K8sdYcT0B1615887133256.png)
:::

6. Continuing from step 2, Click **+Upload file** and select the file from your local system. 

 ![](https://i.imgur.com/bA3q9an.png)

7. After the file is uploaded, click **Upload**.

 ![](https://i.imgur.com/3GyWyQe.jpg)



## 3. Create multilingual FAQ bots

To add FAQs for multi-lingual bots, follow the given steps:

### 3.1 Configure the languages

1. Navigate to **Studio** and click drop-down.

 <img src="https://i.imgur.com/zzuN3m8.png" alt="drawing" width="90%"/>
   

2. To add FAQs for multi-lingual bots, in **Language settings**, click on Edit icon to add the languages that you want to add to your bot. 

 <img src="https://i.imgur.com/W24tVZC.png" alt="drawing" width="90%"/> 
   

3. In **Add Language** dialog box, select the languages from the drop-down and click **Save**.

 <img src="https://i.imgur.com/Eda9KcV.png" alt="drawing" width="90%"/>

4. Your bot's language settings have been successfully updated. You can [add FAQs](#1-add-faqs-add-faqs) in different languages 

**Enable autodetect:**
- To automatically identify the language of your bot enable autodetect under **Tool** section, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/tools#221-behaviour) to know the steps.

### 3.2 Add FAQs to multilingual bots

1. **Add FAQs manually**
    - You can [add FAQs](#1-add-faqs-add-faqs) in different languages by typing the questions in the required language in the Question variation field.

 ![](https://i.imgur.com/GoW8gQx.png)


2. **Add FAQs in bulk:**

   - When you download the CSV template file (as mentioned in the [previous section](#step2), language columns will be available. 


   ![](https://i.imgur.com/hteoHYF.png)

   - Add responses in the required columns (column names are suffixed with the [ISO code of each language](https://docs.yellow.ai/docs/platform_concepts/studio/build/localization#supported-languages). 

     **Example**

   - For French FAQs bot, English answers are not mandatory. For those questions, you can add an answer under **answer_fr** column and leave the **answer_en** column empty.


----

## <a name="train"></a> 4. Train and test FAQs

**Train**

After adding all the FAQs, you can train the bot to understand these FAQs by clicking [Train Intents](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#3-train-intents). 

![](https://i.imgur.com/ssuEbrW.png)

Follow the steps below to train intents for FAQs:

1. Click **Train** > **FAQs**.  

 ![](https://i.imgur.com/fF87Nfk.png)

2. Click **Train intents** drop-down.

 ![](https://i.imgur.com/PB5cznr.png)

3. In **Train your model** dialog box, select **Multilingual** and click **Train**.

 ![](https://i.imgur.com/8n9rDGx.png)

**Test**

You can test the results on the preview bot. 

 ![](https://i.imgur.com/VdXRpl4.png)

----

