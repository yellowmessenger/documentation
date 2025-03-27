---
title: Steps to request quick replies for a Dynamic Chat node
sidebar_label: Enable quick reply in DC node
---

## 1. Initiating the request

1. **Start the Process**  
   Use the Slack command `/enable-qr-for-dc` to begin the request.                     
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd_64OvfQfM7QPB7ksAkb6T4tNKcQePP-rsdjMDSV0bAI2aOZuRWUnesDQSqI_u3UsGcsfdP8gPNscUqFvKqOm7z66QFr3kZy9-2XDLIhOGY7EahFTEsP4_3MOGGWdGANPfVIH9?key=I_mZoNLoQFkPns5J_u8smbYs)**

2. **Fill Out the Details**  
   A pop-up form will appear where you need to provide the following details:
   - **Your message for approval**: Provide a justification or purpose for requesting to enable or disable the feature.
   - **Bot ID**: Enter the Bot ID (ensure it’s not the production bot ID). Once you publish the bot to a higher environment, the same feature will be enabled for those environments.
   - **Node ID**: Provide the Node ID of the dynamic chat node for which you want to enable quick replies.
   - **Journey**: Specify the journey where the dynamic chat node is being used.                     
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfiGUQO4cA7yoW69adIBnhpPm2RzKr3C6u7BLUM5PFTHTxURIHT4NN25RjOerorfm4iNnzC650Y_eIz5gmBwkR4zeQ96yOXtOdSRt__KmqW-7mub13md2ySSIKP_AIV6JOPG0JkJg?key=I_mZoNLoQFkPns5J_u8smbYs)**

:::note
If the user attempts to create the request with the production Bot ID, a message will appear in your DM indicating that quick replies can only be enabled/disabled on development bots.                   
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXelEtYgrQgiGHBlfGMW9UneQGrNSHr4_TJVT0AwCEHPuGp90_xW3_7a4TEclLy39j2Ipu3OnEVkHdqtuMp7Ke8fPvoPqZ6DcZtUqz2iYDh5dcxfzhWDYUah5UnEzCGVvGt37dgUxw?key=I_mZoNLoQFkPns5J_u8smbYs)**
:::

3. **Submit the request**  
   Click on the **Submit Request** button. The request will be automatically forwarded to the approvers: L1 Managers.          

4. **Track your request**  
   Navigate to the `#edith-workflow` channel in Slack to view your submitted request. The channel will show additional details like the Customer Name (auto-populated).                      
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeK7GP-bi7c73gXbBR9vWdGb5sg7F14oJHpOV2fXfaEVn4bJoJO0-yIpMVwUE9tPdfsLktK_mIXB4p1-Lg2wqFOh0aWVYAKh550nxvADiVuEHtHJAUZhKmuh-4BS-iV19N9pYDWgQ?key=I_mZoNLoQFkPns5J_u8smbYs)**
:::info
You will also receive a message in your DM once the request has been submitted.            
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXehcSrlvhV6sZ1k8p-m044xNuyDKpmSgxmLU7FMwWC2QtGMZXCmrEkw0rfnGSig3SVywPlBGJQzibfGoEvKHcx9pVm9Fx0URZJQkMANfZgsdJQItXxRka2UcJGnb-3XwSLmv_vf?key=I_mZoNLoQFkPns5J_u8smbYs)**
:::

5. **Approval process**  
   Once an authorized approver reviews the request:                        
   - If approved, the approval button will disappear, and you’ll see a confirmation message.                          
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfHBFAjulARhw8E-Wqj8n6vvfh6resb0eE3U2yfA2b86-UHZZ8VcFJZPjMKF0om5jMWYqietbBVvcReaCAe_0j04cxSnx4FvNIQuzrrxPm7s--ghR52FANIK4X4KGWKNK6PZl9Q?key=I_mZoNLoQFkPns5J_u8smbYs)**      
   - The keys will be created in the backend, and you will receive them via DM from the Approval Request Flow Bot.                   
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe7vvW4pLZwCaFzWL-qMSs6VQJkWlufTWVkJOo_49-nsmA_THbA1txSBw3NLKUvBASiKMmFCzK1Nrl_sQ6JwsIz5FlelHZR58YbRWjAdedmft2lM6nL67bxxDgne04U4H_KUXWA?key=I_mZoNLoQFkPns5J_u8smbYs)**

:::info
- If an **unauthorized user** attempts to approve the request, they will receive the message:  "*Only authorized users can approve this request. If it's urgent, please notify the approver directly to expedite the process.*"          
- If there is already an **existing request** with the same Bot ID (active or approved), a message will appear:  "*There is already an active request.*"              
- If the **request is denied**, you will receive the message:  "*Unfortunately, your request has been denied.*"
You will also receive a DM indicating that the request has been rejected.
:::

---

## 2. After request approval

Once your request is approved, follow the steps below to complete the process.

1. **Initiate the request for quick replies**  
   Use the Slack command `/provide-details-for-qr` to begin the process.                   
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd_64OvfQfM7QPB7ksAkb6T4tNKcQePP-rsdjMDSV0bAI2aOZuRWUnesDQSqI_u3UsGcsfdP8gPNscUqFvKqOm7z66QFr3kZy9-2XDLIhOGY7EahFTEsP4_3MOGGWdGANPfVIH9?key=I_mZoNLoQFkPns5J_u8smbYs)**           

2. **Complete the form**  
   Once you select the command, a screen will appear. Here, you need to provide:         
   - **Curl**: The curl command can be found in the form link ("click here").             
   - **X-API-Key**: Enter the X-API-Key of the bot. If you're unsure how to retrieve it, you can follow this [document to generate API keys](https://docs.yellow.ai/api#generate-api-keys).                      
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcaUTpihxicWRTeov85410hewFrcnoCWMXsIkKt9mBZmJ7Xwxp2WVh2E5QTndbJB5pJFP_U6Gh0PGJGhwvXclVuW0v6KtM8W-cfD8sBGVDQNw1XscSAg_jdA72RGqhD1fe2aUfhOg?key=I_mZoNLoQFkPns5J_u8smbYs)**

3. **Submit details**  
   If you don’t provide the proper curl or if the node request has not been approved, you will see an error message.              
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe318caoLAS6d0vHmcWb2CWef0KUVdZ7QYD57PNHFT27Rc8aM33Q34KwU4tUGICu8Adfo5nlJ2daU4iVr8UpiHKHekq_vUv6EfCS_8yvUiRM4s306RslspE1n8Db2VDio4G8cRwbQ?key=I_mZoNLoQFkPns5J_u8smbYs)**                   
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdVmFj7OiIU-o9eDfYWt8zwQO3RjvQLbdEjOlplb2eC1okG4jptF8vzyn_jYVe0oaT8fGFFqb1-XJjPv5c0fNImmKGyUleBQCss1SfnvDMC0YTJ5MK6AXpW7tnwtbNVlo1I32Wg_w?key=I_mZoNLoQFkPns5J_u8smbYs)**

4. **Successful submission**  
   Once the curl and X-API-Key are correct, and the request has been approved, you will see a success message indicating that quick replies have been enabled.            
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeaKFFSyln0xDHRWEtEn0Egrg-NgcAiQqGcFRV1pUMroxgs0MyYWmnUOMSKyakAg1mhhzkLOdWm4WItLhYLG2vwl6VaTXUglvrkfPrtXwM81Mxc2s1nkUHUvWK5ht6X3vCkwQBO5g?key=I_mZoNLoQFkPns5J_u8smbYs)**

