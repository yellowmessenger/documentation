---
title: Message Nodes
sidebar_label: Messages
---

Message nodes are one-way communication nodes which can be used when the bot has to display information to the user without expecting or taking any response.

Given below is a flow created using message nodes to brief the users about their company.

![](https://i.imgur.com/B9apLcz.jpg)


You can set a delay in displaying each of these nodes. 


![](https://i.imgur.com/0eoZrke.png)


## Messages 

### Text

Display a simple text with this node.  


![](https://i.imgur.com/KwvAAwd.jpg)


### Image 

Display any image (less than 10MB) with this node.


![](https://i.imgur.com/NuHZKEb.jpg)


### Carousel 

Display information using a carousel card with this node.


![](https://i.imgur.com/2iS11MA.png)


### Video 

Display any MP4 video file with this node.
* Click the tools(channel option) symbol available below the node name.  
* Enable autoplay, show controls and downloadable options to improve the video viewing experience. 

![](https://i.imgur.com/zAjKAVU.png)


### File 

Display a file of the most common extension (JPG, JPEG, MP3, MP4, CSV, PDF, Doc, Docx, Txt, HTML, PPT, PPTX, etc.) with this node. 

### Quick Replies

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

### WhatsApp List



Configure lists displayed on the WhatsApp channel with this node. 

> This node does not expect any user reply, hence the fallback message need not be configured nor this node is expected to follow another node. It simply displays the list values. This node is used for interactive purpose only. 

Whatsapp API provides a better UI for businesses to send List items (within 24 hours window). 
To create a Whatsapp List:
* Select Whatsapp List under Prompt Nodes.
* Edit Body Message, Footer, Section Title and Button Title/Name and list.


![](https://i.imgur.com/vmDdimd.png)


**Limitations**

* Maximum of 10 Buttons can be added. Multiple buttons cannot be selected in one go and are not supported in notifications.
* Character limit of Body is 1024.
* Character limit of Footer is 60.
* Character limit of Button Text and Response is 24.
* Section Title and List Headers are optional.

