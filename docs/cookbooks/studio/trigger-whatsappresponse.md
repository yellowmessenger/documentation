---
title: How to trigger a flow when a user clicks on a Whatsapp Template response?
sidebar_label: Trigger flows from Whatsapp Template reponses
---

1. Create your WhatsApp templates in the **Engage** module by following the steps mentioned [here](https://docs.yellow.ai/docs/platform_concepts/engagement/outbound/templates/whatsapptemplate).
2. Go to the Whatsapp template manager [here](https://cloud.yellow.ai/marketplace?name=whatsapp%20template). 
3. Click the template to open it and click **+Use template**.

<img  src="https://i.imgur.com/VhuH01k.png"  width="100%"/>

4. Select the bot in which you want to use the template, and click **Use template**.

<img  src="https://i.imgur.com/Lc6X6BD.png"  width="100%"/>

5. Go to the flow **Template handling** and select the **Condition** node. 

<img  src="https://i.imgur.com/OwTxU7Q.png"  width="100%"/>

6. Populate the contains/equal to fields with the names of the respective WhatsApp template. 

<img  src="https://i.imgur.com/vuFYGpc.png"  width="100%"/>

7. Then, go to each of the flows and populate the equal to fields with the button names in the respective WhatsApp templates. 

<img  src="https://i.imgur.com/29hZf2H.png"  width="100%"/>

8. Once you have populated the template names and the button names in the condition nodes, the respective flow gets triggered when a user clicks on a response.
