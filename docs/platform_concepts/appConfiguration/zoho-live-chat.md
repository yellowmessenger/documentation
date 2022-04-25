# **Yellow.ai**


# Integration with


# **Zoho SalesIQ**






# Scope of Integration :

Yellow.ai Integration with Zoho Live Chat allows you to seamlessly connect your Zoho SalesIQservice with the yellow.ai platform. Any customer who has a Zoho SalesIQ account will be able to seamlessly connect their service with yellow.ai using Oauth. This connector will enable it to connect end users to live agents.


# Configuration  :

Setting up an account for Zoho SalesIQ : 



1. You can create an account on Zoho and use [this](https://api-console.zoho.com/add?client_type=ORG) link to create a client. Use appropriate top level domain according to your location (for example .in for Indian users). 
2. Set [this](https://cloud.yellow.ai/integration/oauth/zoho-live-chat) as a redirect URI. You’ll need client Id and client secret for connection which you’ll get on the “Client Secret” tab on the same window. 
3. Then you can navigate to the salesIQ dashboard where you can find your screen name in the URL. 
4. You can find Department Id in the settings section. For App Id, you’ll need to call [this](https://www.zoho.com/salesiq/help/developer-section/rest-api-apps-list.html) API with appropriate credentials.

Simple Integration with client ID, Client Secret, Screen Name, App ID and Dept ID: 

Once you have all these credentials, you can connect with Zoho Live Chat integration on yellow.ai dashboard. 

For connecting, you’ll need to navigate to the integrations page and search for Zoho Live Chat integration. 


# 


<img src="https://leviackerman007.s3.ap-south-1.amazonaws.com/Screenshot+2022-04-22+at+5.03.46+PM.png" alt="drawing" width="100%"/>



On this screen you need to enter Client ID, Client Secret, Screen Name, App ID and Dept ID.

After that you can click on the Connect to Zoho Live Chat button to be prompted for the Oauth process where you need to give us access to your account for 1. Initiating the conversation, 2. Creating webhook, 3. Viewing webhook and 4. Deleting webhook.

After you click accept, a webhook will automatically be created on your SalesIQ dashboard, which will empower the user-agent conversation.

# Use Case:



1. In this integration you can use **raise ticket** node to create a conversation with Zoho SalesIQ agent and once conversation initiates the user can talk to the agent.


<img src="https://leviackerman007.s3.ap-south-1.amazonaws.com/Screenshot+2022-04-25+at+5.51.08+PM.png" alt="drawing" width="100%"/>



# Limitations:



1. Images, audio or video attachments are being supported only from the user side currently. Attachments from agents are not supported.

# Reference:

API Documentation: [https://www.zoho.com/salesiq/help/developer-section/rest-api-v2.html](https://www.zoho.com/salesiq/help/developer-section/rest-api-v2.html)
