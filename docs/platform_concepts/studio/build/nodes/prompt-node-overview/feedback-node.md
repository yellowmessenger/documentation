---
title: Feedback node
sidebar_label: Feedback 
---

Feedback node allows you to collect feedback during conversations. It allows the AI-agent to prompt users for their ratings, opinions, or suggestions regarding a product, service, or the overall interaction with the AI-agent.

Feedback node is used to capture various types of feedback, such as star ratings, thumbs up or thumbs down, additional comments in a text field on services, products, or the AI-agent itself.

Feedback node displays a feedback widget where you can rate on a 5-star scale, thumbs up and thumbs down, or optionally leave additional comments in a text field.

Depending on the rating, the following actions will be displayed: 
* **Ratings 1 to 2**: Redirect users with 5 predefined negative feedback options for further clarification.
* **Ratings 3 to 5**: Redirect users with 5 predefined positive feedback options.

This node stores the collected data (ratings and comments) in a database for further analysis.

Supported data types for Feedback node:

* **Rating field**: Use "number" data type for storing user ratings.
* **Comment field**: Use "string" data type for storing user comments.


:::info
* This node is supported for all the mobile SDKs (Flutter, Android, iOS) and web.
:::

**Limitation**

* This node is not supported for WhatsApp, Instagram, Facebook , Teams, and Slack.


**Configure Feedback node**

To configure Feedback node, follow these steps:

1. Drag and drop the Feedback node in the flow editor.

   ![](https://i.imgur.com/ugNF0Sd.png)

2. Enter the message you want to display when asking users for feedback.

3. Choose the type of feedback you want to collect:
   * **Star rating**: Allows users to provide a star-based rating scale (for example, 1–5 stars).
   * **Thumbs Up/Down**: Allows users rate using a thumbs-up or thumbs-down option.
   * **Text feedback**: Allow users to submit their feedback in text form.

4. Enter the text that should be displayed after recieving the feedback.

5. Expand the **Detailed feedback configuration** section and enable the **Detailed feedback configure** option.

   ![](https://i.imgur.com/Nq77KkI.png)

6. Configure additional options:
   * **Allow user to add additional details**: Enable this option to provide additional comments or explanations.
   * **Show option to collect feedback**: Enable this to include positive and negative feedback categories. You can add up to five predefined options for both positive and negative feedback.

    <img  src="https://i.imgur.com/bsDHLvr.png"  alt="drawing"  width="40%"/>