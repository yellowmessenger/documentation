---
title: Carousel node
sidebar_label: Carousel
---

Carousel node is used to display a series of interactive cards with images, titles, descriptions, and buttons. It helps to display the multiple options or the information in a visually appealing and organized format for showcasing products, services, or other interactive content.

Carousel node is used to showcase products or services with details like images, titles, and descriptions to guide users with actionable buttons for navigation or performing specific actions. For example, on a travel website, a carousel node can be used to showcase destinations with images and descriptions. Users can scroll through the cards and use buttons to perform actions like selecting travel dates or exploring package details.

**Limitations** 

* **Image size restrictions**: Images must be under 10MB and the recommended dimensions: Width 248px, Height 164.2px.
* **WhatsApp limitations**:
  * Hyperlinking is not supported in carousel cards.
  * A maximum of 3 clickable buttons is allowed.
* Carousels without buttons will function as messages instead of interactive prompts.

**Configure Carousel node**

To configure Carousel node, follow these steps:

1. Drag and drop the carousel node in the flow editor.

    ![](https://i.imgur.com/gOfNwxS.png)
    
2. Add an image less than 10 MB, then enter a title and description.

3. Click the default **Button #1** option to add a button.
 
    ![](https://i.imgur.com/i2JXa14.png)
    
4. Enter the following details:
   * **Button name**: Enter a name for the button.
   * **Select button type**: select the button type from the available options:
     * Text message: Sends a text response.
     * Go to flow: Navigates to another flow.
     * Open URL: Opens a specified web link.
     * Send Phone number: Captures and sends the user's phone number.
   * **Text message**: Enter the text message for the button.
   * **Analytics**: Enter a keyword to track button clicks. This will help you track how many users have clicked this button. You can view this status in **Insights > Data Explorer > Custom Tables > Analytics**.

    ![](https://i.imgur.com/jlhO88Y.png)

5. Click **Save**.

6. Connect the **Success** and **Fallback** cases of the node to other nodes in the flow to ensure the conversation continues smoothly

**Carousel settings**

You can use carousel settings to customize the carousel cards as per your use case.

1. Click the **settings** icon.

   <img src="https://i.imgur.com/3TyQJnJ.png" alt="drawing" width="60%"/>


2. Enable or disable the following toggles and click **Save**.

   <img src="https://i.imgur.com/Waw2xak.png" alt="drawing" width="80%"/>

| Feature                   | Description                                                                                                        |
|---------------------------|--------------------------------------------------------------------------------------------------------------------|
| Hide Input                | Hides the input area for the user in the AI-agent to prevent the user input.                                          |
| Hide Home Button          | Hides the home button from the user interface.                                                                     |
| Enable Default Feedback  | Displays like and dislike emojis next to each card for user feedback.                                               |
| Disable Action after Click| Disables the carousel list after a button is clicked.                                                        |
| Card Type                 | Select how carousel options should be displayed based on the intended use case. For exmple, selecting **Transaction Status** displays the carousel as a transaction status to the user. |

**Configure dynamic carousel options**

To configure the dynamic carousel options, follow these steps:

1. Go to the Carousel node and click the highlighted icon to copy the sample variable.

      ![](https://i.imgur.com/2BzsqJn.png)
      
Sample Carousel object:

```
[
  {
    "title": "Item1",
    "text": "Description",
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

The actions above describe the card button. You can add multiple actions to a single card in a carousel.

You can add a URL type action, for example the sample format:

```
    {
        "title": "Explore more",
        "buttonDefault": "url",
        "url": "https://sampleurl.com",
    }                
```
      
2. Go to the **Functions** section and paste the sample variable into the **Resolve** section.
     
   ![](https://i.imgur.com/UhkPHIa.png)
     
3. In the flow builder section, add a **Function** node and select the function name you created in the previous step.
      ![](https://i.imgur.com/gN5iRxG.png)

4. Create a variable of type object and select it to store the function’s response.
    
5. Add a promot Carousel node and select the variable created in the previous step

    <img  src="https://i.imgur.com/w96dgP6.png"  alt="drawing"  width="40%"/>
    
6. Preview the flow to test and view the dynamic Carousel node.

   <img  src="https://i.imgur.com/t78xhFv.png"  alt="drawing"  width="40%"/>
   
Refer to the following GIF to see how the carousel node works:

   ![](https://imgur.com/gJH72Hl.gif)
