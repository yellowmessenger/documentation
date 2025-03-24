---
title: WhatsApp List node
sidebar_label: WhatsApp List 
---

:::note
 This node does not expect any user reply, hence the fallback message need not be configured nor this node is expected to follow another node. It simply displays the list values. This node is used for interactive purposes only. 
:::

This node lets you configure the lists displayed on the WhatsApp channel. WhatsApp API provides a better UI for businesses to send List items (within a 24 hours window).

For example, a retail business can utilize this node to configure lists for WhatsApp users, showcasing new product arrivals, promotions, and featured items, leveraging WhatsApp's enhanced UI for effective engagement within the 24-hour window.

To create a WhatsApp List:

1.  Select **WhatsApp List** under **Prompt Nodes**.
2.  Populate the fields **Message Body**, **Title** and **Row**.
3.  To provide row details, click a row and populate the fields **Title**, **Value** and **Description**.


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



:::note
 Click the tools icon and configure the node. For more details, see [Nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes. 
:::

---

**Configure text displayed on the AI-agent**

To beautify the text you enter in the field -**bot says** you can add the following. 

```
1. Web (use HTML tags)

  - Bold: <strong> baggage </strong> 
  - Italics: <i> italics </i> 
  - Hyperlink: <a href="google.com"> Google </a> 

2. Whatsapp 

  - Bold: Message *- 
  - Italics: _ Message _ 
```