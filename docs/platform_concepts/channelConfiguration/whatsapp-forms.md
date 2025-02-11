---
title: Setup WhatsApp forms
sidebar_label: Setup WhatsApp forms
---

WhatsApp (WA) forms are predefined structured interactions in WhatsApp AI-agents. The forms are designed to guide users through specific tasks or conversations. These forms facilitate various actions, including:
* **Scheduling and confirming appointments**: Users can easily confirm bookings through guided steps.
* **Collecting user feedback**: Businesses can gather valuable feedback by displaying users with structured questions.
* **Collecting user information**: Businesses can collect required user data, such as contact details, preferences, or other relevant information.

Here is how a sample WhatsApp form look in a chatbot:

   ![](https://imgur.com/Bw4inNd.png)

## Create a form

To set up a form for WhatsApp, you should have a [WhatsApp Business Account](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration#connect-your-whatsapp-business-account) (WABA). Each form is assigned a unique flow ID, which can be found next to the flow name or within the flow URL. For detailed instructions, refer to [Facebook's documentation](https://developers.facebook.com/docs/whatsapp/flows/reference/flowjson).

To create a form, follow these steps:

1. Log on to [Facebook Business Manager](https://business.facebook.com/settings) (FBM).

2. Navigate to **Account tools** > **Flows**.

    ![](https://imgur.com/RJQzTac.png)
    
3. In **Create flow** section, enter the **Name** of the flow

4. Select your preferred template. Choose either with endpoint or without endpoint, depending on your use case.

5. Choose a category based on your business use case.
    
6. Click **Create**.

    ![](https://imgur.com/t4hqnUd.png)
    
* You can view the selected endpoint URL under the **Preview** section.

    <img src="https://imgur.com/VgBi8Gi.png" alt="drawing" width="70%"/>
    
* This will create a form in draft mode. You can modify this form as required by editing the JSON script. Refer to the [Facebook documentation](https://developers.facebook.com/docs/whatsapp/flows/reference/components) to learn more about the syntax as well as the components to build the Form.
       
7. Under **Edit** flow, click the **Setup** icon. Ensure that the flow version is set to `Version: 6.0` and the `data_api_version: 3.0`.

    ![](https://imgur.com/OfLfoGv.png)
    
* Once you have finished modifying the script and running successfully, you need to set up the endpoint. 

8. To set up the endpoint URI, use the following Node.js script to generate an encrypted key.

    ![](https://imgur.com/109mCgM.png)
    
```javascript
const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const password = 'tL9M3ah5MdUo6wkg1IKqSZRquoPl1V3N';
const encrypt = (text, cipher = crypto.createCipher(algorithm, password), encoding = 'hex') => {
    let crypted = cipher.update(text, 'utf8', encoding);
    crypted += cipher.final(encoding);
    return crypted;
};
console.log("encrypt::", encrypt('{{botId}}&&{{whatspp_number_with_country_code}}'));
```

9. Setup the endpoint URI as explained below:

   1. After you run this script, you will get an {{encryted_key}}, so your Endpoint URI will be:
`https://{{host_name}}/integrations/whatsapp/extension/channel/{{encryted_key}}`
    2. Enter the host name of the AI Agent (Example: cloud.yellow.ai) in {{host_name}} and generated key in  {{encrypted_key}}. You may encounter a version deprecation warning while running this script. You can ignore this warning message.
   3. After configuring the endpoint URL, contact the [platform support team](mailto:customersuccess@yellow.ai) to connect the Meta App. Provide the Flow ID, Bot ID, and the associated WhatsApp number. Note that once submitted, the Meta App cannot be changed.
   4. In **Add phone number**, enter the phone number for which you want to create the form and test it. 
   5. In **Sign public key**, enter the Endpoint URI provided by the delivery team. Contact the delivery team to obtain the URI.
![](https://imgur.com/xkQPeHo.png)
   6. Select **Connect Meta app** to enable communication between the flow and your endpoint. 
 ![](https://imgur.com/I7hILAm.png) 
   7. In **Health check**, verify if the endpoint URL is responding correctly.
   8. Click **Submit**.
   
#### Integrate WhatsApp form with your Bot   
   
Once you have created your WhatsApp forms, you can use them in your AI agent's (bot) flow as explained below:``


1. Create an `initExtensionWA` on the bot by adding the following function to the bot:

```javascript
return new Promise(resolve => {
   let payload = {
       finalData: {}
   }
   console.log("==logging initScreen 1st function==", payload)
   resolve({ data: payload });
});
```

2. To log the data from the Whatsapp form, create another function called `leadGenFunction`. You need to use this function in your bot journey after executing step 5.

```javascript
return new Promise(resolve => {
   // Step 1: Construct the payload for extension_message_response
   console.log("logging Data from WA Form", data)
   // Step 2: Create a wrapper object for the payload
   let val = {
       finalData: {}
   };
   resolve({ data: val });
}) 
```

3. Run the below API only once to set up your flow.

```curl
curl --location 'https://{{host}}/integrations/whatsapp/extension/create-extension?bot={{botId}}' \
--header 'Content-Type: application/json' \
--header 'x-api-key: {{apiKey}}' \
--data '{
    "extensionId": "{{extensionId}}",
    "wellJson": {
           paste the copy of your Form's JSON script here exactly as it is on FBM
            }
}'
```

* Once your form setup is completed, you can now add it to your bot flows.

4. Run the below API only once to setup the form.

:::note
Replace the `FIRST SCREEN NAME` as per your first screen’s name in your JSON script.
:::
    
```javascript
curl --location 'https://{{host}}/integrations/whatsapp/extension/steps?bot={{botId}}' \
--header 'Content-Type: application/json' \
--header 'x-api-key: {{apiKey}}' \
--data '{
    "extensionId": "{{extensionId}}",
    "steps": {
        "INIT": [
            {
                "id": 1,
                "type": "FUNCTION",
                "name": "initExtensionWA",
                "lastStep": true
            }
        ],
        "<<FIRST SCREEN NAME>>": [
            {
                "id": 1,
                "type": "FUNCTION",
                "name": "leadGenFunction",
                "lastStep": true
            }
        ]
    }
}'
```    
   
5. To send the form to the user, use the below API:

:::note
Make sure you replace unique flow token generated by using a simple function with a flow token generated by using a simple function. This token needs to be unique every time when this API is executed.
:::
    
```c
    curl --location 'https://{{host}}/integrations/whatsapp/extension/message?bot={{botId}}' \
--header 'Content-Type: application/json' \
--data '{
    "from": "{{BUSINESS_WA_NUMBER}}",
    "extension": {
        "to": "{{END_USER_WA_NUMBER}}",
        "headerText": "Hey this is header",
        "bodyText": "Hey please complete the quiz",
        "footerText": "Hey this is footer text1",
        "flowToken": "<unique flow token generated by using a simple function>",
        "extensionId": "{{extensionId}}",
        "mode": "draft",
        "ctaText": "Click Here"
    }
}'
```
    
A sample whatsApp form bot flow:

   ![](https://imgur.com/9HwnRIw.png)       




