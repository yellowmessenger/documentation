---
title: Using Enviroment Variables in the API
sidebar_label : Enviroment Variables for API
---

## Use different API endpoint for different deployment environment

In many cases you might have different API endpoints for different deployment environments such as staging, production and sandbox.

Let’s see how to configure the same on the yellow.ai in this doc:

1. Checkout Studio > Builder > API and open an API tab or create a new API. 
In the API URL, replace the environment/slug with {{{env.placeholder}}} and keep the rest of the URL the same.
From the right sidebar, click on `Configure Environment`.

![](https://i.imgur.com/reuB4e4.png)

2. Add a placeholder for the API endpoint. For the course of this guide, we'll be using URL as an API placeholder.
Below that add API endpoints for all three deployment environments.

<img src="https://i.imgur.com/8ieZhgh.png" alt="drawing" width="60%"/>

3. Lastly, before making an API call select an environment from the dropdown. Based on the environment variables you’ve configured earlier, it’ll replace {{{env.variables}}} placeholder with the value; here is it sandbox_infra.
Hence final URL end point would be https://sandbox_infra.testapi.com for sandbox infra.

![](https://i.imgur.com/fP0xs3R.png)
<img src="https://i.imgur.com/LB3IvCT.png" alt="drawing" width="60%"/>



