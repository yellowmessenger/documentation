---
title: Message Nodes
sidebar_label: Messages
---

A Message node is a one-way communication used to share updates, instructions, or media content such as text, images, videos, or quick replies without expecting a response. You can use Message nodes to only display information and do not expect any input from the bot user. You can use variables and functions to show dynamic content. 

:::note
You cannot use Auto-complete feature in Message nodes as these are meant only for displaying information.
:::

The following are types of messaging nodes supported by the platform. Click on each link for details on features, limitations, and setup instructions:

* **Text**: Display simple messages or detailed information.
* **Image**: Share visual content such as product images.
* **Carousel**: Displays multiple items in a swipeable format for showcasing options or products.
* **Video**: Share engaging content through videos.
* **Files**: Send downloadable documents, brochures, or guides for users to access.
* **Quick replies**: Provide predefined response options for user convenience.
* **WhatsApp specific nodes**:
    * **WhatsApp list**: Display lists for easy selection on the WhatsApp channel.
    * **WhatsApp product message**: Showcase products with detailed descriptions for e-commerce purposes.

### Common features across message nodes

#### Randomization

Randomization allows AI-agents to display different variations of messages, such as greetings or questions, during interactions. This option makes conversations feel more natural and engaging. 

#### Add Randomization using multiple texts

To add Randomization using multiple texts, follow these steps:

1. Navigate to the desired node in the flow editor.

2. Click **Add multiple text** for randomizing the message output.

     <img src="https://i.imgur.com/hvMBhLV.png" alt="drawing" width="60%"/>

3. Enter multiple variations of the message. For example:
   * "Hello! How can I assist you today?"
   * "Hi there! What can I help you with?"
   * "Hey! Let me know how I can support you."

   <img src="https://i.imgur.com/5sTZr9X.png" alt="drawing" width="60%"/>

#### Delay

Delay option allows you to add a pause before displaying a node during a conversation.

To configure Delay, follow these steps:

1. In the node, under the Delay section, use the slider to set a delay of up to 5 seconds before the node is displayed to the user.

   <img src="https://i.imgur.com/AHY21Qq.png" alt="drawing" width="60%"/>

#### Fetch from

Fetch from field allows the AI-agent to dynamically retrieve and display data relevant to the conversation. This can fetch information from external sources or previously collected data within the flow.