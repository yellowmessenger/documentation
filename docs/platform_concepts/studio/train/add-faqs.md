---
title: FAQ Management
sidebar_label : FAQs
---

FAQs (Frequently asked questions) are a list of questions and answers on a subject for giving basic information to users of a website. These help your business respond to the needs of bot audience more quickly and appropriately.
On the yellow platform, you can add these FAQs and train the bot so that the bot fetches answers quickly from here when the FAQs are asked. 

In this article, you will learn:

1. [How to add FAQs?](#add)
2. [How to add multiple FAQs?](#bulk)
   - [FAQs for Multilingual bots?](#ml)
3. [How to train the bot with FAQs?](#train)
 

----
**Where to find the FAQs tab?**

- Open **Studio** > **Train** > **FAQs**. 


![](https://i.imgur.com/oTTrw8K.png)

---

## <a name="add"></a> 1. Add FAQs

To add FAQs one by one, follow the given steps:

1. You can add a **Default Category** to categorise the FAQs. 
    - Click **+**. 
    - Add a **Category name**.
    - Click **Create category**. 

![](https://i.imgur.com/dIckuva.png)

2. Select the category name (or the default category) and add FAQs under them.
    - Click **Add new question**.
    - Add a Question and a Default response. 
    - Click **Add**. 

![](https://i.imgur.com/OSPqF7t.png)

3. You can add more than one response by clicking **Add multiple text for randomizing**. Only one of these responses will be displayed during the conversation. 

![](https://i.imgur.com/kLF1VuW.png)

4. More than just a textual response can be added as a response to this question. Text, Images, Videos, Files or even a flow can be used as a response. 

![](https://i.imgur.com/ob1EKl1.jpg)

5. Multiple FAQs can be added one by one in the same manner. 

---

## <a name="bulk"></a> 2. Add FAQs in bulk

To avoid the tedious task of adding questions one by one, you can use the bulk import option to upload all the questions at once. 

1. Open **Studio** > **Train** > **FAQs**. Click **Import** on the **Bulk manage** dropdown. 

![](https://i.imgur.com/H8nHsmC.png)

<a name="step2"></a> 
2. Download the CSV template in which you must enter the FAQs. By clicking **Download format here to get started** link.


![](https://i.imgur.com/hteoHYF.png)

3. Open the downloaded file in Excel or other spreadsheet editor.

![FAQs Structure](https://cdn.yellowmessenger.com/7rPR31TWzQCY1615886956450.png)


:::note
The column headers must be as follows: "category", "question", "variations", "answer_en", "answer_hi" and so on. For any configured language, header format is "answer_LanguageIsoCode". 
:::

4. Add FAQs in the respective columns: 

    - **Category**: Type which category you want to add these FAQs. Make sure that the categories you've entered here exist on the platform.
    - **Question**: What users will ask?
    - **Variation**: Add multiple variations of the question. The first question and variation will remain the same even if you add multiple variations.
    - **Answer_en**: Answer of the respective question. Here 'en' in `answer_en` stands for English. You can add answers in different languages too. For example, to add an answer in Hindi you can add a column header as `answer_hi`. 

![](https://i.imgur.com/8szvhAn.jpg)


5. **Download** / **Save** the file as CSV file. 

:::tip
Before you upload the file on the platform, ensure that the column headers are correct. Open the CSV file in any text editor like VS Code, Sublime, or vim and check if column headers are included in quotes.
Example: In the image below, on line 1, column headers are not wrapped in quotes. 

![Modify CSV file headers](https://cdn.yellowmessenger.com/rGQEGn9NZbml1615887097398.png)

You can add quotes manually and save the changes. 

![Modify CSV file headers in an editor](https://cdn.yellowmessenger.com/2d5K8sdYcT0B1615887133256.png)
:::

6. Continuing from step 2, Click **+Upload file** and select the file from your local system. 

![](https://i.imgur.com/bA3q9an.png)

7. After the file is uploaded, click **Upload**.

![](https://i.imgur.com/3GyWyQe.jpg)



### <a name="ml"></a> 2.1 Add FAQs for Multilingual bots

To add FAQs for multi-lingual bots, follow the given steps:

:::info
**Prerequisites**
- Enable **Tools** > **Auto Detect** (click [here](https://docs.yellow.ai/docs/platform_concepts/studio/tools#221-behaviour) to know how). 
- [Configure the languages](https://docs.yellow.ai/docs/platform_concepts/studio/languages-supported#2-add-languages) that are used in the FAQs. 
:::

1. When you download the CSV template file (as mentioned in the [previous section](#step2)), language columns will be available. 


 ![](https://i.imgur.com/hteoHYF.png)

2. Add responses in the required columns (column names are suffixed with the [ISO code of each language](https://docs.yellow.ai/docs/platform_concepts/studio/languages-supported/#1-languages-supported)). 

**Example**

- For french FAQs bot, English answers are not mandatory. For those questions, you can add an answer under **answer_fr** column and leave the **answer_en** column empty.




----

## <a name="train"></a> 3. Train and test FAQs

**Train**

After adding all the FAQs you can train the bot to understand these FAQs bu clicking [Train Intents](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#3-train-intents). 

![](https://i.imgur.com/ssuEbrW.png)

**Test**

You can test the results on the preview bot. 

![](https://i.imgur.com/VdXRpl4.png)

----
