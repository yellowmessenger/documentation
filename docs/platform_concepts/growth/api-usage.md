---
title: API usage metrics
sidebar_label: API usage
---

## Overview of API Usage

To view the API usage, follow these steps:
1. Open **Insights** > **Metrics**.
2. Select **API Usage** tab.  
3. On this page, you can monitor the following metrics:
    - [API usage](#usage)
    - [API request rate](#reqrate)
    - [API latency](#latency)

![](https://i.imgur.com/WYdus0e.png)

### Filter data for different APIs

Choose the API you want to monitor from the API drop-down list. You will see the names of the [APIs created](https://docs.yellow.ai/docs/platform_concepts/studio/api/add-api) via. Automation in this dropdown.

![](https://i.imgur.com/rjVWiGI.png)
    
### Export/Download API data

To download API usage metrics:

1. Select the API name.
2. Click the **Export** button.
3. Choose the desired API report file(s) you would like to download. To download all the metrics, click the last link. Available options include:
    - API request rate
    - API usage by status code
    - API response rate
4. Click **Export**.

![](https://i.imgur.com/Vazaupi.png)

### Filter API data for a time period

All metrics can be filtered and viewed for a specific time period. Select the time range from the dropdown menu, such as *last 7 days* or *last 90 days*. 
- If you want to see metrics for a custom range, click **Custom** and select the desired range.

<img src="https://i.imgur.com/Sf2o7Vc.png" alt="drawing" width="60%"/>



-----


## <a name="usage"></a> View API usage

The graph below displays API usage categorized by different status codes. This data is calculated on an API level.

**Different status codes and their meaning:**     
* **200** - Success
* **201** - Created
* **400** - Bad request
* **403** - Forbidden
* **404** - Not found
* **500** - Internal Server error
* **504** - Gateway timeout


<img src="https://cdn.yellowmessenger.com/zQMQQXAR0BxG1622791815717.jpg" alt="drawing" width="60%"/>

-------


## <a name="reqrate"></a> View API request rate

This graph displays the API request rate, which represents the number of API requests made by the bot to other systems in order to retrieve information needed for accurate user intent responses.


<img src="https://cdn.yellowmessenger.com/0fLdFcfVSDaN1622791821236.jpg" alt="drawing" width="60%"/>

---

## <a name="latency"></a>  View API latency

API latency measures the amount of time it takes for an API to respond when called from the bot. This metric indicates the speed at which users receive the desired information. Examples include:
- Track their order
- Place a refund request
- Place and order
- Submit a sales lead

<img src="https://cdn.yellowmessenger.com/JIh7r8trOn9l1622791826792.jpg" alt="drawing" width="70%"/>



