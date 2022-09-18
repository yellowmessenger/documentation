---
title: Add Enviroment Variables to API
sidebar_label : Add enviroment variables
---


In many cases you might have different API endpoints for different deployment environments such as staging, production and sandbox. This article explains how to configure the same on the yellow.ai:

  

1. Go to **Studio** > **Build** > **API**.
2. Navigate to the API tab for which you wanted to add environment variables. You can also do it while adding a new API.
3. In the API URL, replace the host URL with a variable. 
4. Add a placeholder for the API endpoint. 
> In the example, we have used host as the API placeholder.
  ![](https://i.imgur.com/qHQFY4u.png)
5. On the right sidebar, click on **Configure Environment**.

   ![](https://i.imgur.com/bybT0Eh.png)
6. Enter API endpoints for each environment.

   <img  src="https://i.imgur.com/xIldDOM.png"  alt="drawing"  width="80%"/>


7. Lastly, before making an API call, select an environment from the dropdown. Based on the environment variables you’ve configured earlier, it’ll replace {{{env.variables}}} placeholder with the value.

```
https://{{{env.url}}}/data/2.5/weather?q={city name}&appid={API key}
```

![](https://i.imgur.com/fP0xs3R.png)

<img  src="https://i.imgur.com/LB3IvCT.png"  alt="drawing"  width="60%"/>


