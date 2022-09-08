---
title: Add Enviroment Variables to API
sidebar_label : Add enviroment variables
---


In many cases you might have different API endpoints for different deployment environments such as staging, production and sandbox. This article explains how to configure the same on the yellow.ai:

  

1. Go to **Studio** > **Build** > **API** and 
2. Navigate to the API tab for which you wanted to add environment variables. You can also do it while adding a new API.
3. In the API URL, replace the environment/slug with {{{env.placeholder}}} and keep the rest of the URL as is.
4. On the right sidebar, click on **Configure Environment**.

![](https://i.imgur.com/reuB4e4.png)

  5. Add a placeholder for the API endpoint. For the course of this guide, we'll be using URL as the API placeholder.
  6. Below that add API endpoints for all three deployment environments.

<img  src="https://i.imgur.com/8ieZhgh.png"  alt="drawing"  width="60%"/>

7. Lastly, before making an API call, select an environment from the dropdown. Based on the environment variables you’ve configured earlier, it’ll replace {{{env.variables}}} placeholder with the value; here is it sandbox_infra.

Hence final URL end point would be https://sandbox_infra.testapi.com for sandbox infra.

![](https://i.imgur.com/fP0xs3R.png)

<img  src="https://i.imgur.com/LB3IvCT.png"  alt="drawing"  width="60%"/>


