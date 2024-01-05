---
title: Sync user data from SFTP or other integration
sidebar_label: Sync users from SFTP or integration
---

You can sync user data directly from third party integration, including Secure File Transfer Protocol (SFTP) and other compatible platforms. You can leverage seamless integration options to simplify and streamline the process of keeping your user data up-to-date within Yellow.ai.


To sync data from an SFTP integration:

1. [Connect your integration account to Yellow.ai](https://docs.yellow.ai/docs/platform_concepts/appConfiguration/overview).
2. Go to **Engage** > **User 360** and click **Import users** > **Sync integration data**.

   ![](https://i.imgur.com/ANMIg7m.png)

   You will see the list of connected integrations.
3. Navigate to the integration and enable the toggle button (to Sync on).

   <img src="https://i.imgur.com/EFxRnsW.png" width=""/>

4. **Select folder**: This will display the folders available in the SFTP. Choose the SFTP folder where the file with user details is located.

   <img src="https://i.imgur.com/dD72ZA4.png"/>

5. **Map properties**: In **User ID**, choose the column that contains userId and also map other prooperties with the relevant CSV header.
   
   <img src="https://i.imgur.com/qDdDR6c.png"/>

6. **Resolve conflicts**: Address any conflicts arising during the import and resolve discrepancies to maintain data precision.
   
   <img src="https://i.imgur.com/JTtHM9X.png"/>

7. **Schedule import**: You will see options to schedule import for different frequencies. Here's an explanation of each option:

   a. One-time import: Allows you to perform an immediate import (Now) or schedule it for a specific date and time.
   b. Recurring import: Allows scheduling on a Daily, Weekly, or Monthly basis.
   c. Custom import: Provides advanced scheduling options using the cron expression. 


