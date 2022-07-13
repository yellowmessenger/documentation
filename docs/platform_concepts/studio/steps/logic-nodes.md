---
title: Logic Nodes
sidebar_label: Logic 
---

Logic nodes can be used when the flow must be branched based on the given conditions. 

## Condition

Branch the flow based on if-else logic with this node.

![](https://i.imgur.com/NmRJ8bY.png)

For example, in the given flow the variable _**issueDetail**_ is storing the quick replies response (which is Yes/ No). Then the Condition is checked:


If issueDetail = Yes, bot will move to the mentioned flow 
Else (if any other value is entered other than Yes), the text will be displayed to the user. 

To add an Else-if conditon, click _**+Add another condition**_.

![](https://i.imgur.com/ZgrBTSC.png)




## Channel Filter 

Similar to condition node, branch the flow based on the available active channels with this node. 


![](https://i.imgur.com/VYWj95b.png)

Multiple channels can be configured for a bot. Branching (based on If, Else-if and Else conditions) through this node can happen when the mentioned channels are configured. 

For example, for the above flow, following conditions are checked:

> 1. **If**, Facebook or WhatsApp channels are configured, first flow (provideCoupons) will be executed. 
>2. **Else-if**, the Telegram or Skype channels are configured, second flow (socialHandle) will be executed. 
>3. **Else**, if none of the mentioned channels are configured, question will be posed to a user to share their social media handle (text node). 

Since none of the channels mentioned in If and Else-if were configured, the bot displayed text message("Please enter your social media handle where we can reach you")