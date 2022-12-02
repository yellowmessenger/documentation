---
title: Capturing quick reply event from WhatsApp
sidebar_label : Capturing Quick Reply
---

In WhatsApp, the notification templates can have upto three quick reply buttons.

Based on those buttons we can either trigger any flow or track the users who clicked on a particular button mentioned in the template.

To achieve any of the above mentioned use case, follow the steps below:

1. Go to Studio -> Event hub, under engagement activate Click ***quick-reply-event***

![](https://i.imgur.com/13E08QH.png)

2. Create a flow and set the start trigger as **Event** and choose **quick-reply-event** from the drop-down
![](https://i.imgur.com/XnKPZfL.png)

3. Use a variable node to store the selected button. {{{data.event.data}}} will return the name of the button selected on WhatsApp notification.
Here, we are using the CTA_clicked variable to store the name of the button clicked.


:::info
:information_source: The variable used to store the button name should be a string variable
:::

![](https://i.imgur.com/wZ44H7c.png)

4. Once we have the name of the button selected we can either trigger any other flow based on that.
We can use a Logic node, to set condition based on the value of the variable storing the name of the button
![](https://i.imgur.com/tiESni0.png)

   Also, we can store the value in a database.

![](https://i.imgur.com/piZxwoZ.png)