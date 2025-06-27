---
title: Quick replies node
sidebar_label: Quick replies 
---

Quick replies node allows you to display the message to users along with predefined response options in the form of buttons. You can respond by either clicking one of the buttons or typing the choice manually.

You can connect each quick replies to a specific flow to trigger the flow when this button is clicked. Additionally, you can configure a fallback response to handle cases where the user's input doesn't match any of  the provided options.

   ![](https://i.imgur.com/Ign5Rz9.png)

You can use Quick replies node when you need to:

* **Guide users with predefined options**: When you want  users select a service, product, or category.
* **Trigger specific flows**: To connect user selections to dedicated flows or actions based on their choice.

**Limitation**

* For Web channel, you can add upto 3 quick replies button.


### Configure static Quick replies

To configure static Quick replies, follow these steps:

1. Drag and drop the Quick replies node in the flow editor.

    ![](https://i.imgur.com/hSCRwjv.png)

2. Enter the message you want to display to the user.

3. Click the **+** icon to add a button.

    <img  src="https://i.imgur.com/I3ICp5Z.png"  alt="drawing"  width="60%"/>

4. Click on the button and enter its name based on your use case.

     <img  src="https://i.imgur.com/F1gwFaZ.png"  alt="drawing"  width="60%"/>

5. Click **Configure buttons** to customize these buttons.

     <img  src="https://i.imgur.com/DaG949p.png"  alt="drawing"  width="60%"/>
     
6. Define the following fileds:<br/>
   i. **Button value**: Set a value to the button that can be stored in a variable or inserted into a database.<br/>
   ii. Text aliases: Provide alternative phrases or abbreviations users might type instead of the button text. For instance, if the button text is "number," you can add aliases like "num" or "no" to improve recognition so the AI-agent can recognize these inputs.<br/>
   iii. **Link and Postback**: Specify a URL for users to be redirected to when clicking this button.<br/>
   iv. **Analytics**: Configure any analytics tracking for this node to track button selections and user interactions.<br/>
   v. **Prefix image**: Add an image URL to display an icon before the button text, if needed.

    ![](https://i.imgur.com/Dez5ksD.png)     
      
7. Click **Save all changes** to confirm your settings.

8. Click **Delete button** to remove the button.

### Configure Dynamic quick replies

Dynamic quick replies are used to present options generated in real-time based on data fetched from external sources, such as APIs or databases. This is useful in scenarios:
* When the available choices depend on live or updated data, such as product availability, current offers, or real-time status updates.
* When the number of options cannot be predetermined and varies dynamically.
* To avoid manually configuring buttons every time for changing data.

**Example use case:**

* **E-commerce**: Fetch product categories based on user interest or location from an API and display them as quick replies buttons.
* **Travel booking**: Display travel options (for example, flights, hotels) dynamically based on the user's selected destination and dates.

To configure the dynamic quick replies, follow these steps:

1. In the **Quick replies** node, click the highlighted icon to copy the sample quick replies object variable.

    ![](https://i.imgur.com/qWxNd9o.png)

2. Go to the **Functions** section and paste the copied variable into the **Resolve** section of the function.

    ![](https://i.imgur.com/sGJk0yJ.png)

3. In the flow builder section, add a **Function** node and select the function name you created in the previous step.

     ![](https://i.imgur.com/QpA7LSO.png)

4. Create a variable of type object and select it to store the function’s response.

      <img  src="https://i.imgur.com/eXbPJH1.png"  alt="drawing"  width="50%"/>

5. Add a Quick replies node and select the variable created in the previous step to dynamically populate the options.

    <img  src="https://i.imgur.com/XszzTxw.png"  alt="drawing"  width="50%"/>

6. Preview and test the flow to ensure the dynamic quick replies are displayed correctly.

     <img  src=" https://i.imgur.com/YPxLqcW.png"  alt="drawing"  width="40%"/>
     
Refer to the following GIF to see how the Quick replies node works:

   ![](https://imgur.com/SWJHCe7.gif)

### Pass data to quick replies buttons and title using variable

You can also pass the data to the quick replies buttons and title using the variable. Use the following code to pass the data:

{{{variables.info}}}, {{{variables.info1}}}

To pass the data to quick replies buttons, follow these steps:

1. Create a Variable with value. For more information on how to create a variable, to store, and retrieve data from variables, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables#31-create-a-variable-via-nodes).

     ![](https://i.imgur.com/McjHRjw.png)

2. In Quick replies node, select the variable that you have created for title and for the button name.

    ![](https://i.imgur.com/QL3RlOy.png)
    
3. Preview the flow to view the title and the button names in the quick replies node.

      <img  src="https://i.imgur.com/lcA6BgV.png"  alt="drawing"  width="40%"/>