---
title: AI-agent Conversation settings
sidebar_label: AI-agent Conversation settings
tags: [conversation settings]
---

Conversation settings enable you to customize your AI-agent's conversational behavior. These settings can be applied to specific nodes or flows within your AI-agent, providing tailored configurations to meet your needs. 

This video demonstrates how to configure the conversation settings of a AI-agent:

<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Cl3i8VN-KFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

**Here's what you can do with AI-agent level settings:**

- Manage user identification for personalized interactions.
- Configure supported languages to accommodate diverse users.
- Provide suggestions to users based on their interactions.
- Assist with document searches for quick information retrieval.
- Display banners for important announcements or promotions.
- Set AI-agent objectives to guide interactions towards specific goals.

<img src="https://imgur.com/DkLY4i9.png" alt="Converstion settings" width="60%"/><br/>

Under the Conversation settings, you can access and modify these AI-agent level settings:

### User identification setting

The User identification flow in AI-agent conversations involves identifying the user engaging with the AI-agent. This is accomplished by prompting the user identifier flow for unidentified users even before starting the conversation, which may include an email address, phone number, or other unique information.

To know more about setting up User identification flow in detail, click [here](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/userid-flow) 

### Language settings

Add supported languages to your AI-agent to enable communication in multiple languages. This allows you to reach to a wider audience.

   <img src="https://i.imgur.com/g4WdfnA.png" alt="drawing" width="60%"/> 

### Suggestion setting when AI-agent does not understand user utterance   
   
AI-agent suggestions are automated prompts or recommendations provided by the AI-agent to assist users during a conversation. These suggestions are based on the context of the conversation and can include options for actions, responses, or next steps that the user can take. This helps the users guide through the conversation and facilitate smoother interactions with the AI-agent.

   <img src="https://i.imgur.com/DuwnrKd.png" alt="drawing" width="60%"/>

Option | Description 
-------|-------------
Enable suggestions | Turn this option on to activate user input suggestions.
Excluded flows | Specify flows where suggestions will not be applied.
Excluded categories | Select the categories where these suggestions will not apply.
Included categories | Set categories where these suggestions should apply.
Unsatisfactory button text | Customize the text to display the unsatisfactory button.<br/> <img src="https://i.imgur.com/RgwS3Ok.png" alt="drawing" width="60%"/>
Hide input | Enable this option to hide the user input box, preventing users from entering responses.<br/> <img src="https://i.imgur.com/xgPODar.png" alt="drawing" width="60%"/>
Message | Provide the message to display when the AI-agent does not understand the user's message.<br/> <img src="https://i.imgur.com/dmm73UD.png" alt="drawing" width="60%"/>

### Document search

The document search enables the AI-agent to search for answers from the website or the documents uploaded in the KB module to provide accurate and relevant responses to user queries. 

It is triggered when the AI-agent is not able to predict a relevant flow.

Learn more about [supported document types](https://docs.yellow.ai/docs/platform_concepts/studio/train/what-is-document-cognition#-2-upload-files-to-document-section).     

   <img src="https://i.imgur.com/TdVPAiA.png" alt="drawing" width="50%"/>

1. **Enable as autofall-back**: Activate this option to enable show fallback messages when the AI-agent doesn't understand user queries. Enter the fallback message in the **Model Fallback Message** field below.
  
   <img src="https://i.imgur.com/v1D5hUQ.png" alt="drawing" width="50%"/>

2. **Enable summarised results**: Activate this option to search and simplify the answer in a conversational manner.

   <img src="https://i.imgur.com/gRy9PX5.png" alt="drawing" width="40%"/>

3. **Enable links for summarized answer**: Enable this option to provide summarized results with supported links.

   <img src="https://i.imgur.com/n4JYAFK.png" alt="drawing" width="40%"/>

4. **Model bot response**: Customize your AI-agent's tone to align with your preferred response style.

| Tones               | Descriptions                                                  | Example                                                          |
|---------------------|---------------------------------------------------------------|------------------------------------------------------------------|
| Empathetic          | Responds in a way that acknowledges and reflects the user's emotions.              | <img src="https://i.imgur.com/J41xQmE.png" alt="drawing" width="70%"/>                   |
| Formal              | Uses a professional and formal tone in responses.          | <img src="https://i.imgur.com/fTfC4JQ.png" alt="drawing" width="70%"/>                |
| Short Answers       | Conveys information concisely with brief responses and minimal descriptions. | <img src="https://i.imgur.com/V7UUsvi.png" alt="drawing" width="70%"/>                   |
| Instructions based  | Provides responses in a clear instructional format.            | <img src="https://i.imgur.com/xn3jBdH.png" alt="drawing" width="70%"/>  |

### Callout banner

A callout banner allows you to add a banner to the AI-agent's conversation. It can be used to alert users about new products, services, special offers, and promotions. You can also dynamically load the callout banner in the AI-agent. For more information, click [here](https://docs.yellow.ai/docs/cookbooks/studio/dynamic-callout-banner).

 <img src="https://i.imgur.com/iXIlMVq.png" alt="drawing" width="30%"/><br/>

#### Add a callout banner

Using callout banner, you can create:

* [Text banner](#text-banner)
* [Image banner](#image-banner)

##### Text banner

To add a text banner, follow these steps:

1. Go to **Automation** > **Build** > **Conversation settings** > **Callout banner**.

   ![](https://imgur.com/mOCtPBZ.png)
  
2. Click **+ Add a callout** to create a new callout banner.

    <img src="https://imgur.com/MgQVHYp.png" alt="drawing" width="70%"/>
    
3. Define the banner settings:<br/>
   i. **Type of banner**: Choose Text as the type of banner.<br/>
   ii. **Text**: Enter the message you want to display in the banner's Text field.<br/>
   iii. **Replies**: In Replies, configure the response options for users. Click the button and modify its label as needed.
   
      <img src="https://imgur.com/Fnr9zPT.png" alt="drawing" width="60%"/>

##### Image banner

To add a image banner, follow these steps:

1. Click **+ Add a callout**.

   <img src="https://imgur.com/MgQVHYp.png" alt="drawing" width="60%"/>

2. In **Type of banner**, select the banner type as **Image**  

   <img src="https://imgur.com/iDQaYrS.png" alt="drawing" width="40%"/>

3. Upload the image to be displayed in the banner.

   <img src="https://imgur.com/u9iczMJ.png" alt="drawing" width="40%"/>
   
4. Enable the toggle button to add the link to the image.
  
    <img src="https://imgur.com/LJezT45.png" alt="drawing" width="50%"/>
    
5. To add the link choose one of the following link types:<br/>
   i. **Open URL**
      * **URL**: Enter the web address where you want the user to navigate when they click the link or image.
      * **Post back**: Specify the text that will be sent to the bot when the user clicks the link.
      <img src="https://imgur.com/zvpgSAV.png" alt="drawing" width="50%"/>

   ii. **Go to flow** 
      * **Go to flow**: Select the specific flow where you want to direct users.
      * **Analytics**: Enter a keyword to track button clicks. This will help you track how many users have clicked this button. You can view this status in **Insights > Data Explorer > Custom Tables > Analytics**.

      <img src="https://imgur.com/QnvfuW1.png" alt="drawing" width="50%"/>

**Add a redirection URL in callout banner button**

You can configure a callout banner with a button to redirect users to a specified webpage. This helps you to guide users to specific pages based on the provided URL.

To configure the callout banner, follow these steps:

1. Click **+ Add a callout** to create a new callout banner.

    <img src="https://imgur.com/MgQVHYp.png" alt="drawing" width="70%"/>
    
2. Define the banner settings:<br/>
   i. **Type of banner**: Choose either Text or Image as the type of banner.<br/>
   ii. **Text**: Enter the message you want to display in the banner's Text field.<br/>
   iii. **Replies**: Click the button and modify its label as needed.<br/>
   
      <img src="https://imgur.com/Fnr9zPT.png" alt="drawing" width="60%"/>
  
3. Enter the name of the button that you want to display in the callout banner. 

   <img src="https://imgur.com/WNlxCZD.png" alt="drawing" width="80%"/>   
        
4. Enable the **Advanced settings** to access the Link option.

    <img src="https://imgur.com/zQrcLaq.png" alt="drawing" width="80%"/>

5. In the URL field, enter the webpage address where users will be redirected when the button is clicked. Click **Update** to save the changes.

     <img src="https://imgur.com/dgyo5Sm.png" alt="drawing" width="70%"/>
     
6. To test the banner, click **Preview** and the below high-lighted button option.

    ![](https://imgur.com/HnH9RWa.png)
    
7. Once users click the button in the callout banner, they will be redirected to the webpage specified in Step 

   ![](https://imgur.com/LKJEKuI.png) 


**Setting to Close or Minimise the banner**

You can choose whether to allow users to either minimize the banner with a customizable text message or completely close and remove the banner from the chat widget. **Minimise on close** allows you to close the banner while displaying custom text on it. **Close** enables users to fully close the banner and remove it from the AI-agent.

1. Click **Settings** on top to define the banner's status once accessed. 

   <img src="https://i.imgur.com/5s9EvBR.png" alt="drawing" width="50%"/>

2. Choose your preference and click **Save**.

   <img src="https://i.imgur.com/8QXRABh.png" alt="drawing" width="40%"/>
    
    