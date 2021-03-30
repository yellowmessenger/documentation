---
title: WhatsApp
sidebar_label: WhatsApp
---
In order to use the APIs, please follow the instructions given.

1. All APIs are of the form URL/Path. The same URL is used for all APIs present in this document, only the path is different for the different services.
  
  a. URL : [WhatsApp Integration](https://app.yellowmessenger.com/integrations/whatsapp/send?bot={{botid}})
  
  b. All API requests will contain two fields that contain data specific for the client businesses. These are generated specifically for the clients and can be shared after the relevant bots are created.
  
  c. BotId : //to be provided by the YM team
  
  d. x-auth-token : //This is available as on logging into the platform -

> app.yellowmessenger.com > Account settings > API Key

2. Method : POST for all the requests

3. Note: To avoid issues with Unicode, please type the code snippets below instead of copying them directly.

**Supported Content-type**

Media | Content Type
------ | ---------
audio(Upto 16MB) | audio/aac, audio/mp4, audio/amr, audio/mpeg, audio/ogg; codecs=opus. Note: The base audio/ogg type is not supported.
document(Upto 100MB) | Any valid MIME-type
image(Upto 5MB) | image/jpeg, image/png
video(Upto 16MB) | video/mp4, video/3gpp

## POST URL:
> [https://app.yellowmessenger.com/integrations/whatsapp/send?bot=x1234567890](https://app.yellowmessenger.com/integrations/whatsapp/send?bot=x1234567890)
> Bot ID will be shared by YM
> Headers:
> Content-Type : application/json
> x-auth-token : To be fetched from the YM Account Settings


## Text Template:

### Sample Request Body
```js
{
  "body": {
      "to": "919999999999", //recipient number
      "ttl":  86400 ,
      "type": "hsm",
      "hsm": {
        "namespace": "asd6_asdas6_asd7asd6", //Namespace from BM Account(Will be shared by YM)
        "element_name": "template_name", // template name(Will be shared by YM)
        "language": {
          "policy": "deterministic",
          "code": "en" // language code [List of codes](https://developers.facebook.com/docs/whatsapp/message-templates/creation/#translations)
        },
        "localizable_params": [
          {
            "default": "1" //Variable to be passed on the template in sequential manner
          },
          {
            "default": "2"
          },
          {
            "default": "3"
          },
          {
            "default": "4"
          }
        ]
      }
  }
}
```

### Sample Response for Template

```js
{
  "success": true,
  "message": "Successful",
  "data": {
    "created": "2020-07-23T10:38:06.530Z",
    "updated": "2020-07-23T10:38:06.530Z",
    "botId": "x1234567890",
    "uid": "919999999999",
    "message": "9fb7e63aabeaccddd7dfe8f7df676b842a43eeb43f5d1b232eead8fa61386ece6c7651f96283a4e8ca61751cda747c2c103cc6dfd0475c01fe69ae1543c9697b44f6f1ef5e58ca1c0f26aa9cdab328a97a1d99cdb1a594df8d0c437ad8d72301ff6c21db43ff3b1a3dd1faf58e74b0c0b54753ea4e42d51326922d4450394906927567e4",
    "messageType": "NOTIFICATION",
    "sessionId": "notification-919999999999",
    "slug": "",
    "feedback": "",
    "data": {},
    "source": "whatsapp",
    "whatsAppId": "gBEGkYcjBiJlAglm7xw7KKCB8iw",
    "whatsAppData": {
      "messages": [
        {
          "id": "gBEGkYcjBiJlAglm7xw7KKCB8iw"
        }
      ],
      "meta": {
        "api_status": "stable",
        "version": "2.27.12"
      },
      "templateName": "template_name"
    },
    "medium": "message",
    "messageId": "5f19688e5736accc960e49fb"
  }
}
```

### Doc/PDF Template Body
```js
{
  "type": "media-notification",
  "mime": "application/pdf",
  "link": "https://ImageLink.pdf", //Link of the PDF
  "body": {
      "to": "919999999999",
      "ttl":  200000 ,
      "type": "template",
      "template": {
          "namespace": "awe7_wer3_as234_wds23",
          "language": {
            "policy": "deterministic",
            "code": "en"
          },
          "name": "invoice",
          "components": [
            {
              "type": "header",
              "parameters": [
                {     
                  "type": "document",
                  "document": {
                      "filename": "Doc_name.pdf" //File Name of the the PDF
                  }
                }
              ]
            },
            {
              "type": "body",
              "parameters": [
                {
                  "type": "text", // Variable Values.
                  "text": "1"
                } 
              ] 
            } 
          ] 
      } 
  }
}
```

### If there are no variables then the “type:body parameters” are not required:

```js
"type": "body",
"parameters": [
    {
      "type": "text", // Variable Values.
      "text": "1"
    },
]
```
### Image Template Body:

```js
{
  "body": {
    "to": ​"919999999999"​,
    "ttl": ​ 200000 ​,
    "type": ​"template"​,
    "template": {
        "namespace": ​"d53ad515_35a1_4ee5_955a_cab4f"​,
        "language": {
          "policy": ​"deterministic"​,
          "code": ​"en"
        },
        "name": ​"image_template"​,
        "components": [
          {
            "type": ​"header"​,
        "parameters": [
        {
          "type": ​"image"​,
          "image": {
            "link": ​"https://ImageLink.jpg"​ ​//Image Link
          }
        }
        ]
        },
        {
          "type": ​"body"​,
          "parameters": [
            {
              "type": ​"text"​,
              "text": ​"1"
            }
          ] 
        } 
        ] 
    }
  } 
}  
```
> “type” : body params not required if there are no variables in the template

### Video Template

```js
{
  ​"type"​: ​"media-notification"​,
  ​"mime"​: ​"video/mp4"​,
  ​"link"​: ​"https://cdn.yellowmessenger.com/GkMMENpvqf7E1597234901535.mp4"​,
  ​"body"​: {
    ​"to"​: ​"918723062265"​,
    ​"ttl"​: ​ 200000 ​,
    ​"type"​: ​"template"​,
    ​"template"​: {
      ​"namespace"​: ​"19b94f_a9d1_4c44_f740_b593818c8b"​,
      ​"language"​: {
        ​"policy"​: ​"deterministic"​,
        ​"code"​: ​"en"
      },
      ​"name"​: ​"welcome_video"​,
      ​"components"​: [
        {
          ​"type"​: ​"header"​,
          ​"parameters"​: [
            {
              ​"type"​: ​"video"​,
              ​"video"​: {
                ​"filename"​: ​"video.mp4"
              }
            }
          ]
        },
        {
        ​"type"​: ​"body"​,
        ​"parameters"​: [
          {
            ​"type"​: ​"text"​,
            ​"text"​: ​"1"
          } 
        ] 
        } 
      ] 
    } 
  } 
}
```

### Dynamic URL Template

```js
{
  "body": {
    "to": "918723062265",
    "ttl": 86400,
    "type": "template",
    "template": {
      "namespace": "97a63_9589_4937_b343_88867d89fe",
      "name": "pay_now_test",
      "language": {
        "policy": "deterministic",
        "code": "en"
      },
      "components": [
        {
          "type": "button",
          "sub_type": "url",
          "index": "0",
          "parameters": [
            {
              "type": "text",
              "text": "31300"
            }
          ]
        }
      ]
    }
  }
}
```

### Call to Action(Phone Number)


```js
{
  ​"body"​: {
      ​"to"​: ​"918723062265"​,
      ​"ttl"​: ​ 86400 ​,
      ​"type"​: ​"template"​,
      ​"template"​: {
        ​"namespace"​: ​"b94f_a9d1_4c44_f740_b5b98c8b"​,
        ​"name"​: ​"welcome_cta_phone"​,
        ​"language"​: {
          ​"policy"​: ​"deterministic"​,
          ​"code"​: ​"en"
        },
        ​"components"​: [
          {
            ​"type"​ : ​"body"​,
            ​"parameters"​ : [
              {
                ​"type"​ : ​"text"​,
                ​"text"​ : ​"Wasim"
              } 
            ] 
          } 
        ] 
      } 
  } 
}
```

### Button Template


```js
{
  ​"type"​: ​"media-notification"​,
  ​"body"​: {
    ​"to"​: ​"918723062265"​,
    ​"ttl"​: ​ 86400 ​,
    ​"type"​: ​"template"​,
    ​"template"​: {
      ​"namespace"​: ​"dad515_35a1_4ee5_955a_cab405a8b7"​,
      ​"name"​: ​"invoice_1"​,
      ​"language"​: {
        ​"policy"​: ​"deterministic"​,
        ​"code"​: ​"en"
      },
      ​"components"​: [
        {
          ​"type"​: ​"body"​,
          ​"parameters"​: [
            {
              ​"type"​: ​"text"​,
              ​"text"​: ​"1"
            }
          ]
        },
      {
        ​"type"​: ​"button"​,
        ​"sub_type"​: "quick_reply"​,
        ​"index"​: ​"0"​,
        ​"parameters"​: [
          {
            ​"type"​: ​"payload"​,
            ​"payload"​: ​"Hi"
          } 
        ] 
      } 
      ] 
    } 
  } 
}
```

> The payload passed in the button templates will be received as an event in the bot which can be used for various use cases. This gives an advantage to use the same button text in multiple templates (Eg. Yes) and differentiate the users input based on the payload passed.