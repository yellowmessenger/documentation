---
title: Netcore Smartech
sidebar_label : Netcore Smartech
---


Yellow.ai Integration with Netcore Smartech enables the end user to do the following:
1. Receive the event from Netcore on the addition of Yellow’s webhook URL.


## 1. Configuration

You can configure Netcore Smartech by following the below steps:

1. Enabling the Integration in yellow.ai Integrations Module.

    * Login to cloud.yellow.ai and click on the Integrations Module from the top left corner of your screen.
    * Then search for the integration named Netcore or choose the category named Tools & Utilities from the left navigation bar and then click on Netcore Smartech.
    * Click on Connect and the Integration will be enabled at yellow.ai’s end and the event will be added to Event Hub.

**![](https://lh6.googleusercontent.com/gDTZ6sC2oS6ykg5GO5tOmcuKkDXShI24ddv86ezx7W5Uu43sSP05xNL0P_1krdoOmZX-g4pFak2kG62rM2BwjzysyfgNrhAPjfoIYSyIVmd_hPn7r5O7F2MGOz_nabmjp6Q2qAuPIyLd0Tyd77XUeE14Nvp5icy0BMbffuhdh7JwoMH4MaDjFVi1IQ)**


**![](https://lh3.googleusercontent.com/u9gFHQZkooKcKv-BWRNKfG25Ph1j9WzKpQdaIHixBjFbKRJI6_QAdXgkQcINgn7AoV3qln178AESa69qlR5nUOLc84P2XxXAbxUAg77YbkNsym4vjGWm2WDXW_WVDfLvJoC2DDR5m62yUbedsrHSxQJPEFsidhcXgZ8ciqx1t7TrjoFhy4_8-yLrBw)**

**![](https://lh6.googleusercontent.com/9jX0oKyH5Y985k0q663-7DbKgOpSKAFf7BVIGZXlo3QIhO9FnZVycbLG7RmIcu7eI2a3lM_UuRkGUsOmVXTNWzz2dSTTgP_pDfhXtYyKT5ISZNFw6oVK_ROjUryB1LV2d0KqP5MJauVj_sZfYn8_75kgzZa2cDsZu3_VcUZaqJtsPaABC-8MsaMYuw)**

2. Configure webhook URL in netcore dashboard.
    * Copy the webhook URL mentioned in the Instructions section of the Netcore Smartech Integration Card. Please note that based on the region of your bot i.e r1/r2/r3/r4/r5, you need to append that to the domain of the webhook URL. For example, if the domain is https://cloud.yellow.ai, you need to change it to https://r1.cloud.yellow.ai if the region of the bot is r1. If the bot belongs to the India region, you can use the origin domain itself.
    * The client needs to log in to the Netcore Smartech dashboard and navigate to the Webhook URL Configuration section and add the provided webhook URL.

**![](https://lh3.googleusercontent.com/N7bg-EHJLIfmu4kd1UwMKcv_bsM6pxpzWM8QJd-ddWmYmLl88sq1-eLRDez9FEwhPdbv2w9QxBPYCcCj7K65W57bzyC09Ksnsp4EBDaRGRzWICfWKahvV_e-1U_8tjv-m2PxccM4r9VmND0AqTuNHeDJqbvN_ZVEAhiPN7xitNE3fGoUZJKS054_2w)**



3. Receiving event in yellow.ai Bot.

    * Login to cloud.yellow.ai and click on the Studio Module from the top left corner of your screen.
    * Click on the Event, from the left navigation bar and then choose Integrations.
    * You will find an event named netcoreEvent that needs to be activated by clicking on the three dots next to the name of the event.
    * After activating the event, a journey needs to be created in the Studio module whose trigger point is this event. Now based on the event data received, an appropriate message is displayed to the end user.






**![](https://lh6.googleusercontent.com/gDTZ6sC2oS6ykg5GO5tOmcuKkDXShI24ddv86ezx7W5Uu43sSP05xNL0P_1krdoOmZX-g4pFak2kG62rM2BwjzysyfgNrhAPjfoIYSyIVmd_hPn7r5O7F2MGOz_nabmjp6Q2qAuPIyLd0Tyd77XUeE14Nvp5icy0BMbffuhdh7JwoMH4MaDjFVi1IQ)**


**![](https://lh3.googleusercontent.com/aepM3XSZgirczPjyCoMTv0r0T-q-MVHg4cGH5l5tzX9xd0nOjYJ2XmNKeWrzjdq4pfZvngZq9Fyd-2GLE7cELlXAZYUEJPesLrbMGridFgrNxLkXzw8n7O_-uWxC3Py4u5BinvCXDYzP9fSPs6KaAO038Dq2fEEDzf87IUQ3_8ZouK-rhylpvryRhg)**

**![](https://lh4.googleusercontent.com/LGfbPG4rqwnkN7e0eX1QSpCxKYAbDlEUlgJ3d3g3Vx3mYzsxDUHwtctl-LGr6gqIjkiBBJtAIp9hLvhIt6FuKLW1SkR7j9HSlfhSz69hki86wO5DCyewfCnYLG5jC4wTrvs4EoP-X8oJxVeS98Z4c19OPH9l9-IQh2atzfaq4H4jvRG9mlCWyXFZAg)**



Sample webhook event data sent by Paytm:

```
{
          "webhook_name": "yellow-ai",
          "event_params": {
            "foreignkey": "9999999997",
            "linkid": -1
          },
          "custom_params": {
            "channel": "sms",
            "type": "click"
          },
          "att_params": {
            "MBR_DOBIRTH": "23-12-88",
            "AGE_BUCKET_APR17": "25 To <30_Yr",
            "MARIAL_STATUS": "S",
            "CAMPAINGENAME": "XYZ"
          }
        }

```