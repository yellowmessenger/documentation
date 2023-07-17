---
title: Get WhatsApp opt-in 
sidebar_label : Get WhatsApp opt-in 
--- 

WhatsApp opt-in is a process where the user's consent is given to allow businesses to send messages, [WhatsApp push notifications](https://yellow.ai/whatsapp-business/list-of-whatsapp-notifications-message-templates/) such as order status, product recommendations, offers, reminders, and updates through WhatsApp.

You need to follow the below guidelines for opt-in:

* Use a visual element displayed next to the name and logo of WhatsApp.
* Provide an option for users to select multiple numbers.
* Provide details of each type of message for users to select.

## Capture WhatsApp opt-in 

The following are the various options to obtain WhatsApp opt-in from users:

1. **Using third-party channels**: You can acquire consent for WhatsApp opt-in through various channels that the brand already uses to communicate with their users. The following are some examples of third-party channels: 

    * SMS (with opt-in URL) 

       ![](https://hackmd.io/_uploads/S1nIKjCuh.png)
    * Email (with opt-in URL)
    * Missed call (Auto-trigger a welcome message on WhatsApp)

    * Outbound/Inbound IVR   

2. **Physical form**: Ensure that your physical form includes the guidelines for opt-in, opt-out, phone number, contact details, message type(s), and so on. The physical forms use the backend data entry process to manually call the opt-in API.
     * QR codes
     * POS system entry at the time of checkout

3. **Use websites and landing pages**: You can obtain WhatsApp opt-ins using an external web page or webview trigger from within the WhatsApp messaging interface.

     ![](https://hackmd.io/_uploads/rJ7lij0_2.png)

4. **Use the bot flow**: When you are creating opt-in flows, it is recommended to add opt-in buttons in interactive WhatsApp templates.

5. **Through user registration forms**: Set up a registration process through online forms on your website or mobile app to opt-in and provide consent for receiving WhatsApp messages. While registering users for opt-ins, ensure that you adhere to WhatsApp's guidelines and terms of service.

For more information on how to opt-in for WhatsApp, click [here](https://developers.facebook.com/docs/whatsapp/overview/getting-opt-in).

### WhatsApp opt-out

WhatsApp opt-out is a process where users have the ability to unsubscribe or stop receiving communications from a business on WhatsApp. By opting out, the user will no longer receive messages, updates, or notifications through WhatsApp.

You should provide clear instructions for users to opt out of WhatsApp communications and modify their preferences if desired.

To ensure an effective WhatsApp opt-out process, consider the following:
- Include a clear instruction in the template footer: "Type STOP to stop receiving WhatsApp messages."
- Implement a separate flow to handle opt-outs.
- Create an intent for the keyword "STOP" and connect it to the opt-out flow.
- Use the variable node to update the value of the CDP variable "opt-in" to "false" for the user opting out.
- When sending campaigns, target only users with an "opt-in" status set to "true".