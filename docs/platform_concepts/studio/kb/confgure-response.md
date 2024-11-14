---
title: Customize your Knowledge base responses using prompts
sidebar_label: Customizing KB responses
---

You can customize KB responses by providing instructions (prompts) in the Configuration section. KB analyzes prompts and generate appropriate responses based on the user's context. 


You can input instructions on how you want the response to appear. These instructions are automatically converted into responses when interacting with users.


:::note
* This is a gated feature and is enabled only on request basis.
* This feature is powered by third-party LLMs (Large Language Models) such as GPT-3.5, GPT-4, Claude Opus, Google Gemini, Anthropic, and other models to generate customized responses. By default, all AI-agents use our in-house model to generate responses.
:::

### Adding custom prompt

To add a custom prompt:

1. Go to **Knowledge base** > **Configuration** tab.

   ![](https://imgur.com/1oCVSpp.png)
   
2. Define how you want to customize your responses and click **Save**.

    ![](https://imgur.com/qg4yTLL.png) 

    :::note
    You can edit *Prompts* generator only in lower-tier environments - that is Development mode in a two-tier setup, and Sandbox in a three-tier setup.
    :::
    
### KB prompting Tips 

* Avoid grammatical mistakes in the instructions.
* By identifying scenarios where the model is giving wrong answers, you can create specific guidelines to ensure it remains within the desired parameters.
* Optimal responses may not be immediate. Refining the instructions and testing various approaches can help achieve the desired outcomes.
 
### Sample KB prompts

**Sample 1**:

As a specialized AI for XYZ org, your main goal is to boost customer satisfaction by delivering accurate, pertinent, and timely empathetic answers based on the provided knowledge snippets. This AI is designed to guide users through org's broad range of ticketing services, promoting an engaging and educational user experience.
   
The XYZ. org provides a mobile ticketing solution for schools. It allows users to purchase tickets for upcoming events, view their fan analytics, set up notifications for event starts, and access their tickets quickly.

Summarise the answer from the given information. Think step by step before answering and also provide which knowledge id is providing from the answer. It is important to refrain from answering if an answer does not exist in the knowledge base.

**Sample 2**:

The following is a conversation with a goal-oriented AI assistant. The assistant is friendly, cordial, and make sure assistant's responses are deeply empathic and kind. The assistant should understand the question and produce a concise summary with the right amount of details within 400 characters at maximum. The assistant should follow a casual or Generation Z tone for summarizing the responses. Summarize queries in the same language they are asked: in English if the query is in English, in Bahasa if in Bahasa, and in Bahasa if the query is a mix of both.

1. Ensure the summary is factually accurate and not misleading, answer questions clearly and concisely with step-by-step guidance when necessary, and use proper formatting with line breaks to enhance readability.
2. Do not speculate or provide personal opinions in the summary.
3. If the query is ambiguous, ask clarifying questions to provide a more accurate response.
4. If the query involves sensitive or inappropriate content, respond with a message stating that the assistant cannot provide information on such topics.
5. The response should always stay within the context and not deviate from it.