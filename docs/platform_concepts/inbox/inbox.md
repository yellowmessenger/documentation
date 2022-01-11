---
id: inbox
title: Understanding the live agent module
description: How to add agents
featured: true
rank: 5
---

In case the user wants to talk to the live agent or sometimes it’s better for humans to take over for better customer experience then the bot should be able to transfer the user’s chat to a live agent and this can be achieved using the Inbox module and [raise a ticket](https://docs.yellow.ai/docs/platform_concepts/studio/steps/action-nodes-and-logic#raise-ticket) action node.

There are two kinds of roles to access the inbox module:
- Inbox Admin
- Inbox Agent

**Note:** Click [here](https://docs.yellow.ai/docs/platform_concepts/configurations/access-management#how-to-share-bot-access) to know how to add an user and give the access to them.

#### To get started, we have some prerequisites:
1. Have Inbox Agent Access
2. To configure the Journey to trigger live agent action, know more about [Journeys](https://docs.yellow.ai/docs/platform_concepts/studio/journeys) and [NLU](https://docs.yellow.ai/docs/platform_concepts/studio/natural-language-understanding/intents) 
3. Understand the raise ticket action node and it’s settings.

### Let’s Get Started

**Step 1**  Create a Journey 

**Step 2**  Add [Prompts](https://docs.yellow.ai/docs/platform_concepts/studio/steps/prompts-and-messages#use-case-specific) to collect information from users.

**Step 3**  Create an Intent and utterances to it. For example, “Can I talk to Live agent? ”,“Connect me to Customer Support” 

**Step 4**  Go ahead and Raise a ticket action node with the collected information

![](https://i.imgur.com/tkz07ty.png)

### Testing the live agent module:

**Step 1** Be available as a user having Inbox Agent access control and open the bot in another tab 
Be available as a user having Inbox Agent access control and open the bot in another tab

**Step 2** Raise a ticket from the bot opened in the other tab.

**Step 3** Go to Inbox -> Chats -> Overview, active ticket count should be increased by 1 and ticket will appear under Inbox -> Chats -> My chats




