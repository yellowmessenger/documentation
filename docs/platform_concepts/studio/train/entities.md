---
title : Entities
sidebar_label : Entities
---

An entity refers to specific information or data that the chatbot can identify and extract from user input. 

Let us consider the following example:

> User query: I am looking for Italian restaurants in New York to accommodate four people.

   In the above sentence, the identified entities are the `location` (New York), `cuisine` (Italian), and the `number of people` (four).

By training your bot on these specific entities, it enables the bot to answer questions accurately. Entities are primarily utilized to bypass prompts and enable the chatbot to provide relevant suggestions or responses to users once the bot identifies the relevant entity.

For more information on configuring entities for this purpose, refer to [this section](#auto-skip-prompts--simplify-interactions-with-entity-based-suggestions).

#### Predefined entities that do not need training

There are a set of entities that the bot recognizes without requiring specific training. These predefined entities provide a convenient way to handle common types of information without requiring additional setup. 

The prebuilt entities include:

* Name
* Date
* Email
* Location

## Add entities

In order for the bot to identify and understand the entities, you need to add the entities and train the bot specifically on those entities. 

To trigger flow using entities, you need to set entities as the start trigger for the flow. For more information, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#12--trigger-flow-using-entities)

Yellow.ai platform offers 4 different types of entities:

1. Text
2. List
3. Regex
4. System entities

### Add text type entities

Text type entities are suitable for use cases where there is no specific list or predefined format of entity items required.

Let's say you have a chatbot that helps users find nearby restaurants. In this case, you can use a text type entity to extract specific cuisine preferences from the user's input. Here is a sample example:

User: Can you recommend some good Italian restaurants nearby?

In this scenario, the text type entity can easily identify "Italian" from the user's input, allowing the chatbot to understand the cuisine preference and provide relevant recommendations. 

1.  Go to **Studio** > **Train** > **Entities** > **+ Add new entity**.

     ![](https://imgur.com/a283ade.png)

2. Enter the **Entity name** and choose the **Type** as **Text**. Entity name should be alphanumeric, lower case and cannot contain spaces.

   ![](https://imgur.com/T6LokhX.png)
   
* You can **Enable similar entities** check box to detect an entity if there is a partial match.

3. Click **Add**. This will create the entity of list type.

4. Go to  **Studio** > **Train** > **Intents** > [Add intents](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#add-intents-and-utterances).

5. In each user utterance of an intent, right-click on a word that represents an entity and select the corresponding entity from the options.

   ![](https://i.imgur.com/yg1p3Z6.jpg)
   
### Add list type entities
   
List type entities are a specific category used to recognize predefined lists of values. These entities are used to identify options from a predetermined set of choices.

For instance, consider a scenario where you are dealing with modes of payment. The list entity name is "mode of payment" and would contain values like UPI, Card, and Cash on delivery. When all distinct values of an entity are known in advance, the list type entity can be used.

1. Go to **Studio** > **Train** > **Entities** > **+ Add new entity**.

     ![](https://imgur.com/a283ade.png)

2. Enter the **Entity name** and choose the **Type** as **List**.Entity name should be alphanumeric, lower case and cannot contain spaces.

   <img src="https://imgur.com/cQxrO43.png" alt="drawing" width="80%"/>

3. Click **Add list item** and add a name for your list and enter the items in synonyms.

     <img src="https://imgur.com/gDWeLIk.png" alt="drawing" width="80%"/>
      
* You can **Enable similar entities** check box to detect an entity if there is a partial match.
      
4. Click **Add**. This will create the entity of list type.

### Add entities using regular expressions (regex) 


Regex patterns in entities help identify and extract specific text patterns from user inputs. Regex enables you to define a regular expression pattern to validate and ensure that the user input conforms to the desired format.

For instance, here are some regex samples: 

* **Email address**: `[A-Za-z0-9.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}`. 
* **Phone Number (US format)**: `?(\d3)?[-.\s]?(\d{3})[-.\s]?(\d{4})`
*  **Date (YYYY-MM-DD format)**: `\d{4}-\d{2}-\d{2}`
*  **URL**: `https?://(?
.)?[\w-]+(.[\w-]+)+([\w.,@?^=%&:/+#-]*[\w@?^=%&/+#-])?`


To add regex type entities:

1. Go to **Studio** > **Train** > **Entities** > **+ Add new entity**.

   ![](https://imgur.com/a283ade.png)

2. Enter the **Entity name** and choose the **Type** as **Regex**.

   <img src="https://imgur.com/e9RR8Ya.png" alt="drawing" width="80%"/>

3. Enter the regex format in the **Regex** field.

* You can enable **Case insensitive** to ignore the capitalization differences in text searches or comparisons.

4. Click **Add**.

* This will create the entity of regex type.

## Edit entities

You can edit all the information within entities as explained in the following:

1. Go to **Studio** > **Train** > **Entities**.

   ![](https://imgur.com/14D8xgH.png)

2. Go to the entity that you want to edit and click on the more-options icon > **Edit**.

   ![](https://imgur.com/7qh8PwH.png)

3. Edit the required changes and click **Save**.

   <img src="https://imgur.com/USkQMkk.png" alt="drawing" width="80%"/>
    
## Delete an entity

If an entity is irrelevant or redundant, you can delete it. To delete an entity:

1. Go to **Studio** > **Train** > **Entities**.

   ![](https://imgur.com/14D8xgH.png)
   
2. Go to the entity that you want to delete and click more-options > **Delete**.

   ![](https://imgur.com/62dMXWu.png)   

## Import entities

You can import entities from an external source using CSV file. 

The CSV file should contain the following two headers: 

   <img src="https://i.imgur.com/tdhpmfW.png" alt="drawing" width="40%"/>
   
* **Name**: Name of the entity.
* **Synonyms**: Comma-separated synonyms associated with each entity.  

Following is the sample CSV file format to import the entities into the system.


:::note
Import option is available only for list type entities.
:::

1. Go to **Studio** > **Train** > **Entities**.

    ![](https://imgur.com/14D8xgH.png)

2. Click **Import**.

   ![](https://imgur.com/8nwpEZG.png)

3. Click **Upload file** and upload the CSV file, then click **Import**.

   <img src="https://imgur.com/Q6Qq22h.png" alt="drawing" width="70%"/>

## Export entities

You can export entities from our platform to your local system folder in CSV format. 

Downloading entities serves several purposes: it backs up your data, makes it portable, and allows offline access. It also lets you customize entities as needed.

:::note
Export option is available only for list type entities.
:::

To export entities:

1. Go to **Studio** > **Train** > **Entities**.

    ![](https://imgur.com/14D8xgH.png)

2. Click **Export**.

   ![](https://imgur.com/UOl5lCB.png)

* Entities will be downloaded as a CSV file to your system's local folder.

## Auto-skip prompts & simplify interactions with entity-based suggestions

Entities offer simplified conversations by providing auto-suggestions based on identified entities. This process enhances the user experience by minimising unnecessary interactions.

For instance, if your bot has been trained on the "places" entity, it can offer relevant suggestions when the customer mentions a place. 

<img src="https://i.imgur.com/anyDc8z.png" alt="drawing" width="50%"/>

Similarly, if the date entity is set to automatically skip the date prompt, the bot will automatically assign the provided date value without displaying the prompt to the user. This enhances the user experience by seamlessly handling specific entities and reducing unnecessary interactions.

To add entities to skip prompts and offer suggestions:

1. Click **Make prompt smarter** on any prompt node.
2. Under **Auto-complete**, choose  **Entities** and the **Entity name**.
3. Under **Auto-skip** select the preferred **entity**. 
4. Click **Save**.

![](https://i.imgur.com/VbObv3i.png)