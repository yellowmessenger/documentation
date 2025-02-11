---
title: WhatsApp product message node
sidebar_label: WhatsApp product message
---

This section helps you create a WhatsApp product messaging journey with a sample use case.

  ![](https://i.imgur.com/2VbCAhb.png)

For example, craft personalized product messaging journeys on WhatsApp, such as sending automated order confirmations, shipment updates, and post-purchase feedback requests, enhancing customer experience and streamlining communication channels.

**Prerequisites** 

The following are the prerequisites to create a catalog flow:

1. [Add the Catalog with required details](https://business.facebook.com/commerce/catalogs/930872404988098/products).
2. [Connect the catalog to the WABA](https://www.craft.me/s/0loidngTNNAzkK/b/2AF9F5B2-431A-4361-801B-535519A98047/Catalog-Linked-with-the-WABA).
3. [Create a table](https://docs.yellow.ai/docs/platform_concepts/studio/database#create) and [add the products](https://docs.yellow.ai/docs/platform_concepts/studio/database#-3-import-data-into-table) from the Facebook catalogue to Yellow's database to use them while sending SPM/ MPM. Note that this step can be skipped. You can add the product IDs manually in the SPM/MPM node if your catalogue size is small.

To create a catalog journey, follow these steps - 

1. Use the same CSV used in the Catalog Manager to fill the AI-agent DB. You can create a DB table with the same headers as the Data feed sheet and use it to upload all the products to the DB.

:::note 
There is one limitation on Cloud DB Table creation which does not let you create a table column name with the header as ID due to the min character required for a header. You have to keep a copy of the original Feed sheet with the header as IDS and use it to upload to DB.
:::

Here is the screenshot of a sample CSV file.

   ![](https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfktJE4vn1LWBNwk843DQAoyX1b6zG3iRFcoKmicwyKhFt1ekgEaMrkaTWAXFfALWGfdaVc3RHujJEMAZswM7v231h1CtXDz5og5MwALtz2PEug4xqgEXABuDQBkFdghct2jVP2ZoMuCcoS3e5ZWefUqfTsG/Image.jpg)

It appears in the Database as shown here.

  ![](https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkf7c28AhauJGr4SMiysKKMeabHngvRHjiass3eBGBTccSx3Z1jcAjG1RyZCEjZbMfwp6wg9EheTLkn6tAzm2Y8Gf2NwmMZg9vHk7TS6WNbSz9i9GUcyhf6poQsK9DmRi6RLnJJVEH6k6HaGkz5BnFhA3Vo/Image.jpg)

2. Once the DB is ready, you can query products based on the Category/Title. Using the Variable node, you can dynamically fetch the product IDS and pass them to the SPM/MPM nodes by enabling the variable option and selecting the array of products.

   <img src="https://i.imgur.com/xfyVLYd.png" alt="drawing" width="50%"/>

Sample variable code:

```
[
  {
    "title": "Section 1",
    "productIds": [
      "Product 1",
      "Product 2",
      "Product 3"
    ]
  },
  {
    "title": "Section 2",
    "productIds": [
      "Product 4",
      "Product 5"
    ]
  },
  {
    "title": "Section 3",
    "productIds": [
      "Product 6"
    ]
  }
]
```

3. In the above step, you have seen how a product can be fetched based on different conditions and can be used in the SPM/MPM node. Alternatively, you can also pass the product IDs manually, as shown in the below screenshot:

    <img src="https://i.imgur.com/z1wLBPr.png" alt="drawing" width="50%"/>

To handle Cart events when a user decides to purchase a product, follow the above steps.

**Purchase flow of an end-user**:

1. User receives the SPM on WhatsApp
2. User views the products and decides to purchase it
3. User clicks on Add to Cart button and selects the quantity to purchase
4. The Product gets added with the quantity selected by the user
5. User send the cart to the Business

:::note
Incase of invalid or rejected ProductID or ContentID passed on the node the message/product will not be sent to the user.
:::

Once the user sends the cart, the products from the users Cart will be removed and will be sent to the Business as an events on the AI-agent. to recieve the Cart Event its required to enable it from the Event Hub

![](https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkxJeooqj886spjGBpqA68UNcEvVx5FXGCYb2wp7dxtbG9m3Dgpgmzy9GudbTXK8uA1JXm16jKTDE6jaix5pBZftNZ3Pvh3oPhC9HkFnpLSsSHJmnvv581GuMAfUzTcmdLWpQjfros4DqqoDrGk3rRdq9qP/Image.jpg)

This event will contain the below Data in the backend which can be used for further information required on the AI-agent to be processed.

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

4. The Message Business option also allows for another event type to be configured. This event can be sent back to the AI-agent as a normal message, or it can be fetched as an event to provide context about the product for which the message was sent.

![](https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfmNJL9wfkW5hC3z4pk1oFhjAUfdeFzEtZGD3g6dxz9BRwu5iqfX594rr9uTpyguRNHGQ7iKid5FKJMFeJ6nANvncEaSMezx1XPyQhZ2dpLvpk7CCVX4QiCnSh9ZVkYYEVTcsTwrnTuKfr32Hpb6chFpvmcF/Image.jpg)

![](https://secure-res.craft.do/v2/9NjLLkjfTCVmNrCRZiZ9LoawipgB9XdESAP4b83XbRAp7ZnFsoo8ohDNH64jUEEqg5USQUkWUydeWUSEcE6HwmkXom7PtwPbpwWZiNYtmLFaEcgkHCu9PHehKHfxjVNXRiemsMxbmVLeHTit9TdTcmCfkcfYd6DU4oUGwYZvCQSpDgiGJCZKoa3NmxoXdnhxu35pY9fnaACj453GPhhUu1A2p3fTkJ3NzKqAPFkhGBgvvQbw5BimA4fNfAbo7eHZ3DVQLwuGZv7D1AagypJTMwHteTwHjLjYoDZ5T2Rxfy9uSBHDpU/Image.jpg)

Ideally, it is suggested to have a human agent routing available to help users with queries related to the product, which can be handled using NLP as well.

:::note
The Message Business will send both the message and the event to the AI-agent if the event is active on the Event Hub. In case the event is disabled, the message can be handled using NLP, and no event will be sent to the AI-agent for getting the context of the product query.
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
This completes the AI-agent flow for the SPM/MPM feature to be handled for a basic Commerce flow.

These flows can also be created with other complex use cases with live agent support for a better user experience when the buyer wants to get a consultation or get more information on the product before purchasing.