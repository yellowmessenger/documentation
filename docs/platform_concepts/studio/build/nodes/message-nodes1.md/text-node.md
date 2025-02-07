---
title: Text node
sidebar_label: Text
---

Text node is used to display messages to users during a conversation. These messages can be static (unchanging) or dynamic (personalized based on user data or external sources).

:::note
This node is also available for voice bots.
:::

You should use the Text node when you need to:
* Display the static and dynamic values from the variable.
* Display static messages, such as greetings, instructions, feedback, or confirmations.
* Follow up with users after an action, like completing an order or submitting a form.
* Include clickable links for users to access additional details or resources.
* Confirm an action or provide contextual feedback.
* Conversational flow requires dynamic responses based on user inputs or external data.

**Use case**

* **Greeting and introduction**: Display a welcome message when users start interacting with your bot.
* **Provide instructions**: Explain how to use a feature or complete a process.
* **Dynamic replies**: Send personalized responses based on user data, such as names or order statuses.
* **Notifications**: Alert users about updates, confirmations, or next steps.

You can format the text in the node using the below command:

`*Welocme to web widget world*`<br/>
`1. This is a normal list`        
`- This is a bullet list`        
`~Why is this text cut?:~ `<br/>
`_This is italic_`<br/>
`Oh i'm in the :highlight: `

**How to add static Text message**

Static messages remain constant and are suitable for generic information. 

You can add a static text message by directly entering fixed text into the node. This is suitable for messages that do not change. For example:

"Thank you for your query. Our team will respond shortly."

To configure static Text message, follow these steps:

1. Add the Text node where you want to add the static text.

     <img  src="https://imgur.com/tt5ZSpg.png"  alt="drawing"  width="70%"/>
     
2. Enter the static text message in the **Bot says** field.
   
    <img  src="https://i.imgur.com/qrNbWMd.png"  alt="drawing"  width="70%"/>

**How to add dynamic Text message**

You can fetch the dynamic values from databases, APIs, or previous user inputs and add them into the Text node using Variables to personalize messages based on user input or external data.

For instance, to greet a user by name and reference their order, you can structure your message as follows:

"Hi `{{{variables.username}}}`, your order `{{{variables.order_id}}}` has been shipped!"

In this example:

{{{variables.username}}} retrieves the user's name.
{{{variables.order_id}}} fetches the user's order number.

To configure dynamic Text message, follow these steps:

1. Add the Text node where you need to display the message to the user.

     <img  src="https://imgur.com/tt5ZSpg.png"  alt="drawing"  width="70%"/>

2. In the **Fetch from** field, select the variable to fetch the dynamic data.

    <img  src="https://i.imgur.com/oo1HtbZ.png"  alt="drawing"  width="70%"/>
     
Refer to the following GIF to see how the Text node works:

   ![](https://imgur.com/KLDBSdj.gif)