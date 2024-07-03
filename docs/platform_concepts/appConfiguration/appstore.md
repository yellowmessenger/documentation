---
title : App store Integration
sidebar_label : App store
---

Effortlessly manage user ratings and reviews directly from your bot by integrating with your Apple App Store account. This integration requires access to App Store Connect and your iOS app deployed on the App Store.

Our integration supports all versions compatible with the Apple App Store. For details on the action nodes used in this integration, refer to our [documentation](https://developers.google.com/android-publisher/reply-to-reviews).

## Connect your App Store to yellow.ai bot

Before integrating your App Store account with Yellow.ai, ensure your App Store Connect account and iOS app are ready as detailed [here]https://developer.apple.com/documentation/appstoreconnectapi).


### Authenticate Yellow.ai to access App Store
1. On the Staging/Development environment, go to **Extensions** > **Integrations** > **Tools & Utilities** > **App store**. You can also search for App store in the Search box.

   ![App store](https://i.imgur.com/cURVFVa.png)

2. In **Give account name**, enter a unique name for the integration.It supports only lowercase, alphanumeric characters, and underscores (_).

   ![img](https://i.imgur.com/hyNf6uu.png)

3. In **Application ID**, enter the unique identifier assigned to your iOS application within the Apple App Store. This ID is essential for linking your app to the Yellow.ai bot.

4. In **Private key**, enter a secure cryptographic key used for authentication and authorization purposes in API communications between your bot and the respective app store's backend services. It ensures secure and encrypted data transmission.

5. In **API key**, enter a unique identifier used to authenticate requests made to the app store's APIs. It acts as a credential to access and interact with various services provided by the app store, such as managing user ratings, reviews, and other app-related data.

6. In **Issuer ID**, enter the identifier that uniquely identifies the entity or organization that issued the credentials. It helps validate the authenticity and permissions associated with the keys used for accessing app store APIs and services.
7. Click **Connect**.

8. To connect another account, click **+ Add Account** and proceed with the previous steps. You can add a maximum of 15 accounts.

