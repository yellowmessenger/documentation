---
title: FAQ Management
sidebar_labels : FAQ Management
---

### How to add multiple FAQs?


Many time what happens is you want to add multiple FAQs in the bot. While the yellow.ai provides a way to do that the easy way too, but repeating the same process for multiple FAQs is a tedious process. (believe us, we've been there!)

Worry not, because we already have a feature specifically for that. Using this feature, you can add multiple FAQs at once through a CSV file.

1. Open the `Studio` and click on `FAQs` button.

![Bot Studio](https://cdn.yellowmessenger.com/Www48QD5VxMa1615886801763.png)

2. Here you should see 3 windows: Questions, Question variations and Answers. On the top left bar, click on `Bulk manage` and then `Import`.

![Import FAQs](https://cdn.yellowmessenger.com/hH264EEWm40S1615886848493.png)

3. It will open up a pop-up. We will need a CSV file to upload the FAQs. That CSV file should include "category", "question", "variations", "answer_en" in the column headers. You can also download the format from the link given in the pop-up. Download that file.

![FAQs Format](https://cdn.yellowmessenger.com/0wYjyfW1fdXH1615886896548.png)

4. If you open the downloaded file in Excel or any other spreadsheet editor, it'll look like this.

![FAQs Structure](https://cdn.yellowmessenger.com/7rPR31TWzQCY1615886956450.png)

5. You can also use Google Sheets to edit this file. Now, let's add FAQs.
    - category: Here type in which category you want to add these FAQs. Please make sure that the categories you've entered here exists on the platform.
    - question: What users will ask?
    - variation: Here you can add multiple variations of the question. One thing you need to keep in mind is, first question and variation will remain the same even if you add multiple variations.
    - answer_en: Finally, answer of the respective question. Here 'en' in `answer_en` stands for english. You can add answer in different languages too. For i.e. to add an answer in Hindi you can add column header as `answer_hi`. 

![Add FAQs](https://cdn.yellowmessenger.com/VsFafdtTBunI1615887034296.png)

6. Download / save the file as CSV file. Before you upload the file on the platform, we need to ensure if column headers are correct. For that open the CSV file in any text editor like VS Code, Sublime, vim (if you dare) and check if column headers are included in quotes. As you can see in the image below, on line 1 column headers are not wrapped in quotes. 

![Modify CSV file headers](https://cdn.yellowmessenger.com/rGQEGn9NZbml1615887097398.png)

In that case, you can add quotes manually. Like this in the image given below, checkout line 1. Don't forget to save the changes! 😉

![Modify CSV file headers in an editor](https://cdn.yellowmessenger.com/2d5K8sdYcT0B1615887133256.png)

7. Now let's continue from where we left on step 3. In that pop-up, upload the CSV file. Now click on `Upload` button.

![CSV File Upload](https://cdn.yellowmessenger.com/A387i9C8jqka1615887185315.png)

Once the upload it complete, `Done` message will appear. Click on `Return Back`. 

![Upload Success](https://cdn.yellowmessenger.com/yy2lfatldxhM1615887211191.png)

All the FAQs you've added, you can see on the left side. To check if a question has different variations click on any question and you should see multiple question variations (if any) under `Question Variation` tab. Finally on the right most tab, you can see `Answers`. If you want, you add multiple answers also for randomizing.

![FAQs Uploaded Successfully](https://cdn.yellowmessenger.com/ZlFb8A4gmtMj1615887267635.png)

8. Now you can go back to `Try Your Bot` under `Overview` tab and try one of FAQ you've added eariler. Voila! Congratulations on building your first FAQ bot! 🎉

![Try FAQs in your bot](https://cdn.yellowmessenger.com/GYNYBPbWXGFe1615887293471.png)

---

### FAQs in Multilingual bots

Please make sure that 'Autodetect in enabled under tools section as shown'
![tools](https://cdn.yellowmessenger.com/fywFORjNhR2d1622871881317.png)

Also all languages that you would like are enabled/selected under configurations section. 
![tools](https://cdn.yellowmessenger.com/TCvB6C5Xi0C01622871930384.png)

Consider for an example a french FAQs bot. English answer is not mandatory for the French only bots, for those questions, you can add answer under language_fr column and leave the langauge_en column empty.

![Language](https://cdn.yellowmessenger.com/ZslPb3oSw0O81622871511166.png)
Each alternate question should be a row in the sheet. e.g. If the question is "What is the return policy?", and you have two alternatives - "Return policy" and "Can I return the item?", here is how you will add them -

This will add 1 question "What is the return policy?" trained on two alternatives "Return policy" and "Can I return the item?". So if the user query is similar to any of these 3 sentences, we will be able to map it to this question.

![Language](https://cdn.yellowmessenger.com/FAlCHDzmmhYC1622871600260.png)
You can also categorize your questions, please make sure to create the category before you upload the csv. You can add the category in the first column "category", you can also use the most relevant tag as the category if that makes sense for your KB -
https://cdn.yellowmessenger.com/4xHV1ZBD36Zr1622871672346.png

![Language](https://cdn.yellowmessenger.com/4xHV1ZBD36Zr1622871672346.png)

Similarly, if you want to add Italian responses, you can add another column with header language_it (langauge_isocode, here iso code = it for Italian). If you want to test the bot after uploading, pls make sure to add the relevant languages in the "Configure" section.

Please find below an example of the template for a french only bot
![Language](https://cdn.yellowmessenger.com/U9UTQfHbZqAT1622871674822.png)