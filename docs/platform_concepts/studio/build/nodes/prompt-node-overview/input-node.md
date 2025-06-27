---
title: Input node
sidebar_label: Input
---


Ask and store user input and other comments with this node. 

:::note
 Use this node only to store text comments from users - these replies will not trigger NLP.
:::

In many use cases, there is a need for a non-linear flow. For example, if the phone number node asks "Please enter your phone number"- the user enters a number in the wrong format, the AI-agent displays the validation message saying "Entered number is wrong. Please enter again". For the same, if the user enters "Why do you want my phone number?" the reply will still be "Entered number is wrong. Please enter again". To handle such cases, the Input node can be used to handle different types of user replies. 


For better & dynamic conversation design, use the functionalities of the input node:  

1. Custom validator design.  
2. Attachment of different custom flows/messages every time validation fails. Validation failure messages need not be monotonous as it can be configured for each of the failed attempt separately.  
3. Can attach the new [Context handler](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/logic-nodes) locally for dynamic conversations. 

![](https://i.imgur.com/MSHE9HW.png)