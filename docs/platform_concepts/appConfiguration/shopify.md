---
title : Shopify
sidebar_label : Shopify
---
## 1. Introduction
This integration helps Shopify stores automate the customer service and improve the user experience. In addition to the features of Yellow AI, it provides additional features that make the bot an effective selling channel for a Shopify business platform. 
* Showcase store offerings
* Allow  customers to browse products
* Help customers track their order status
* Show customer details
* Handle Webhook events


Yellow.ai Integration with Shopify allows you to seamlessly connect your Shopify app with the yellow.ai platform. Using this integration one can get collections, get products(by Collection, Title, Product ID), get customer details(by email), and get order details(by Customer ID). Apart from this, it also provides support for handling webhook events.


 
## 2. Integrate Yellow bot with Shopify
### Step 1: Create developer Shopify app
1. Log on to your Shopify account.
2. Select your preferred store.
3. Navigate to **Apps** > **App and sales channel settings**.

   ![](https://i.imgur.com/QbXxgpt.jpg)
4. Click **Develop apps for your app store**.

   ![](https://i.imgur.com/2RMAFEX.png)

5. Click **Create app**.

   ![](https://i.imgur.com/9wGLsYQ.png)
6. In **App name**, enter a name for the app and click **Create app**.
7. In the **Admin API access scopes** section, select the actions that you want the Yellow AI to perform. For a detailed help doc, see [Custom apps](https://help.shopify.com/en/manual/apps/custom-apps) section of the Shopify documentation.

   ![](https://i.imgur.com/vDx7dQ1.png)

8. Navigate to API Credentials and copy the API key and API secret key.

   ![](https://i.imgur.com/91ng6dO.png)



### Step 2: Connect your app with Yellow Bot

1. Log on to the Yellow AI Platform
2. Go to the bot and navigate to **Integrations**.

   ![](https://i.imgur.com/ctLEU4H.png)

3. Type shopify in the Search box, and select Shopify Shop from the list.
4. Scroll down to Add account and enter the following details.
   i. Enter the **Shop name**.
   ii. Paste **Admin API access token** and **API secret key**.
   ![](https://i.imgur.com/Y6KFBfR.jpg)
5. Click Connect.

   If the integration is successful, You can see the Shopify Shop app on the Integrations page. With this, the connection has been established between the integration app and your Shopify account.


---

   
## 3. Use Shopify functions in your bot flow
1. Open the bot Studio and navigate to the conversation flow where you want to use the Shopify node.
2. You first need to collect information from the user. Use the Question node to collect the order ID  and store the response in a custom variable (static or dynamic value). Ensure you set the right data type for the variable.

   ![](https://i.imgur.com/3Nr7T6u.png)
3. Add a new integration node - **Node** > **Integration** > **Shopify Shop**.
   ![](https://i.imgur.com/PygmosI.png)

4. Pass the collected value a varIn Parameters of action selected with the syntax 
   * Dynamic value: variables.{variable_name}
   * Static value: {variable_name}
   ![](https://i.imgur.com/X9e1rwL.png)
5. Use Show sample response to see all the details that the function can retrieve in the JSON format.
6. Store the response in a variable. 
   ![](https://i.imgur.com/fMgSeaw.png)

7. Now, you can decide what information you want to show for the user. Use the Function node to customise the information that you want to display in the Code tab.
   For example, in the preceding example, order details are stored in the variable order_details.
order_details.order.name



---


## 4. Use Shopify Webhook events in your bot

Once you have connected your Shopify Shop integration to a bot, you can use Webhook subscriptions to receive notifications about a particular event in your shop. You can trigger customised actions for a specific event using the bot flow. 

For example, you can show order details to the customer when he makes a transaction in your Shopify store. 
The following are the events supported out of the box with Shopify integration:

Event | Description
----- | -----------
shopifyNewOrder | A new order created in the Shopify store.
shopifyNewProduct | A new product has been added to the Shopify store.
shopifyOrderCancelled | An order canceled
shopifyOrderFulfilled | An order was fulfilled or completed.
shopifyOrderPaid | Payment made for an order. 
shopifyRefundCreated | Refund created for an order.
shopifyNewCustomer | A new customer is registered
shopifyCustomerUpdate | A customer’s profile details have been updated.

### Activate events to use in your bot
1. From the bot configuration page, click to **Events hub** > **Integrations**.You will see all the supported events.
   ![](https://i.imgur.com/AkXOKfw.jpg)

2. Navigate to the event that you want to use in the bot, click the more options icon, and select **Activate**. 

3. When configuring the bot flow, in the **Start** node, choose Event and select the event that you want to use from the drop-down list.
   ![](https://i.imgur.com/kWOPYCh.png)
4. Configure the actions that you want to trigger. For details on creating a bot, see [Studio documentation](https://docs.yellow.ai/docs/platform_concepts/studio/overview).



---


## 5. Integration nodes for Shopify 
### Get all collections (getAllCollections)
This integration node helps fetch all the available collections from shopify. However, to access this data, you need to enable all the relevant scopes for the custom app in Configure Storefront API scopes.

   ![](https://i.imgur.com/taAOp16.png)


**Sample json response object for getAllCollections**

```{
  "collection_listings": [
    {
      "collection_id": 482865238,
      "updated_at": "2022-02-03T16:53:36-05:00",
      "body_html": "<p>The best selling ipod ever</p>",
      "default_product_image": null,
      "handle": "smart-ipods",
      "image": {
        "created_at": "2022-02-03T16:53:36-05:00",
        "src": "https://cdn.shopify.com/s/files/1/0005/4838/0009/collections/ipod_nano_8gb.jpg?v=1643925216"
      },
      "title": "Smart iPods",
      "sort_order": "manual",
      "published_at": "2017-08-31T20:00:00-04:00"
    }
  ]
  }
```


### Get products by collection (getProductsByCollection)
This function helps you retrieve all the products of a specific collection from shopify by collection ID.

Parameter | Datatype | Example
--------- | ------- | --------
collection_id | String | 76854321


**Sample json response object for getProductsByCollection**



```{
  "products": [
    {
      "id": 632910392,
      "title": "IPod Nano - 8GB",
      "variants": [
        {
          "id": 808950810,
          "product_id": 632910392,
          "title": "Pink",
          "price": "199.00"
        }
      ]
    }
  ]
}
```

### Get products by collection (getProductsByCollection)
This function helps you retrieve all the products of a specific collection from Shopify by collection ID.


Parameter | Datatype | Example
--------- | -------- | -------
collection_id | String | 76854321

**Sample json response object for getProductsByCollection**-

```
{
  "products": [
    {
      "id": 632910392,
      "title": "IPod Nano - 8GB",
      "variants": [
        {
          "id": 808950810,
          "product_id": 632910392,
          "title": "Pink",
          "price": "199.00"
        }
      ]
    }
  ]
}
```

### Get product details (getProductDetails)
This function helps you retrieve the details of a specific product using the product ID.

Parameter | Datatype | Example
--------- | -------- | -------
product_id | Number  | 632910392


**Sample json response object for getProductDetails** -

```
{
  "product": {
    "id": 632910392,
    "title": "IPod Nano - 8GB",
    "product_type": "Cult Products",
    "variants": [
      {}
    ]
  }
}
```

### Get products by name (getProductsByTitle)
This function helps to retrieve the list of products with the specified title.

Parameter | Datatype | Example
-------- | -------- | -------
title | String | Ipad Nano

**Sample json response object for getProductsByTitle** -

```
{
  "products": [
    {
      "id": 632910392,
      "title": "IPod Nano - 8GB",
      "variants": [
        {
          "id": 808950810,
          "product_id": 632910392,
          "title": "Pink",
          "price": "199.00"
        }
      ]
    }
  ]
}
```

### Get product variants (getProductVariants)
This function helps to retrieve the list of all the available variants of a product based on the specified product ID.

Parameter | Datatype | Example
-------- | --------- | --------
product_id |Number | 632910392


**Sample json response object for getProductVariants** -

```
{
  "variants": [
    {
      "id": 39072856,
      "product_id": 632910392,
      "title": "Green",
      "price": "199.00",
      "sku": "IPOD2008GREEN"
    }
  ]
}
```

### Get order details (getOrderDetails)

This function (integration node) helps to retrieve the details of an order using the specified order ID.

Parameter | Datatype | Example
-------- | --------- | -------
order_id | Number | 632910392


**Sample json response object for getOrderDetails** -

```
{
  "order": {
    "id": 450789469,
    "cancel_reason": null,
    "cancelled_at": null,
    "confirmed": true,
    "email": "bob.norman@hostmail.com",
    "financial_status": "partially_refunded",
    "fulfillment_status": null,
    "name": "#1001"
  }
}
```

### Get orders by customer ID (getOrdersByCustomerId)
This function helps to retrieve the list of all the available orders of a customer based on the specified customer ID.

Parameter | Datatype | Example
-------- | ---------- | -------
customer_id | Number | 632910392


**Sample json response object for getOrdersByCustomerId** -

```
{
  "orders": [
    {
      "id": 450789469,
      "email": "bob.norman@hostmail.com",
      "created_at": "2008-01-10T11:00:00-05:00",
      "updated_at": "2008-01-10T11:00:00-05:00",
      "total_price": "598.94",
      "financial_status": "partially_refunded"
    }
  ]
}
```

### Get customer details by email (findCustomerbyEmail)
This function helps to retrieve the details of a customer based on the email ID specified.

Parameter | Datatype | Example
--------- | -------- | -------
email | String | johndoe@example.com


Sample json response object for findCustomerbyEmail -

```
{
  "customers": [
    {
      "id": 207119551,
      "email": "bob.norman@hostmail.com",
      "created_at": "2021-04-01T17:28:57-04:00",
      "updated_at": "2021-04-01T17:28:57-04:00",
      "first_name": "Bob",
      "last_name": "Norman",
      "orders_count": 1,
      "total_spent": "199.65",
      "last_order_id": 450789469,
      "verified_email": true,
      "phone": "+16136120707"
    }
  ]
}
```



---


## 6. Limitations
You can 
* fetch up to 50 products a time.
* Use only 90kb of object size 
* have upto 8 carousel images as you cannot input the Next option to see more products in the subsequent list. 



---



## 7. Import Shopify template
Now that the connection has been established with the Shopify app, you need to import the Shopify template in your bot to use the predefined flows of the app. 

To use Shopify shop template:
1. Navigate to the **Marketplace** and search for Shopify. You will see the Shopify e-commerce bot template.
   ![](https://i.imgur.com/Ybifauf.jpg)

2. Hover on the card and click **+Use Template**.
  ![](https://i.imgur.com/n4PNrUk.png)
3. Select the bot where you want to import the template.
   ![](https://i.imgur.com/aHWXZeg.png)
4. Click **Use template**. The template will start importing. Wait until the import is complete.
5. Open the **Flows** dropdown to see the new flows added to the bot.

   ![](https://i.imgur.com/egnlj5M.png)
   


---


## 8. Disconnect Integration
To remove an integration from your bot, follow these steps -
1. On the bot configuration page, go to **Integration**.
2. In the Connected apps list, click **Shopify shop** > **Disconnect**.
   ![](https://i.imgur.com/5rb2Fxd.png)
   
   

---



### Important References -
1. [Shopify Custom Apps](https://help.shopify.com/en/manual/apps/custom-apps)
2. [Configuring Storefront data for getAllCollections integration node](https://community.shopify.com/c/shopify-apis-and-sdks/404-error-from-get-admin-collection-listings-json-for-one-store/m-p/367034/highlight/true#M19606)

