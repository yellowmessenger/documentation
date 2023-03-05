---
title:  Design conversations for voice bots  
sidebar_label : Design conversations for voice bots  
---

The **Design** module helps you design a bot without needing to learn all the platform aspects prior. You can design a conversation between the bot and the user using text inputs. Based on the input, flows are created dynamically on the Studio module.

Once the text you input is converted into flows, you can train, test, and preview the flow before publishing. You can design multiple flows.



In this article, you will learn how to use the conversation design to build **voice bots**. 



-----------


## 1. Create a new voice bot 

> If you are a new user, refer to [this](https://docs.yellow.ai/docs/platform_concepts/Getting%20Started/account-setup) article. 


1. [Log in](https://cloud.yellow.ai) to your account and click **+Create new bot**.

    ![](https://i.imgur.com/wAbVsH9.png)

2. Select **Create from scratch**. 

    ![](https://i.imgur.com/0LG3d7y.png)

3. Enter these details: 
    - **Subscription**: Select the **subscription** under which you want to create this bot.
    - **Bot type**: Choose **Voice bot**. 
    - **Avatar**: Choose/upload an avatar (your bots display photo).
    - **Industry**: Select from the dropdown. 
    - **Region**: Select from the dropdown.
    - Select **Add live chat support to your bot** if you want to add a customer support flow.

4. Click **Create bot**. 

    ![](https://i.imgur.com/u2UEI56.png)

5. From the module switcher, select **Design**. 

    <img src="https://i.imgur.com/AcKCNyw.png" alt="drawing" width="70%"/>

-------


## 2. Configure Bot persona and SSML  

While creating flows manually, for each of these nodes, you had to enter the text in Speech synthesis markup language(SSML) format and configure further using [Tools](https://docs.yellow.ai/docs/platform_concepts/studio/tools#25-voice) or [Node settings](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes#32-configure-node-for-a-voice-bot). 

With the conversation designer, you can design natural voice conversations by auto-generating SSML tags from voice effects such as emphasis, pronunciation, pause, etc.

> Global and Node-level settings are configured with the default values. You can skip these steps if you do not want to customize it. 

### 2.1 Bot persona settings

:::note
Bot persona settings (global settings) will only be applied to the conversations created after applying to the settings. The previous conversations are not updated with the new settings. 
:::

1. Click the **Settings** button on the top-right of the screen. Changes made in Bot persona settings will apply to all the nodes. 
    - **Language**: Select the language you want the bot to speak. 
    - **Voice**: Voices available are listed in the dropdown, select your preferred voice.  
    - **Pitch/Speed/Volume**: Set the cursor to your preferred values. 

2. Click **Save**. 

    ![](https://i.imgur.com/QCSgznC.png)


--------

### 2.2 Bot response settings

These are node-level settings. With this, voice input nodes are updated with **SSML** code(bot response) on **Studio**.  

On the dialogue box, double-click on the entered text (bot says). You will see the following configurations:

- **Emphasis**: Select a text from the entered sentence and emphasize(stress) that word (**low, medium, high**). If you select **Off**, emphasis applied by default will detain. 
<img src="https://i.imgur.com/pp9id0a.png" alt="drawing" width="70%"/>     

- **Pause**: You can add pauses (delays) between words/sentences. 
 <img src="https://i.imgur.com/RwtNLlj.png" alt="drawing" width="70%"/>    

- **Music**: You can add .mp3 or .wav music files, that can get played during the conversation.
<img src="https://i.imgur.com/AqLhpza.png" alt="drawing" width="70%"/>    

- **Interpret**: You can use it to interpret a word in a particular format. 
 <img src="https://i.imgur.com/IBRZqiG.png" alt="drawing" width="70%"/>    
     

     
| Value | Input |Output |
| -------- | -------- | ----- |
| Off     | -   | If you are unhappy with the bot's interpretation, you can turn it off.  |
|Spell out|EMI| E M I |
|Cardinal(for decimal numbers) |-0.345| Minus zero point three four five|
|Ordinal(integral numbers)|10 Jan| Tenth Jan|
|Number_di|9000080000| Nine zero zero zero zero eight zero zero zero zero |
|Date|14/02|Fourteenth feburary|
|Time|9:15 am| Nine fifteen A.M |
|Duration|5hrs| Five hours|
|Telephone|9000080000|9000-080-000|
|Currency |15 $| Fifteen dollars|
|Address|||
|Name|Mr.Aagam| Mister aagam|

### 2.3 Preview your settings

> This is the Text to speech conversion of SSML added to the nodes. 

Click **Preview** in the dialogue box and understand how the bot sounds after configuring it. 

<img src="https://i.imgur.com/LlclIW4.png" alt="drawing" width="80%"/>      

---------------------

## 3. Store and use variables 

You can store and use user's information during the conversation by storing it in a variable. 

:::note
There are two types of variables you can store this data in: 
- [User properties](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/user_properties): These are default variables avaiable on the platform. 
- [Custom variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#21-custom-variables): These are variables created specifically for your bot. 
:::

1. **Store response in** option is used for the user's side of the conversation (User says). You can store the input from the user in a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#31-create-a-variable-via-nodes) by selecting a variable next to **Store the responses**. You can choose an existing variable or click **+Add new variable**. Example: Store customers name in First name variable. 

![](https://i.imgur.com/evx9hB8.png)

2. **Use response** option is used on the bot's side of the conversation (Bot says). Bot can speak out the input stored in a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#31-create-a-variable-via-nodes) by selecting a variable next to **Use variable**. After you add a variable, it will get fetched in the bot say's text. Example: Speak customers name that is stored in First name variable. 

![](https://i.imgur.com/oSJrnef.png)

--------


## 4. Design conversations for voice bot (Demo) 



> - **Home** flow is the main flow from where the conversation starts(you can rename/delete/add it as fallback). This can be followed by other flows. 
> - All the messages are trained as text. You cannot add buttons or other chat-design options. 

**Demo**:

![](https://i.imgur.com/rqP9Cp7.gif)

- **Dialog box**: You can add a bot and user conversation here. The name of the dialogue box can be changed by clicking the pencil icon on top.   
- **Bot says**: Add the questions you want the bot to ask. Ex: Hey! What is your name? 
    > **Use response** option can be used to speak out any stored variable.
- **User says**: Add the questions you are expecting from the bot user. Example: My name is Karan. I want to enquire about my bank balance. 
    > **Store response in** option can be used to store user's input in a variable.
- **Fallback**: Message from the bot's side when the bot is unable to provide the solution/ understand the user's query. Example: I did not get your name, can you please repeat? 
- **Create flow**: Click **+ Create flow** to create a new flow. 

    <img src="https://i.imgur.com/GplCpZt.png" alt="drawing" width="100%"/>

- **Add components**: Click **+** and connect this dialogue to a new **flow**/**dialogue**/**condition**.

    ![](https://i.imgur.com/lORvCQ3.png)


:::info
Click [here](https://docs.yellow.ai/docs/cookbooks/voice-as-channel/build/convdesiVB) for a detailed guide on building a voice bot for a sample use-case using design. 
:::

--------


## 5. Preview voice bot (Receive a live call)

> This demo is accessible if your bot is connected with Interactive Voice Response (IVR). Click [here](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/Ivr) for more details. 


1. Click **Preview** at the top-right of your screen. 

     <img src="https://i.imgur.com/r1b7Mqb.png" alt="drawing" width="70%"/>    

2. Enter your phone number. Verify your OTP. 

    <img src="https://i.imgur.com/n0440Ru.png" alt="drawing" width="40%"/>
    
3. Click **Call**. You will receive a phone call to the entered number. You can have a conversation with the bot and experience its behavior. 




-----

## 6. Share designs 

Share designs with others within the platform to quickly close the feedback loop

<img src="https://i.imgur.com/rdyRDoh.png" alt="drawing" width="80%"/>




-------


## 7. Sync conversation flows to studio and deploy

With bi-directional auto-sync, the information on the **Design** module will be available as *flows* on **Studio** (and vice versa).

1. From the overview switcher, select **Studio > Flows**. 
2. If you want to add a welcome message or change the flow from which the bot conversation starts, click **Welcome message** on the conversation settings section and edit it. 

    ![](https://i.imgur.com/zv58neq.png)

2. You can click on the created flows to edit and test them. All the nodes in the flow would be accommodated with the SSLM input as configured.  

    ![](https://i.imgur.com/v0dgTFm.png)

4. Click **Publish changes** to [publish](https://docs.yellow.ai/docs/platform_concepts/studio/test-and-publish-bot/modes) the bot. Once approved, your voice bot will be live and ready to handle calls. 



