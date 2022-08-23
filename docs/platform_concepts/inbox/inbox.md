---
id: inbox
title: Overview
description: How to add agents
featured: true
rank: 5
---

In case the user wants to talk to the live agent or sometimes it’s better for humans to take over for better customer experience then the bot should be able to transfer the user’s chat to a live agent and this can be achieved using the Inbox module and [raise a ticket](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#raise-ticket) action node.

There are two kinds of roles to access the inbox module:
- Inbox Admin
- Inbox Agent

**Note:** Click [here](https://docs.yellow.ai/docs/platform_concepts/configurations/access-management) to know how to add an user and give the access to them.

#### To get started, we have some prerequisites:
1. Have Inbox Agent Access
2. To configure the Journey to trigger live agent action, know more about [Journeys](https://docs.yellow.ai/docs/platform_concepts/studio/build/journeys) and [NLU](https://docs.yellow.ai/docs/platform_concepts/studio/train/intents) 
3. Understand the raise ticket action node and it’s settings.

### Let’s Get Started

**Step 1**  Create a Journey 

**Step 2**  Add [Prompts](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) to collect information from users.

**Step 3**  Create an Intent and utterances to it. For example, “Can I talk to Live agent? ”,“Connect me to Customer Support” 

**Step 4**  Go ahead and Raise a ticket action node with the collected information

![](https://i.imgur.com/tkz07ty.png)

### Testing the live agent module

To test the live agent transfer you need to have access as an Inbox agent.

If you have admin access to the bot follow [these steps](https://docs.yellow.ai/docs/platform_concepts/inbox/manage-support-agent) to give yourself the inbox agent access.

>Note: if you are an admin you don't have to add user again, in users just edit your row to add inbox agent access as well.

Once you have created the live agent journey, follow these steps to test it out:
1. Duplicate the tab or open the bot in another window. So now you will have two tabs opened.
2. So in one of the tab go to **Inbox**
3. Inside inbox, go to chats and then into **My chats**

![](https://i.imgur.com/9mYj74d.png)

4. Make sure you are available. To check that click on the profile icon on the right corner and you will see a status drop down. 

![](https://i.imgur.com/1CM2JqU.png)

5. Go to the previous tab or window where the bot was opened and raise a ticket. After ticket being raised it will show the name of the agent connected

![](https://i.imgur.com/O895hbq.png)

6. In the tab in which the inbox was opened, you will see a ticket raised.

![](https://i.imgur.com/y7ctMHT.png)

7. You can reply from here and see the chat happening real-time on the bot.

![](https://i.imgur.com/yoDC3VT.png)
![](https://i.imgur.com/eUjdbs2.png)

8. Then you can close the chat and also test the message that should come on the ticket close.

### Inbox on Android & iOS

Yellow.ai brings **YellowAI Partner** for agents to reduce query resolution time by responding and addressing queries in a matter of seconds on [Android](https://play.google.com/store/apps/details?id=ai.yellow.supportagent&hl=en&gl=US) and [iOS](https://apps.apple.com/tr/app/yellowai-partner/id1612610646).

Our innovative automated live chat technology seamlessly bridges the gap between traditional and modern communication channels, while driving agent productivity, automating L1 queries, and providing better interactions through voice and video calling features.

Agents can use YellowAI Partner to:

* Communicate with customers and serve them round the clock.
* Handle L1 L2 queries like a boss.
* Collaborate with teammates to address queries.
* Provide better interactions through voice and video calling features.
* Get empowered with access to the information.
* Get instant feedback from customers.
* AI Agent Workflows to automate agent actions.
* Push Notifications for when you are on a break, so you don't miss any tickets.
