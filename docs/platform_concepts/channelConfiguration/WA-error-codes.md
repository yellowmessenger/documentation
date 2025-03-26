---
title: Common errors while sending WhatsApp messages
sidebar_label: Common WhatsApp messages errors
---

When sending messages via WhatsApp, you may encounter errors that prevent successful delivery. This guide outlines common error messages, their descriptions, and possible resolutions.  

## WhatsApp error codes and resolutions 

| **Error Code** | **Error Message** | **Description** | **Resolution** |
|--------------|----------------|---------------|--------------|
| **4** | Sending failed because you sent too many messages too quickly. | You reached your API call rate limit. | Try again later. If the issue persists, contact the [Meta Help Center](https://www.facebook.com/business/help). |
| **80007** | Sending failed because you reached your rate limit. | You reached your WhatsApp messaging rate limit for your plan. | Try again later or upgrade to a plan with a higher limit. |
| **130429** | Sending failed because you reached the maximum number of messages allowed within a period. | Cloud API message throughput has been reached. | Reduce message frequency or upgrade to a plan with higher limits. |
| **131048** | Sending failed because too many previous messages were blocked or flagged as spam. | Restrictions have been applied due to multiple blocked or flagged messages. | Reduce message frequency to avoid spam flagging. |
| **131056** | Sending failed because you sent too many messages to the same recipient too quickly. | Too many messages were sent to the same recipient in a short time. | Wait before retrying. You can message a different recipient immediately. |
| **368** | Sending failed because your account may be blocked temporarily for policy violations. | Your WhatsApp Business Account has been restricted due to a policy violation. | Review [Meta's Policy Enforcement](https://www.facebook.com/business/help) and contact Meta if needed. |
| **131031** | Sending failed because your account may be locked temporarily. | Your WhatsApp Business Account has been restricted due to policy violations or unverifiable data. | Verify your account and ensure compliance with Meta's policies. Contact Meta if needed. |
| **2** | Sending failed due to an unavailable service. | Temporary server downtime or high traffic. | Try again later. |
| **131000** | Sending failed due to a technical glitch. | An unknown error occurred. | Try again later. If the issue persists, contact Meta. |
| **131016** | Sending failed due to a technical glitch. | Internal server error while sending the message. | Try again later. If the issue persists, contact Meta. |
| **131021** | Sending failed because the sender's and recipient's phone numbers are identical. | The sender phone number is the same as the recipient's. | Use a different recipient number. |
| **131026** | Sending failed due to issues with the recipient’s phone number or WhatsApp account. | The recipient’s number is invalid, they use an outdated WhatsApp version, or they have not accepted WhatsApp's latest Terms of Service. | Ask the recipient to:  <br/> 1. Confirm they can send a message to your WhatsApp business number.  <br/> 2. Accept WhatsApp’s latest Terms of Service.<br/> 3. Update to the latest WhatsApp version.<br/> 4. Wait and try again if due to frequency capping. |
| **131042** | Sending failed due to issues with your WhatsApp account settings or payment method. | Possible causes: unattached payment account, exceeded credit limit, inactive payment account, timezone or currency issues, or exceeding free-tier conversations without a valid payment method. | Review your account settings and payment method. Contact Meta if needed. |
| **131047** | Sending failed because the recipient has not responded in a while. | More than 24 hours have passed since the recipient last replied to your sender number. | Restart the conversation by sending a new message template. |
| **131052** | Sending failed due to an unsupported media type. | The media type is not supported. | Ensure you are using a supported media type. Contact Meta for supported formats. |
| **132001** | Sending failed because the template is not approved by Meta in this language. | The template does not exist in the specified language or is not approved. | Use an approved template. |
| **132007** | Sending failed because the template content violates a WhatsApp policy. | The template violates a policy (e.g., incorrect format, character limitations). | Modify the template to comply with Meta’s policies. Contact Meta if needed. |
| **132015** | Sending failed because Meta has paused this template. | Templates with a low-quality rating have been paused. | Edit and improve the template quality before resending. |
| **133004** | Sending failed due to an unavailable service. | A technical issue occurred. | Try again later. If the issue persists, contact Meta. |

---

## Checking message errors on the portal 

1. You can view these errors in the **Data/Messages API** on yellow.ai portal.           
2. Use the following API to retrieve message details for a specific phone number. This API call fetches message logs related to the given phone number.  
    - Search for the failed message in the response.  
    - Check the **error message description** to understand the issue and find the resolution.  

```
https://app.yellow.ai/api/agents/data/messages?bot={{{botid}}}&uid={{{phonenumber}}}&limit=100
```


:::info
If the issue persists, refer to the resolution steps above or contact the [Meta Help Center](https://www.facebook.com/business/help) for further assistance.
:::