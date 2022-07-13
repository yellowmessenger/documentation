---
title: How to debug your bot
sidebar_label : Debugging
---

# Debugging flows

When we try to automate world class conversations, there can be a couple of bumps along the way.
It could be:
* A logical error with in the flow
* A syntax/datatype mismatch
* Missing/null values being passed in mandatory fields
* There's no such thing as perfection and sometimes we fall into the same pit with our platform🥲. Please reach out to us if this is the case.

Let's go through some of the commonly observed errors and how to go about resolving them

## Flow based errors
Occasionally you see that some nodes itself are not getting executed. In such a scenario you can try

* **Adding a Text node** with a testing message to the flow BEFORE and AFTER the node is executed. In this example, I'm printing the email input taken from the user right after the email node to test if it's working as intended.
![](https://i.imgur.com/uaTNNnb.png)


* **Using our Debug feature** to view which part of the bot journey the bot stopped working at
![](https://i.imgur.com/TgheKdy.png)

* **Breaking down flows** to smaller sections to execute just a specific part
You can make use of our "Cloning" feature to duplicate your flow and try executing a specific section of your flow. In this case, we broke a giant flow into just a couple of nodes. 
![](https://i.imgur.com/NN6LJgV.png)
--
![](https://i.imgur.com/AtSm1pE.png)

## Data type based errors
A frequent occurence spotted is when some variables are created in one data type(number), but we end up passing a string into it.

This can happen at a Function/User input level and a Database record insertion level.

### How to review the datatype of a variable

* Open up the Variables section
* Review the data type and cross reference if it matches the input being passed
![](https://i.imgur.com/NGtgO9h.png)

### How to review datatype of a database column
* Open up the table you're trying to review.
* Click on the dropdown Table Actions.
* Click Edit Table and you'll be able to review the data types of each column.
* ![](https://i.imgur.com/9eRg9cY.png)



## Code based errors
We love our no-code/low-code solutions, but sometimes you need to run your own functions to come full circle with the end user's experience. 

We have a code logs section on our platform as well. Simply head over to the Code section and click on this
![](https://i.imgur.com/f1qkzes.png)


---

![](https://i.imgur.com/HIoj1CF.png)

Let's say you want to debug a specific function in your flow to see the output you're getting.
* You can set up the function such that it prints some text along with the data you'd like to check.
* Click on the actual logs inside the Logs section
* **ctrl/cmd + F** -> Will open up a search box where you can check if the console is printing the log


### Setting up a test function
![](https://i.imgur.com/4yhYCxg.png)

Once the function gets executed, we can review the logs to see if we're getting the output

![](https://i.imgur.com/69J9LYp.png)

```
Note:
There is a difference between the logs of the bot and the logs of your browser.
```

## Testing out APIs
APIs can be tested out in both the API management page as well as within the flow

To test it out within a flow
* Go to the **API node** you wish to test
![](https://i.imgur.com/CAoQX2H.png)

* Click on Test and enter the mandatory fields
 ![](https://i.imgur.com/yQ32pAi.png)
 
* Click on Run and review your output
![](https://i.imgur.com/JKkWtPF.png)





---

```
Learn and share alongside great minds over at https://community.yellow.ai/
```

Happy bot building!!
