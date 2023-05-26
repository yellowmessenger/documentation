---
title: How to trigger a flow when a user clicks on a quick reply option on Whatsapp?
sidebar_label : Trigger flow via Qr options
---

This guide will provide instructions on how to activate flows upon clicking a quick reply WhatsApp button and how to monitor the number of clicks for each button.

1. Go to **Studio** > **Event** > **Engagement** > **quick_reply_event** > **Activate**.

![](https://i.imgur.com/tB1L8qw.png)


2. Go to **Build** > **+ Create flow**.

![](https://i.imgur.com/jNFalW4.png)

3. Search for **Whatsapp template**  and click **+ Use template**.

![](https://i.imgur.com/z6h5KN4.png)


4. Once the template is downloaded, go to the flow **Template handling** and set the **Start trigger** as **quick_reply_event**. This flow will be triggered when a quick reply option is clicked.

![](https://i.imgur.com/FLkprMA.png)


5. To manage the actions of your buttons, click the **Condition node** and set values to your buttons.

![](https://i.imgur.com/MuobVKb.png)


6. The buttons can either be connected to an [Execute flow](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/action-nodes#15-execute-flow) node (which will trigger another flow if clicked) or connected to[ Message nodes](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes) to display a message.

![](https://i.imgur.com/sPpeNYV.png)


Navigate to the **Database** section and click the **template_qr_clicks** table to review the data pertaining to the buttons that have been clicked.

![](https://i.imgur.com/gOUMTys.png)
