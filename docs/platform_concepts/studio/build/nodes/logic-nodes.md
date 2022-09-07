---
title: Logic Nodes
sidebar_label: Logic 
---
Logic nodes can be used when the flow must be branched based on the given conditions. 

---

## 1. Condition

Branch the flow based on if-else logic with this node.

![](https://i.imgur.com/0XiTCxA.jpg)

> For example, in the given flow the variable _**issueDetail**_ is storing the quick replies response (which is Yes/ No). Then the Condition is checked:
> If issueDetail = Yes, the bot will move to the mentioned flow 
Else (if any other value is entered other than Yes), the text will be displayed to the user. 


Condition node must have:

### 1.1 If- Condition

![](https://i.imgur.com/EncYoay.png)
 
Select a value (only one value can be selected) from the dropdown based on your use case, it consists of: 

* **Journey Variables** - Variables created for that particular flow. Use this to compare and branch flows based on variable values
* **Global Variables** - Use these values to compare and branch flows based on existing global variables that are extracted.
* **User Properties** - Use these values to compare and branch flows based on user properties like first name, gender, city, dob etc.
* **Others** -
    * **Intent**: Used to compare and branch when a [Intent](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents) is detected.
    * **Entity**: Used to compare and branch when an [Entity](https://docs.yellow.ai/docs/platform_concepts/studio/train/entities) is detected.
    * **Entity Value**: Used to compare and branch when a Entity value is detected. 
    * **Mustache**: You can write complex variable object and compare it to other variables (example variables.var_name.key_name)
    * **Inside agent working hours**: This can be used to branch conversation based on agent working hours configured at [Inbox](https://docs.yellow.ai/docs/platform_concepts/inbox/default-agent-statuses).
    * **Sentiment**: This is used to branch based on the Sentiment detected on the last user message (Sentiment can be Positive/ Negative/ Neutral). For example, if questioned about the user experience in the flow, and user replies with something negative, Conditional node can be used to → connect the user directly to an agent. If the reply is of positive or neutral sentiment, you can add them to reply back later with logic etc. 


* **System** - Page URL. This will branch conversation flow based on the page URL detected. 

    
> These dropdown values are derived from the [data available](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/cdp/user_data_segments/cdp_data/#user-property-data-types) in the system. **Journey variables** are created by the user for that flow, **Global variables** are asked and extracted from the other nodes, **User properties** are extracted from variables and few are automatically fetched by the system like IP, Country, Timezone, Created at, etc. 

### 1.2 Condition

![](https://i.imgur.com/3dmobD9.png)

### 1.3 Conditional Value

**Multiple** values can be selected based on the use-case. 

![](https://i.imgur.com/ZW4Mlpf.png)

This dropdown will consist of: 

1. Journey Variables
2. Global Variables
3. System Variables
4. User Properties

>When If-condition is **Others** or **System** these values are updated automatically.

### 1.4 Else Condition
 
To add an Else-if condition, click _**+Add another condition**_.

![](https://i.imgur.com/Oij3X9z.jpg)


---

## 2. Channel Filter 

Similar to the condition node, branch the flow based on the available active channels with this node. 


![](https://i.imgur.com/t1lgUpG.jpg)

Multiple channels can be configured for a bot. Branching (based on If, Else-if and Else conditions) through this node can happen when the mentioned channels are configured. 

For example, for the above flow, the following conditions are checked:

> 1. **If**, Facebook or WhatsApp channels are configured, the first flow (provideCoupons) will be executed. 
>2. **Else-if**, the Telegram or Skype channels are configured, a second flow (socialHandle) will be executed. 
>3. **Else**, if none of the mentioned channels is configured, a question will be posed to a user to share their social media handle (text node). 

Since none of the channels mentioned in If and Else-if was configured, the bot displayed a text message ("Please enter your social media handle where we can reach you")


