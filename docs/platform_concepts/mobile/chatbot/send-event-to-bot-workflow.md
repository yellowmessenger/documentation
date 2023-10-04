## Updating Payload Using the sendEventToBot Function

**Introduction:**
In this documentation, we will explain how to utilise the `sendEventToBot` function to add or update data in your bot's payload after the bot has been initialised. This feature is crucial for ensuring that your bot's data remains up-to-date throughout its interaction within the app.

Before diving into the details, let's outline the flow and prerequisites necessary to use this feature effectively.

### Flow and Prerequisites:

1. **Accessing the Bot Portal:**
   - To begin, go to your bot portal on the Yellow website.
   - Navigate to the "Studio" section and click on "Event."

2. **Creating a Custom Event:**
   - Within the "Event" section, create a custom event that you intend to use for updating your payload.
   - Ensure that the custom event is activated and ready for use.
![](https://cdn.yellowmessenger.com/iTyyzmiSQQJE1696398591121.png)


3. **Building a Flow:**
   - Head to the "Build" section within the bot portal.
   - In the following video demonstration, you will notice an event named 'test-custom-payload.' This event will serve as the code to identify the event in the `sendEventToBot` function, and the associated data will contain the refresh token.

![Build a flow](https://cdn.yellowmessenger.com/7ddKpOquIMky1696399291951.mp4)

   Example:
   ```javascript
   code: 'test-custom-payload',
   data: { "refreshToken": <TOKEN> }
   ```

Now that you have set up the prerequisites, you can proceed with using the `sendEventToBot` function to add or update data after the bot has been successfully launched.

This functionality is crucial for keeping your app's data synchronized with the bot's state, ensuring a seamless and up-to-date user experience.

In summary, this documentation outlines the steps to set up and use the `sendEventToBot` function to add or update data in your app's payload after the bot has been initialized. By following these guidelines, you can enhance the functionality and relevance of your bot interactions for both developers and end-users.