---
title: Learn to handle FAQs & Knowledge from files
sidebar_label: Bot Knowledge
---

We have covered a lot of things!
Now if you notice, FAQs consists major part of a chatbot. Ability to answer user queries in conversational manner is a gem. 

When we say FAQ, we mean simple question & answer. We do not include complex logics here - for that we have Journeys. 

This section is divided into two parts
1. FAQ List Section - Here we will talk about simple Q&A section we have to take care of all your FAQ setup needs, easy to use for anyone.
2. Document Cognition - Here we will talk about the process of generating FAQs automatically from a bulk load of documents. 


## Simple FAQs - FAQ List Section
### Navigating to FAQs List
You can access the FAQ section by going to Studio>FAQs inside your Project. 
![](https://i.imgur.com/iOe8C43.png)

This section consists of ability to add simple Question and answer, categorize them, configure Q & A based on languages, add question variations & training AI to understand questions better and lastly, handling all of what I just said in bulk using csv!

Don't get confused, we'll go through each of these components one by one.

![](https://i.imgur.com/gfrxR6c.gif)


### Adding Question and Answers
You can simply click on the ‘**`Add new question`**’ button to add a new pair for Question and Answer. 
Moreover, by clicking on **`Add more`** on the bottom of the Answer section you can also add *Images, documents, videos* and *files* in your answer. 

**Advanced** : If you need to handle a complex logic following up to answering your FAQ, you can **`trigger journey`** or **`function`** as well from 'Add more'.

### Adding Categories
To add a new category, you can click on **`‘+’`** top right of the Question section. (right to category list dropdown)
Default category already present is the category where any uncategorized FAQs can go. 

You can select the added categories from dropdown and add questions inside them then.

### Question variations & Training
Question variations are nothing but ‘***different ways your user can ask a question***’. 
Adding these helps our AI model learn from variations you just added to understand the variety of ways users can form questions and hence, answer your users better.

**TRAINING:**
After making any changes to the FAQ section, it is important to click on **`Train`** button to train the AI model. 

:::warning
:pushpin: **Note**: 
If your bot is a **multilingual** bot (not only English/languages apart from English), you should train your bot on ‘Multilingual’ feature type. 
Just go to train settings and select Multilingual from dropdown in feature types.

 ![](https://i.imgur.com/ainhBSV.jpg)

:::

### Adding language specific responses
If you do not trust auto translate, you can always add language based responses yourself. 

* To **add questions in different languages**, you can simply add it in ‘**`Question variations`**’ section. 
* To **add answers in different languages**, you can click on the following button on top right of screen and select language from dropdown, and edit the answer for that language. 

![](https://i.imgur.com/SnrZhEl.jpg)

> **Note** : Only languages configured in your bot settings will appear in this dropdown. 

### Bulk Manage
Now to the most important feature that can make your life very easy in adding FAQs. 

You can see Bulk Manage button on top of your screen. This contains two options:

* **Bulk Export** : To export(download) all your data from FAQ section in csv format. 
* **Bulk Import**: To import multiple FAQs at once from a structured CSV instead of adding from platform, this feature can be used. 

![](https://i.imgur.com/Akm1PYN.png)

Above image depicts our CSV format. **For importing, you will need to stick to same CSV format.**

**It includes, category, question, question variations and answer columns.**

> NOTE:
> *  Answer column is named **answer_en** (which means answer english, ‘en’ is the [ISO code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for English). For any other languages, you can similarly add more columns **`answer_ISOCode`** in your sheet. 
> (Any additional language should be one of your bots languages in configuration section)
> 
> * **New Categories cannot be directly added from CSV.** You can use only those categories you have already added on the platform through **`‘+’`** button. If you leave Category column empty and add a question, it will automatically go to ‘Default Category’.

:::info
*If you’re someone dealing with Bulk Import, maybe wanting to maintain a single sheet, updating it and uploading again insteading of using platform features, Bulk Import will be very useful for you. 
You can even do a mix of both, upload from sheet, and then add from platform.*

**A good practice to follow every time you do bulk import then would be:**
1. Export the csv first, or click on ‘download format’ on the Import screen. (So that you can make sure your local csv contains all the latest changes)
1. Add new questions/Edit answers etc.
1. Bulk import the edited CSV. 


![](https://i.imgur.com/kcSCumK.jpg)



:::






## Knowledge from files - Document Cognition


### Document Cognition Action Node (To be updated)