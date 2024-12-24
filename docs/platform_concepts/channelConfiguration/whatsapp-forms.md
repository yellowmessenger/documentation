---
title: Setup WhatsApp forms
sidebar_label: Setup WhatsApp forms
---

WhatsApp (WA) Forms are predefined structured interactions within WhatsApp chatbots. The forms are designed to guide users through specific tasks or conversations. These forms facilitate various actions, including:
* **Scheduling and confirming appointments**: Users can easily confirm bookings through guided steps.
* **Collecting user feedback**: Businesses can gather valuable feedback by displaying users with structured questions.
* **Collecting user information**: Businesses can collect required user data, such as contact details, preferences, or other relevant information.

Here is how a sample WhatsApp form look in a chatbot:

   ![](https://imgur.com/Bw4inNd.png)

## Create a form

To set up a form for WhatsApp, you need to create your each WhatsApp Business Account (WABA). Each form is generated with a unique flow ID. For detailed instructions, refer to [Facebook's documentation](https://developers.facebook.com/docs/whatsapp/flows/reference/flowjson).

To create a form, follow these steps:

1. Log on to [Facebook Business Manager](https://business.facebook.com/settings) (FBM).

2. Navigate to **Account tools** > **Flows**.

    ![](https://imgur.com/RJQzTac.png)
    
3. Enter the following details: 

    i. **Name**: Enter the name of the flow.   
    ii. **Template**: Select your preferred template. You cannot choose a template that does not have an endpoint.<br/>
    iii. **Categories**: Choose a category based on your business use case.<br/>
    iv. Click **Create**.

    ![](https://imgur.com/t4hqnUd.png)
    
* You can view the selected endpoint URL under the **Preview** section.

    <img src="https://imgur.com/VgBi8Gi.png" alt="drawing" width="70%"/>
    
4. Under **Edit** flow, click the **Setup** icon.

    ![](https://imgur.com/OfLfoGv.png)
    
* You can also customize the form per your requirements in FBM. Ensure that the flow version is set to `Version: 2.1` and the `data_api_version: 3.0`.
    
5. Enter the following details to complete the setup for interactive preview:

   i. **Set endpoint URL**: Identifies the endpoint that the flow will exchange data with. Contact the delivery team for the endpoint URL.<br/>
   ii. **Add phone number**: Enter the phone number for which you want to create the form and test it.<br/>
   iii. **Sign public key**: Contact the delivery team to obtain the public key.<br/>
   iv. **Connect Meta app**: Select the required Meta app to enable communication between the flow and your endpoint. Note that once submitted, the Meta app cannot be changed.<br/>
   v. **Health check**: Verifies if the endpoint URL is responding correctly.<br/> 
   vi. Click **Submit**.
   
     ![](https://imgur.com/xkQPeHo.png)

    
6. Click **Publish** to finalize the setup.

### Connect form with WhatsApp chatbot 

After creating and publishing the WhatsApp form, contact the [customer success team](mailto:customersuccess@yellow.ai) to connect the form with the WhatsApp chatbot.
    