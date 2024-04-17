---
title: Steps to Fix Data Errors in a database table when new data is uploaded/inserted
sidebar_label : Fix data errors in database
---

Fixing data errors is essential for maintaining the accuracy, reliability, and usability of the information stored in a database table. This is particularly important for performing searches, as data errors can prevent the successful retrieval of new information that is added to the table.

**![](https://lh7-us.googleusercontent.com/y2M-8FNaJzRYgZ32m3nXHuiZFXOOtLi9BWqI2qXAp4HEdHudQhjfgSqYQF-qqRUrVxOTfp3xzBS9JBtyuLpU1cuZKqbnI3OXTo3MhaXIXhbLrEIiZ0fh9qTwX2xmyAzSJ9J0E9z1UKKKUumjYebTWWw)**

## Step 1: Run cURL

Run the below curL on Postman- (Production/ Staging/ Sandbox)

```
curl --location 'https://app.yellow.ai/api/data/data/reIndex?bot=x1611920798285&collection=customer_details' \
--header 'x-auth-token: 8a4f1e914fceb6fe69df01f27da4a9a0594980694d79d52dcf50b60850c91d1a6V77z4YIES88iN-CbDE3j'

```

## Step 2: Add cookie editor extension

Download and add the cookie editor extension to Chrome for running the cookie and generating the x-auth-token (Production/ Staging/ Sandbox).


## Step 3: Generate x-auth-token key

x-api-key isn’t suitable for use here, generate the x-auth-token key.

1. Open cookie-editor extension on the database table for the table you want to **Fix data errors**.
    
**![](https://lh7-us.googleusercontent.com/adxpFfG7yeJtVb9KBNkSsGgULvYUDzSpwfuuWLutCSAFEk2aKuSDOJyLGWrFWJdvn6HS4qy0OF2ORd8q90PlQ2HxNSf4NP245BO_iW8smu5PB1AjypY_I8KBW4gSYDMoLZ7ESEd7i_jPQBwEwT0ZFRE)**

2. Select the value under **ym_xid**. 
    
**![](https://lh7-us.googleusercontent.com/ZG34rfKx3ItZ4Gnojg8-qPCJXnMeZNQZ2LXfiwPLOH7zwE13UYRAB4ZVONOqETkIGFNrrTF9aNAac5LdvjYbvRz03RdybcejmEowZeEGsGhJHiwB7azpLBj_atMs3xuwPuBVLCDfMh-08_PqZsJvY3k)**

3. Paste the value under **Headers** in Postman with key as x-auth-token.

**![](https://lh7-us.googleusercontent.com/ZFfxMGb4gofRqEdvmxJxSaJ2svo1qVRMGAZxohzdfGLYj8Zi5_lSduwqdm3PVGYTtB_Yrv8bMyJCllC8PpPgC15e8pTZMXqI15DmqRrRx_uuuLMpMb3-m50qoBm56Kuj-Z8v4djWrgfVtLRWQb0EsSY)**

## Step 4: Verify database

Open the Database table, refresh the page, and verify whether the *Fix data errors* issue has been resolved in the table.



**Sample response**:

```
{
"success": true,
"message": "re-index",
"data": "done",
"subscriptionExceeded": false
}
```














