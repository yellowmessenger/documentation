---
title : Shopify
sidebar_label : Shopify
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 1. Introduction

Shopify is an e-commerce platform that lets merchants worldwide to build and customize online stores to sell theor products. Integrating Shopify with Yellow.ai enables seamless access to Shopify data within our platform. This integration facilitates data utilization for effective campaigns, event management, and enhanced customer support. 

**Here are some key benefits of leveraging this integration**:

* **Unified customer data & customer self-serve**: Gain a 360-degree view of your customers by integrating their Shopify data with other touchpoints. You can enable customers to access their data and order details conveniently through bot conversations.
* **Personalized campaigns and automated workflows**: Leverage customer data to create targeted marketing campaigns, boost sales and create automated workflows.
* **Better support with multi-channel**: Provide better customer support by accessing order history and customer details directly from Shopify and interact across various channels, including chat, email, Whatsapp and more.
* **Time and Cost Saving**s: Reduce manual data entry, streamline processes, and save time and resources by automating tasks.


## 2.Integrate Shopify with Yellow.ai

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

   <img src="https://i.imgur.com/vDx7dQ1.png" alt="drawing" width="80%"/>
  

8. In **Shopify admin**, choose both *Read* and *Write* access to following scopes.

  <img src="https://i.imgur.com/ULr6bbW.png" width="70%"/>

  Scope | Description
  ------ | ----------
  Customers | Access and manage customers, including their addresses, order history, and segments.
  Orders | Retrieve and manage orders, transactions, fulfillments, and abandoned checkouts.
  Products | View and manage products, variants, and collections.
  Returns | View and manage return orders.
  Script tags | View and manage javascript tags for store front and order status pages.


### Step 2: Get Admin API access credentials

* Go to **API credentials** section and copy the **Admin API access token** and **API secret key**.

   ![](https://i.imgur.com/GoqZ8fk.png)


### Step 3: Connect the Shopify Store App with Yellow.ai

You need to use the API token to establish integration with Yellow.ai as explained below:

1. Go to the [yellow.ai platform].
2. Go to the bot and navigate to **Integrations**.

   
   <img src="https://i.imgur.com/ctLEU4H.png" alt="drawing" width="65%"/>

3. Type shopify in the **Search** box, and select **Shopify Shop** from the list.
4. Scroll down to **Add account** and fill in the required details.

   ![](https://i.imgur.com/UFJlKRz.png)

   Option | Description
   ------ | -----------
   **Give accout name** | Provide a name to Shopify account to be connected. 
   **Shop Name** | Name of your shop in Shopify. The shop name should be taken from the Shopify store URL, for example if the merchant store URL is yellowxyz.myshopify.com,the shop name would be yellowxyz.
   **Admin API Access Token** | Copy and paste this from your Shopify store (refer step 8). Please only enter the Admin API access token that is displayed during the app creation process on Shopify.
   **API Secret Key** | Copy and paste this from your Shopify store (refer step 8)
   **Domain name** | Domain name refers to the URL or web address that directs customers to your online store. For example, yellowxyz.myshopify.com.



5. Click **Connect**.

   If the integration is successful, You can see the **Shopify Shop** app on the **Integrations** page. With this, the connection has been established between the integration app and your Shopify account.


:::note
* Please ensure that you enter your store name exactly as it appears in your Shopify account.
* For the initial user backfilling of the recent 10k user data, please reach out to the team to initiate the process.
:::

***



## 3. Shopify user data syncing in User 360/Engage

This integration automates the creation of user records in User 360 using Shopify event data. By default, it is configured to capture userIds, emails, and phone numbers. Additionally, the integration enables the automatic synchronization of the following event data with User 360. This empowers User 360 as a valuable resource for personalized and effective user engagement strategies.

### Supported standard user properties from Shopify events

The following standard user properties are automatically added or updated in User 360 directly from Shopify events.

* userId
* email
* firstName
* phone
* city
* country



### Supported Shopify events syncing in User 360

The integration enables the automatic synchronization of the following event data with User 360. This empowers User 360 as a valuable resource for personalized and effective user engagement strategies.

   <img src="https://i.imgur.com/1WBYJEt.png"/>


The following table provides a comprehensive list of Shopify events along with their descriptions and sample use cases.



  | Event  | Description    | Sample use cases      |
  |--------|----------------|----------------------|
  | shopifyNewOrder  | A new order is created in the Shopify store.   | Trigger order confirmation email or update inventory when a new order is created in your Shopify store.                                  |
  | shopifyNewProduct  | A new product has been added to the Shopify store.  | Update product catalog, create product listings, or send a WhatsApp notification when a new product is added to your Shopify store.  |
  | shopifyOrderCancelled | An order is cancelled. | Handle order cancellation: Update inventory levels, refund payments, or notify customers when their orders are canceled. |
  | shopifyOrderFulfilled | An order was fulfilled or completed.   | Update shipping information, send shipping notifications to the customer, or update order status when an order is fulfilled or completed.  |
  | shopifyOrderPaid      | Payment made for an order. | Send payment receipt, or update financial record when a payment is made for an order.   |
  | shopifyRefundCreated  | A refund was created for an order.  | Update financial records, notify customers about their refund, or adjust inventory levels when a refund is issued for an order. |
  | shopifyReturnRequest | A return request is initiated. | Helpful for handling return-related processes, such as notifying customers and managing inventory. |
  | shopifyNewCustomer    | A new customer is registered.  | Add the customer to User 360, send welcome email, or track customer acquisition when a new customer registers in your Shopify store. |
  | shopifyCustomerUpdate | A customer’s profile details have been updated. | Keep your customer database up to date or send profile change notification when a customer's profile details are updated. |
  | shopifyCheckoutCreated| Order checkout is initiated in Shopify. | Track order progress when an order checkout is initiated in your Shopify store.    |
  | shopifyOrdersUpdated  | Shopify order is updated.  | Monitor order changes, adjust inventory, or notify the customer on order updates to handle order updates in Shopify store.  |
  | shopifyCartCreate     | A cart is created in Shopify.   | Track shopping cart activity, gather data on abandoned carts, or initiate cart-related marketing efforts when a cart is created in Shopify store. |


:::note
To know how to run campaigns based on Shopify events, see [here](#run-campaigns-based-on-shopify-events).
:::

### Payload samples of Shopify events in User 360

The following are the event schemas associated with various Shopify events. These event schemas define the structure and data that get sent to the CDP when specific events occur in your Shopify store.

<Tabs class="tabs-schema">


<TabItem value="shopifyCartCreate" label="shopifyCartCreate" default>

**From SDK**

```js
{
    "token": "c1-830e691d16f1093cfcde75960320d9cd",
    "note": "",
    "attributes": {},
    "original_total_price": 3000,
    "total_price": 3000,
    "total_discount": 0,
    "total_weight": 0,
    "item_count": 1,
    "items": [
        {
            "id": 43453026762901,
            "properties": {},
            "quantity": 1,
            "variant_id": 43453026762901,
            "key": "43453026762901:159c30471db14672fe636da24f9346f2",
            "title": "Adania Pant - Black",
            "price": 3000,
            "original_price": 3000,
            "discounted_price": 3000,
            "line_price": 3000,
            "original_line_price": 3000,
            "total_discount": 0,
            "discounts": [],
            "sku": "",
            "grams": 0,
            "vendor": "twewr",
            "taxable": true,
            "product_id": 7907558064277,
            "product_has_only_default_variant": false,
            "gift_card": false,
            "final_price": 3000,
            "final_line_price": 3000,
            "url": "/products/adania-pant?variant=43453026762901",
            "featured_image": {
                "aspect_ratio": 0.714,
                "alt": "Adania Pant",
                "height": 2048,
                "url": "https://cdn.shopify.com/s/files/1/0458/0252/0725/files/2015-03-30_Jake_Look_16_20656_16533.jpg?v=1684943817",
                "width": 1462
            },
            "image": "https://cdn.shopify.com/s/files/1/0458/0252/0725/files/2015-03-30_Jake_Look_16_20656_16533.jpg?v=1684943817",
            "handle": "adania-pant",
            "requires_shipping": true,
            "product_type": "",
            "product_title": "Adania Pant",
            "product_description": "\\nThis is a demonstration store. You can purchase products like this from Baby & Company\\nSuper stretch Adaina Pant offers the classic skinny with all the fun bits. Zip closure at back with concealed zip openings at ankles. By Malene Birger. Color Blue.  90% Polyamide, 10% Elastane. Made in China. Ashley is wearing a European 36. ",
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
            "line_level_discount_allocations": [],
            "line_level_total_discount": 0,
            "quantity_rule": {
                "min": 1,
                "max": null,
                "increment": 1
            },
            "has_components": false
        }
    ],
    "requires_shipping": true,
    "currency": "INR",
    "items_subtotal_price": 3000,
    "cart_level_discount_applications": [],
    "userId": "x1660667398488_WIv23Iv-fr-McW_SZme-l"
}


```

</TabItem>



<TabItem value="ShopifyCheckoutCreated" label="ShopifyCheckoutCreated" default>

```js
{
    "id": 35481578373269,
    "token": "3d58ad45d661cd34d882fda5c68a36b8",
    "cart_token": "c1-830e691d16f1093cfcde75960320d9cd",
    "email": null,
    "gateway": null,
    "buyer_accepts_marketing": false,
    "buyer_accepts_sms_marketing": false,
    "sms_marketing_phone": null,
    "created_at": "2023-09-22T12:13:51+00:00",
    "updated_at": "2023-09-22T08:13:59-04:00",
    "landing_site": "/",
    "note": "",
    "note_attributes": [],
    "referring_site": "",
    "shipping_lines": [],
    "shipping_address": [],
    "taxes_included": false,
    "total_weight": 0,
    "currency": "INR",
    "completed_at": null,
    "phone": null,
    "customer_locale": "en-IN",
    "line_items": [
        {
            "key": "43453026762901",
            "fulfillment_service": "manual",
            "gift_card": false,
            "grams": 0,
            "presentment_title": "Adania Pant",
            "presentment_variant_title": "Black",
            "product_id": 7907558064277,
            "quantity": 1,
            "requires_shipping": true,
            "sku": "",
            "tax_lines": [
                {
                    "position": 1,
                    "price": "2.70",
                    "rate": 0.09,
                    "title": "CGST",
                    "source": "Shopify",
                    "compare_at": null,
                    "zone": "country",
                    "channel_liable": false,
                    "identifier": null
                }
            ],
            "taxable": true,
            "title": "Adania Pant",
            "variant_id": 43453026762901,
            "variant_title": "Black",
            "variant_price": "30.00",
            "vendor": "twewr",
            "unit_price_measurement": {
                "measured_type": null,
                "quantity_value": null,
                "quantity_unit": null,
                "reference_value": null,
                "reference_unit": null
            },
            "compare_at_price": null,
            "line_price": "30.00",
            "price": "30.00",
            "applied_discounts": [],
            "destination_location_id": null,
            "user_id": null,
            "rank": null,
            "origin_location_id": null,
            "properties": null
        }
    ],
    "name": "#35481578373269",
    "abandoned_checkout_url": "https://twewr.myshopify.com/45802520725/checkouts/ac/c1-830e691d16f1093cfcde75960320d9cd/recover?key=a745691198001ff07b2f08d7233541a8",
    "discount_codes": [],
    "tax_lines": [
        {
            "price": "2.70",
            "rate": 0.09,
            "title": "CGST"
        }
    ],
    "presentment_currency": "INR",
    "source_name": "web",
    "total_line_items_price": "30.00",
    "total_tax": "2.70",
    "total_discounts": "0.00",
    "subtotal_price": "30.00",
    "total_price": "32.70",
    "total_duties": "0.00",
    "device_id": null,
    "user_id": null,
    "location_id": null,
    "source_identifier": null,
    "source_url": null,
    "source": null,
    "closed_at": null
}


```

</TabItem>

  
<TabItem value="shopifyNewOrder" label="shopifyNewOrder" default>


```json
{
    "id": 5159806763157,
    "admin_graphql_api_id": "gid://shopify/Order/5159806763157",
    "app_id": 580111,
    "browser_ip": "49.43.249.107",
    "buyer_accepts_marketing": false,
    "cancel_reason": null,
    "cancelled_at": null,
    "cart_token": "c1-830e691d16f1093cfcde75960320d9cd",
    "checkout_id": 35481578373269,
    "checkout_token": "3d58ad45d661cd34d882fda5c68a36b8",
    "client_details": {
        "accept_language": "en-IN",
        "browser_height": null,
        "browser_ip": "49.43.249.107",
        "browser_width": null,
        "session_hash": null,
        "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
    },
    "closed_at": null,
    "company": null,
    "confirmation_number": "XPLMPXRME",
    "confirmed": true,
    "contact_email": "tom@gmail.com",
    "created_at": "2023-09-22T08:14:46-04:00",
    "currency": "INR",
    "current_subtotal_price": "30.00",
    "current_subtotal_price_set": {
        "shop_money": {
            "amount": "30.00",
            "currency_code": "INR"
        },
        "presentment_money": {
            "amount": "30.00",
            "currency_code": "INR"
        }
    },
    "current_total_additional_fees_set": null,
    "current_total_discounts": "0.00",
    "current_total_discounts_set": {
        "shop_money": {
            "amount": "0.00",
            "currency_code": "INR"
        },
        "presentment_money": {
            "amount": "0.00",
            "currency_code": "INR"
        }
    },
    "current_total_duties_set": null,
    "current_total_price": "30.00",
    "current_total_price_set": {
        "shop_money": {
            "amount": "30.00",
            "currency_code": "INR"
        },
        "presentment_money": {
            "amount": "30.00",
            "currency_code": "INR"
        }
    },
    "current_total_tax": "0.00",
    "current_total_tax_set": {
        "shop_money": {
            "amount": "0.00",
            "currency_code": "INR"
        },
        "presentment_money": {
            "amount": "0.00",
            "currency_code": "INR"
        }
    },
    "customer_locale": "en-IN",
    "device_id": null,
    "discount_codes": [],
    "email": "tom@gmail.com",
    "estimated_taxes": false,
    "financial_status": "paid",
    "fulfillment_status": null,
    "landing_site": "/",
    "landing_site_ref": null,
    "location_id": null,
    "merchant_of_record_app_id": null,
    "name": "#1085",
    "note": null,
    "note_attributes": [],
    "number": 85,
    "order_number": 1085,
    "order_status_url": "https://twewr.myshopify.com/45802520725/orders/24a0946393b4889192c0d7056751e889/authenticate?key=c60f3a72f52578b00cc7cb8551811cbc",
    "original_total_additional_fees_set": null,
    "original_total_duties_set": null,
    "payment_gateway_names": [
        "bogus"
    ],
    "phone": null,
    "po_number": null,
    "presentment_currency": "INR",
    "processed_at": "2023-09-22T08:14:43-04:00",
    "reference": "6925f7d584e825b7f3fdbf5de7b3a5e1",
    "referring_site": "",
    "source_identifier": "6925f7d584e825b7f3fdbf5de7b3a5e1",
    "source_name": "web",
    "source_url": null,
    "subtotal_price": "30.00",
    "subtotal_price_set": {
        "shop_money": {
            "amount": "30.00",
            "currency_code": "INR"
        },
        "presentment_money": {
            "amount": "30.00",
            "currency_code": "INR"
        }
    },
    "tags": "",
    "tax_exempt": false,
    "tax_lines": [],
    "taxes_included": false,
    "test": true,
    "token": "24a0946393b4889192c0d7056751e889",
    "total_discounts": "0.00",
    "total_discounts_set": {
        "shop_money": {
            "amount": "0.00",
            "currency_code": "INR"
        },
        "presentment_money": {
            "amount": "0.00",
            "currency_code": "INR"
        }
    },
    "total_line_items_price": "30.00",
    "total_line_items_price_set": {
        "shop_money": {
            "amount": "30.00",
            "currency_code": "INR"
        },
        "presentment_money": {
            "amount": "30.00",
            "currency_code": "INR"
        }
    },
    "total_outstanding": "0.00",
    "total_price": "30.00",
    "total_price_set": {
        "shop_money": {
            "amount": "30.00",
            "currency_code": "INR"
        },
        "presentment_money": {
            "amount": "30.00",
            "currency_code": "INR"
        }
    },
    "total_shipping_price_set": {
        "shop_money": {
            "amount": "0.00",
            "currency_code": "INR"
        },
        "presentment_money": {
            "amount": "0.00",
            "currency_code": "INR"
        }
    },
    "total_tax": "0.00",
    "total_tax_set": {
        "shop_money": {
            "amount": "0.00",
            "currency_code": "INR"
        },
        "presentment_money": {
            "amount": "0.00",
            "currency_code": "INR"
        }
    },
    "total_tip_received": "0.00",
    "total_weight": 0,
    "updated_at": "2023-09-22T08:14:47-04:00",
    "user_id": null,
    "billing_address": {
        "first_name": null,
        "address1": "Chennai",
        "phone": "90909 09090",
        "city": "Chennai",
        "zip": "600012",
        "province": "Tamil Nadu",
        "country": "India",
        "last_name": "Baid",
        "address2": "Chennai",
        "company": null,
        "latitude": 13.098633,
        "longitude": 80.2596083,
        "name": "Baid",
        "country_code": "IN",
        "province_code": "TN"
    },
    "customer": {
        "id": 6989864763541,
        "email": "tom@gmail.com",
        "accepts_marketing": false,
        "created_at": "2023-09-22T08:14:44-04:00",
        "updated_at": "2023-09-22T08:14:46-04:00",
        "first_name": null,
        "last_name": "Baid",
        "state": "disabled",
        "note": null,
        "verified_email": true,
        "multipass_identifier": null,
        "tax_exempt": false,
        "phone": null,
        "email_marketing_consent": {
            "state": "not_subscribed",
            "opt_in_level": "single_opt_in",
            "consent_updated_at": null
        },
        "sms_marketing_consent": null,
        "tags": "",
        "currency": "INR",
        "accepts_marketing_updated_at": "2023-09-22T08:14:44-04:00",
        "marketing_opt_in_level": null,
        "tax_exemptions": [],
        "admin_graphql_api_id": "gid://shopify/Customer/6989864763541",
        "default_address": {
            "id": 8320474546325,
            "customer_id": 6989864763541,
            "first_name": null,
            "last_name": "Baid",
            "company": null,
            "address1": "Chennai",
            "address2": "Chennai",
            "city": "Chennai",
            "province": "Tamil Nadu",
            "country": "India",
            "zip": "600012",
            "phone": "90909 09090",
            "name": "Baid",
            "province_code": "TN",
            "country_code": "IN",
            "country_name": "India",
            "default": true
        }
    },
    "discount_applications": [],
    "fulfillments": [],
    "line_items": [
        {
            "id": 12623712354453,
            "admin_graphql_api_id": "gid://shopify/LineItem/12623712354453",
            "fulfillable_quantity": 1,
            "fulfillment_service": "manual",
            "fulfillment_status": null,
            "gift_card": false,
            "grams": 0,
            "name": "Adania Pant - Black",
            "price": "30.00",
            "price_set": {
                "shop_money": {
                    "amount": "30.00",
                    "currency_code": "INR"
                },
                "presentment_money": {
                    "amount": "30.00",
                    "currency_code": "INR"
                }
            },
            "product_exists": true,
            "product_id": 7907558064277,
            "properties": [],
            "quantity": 1,
            "requires_shipping": true,
            "sku": "",
            "taxable": true,
            "title": "Adania Pant",
            "total_discount": "0.00",
            "total_discount_set": {
                "shop_money": {
                    "amount": "0.00",
                    "currency_code": "INR"
                },
                "presentment_money": {
                    "amount": "0.00",
                    "currency_code": "INR"
                }
            },
            "variant_id": 43453026762901,
            "variant_inventory_management": "shopify",
            "variant_title": "Black",
            "vendor": "twewr",
            "tax_lines": [],
            "duties": [],
            "discount_allocations": []
        }
    ],
    "payment_terms": null,
    "refunds": [],
    "shipping_address": {
        "first_name": null,
        "address1": "Chennai",
        "phone": "90909 09090",
        "city": "Chennai",
        "zip": "600012",
        "province": "Tamil Nadu",
        "country": "India",
        "last_name": "Baid",
        "address2": "Chennai",
        "company": null,
        "latitude": 13.098633,
        "longitude": 80.2596083,
        "name": "Baid",
        "country_code": "IN",
        "province_code": "TN"
    },
    "shipping_lines": [
        {
            "id": 4303065809045,
            "carrier_identifier": "650f1a14fa979ec5c74d063e968411d4",
            "code": "Standard",
            "discounted_price": "0.00",
            "discounted_price_set": {
                "shop_money": {
                    "amount": "0.00",
                    "currency_code": "INR"
                },
                "presentment_money": {
                    "amount": "0.00",
                    "currency_code": "INR"
                }
            },
            "phone": null,
            "price": "0.00",
            "price_set": {
                "shop_money": {
                    "amount": "0.00",
                    "currency_code": "INR"
                },
                "presentment_money": {
                    "amount": "0.00",
                    "currency_code": "INR"
                }
            },
            "requested_fulfillment_service_id": null,
            "source": "shopify",
            "title": "Standard",
            "tax_lines": [],
            "discount_allocations": []
        }
    ]
}

```

</TabItem>

<TabItem value="shopifyOrderFulfilled" label="shopifyOrderFulfilled" default>

```js
{
  "id": 820982911946154500,
  "admin_graphql_api_id": "gid://shopify/Order/820982911946154508",
  "app_id": null,
  "browser_ip": null,
  "buyer_accepts_marketing": true,
  "cancel_reason": "customer",
  "cancelled_at": "2021-12-31T19:00:00-05:00",
  "cart_token": null,
  "checkout_id": null,
  "checkout_token": null,
  "closed_at": null,
  "confirmed": false,
  "contact_email": "jon@example.com",
  "created_at": "2021-12-31T19:00:00-05:00",
  "currency": "USD",
  "current_subtotal_price": "398.00",
  "current_subtotal_price_set": {
    "shop_money": {
      "amount": "398.00",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "398.00",
      "currency_code": "USD"
    }
  },
  "current_total_discounts": "0.00",
  "current_total_discounts_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "USD"
    }
  },
  "current_total_duties_set": null,
  "current_total_price": "398.00",
  "current_total_price_set": {
    "shop_money": {
      "amount": "398.00",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "398.00",
      "currency_code": "USD"
    }
  },
  "current_total_tax": "0.00",
  "current_total_tax_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "USD"
    }
  },
  "customer_locale": "en",
  "device_id": null,
  "discount_codes": [],
  "email": "jon@example.com",
  "estimated_taxes": false,
  "financial_status": "voided",
  "fulfillment_status": "pending",
  "gateway": null,
  "landing_site": null,
  "landing_site_ref": null,
  "location_id": null,
  "merchant_of_record_app_id": null,
  "name": "#9999",
  "note": null,
  "note_attributes": [],
  "number": 234,
  "order_number": 1234,
  "order_status_url": "https://jsmith.myshopify.com/548380009/orders/123456abcd/authenticate?key=abcdefg",
  "original_total_duties_set": null,
  "payment_gateway_names": [
    "visa",
    "bogus"
  ],
  "phone": null,
  "presentment_currency": "USD",
  "processed_at": null,
  "processing_method": "",
  "reference": null,
  "referring_site": null,
  "source_identifier": null,
  "source_name": "web",
  "source_url": null,
  "subtotal_price": "388.00",
  "subtotal_price_set": {
    "shop_money": {
      "amount": "388.00",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "388.00",
      "currency_code": "USD"
    }
  },
  "tags": "",
  "tax_lines": [],
  "taxes_included": false,
  "test": true,
  "token": "123456abcd",
  "total_discounts": "20.00",
  "total_discounts_set": {
    "shop_money": {
      "amount": "20.00",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "20.00",
      "currency_code": "USD"
    }
  },
  "total_line_items_price": "398.00",
  "total_line_items_price_set": {
    "shop_money": {
      "amount": "398.00",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "398.00",
      "currency_code": "USD"
    }
  },
  "total_outstanding": "398.00",
  "total_price": "388.00",
  "total_price_set": {
    "shop_money": {
      "amount": "388.00",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "388.00",
      "currency_code": "USD"
    }
  },
  "total_shipping_price_set": {
    "shop_money": {
      "amount": "10.00",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "10.00",
      "currency_code": "USD"
    }
  },
  "total_tax": "0.00",
  "total_tax_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "USD"
    }
  },
  "total_tip_received": "0.00",
  "total_weight": 0,
  "updated_at": "2021-12-31T19:00:00-05:00",
  "user_id": null,
  "billing_address": {
    "first_name": "Steve",
    "address1": "123 Shipping Street",
    "phone": "555-555-SHIP",
    "city": "Shippington",
    "zip": "40003",
    "province": "Kentucky",
    "country": "United States",
    "last_name": "Shipper",
    "address2": null,
    "company": "Shipping Company",
    "latitude": null,
    "longitude": null,
    "name": "Steve Shipper",
    "country_code": "US",
    "province_code": "KY"
  },
  "customer": {
    "id": 115310627314723950,
    "email": "john@example.com",
    "accepts_marketing": false,
    "created_at": null,
    "updated_at": null,
    "first_name": "John",
    "last_name": "Smith",
    "state": "disabled",
    "note": null,
    "verified_email": true,
    "multipass_identifier": null,
    "tax_exempt": false,
    "phone": null,
    "email_marketing_consent": {
      "state": "not_subscribed",
      "opt_in_level": null,
      "consent_updated_at": null
    },
    "sms_marketing_consent": null,
    "tags": "",
    "currency": "USD",
    "accepts_marketing_updated_at": null,
    "marketing_opt_in_level": null,
    "tax_exemptions": [],
    "admin_graphql_api_id": "gid://shopify/Customer/115310627314723954",
    "default_address": {
      "id": 715243470612851200,
      "customer_id": 115310627314723950,
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
      "province_code": "ON",
      "country_code": "CA",
      "country_name": "Canada",
      "default": true
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
      "quantity": 1,
      "requires_shipping": true,
      "sku": "IPOD2008PINK",
      "taxable": true,
      "title": "IPod Nano - 8GB",
      "total_discount": "0.00",
      "total_discount_set": {
        "shop_money": {
          "amount": "0.00",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "0.00",
          "currency_code": "USD"
        }
      },
      "variant_id": 808950810,
      "variant_inventory_management": "shopify",
      "variant_title": null,
      "vendor": null,
      "tax_lines": [],
      "duties": [],
      "discount_allocations": []
    },
    {
      "id": 141249953214522980,
      "admin_graphql_api_id": "gid://shopify/LineItem/141249953214522974",
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
      "quantity": 1,
      "requires_shipping": true,
      "sku": "IPOD2008PINK",
      "taxable": true,
      "title": "IPod Nano - 8GB",
      "total_discount": "0.00",
      "total_discount_set": {
        "shop_money": {
          "amount": "0.00",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "0.00",
          "currency_code": "USD"
        }
      },
      "variant_id": 808950810,
      "variant_inventory_management": "shopify",
      "variant_title": null,
      "vendor": null,
      "tax_lines": [],
      "duties": [],
      "discount_allocations": []
    }
  ],
  "payment_details": {
    "credit_card_bin": null,
    "avs_result_code": null,
    "cvv_result_code": null,
    "credit_card_number": "•••• •••• •••• 1234",
    "credit_card_company": "Visa",
    "buyer_action_info": null,
    "credit_card_name": null,
    "credit_card_wallet": null,
    "credit_card_expiration_month": null,
    "credit_card_expiration_year": null
  },
  "payment_terms": null,
  "refunds": [],
  "shipping_address": {
    "first_name": "Steve",
    "address1": "123 Shipping Street",
    "phone": "555-555-SHIP",
    "city": "Shippington",
    "zip": "40003",
    "province": "Kentucky",
    "country": "United States",
    "last_name": "Shipper",
    "address2": null,
    "company": "Shipping Company",
    "latitude": null,
    "longitude": null,
    "name": "Steve Shipper",
    "country_code": "US",
    "province_code": "KY"
  },
  "shipping_lines": [
    {
      "id": 271878346596884000,
      "carrier_identifier": null,
      "code": null,
      "delivery_category": null,
      "discounted_price": "10.00",
      "discounted_price_set": {
        "shop_money": {
          "amount": "10.00",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "10.00",
          "currency_code": "USD"
        }
      },
      "phone": null,
      "price": "10.00",
      "price_set": {
        "shop_money": {
          "amount": "10.00",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "10.00",
          "currency_code": "USD"
        }
      },
      "requested_fulfillment_service_id": null,
      "source": "shopify",
      "title": "Generic Shipping",
      "tax_lines": [],
      "discount_allocations": []
    }
  ]
}

```

</TabItem>


<TabItem value="ShopifyOrdersUpdated" label="ShopifyOrdersUpdated" default>

```js
{
    "id": 5159806763157,
    "admin_graphql_api_id": "gid://shopify/Order/5159806763157",
    "app_id": 580111,
    "browser_ip": "49.43.249.107",
    "buyer_accepts_marketing": false,
    "cancel_reason": null,
    "cancelled_at": null,
    "cart_token": "c1-830e691d16f1093cfcde75960320d9cd",
    "checkout_id": 35481578373269,
    "checkout_token": "3d58ad45d661cd34d882fda5c68a36b8",
    "client_details": {
        "accept_language": "en-IN",
        "browser_height": null,
        "browser_ip": "49.43.249.107",
        "browser_width": null,
        "session_hash": null,
        "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36"
    },
    "closed_at": null,
    "company": null,
    "confirmation_number": "XPLMPXRME",
    "confirmed": true,
    "contact_email": "tom@gmail.com",
    "created_at": "2023-09-22T08:14:46-04:00",
    "currency": "INR",
    "current_subtotal_price": "30.00",
    "current_subtotal_price_set": {
        "shop_money": {
            "amount": "30.00",
            "currency_code": "INR"
        },
        "presentment_money": {
            "amount": "30.00",
            "currency_code": "INR"
        }
    },
    "current_total_additional_fees_set": null,
    "current_total_discounts": "0.00",
    "current_total_discounts_set": {
        "shop_money": {
            "amount": "0.00",
            "currency_code": "INR"
        },
        "presentment_money": {
            "amount": "0.00",
            "currency_code": "INR"
        }
    },
    "current_total_duties_set": null,
    "current_total_price": "30.00",
    "current_total_price_set": {
        "shop_money": {
            "amount": "30.00",
            "currency_code": "INR"
        },
        "presentment_money": {
            "amount": "30.00",
            "currency_code": "INR"
        }
    },
    "current_total_tax": "0.00",
    "current_total_tax_set": {
        "shop_money": {
            "amount": "0.00",
            "currency_code": "INR"
        },
        "presentment_money": {
            "amount": "0.00",
            "currency_code": "INR"
        }
    },
    "customer_locale": "en-IN",
    "device_id": null,
    "discount_codes": [],
    "email": "tom@gmail.com",
    "estimated_taxes": false,
    "financial_status": "paid",
    "fulfillment_status": null,
    "landing_site": "/",
    "landing_site_ref": null,
    "location_id": null,
    "merchant_of_record_app_id": null,
    "name": "#1085",
    "note": null,
    "note_attributes": [],
    "number": 85,
    "order_number": 1085,
    "order_status_url": "https://twewr.myshopify.com/45802520725/orders/24a0946393b4889192c0d7056751e889/authenticate?key=c60f3a72f52578b00cc7cb8551811cbc",
    "original_total_additional_fees_set": null,
    "original_total_duties_set": null,
    "payment_gateway_names": [
        "bogus"
    ],
    "phone": null,
    "po_number": null,
    "presentment_currency": "INR",
    "processed_at": "2023-09-22T08:14:43-04:00",
    "reference": "6925f7d584e825b7f3fdbf5de7b3a5e1",
    "referring_site": "",
    "source_identifier": "6925f7d584e825b7f3fdbf5de7b3a5e1",
    "source_name": "web",
    "source_url": null,
    "subtotal_price": "30.00",
    "subtotal_price_set": {
        "shop_money": {
            "amount": "30.00",
            "currency_code": "INR"
        },
        "presentment_money": {
            "amount": "30.00",
            "currency_code": "INR"
        }
    },
    "tags": "",
    "tax_exempt": false,
    "tax_lines": [],
    "taxes_included": false,
    "test": true,
    "token": "24a0946393b4889192c0d7056751e889",
    "total_discounts": "0.00",
    "total_discounts_set": {
        "shop_money": {
            "amount": "0.00",
            "currency_code": "INR"
        },
        "presentment_money": {
            "amount": "0.00",
            "currency_code": "INR"
        }
    },
    "total_line_items_price": "30.00",
    "total_line_items_price_set": {
        "shop_money": {
            "amount": "30.00",
            "currency_code": "INR"
        },
        "presentment_money": {
            "amount": "30.00",
            "currency_code": "INR"
        }
    },
    "total_outstanding": "0.00",
    "total_price": "30.00",
    "total_price_set": {
        "shop_money": {
            "amount": "30.00",
            "currency_code": "INR"
        },
        "presentment_money": {
            "amount": "30.00",
            "currency_code": "INR"
        }
    },
    "total_shipping_price_set": {
        "shop_money": {
            "amount": "0.00",
            "currency_code": "INR"
        },
        "presentment_money": {
            "amount": "0.00",
            "currency_code": "INR"
        }
    },
    "total_tax": "0.00",
    "total_tax_set": {
        "shop_money": {
            "amount": "0.00",
            "currency_code": "INR"
        },
        "presentment_money": {
            "amount": "0.00",
            "currency_code": "INR"
        }
    },
    "total_tip_received": "0.00",
    "total_weight": 0,
    "updated_at": "2023-09-22T08:14:47-04:00",
    "user_id": null,
    "billing_address": {
        "first_name": null,
        "address1": "Chennai",
        "phone": "90909 09090",
        "city": "Chennai",
        "zip": "600012",
        "province": "Tamil Nadu",
        "country": "India",
        "last_name": "Baid",
        "address2": "Chennai",
        "company": null,
        "latitude": 13.098633,
        "longitude": 80.2596083,
        "name": "Baid",
        "country_code": "IN",
        "province_code": "TN"
    },
    "customer": {
        "id": 6989864763541,
        "email": "tom@gmail.com",
        "accepts_marketing": false,
        "created_at": "2023-09-22T08:14:44-04:00",
        "updated_at": "2023-09-22T08:14:46-04:00",
        "first_name": null,
        "last_name": "Baid",
        "state": "disabled",
        "note": null,
        "verified_email": true,
        "multipass_identifier": null,
        "tax_exempt": false,
        "phone": null,
        "email_marketing_consent": {
            "state": "not_subscribed",
            "opt_in_level": "single_opt_in",
            "consent_updated_at": null
        },
        "sms_marketing_consent": null,
        "tags": "",
        "currency": "INR",
        "accepts_marketing_updated_at": "2023-09-22T08:14:44-04:00",
        "marketing_opt_in_level": null,
        "tax_exemptions": [],
        "admin_graphql_api_id": "gid://shopify/Customer/6989864763541",
        "default_address": {
            "id": 8320474546325,
            "customer_id": 6989864763541,
            "first_name": null,
            "last_name": "Baid",
            "company": null,
            "address1": "Chennai",
            "address2": "Chennai",
            "city": "Chennai",
            "province": "Tamil Nadu",
            "country": "India",
            "zip": "600012",
            "phone": "90909 09090",
            "name": "Baid",
            "province_code": "TN",
            "country_code": "IN",
            "country_name": "India",
            "default": true
        }
    },
    "discount_applications": [],
    "fulfillments": [],
    "line_items": [
        {
            "id": 12623712354453,
            "admin_graphql_api_id": "gid://shopify/LineItem/12623712354453",
            "fulfillable_quantity": 1,
            "fulfillment_service": "manual",
            "fulfillment_status": null,
            "gift_card": false,
            "grams": 0,
            "name": "Adania Pant - Black",
            "price": "30.00",
            "price_set": {
                "shop_money": {
                    "amount": "30.00",
                    "currency_code": "INR"
                },
                "presentment_money": {
                    "amount": "30.00",
                    "currency_code": "INR"
                }
            },
            "product_exists": true,
            "product_id": 7907558064277,
            "properties": [],
            "quantity": 1,
            "requires_shipping": true,
            "sku": "",
            "taxable": true,
            "title": "Adania Pant",
            "total_discount": "0.00",
            "total_discount_set": {
                "shop_money": {
                    "amount": "0.00",
                    "currency_code": "INR"
                },
                "presentment_money": {
                    "amount": "0.00",
                    "currency_code": "INR"
                }
            },
            "variant_id": 43453026762901,
            "variant_inventory_management": "shopify",
            "variant_title": "Black",
            "vendor": "twewr",
            "tax_lines": [],
            "duties": [],
            "discount_allocations": []
        }
    ],
    "payment_terms": null,
    "refunds": [],
    "shipping_address": {
        "first_name": null,
        "address1": "Chennai",
        "phone": "90909 09090",
        "city": "Chennai",
        "zip": "600012",
        "province": "Tamil Nadu",
        "country": "India",
        "last_name": "Baid",
        "address2": "Chennai",
        "company": null,
        "latitude": 13.098633,
        "longitude": 80.2596083,
        "name": "Baid",
        "country_code": "IN",
        "province_code": "TN"
    },
    "shipping_lines": [
        {
            "id": 4303065809045,
            "carrier_identifier": "650f1a14fa979ec5c74d063e968411d4",
            "code": "Standard",
            "discounted_price": "0.00",
            "discounted_price_set": {
                "shop_money": {
                    "amount": "0.00",
                    "currency_code": "INR"
                },
                "presentment_money": {
                    "amount": "0.00",
                    "currency_code": "INR"
                }
            },
            "phone": null,
            "price": "0.00",
            "price_set": {
                "shop_money": {
                    "amount": "0.00",
                    "currency_code": "INR"
                },
                "presentment_money": {
                    "amount": "0.00",
                    "currency_code": "INR"
                }
            },
            "requested_fulfillment_service_id": null,
            "source": "shopify",
            "title": "Standard",
            "tax_lines": [],
            "discount_allocations": []
        }
    ]
}

```

</TabItem>


<TabItem value="shopifyOrderCancelled" label="shopifyOrderCancelled" default>

```js
{
  "id": 820982911946154500,
  "admin_graphql_api_id": "gid://shopify/Order/820982911946154508",
  "app_id": null,
  "browser_ip": null,
  "buyer_accepts_marketing": true,
  "cancel_reason": "customer",
  "cancelled_at": "2021-12-31T19:00:00-05:00",
  "cart_token": null,
  "checkout_id": null,
  "checkout_token": null,
  "closed_at": null,
  "confirmed": false,
  "contact_email": "jon@example.com",
  "created_at": "2021-12-31T19:00:00-05:00",
  "currency": "USD",
  "current_subtotal_price": "398.00",
  "current_subtotal_price_set": {
    "shop_money": {
      "amount": "398.00",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "398.00",
      "currency_code": "USD"
    }
  },
  "current_total_discounts": "0.00",
  "current_total_discounts_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "USD"
    }
  },
  "current_total_duties_set": null,
  "current_total_price": "398.00",
  "current_total_price_set": {
    "shop_money": {
      "amount": "398.00",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "398.00",
      "currency_code": "USD"
    }
  },
  "current_total_tax": "0.00",
  "current_total_tax_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "USD"
    }
  },
  "customer_locale": "en",
  "device_id": null,
  "discount_codes": [],
  "email": "jon@example.com",
  "estimated_taxes": false,
  "financial_status": "voided",
  "fulfillment_status": "pending",
  "gateway": null,
  "landing_site": null,
  "landing_site_ref": null,
  "location_id": null,
  "merchant_of_record_app_id": null,
  "name": "#9999",
  "note": null,
  "note_attributes": [],
  "number": 234,
  "order_number": 1234,
  "order_status_url": "https://jsmith.myshopify.com/548380009/orders/123456abcd/authenticate?key=abcdefg",
  "original_total_duties_set": null,
  "payment_gateway_names": [
    "visa",
    "bogus"
  ],
  "phone": null,
  "presentment_currency": "USD",
  "processed_at": null,
  "processing_method": "",
  "reference": null,
  "referring_site": null,
  "source_identifier": null,
  "source_name": "web",
  "source_url": null,
  "subtotal_price": "388.00",
  "subtotal_price_set": {
    "shop_money": {
      "amount": "388.00",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "388.00",
      "currency_code": "USD"
    }
  },
  "tags": "",
  "tax_lines": [],
  "taxes_included": false,
  "test": true,
  "token": "123456abcd",
  "total_discounts": "20.00",
  "total_discounts_set": {
    "shop_money": {
      "amount": "20.00",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "20.00",
      "currency_code": "USD"
    }
  },
  "total_line_items_price": "398.00",
  "total_line_items_price_set": {
    "shop_money": {
      "amount": "398.00",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "398.00",
      "currency_code": "USD"
    }
  },
  "total_outstanding": "398.00",
  "total_price": "388.00",
  "total_price_set": {
    "shop_money": {
      "amount": "388.00",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "388.00",
      "currency_code": "USD"
    }
  },
  "total_shipping_price_set": {
    "shop_money": {
      "amount": "10.00",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "10.00",
      "currency_code": "USD"
    }
  },
  "total_tax": "0.00",
  "total_tax_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "USD"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "USD"
    }
  },
  "total_tip_received": "0.00",
  "total_weight": 0,
  "updated_at": "2021-12-31T19:00:00-05:00",
  "user_id": null,
  "billing_address": {
    "first_name": "Steve",
    "address1": "123 Shipping Street",
    "phone": "555-555-SHIP",
    "city": "Shippington",
    "zip": "40003",
    "province": "Kentucky",
    "country": "United States",
    "last_name": "Shipper",
    "address2": null,
    "company": "Shipping Company",
    "latitude": null,
    "longitude": null,
    "name": "Steve Shipper",
    "country_code": "US",
    "province_code": "KY"
  },
  "customer": {
    "id": 115310627314723950,
    "email": "john@example.com",
    "accepts_marketing": false,
    "created_at": null,
    "updated_at": null,
    "first_name": "John",
    "last_name": "Smith",
    "state": "disabled",
    "note": null,
    "verified_email": true,
    "multipass_identifier": null,
    "tax_exempt": false,
    "phone": null,
    "email_marketing_consent": {
      "state": "not_subscribed",
      "opt_in_level": null,
      "consent_updated_at": null
    },
    "sms_marketing_consent": null,
    "tags": "",
    "currency": "USD",
    "accepts_marketing_updated_at": null,
    "marketing_opt_in_level": null,
    "tax_exemptions": [],
    "admin_graphql_api_id": "gid://shopify/Customer/115310627314723954",
    "default_address": {
      "id": 715243470612851200,
      "customer_id": 115310627314723950,
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
      "province_code": "ON",
      "country_code": "CA",
      "country_name": "Canada",
      "default": true
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
      "quantity": 1,
      "requires_shipping": true,
      "sku": "IPOD2008PINK",
      "taxable": true,
      "title": "IPod Nano - 8GB",
      "total_discount": "0.00",
      "total_discount_set": {
        "shop_money": {
          "amount": "0.00",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "0.00",
          "currency_code": "USD"
        }
      },
      "variant_id": 808950810,
      "variant_inventory_management": "shopify",
      "variant_title": null,
      "vendor": null,
      "tax_lines": [],
      "duties": [],
      "discount_allocations": []
    },
    {
      "id": 141249953214522980,
      "admin_graphql_api_id": "gid://shopify/LineItem/141249953214522974",
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
      "quantity": 1,
      "requires_shipping": true,
      "sku": "IPOD2008PINK",
      "taxable": true,
      "title": "IPod Nano - 8GB",
      "total_discount": "0.00",
      "total_discount_set": {
        "shop_money": {
          "amount": "0.00",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "0.00",
          "currency_code": "USD"
        }
      },
      "variant_id": 808950810,
      "variant_inventory_management": "shopify",
      "variant_title": null,
      "vendor": null,
      "tax_lines": [],
      "duties": [],
      "discount_allocations": []
    }
  ],
  "payment_details": {
    "credit_card_bin": null,
    "avs_result_code": null,
    "cvv_result_code": null,
    "credit_card_number": "•••• •••• •••• 1234",
    "credit_card_company": "Visa",
    "buyer_action_info": null,
    "credit_card_name": null,
    "credit_card_wallet": null,
    "credit_card_expiration_month": null,
    "credit_card_expiration_year": null
  },
  "payment_terms": null,
  "refunds": [],
  "shipping_address": {
    "first_name": "Steve",
    "address1": "123 Shipping Street",
    "phone": "555-555-SHIP",
    "city": "Shippington",
    "zip": "40003",
    "province": "Kentucky",
    "country": "United States",
    "last_name": "Shipper",
    "address2": null,
    "company": "Shipping Company",
    "latitude": null,
    "longitude": null,
    "name": "Steve Shipper",
    "country_code": "US",
    "province_code": "KY"
  },
  "shipping_lines": [
    {
      "id": 271878346596884000,
      "carrier_identifier": null,
      "code": null,
      "delivery_category": null,
      "discounted_price": "10.00",
      "discounted_price_set": {
        "shop_money": {
          "amount": "10.00",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "10.00",
          "currency_code": "USD"
        }
      },
      "phone": null,
      "price": "10.00",
      "price_set": {
        "shop_money": {
          "amount": "10.00",
          "currency_code": "USD"
        },
        "presentment_money": {
          "amount": "10.00",
          "currency_code": "USD"
        }
      },
      "requested_fulfillment_service_id": null,
      "source": "shopify",
      "title": "Generic Shipping",
      "tax_lines": [],
      "discount_allocations": []
    }
  ]
}

```

</TabItem>

<TabItem value="shopifyNewCustomer" label="shopifyNewCustomer" default>

```js
{
  "userId":"6989864763541",
  "email":"andrew@gmail.com",
  "fistName": "andrew",
  "lastName":"farak",
  "phone": "9909889090",
  "coutry": "IN",
  "sessionId":"ym_1695384819786_bzldxorc5q",
  "source":"shopify"
}

```

</TabItem>


<TabItem value="shopifyReturnRequest" label="shopifyReturnRequest" default>


```json
{
    "id": 3547267221,
    "admin_graphql_api_id": "gid://shopify/Return/3547267221",
    "status": "requested",
    "order": {
        "id": 5196695273621,
        "admin_graphql_api_id": "gid://shopify/Order/5196695273621"
    },
    "total_return_line_items": 1,
    "name": "#1106-R2",
    "return_line_items": [
        {
            "id": 6200524949,
            "admin_graphql_api_id": "gid://shopify/ReturnLineItem/6200524949",
            "fulfillment_line_item": {
                "id": 10736341352597,
                "admin_graphql_api_id": "gid://shopify/FulfillmentLineItem/10736341352597",
                "line_item": {
                    "id": 12695210000533,
                    "admin_graphql_api_id": "gid://shopify/LineItem/12695210000533"
                }
            },
            "quantity": 1,
            "return_reason": "unwanted",
            "return_reason_note": "",
            "customer_note": null
        }
    ],
    "customer": {
        "id": 7029431102139,
        "email": "andrew@gmail.com",
        "accepts_marketing": false,
        "created_at": "2023-10-18T07:18:03-04:00",
        "updated_at": "2023-10-19T06:19:34-04:00",
        "first_name": "Andrew",
        "last_name": "B",
        "state": "disabled",
        "note": null,
        "verified_email": true,
        "multipass_identifier": null,
        "tax_exempt": false,
        "phone": null,
        "email_marketing_consent": {
            "state": "not_subscribed",
            "opt_in_level": "single_opt_in",
            "consent_updated_at": null
        },
        "sms_marketing_consent": null,
        "tags": "",
        "currency": "INR",
        "accepts_marketing_updated_at": "2023-10-18T07:18:03-04:00",
        "marketing_opt_in_level": null,
        "tax_exemptions": [],
        "admin_graphql_api_id": "gid://shopify/Customer/7029431102139",
        "default_address": {
            "id": 836448003234781,
            "customer_id": 7029431102139,
            "first_name": "Andrew",
            "address1": "Kerala",
            "address2": null,
            "city": "Manglore",
            "province": "Kerala",
            "country": "India",
            "zip": "574241",
            "phone": "09008692935",
            "province_code": "KL",
            "country_code": "IN",
            "country_name": "India",
            "default": true
        }
    }
}
```

</TabItem>


</Tabs>


### Run campaigns based on Shopify events

You can initiate Flow campaigns based on Shopify events that you have enabled in Yellow.ai.

In [Flow campaigns](https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign), choose **Condition** as *Has done event check* and in **Campaign triggers when user**, choose the event that you want to use to trigger campaigns.

<center><img src="https://i.imgur.com/LC7jd5q.png" width="60%"/></center>

Here are some examples:



<Tabs>
<TabItem value="AbandonedCart" label="Abandoned cart recovery campaign" default>



In an online store on Shopify, you notice that some customers abandon their shopping carts during the checkout process. To recover those potential sales, set up a Flow campaign to automatically send reminders to users who have abandoned their shopping carts on your Shopify store.


**Entry trigger**: `shopifyCartCreate` event

**Exception to trigger notification**: `ShopifyCheckoutCreated` event

**Flow configuration**:


1. **Trigger the flow**: Initiate the campaign when a user adds items to their cart, identify it using the `shopifyCartCreate` event. 

   ![](https://i.imgur.com/qxmCKM3.gif)

2. **Wait condition**: Check if the user has completed the purchase by waiting for the `ShopifyCheckoutCreated` event. Set time delay, say 10 min. If no `ShopifyCheckoutCreated` event is detected within 10 min, proceed to the next step.

   ![](https://i.imgur.com/2210dOW.gif)

3. **Send abandonment reminder**:  If the user has not completed the purchase within the specified time, send a WhatsApp notification. Here is a sample message:

   ![](https://i.imgur.com/MSyaUBa.gif)

   - *Sample Notification Message:* "Hello [User's Name], we noticed you left some wonderful items in your cart. 🛒 Don't miss out on these great finds! Tap here to complete your purchase: [Checkout Link]. Thank you for choosing our store!"


</TabItem>


<TabItem value="newCustomer" label="New customer welcome campaign" default>

When a new customer registers in your Shopify store, initiate a series of welcome emails, introducing them to your products and offering exclusive discounts on their first purchase.

* **Event**: ShopifyNewCustomer
* **Wait time**: Immediately

  <img src="https://i.imgur.com/nI3l6lC.png" width="60%"/>

</TabItem>


<TabItem value="orderConfirmation" label="Order confirmation campaign" default>
When an order is successfully placed (shopifyNewOrder event), send an order confirmation campaign. This includes order details, expected delivery date, and a thank-you message.
</TabItem>

<TabItem value="OrderCancellation" label="Reorder Incentive Campaign" default>

For customers who cancelled an order on Shopify store, trigger a well-crafted campaign aimed at enticing customers to initiate a new transaction. The campaign is designed to re-engage customers who experienced an order cancellation and guide them toward completing a new purchase.

   <img src="https://i.imgur.com/xEneOFU.png" width="60%"/>


* **Event**: ShopifyOrderCancelled
* **Wait time**: 24 hours
* **Sample message**:



```
Subject: Exclusive Offer for Your Next Purchase 🛒

Message:

Dear [Customer's Name],

We noticed that your recent order was canceled, and we're here to make it up to you with an exclusive offer.

To show our appreciation for your continued support, we're pleased to offer you a special 20% discount on your next purchase. Use code: REORDER20 at checkout to enjoy your savings.

We've also handpicked some fantastic product recommendations based on your previous preferences, which we think you'll love:

Recommended Products:

[Product 1]
[Product 2]
[Product 3]

Explore these selections and easily add them to your cart with just a click.

[Shop Now]
```

 

</TabItem>

</Tabs> 


:::note
You will see only events that you have enabled for the bot. For more details, [see how to activate events](#3-activate-shopify-events-you-wish-to-use-in-yellowai).
:::


To know more about Flow campaigns, click [here](https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign).

***





## 4. Access Shopify data in bot conversations

Once the integration is set up, Shopify events start flowing to Yellow.ai. These events serve as triggers for bot flows, enabling the creation of personalized conversations, running effective campaigns, storing customer data in User360,personalized responses, data enrichment, and the creation of efficient workflows.


### Supported Shopify events you can use in Studio

The following table provides a comprehensive list of Shopify events along with their descriptions and sample use cases.

  | Event  | Description    | Sample use cases      |
  |--------|----------------|----------------------|
  | shopifyNewOrder  | A new order is created in the Shopify store.   | - Trigger order confirmation emails<br/>- Update inventory when a new order is created in your Shopify store.                           |
  | shopifyNewProduct  | A new product has been added to the Shopify store.  | - Update the product catalog<br/>- Create product listings<br/>- Send WhatsApp notifications when a new product is added to your Shopify store.  |
  | shopifyOrderCancelled | An order is cancelled. | - Handle order cancellations<br/>- Update inventory levels<br/>- Refund payments<br/>- Notify customers when their orders are canceled. |
  | shopifyOrderFulfilled | An order was fulfilled or completed.   |  Update shipping information<br/>- Send shipping notifications to customers<br/>- Update order status when an order is fulfilled or completed.  |
  | shopifyOrderPaid      | Payment made for an order. | - Send payment receipts<br/>- Update financial records when a payment is made for an order.  |
  | shopifyRefundCreated  | A refund was created for an order.  | - Update financial records<br/>- Notify customers about their refunds<br/>- Adjust inventory levels when a refund is issued for an order. |
  | shopifyNewCustomer    | A new customer is registered.  | - Add the customer to User 360<br/>- Send welcome emails<br/>- Track customer acquisition when a new customer registers in your Shopify store. |
  | shopifyCustomerUpdate | A customer’s profile details have been updated. | - Keep your customer database up to date<br/>- Send profile change notifications when a customer's profile details are updated. |
  | shopifyCheckoutCreated| Order checkout is initiated in Shopify. | - Track order progress when an order checkout is initiated in your Shopify store.   |
  | shopifyOrdersUpdated  | Shopify order is updated.  | - Monitor order changes<br/>- Adjust inventory<br/>- Notify the customer about order updates to handle order updates in the Shopify store.  |

### Events enabled by default in Studio

Once your integration is set up, the following events are sent to bot directly are available by default with this integration.

* shopifyRefundCreated
* shopifyNewProduct
* shopifyOrderPaid


:::note
The availability of events within the integration depends on the scopes you have enabled when generating the API token.
 <img src="https://i.imgur.com/Ri1rcX7.png"/>
:::
 
### Activate Shopify events you wish to use in Studio

Apart from the events mentioned in the previous section, you can enable other events that you want to make use in Studio. For a list of events supported in Studio, see [here](#supported-shopify-events-you-can-use-in-studio).

To enable events:

1. Go to **Studio** > **Event** > **Integrations**. You will see all the events related to Shopify with the prefix `shopify<eventName>`.

  <img src="https://i.imgur.com/Qeq0NvS.png"/>

2. Navigate to the event that you want to enable and click on the more options icon > **Activate**.


3. Once you enable required shopify events, you can use these Shopify events to:
  
  * [Trigger bot flows via events](https://docs.yellow.ai/docs/platform_concepts/studio/build/Flows/configureflow#13-trigger-flow-using-event)
  * [Initiate flow campaigns based on events](https://docs.yellow.ai/docs/platform_concepts/engagement/flows_campaign#user-events)
  * [Store user variables that come from user events into user properties](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/store_conv_data#store-user-properties-from-bot-conversations)


:::note

**Error: Webhook is failing**: 

* Ensure you have activated the respective event as mentioned above. If your webhook fails more than twice, it will be removed and your application will not receive any notifications.
:::

### Fetch Shopify data in bot conversations

To make use of Shopify events in bot flows:

1. Go to your bot in **Studio** and navigate to the flow where you want to use a Shopify event.

<!--
2. As the first step, collect the customer information. Use the **Question** node to collect the order ID  and store the response in a custom variable (static or dynamic value). Ensure you set the right data type for the [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables).

   ![](https://i.imgur.com/3Nr7T6u.png)

-->

3. Navigate to the Integration node - **Node** > **Integration** > **Shopify Shop**.
   
   <img src="https://i.imgur.com/PygmosI.png" alt="drawing" width="75%"/>


4. Choose your **Account name**
5. Select the respective **Action** that you need to perform. For details of each schema, see [Schema details for different Shopify actions](#schema-details-frr-different-shopify-actions).

5. In **Var** pass the parameter variable that contains the required information in the format `variables.objVariableName.key`. 

   <img src="https://i.imgur.com/X9e1rwL.png" alt="drawing" width="75%"/>

6. Use **Show sample response** to see all the details (in the JSON format) that the function can retrieve.
7. To store the response, use **Store the response in** a [variable](https://docs.yellow.ai/docs/platform_concepts/studio/build/bot-variables). 
   
   <img src="https://i.imgur.com/fMgSeaw.png" alt="drawing" width="55%"/>

8. You can decide which info to display to the user. Use the **Function** node to customise that information in the **Code** tab.
   For example, in the previous screenshot, order details are stored in the variable `order_details`. You can access this data using order_details.order.name.


### Shopify action nodes with Sample payloads

You can see all the Shopify action nodes in **Integration** > **Shopify** node (Refer to the previous section for more details).

The following are some limitations with these action nodes: 

1. **Data Fetch Limitation**: You can retrieve a maximum of 50 records (products/orders/collections etc.) in a single query or request.

2. **Object Size Restriction**: The response object size is limited to 90KB. The data you send or receive should not exceed this limit.

3. **Product Display Limitation**: When displaying product details, you can showcase up to 8 carousel images. This limitation is due to the inability to use a "Next" option to view additional products in subsequent lists.

These points highlight the specific constraints and limitations that users or developers should be aware of when working with this system or application.


<Tabs style="flex-wrap: wrap;">
  
<TabItem value="getOrderDetails" label="getOrderDetails" default>

This function retrieves order details using the provided order ID.

Parameter | Datatype | Example
-------- | --------- | -------
order_id | Number | 632910392


Here is a sample response schema:

```json

{
    "order": {
    "id": 450789469,
    "cancel_reason": null,
    "cancelled_at": null,
    "confirmed": true,
    "email": "bob.norman@example.com",
    "financial_status": "partially_refunded",
    "fulfillment_status": null,
    "name": "#1001"
    }
  }

```

</TabItem>

<TabItem  value="getOrdersByOrderNumber"  label="getOrdersByOrderNumber">

This function retrieves order details using the provided order number.

Parameter | Datatype | Sample value
--------- | -------- | ------------
order_number | Number | 1001

```json

{
  "orders": [
  {
    "id": 450789469,
    "cancel_reason": null,
    "cancelled_at": null,
    "confirmed": true,
    "email": "bob.norman@hostmail.com",
    "financial_status": "partially_refunded",
    "fulfillment_status": null,
    "name": "#1001"
  }
  ]
}

```

</TabItem>

<TabItem  value="getProductDetails"  label="getProductDetails">

This function retrieves the details of a specific product using the `product_id`.

Parameter | Datatype | Example
--------- | -------- | -------
product_id | Number  | 632910392

```json
{
  "product": {
    "id": 632910392,
    "title": "IPod Nano - 8GB",
    "product_type": "Cult Products",
    "variants": [
      {}]
    }
}

```

</TabItem>

<TabItem  value="getProductVariants"  label="getProductVariants">

This function retrieves the list of all the variants of a product using the `product_id`.

Parameter | Datatype | Example
-------- | --------- | --------
product_id | Number | 632910392


```json
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


</TabItem>

<TabItem  value="getProductsByCollection"  label="getProductsByCollection">

This function retrieves all the products under a specific collection from shopify using the `collection_id`.

Parameter | Datatype | Example
--------- | -------- | -------
collection_id | String | 76854321

Here is a sample response schema:


```json
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

</TabItem>

<TabItem  value="getProductsByTitle"  label="getProductsByTitle">

This function fetches products by `title`.


Parameter | Datatype | Example
-------- | -------- | -------
title | String | Ipad Nano

```json
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

</TabItem>

<TabItem  value="getOrdersByCustomerld"  label="getOrdersByCustomerld">

This function retrieves all the orders of a customer using the `customer_id`.

Parameter | Datatype | Sample value
-------- | --------- | -----------
customer_id | String | 207119551

```json
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

</TabItem>

<TabItem  value="getAllCollections"  label="getAllCollections">

This function fetches all the available collections from shopify using the `collection_id`.

Parameter | Datatype | Sample value
--------- | -------- | ------------
collection_id | Number | 482865238

```json
{
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

</TabItem>

</Tabs>



### Map shopify data to user properties

You can add/update user properties with Shopify data through bot conversations by mapping them to user properties. This enables you to create highly personalized and engaging interactions with your users.

<center><img src="https://i.imgur.com/vMqK1Nr.png" width="60%"/></center>

For detailed instructions, see [Add user variables that come from user events into user properties](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/store_conv_data#store-user-properties-from-bot-conversations).

You can create personalized conversations using stored properties, [know how](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/personalise_conversations).



---


***

## 5. Import Shopify bot from Marketplace template

Importing a Shopify bot template into your Yellow.ai account is a straightforward process that streamlines the integration of Yellow.ai with your Shopify store. This template provides pre-configured floes and actions designed to enhance your e-commerce operations. This includes flows such as Browse products, Get order details, authenticate user via OTP, show customer details, connect to support, and raise ticket.

To import the Shopify shop template in your bot:

1. Navigate to the **Marketplace** and search for Shopify. You will see Shopify E-commerce with Shopify integration.

   ![](https://i.imgur.com/e0VrAuC.png)

2. Select the template and click **+Use Template**.

  ![](https://i.imgur.com/kDmytlM.png)

  The template will start importing. Wait until the import is complete.

5. Open the **Flows** dropdown to see the new flows added to the bot.

   <img src="https://i.imgur.com/egnlj5M.png" width="40%"/>
   



<!--
## 5. Event schema for Shopify events

1. From the bot configuration page, click  **Events hub** > **Integrations**. You will see all the supported events.
   ![](https://i.imgur.com/AkXOKfw.jpg)

2. Navigate to the event that you want to use in the bot, click the more options icon, and select **Activate**. 

3. When configuring the bot flow, in the **Start** node, choose Event and select the event that you want to use from the drop-down list.
   
   <img src="https://i.imgur.com/kWOPYCh.png" alt="drawing" width="65%"/>

4. Configure the actions that you want to trigger. For details on creating a bot, see [Studio documentation](https://docs.yellow.ai/docs/platform_concepts/studio/overview).

-->

---

<!--
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

-->



## 6. Troubleshooting 

**Error: Your webhook is failing**

Ensure you have enabled Shopify's event in **Event Hub**. If your webhook fails more than twice, it will be removed and your application will not receive any notifications.


---


## 7. Disconnect Shopify integration

To remove this integration from your bot:

1. On the bot configuration page, go to **Integrations**.
2. Search for  **Shopify shop** > **Disconnect**.
   ![](https://i.imgur.com/5rb2Fxd.png)
   
--- 


### Important References 
1. [Shopify Custom Apps](https://help.shopify.com/en/manual/apps/custom-apps)
2. [Configuring Storefront data for getAllCollections integration node](https://community.shopify.com/c/shopify-apis-and-sdks/404-error-from-get-admin-collection-listings-json-for-one-store/m-p/367034/highlight/true#M19606)

