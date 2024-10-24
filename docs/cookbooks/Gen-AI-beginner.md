---
title: Gen-AI (Beginner level)
sidebar_label : Gen-AI (Beginner level)
---

Generative AI is an artificial intelligence system used to create content such as text, images, audio or code based on input or instructions (prompt) provided by users.

  ![](https://imgur.com/HhmgVug.png)

**Examples of Generative AI:**

* **ChatGPT**: A text-based generative AI model that can generate human-like text, answer questions, and write articles or stories based on user prompts.
* **DALL·E**: An AI model that generates images from textual descriptions, allowing users to create visuals by describing what they want to see.
* **MidJourney**: An AI tool that generates artistic images based on text input, producing creative and visually appealing results.

### What is a Model?

A model is a mathematical representation that is trained on data to recognize patterns and make predictions. In Generative AI, content is generated based on the model it has been trained on. 

   ![](https://imgur.com/rprQbNA.png)
  
#### How does the Models learn data

For example, imagine teaching a computer to recognize handwritten numbers like "1," "2," and "3." You show it each number and tell it what it is.

The computer starts to notice patterns, like how a "1" is a straight line and a "2" has a curve. With more examples, the computer gets better at recognizing numbers by learning from these patterns.

### Understanding terminologies of GenAI 

#### Neural network

A neural network is a basic building block of deep learning. It is a computational model inspired by the structure and functioning of biological neural networks.

For example, if you input the number 9 it is broken down into 784 parts (pixels), which the computer understands as bits and bytes. The model analyzes these pixels to understand and predict the output.

   <img src="https://imgur.com/0uopGNo.png" alt="drawing" width="80%"/>

#### Deep Learning

Deep learning uses neural networks with multiple layers to learn complex representations of data.

For example, a neural network trained to recognize the number "9" focuses on identifying that specific pattern, as mentioned in the above example. While a single neural network might be limited to recognizing just one number, deep learning combines multiple layers of neural networks. Each layer learns to identify different numbers, enabling the system to understand more complex patterns and recognize a broad range of numbers, from "1" to "100."

#### Tokens
   
A token is an individual entity a model can understand. It can be a word, character, part of a word, or even a whole phrase.

For example, the sentence "I don't want to work" can be broken down into tokens like [I, don, 't, want, to, work].   

#### Parameters (13B model , 70B model) 

The "13B" or "70B" refers to the number of adjustable parameters in the model. Parameters help the model learn the relationship between words, phrases in training data. More parameters mean the model can handle more complex patterns and process larger amount of data.

#### Context

Context is the information or text provided to a model to help it understand and respond to users. It is like giving the model clues about the topic. 

For example, if the context is "I love pizza" and the question is "What toppings do you recommend?", the model uses the context to provide relevant topping suggestions.

#### Transformers

Transformers are a type of technology used in language models to understand and generate text. Models like ChatGPT, LLaMA, and Bard are built using this technology.

#### Hallucinations

Hallucinations are when the model makes up information or provides incorrect information. 

For example, if user asks "Who invented the telephone?" and the model answers "Albert Einstein," that is a hallucination because the correct answer is Alexander Graham Bell.
    
#### Prompt

A prompt is the text or question you provide to a language model to start a conversation or get a response.

Example: "Tell me a story about the moon."

#### Pretrained models

Pretrained models are machine learning models that have been trained on large datasets to perform general language understanding tasks, such as text generation or question answering, before being fine-tuned for specific applications.

Example: Bert, GPT, Llama.

#### Fine Tuning

Fine-tuning is the process of taking a pretrained model and refining it with a smaller, domain-specific dataset to adapt it to a particular task or domain. This process improves the model's performance on specific tasks.

Example: The YellowG model, which is fine-tuned specifically for text summarization.

## LLM

LLM (Large Language Model) is a type of Generative AI focused on text-based data. It is trained on large amount of labeled data to predict the next word in a sequence.

Examples: Chat GPT, Bard, Komodo

### Multi-modal LLM

Advanced AI systems that handle and integrate various types of data, such as text, images, audio, video, and context-aware interactions. Input and output are of different modalities:
   i. **Multimodal inputs**: Generates multiple types of data, like text and images simultaneously.
   ii. **Multimodal outputs**: Generate various types of content, such as producing both text and images from a single input.
   
### How LLMs are trained?
   
Large Language Models (LLMs) are trained on vast datasets containing text from books, articles, websites, and so on to understand patterns, grammar, and context in language. During training, the model is fed input sequences and learns to predict the next word in the sequence.
   
**Sample training data**

* Johnny likes apples  
* Sally loves apples
* Johnny and Sally are friends
* Friends share their favorite fruits
* Apples and oranges are both fruits

**Example training sequence**:

 Input | Output
 ------|-------
Johnny | Likes
Johnny likes | apples
Johnny likes apples | EOS (End Of Sentence)

This process is repeated across large amounts of text data to allow the model to learn language patterns.

### How LLMs work?

LLMs predict the next word in a sentence by analyzing patterns and context from the input. The model processes the input step by step, generating an output word or phrase at each stage, based on its understanding of language.

**Example:**

**Input:** What do Sally and John share?<br/>
**Output**: Sally and John share apples.

**Examples of tasks LLMs can perform:**

* Writing
> Suggest three names for our analytics platform.
  Sure, here are three ideas:
  >* NextInsight
  >* QuantifyPro
  >* Analytics sphere
  
* Reading
> I love my new llama T-shirt! 
  The fabric is so soft.
  Complaint : No
  Department: Apparel
  
* Chating
>Bot: Welcome to Yellow.ai
User: I would like to learn about AI
Bot: sure, here are some of the resources
User: that's helpful. Thank you.

### Difference between Generative AI and NLP

 Generative AI | NLP (Intent) solution
 --------------|---------------------
Generates personalized and dynamic responsess | Uses predefined conversation paths
Handles diverse contexts | Ensures zero hallucinations (important in fields like healthcare)
Supports complex language understanding with multiple languages | Low cost

### Sample non-Gen AI conversation flow (Intent-based flow)

In an intent-based flow, the bot follows a predefined sequence of steps without understanding the full context or handling variations in user responses. 

For example, if a user asks a question while providing their name and email, the bot may not understand the context and will proceed to the next step in the flow.

To overcome these limitations, you can use Yellow.ai's GenAI features, as they offer better contextual understanding and flexibility.

**Objective**: Build a sample flow that collects user information such as Name and Email. It should display the collected information to the user and handle the FAQ-related queries.

#### Create Non-GenAI flow

To create a non-GenAI flow, follow these steps:

1. Create an intent "Collect user information" to initiate the flow when triggered.

     ![](https://imgur.com/RfVxNXQ.png)

2. Select the start trigger type (Intent) as the "Collect user information".

      ![](https://imgur.com/rXVToTF.png)

3. Build the Flow using Nodes to collect the following:
   i. Ask for name: "Can you please tell me your name?"
   ii. Ask for email: "What is your email address?"

   ![](https://imgur.com/uoW7TrC.png)

4. Add the FAQs to handle questions related to the user queries such as, "What is the privacy policy for sharing my data?", "How can I update my email information?".
   
    ![](https://imgur.com/XY83VLv.png)
    
5. Test the flow to ensure the bot can successfully respond to user inputs and complete the flow as intended.

   <img src="https://imgur.com/kNUvz6O.png" alt="drawing" width="40%"/>
   
### Challenges with intent based bots

* **Limited contextual understanding**: Intent-based bots struggle to understand contexts beyond predefined intents, leading to inaccurate or irrelevant responses.
**Example**: Can you tell me why you are collecting my details?.

* **Fixed responses and lack of flexibility**: Intent-based bots are confined to static templates, limiting their adaptability to diverse user inputs and scenarios.
**Example**: User provides an email address in a different format.

* **Difficulty in handling ambiguity**: Intent-based bots find it challenging to deal with ambiguous queries, often resulting in confusion or inaccurate responses.
**Example**: User provides both email and name in the same query

* **Scalability and maintenance issues**: Intent-based bots require frequent updates and maintenance to accommodate new intents and variations, leading to scalability and operational challenges.
**Example**: You want to add a new intent and modify the existing intent.

* **Linguistic complexity and multiple language support**: Intent-based bots struggle with complex linguistic structures and supporting multiple languages, hindering their effectiveness in diverse linguistic environments.
**Example**: Expanding the language capabilities of bot to non-English

* **Difficulty in addressing FAQs efficiently**: Intent-based models needs to be trained on all the knowledge sources manually and configure the responses with predefined static responses.
**Example**: Need to upgrade the bot with the company new policy document.   

## Yellow.ai GenAI features

1. **[Dynamic chat node](https://docs.yellow.ai/docs/platform_concepts/studio/dynamicchatnode)**: A smart conversational tool that enhances interactions by tailoring responses to user queries, creating a personalized and natural conversational experience.
2. **[Document Cognition - KB search](https://docs.yellow.ai/docs/platform_concepts/studio/kb/overview)**: A system that reads uploaded documents and provides short summaries to help you quickly understand the content.
4. **[Orchestrator LLM](https://docs.yellow.ai/docs/platform_concepts/studio/train/orchllm)**: A dynamic feature that manages conversations and keeps track of context, ensuring smooth and natural interactions.
5. **Agent Loopback** (WIP): A feature that allows the bot to learn from interactions with live agents, enabling it to incorporate new conversational flows and improve its knowledge base through real-world exchanges.

## Generative AI use cases

   ![](https://imgur.com/E1KqZPC.png)
   
Following are the some of the use cases of Generative AI:

1. **Text**

     i. **Note taking**: Automatically summarizes key   points from meetings.<br/>
     ii. **General writing**: Generates articles, blogs, or reports based on prompts.<br/>
     iii. **Support** (Chat/Mail): Responds to customer queries through chat or email.<br/>
     iv. **Sales** (Email): Generates personalized sales emails to engage potential clients.<br/>
     v. **Marketing** (Content): Creates marketing content for social media posts.

2. **Code**

     i. **Code generation**: Automatically writes code based on user input or requirements. <br/>
     ii. **Code documentation**: Creates documentation for code to explain its functionality and usage. <br/>
     iii. **Text to SQL**: Translates natural language queries into SQL code for database interactions. <br/>
     iv. **Web app builders**: Assists in building web applications by generating code and components.
   
3. **Image**

     i. **Image generation**: Creates images from text descriptions or prompts.<br/>
     ii. **Consumer/Social**: Generates visuals for social media posts and consumer-facing content.<br/>
     iii. **Media/Advertising**: Generates marketing visuals and ad creatives for campaigns.<br/>
     iv. **Design**: Assists in designing graphics, logos, and other visual elements.
     
4. **Speech**

    i. **Video synthesis**: Creates videos based on audio or text inputs.
    
5. **Video**

     i. **Video editing**: Automates the editing process by adding effects, transitions.<br/>
     ii. **Video generation**: Creates videos from text prompts or other inputs.
   
6. **3D**

   i. **3D models**: Generates three-dimensional models from sketches or descriptions.<br/>
   ii. **3D scenes**: Creates complete 3D environments and scenes for use in games, simulations, or VR
   
## Challenge/Limitations of GenAI

1. **Knowledge Freeze**

  **Challenge**: Large Language Models (LLMs) are trained on a fixed dataset, meaning their knowledge becomes frozen at the time of training and may not reflect real-time information or developments. 
**Example**: If an LLM was trained in 2020 and a user asks about a recent news event in 2023, the model may lack accurate information on the topic.

   <img src="https://imgur.com/URj719s.png" alt="drawing" width="3%"/> Who has won the premier league 2024?<br/>
    <img src="https://imgur.com/URj719s.png" alt="drawing" width="3%"/> What is the temperature today in mumbai?<br/>
    <img src="https://i.imgur.com/jjHxPBG.png" alt="drawing" width="3%"/> Who is the prime minister of india in 2015?

2. **Input (Output) length limitation**

    **Challenge**: LLMs have constraints on the length of input text they can process and the length of output they can generate, which can limit the complexity and depth of conversations. <br/>
    **Example**: When summarizing a lengthy document, the model may truncate important details due to length limitations, resulting in incomplete or inaccurate summaries.
    
    Input | Output
    ------|-------
    The stock market fluctuated significantly due to unexpected economic news and changes in interest rates.  | The Stock market fluctuated due to news.
    
3. **Hallucinations**

   **Challenge**: LLMs may generate responses that are based on real information and "make things up" based on patterns in their training data, which can lead to misinformation.<br/>
   **Example**: When asked about historical events, the model might invent details or events that never happened, resulting in inaccurate responses.
   
    Input | Output
    ------|-------
    Describe a significant event in the life of Marie Curie | Marie Curie discovered the theory of relativity in 1912, revolutionizing physics

4. **Bias and toxicity**

    **Challenge**: LLMs can pick up biases from the training data, leading them to generate harmful or offensive content that continues societal biases and potentially causes harm.<br/>
   **Example**: If the training data includes gender biases, the model might respond with gender stereotypes, continuing societal prejudices. Similarly, if trained on toxic content, it could produce offensive or harmful responses.
    
    Input | Output
    ------|-------
    What are common career paths for women? | Women are usually teachers or nurses.
    
5. **Structured data**

    **Challenge**: ChatGPT Generative AI faces difficulties with structured data as it focuses on designed text patterns, leading to possible misinterpretation of context, imprecise outputs, and limited training on structured formats.
  
   Country | Population(mil) | Area (Sqkm)
   --------|-----------------|----------
   Japan | 126.5 | 377,975
   India | 1254 | 8,515,767
  
    <img src="https://imgur.com/URj719s.png" alt="drawing" width="3%"/> The population of India is 896 million people<br/>
    <img src="https://i.imgur.com/jjHxPBG.png" alt="drawing" width="3%"/> The area of japan is 377,975 sq km




    






    







    


  

  












  