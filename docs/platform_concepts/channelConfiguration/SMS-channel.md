---
title: SMS 
sidebar_label: SMS
---

:::note 
* If businesses wish to set up the SMS channel in a specific country, you need to contact the Yellow [support](mailto:support@yellow.ai) team for assistance and guidance. However, if they prefer to set up SMS channel for USA, you need to utilize the [Twilio SMS channel](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/twilio-sms) for seamless integration and management. 
* For pricing details, contact [procurement](procurement@yellow.ai).
:::

SMS (Short Message Service) is a messaging channel that allows you to send image and text messages to users through their registered phone numbers.

Connecting the SMS channel to the Yellow.ai Cloud platform enables the following:

* **One-way conversations**: Send campaigns
* **Two-way conversations**: Automated responses and live agent support

1. **[Send campaigns](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/outbound-campaigns/run-campaign#31-sms-campaign)**: Through SMS, you can send campaigns to inform users about discounts, sales, or special offers.
    * **One-way conversation**: Supports one-way communication where only the sender shares information and recipients cannot respond. These messages include promotional offers, transactional updates, alerts, or notifications.
2. **Automated replies and live agent support**: Enables automatic responses to user messages received via SMS and provides immediate assistance with live agents.
   * **Two-way conversation**: Supports two-way communication, allowing both sender and recipient to exchange conversations. These messages can include messages such as live agent support, automated replies, order tracking, or feedback.
3. **Supported message types**: You can use Text message type to send the SMS.

:::note
To send SMS using one-way or two-way communication depends on the regulations, guidelines, or requirements set by each country.
:::

#### Limitations of SMS channel

| Option | Character limit |
--------|------------------|
Text message | 160 characters


## Segment in SMS channel

A segment is a part of a text message limited to a specific number of characters, typically 160 characters in standard 7-bit encoding.  In the context of SMS messaging, particularly in the GSM (Global System for Mobile Communications) standard, an SMS segment consists of up to 160 characters when using standard 7-bit encoding.

**Key points about SMS Segments:**
* **Character limit:** Each segment can contain up to 160 characters (7-bit encoding) or 70 characters (Unicode).
* **Concatenated SMS:** When a message exceeds the character limit of a single segment, it is split into multiple segments. These segments are sent individually and then reassembled by the recipient’s device to display as a single message. Some operators may send it as a single message without splitting.
    - Each concatenated segment usually contains a few characters less than the maximum (for example, 153 characters for 7-bit encoding) to include information for reassembly.
* **Cost implications:** Each segment counts as a separate SMS for billing, so longer messages are more expensive.

**Example of SMS segmentation**
* **Single segment message:**
    - **Message**: "Hello, this is a test message to explain SMS segmentation".
    - **Character count**: 59 characters.<br/>
    - **Segments used**: 1 (fits within the 160-character limit).
* **Multi-segment message:**
    - **Message**: "Hello, this is a test message to explain SMS segmentation. Each part of the message must fit within the character limit. If the message exceeds the limit, it will be split into multiple segments."
    - **Character count**: 197 characters.
    - **Segments used**: 2
        * **Segment 1**: "Hello, this is a test message to explain SMS segmentation. Each part of the message must fit within the character limit. If the message exceeds the limit, it will be split i" (153 characters)
        * **Segment 2**: "nto multiple segments." (44 characters)

You can configure SMS services for the following countries:

* [Configure SMS service for Indian numbers](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/sms-outbound-india)







