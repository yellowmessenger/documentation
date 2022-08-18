---
title: Studio Updates
sidebar_label: Studio Updates
---


## 1. General

### Studio IA 

UI is redesigned to have a brand new IA helping in intuitive navigation through studio.



### Autocomplete  

Autocomplete feature can be configured for the bot to start predicting rest of the word or sentence as the user start typing a word/sentence. 

Scope of autocomplete:

1. **Prompt level**- Triggered inside a prompt (after you ask a question and wait). Configured for **Database Column**, **List entity**, and **User properties**.    
2. **Global level** - Triggered outside of a Journey(to improve discoverability).

> Release: 01/08/2022   
> Related links: [Node-Auto complete](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes/#auto-complete)


## 2. Train-NLU 

### Zero Shot Model  
(Zero Shot learning)

Zero shot learning is now available for cloud bots. 
The bot training is solely based on intent naming, without training any utterances. This is used for identifying user’s intent / improving suggestions directly.


> Release: 01/08/2022   
> Related links: [Intent naming](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents/#4-best-practices) 


## 3. Localisation 

Multilingual bots with manual translations to user
now have Localisation key coverage for all nodes.

> Release: 01/08/2022   
> Related links: [Localisation](https://docs.yellow.ai/docs/platform_concepts/studio/build/localization)

## 4. Conversation Logs 

Conversation logs & tagging will be updated- real time. 
It can be used for looking at conversations, RCA purposes etc. On request, it is available for app.ym bots(filters).

> Release: 01/08/2022   
> Related links: [Chat logs](https://docs.yellow.ai/docs/platform_concepts/studio/analyze/chat-logs)

## 5. Nodes

### Sync Database

“Sync Database” Node is available in Workflow-actions and is used to sync (Insert, Update or import) databases to external sources through APIs.Tables can be updated using APIs in a scheduled manner via workflows. 
**Functions supported** - Update, Insert, Import
**API Data supported** - CSV format

> Release: 01/08/2022   
> Related links: [Sync node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#sync-database)

### Quick Reply 
(WhatsApp Reply Buttons)

Quick replies node can switch between buttons and numbered list.
Previously, WhatsApp bots could use lists to select quick replies. Now, WhatsApp buttons can have upto maximum of 3 buttons and 20 characters/button. If more than 3 buttons are added, it defaults to numbered list.


> Release: 01/08/2022   
> Related links: [Quick reply node](http://localhost:3000/docs/platform_concepts/studio/build/nodes/prompt-nodes#quick-reply-node-for-whatsapp)

## 6. Doc Cog

Doc cog is enabled in 5 European languages (Czech, Romanian, Polish, Croatian, Slovakia) German, Spanish, and French. 

> Release: 01/08/2022   
> Related links: [Document cognition](https://docs.yellow.ai/docs/platform_concepts/studio/train/what-is-document-cognition)

