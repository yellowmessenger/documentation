--- 
title: Integration FAQs 
sidebar_label: Integration FAQs 
---

### Payments  

<details>
  <summary>How to generate a payment link in a flow?</summary>

  1. Go to **Automation Build** and build a flow for your use case.  
  2. At the point in the conversation where you want to display the payment link, add the **Integrations** node.  
     - Drag the node connector and navigate to **Integrations**.
     - Select the payment gateway you've integrated.
  3. In the integrations node, fill in the following fields:
     - **Account name:** Choose the payment gateway account.  
       If you have only one account, it will be auto-populated. If you have multiple, the first one added is selected by default.
     - **Action:** Select **Generate Payment Link**.
  4. Fill in the corresponding fields as per your integration setup.
  5. Store the JSON response from the payment node in a variable and [display the API response](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode#display-api-response) in a [message node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes1/message-nodes) so users can click the link and proceed with the payment.

</details>


### MoEngage  

<details>  
<summary> How to enable MoEngage? </summary>  
<div>  
The MoEngage integration is a gated feature and can be enabled based on your request. To enable MoEngage, you can reach out to our support team at <strong>support@yellow.ai</strong> for assistance.  
</div>  
</details>
