---
title: Steps to identify all the triggered intents of the bot
sidebar_label : Identifying all triggered intents
---

By gaining insights into all the intents triggered by the bot, you can draw multiple conclusions, such as:

* Analyzing the most and least triggered intents provides insights into user interactions and preferences.
* Identifying key intents helps in understanding the primary goals and needs of users.
* Monitoring the frequency of assistance requests or user satisfaction gauges the effectiveness of the bot's performance.
* Utilizing data for training purposes enhances the bot's capabilities and accuracy over time.

In this article, you will learn a workaround to obtain all the triggered intents (from which you can deduce the top triggered intents).



## Obtain all the intents triggered


Follow the steps below to obtain the triggered intents and confidence level of the predicted intent:


**Step 1 (initial flow):**

1. Add a start node and a text/question node that displays a message.
2. Connect to an execute flow node to track intents.

![image](https://imgur.com/8sQq8X8.png)

**Step 2 (add flow to initiate a skill):**

In this flow (e.g., intent trigger analytics), you can create a skill (execute flow) to identify the intents.

![image](https://imgur.com/L6gJeU1.png)

**Step 3 (create a database):**

1. Open Automation > Database.
2. Create a table and add searchable columns to store the intent names.

![image](https://imgur.com/8o6MjXr.png)

This table will be available in Data explorer.



**Step 4 (create a skill):**


> Click [here](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode#skill-configuration) to learn how to configure a skill.


1. Create a new skill.
2. Connect the start node to a function node and add the below function which fetches the intent names (slug value) and confidence from the `data.prediction.intents` variable.


```
return new Promise(resolve => {
    // Your logic goes here
    let intent_name, intent_confidence, intent_array = [];
    let intentsObject;
    try {
        console.log("data Obj" + JSON.stringify(data));
        console.log("data prediction Obj" + JSON.stringify(data.prediction));
        intentsObject = data.prediction.intents;
        for (let eachKey of Object.keys(intentsObject)) {
            if (intentsObject[eachKey] > 0.87) { // <will be recognised if the confidence is more than 0.87>
                switch (eachKey) {
                    case "uSN404cibhVyphu_LAG-u": // ADD YOUR SLUG NAME HERE
                        intent_name = "talk to agent"; // ADD YOUR INTENT NAME HERE 
                        intent_confidence = "" + intentsObject[eachKey];
                        break;
                    default:
                        intent_name = "Unknown Intent | " + eachKey;
                        intent_confidence = "Uknown Confidence";
                        break;
                }
                intent_array.push({
                    "intentName": intent_name,
                    "intentConfidence": intent_confidence
                });
            }
        }
    }
    catch (e) {
        console.log("On Error Block : " + e);
        intent_name = "No Intent";
        intent_confidence = "No Confidence";
        intent_array.push({
            "intentName": intent_name,
            "intentConfidence": intent_confidence
        });
    }
    resolve(intent_array);
});                 

```
3. Store the output in an object variable, e.g., intents_arr. The value of which will be the Intent slug names and the confidence.
4. Connect to another function node and add the below function to identify and segregate if more than one intent-confidence value is recognized from one input (i.e., if an array of values is identified in a variable intent_arr).



```

return new Promise(resolve => {
    // Your logic goes here
    let current_prediction_array = data.variables.intents_arr;
    current_prediction_array.shift();
    resolve(current_prediction_array);
});   

```



5. Create 2 variables using a variable node to segregate the object variable to two different values such as predicted_intent_name and predicted_intent_confidence `{{{variables.intents_arr.0.intentName}}}` and `{{{variables.intents_arr.0.intentConfidence}}}`.

![image](https://imgur.com/iQwcXyI.png)

6. Use a condition node to check if the intent value recognized is set.

![image](https://imgur.com/Jd9cLX5.png)

7. Connect the condition node to the database node and store the variables into the columns (intents and confidence).

![image](https://imgur.com/pWky9lp.png)

8. The following nodes/connections are an example of the skill that must be configured.

![image](https://imgur.com/uGBbA2P.png)


:::note

Insights related to frequently asked questions (FAQs) cannot be obtained through this process as each question necessitates a distinct flow.

:::



### Filter for top triggered intents

To gain insights into top intents, you can generate [custom analytics](https://docs.yellow.ai/docs/platform_concepts/growth/dataexplorer/customtables) based on the custom table you've created. This analytics allows you to determine which flows are frequently triggered and the frequency of these triggers.

> You can apply custom analytics only if the columns in the database are **searchable**.


1. Open Insights > Data Explorer.
2. From custom tables, select the table which has intent data.
3. Filter the data for particular keywords.
4. Summarize by > count of intent names. This will give you the count of all the intent names triggered.
5. You can sort this column to get the most triggered intents vs least triggered intents.


:::note
The **Top flows viewed** widget in the Insights > Overview section provides information about the most frequently initiated sequences of actions within the platform. While the most viewed flows might be those promoted as default options, the most triggered flows are determined by actual user interactions, taking into account various entry points like start points and in-flow buttons. 

:::
