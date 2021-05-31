---
title: Learn to handle FAQs & Knowledge from files
sidebar_label: FAQs - Questions/Answers
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
Moreover, by clicking on **`Add more`** on the bottom of the Answer section you can also add _Images, documents, videos_ and _files_ in your answer.

**Advanced** : If you need to handle a complex logic following up to answering your FAQ, you can **`trigger journey`** or **`function`** as well from 'Add more'.

### Adding Categories

To add a new category, you can click on **`‘+’`** top right of the Question section. (right to category list dropdown)
Default category already present is the category where any uncategorized FAQs can go.

You can select the added categories from dropdown and add questions inside them then.

### Question variations & Training

Question variations are nothing but ‘**_different ways your user can ask a question_**’.
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

- To **add questions in different languages**, you can simply add it in ‘**`Question variations`**’ section.
- To **add answers in different languages**, you can click on the following button on top right of screen and select language from dropdown, and edit the answer for that language.

![](https://i.imgur.com/SnrZhEl.jpg)

> **Note** : Only languages configured in your bot settings will appear in this dropdown.

### Bulk Manage

Now to the most important feature that can make your life very easy in adding FAQs.

You can see Bulk Manage button on top of your screen. This contains two options:

- **Bulk Export** : To export(download) all your data from FAQ section in csv format.
- **Bulk Import**: To import multiple FAQs at once from a structured CSV instead of adding from platform, this feature can be used.

![](https://i.imgur.com/Akm1PYN.png)

Above image depicts our CSV format. **For importing, you will need to stick to same CSV format.**

**It includes, category, question, question variations and answer columns.**

> NOTE:
>
> - Answer column is named **answer_en** (which means answer english, ‘en’ is the [ISO code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) for English). For any other languages, you can similarly add more columns **`answer_ISOCode`** in your sheet.
>   (Any additional language should be one of your bots languages in configuration section)
>
> - **New Categories cannot be directly added from CSV.** You can use only those categories you have already added on the platform through **`‘+’`** button. If you leave Category column empty and add a question, it will automatically go to ‘Default Category’.

:::info
_If you’re someone dealing with Bulk Import, maybe wanting to maintain a single sheet, updating it and uploading again insteading of using platform features, Bulk Import will be very useful for you.
You can even do a mix of both, upload from sheet, and then add from platform._

**A good practice to follow every time you do bulk import then would be:**

1. Export the csv first, or click on ‘download format’ on the Import screen. (So that you can make sure your local csv contains all the latest changes)
1. Add new questions/Edit answers etc.
1. Bulk import the edited CSV.

![](https://i.imgur.com/kcSCumK.jpg)

:::

## Knowledge from files - Document Cognition

In above section we saw how to deal with structured FAQs.
What if you have some documents instead? Our doc cognition model helps you search for FAQs from your unstructured documents.

###### tags: `structured data` `auto-indexing` `FAQ`

<!--
- [Simple FAQs - FAQ List Section](#simple-faqs---faq-list-section)
  - [Navigating to FAQs List](#navigating-to-faqs-list)
  - [Adding Question and Answers](#adding-question-and-answers)
  - [Adding Categories](#adding-categories)
  - [Question variations & Training](#question-variations--training)
  - [Adding language specific responses](#adding-language-specific-responses)
  - [Bulk Manage](#bulk-manage)
- [Knowledge from files - Document Cognition](#knowledge-from-files---document-cognition)
        - [tags: `structured data` `auto-indexing` `FAQ`](#tags-structured-data-auto-indexing-faq)
  - [What is Document Cognition ?](#what-is-document-cognition-)
  - [How does Document Cognition work ?](#how-does-document-cognition-work-)
  - [:memo: Getting Started](#memo-getting-started)
    - [Step 1: Navigating to your Knowledge Base](#step-1-navigating-to-your-knowledge-base)
    - [Step 2: Uploading your documents](#step-2-uploading-your-documents)
  - [Types of "Search"](#types-of-search)
    - [Semantic-based Search](#semantic-based-search)
    - [Keyword Search](#keyword-search)
    - [MetaData Search](#metadata-search)
  - [Supported Formats](#supported-formats)
  - [Dont's w.r.t Document Cognition](#donts-wrt-document-cognition)
    - [Watch Document Cognition in Action](#watch-document-cognition-in-action)
  - [Appendix and FAQ](#appendix-and-faq)
        - [tags: `Templates` `Documentation`](#tags-templates-documentation)
  - [Document Cognition Action Node (To be updated)](#document-cognition-action-node-to-be-updated)
-->

### What is Document Cognition ?

Document Cognition is a way to process **==unstructured textual data==**. When you have multiple documents (20 or more) containing mostly (~70%) text, it is humanly impossible to convert this large pile of data into a structured format so that you can feed it to a chatbot. In such cases, we can leverage this knowledge by feeding it to the DocCog engine which utilizes its NLP model and directly searches for the most relevant response from within these documents.
In such cases, we can expect the model to answer queries and take us to the right page/paragraph content with ~75-85% accuracy depending on the type and size of documents.

### How does Document Cognition work ?

Document Cognition Model parses the entire document, tokenizes into headings and paragraphs, and maps each paragraph to a page number. It skips tables, images, and scanned pages wherever it finds them. It then indexes the textual data into our proprietary model, where it tries to predict the kind of questions that someone might ask by looking at a specific document.
It primarily relies on :

- **TF-IDF score**
- **Keyword frequency**
- **Sentence structure**

When a new query is made, the model searches through the embeddings created during the above indexing process and suggests the most relevant paragraphs along with a score for each for ranking purposes.

### :memo: Getting Started

#### Step 1: Navigating to your Knowledge Base

1. Enter your YM chatbot builder console and click on **Data** found on the left tool bar.
2. On clicking Data, the **Database** and **Knowledge Base** console will be shown as seen on the image.
3. Selecting **Knowledge Base** will take you to the Document uploader portal.

![](https://i.imgur.com/jPvq6lO.gif)

#### Step 2: Uploading your documents

Now click on the **Upload** option to upload the document to be auto-indexed and consumed by chatbot.
![](https://i.imgur.com/5crH7eH.gif)
You will find options like:

- [x] Upload Document :tada: )
- [x] Search Document icon
      :::info
      Make sure to check the **Convert into Q&A** check box to enable auotmated Q&A synthesis.
      Also add appropirate **tags** for better search result outcomes
      :::

### Types of "Search"

#### Semantic-based Search

Option to perform a **semantic-based search** (the bot will look at the sentence structure and keywords, look at the sentence, and try to map it to the most relevant sections in the documents).

> It's recommended to use a keyword search if the total no. of words in the input query is>3.

```
app.searchDocumentsNew({text:'query'}).then((resp)=> {
  // Your logic goes here
 });
```

#### Keyword Search

Option to perform an only **keyword search** (the bot will simply do an ES match query in all the documents for that keyword).

> It's recommended to use keyword search if the total no. of words in input query is <=3.

```
app.searchDocumentsNew(
            {
                text: app.data.message,
                keyWordQuery: true
            })
```

#### MetaData Search

Option to search for files based on **metadata tags**. Think of it as a Google Drive search where you can search for all files with a specific name.

> Note that this does not search inside documents

```
app.searchDocumentsNew(
            {
                text: fileName,
                metadataQuery: true
            })
```

Option to **filter documents by metadata tags** is also added within Doc-Cog for improved search results rendering. Imagine if you have HR policies for U.S. and India based employees and for a U.S. based employees, you want to search in only specific documents, you can use this function to filter only U.S. based documents through a tag. **A tag is just a key: value pair**. Each document can have multiple tags which can be configured through the UI below.

![](https://i.imgur.com/JfIUvIO.png)

```
app.searchDocumentsNew(
            {
                text: app.data.message,
                keyWordQuery: searchType,
                resultsPerDocument: 5,
                filterByMetadata: { "country": "India" }
            })
```

:::info
:memo: When using embedded searches **do not** filter **stop words** as the query loses context and becomes a basic keyword search. This leads to inaccurate/failed search results.

:::

### Supported Formats

Currently, we support PDF, PPT, and .Docx formats. We do not support web scraping and HTML. However, you can export webpages as PDFs and feed them to the engine.
:::info
:pushpin: **Important:**

- Do **NOT** use online encoders for Doc and PDF conversions.
- Do not change file extensions by **rename** Changing a .txt file to .pdf file by rename just corrupts the file. Use proper Word and PDF Native convertors availablew with MS Word or PDF viewers for this task.
- Do not upload internaal documents to online convertors as it is a violation of policy and compliance issue.
  :::

### Dont's w.r.t Document Cognition

:::info
:pushpin: Please note that document cognition is not a replacement for intent classification (journeys)
:::
Since it takes unstructured data as input, accuracy will always be lower than the intent classification model, and wherever possible, it is recommended to prefer intent classification (journeys) over document cognition.

Following are some examples when intent classification is the right tool to use as opposed to document cognition -

- Most of the data is already in a structured format (tabular data, excel files, etc.) - the right way to handle this is by uploading to the bot database.
- We already have data in a FAQ-like structure instead of a lot of paragraphs - the right way to handle this is by creating intents.
- No. of documents are fewer and can be converted into structured data.
- Documents are not clean and have a lot of images, scanned pages, complex charts, tables, and diagrams, etc.

---

#### Watch Document Cognition in Action

{<iframe width="560" height="315" src="https://www.youtube.com/embed/VNLJdGLiFvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
:::info
:pushpin: Want to learn more? ➜ [Check out our Developers Guide](https://yellowmessenger.atlassian.net/wiki/spaces/docs/pages/1293451266/Document+Cognition+v2)
:::

### Appendix and FAQ

:::info
A list of frequently asked questions on Document Cognition:
:::
**What does a good document format look like?**
The following are some of the characteristics of a document that’ll be processed well during document cognition. It's recommended following these guidelines while pre-processing your document -

- It does not have scanned pages and images.

- 80% of the content is textual and well-formatted (e.g. Wikipedia articles)

- Remove content and index pages, appendix pages, etc. (we will add the logic to skip these automatically in coming releases)

- No bullet points before headings. Headings should have a larger font size and no spaces so that the parser can detect headings easily.

- Always prefer the Word (.doc, .docx) version of the document if available, as some properties might get lost when converting it into PDF.

- Tables will be skipped. if possible, try to upload documents with less tabular data or remove pages with tables altogether from the document.

**Does it automatically create Questions and Answers from the feed document?**
Yes. It Does :)
![](https://i.imgur.com/mmwguiK.png)

**Why am I not getting the right result in the first suggestion?**

Because document cognition is a probabilistic model that is “predicting” the relevance of a specific paragraph or page by looking at the input string. There is no guarantee that the first result will be the most relevant result.

**Why am I getting the other documents in suggestions which actually don't have the answer?**

Same answer as above. The model has no way of “knowing” which document is correct, it can, however, assign a score to all the results based on its assessment of the documents.

**Why am I getting multiple occurrences of the same document in the results?**

Because there might be multiple pages/occurrences of relevant content in the same document. In such cases, we rank them, based on the score and return only two occurrences in each document by default. If you want to see more or fewer occurrences within the same document, you can control by passing the value of results_per_document in your search query.

**Can the model convert tabular data into FAQs?**

No, Tables will be skipped. if possible, try to upload documents with less tabular data or remove pages with tables altogether from the document. These tables can be uploaded/recreated in our bot database, where we can write business logic on top of them.

**Why am I not able to access a document link, from a conversation I had earlier?**

Currently, we have restricted the life of each SAS link to an hour for security reasons. This can be removed/updated as per client request. You can generate a new link by asking the same query again in the bot.
![](https://i.imgur.com/oBIthnM.png)
**How do I ensure that the bot shows only relevant documents?**

There is no specific logic added to detect irrelevance right now. However, we do provide a relevance score with each search result that the bot developer can use. The model returns all documents which contain even a few keywords in the query in decreasing order of relevance. The bot developer can choose to show only Top N (e.g. Top 5) or Top 25% of the results based on relevance score.

###### tags: `Templates` `Documentation`

### Document Cognition Action Node (To be updated)

Use Doc Search without writing code!
