---
title: How do I retrieve Database data inside a bot flow?
sidebar_label: Retrieve Database data inside a flow
---

1. [Insert a Database node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#23-database) in your flow.
2. In the Database node, set the **Select type** as **Search**, select the table that contains the details and set the filter based on which the search action should be performed.

<img  src="https://i.imgur.com/4gP0X0w.png"  width="100%"/>

3. Click the **Select Variable** option at the bottom right corner and create a new variable. All the information in your database will now be stored in this variable. Use this code snippet **{{{variables.dbResponse.record.0.fieldName}}}** in your flows to retrieve a specific set of data.