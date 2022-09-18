---
title: Debug your bot flows
sidebar_label : Debug bot flows
---

# Debugging flows

When automating conversations, there can be cases of errors in flows.

It could be because of -
* A logical error in a flow
* A syntax or datatype mismatch
* Missing or null values in mandatory fields

:::note
If you are unable to identify the issue, please reach out to us at support@yellow.ai.
:::

In this article we have mentioned some commonly observed errors and how to resolve them

## 1. Flow based errors

If you observe that some nodes are not getting executed, try out the following.

* **Adding a Text node** with a testing message to the flow BEFORE and AFTER the node is executed. 
> Example: Printing the email input taken from the user right after the email node to test if it's working as intended.
> ![](https://i.imgur.com/uaTNNnb.png)


* **Using our Debug feature** to view at which step of the flow the bot stopped working.
![](https://i.imgur.com/DFIOz4S.png)

* **Breaking down flows** to smaller sections to execute just a specific part.
You can make use of the **Cloning** feature to duplicate your flow and try executing a specific section of your flow. 
> In the example, we broke a big flow into a couple of nodes. 
> ![](https://i.imgur.com/1yGyOP0.png)
> ![](https://i.imgur.com/AtSm1pE.png)

---

## 2. Data type based errors

Another frequent occurence when some variables are created in one data type (number), but passed as 'String'.

This can happen at a function/user input level and Database record insertion level.

### 2.1 Review the datatype of a variable

1. Open up the Variables section
2. Review the data type and cross reference if it matches the input being passed
![](https://i.imgur.com/LUBTtG7.jpg)


### 2.2 Review the datatype of a database column
1. Open up the table you're trying to review.
2. Click on the dropdown Table Actions.
3. Click Edit Table and you'll be able to review the data types of each column.
![](https://i.imgur.com/GPuVb6i.png)



## 3. Code based errors

We love our no-code/low-code solutions, but sometimes you need to run your own functions to come full circle with the end user's experience. 

### 3.1 View code logs
We have a code logs section on our platform as well. Go to the **Code** section and click on **Logs**.
![](https://i.imgur.com/f1qkzes.png)




![](https://i.imgur.com/HIoj1CF.png)

For example, you want to debug a specific function in your flow to see the output you're getting.
* You can set up the function such that it prints some text along with the data you'd like to check.
* Click on the actual logs inside the Logs section.
* Press **ctrl/cmd + F**  to open Search box where you can check if the console is printing the log.


### 3.2 Set up a test function
![](https://i.imgur.com/4yhYCxg.png)

Once the function gets executed, we can review the logs to see if we're getting the output.

![](https://i.imgur.com/69J9LYp.png)

:::note
There is a difference between the logs of the bot and the logs of your browser.
:::

## 4. Test APIs
You can test APIs either in the API management page or within the flow.

To test it within a flow
1. Go to the **API node** you wish to test.
![](https://i.imgur.com/CAoQX2H.png)

2. Click on **Test** and enter the mandatory fields.
 ![](https://i.imgur.com/yQ32pAi.png)
 
3. Click on **Run** and review your output.
![](https://i.imgur.com/JKkWtPF.png)



:::note
You can share your learnings or issues on our [Community](https://community.yellow.ai/)
:::

