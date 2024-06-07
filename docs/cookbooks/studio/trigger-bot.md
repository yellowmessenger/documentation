---
title: How to trigger a specific bot flow
sidebar_label: Trigger a specific bot flow 
---

To trigger a specific flow when there are multiple flows in the bot, you can use the flow slug. 
A slug is a combination of the flow name and auto-generated characters in the following format: `/{flow_name}_{auto_generated_characters}`

   ![](https://imgur.com/I2a5hEW.png)

To trigger a specific bot flow, follow these steps:

1. Go to **Studio** > **Build** > **Flows**.
2. Navigate to your preferred flow from the **Flows** drop-down.

    ![](https://imgur.com/AvQOPaK.png)
    
3. Copy the flow path from the URL after *flow/*.

    ![](https://imgur.com/I2a5hEW.png)

4. Click **Preview** and then open the bot preview page in a new tab using the icon highlighted below.

   ![](https://imgur.com/hFy8IzI.png)

5. Clear the browser cache before you preview the bot. It is recommended to use Incognito mode or Private window to preview flows

6. In the address bar, append the following:
 
   **To append after the base URL**:

   `?ym.triggerJourney={journey_slug}`
   
   > 
   > Example: https://cloud.yellow.ai/liveBot/x1635319612954`?ym.triggerJourney=feedbackflow_wwgpfq`
 
   **To append it after a variable**:
  
     `&ym.triggerJourney={journey_slug}`
     
   > Example: https://cloud.yellow.ai/liveBot/x1635319612954?region=&ym.triggerJourney=feedbackflow_wwgpfq