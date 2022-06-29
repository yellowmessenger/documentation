# Whatsapp Templates

A whatsapp message template can be used to send out campaign messages over and over again. You can create your own whatsapp template on our platform and get it approved from Meta. Once the approval process is done, you can use these templates to send out campaigns to your customers. 

It is a three step process from creating a template to finally using it in a campaign. We will deep dive into these 3 steps below.

1. Creating a whatsapp template & sending for approval.
2. Avoiding template rejections.
3. Scheduling the campaign to a user segment at a desired time.


First we will learn how to create a whatsapp template.

### 1. Creating a whatsapp template & sending for approval

1. From [yellow.ai](https://cloud.yellow.ai/bot/Bot_ID/overview), select Engage
![](https://i.imgur.com/lEMyqEq.png)


2. Click on ‘Templates’ from the left panel and select Create new template
![](https://i.imgur.com/wNTLvZc.png)


3. Choose Whatsapp as a channel.

![](https://i.imgur.com/rhprRtz.png)

4. The whatsapp template screen will pop up.
![](https://i.imgur.com/cbxvaHy.png)


#### Template name
This would only be used for your reference and won’t be seen by the client.

#### Category
Whatsapp allows us to choose from 3 categories- 
*  Transactional
*  Marketing
*  One-time passwords

#### Select language
Whatsapp allows users to create templates in multiple languages, according to their own requirements.

#### Header
If you want to include media or documents in your template messages, then Header Section will be of high importance. Whatsapp has certain guidelines for that too.
![](https://i.imgur.com/PvvseSj.png)

The Header is completely optional and can include the following-
* Image 
* Video
* Document
* Text

All of these types can be included, However whatsapp only permits 1 type per template.
If you are choosing text, then the limit is 60 words with 1 variable allowed.

#### Body

Body is the most critical part of your template and is thoroughly checked by the whatsapp team.
![](https://i.imgur.com/7Jt09JA.png)

Here you add the main content of your template and also the variables( if required).
The upper limit is 1024 words, which can include text & variables.

##### Variables 
Variables allow you to personalize your template content for the user. 
Variables can be placed anywhere but they follow a certain way for writing it.

You can write variables/placeholders by adding two curly brackets before and after the name.
![](https://i.imgur.com/2DX9Uiu.png)

By doing so you define a variable user, which can contain unique names of the user you want to send out campaigns to.

You can see in the preview tab below, the variable user we just created is highlighted in blue for your own convenience.
![](https://i.imgur.com/jRhm0jE.png)

#### Footer

The footer section is the last section of your whatsapp message template content and can have a maximum capacity of 60 words.
![](https://i.imgur.com/0d6Ejs4.png)


It can be used to mention something at the end of your message.

#### Buttons Section

Whatsapp provides the service of adding a call to action or quick reply button to your template. You can add them in this section.


* Call to action button
* Quick reply button

##### Call to Action
There can be a maximum of two buttons while choosing call to action. You can either choose between Visit Website or Call Phone.
![](https://i.imgur.com/OpV6j9P.png)
When choosing either of these, the button text can have a maximum of 20 words. You can choose it to be static or dynamic.

##### Quick Reply

You can add a maximum of 3 quick reply buttons, The button text can have a maximum of 20 words.

![](https://i.imgur.com/lKAIipS.png)

5. Once Done with the above fields, take a final preview and click on save and use template.

![](https://i.imgur.com/mRFh4b7.png)



### 2.  Avoiding template rejections

Once you have created your template you need to get it approved by facebook before you can use them in a campaign.

You can see the status of your template by going to **Engage** -> **Templates**



![](https://i.imgur.com/I2eSkb7.png)

Your template can either be approved, rejected or pending.

#### Reasons for rejections

You can refer to this [Link](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/) for detailed reasons for rejections. I will be posting some major reasons here - 
* Spelling or grammatical errors.
* Variable parameters are missing or have mismatched curly braces. The correct format is {{1}}.
* Variable parameters are not defined.
* Variable parameters are not sequential. For example, {{1}}, {{2}}, {{4}}, {{5}} are defined but {{3}} does not exist.
* Language defined does not match content. For example, Spanish was select but the content is English or the content is a mixture of languages containing both Spanish and English.
* The URL domain in your links does not belong to your business.

#### Some examples of approved & rejected templates.

1. The template on the **left got rejected** because it placed a link inside the body instead of using call to action. The one on the **right got approved** after removing the link.

![](https://i.imgur.com/mBJxZ7t.png)


2. The template on the **left got rejected** because user didn't pass any parameter inside curly braces. The one on the **right got approved** after passing a parameter inside the bracket.
![](https://i.imgur.com/OpceI9g.png)


### 3.  Scheduling the campaign to a user segment at the desired time.

You can refer to this [Doc](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/whatsapp-campaign) for the same.