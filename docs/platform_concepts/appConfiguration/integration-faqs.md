---
title: Integration FAQs
sidebar_label: Integration FAQs
---

### Payments

<details>
 <summary> How to generate a payment link in a flow?
</summary>
 <div>
  <div> <ol>
  <li>Go to <strong>Studio</strong> &gt; <strong>Build</strong> and build a flow for your use case.</li>
  <li>At whichever point of conversation you want the bot to display the payment link, include the integrations node. For that, drag the node connector, go to <strong>Integrations</strong> &gt; select the payment gateway you have integrated.</li>
  <li>In the integrations node fill in the following fields:
    <ul>
      <li><strong>Account name:</strong> Choose the payment gateway account. If you have only one account, the account name is automatically populated. If you have multiple accounts, the first account added is auto-populated. Select the one you want to use at that moment.</li>
      <li><strong>Action:</strong> Choose the action as <b>Generate Payment Link.</b></li>
    </ul>
  </li>
  <li>Fill in the corresponding fields.</li>
  <li>Store the JSON response of the payment node in a variable and <a href="https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api-apinode#display-api-response">display the API response</a> in a <a href="https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes">message</a> node for the users to click the payment link and make a payment.</li>
</ol>

</div>
  <br/>
   </div>
</details>