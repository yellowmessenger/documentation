---
title: Message Nodes
sidebar_label: Messages
---

Message nodes are one-way communication nodes which can be used when the bot has to display information to the user without expecting or taking any response.
You can randomize the node text and add a delay to each of the node. 

---

**Randomization**


The nodes which have an option to ask the users a question/ display a text are enabled with **Randomization** feature. On any such node, click **Add multiple text for randomizing**. Enter variations of text that you want your users to see. This feature will display different message to the user in a random order (instead of the same message every time) making the conversation more humanly. 
>  
> ![](https://i.imgur.com/k4kQYfg.png)


**Delay**

You can set a delay in displaying each of these nodes. 


![](https://i.imgur.com/0eoZrke.png)

---

Given below is a flow created using message nodes to brief the users about their company.

![](https://i.imgur.com/B9apLcz.jpg)



## 1. Text

Display a simple text with this node.  


![](https://i.imgur.com/KwvAAwd.jpg)


## 2. Image 

Display any image (less than 10MB) with this node.


![](https://i.imgur.com/NuHZKEb.jpg)


## 3. Carousel 

Display information using a carousel card with this node.


![](https://i.imgur.com/2iS11MA.png)


## 4. Video 

Display any MP4 video file with this node.
* Click the tools(channel option) symbol available below the node name.  
* Enable autoplay, show controls and downloadable options to improve the video viewing experience. 

![](https://i.imgur.com/zAjKAVU.png)


## 5. File 

Display a file of the most common extension (JPG, JPEG, MP3, MP4, CSV, PDF, Doc, Docx, Txt, HTML, PPT, PPTX, etc.) with this node. 

## 6. Quick Replies

Display a question along with quick reply buttons with this node.
Unlike the Quick Replies Prompt node, fallback message need not be configured to this nor this node is expected to follow another node.

![](https://i.imgur.com/swL8R0v.png)


> You can send files, images and videos either by uploading them in the node or by fetching the link to it from a variable.

Variable format: 

```
  [
   {
    "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRqBmDVlOF8jpQbmAcAglnp7Bxggt1JzZEw&usqp=CAU",
    "options":
     {
     "caption":"kohli"
     }
   }
  ]
```
Click **Fetch from** and add a dynamic value - if required:

```
{
  "title": [
    "Select an option",
    "Pick an option"
  ],
  "options": [
    {
      "text": "cold drink",
      "title": "Cold Drink",
      "advancedSettings": true,
      "aliases": [
        "coke",
        "soft drink"
      ],
      "url": "https://www.tasty-food.com",
      "postback": "post-back",
      "image": "https://cdn.abc.com/coke-img.jpeg",
      "textColor": "#4384f5",
      "backgroundColor": "#FFFF",
      "id": "quick_01d78e38b44e1915",
      "analytics": {
        "aevent": "test-analytics"
      }
    },
    {
      "text": "",
      "title": "Btn #2",
      "advancedSettings": false,
      "id": "quick_d9eda393404266d4"
    },
    {
      "text": "",
      "title": "Btn #3",
      "advancedSettings": false,
      "id": "quick_39563a54f6889f4d"
    }
  ]
}
```

## 7. WhatsApp List



Configure lists displayed on the WhatsApp channel with this node. 

> This node does not expect any user reply, hence the fallback message need not be configured nor this node is expected to follow another node. It simply displays the list values. This node is used for interactive purpose only. 

Whatsapp API provides a better UI for businesses to send List items (within 24 hours window). 
To create a Whatsapp List:
* Select Whatsapp List under Prompt Nodes.
* Edit Body Message, Footer, Section Title and Button Title/Name and list.


![](https://i.imgur.com/vmDdimd.png)

Click **Fetch from** and add a dynamic value - if required: 

```
{
  "title": "Please select your preferred slot for Appointment",
  "optionText": "Appointment Slots",
  "options": [
    {
      "section": "June 5, 2021",
      "options": [
        {
          "title": "9am-11am",
          "text": "5.9-5",
          "description": "General Medicine"
        },
        {
          "title": "12pm-2pm",
          "text": "5.12-2",
          "description": "Orthopedic"
        },
        {
          "title": "2pm-4pm",
          "text": "5.2-4",
          "description": "Physiotherapy"
        }
      ]
    },
    {
      "section": "June 6, 2021",
      "options": [
        {
          "title": "9am-11am",
          "text": "6.9-5",
          "description": "General Medicine"
        },
        {
          "title": "12pm-2pm",
          "text": "6.12-2",
          "description": "Orthopedic"
        },
        {
          "title": "2pm-4pm",
          "text": "6.2-4",
          "description": "Physiotherapy"
        }
      ]
    },
    {
      "section": "June 7, 2021",
      "options": [
        {
          "title": "9am-11am",
          "text": "7.9-5",
          "description": "General Medicine"
        },
        {
          "title": "12pm-2pm",
          "text": "7.12-2",
          "description": "Orthopedic"
        },
        {
          "title": "2pm-4pm",
          "text": "7.2-4",
          "description": "Physiotherapy"
        }
      ]
    }
  ],
  "footer": "Please follow Covid Guideline while consulting."
}
```


**Limitations**

* Maximum of 10 Buttons can be added. Multiple buttons cannot be selected in one go and are not supported in notifications.
* Character limit of Body is 1024.
* Character limit of Footer is 60.
* Character limit of Button Text and Response is 24.
* Section Title and List Headers are optional.



> Click the tools icon and configure the node, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/nodes/#3-configure-display) to learn more. 

---

## **CSS Changes**

To beautify the text you enter in the field -**bot says** you can add the following. 

```
1. Web (use HTML tags)

  - Bold: <strong> baggage </strong> 
  - Italics: <i> italics </i> 
  - Hyperlink: <a href="google.com"> Google </a> 

2. Whatsapp 

  - Bold: Message *- 
  - Italics: _ Mesage _ 
```