---
title : Entities
sidebar_label : Entities
---


In this article, you will learn: 

1. [Introduction](#ex)
2. [How to add and train entities](#ate)
3. [Types of entities](#et)
4. [Autoskipping prompts using entities](#ape)

:::tip
You can access Entities using the keyboard shortcut `e`.
:::

---
## <a name="ex"></a> 1. Entities overview 



Entities are background or any additional information that is valuable to the message. At times, users tend to provide all the information(entities) upfront in an utterance. Using entities appropriately in bot model training leads to a better conversational experience.

> I want to book an appointment with the **Dentist** on **27th May**.
    - Entity 'Type of Doctor' = Dentist, 'Date' = 27th May

> Buy the latest **SUV** for your brand.
    - Entity 'Type of car'= SUV 


---




## <a name="ate"></a> 2. Add and train entities 

* Open **Studio** > **Train**. Click **Entities**.

![](https://i.imgur.com/jq1QXyS.png)


* For the bot to recognize entities they must be added and trained. 

### 2.1 Add entities

* Click **+Add new entity**.
* Add **Name**. Select a [Type](#et) from the dropdown.

:::note
Entity name should be alphanumeric, lower case and must not contain spaces.
:::

![](https://i.imgur.com/lrVhau8.png)

* If **Enable similar entities** is selected, the bot detects an entity even if there is a partial match. For example: "How much does **mahindra scorp** cost?" will look for the entity- **Mahindra Scorpio** as it is a partial match. 



### 2.2 Train entities

* Click **Train entities**. 
* Select **Model Type** (it can be trained for english/multiple-languages).

![](https://i.imgur.com/9rCHT2f.png)


* When **Fuzzy search** is selected, the bot searches for text that matches a term closely instead of exactly even when the terms are misspelt. For example, a fuzzy search for "rode" will find terms similar in spelling, such as “ride” or “node”. 


----

## <a name="et"></a> 3. Types of entities
In the [yellow.ai](https://cloud.yellow.ai/) platform, following entities can be defined:

1. **List Type**
2. **Regex Type**
3. **Text Type**
4. **System Entities**

---

### 3.1 List 

* These consist of around 60-70% usecases such as product catalogues, type of leaves, mode of payments, etc. Ideally, when all possible distinct values of the entity are known, list type of entity can be used. For example:
    * **Type of loan** : Home, Personal, Car, Bike. 
    * **Type of Leave** : Sick, Casual, Privilege, Maternity, Paternity.
* Select **List** type, and **List items**.
* In the list, add **Names** of the items. 
* For each item, **Name** and **Synonyms** can be added.

:::info
**Synonyms** are multiple variations - *Car* can be regarded as *4 wheeler* and *Bike* as *2 wheeler*. Synonyms can be other meanings of the entity in other languages.
:::

![](https://i.imgur.com/UEQWA4v.png)

---

### 3.2 Regex

Cases when the pattern of the information is known but there is no way to list all the possible exact values of the same entity. This includes entities like Flight Number, ID cards, etc.

> **Policy Numbers** - OG - XXXX -XXX -XXXX
> **PAN Number** - ABCDE1234F

Defining these entities is very simple, by entering the regular expression (general format of input) Example, Regex for PAN card- "[A-Z]{5}[0-9]{4}[A-Z]{1}".

---
### 3.3 Text

Text Type entities can be used when the use-case doesn't require list/regex type (when there is no specific list/format of entity items). 

* Add **Entity name** and **Type**.

![](https://i.imgur.com/m8WfLmL.png)

* Open **Studio** > **Train** > **Intents** and [add intents](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents#add-intent).  
* In each Intent- user utterance, select a word that hold the meaning of an entity and right click. Select the required entity.

![](https://i.imgur.com/yg1p3Z6.jpg)


:::note
It is highly recommended not to use text entity unless required as it is not very definite. 
:::

---

### 3.4 System entities

Apart from the List and Pattern type entities, a set of entities are recognized by the model out-of-the-box without any specific training. These include:

  - Name
  - Date
  - Email
  - Location






---

## <a name="ape"></a> 4. Autoskipping prompts using entities

To detect entity and skip prompts, open **Make prompts smarter** of that respective prompt and select the entity value. Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#5-make-prompt-smarter) to learn more on Make prompts smarter option. 
If the entity value is detected/ present in the memory, that prompt will be skipped from the flow. 


> For example, if date entity is selected for autoskipping in date prompt, value of date will be automatically assigned to given date and user will not be shown that prompt. 

![](https://i.imgur.com/e8gUqST.png)


:::note
You can test Entities detected in a phrase/utterance using [Test your bot](https://docs.yellow.ai/docs/platform_concepts/studio/tools#21-test-your-bot) option in tools.
:::