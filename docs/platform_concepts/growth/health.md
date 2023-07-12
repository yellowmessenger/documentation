---
title: Set up alerts for bot downtimes and failures
sidebar_label : Health & alerts 
---

The Health module provides you with the ability to monitor your bot's performance and receive email notifications for any failures or issues. By setting up alerts, you can proactively stay informed about the status of your bot.

-----

## Set up alerts 

To monitor failures or issues and receive timely notifications, you can create alerts based on specific rules.

### Enable default alerts

To enable pre-configured alerts, perform the following steps:

1. Go to the **Alerts** section of **Insights** > **Health**.
2. Activate the toggle button for the required alert. Two pre-configured alerts are available:
    - **API failure**: When enabled, you will receive an email notification if any APIs configured in Studio have a failure rate of more than 5% in the last 7 days.
    - **Bot downtime**: When enabled, you will receive an email notification if the bot remains inactive for more than 30 minutes.
    ![](https://i.imgur.com/ivKNwXt.png)
    :::info
    The bot's health is monitored by pinging it every minute. If a response is received, the bot is considered up (uptime). If the bot fails to respond for more than 30 minutes, it is considered down (downtime).
    :::
3. To add multiple recipients, enter their email addresses, press enter, and click **Add**. 
    ![](https://i.imgur.com/psNzedR.png)
4. To modify the recipients, click **Edit** in the menu next to the alert name and add or remove email addresses.
    ![](https://i.imgur.com/yOCs4D1.png)
5. Whenever a failure or issue occurs, an email alert will be sent to the specified recipients. The time of the alert will be recorded in the **Last fired** column next to the alert name.


---

By following these steps, you will receive alerts in a timely manner, enabling you to address any issues or failures promptly and ensure optimal performance of your bot.

**Sample alerts**: 

 <img src="https://i.imgur.com/I5UR9Gr.jpg" alt="drawing" width="50%"/>    
 
 <img src="https://i.imgur.com/KGoVyEk.png" alt="drawing" width="50%"/>    

 