---
title : Entities
sidebar_label : Entities
---

An entity refers to specific information or data that the chatbot can identify and extract from user input. Let's consider the following example:

User query: I'm looking for Italian restaurants in New York to accommodate four people.

In this sentence, the entities are the location (New York), cuisine (Italian), and the number of people (four).

By training your bot on these specific entities, it enables the bot to answer questions like this accurately. Entities are primarily utilized to bypass prompts and provide suggestions to users once the bot identifies the relevant entity. For more information on configuring entities for this purpose, please refer to [this section](#auto-skip-prompts--simplify-interactions-with-entity-based-suggestions).

There are a set of entities that our out-of-the-box bot recognizes without requiring specific training. These prebuilt entities include:

* Name
* Date
* Email
* Location

These entities provide a convenient way to handle common types of information without the need for explicit training.


## Add entities

In order for the bot to identify and understand the entities, it is essential to add the entities and train the bot specifically on those entities. 

The yellow.ai platform offers 4 different types of entities:

1. Text
2. List
3. Regex
4. System entities

To trigger flow using entities, you need to set entities as the start trigger for the flow. For steps, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#12--trigger-flow-using-entities)


### Add text type entities

Text type entities are suitable for use cases where there is no specific list or predefined format of entity items required. They can be employed when the context calls for extracting specific text values without the need for list or regex type entities.

Let's say you have a chatbot that helps users find nearby restaurants. In this case, you can use a text type entity to extract specific cuisine preferences from the user's input. Here's a simple example:

User: Can you recommend some good Italian restaurants nearby?

In this example, the text type entity would extract the value **Italian** from the user's input, allowing the chatbot to understand the cuisine preference and provide relevant recommendations. Since there isn't a predefined list or format of entity items required for this use case, a text type entity works well in extracting specific text values without the need for a predefined list or regular expression-based entity.

1.  Go to **Studio** > **Train** > **Entities** > **+ Add new entity**.

![](https://i.imgur.com/US9yAo3.png)

2. Enter the **Entity name** and and choose the **Type** as **Text**.

![](https://i.imgur.com/XGHBhAZ.png)

2. Go to  **Studio** > **Train** > **Intents** and [add intents](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#add-intents-and-utterances).
3. In each user utterance of an intent, right-click on a word that represents an entity and select the corresponding entity from the options.

![](https://i.imgur.com/yg1p3Z6.jpg)

### Add list type entities

List type entities refer to a specific type of entities that are used to recognize predefined lists of values. These entities are designed to identify options from a predetermined set of choices.

For examaple, **mode of payments** will be the list name and its values would be **UPI, Card, Cash on delivery**. Ideally, when all possible distinct values of the entity are known, list type of entity can be used. 

1. Go to **Studio** > **Train** > **Entities** > **+ Add new entity**.

![](https://i.imgur.com/US9yAo3.png)

2. Select **Type** as **List**, and click **Add list item**.

![](https://i.imgur.com/qKNZgPu.png)

3. Add a name for your list and enter the items in synonyms.

For instance, **Type of leaves** : Sick, Casual, Privilege, Maternity, Paternity.

### Add regex type entities

Regular expressions (regex) in entities are patterns that are used to identify and extract specific text patterns from user inputs. Regex allows you to define rules for matching and capturing text based on patterns or formats.

For example, let's say you have a regex entity for email addresses. The pattern for an email address could be something like "\b[A-Za-z0-9.%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}\b". When this regex pattern is applied, it can recognize and extract valid email addresses from user inputs, such as **john.doe@example.com** or **janesmith123@gmail.com**.

1. Go to **Studio** > **Train** > **Entities** > **+ Add new entity**.

![](https://i.imgur.com/US9yAo3.png)

2. Enter the entity name in **Entity name** and select **Type** as **Regex**.

![](https://i.imgur.com/ujjr6yM.png)

3. Enter the format in the **Regex** field.

## Train the bot on entities

Once you add entities, you need to train your bot on the same. To train entities:

1. Click **Train entities** on top.

![](https://i.imgur.com/HVuCiMl.png)


2. Select the **Model type**, the bot can be trained on English and multiple languages.

  > Multilanguage training  works only for **Text** type entities.

![](https://i.imgur.com/RnA8fYY.png)

3. Enable **Fuzzy search** for the bot to conduct searches for text that closely matches a term, even when there are slight misspellings. 

For instance, if you perform a fuzzy search for "rode," it will identify terms with similar spelling, such as "ride" or "node," rather than strictly requiring an exact match.

6. Click **Train**.


## Update entities

You can update the entities(all of the information in it) at any point of time. To update an entity:

1. Go to **Studio** > **Train** > **Entities**.

![](https://i.imgur.com/bJNtr5w.png)

2. Click **Edit**.
3. Make the required changes and click **Update**.

![](https://i.imgur.com/gktslXm.png)


## Import entities

You can import the entities from an external source. The file to be uploaded should be a CSV file with two headers, **Name** for the item name and **Synonyms** for comma-separated synonyms associated with the item.

**Sample**

<img src="https://i.imgur.com/tdhpmfW.png" alt="drawing" width="40%"/>

1. Go to **Studio** > **Train** > **Entities**.
2. Click **Import**.

![](https://i.imgur.com/hYe6DO8.png)

3. Click **Upload file** and upload the CSV file. 

<img src="https://i.imgur.com/OWqXVb0.png" alt="drawing" width="70%"/>

4. Click **Import**.


## Export entities

You can export entities from our platform for backup or integration purposes. To export entities:

1. Go to **Studio** > **Train** > **Entities**.
2. Click **Export**.

![](https://i.imgur.com/exJn6JX.png)

Entities will be downloaded in your system as a CSV file.

:::note
Import and Export actions are available only for list type entities
:::


## Delete entities

1. Go to **Studio** > **Train** > **Entities**.
2. Click **Delete** followed by another **Delete** button.

![](https://i.imgur.com/3wgz5Nx.png)


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