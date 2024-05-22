---
title: Inbox FAQs
sidebar_label : Inbox FAQs
---

<details>
<summary> 
Which attachment formats does Inbox support?
</summary>
<div>
In the chat or email conversation, customers, agents, and admins have the ability to attach files of these formats: <br/> JPEG, JPG, PNG, GIF, PDF, TXT, DOC, PPT, DOCX, PPTX, XLS, XLSX, CSV, TSV, ZIP, JSON, MP4, MP3, WAV, AAC, M4A, SVG, 3GP, and MOV. <br/>
However, there is a 25MB size-limit on the files you can send. </div>
</details>


<details>
<summary> 
Can we have primary and secondary WhatsApp numbers(2 phone numbers) connecting a bot user to the live agents? </summary>
<div>
Each bot has only one inbox, the bot can have multiple Whatsapp numbers activated, and the agent queries will be directed to the bot's Inbox. Hence, all Whatsapp numbers are sourced to the same Inbox module, and agents will be assigned with live chats from any of the numbers.
</div>
</details>
    
    
<details>
<summary> Why is the agent's language not getting translated automatically to the customer's language even when the agent is replying in English?
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


<details>
<summary> When an inbox agent role is logged in, the user can view all the chats in the Missed Chats section and also in the Bot Messages section which are not assigned to him. Is this expected behavior? </summary>

Yes, this is expected behavior. Missed chats are not assigned to any particular agent, which is why all missed chats are visible to agents. This allows agents to reopen and assign the chats to themselves.
</details>

<details>
<summary> Is it possible for an inbox agent role to view only the chats that are assigned to him in Missed Chats and Bot Messages sections? Or is there a way to disable these sections for a particular user?
</summary>

If you need to disable the Missed Chats or Bot Messages sections for a particular user, please raise a ticket with customer context to request this configuration change.
</details>

<details>
<summary>When an inbox agent with the supervisor role is logged in, the user can view all the chats in the Resolved Chats section. Is this expected behavior?
</summary>

Yes, this is expected behavior. When someone is made an Inbox supervisor for particular group(s), they will see all the chats raised in those group(s).
</details>

<details>
<summary>Is it possible for an inbox agent with the supervisor role to view only the chats that are assigned to him and his team members within the group?</summary>

If a supervisor is seeing chats from groups to which they were not assigned, this is a bug. Please raise this issue in DevRev for further investigation.
</details>

<details>
<summary> Can internal notes on live chats and email tickets be downloaded/ is internal notes data available on any reports? </summary>
<div>
No. You cannot download internal notes, they are only available within the respective chat/ticket screen.   
</div>
</details>

<details>
<summary> 
What happens to the live chat requests from customers when the all the agents are offline? / How to handle incoming live chats when the agents are offline? </summary>
<div>
An inbox admin can configure what happens to the live chats when all the agents are offline on <a href= "https://docs.yellow.ai/docs/platform_concepts/inbox/inbox-settings/workflows/offline-chat" > offline handling settings </a>.

</div>
</details>



<details>
  <summary>Why can't I view recent activity on my contact card?</summary>
  <div>
    If you only see the View contact link in the UI, it is likely due to incorrect configuration of user360 variables. Ensure that you have set up flows to fetch the first name and either the mobile number or email values, storing them in user property variables. Make sure to use only these variables in the Raise Ticket node for proper functionality.
  </div>
</details>



<details>
<summary> What is the chat history retention policy? </summary>
  <div>
    Live chats and email tickets in the Inbox are retained for a maximum of 6 months. After this period, they will be archived. While the data will no longer be accessible on the platform (active store), it will still be available on the servers (cold store) until the contract's validity expires.
  </div>
</details>


#### **Sticky agents** 

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


#### **WhatsApp policy**   


<details>
<summary> What is the cost of sending WhatsApp templates? </summary>
<div>
 Whatsapp charges a per-message fee for all the templates sent outside the 24 hr session based on the number of messages & country you send to. Click <a href= "https://developers.facebook.com/docs/whatsapp/updates-to-pricing/"> here </a> to learn more.   
</div>
</details>


<details>
<summary> Why is my chatbox not visible even though I have sent the WA template? </summary>
<div>
Just sending out the template message will not reinitiate the 24 hr window. The end-user has to reply back in the conversation.    
</div>
</details>

<details>
<summary> Why can’t I attach my media to the template? </summary>
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
WhatsApp templates created with <a href="https://developers.facebook.com/docs/whatsapp/updates-to-pricing/">hsm</a>  object will not be displayed with the actual content inside Inbox. However templates created with <a href="https://developers.facebook.com/docs/whatsapp/updates-to-pricing/"> template </a> object will be displayed inside Inbox. If you are not seeing the actual template content, then the template you sent out is most likely created with hsm object. 
	
</div>
</details> 

#### **Instagram policy**

<details>
<summary> What is Instagram 7-day policy? </summary>
<div>
Instagram's 7-day policy for live chats refers to the limitation on replying to Direct Messages (DMs) after a certain period of inactivity. This policy aims to promote timely customer service and prevent brands or individuals from sending unsolicited messages or promotional content after a prolonged silence. <br/> <br/> Breakdown of the 7-day policy: <br/> - <b> Initial 24 hours </b> : You can freely respond to DMs without any restrictions, including sending promotional content or using automated bot replies. <br/> - <b> After 24 hours but within 7 days </b> : Your responses must be directly related to the topic of the conversation. Promotional content or automated bot replies are not allowed. <br/> - <b> After 7 days </b> : You can only send one of three types of responses, that is, request the user to restart the conversation to initiate a new 7-day window, provide a link to your Instagram profile or website for further information, or ask the user to contact you through another channel, such as email or phone.
</div>
</details>

#### **Knowledge base**

<details>
<summary> How can I integrate Google Analytics with knowledgebase?</summary>
<div>
We do not support a native integration for Google Analytics in v1 KB integrations. However you can integrate Google Analytics(GA) by connecting GA to a GTM account and then use Inbox KB's GTM Integration to avail the data.
</div>
</details>


<details>
<summary> How can I embed Intercom bot? </summary>
<div>
Use Chatbot integration to add the intercom bot source code.
</div>
</details>

#### **Mobile APP**

<details>
<summary> Where can I view missed or queued chats? </summary>
<div>
The archive tab in the mobile app is a collection of active, open, resolved, missed and queued chats. Use the filter option to view missed chats from this section.
</div>
</details>

<details>
<summary> Where can I check agent status? </summary>
<div>
On the overview tab there is an option to view agent and their current statuses.
</div>
</details>

