---
title: Use cases for Shopify event-driven campaigns 
sidebar_label: Strategic campaigns with Shopify events
---

## Cart abandonment recovery campaign {.tabset .tabset-fade}

### [Sample text](#tab/tab-a)

### [Sample text2](#tab/tab-b)


In an online store on Shopify, you notice that some customers abandon their shopping carts during the checkout process. To recover those potential sales, set up a Flow campaign to automatically send reminders to users who have abandoned their shopping carts on your Shopify store.


**Entry trigger**: `shopifyCartCreate` event

**Exception to trigger notification**: `ShopifyCheckoutCreated` event

**Flow configuration**:


1. **Trigger the flow**: Initiate the campaign when a user adds items to their cart, identify it using the `shopifyCartCreate` event. 

   ![](https://i.imgur.com/qxmCKM3.gif)

2. **Wait condition**: Check if the user has completed the purchase by waiting for the `ShopifyCheckoutCreated` event. Set time delay, say 10 min. If no `ShopifyCheckoutCreated` event is detected within 10 min, proceed to the next step.

   ![](https://i.imgur.com/2210dOW.gif)

3. **Send abandonment reminder**:  If the user has not completed the purchase within the specified time, send a WhatsApp notification. Here is a sample message:

   ![](https://i.imgur.com/MSyaUBa.gif)

   - *Sample Notification Message:* "Hello [User's Name], we noticed you left some wonderful items in your cart. 🛒 Don't miss out on these great finds! Tap here to complete your purchase: [Checkout Link]. Thank you for choosing our store!"
