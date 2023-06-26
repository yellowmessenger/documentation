---
title: WhatsApp pricing policy
sidebar_label : WhatsApp pricing policy
---

WhatsApp has introduced a new pricing policy for the messages that are delivered through its business platform and APIs based on the conversation initiator (user-initiated or business-initiated) and category.

The new WhatsApp pricing model is based on 24-hour conversation sessions, while the older model is based on the number of template messages sent outside the user window.

:::info
Starting June 1, 2023, Meta has announced updates to its [pricing policy](https://developers.facebook.com/docs/whatsapp/updates-to-pricing).
:::

This document will provide details on the  WhatsApp chatbot conversation categories, benefits, and pricing.

The following are the business-initiated categories of WhatsApp conversations:

Category | Description | Template examples |
---------|------------|-----------|
Utility conversations | Delivers specific requests or transactions related to user updates on current orders, such as post-purchase alerts and regular billing statements, and also processes special requests or transactions. | Send notifications related to orders or payments. <br/>Example: "Your payment was unsuccessful. Please try again."
Authentication conversations | Allows businesses to authenticate users with one-time passcodes during multiple login processes. For example, account verification or recovery, account integrity issues. | Send authentication passwords. <br/>Example: "Your verification code is "222". To protect your account, do not share this code with anyone.
Marketing conversations | Includes promotions or offers, informational updates, or invitations for customers to respond or take action. | Send discounts or promotions. <br/>Example: "Thanks for your order! To get 20% off your next order, use the coupon SAVE20".
Service conversations | Covers user-initiated conversations aimed at resolving customer inquiries and providing support. | Assist customers with inquiries or provide support. <br/>Example: "How can we assist you today?"


:::note
* The conversation categories mentioned above require customer opt-in. 
* If a template includes both utility and marketing content, it will be categorized as a marketing template. Templates that do not fit the descriptions for utility, authentication, or service conversations are classified under the "Marketing" category.
:::

## Use cases for new conversation types and pricing model

To understand how WhatsApp's pricing works, let's look at a few use cases of user interactions.

### Two sessions using the same category

Let's say a utility conversation is initiated, a message is delivered at 10:00 AM, if the utility conversation remains active and another utility message is delivered within 24 hours, the business will be charged for one session..

### Two sessions using a different category

Let’s say a marketing conversation is initiated and a message is delivered at 8:00 AM. If the marketing conversation is still in the active state and a utility template is delivered at 6:00 PM, this results in a separate utility conversation.

In this scenario, businesses have to pay for two sessions  - a service conversation and utility conversation.

### Single session using one template with both utility and marketing categories

Let's say a message is delivered using a template that includes both utility and marketing based on the [template guidelines](https://developers.facebook.com/docs/whatsapp/updates-to-pricing/new-template-guidelines). In this case, marketing content is identified and categorized as a marketing template.

In this scenario, businesses will incur one charge for a marketing conversation.

## Benefits of the New WhatsApp Pricing Model 

### Free Entry Point Conversations

If a user sends a message to your business via an Android or iOS device using call-to-action buttons in ads that navigate them to Facebook or WhatsApp, and you reply to the user within 24 hours using a template, Meta won’t charge you for this conversation. 

Free conversations are not charged for the first 72 hours. Messages can be sent and received from the free conversation window for a period of 72 hours.

Even if a free conversation is open, a conversation in another category cannot be started, even if a business sends a template within the three-day (72-hour) free conversation window.


### Free Tier Conversations

From June 1, 2023, each WhatsApp Business Account gets 1,000 free service conversations every month for all its business phone numbers. Based on the time zone associated with a WhatsApp business account, this number is updated at the beginning of each month. Using this free service, you can interact with your users via WhatsApp.

:::note
* Marketing, utility, and authentication conversations are not part of the free tier.
* For free sessions, the monthly package is valid for one account, where you can connect several bots (phone numbers).
:::

## Pricing Details

* Charges for WhatsApp conversations are determined by the end user's phone number, and the rates vary depending on the conversation category and country or region. To view the rate cards for all markets, you can click [here](https://developers.facebook.com/docs/whatsapp/pricing#rates). 

   Based on the time zone of WhatsApp Business Accounts, these prices are applicable for any chat started on or after June 1, 2023, at 12:00 AM.
* You can have up to 1,000 free conversations every month.
* Customers who exceed the limit of 1,000 conversations per month will be required to pay a monthly fee. For detailed information on pricing, you can click [here](https://developers.facebook.com/docs/whatsapp/pricing).

   If you have any additional questions or concerns regarding billing, please feel free to reach out to our support team. They will be able to assist you further.

## FAQs

<details><summary>Who will handle WhatsApp's new pricing policy for customers?</summary>

Yellow.ai will handle the implementation of WhatsApp's new pricing policy, and the new usage-based fee will be reflected on the next invoice from Yellow.ai. It is not recommended for customers to make any changes themselves.
</details>

<details><summary>
    Will WhatsApp's new pricing policy have an impact on customers?</summary>

Yes, the new WhatsApp pricing policy will impact customers of Yellow.ai who have active WhatsApp integrations, regardless of their subscription plan or add-on license. This change in pricing will also affect accounts with more than 1,000 conversations.
</details>

<details><summary>
    Does WhatsApp's new pricing policy apply to other Meta products?</summary>

No, these changes only apply to the WhatsApp business platform. Pricing for Facebook and Instagram has not been affected by Meta's new policy.
</details>