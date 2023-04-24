---
title: Message Nodes
sidebar_label: Messages
---

Message nodes are one-way communication nodes which can be used when the bot has to display information to the user without expecting or taking any response.
You can **randomize** the node text and add a **delay** to each node.  

---

## 1. Common Features in all the message nodes

**Randomization**

Randomization is a feature available in nodes that allows chatbots show different variation of greeting messages/ questions to users, making the conversation feel more natural and human-like.

1. To add multiple texts, click **Add multiple text for randomizing** on the node. 
2. Enter variations of the text that you want your users to see. 


![](https://i.imgur.com/Y2O5tcA.png)


**Delay**

You can set a delay in displaying each of these nodes. 

**Fetch from**

A Fetch from field will be provided in most of the fields to render the dynamic data of that respective node.

---

Given below is a flow created using message nodes to brief the users **about a coffee company**.

![](https://i.imgur.com/N8iN11b.jpg)

:::note
Message nodes are used only for interactive purpose, you cannot do anything else apart from displaying text/video/image etc. (along with [variables](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#hed-1)) You cannot use auto complete and other features from [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes#3-make-prompt-smarter) and you cannot store the user responses because these nodes are not designed to fetch user responses.
:::

---
Following are the different types of message nodes: 

## 2. Text

> This node is available for voice bots. 


Display a simple text with this node.  
> This node can be used to follow up with most of the [prompt](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/prompt-nodes) nodes. 

![](https://i.imgur.com/KwvAAwd.jpg)

----

## 3. Image 

Display any image (less than 10MB) with this node.


![](https://i.imgur.com/NuHZKEb.jpg)

**Dynamice format**

```
const imageVariable = [{
  options: {  
    caption: {  
      type: 'text',
      value: 'image caption here' 
    },
  },
  url: 'image_url_here'
}]
```

---

## 4. Carousel 

Display information using a carousel card with this node.
> These Carousel buttons do not perform any further action, nor the response can be stored in a variable. 

![](https://i.imgur.com/2iS11MA.png)

To disable the carousel list after a button has been clicked, 

Go to the Carousel node and click the **settings** icon.

![](https://i.imgur.com/XnzkjGq.png)

Enable **Disable action after click** and click **Save**.

![](https://i.imgur.com/0jQjuQp.png)

---

## 5. Video 

Display any MP4 video file with this node.
* Click the tools(channel option) symbol available below the node name.  
* Enable autoplay, show controls and downloadable options to improve the video viewing experience. 

![](https://i.imgur.com/qxdhtox.jpg)

**Dynamic format**

```
const videoVar = {
  "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "caption": { 
    "type": "text",
    "value": "video caption"
  }
}
```
or
```
const videoVar = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
```
---

## 6. File 

Display a file of the most common extension (JPG, JPEG, MP3, MP4, CSV, PDF, Doc, Docx, Txt, HTML, PPT, PPTX, etc.) with this node. 

![](https://i.imgur.com/jmqJpC8.jpg)

**Dynamic format**

```
{
	"file": {
		"name": "Product_Manual.pdf",
		"url": "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf",
		"urlEncoded": true/false
	}
}

```

---

## 7. Quick Replies

Display a question along with quick reply buttons with this node.

> Unlike the Quick Replies Prompt node, a fallback message need not be configured to this nor this node is expected to follow another node.

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
---

## 8. WhatsApp List

:::note
 This node does not expect any user reply, hence the fallback message need not be configured nor this node is expected to follow another node. It simply displays the list values. This node is used for interactive purposes only. 
:::

This node lets you configure the lists displayed on the WhatsApp channel. WhatsApp API provides a better UI for businesses to send List items (within a 24 hours window).

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

**Configure text displayed on the bot**

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

## 9. WhatsApp product message

This section helps you create a WhatsApp product messaging journey with a sample use case.

![](https://i.imgur.com/cIVo56o.jpg)



**Prerequisites** 

The following are the prerequisites to create a catalog flow:

1. Fill the Compliance information on the [Whatsapp Channel configuration page](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration#1-whatsapp-configuration) (Not required for WABA hosted on Cloud API).
2. [Fill the Catalog with the required details](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration#21-commerce-manager-catalog).
3. [Connect the catalog to the WABA](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration#22-link-catalog-to-a-waba).
4. [Add the products](https://docs.yellow.ai/docs/platform_concepts/studio/database#-3-import-data-into-table) from Catalog to your yellow bot's database to use them while sending SPM/MPM.


To create a catalog journey, follow these steps - 

1. Use the same CSV used on the Catalog Manager to fill the Bot DB. You can create a DB Table with the same headers as the Data Feed Sheet and use it to upload all the products on the DB

:::note 
There is one limitation on Cloud DB Table creation which doesn’t lets you to create a table column name with the header as ID due to the min character required for a header. You have to keep a copy of the original Feed Sheet with the header as IDS and use it to upload to DB.
:::

Here is the screenshot of a sample CSV file.

![](https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfktJE4vn1LWBNwk843DQAoyX1b6zG3iRFcoKmicwyKhFt1ekgEaMrkaTWAXFfALWGfdaVc3RHujJEMAZswM7v231h1CtXDz5og5MwALtz2PEug4xqgEXABuDQBkFdghct2jVP2ZoMuCcoS3e5ZWefUqfTsG/Image.jpg)

It appears in the Database as shown here.
![](https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkf7c28AhauJGr4SMiysKKMeabHngvRHjiass3eBGBTccSx3Z1jcAjG1RyZCEjZbMfwp6wg9EheTLkn6tAzm2Y8Gf2NwmMZg9vHk7TS6WNbSz9i9GUcyhf6poQsK9DmRi6RLnJJVEH6k6HaGkz5BnFhA3Vo/Image.jpg)

2. Once the DB is ready you can query products based on the Category/Title. Using the Variable node, you can dynamically fetch the product IDS and pass them to the SPM/MPM nodes to send message to users.

Here is a sample journey configuration screenshots - 

![](https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfm1eDf9ABao1h8fnSDmPoasJjBnDejx5GjqJrM8sHMfnxSNzDFVG4uttJkpW99cJHSCQgQ1aWvEbeXvjEoPNWK2Xk7kH1kYptDe2yybNYLdf4m4jKCsU3WqzdaB7P3ph6KyZKMRJegM1mNebLZN3ZxB5BKZ/Image.jpg)

![](https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfmBxak347sZVdEcGpJQnWzAxDpN5LtpkBsMJrUqJBVCCcYCk7LNm1Nc9Vw4yG2CjwqTf4jv24mB5iZhW6UEG8T6um6nmGYPdmB75qELen8x4R8DqZ9y5brSDWSMqaYAmywc7xPbDCyS5hFhWqWTpdVTWh3V/Image.jpg)

![](https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkovdq7cZdAVmCphzgXMuDtFuv2oey5d3esZ3v5fW1xHJsbm4hM3cdyzb3Mre2ewALHBXfhwAsFPjvK5ECnVwVJBrFF5sCCFjdsFjwfT9p3FmxMGCEic8yjsT8EkqnN1AG7dEjie1at7td9f5o6qr4Qi7H3/Image.jpg)

![](https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkhmSHKziMNo7CJeHaQUnZWW4SU7ceQute1dTJDpTX6rPHgf2T84B3aZorh2J1XgfWcBKbVP5i1e98ghw39f2GVdb2jdijYUnCQrJsRe1RUkYFQwwUcLrsZdYYFMfYJvcwqAN2NwnVUPJADBHaZHFQzubHm/Image.jpg)

3. In the above step we have seen how a product can be fetch based on deifferent condition and can be used as an SPM. Now we will go through the step of how we can handle the Cart events which comes to the bot once the user decides to purchase the product.

**Purchase flow of an end-user**:

1. User receives the SPM on WhatsApp
2. User views the products and decides to purchase it
3. User clicks on Add to Cart button and selects the quantity to purchase
4. The Product gets added with the quantity selected by the user
5. User send the cart to the Business

:::note
Incase of invalid or rejected ProductID or ContentID passed on the node the message/product will not be sent to the user.
:::

Once the user sends the cart, the products from the users Cart will be removed and will be sent to the Business as an events on the Bot. to recieve the Cart Event its required to enable it from the Event Hub

![](https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkxJeooqj886spjGBpqA68UNcEvVx5FXGCYb2wp7dxtbG9m3Dgpgmzy9GudbTXK8uA1JXm16jKTDE6jaix5pBZftNZ3Pvh3oPhC9HkFnpLSsSHJmnvv581GuMAfUzTcmdLWpQjfros4DqqoDrGk3rRdq9qP/Image.jpg)

This event will contain the below Data in the backend which can be used for further information required on the bot to be processed.

```
{
  "type": "event",
  "event": {
    "code": "whatsapp-cart",
    "data": {
      "order": {
        "catalog_id": "619431863167996",
        "product_items": [
          {
            "currency": "INR",
            "item_price": 55,
            "product_retailer_id": "YM012",
            "quantity": 3
          }
        ],
        "text": "I want to buy this"
      }
    }
  }
}
```

You can handle this event using a journey to carry out the next steps of the buying journey for the user as shown below.

![](https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfmMZnxd9TZ5Uy82euZXsv5KEXjambLofoHEkEdFhStUQzSWirJaXLdDZ3xKuHX8cBDhN2aECxLzPrrLxVX1PoBNpBnLutzYt5vYXGsXdbaUJN37sdWjiqpbHcdbvtpjgXvG1vYPVyrhZCaDDoUDwdJPFLHh/Image.jpg)

![](https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkbaaHAPRWZDbniK88mvqZhcRk823WjzNi31VjvC39PTK9xFqjbPAviWDLwWTe5hdtgUbQS2M5FtGX9z1cS4x3teZDpRd1cXEHttwEKjRy55BZJT6uc7YRMb7ym55BZPzZtQeFedfeLayEA2AumEHEcGDgz/Image.jpg)

![](https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfm7mos43J98Ex4czeVTuUQXZozjan4vAZQkybF5MpDPguAnsAPZ7RT23SzEpCHGMS4RR9LUHVFoFrwq2d3CPn7qoi4CwDe8GHCntRtDwEVtWWR3pm9K33Shi4VSATJiBwjF3v3DcGNdpF6tArZ8brbcvrmQ/Image.jpg)

![](https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkztavgtCYywBACEY5HRyKAJDRzybPJj3AFqcQNMZJUVaUPYDxtv1rQsyj3LMRuVs5qaPk53bp6SE5GcSw9rAWQMwb38Wd6NzjSD2rv4TfKUoQoDtbCgGLrAYsZaKpHQ2awXHNqK1jMSEQG278bd3eBZEkD/Image.jpg)

![](https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfm4KQDAm34rkXbz1fKKaw2Y1gr3LdtKX6gGCjtTHSASgFfweBsEeVwjsSNGF5p6SR2AV9Wqw3qQPUo5wxf2A2Y7Ac4tEkqZVmj73TSoCRGDKi4M9evAGsxmBvpMtJSLspF73ib9npa8K6SVQsfqoqMhgJfw/Image.jpg)

![](https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfmHHPievXu1X8Qk2iP8HegpWun5GMj8ZqpYKLsifTBLzzqYQycjFEkHjK6uLS6KwLnHFgD8bAUmAeXAvkTKAQCKZrXKFs4kyYGy6JNKj4BXxrjCJ7M7KytztWQBcim6aHkgPSkc8fC1FkvuNV4B5CQ9aw3y/Image.jpg)

4. The Message Business option also allows for another event type to be configured. This event can be sent back to the bot as a normal message, or it can be fetched as an event to provide context about the product for which the message was sent.

![](https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfmNJL9wfkW5hC3z4pk1oFhjAUfdeFzEtZGD3g6dxz9BRwu5iqfX594rr9uTpyguRNHGQ7iKid5FKJMFeJ6nANvncEaSMezx1XPyQhZ2dpLvpk7CCVX4QiCnSh9ZVkYYEVTcsTwrnTuKfr32Hpb6chFpvmcF/Image.jpg)

![](https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkcfYd6DU4oUGwYZvCQSpDgiGJCZKoa3NmxoXdnhxu35pY9fnaACj453GPhhUu1A2p3fTkJ3NzKqAPFkhGBgvvQbw5BimA4fNfAbo7eHZ3DVQLwuGZv7D1AagypJTMwHteTwHjLjYoDZ5T2Rxfy9uSBHDpU/Image.jpg)

Ideally, it is suggested to have a human agent routing available to help users in case of queries related to the product or can be handled using NLP as well.

:::note
The Message Business will send both the message and the event to the bot if the event is active on the Event Hub. Incase the event is disabled the message can be handled using NLP and no event will be sent to the bot for getting the context of the product query.
:::

The event will be as below:

```
{
  "type": "event",
  "event": {
    "code": "whatsapp-product-query",
    "data": {
      "context": {
        "referred_product": {
          "catalog_id": "619431863167996",
          "product_retailer_id": "YM012"
        }
      },
      "from": "919999999999",
      "id": "ABEGkYcjBiJlAgo-sDGvi1C_TNRG",
      "text": {
        "body": "Whats the expiry date of the product?"
      },
      "timestamp": "1664561602",
      "type": "text"
    }
  }
}
```
This completes the Bot Flow for the SPM/MPM Feature to be handled for a basic Commerce Flow.

These flows can be also created with other complex use cases with live agent support for better user experince when the buyer wants to get consulatation or get more info on the product before purchasing.

