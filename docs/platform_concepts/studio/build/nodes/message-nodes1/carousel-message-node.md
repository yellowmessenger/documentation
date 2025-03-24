---
title: Carousel node
sidebar_label: Carousel
---

Carousel node is used to display multiple items in a visual format, containing text, images, description, and buttons. It allows users to scroll through cards that showcase information like products, services, or destinations. Each card can have unique content and action buttons.

Unlike interactive carousel node, the buttons in this type of carousel are non-interactive and are used only for informational purposes, they do not trigger actions or capture responses.

The carousel node is used when you want to showcase multiple items in a visual format, like product catalogs or tourist destinations. For example, on a travel website, you can use the Carousel node to showcase various destinations, displaying images, and descriptions. You can scroll through these cards, but the buttons will not trigger any actions or capture data.

:::note
If you use localization (translation) for any message carousel and upload different images for each language in the same node, the images will display correctly based on the selected language. However, the text will default to the original language (example, English) instead of appearing in the localized language.
This issue occurs because the images are uploaded manually for each language, but the text is not localized within the node.
To resolve this issue, switch the flow's language based on the preferred one and manually add the text for each language.
:::

**Limitations**:

* The buttons in this carousel cannot trigger actions or store user responses.
*  Images must be under 10MB. The recommended dimensions for carousel images: Width - 248px and Height - 164.2px.
* This node is only for informational purpose, where the direct user interaction required.

**How to configure static carousel node**

You can create static carousel cards manually with fixed details and images.

**Example**: A carousel of top-selling products with pre-defined titles and prices.

1. Drag and drop the Carousel node into the flow editor at the desired point in the conversation flow.

     <img src="https://imgur.com/MaGDxWD.png" alt="drawing" width="80%"/>
    
2. Add an image less than 10 MB, then enter a title and description.

Refer to the following GIF to see, how the Carousel node works:

   ![](https://imgur.com/Gp8oyxm.gif)
   
   
**How to configure dynamic carousel node**   
   
Dynamic Carousel node allows you to fetch and display card data from an external source or API.

**Example:** 

Displaying a carousel of available hotel rooms based on user-selected dates. The bot retrieves real-time availability from an API and presents the results in a visually interactive format.

To display a Dynamic Carousel node, follow these steps:

1. Go to **Functions** and add the below code to fetch the data dynamically. To know more about how to create a Function, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/code#create-functions-in-ai-agent-builder).

   ![](https://i.imgur.com/piibW7F.png)

**A sample dynamic data**

```c
[
  {
    "title": "Item1",
    "description": "Description",
    "actions": [
      {
        "title": "Button #1",
        "buttonDefault": "text",
        "text": "Message1"
      },
      {
        "title": "Button #2",
        "buttonDefault": "triggerJourney",
        "analytics": "analytics",
        "triggerJourney": "test"
      },
      {
        "title": "Button #3",
        "buttonDefault": "url",
        "analytics": "analytics",
        "url": "https://www.sample-site.com",
        "postback": "post-back"
      },
      {
        "title": "Button #4",
        "buttonDefault": "phoneNumber",
        "analytics": "test-analytics",
        "phoneNumber": "9876543210"
      }
    ],
    "image": "https://cdn.abc.com/sample-img.jpeg",
    "text": "Description for item1"
  },
  {
    "title": "Title",
    "description": "Description",
    "actions": [
      {
        "title": "Button #1"
      },
      {
        "title": "Button #2"
      }
    ],
    "image": "",
    "video": "",
    "text": ""
  }
]
```

2. Add a Function node to the flow editor.

   <img  src="https://i.imgur.com/SkNFnp4.png"  alt="drawing"  width="50%"/>
 
3. Select the function name and add a variable to store the response.
 
   ![](https://i.imgur.com/oRHy05K.png)

4. Add a Carousel node and select the variable in **Fetch from** field, which you have selected in step 3 to display the dynamic data.

     <img  src="https://i.imgur.com/4x38dXv.png"  alt="drawing"  width="60%"/>