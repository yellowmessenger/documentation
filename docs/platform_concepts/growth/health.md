---
title: Set up alerts for bot downtimes and failures
sidebar_label : Health & alerts 
---

The Health module allows you to monitor your bot's overall performance and set up alerts to receive email notifications for any issues or failures that occur.

-----


## 1. Alerts 

You can proactively monitor any failures or issues by creating alerts to notify you when set rules are met. 

### 1.1 Enable default alerts

Follow these steps to enable pre-configured alerts:


1. Go to the **Alerts** section of **Insights** > **Health**.
2. Activate the toggle button for the required alert. There are two pre-configured alerts available:
    - **API failure**: When enabled, an email notification will be sent if any APIs set up in Studio fail more than 5% in the last 7 days.
    - **Bot downtime**. When enabled, an email notification will be sent if the bot is down for more than 30 minutes.

    ![](https://i.imgur.com/ivKNwXt.png)

    :::info
    The bot is pinged every minute to monitor its health. If a response is received, the bot is considered to be up (uptime). If the bot does not respond for more than 30 minutes, it is considered to be down (downtime).
    :::


3. Add multiple recipients by typing their email addresses, hitting enter, and clicking **Add**. 
    ![](https://i.imgur.com/psNzedR.png)

4. To modify the recipients, click Edit in the menu next to the Alert name and add or remove email IDs.
    ![](https://i.imgur.com/yOCs4D1.png)
5. When there is a failure or issue, an email alert will be sent to the recipients you entered. The time of the alert will be recorded in the **Last fired** column next to the alert name.


With this setup, you can receive timely alerts and take action to address any issues or failures to ensure your bot's optimum performance.

**Sample alerts**: 

 <img src="https://i.imgur.com/I5UR9Gr.jpg" alt="drawing" width="50%"/>    
 
 <img src="https://i.imgur.com/KGoVyEk.png" alt="drawing" width="50%"/>    

 