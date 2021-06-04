---
sidebar_label : Document Cognition 101
title : What is Document Cognition
---


Document Cognition is a way to process unstructured textual data. When you have a lot of documents (20 or more) containing mostly (~70%) text, it is humanly not possible to convert this data into a structured format so that you can feed it to a chatbot. In such cases, we can still leverage this knowledge by feeding it to the NLP model, so that the model can directly search for the most relevant responses from within these documents. In such cases, we can expect the model to take us to the right page/paragraph with ~75-85% accuracy (depending on the type and size of documents).

## When to not use document cognition?

Please note that document cognition is not a replacement for intent classification (journeys). Since it takes unstructured data as input, accuracy will always be lower than the intent classification model, and wherever possible, it is recommended to prefer intent classification (journeys) over document cognition.

Following are some examples when intent classification is the right tool to use as opposed to document cognition -

- Most of the data is already in a structured format (tabular data, excel files, etc.) - the right way to handle this is by uploading to the bot database.

- We already have data in a FAQ-like structure instead of a lot of paragraphs - the right way to handle this is by creating intents.

- No. of documents are fewer and can be converted into structured data.

- Documents are not clean and have a lot of images, scanned pages, complex charts, tables, and diagrams, etc.

## Supported Formats

Currently, we support PDF, PPT, and .Docx formats. We do not support web scraping and HTML. However, you can export webpages as PDFs and feed them to the engine.

## Usage

We have recently launched a new version of document cognition which supports -

Option to perform a semantic-based search (the bot will look at the sentence structure and keywords, look at the sentence, and try to map it to the most relevant sections in the documents). It's recommended to use a keyword search if the total no. of words in the input query is>3.

```
app.searchDocumentsNew({text:'query'}).then((resp)=> {
    //Your logic goes here
 });
```

Automatic creation of questions and answers with the ability to add them to journeys -

![](https://cdn.yellowmessenger.com/HBXDGNGi4W2V1613543255114.png)

Option to perform an only keyword search (the bot will simply do an ES match query in all the documents for that keyword). It's recommended to use keyword search if the total no. of words in input query is <=3.

```
app.searchDocumentsNew(
            {
                text: app.data.message,
                keyWordQuery: true
            })
```

Option to search for files based on metadata tags. Think of it as a Google Drive search where you can search for all files with a specific name. Note that this does not search inside documents -

```
app.searchDocumentsNew(
            {
                text: fileName,
                metadataQuery: true
            })
```

Option to filter documents by metadata tags. Imagine if you have HR policies for U.S. and India based employees and for a U.S. based employees, you want to search in only specific documents, you can use this function to filter only U.S. based documents through a tag. A tag is just a key: value pair. Each document can have multiple tags which can be configured through the UI below.

![](https://cdn.yellowmessenger.com/UuGk0fa581zw1613543990485.png)

```
app.searchDocumentsNew(
            {
                text: app.data.message,
                keyWordQuery: searchType,
                resultsPerDocument: 5,
                filterByMetadata: { "country": "India" }
            })
```

## How does document cognition work?

Document Cognition Model parses the entire document, tokenizes into headings and paragraphs, and maps each paragraph to a page number. It skips tables, images, and scanned pages wherever it finds them. It then indexes the textual data into our proprietary model, where it tries to predict the kind of questions that someone might ask by looking at a specific document. It primarily relies on -

1. TF-IDF score

2. Keyword frequency

3. entence structure

When a new query is made, the model searches through the embeddings created during the above indexing process and suggests the most relevant paragraphs along with a score for each for ranking purposes.

### Frequently asked questions

#### What does a good document format look like?

The following are some of the characteristics of a document that’ll be processed well during document cognition. It's recommended following these guidelines while pre-processing your document -

1. It does not have scanned pages and images.

2. 80% of the content is textual and well-formatted (e.g. Wikipedia articles)

3. Remove content and index pages, appendix pages, etc. (we will add the logic to skip these automatically in coming releases)

4. No bullet points before headings. Headings should have a larger font size and no spaces so that the parser can detect headings easily.

5. Always prefer the Word (.doc, .docx) version of the document if available, as some properties might get lost when converting it into PDF.

6. Tables will be skipped. if possible, try to upload documents with less tabular data or remove pages with tables altogether from the document.

#### Why am I not getting the right result in the first suggestion?

Because document cognition is a probabilistic model that is “predicting” the relevance of a specific paragraph or page by looking at the input string. There is no guarantee that the first result will be the most relevant result.

#### Why am I getting the other documents in suggestions which actually don't have the answer?

Same answer as above. The model has no way of “knowing” which document is correct, it can, however, assign a score to all the results based on its assessment of the documents.

#### Why am I getting multiple occurrences of the same document in the results?

Because there might be multiple pages/occurrences of relevant content in the same document. In such cases, we rank them, based on the score and return only two occurrences in each document by default. If you want to see more or fewer occurrences within the same document, you can control by passing the value of `results_per_document` in your search query.

#### Can the model convert tabular data into FAQs?

No, Tables will be skipped. if possible, try to upload documents with less tabular data or remove pages with tables altogether from the document. These tables can be uploaded/recreated in our bot database, where we can write business logic on top of them.

#### Why am I not able to access a document link, from a conversation I had yesterday?

Currently, we have restricted the life of each SAS link to an hour for security reasons. This can be removed/updated as per client request. You can generate a new link by asking the same query again in the bot.

![](https://cdn.yellowmessenger.com/RL35X3mCozP81613544469236.png)

#### How do I ensure that the bot shows only relevant documents?

There is no specific logic added to detect irrelevance right now. However, we do provide a relevance score with each search result that the bot developer can use. The model returns all documents which contain even a few keywords in the query in decreasing order of relevance. The bot developer can choose to show only Top N (e.g. Top 5) or Top 25% of the results based on relevance score.
