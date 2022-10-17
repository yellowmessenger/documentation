---
title: Custom Usecases
sidebar_label : Usecases
---
Steps are mentioned to resolve each of the commonly encountered use-cases: 
  
## 1. Notifying Agents when they are offline/busy/away
  
  Whenever an agent is offline or busy or away and a user tries to contact the agent via the bot, an agent can be notified about the same through an email (or even via SMS, Whatsapp, or voice) by using an outbound notification node.  
Follow the given steps to implement the same:   

1.  Create a global variable with the agent's email as a value.  

![](https://lh6.googleusercontent.com/vQRLirReKG5_CmQ9_XJ_Lfioe-VHlKfM9U_pPbgpotrnmJCVNT-qJY1VjurSf9iV42OkMxNnXxJLnDB5FMfOZzAMJn8VeUbv44Y0HSEn9GdovPmQ6NFxA8J4Dxq0DHtGggIsCuKS_jmRAp-4gav67nJ4fcEKGwheQqPIwlqcxIFJh6kkehpT2sfq5A)

2.  Set email template in **Engage** > **Templates**.  

![](https://lh5.googleusercontent.com/T4VQiDxm_WriD9W-NEWwA6ob8yaIVbqr9ATWwaCxReLrPII-Y_9VO1XQnKLOhhDHEGYRZNOF63TjLinbnEkfE6RrmfozfTbH8Y2eWLrcFlmGzluCsQzHzKMaUSw-MZDJlDuB8Z5TMDrBuvhUtP5QgvxIRf3kCgHcBhuCsCRMnU_T8EK5cGLZOW9GhQ)

3. Use outbound notification and set-up using the agent's email variable and email template.  

![](https://lh5.googleusercontent.com/X-75omKzbvhqf5Gi-SKn00e2sH5V78VYU2CYVuROCfEDVi3cdlULP8ClptVUK_kkLVoTKl-bn8Lz_eXImTqlGo3JsF23F8OP-20J4iNJzuh61rdouwE0VNJRgreCXAy1oMmM2FQxkWeEQMJeo5zRjxPPpho72spdFQnnsLrJPamktL0CK-9oSxf-nw)  

![](https://lh4.googleusercontent.com/zSeNc5mAAvY1XvJ9m-li6vycVut_phv0iHySY_iln_J4lCMYiDnrtiHCPNt-WeFw_E6R6sarw5GCwiy-2sU2tFA6gMEs7YxlkS16NulYThqSW59vmRdnErHBjedIrBkHIj-6vlugePGhdpN-XoJXsduEnLabLvz1SbK9JffNUbtUNkkXelMCGMQLvQ)
  
4. Set events “ticket-opened”, “ticket-missed” and “ticket-queued” to active inside Event in Studio. Post this, the start trigger node needs to be configured with these events in the respective flow.    
  
![](https://lh6.googleusercontent.com/hsj0OGeogoz2L8Tdn6q_eOPNWO2ruxEHOiU3DVB86A2xf3F4jWJw0YgGrwoUgTUv5hadyP4I4zN-ILbB_-RBXLh7U8HEjWUg3n1-v_S9DIza5KMsRsuPX7845Er7r-0tdVVu5Ue2HzZ0CdJR9vYuO2ZC1hUXl7pBDV4luZWTYkX6soV54Zf3_e1MzQ)  
  
![](https://lh5.googleusercontent.com/cQjs9yS06jIohN4vHz2QMV5Oi9TM613S_eX0U4OGs_1qDK-E_vjbb1HgcB181w1rXawrbW7_MxX882BAGFE47fQS6REIf0WSTeiQJH1UKaJfLz1AKF1-vgiywAHzUUM-OS-jczk0Lks7PkSNoR1qo_d2Y84dV7hemMHVyiUr5a1hdxx9IRxcwYcP0g)  
  
## 2. Agent transfer without asking for any information from the user

  

1. Create variables for storing names, and queries in global variables and give some dummy value to them.
2. Pass the same variables in the raise ticket action node.

:::note
The dummy name and query won’t be displayed to the user.
:::
  

## 3. Assigned a ticket to a particular group with a particular tag

 
1. In Inbox settings, create a group and tag.
2. Use the Raise ticket action node for each group.
3. Pass the information in the advanced settings of the ticket under Department and Tag.

  

## 4. Values coming from each channel must be set on the tickets

1. Use a channel filter to set variables.
2. Create global variables and set those variables.

> With either variables coming from payload like {{{profile.payload.< key_name  in  payload >}}} Or {{{sender}}} in case of WhatsApp

3. Pass the same variables in the raise ticket action node.

  

## 5. For failed tickets, the query and contact must be stored/an email has to be sent

1. In the raise ticket action node on the error node, use a send email action node.
2. Create a database and Use a database node to insert the ticket details into the database.