---
title: Studio FAQs
sidebar_label: Studio FAQs
---

<details>
 <summary>Why is the send OTP node not working?
</summary>
 <div>
  <div>Our out-of-the-box OTP verification is restricted only to the India region. If you’d like to avail of this functionality for international numbers, you will have to use external APIs.
</div>
  <br/>
   </div>
</details>

<details>
 <summary>What does a good document format look like?
</summary>
 <div>
  <div>The following are some of the characteristics of a document that’ll be processed well during document cognition. It's recommended to follow these guidelines while pre-processing your document -
​
  
​
* It does not have scanned pages and images, these will be skipped if present in the doc.
​
* At least 80% of the content is textual and well-formatted (e.g. Wikipedia articles)
​
* Remove content and index pages, appendix pages, etc. (we will add the logic to skip these automatically in coming releases)
​
* No bullet points before headings. Headings should have a larger font size and no spaces so that the parser can detect headings easily.
​
* Simple tabular data works better than complex or merged tabular data in the documents.
​
  
</div>
  <br/>
   </div>
</details>

<details>
 <summary>Why am I not getting the right result in the first suggestion?
</summary>
 <div>
  <div>Because document cognition is a probabilistic model that is “predicting” the relevance of a specific paragraph or page by looking at the input string. There is no guarantee that the first result will be the most relevant. The most relevant results are expected to come in the top 3 results.
</div>
  <br/>
   </div>
</details>

<details>
 <summary>Why am I getting the other documents in suggestions which don't have the answer?
</summary>
 <div>
  <div>Same answer as above. The model assigns individual scores to all the documents’ paragraph and use them to show the results, so if the confidence threshold is low it can still show irrelevant answers. You can fine-tune the confidence threshold using some test cases.
​
</div>
  <br/>
   </div>
</details>

<details>
 <summary>Why am I getting multiple occurrences of the same document in the results?
</summary>
 <div>
  <div>Because there might be multiple pages/occurrences of relevant content in the same document. In such cases, we rank them, based on the score and return only two occurrences in each document by default. If you want to see more or fewer occurrences within the same document, you can control it by passing the value of `results per document` in your search query.
​
</div>
  <br/>
   </div>
</details>
 
 <details>
 <summary>Can the model read tabular data or image presents in the documents?
</summary>
 <div>
  <div>Tables can be indexed by enabling the Parse table option while uploading, Simpler table works better than complex/merged tables. Images/diagrams will be skipped.
​
</div>
  <br/>
   </div>
</details>
 
<details>
 <summary>Why am I not able to access a document link, from a conversation I had yesterday? Can I change this dynamic URL to some fixed redirection URL?
</summary>
 <div>
  <div>Currently, we have restricted the life of each SAS link to an hour for security reasons. This can be removed/updated as per the client's request. You can generate a new link by asking the same query again in the bot. You can also change this redirection URL to a fixed URL using the document properties option.
 
​
![](https://camo.githubusercontent.com/f1d4e073603851fadf4777a41e25d88d9412a1856666b67f8f0738b5b5d1daea/68747470733a2f2f63646e2e79656c6c6f776d657373656e6765722e636f6d2f524c333558336d436f7a5038313631333534343436393233362e706e67) 
​
</div>
  <br/>
   </div>
</details>

<details>
 <summary>How do I ensure that the bot shows only relevant documents?
</summary>
 <div>
  <div>There is no specific logic added to detect irrelevance right now. However, we do provide a relevance score with each search result that the bot developer can use. The model returns all documents which contain even a few keywords in the query in decreasing order of relevance. The bot developer can choose to show only Top N (e.g. Top 5) or Top 25% of the results based on relevance score.
​​
</div>
  <br/>
   </div>
</details>

<details>
 <summary>Can the Doc cog work if the documents are stored in a different system?
</summary>
 <div>
  <div>Doc cog has in-build integrations for Sharepoint, S3, URLs, and KBs (Salesforce, Service-now, Confluence). Any other KB can also be integrated which has APIs to access the articles/documents.
​​
</div>
  <br/>
   </div>
</details>

<details>
 <summary>Docs QNAs are not being generated, do I need it for working of doc cog? or can I edit the response of doc cog results?
</summary>
 <div>
  <div>Doc cog search will work fine without the QNAs. If the upload docs are showing completed status, you can just enable doc cog fallback or add Action Node and start using it. QNA's are only required for editing the answers and adding them to the FAQs section.
​​
</div>
  <br/>
   </div>
</details>

<details>
 <summary>Is permission-based Doc cog results possible so that only certain groups of people can search in a certain list of Docs / External KBs?
</summary>
 <div>
  <div>Yes, It is possible, User can add tags to the documents and pass the tag value as a variable in the doc cog action node while searching.
​
</div>
  <br/>
   </div>
</details>

<details>
 <summary>If a single document has different answers/responses wrt a user profile like CEO, HR, SDE etc, Can we filter and show just the answers related to the User Profile?
</summary>
 <div>
  <div>If the results are on a different page, page logic can be used to filter the results
​
if answers are in a tabular structure, you can try adding the role of the user in the query itself, like

​
```<query>: SDE”, eg. Annual leave entitlement?, SDE"```
​
</div>
  <br/>
   </div>
</details>

<details>
 <summary>Why my documents are taking so long for indexing, is it stuck?
</summary>
 <div>
  <div>Doc cog uses queue base indexing flow which has a common queue among all the bots. A pending/queued status represents doc is still in the queue and waiting for indexing while the indexing status represents the doc is being indexed.
​
</div>
  <br/>
   </div>
</details>


<details>
 <summary>Is there any limit on documents uploading?
</summary>
 <div>
  <div>Yes, for a Tier 0 (Free Tier) bot there is a limit of a max of 50 total pages or a max of 5 documents and Tier 1 bot has a max 200 documents limit. Tiers other than T0 can have max of 500 pages per document.
​
</div>
  <br/>
   </div>
</details>

<details>
 <summary>Can I index my articles present on ServiceNow / Confluence / Salesforce etc.?
</summary>
 <div>
  <div>Yes, using Doc cog External KB integration it is possible to index the articles using the APIs.
​
</div>
  <br/>
   </div>
</details>

<details>
 <summary>Why my bot is showing Journey Suggestions (Did you mean) instead of Doc cog results in fallback?
</summary>
 <div>
  <div>A bot has a specific priority order of actions in the fallback case.
​
Order: Journey -> FAQs -> Journey suggestion -> Doc cog -> Other fallback.
​
So if the Journey suggestions are enabled and with good suggestion confidence, Journey suggestion will be triggered due to the priority order. You can try disabling the suggestion or increasing the confidence threshold of the suggestion.
​
</div>
  <br/>
   </div>
</details>

<details>
 <summary>Can I change the layout of the doc cog results cards?
</summary>
 <div>
  <div>Yes, but the default layout is recommended which helps us in analytics, improves accuracy and provides a better user experience.
​
A layout that can be changed: Change vertical to horizontal cards, change the display name, remove tags, and remove the preview button.
​
</div>
  <br/>
   </div>
</details>


<details>
 <summary>How do I link one flow to another for a bot?
</summary>
 <div>
  <div>Use the Execute node to link  another flow to a bot. For more information, see [Execute Flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes/#15-execute-flow).
​
</div>
  <br/>
   </div>
</details>

<details>
 <summary>Is it possible to skip triggering NLU for specific steps of a flow?
</summary>
 <div>
  <div>Yes, you can skip triggering NLU for specific flows using the **Store comment** node.  For more information, see [Store comment](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#25-store-comment).
​
</div>
  <br/>
   </div>
</details>

<details>
 <summary>I have configured Hindi language but it is triggering fallback/different journey? What might be the reason?
</summary>
 <div>
  <div>In a flow, if you have selected "hi" (ISO code) for Hindi (button value), then it might be triggering another intent which you would have configured earlier ("hi" intent configured). To overcome this problem, set a variable, assign the variable value to Hindi language (hi), and then connect it to the Set language node.
​
</div>
  <br/>
   </div>
</details>


