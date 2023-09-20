---
title : Shopify
sidebar_label : Shopify
---
## 1. Introduction
Shopify is an e-commerce platform that lets merchants all over the world to build and customize online stores to sell their products. Yellow.ai offers an integration with Shopify. You can connect your Shopify store to your Yellow.ai account to offer the best support service to your customers. 

 **Benefits**

1. Sell your store products
2. Allow customers to track their orders
3. Display customer details
4. Trigger webhook events

 
## 2.Configure Shopify Integration

### Step 1: Create Shopify store app

1. Login to your Shopify account.
2. Choose the store you want to create the app for.
3. Click **Apps** on the left sidebar and click **App and sales channel settings**.

   ![](https://i.imgur.com/QbXxgpt.jpg)
4. Click **Develop apps for your app store**.

   ![](https://i.imgur.com/2RMAFEX.png)

5. Click **Create app**.

   ![](https://i.imgur.com/9wGLsYQ.png)
6. Provide a name for your app and click **Create app**.
7. In the **Admin API integration** section, select the actions you want the Yellow.ai platform to perform. For a detailed help doc, see [Custom apps](https://help.shopify.com/en/manual/apps/custom-apps) section of the Shopify documentation.

   ![](https://i.imgur.com/vDx7dQ1.png)

  You need to enable the following scopes in the **Shopify Admin** section. 
   
  * orders_create 
  * products_create 
  * orders_cancelled 
  * orders_fulfilled 
  * orders_paid 
  * refunds_create 
  * customers_create 
  * customers_update.
  * write_scripts_tags 
  * read_script_tags

8. Go to **API credentials** section and copy the **Admin API access token** that is displayed during the app creation process on Shopify and the **API secret key**.

   ![](https://i.imgur.com/GoqZ8fk.png)


### Step 2: Connect the Shopify Store App with Yellow.ai

1. Go to cloud.yellow.ai.
2. Go to the bot and navigate to **Integrations**.

   ![](https://i.imgur.com/ctLEU4H.png)

3. Type shopify in the **Search** box, and select **Shopify Shop** from the list.
4. Scroll down to **Add account** and fill in the following fields.
   * **Give accoutn name**: Provide a name to Shopify account to be connected. 
   * **Shop Name**: Name of your shop in Shopify. The shop name should be taken from the Shopify store URL, for example if the merchant store URL is yellowxyz.myshopify.com,the shop name would be yellowxyz.
   * **Admin API Access Token**: Copy and paste this from your Shopify store (refer step 8). Please only enter the Admin API access token that is displayed during the app creation process on Shopify.
   * **API Secret Key**: Copy and paste this from your Shopify store (refer step 8)
   * **Domain name**: Domain name refers to the URL or web address that directs customers to your online store. For example, yellowxyz.myshopify.com.

   ![](https://i.imgur.com/UFJlKRz.png)

5. Click **Connect**.

   If the integration is successful, You can see the **Shopify Shop** app on the **Integrations** page. With this, the connection has been established between the integration app and your Shopify account.


:::note
Please ensure that you enter your store name exactly as it is in the **Shopify** account.
:::
   
## 3. Manage Shopify from your bot

1. Go to your bot in **Studio** and navigate to the flow where you want to use the Shopify node.
2. As the first step, collect the customer information. Use the **Question** node to collect the order ID  and store the response in a custom variable (static or dynamic value). Ensure you set the right data type for the [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables).

   ![](https://i.imgur.com/3Nr7T6u.png)
3. Add a new integration node - **Node** > **Integration** > **Shopify Shop**.
   ![](https://i.imgur.com/PygmosI.png)

4. Pass the collected value a varIn Parameters of action selected with the syntax 
   * Dynamic value: variables.{variable_name}
   * Static value: {variable_name}
   ![](https://i.imgur.com/X9e1rwL.png)
5. Use Show sample response to see all the details that the function can retrieve in the JSON format.
6. Store the response in a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables). 
   ![](https://i.imgur.com/fMgSeaw.png)

7. You can decide the info you want to display to the user. Use the **Function** node to customise that information in the **Code** tab.
   For example, in the previous screenshot, order details are stored in the variable order_details.
order_details.order.name


---


## 4. Recieve Shopify events in your bot

Once you have set up the integration, you can use webhooks to receive notifications on events occuring in your store. You can trigger customised actions to those events.

For example, you can show order details to customers when they purchase from your Shopify store. 

The following are the events supported in our out of the box Shopify integration:

| Event                | Description                                             | Use Cases                                                                                                     |
|----------------------|---------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| shopifyNewOrder      | A new order is created in the Shopify store.           | - Trigger actions when a new order is created in your Shopify store. For example, send order confirmation emails or update inventory.                                   |
| shopifyNewProduct    | A new product has been added to the Shopify store.      | - Trigger actions when a new product is added to your Shopify store. For instance, update your product catalog, create product listings, or notify your team.   |
| shopifyOrderCancelled | An order is cancelled.                                  | - Use this event to handle order cancellations. You might want to update inventory levels, refund payments, or notify customers when their orders are canceled.     |
| shopifyOrderFulfilled | An order was fulfilled or completed.                   | - Trigger actions when an order is fulfilled or completed. This event can be used to update shipping information, send shipping notifications to customers, or update your order status.  |
| shopifyOrderPaid      | Payment made for an order.                              | - Use this event to respond when a payment is made for an order. For example, you can mark orders as paid, send payment receipts, or update financial records.   |
| shopifyRefundCreated  | A refund was created for an order.                      | - Trigger actions when a refund is issued for an order. You can update financial records, notify customers about the refund, or adjust inventory levels.          |
| shopifyNewCustomer    | A new customer is registered.                           | - Use this event to respond when a new customer registers in your Shopify store. You can add them to your customer database, send welcome emails, or track customer acquisition. |
| shopifyCustomerUpdate | A customer’s profile details have been updated.         | - Trigger actions when a customer's profile details are updated. You might want to keep your customer database up to date or send profile change notifications.       |
| shopifyCheckoutCreated| Order checkout is initiated in Shopify.                 | - Respond when an order checkout is initiated in Shopify. This can be used to track the progress of orders and gather data about checkout behaviors.                |
| shopifyOrdersUpdated  | Shopify order is updated.                               | - Use this event to handle updates to existing Shopify orders. You can monitor order changes, adjust inventory, or notify customers about updates to their orders.       |
| shopifyCartCreate     | A cart is created in Shopify.                           | - Trigger actions when a cart is created in Shopify. This event can be used to track shopping cart activity, gather data on abandoned carts, or initiate cart-related marketing efforts. |
| shopifyCartEmpty      | A cart is deleted.                                      | - Use this event to respond when a cart is emptied in Shopify. You can update cart-related data, trigger follow-up actions, or analyze cart abandonment patterns.          |



## 5. Activate webhook events in your bot

1. From the bot configuration page, click  **Events hub** > **Integrations**. You will see all the supported events.
   ![](https://i.imgur.com/AkXOKfw.jpg)

2. Navigate to the event that you want to use in the bot, click the more options icon, and select **Activate**. 

3. When configuring the bot flow, in the **Start** node, choose Event and select the event that you want to use from the drop-down list.
   ![](https://i.imgur.com/kWOPYCh.png)
4. Configure the actions that you want to trigger. For details on creating a bot, see [Studio documentation](https://docs.yellow.ai/docs/platform_concepts/studio/overview).

---

## 6. Use-cases

The following business use-cases are supported in this integrtion.

### Get all collections (getAllCollections)
This function fetches all the available collections from shopify. However, to access this data, you need to enable all the relevant scopes for the custom app in Configure Storefront API scopes.

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
This function retrieves all the products under a specific collection from shopify using collection ID.

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
This function retrieves the list of all the variants of a product based on the specified product ID.

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

This function retrieves the details of an order using the specified order ID.

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
This function helps to retrieve the list of all the orders of a customer based on the specified customer ID.


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
This function retrieves the details of a customer based on their email ID.

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

### Track cart creation in Shopify (shopifyCartCreate )

This function helps you when a cart has been created in Shopify



**Sample json response object for shopifyCartCreate** 

```
{
    "userId": "6840133746837",
    "eventName": "shopifyCartCreate",
    "source": "shopify",
    "payload": {
        "token": "b9b2df63631a91eab0daa3e1833f1f70",
        "note": null,
        "attributes": {},
        "original_total_price": 3000,
        "total_price": 3000,
        "total_discount": 0,
        "total_weight": 0,
        "item_count": 1,
        "items": [
            {
                "id": 43453026762901,
                "properties": null,
                "quantity": 1,
                "variant_id": 43453026762901,
                "key": "43453026762901:159c30471db14672fe636da24f9346f2",
                "title": "Adania Pant - Black",
                "price": 3000,
                "url": "/products/adania-pant?variant=43453026762901",
                "image": "https://cdn.shopify.com/s/files/1/0458/0252/0725/files/2015-03-30_Jake_Look_16_20656_16533.jpg?v=1684943817",
                "handle": "adania-pant",
                "requires_shipping": true,
                "product_type": "",
                "product_title": "Adania Pant",
                "variant_title": "Black",
                "variant_options": [
                    "Black"
                ],
                "options_with_values": [
                    {
                        "name": "Color",
                        "value": "Black"
                    }
                ],
        "customer": {
            "id": 6840133746837,
            "email": "chirag.baid@yellow.ai",
            "accepts_marketing": false,
            "created_at": "2023-06-07T02:36:22-04:00",
            "updated_at": "2023-06-07T02:36:22-04:00",
            "first_name": "Chirag",
            "last_name": "Baid",
            "orders_count": 0,
            "currency": "INR",
            "phone": null,
            "addresses": [
                {
                    "id": 8154764738709,
                    "customer_id": 6840133746837,
                    "first_name": "Chirag",
                    "last_name": "Baid",
                    "company": null,
                    "address1": null,
                    "address2": null,
                    "city": null,
                    "province": null,
                    "country": "India",
                    "zip": null,
                    "phone": null,
                    "name": "Chirag Baid",
                    "province_code": null,
                }
            ],
        }
    },
    "userProperties": {
        "email": "ram.jeeven@gmail.com",
        "phone": null,
        "firstName": "Chirag",
        "lastName": "Baid"
    }
}

```

### Track Shopify order update (ShopifyOrdersUpdated)

This function helps you when a Shopify order hhas been updated.


**Sample json response object for shopifyCartCreate** 

```

{
    "userId": "6840133746837",
    "eventName": "shopifyOrdersUpdated",
    "source": "shopify",
    "payload": {
        "id": 820982911946154500,
        "admin_graphql_api_id": "gid://shopify/Order/820982911946154508",
        "app_id": null,
        "browser_ip": null,
        "buyer_accepts_marketing": true,
        "cancel_reason": "customer",
        "cancelled_at": "2021-12-31T19:00:00-05:00",
        "cart_token": null,
        "discount_codes": [],
        "email": "jon@example.com",
        "phone": null,
        "total_outstanding": "398.00",
        "total_price": "403.00",
        "customer": {
            "id": 115310627314723950,
            "email": "john@example.com",
            "accepts_marketing": false,
            "created_at": null,
            "updated_at": null,
            "first_name": "John",
            "last_name": "Smith",
            "default_address": {
                "id": 715243470612851200,
                "customer_id": 115310627314723950,
                "first_name": null,
                "last_name": null,
                "company": null,
                "address1": "123 Elm St."
            }
        },
        "discount_applications": [],
        "fulfillments": [],
        "line_items": [
            {
                "id": 866550311766439000,
                "admin_graphql_api_id": "gid://shopify/LineItem/866550311766439020",
                "fulfillable_quantity": 1,
                "fulfillment_service": "manual",
                "fulfillment_status": null,
                "gift_card": false,
                "grams": 567,
                "name": "IPod Nano - 8GB",
                "price": "199.00",
                "price_set": {
                    "shop_money": {
                        "amount": "199.00",
                        "currency_code": "USD"
                    },
                    "presentment_money": {
                        "amount": "199.00",
                        "currency_code": "USD"
                    }
                },
                "product_exists": true,
                "product_id": 632910392,
                "properties": [],
                "quantity": 1
            }
        ],
        "shipping_address": {
            "first_name": "Steve",
            "address1": "123 Shipping Street",
            "phone": "555-555-SHIP",
            "city": "Shippington"
        }
    },
    "userProperties": {
        "email": "ram.jeeven@gmail.com",
        "phone": "918820305570",
        "firstName": "Steve",
        "lastName": "Rogers"
    }
}

```

### Track checkout initiation in Shopify (ShopifyCheckoutCreated)

This function helps you when a checkout has been initiated in Shopify.


**Sample json response object for shopifyCartCreate** 

```
{
    "userId": "6840133746837",
    "eventName": "shopifyOrdersUpdated",
    "source": "shopify",
    "payload": {
        "id": 981820079255243500,
        "token": "123123123",
        "cart_token": "eeafa272cebfd4b22385bc4b645e762c",
        "email": "example@email.com",
        "gateway": null,
        "abandoned_checkout_url": "https://checkout.local/548380009/checkouts/123123123/recover?key=example-secret-token",
            "billing_address": {
            "first_name": "Bob",
            "address1": "123 Billing Street",
            "phone": "555-555-BILL",
            "city": "Billtown",
            "last_name": "Biller",
            "address2": null,
            "name": "Bob Biller"
        },
        "shipping_address": {
            "first_name": "Steve",
            "address1": "123 Shipping Street",
            "phone": "555-555-SHIP",
            "city": "Shippington",
            "zip": "K2P0S0",
            "province": "Kentucky",
            "country": "United States",
            "last_name": "Shipper",
            "name": "Steve Shipper"
        },
        "customer": {
            "id": 603851970716743400,
            "email": "john@example.com",
            "accepts_marketing": false,
            "created_at": null,
            "updated_at": null,
            "first_name": "John",
            "last_name": "Smith",
            "orders_count": 0,
            "marketing_opt_in_level": null,
            "tax_exemptions": [],
            "email_marketing_consent": {
                "state": "not_subscribed",
                "opt_in_level": null,
                "consent_updated_at": null
            },
           "default_address": {
                "id": null,
                "customer_id": 603851970716743400,
                "first_name": null,
                "last_name": null,
                "company": null,
                "address1": "123 Elm St.",
                "address2": null,
                "city": "Ottawa",
                "province": "Ontario",
                "country": "Canada",
                "zip": "K2H7A8",
                "phone": "123-123-1234",
                "name": "",
                "default": true
            }
        }
    },
    "userProperties": {
        "email": "chirag.baid@yellow.ai",
        "phone": "918820305570",
        "firstName": "Chirag",
        "lastName": "Baid"
    }
}
```

---

## 7. Run campaigns based on Shopify events

You can initiate campaigns based on Shopify events. To know more about it, click [here](https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign).

## 8.Limitations

1. You can fetch up to 50 products a time.
2. You can use only 90kb of object size 
3. You can have upto 8 carousel images since you cannot input the Next option to see more products in the subsequent list. 

---
:::note
Abandon cart option is not available.
:::

## 9.Troubleshooting 

**Error: Your webhook is failing**

Ensure you have enabled Shopify's event in **Event Hub**. If your webhook fails more than twice, it will be removed and your application will not receive any notifications.

---

## 10. Import Shopify template

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


## 11. Disconnect Integration
To remove this integration from your bot, 

1. On the bot configuration page, go to **Integrations**.
2. Search for  **Shopify shop** > **Disconnect**.
   ![](https://i.imgur.com/5rb2Fxd.png)
   
---


### Important References 
1. [Shopify Custom Apps](https://help.shopify.com/en/manual/apps/custom-apps)
2. [Configuring Storefront data for getAllCollections integration node](https://community.shopify.com/c/shopify-apis-and-sdks/404-error-from-get-admin-collection-listings-json-for-one-store/m-p/367034/highlight/true#M19606)

