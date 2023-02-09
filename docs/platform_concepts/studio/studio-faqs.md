---
title: Studio FAQs
sidebar_label: Studio FAQs
---

:::note
Welcome message is supported only for web and app SDK and it is not supported for any of the [Channels](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/overview).
:::

### Nodes

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
 <summary>Is it possible to skip triggering NLU for specific steps of a flow?
</summary>
 <div>
  <div>Yes, you can skip triggering NLU for specific flows using the <a href="https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#25-store-comment">Store comment</a> node.
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

<details>
 <summary>I have an API response through which I’m getting a product image as a .png (few kb in size) Can I pass that into a Carousel/Image node to dynamically change the image?
</summary>
 <div>
  <div>Yes, use the following code snippet in the API parse function.

```
return new Promise(resolve => {
        const imageVariable = 
        [{
            "options": {  
                "caption": { "type": 'random' },
            },
            "url": "insertURL"
        }]
        resolve(imageVariable);
    }); 
```
You can also do this in the carousal by [creating your own custom/dynamic object](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#dynamic-carousels) (depending on the use case for which you select the node)​

</div>
  <br/>
   </div>
</details>

<details>
 <summary>The options in a dynamic Whatsapp list always leads to the fallback flow. How can we tweak this?
</summary>

 You can use the [Condition](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes#1-condition) node to redirect each option to the respective flow.
 <div>
  <div>

1. Insert the condition node in your flow.
2. Populate the node with button values.

![](https://i.imgur.com/FYETzej.png)

4. Connect each button to the flow that has to be executed if that button is clicked.

![](https://i.imgur.com/SysoleQ.png)
​
</div>
  <br/>
   </div>
</details>

<details>
 <summary>Can we increase the pagination size limit in Database Node?
</summary>
 <div>
  <div>
  
  You can increase the size limit upto 25, to increase beyond that, while setting the <b>Pagination</b>, instead of <b>Text</b>, use <b>Variables</b> with a static value. <b>Variables</b> let you increase the size limit upto 200.


![](https://i.imgur.com/Dgla9UJ.png)

​
</div>
  <br/>
   </div>
</details>

<details>
 <summary>I am able to create the same variable in Journey and Global but when I create the first global variable, I am unable to create the journey variable with same name
</summary>
 <div>
  <div>Variables should not have the same name. If they do, it will fetch the value for which it is assigned based on the assigned priorities from global to local.
​
</div>
  <br/>
   </div>
</details>

<details>
 <summary>How to retrieve multiple data from the database node?
</summary>

<div>
 <div>

 Create  <a href="https://docs.yellow.ai/docs/platform_concepts/studio/build/code"> function </a> and extract the data from the variable that <a href="https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#-4-store-and-access-variables-via-nodes">stored the DB response.</a>

 Write

 ```
 let records = data.variables.db_response.records
 console.log(records, "records")
 ```

 Log the result and check the data. After this you can use the data based on your use case.
​
</div>
  <br/>
   </div>
</details>

<details>
 <summary>Why am I getting a fallback message even when WhatsApps list message is configured?
</summary>
 <div>
  <div>To avoid a fallback message, you must store the value of the WhatsApp list option in a variable and use an IF condition to compare the variable value to trigger the respective outcome (flow, text, and so on).
​
</div>
  <br/>
   </div>
</details>

------

### Documents

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

---------

### API

<details>
 <summary>How to get the exact status code as our API Event Data explorer while getting API responses in a journey?
</summary>

 <div>
 <div>

 Create a <a href="https://docs.yellow.ai/docs/platform_concepts/studio/build/code"> function </a> after the API call and apply the below code snippet.

 ```
 ymLib.args.apiResponse.statusCode
 ```
 
 </div>
 <br/>
 </div>
 </details>

-------

### Journey(flow)

<details>
 <summary>How do I link one flow to another flow for a bot?
</summary>
 <div>
  <div>Use <a href="https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#15-execute-flow">Execute Flow</a> to link  another flow to a bot.
​
</div>
  <br/>
   </div>
</details>

<details>
 <summary>How to export/clone a journey to another bot?
</summary>

 <a href="https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/exportflow#-1-export-bot-template">Export the template of that journey</a> and <a href="https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/exportflow#14-view-approved-template-in-marketplace"> import it </a> to the bot of your preference.

 <div>
  <div>
​
</div>
  <br/>
   </div>
</details>
