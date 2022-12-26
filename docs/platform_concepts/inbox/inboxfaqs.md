---
title: Inbox FAQs
sidebar_label : Inbox FAQs
---



<details>
<summary> 
Can we have primary and secondary WhatsApp numbers(2 phone numbers) connecting a bot user to the live agents? </summary>
<div>
Each bot has only one inbox, the bot can have multiple Whatsapp numbers activated, and the agent queries will be directed to the bot's Inbox. Hence, all Whatsapp numbers are sourced to the same Inbox module, and agents can pick up conversations(tickets) from any of the numbers.
</div>
</details>
    
    
<details>
<summary> Why is the agent's language is getting translated automatically to the user's language even when the agent is replying in English?
</summary>
<div>
    
You can set the default language of the agent to English in <b>Inbox</b> > <b>Settings</b> > <b>Team</b> > <b>Agents</b>. Open the agent profile and select the <b>Default Language</b>.

Click <a href="[link](https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents/#11-editmodify-existing-agent-properties)">here</a> to learn more. 
    
</div>
</details>
  

**Sticky agents** 

<details>
<summary> What does "agents not eligible to take chats" mean? </summary>
<div>
Agents are considered to be not eligible for assignment when the agent status is currently offline/busy/away and when the agent has no vacant concurrency to assign chats.
</div>
</details>

<details>
<summary> Will a sticky ticket go into the queue if it is raised when all my agents are occupied? </summary>
<div>
- Sticky tickets will not go into the queue even if the group queue is turned ON. When an agent is at maximum concurrency OR busy/away/offline they are considered to be not eligible and will be skipped in consideration. It is recommended to a higher number than the set chat concurrency.
</div>
</details>