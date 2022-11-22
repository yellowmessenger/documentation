---
title: API Usage
sidebar_label: API usage
---

In this article, you will learn about how to monitor API usage metrics. The following can be observed on the API usage page: 
1. API Usage
2. API Request rate
3. API latency


## 1. Select and export API usage data 

Follow the below steps to view the API usage: 

1. Open **Insights** > **Metrics**.
2. Select **API Usage** tab.  

![](https://i.imgur.com/WYdus0e.png)

3. Select the API you want to monitor from the API dropdown list (the [names of APIs](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api) created via Studio will be visible on this dropdown).


![](https://i.imgur.com/rjVWiGI.png)

4. To download these API usage metrics:
    - Select the API. 
    - Click the **Export** button. 
    - Select the parameters(/files) you would like to download. To download all the metrics click the last link. 
    - Click **Export**. 


![](https://i.imgur.com/Vazaupi.png)

5. All the matrices can be filtered and viewed for a period of time by selecting the time from the drop-down (for example, last 7 days, last 90 days). 
    - If you want to see the metrics for a custom range (for example 21st Sept to 23rd Sept), click **Custom** and select the range. 

<img src="https://i.imgur.com/Sf2o7Vc.png" alt="drawing" width="80%"/>



-----


### 1.1 View API Usage

The below graph shows API usage by different status codes is being shown in this graph. This data is calculated on an API level.

**Different status codes and what they mean?**

* **200** - Success
* **201** - Created
* **400** - Bad request
* **403** - Forbidden
* **404** - Not found
* **500** - Internal Server error
* **504** - Gateway timeout


<img src="https://cdn.yellowmessenger.com/zQMQQXAR0BxG1622791815717.jpg" alt="drawing" width="80%"/>



### 1.2 View API Request rate

This graph displayes API request rate is the number of API requests made by the bot to other systems to get information to respond accurately to user intents. 

<img src="https://cdn.yellowmessenger.com/0fLdFcfVSDaN1622791821236.jpg" alt="drawing" width="80%"/>


### 1.3 View API latency

API latency is the amount of time an API takes to respond when called from the bot. This metric is a measure of how fast the users get what they want. Examples include: 

- Track their order
- Place a refund request
- Place and order
- Submit a sales lead

<img src="https://cdn.yellowmessenger.com/JIh7r8trOn9l1622791826792.jpg" alt="drawing" width="80%"/>



