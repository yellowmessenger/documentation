---
title : Entities
sidebar_label : Entities
---

Entities are background or any additional information that is valueable to the message. At times, users tend to provide all the information(entities) upfront in an utterance. Using entities appropriately in bot model training leads to a better conversational experience.

For Example - 

> I want to book an appointment with the **Dentist** on **27th May**
    -   Dentist is type of Doctor and 27th May is Date.

> Buy the latest **SUV** for your brand
    -   Here, SUV referes to the type of car.


In [cloud.yellow.ai](https://cloud.yellow.ai/), there are two kind of entities that can be defined - 

1. **List Type**
2. **Pattern Type**
3. **System Entities**

### List Type 

These consist of around 60-70% usecases such as product catalogues, type of leaves, mode of payments, etc. Ideally when all possible distinct values of the entity are known, list type of entity can be used. For example -

> **Type of loan** : Home, Personal, Car, Bike 
> **Type of Leave** : Sick, Casual, Privilege, Maternity, Paternity 

Additionally, each value can have multiple variations - *Car* can be regarded as *4 wheeler* and *Bike* as *2 wheeler*. These variations can be added as synonyms to each value. Synonyms can be other meanings of the entity in other languages.

### Pattern Type

Cases when the pattern of the information is known but there is no way to list all the possible exact values of the same entity. This includes entities like Fligh Number, ID cards, etc.

> **Policy Numbers** - OG - XXXX -XXX -XXXX
> **PAN Number** - ABCDE1234F

Defining these entities is very simple, by entering the regular expression (general format of input).

### System Entities

Apart from the List and Pattern type entities, a set of entities are recognized by the model out of the box without any specific training. These include - 

> 
  - Name
  - Date
  - Email
  - Location