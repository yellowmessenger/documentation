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
    
You can set the default language of the agent to English in <b>Inbox</b> > <b>Settings</b> > <b>Team</b> > <b>Agents</b>. Open the agent profile and select the <b>Default Language</b>. Click <a href= "https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/team/agents#11-editmodify-existing-agent-properties" >here</a> to learn more. 
    
</div>
</details>
  
<details>
<summary> How can I delete my chat and email tickets? </summary>
<div>
Inbox Agent or Admin cannot delete any tickets from Inbox. Tickets can only be deleted from the database. 
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
Sticky tickets will not go into the queue even if the group queue is turned ON. When an agent is at maximum concurrency OR busy/away/offline they are considered to be not eligible and will be skipped in consideration. It is recommended to a higher number than the set chat concurrency.
</div>
</details>


**WhatsApp policy**   


<details>
<summary> What is the cost of sending WhatsApp templates? </summary>
<div>
 Whatsapp charges a per-message fee for all the templates sent outside the 24 hr session based on the number of messages & country you send to. Click <a href= "https://developers.facebook.com/docs/whatsapp/pricing" > here </a> to learn more.   
</div>
</details>


<details>
<summary> Why is my chatbox not visible even though I have sent the WA template? </summary>
<div>
Just sending out the template message will not reinitiate the 24 hr window. The end-user has to reply back in the conversation.    
</div>
</details>

<details>
<summary> Why can’t I cannot attach my media to the template? </summary>
<div>
You cannot change the type of media once the template is approved. Also, you can only send out the following types of media:  
<b> Image </b> - Jpeg or png format not more than 5MB, <b> Video </b> - MP4 video not more than 16MB, <b> Document </b> - PDF.  
</div>
</details>


<details>
<summary> Why am I not able to see any templates? </summary>
<div>
There are two reasons why you are not able to see any WhatsApp templates within your  Inbox:  None of your templates are approved by WhatsApp yet or you have not created any templates yet.  
</div>
</details>

<details>
<summary> Why am I not able to see the template message content that I just sent? </summary>
<div>
WhatsApp templates created with <a href="https://developers.facebook.com/docs/whatsapp/pricing">hsm</a>  object will not be displayed with the actual content inside Inbox. However templates created with <a href="https://developers.facebook.com/docs/whatsapp/pricing"> template </a> object will be displayed inside Inbox. If you are not seeing the actual template content, then the template you sent out is most likely created with hsm object. 
	
</div>
</details> 
