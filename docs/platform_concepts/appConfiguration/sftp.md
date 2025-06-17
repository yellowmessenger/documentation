---
sidebar_label: SFTP integration
title: SFTP integration
---



Use SFTP integration to securely sync and manage user data with your platform. This setup allows you to transfer files from your server to sync with **User 360**, enabling you to view and analyze user data in one place.

To connect an SFTP server:

1. In Development/Staging environment, go to **Extensions** > **Integration** and search for the *SFTP* app.
2. Click **+Add account**.
![](/img/cdp/sftp.png)
3. In **Give account name**,  enter a unique name for the account. Use only lowercase alphanumeric characters and underscores (_) with a limit of 20 characters. Example value: `support_team_account`.
4. In **Host IP**, enter the IP address of your SFTP server. Example: `192.168.1.1`
5. In **Port**, enter the port number used for SFTP connection. Default: `22`
6. In **Username**, enter your SFTP server username.
7. Enable **Private key based authentication** option to authenticate with the SFTP server using a private SSH key instead of a password.
8. In **Password**, enter the associated SFTP password. Applicable only if **Private key based authentication** is disabled.



### Sync SFTP data with User 360

Once the connection is established, you can enable automatic syncing of user data by turning on the **Sync SFTP with user 360 and view users’ data in your user 360** option. 
This allows the system to regularly import user information from your SFTP server, keeping your User 360 view up to date with the latest data.


Learn more about [user data import through SFTP](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/sync_users).
