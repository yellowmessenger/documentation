---
title: SMS phone number types
sidebar_label: SMS phone number types
---

In the US and Canada, there are different types of phone numbers used for messaging:
* Long codes (A2P 10DLC)
* Short codes 
* Toll-Free numbers

:::note
* All three types of numbers must be registered with US telecom operators after you purchase the phone number.
* Short code numbers are not supported for configuring SMS services in the US.
* All three numbers support two-way communication.
:::

### Long codes (A2P 10DLC)

[Long codes A2P 10DLC](https://support.twilio.com/hc/en-us/articles/1260800720410-What-is-A2P-10DLC-) (Application-to-Person 10-Digit Long Code) are standard 10-digit phone numbers used for Application-to-Person (A2P) messaging in the United States.

* **Registration process**: To use A2P 10DLC, businesses must [register]((https://support.twilio.com/hc/en-us/articles/1260801864489-How-do-I-register-to-use-A2P-10DLC-messaging-)) their phone numbers with carriers. This registration process ensures that businesses are sending valid A2P messages and helps to reduce filtering risk, spam, and fraud. This process involves [registration fees](https://www.twilio.com/en-us/sms/pricing/us).
* **Registration requirements**: Registration requires a US EIN (Employer Identification Number) or a non-US tax ID. However, there is an upcoming solution, "Sole Prop," designed to support individuals in the US and Canada, even without an EIN.
* **Usage**: Once a phone number is registered for A2P 10DLC, businesses can start sending A2P SMS messages and voice calls to any country from that number by following the [SMS guidelines](https://www.twilio.com/en-us/guidelines/sms).
* **Message throughput**: The message throughput of A2P 10DLC in the US depends on your brand type, campaign type (use case), and [Trust Score](https://support.twilio.com/hc/en-us/articles/1260803225669-Message-throughput-MPS-and-Trust-Scores-for-A2P-10DLC-in-the-US)(for standard brands).
* **Benefits**: A2P 10DLC is best suited for customer service and non-marketing messages.

### Short Codes

[Short codes](https://support.twilio.com/hc/en-us/articles/223182068-What-is-a-Messaging-Short-Code-) are 5 to 6-digit numbers used for addressing messages in both Multimedia Messaging System (MMS) and Short Message Service (SMS) from mobile phones. 

* **Registration process**: To utilize short codes, businesses must complete a short code application, providing their company address and website. This process ensures no carrier filtering, as long as you adhere to the use case submitted in your short code application.
* **Usage**: Once your number is registered, businesses can send only SMS messages within their own country. 
* **Message throughput**: By default, you can send 100 SMS messages per second. However, this limit can be increased for an [additional fee](https://support.twilio.com/hc/en-us/articles/226460288-How-much-does-a-Short-Code-cost-).
* **Benefits**: Short codes are best suited for Application-to-Person (A2P), such as customer service, alerts, and non-marketing messages.

### Toll-free Numbers

Toll-Free numbers are 10-digit numbers (+1 8NN XXX-XXXX where NN is two repeated digits (for example, +1 833)). These numbers are free for the caller, and the cost of the call is paid for by the business or organization that owns the Toll-Free number. They are commonly used for customer service and support interactions.

* **Registration process**: To use Toll-Free numbers, businesses must first [verify](https://support.twilio.com/hc/en-us/articles/5377174717595-Toll-Free-Message-Verification-for-US-Canada) their number. The verification process reduces the risk of carrier filtering. 
* **Registration requirements**: For registration, it does not require a tax ID or business license. For more information, see [Limitations and restrictions of Toll- Free numbers](https://support.twilio.com/hc/en-us/articles/115007579027-Toll-free-phone-number-restrictions-and-limitations).
* **Usage**: Once a phone number is verified, businesses can start sending Toll-Free SMS messages and voice call from that number by following the [SMS guidelines](https://www.twilio.com/en-us/guidelines/sms).
* **Message throughput**: By default, you can send up to 3 MPS (message segments per second). But the [throughput can be increased](https://support.twilio.com/hc/en-us/articles/4411046744987-Toll-Free-SMS-and-MMS-messaging-throughput-MPS-) based on your requirements.
* **Benefits**: Toll-Free numbers are best suited for Application-to-Person (A2P), such as marketing campaigns, reminders, and notifications.

For more information on best practices for using Toll-Free, click [here](https://support.twilio.com/hc/en-us/articles/360038172934-Information-and-best-practices-for-using-Toll-Free-SMS-and-MMS-in-the-US-and-Canada).

