---
title: Magento Integration
sidebar_label: Magento Integration
---
Yellow.ai’s integration with Magento helps you connect your yellow.ai platform with your Magento store. This will allow your customers to view the categories of your inventory, and view products by categories. You can also get your customer details via email.  Additionally, your customers can place an order and check their order status via order ID.

## 1. Connect Magento with Yellow

Follow the below-mentioned steps to connect your Magento account with Yellow.ai

### 1.1 Generate OAuth credentials on Magento

1. Login into Magento admin panel. If your Magento store URL is https://magentostore.in , the admin panel URL will be https://magentostore.in/admin 

2. Click **SYSTEM** in the left menu and click **Integrations**.

![](https://i.imgur.com/T1jEfKl.png)

3. Click the **Add New Integration** button on the following page.

![](https://i.imgur.com/knzgmyc.png)

4. Fill in the **Name** and **password** (Magento admin password) fields in **Integration Info**. The rest of the fields can be empty.

![](https://i.imgur.com/mOt3zgS.png)

5. Click the **API** section on the left menu, and edit **Resource Access** to **All**.

![](https://i.imgur.com/jFpofZT.png)

6. Expand all the buttons on the top-right corner and click **Save & Activate**.

![](https://i.imgur.com/Kf9LVh1.png)

7. Click **Allow** button to generate the API credentials.

![](https://i.imgur.com/O9VXvJ8.png)

8. Copy these credentials to any text editor.  We will need them to connect the Yellow.ai platform to Magento.
9. Go to https://cloud.yellow.ai and click **Integrations**.

![](https://i.imgur.com/uCp5yG4.png)

11. Search for **Magento** in the **All Integrations** field.

![](https://i.imgur.com/ZAnMzNd.png)

12. Fill in the fields and click **Connect**.

![](https://i.imgur.com/0MbXoi8.png)

13. If you have multiple accounts, follow the above mentioned steps to add each of them.

:::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 5 merchant accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::

14. Once Magento is connected to yellow.ai, you can see **Magento** in the **Integrations** node.

![](https://i.imgur.com/mSheR0q.png)

## 2. Use-cases

The following are the use-cases accommodated in this integration:

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::

### 2.1 Get all the categories

This action doesn’t require any input from the user. It displays all the categories and their subcategories from the **Magento** default store to the user.

**Sample Response:**

```

{


"id": 1,
"parent_id": 0,
"name": "Root Catalog",
"is_active": null,
"position": 0,
"level": 0,
  "product_count": 0,
  "children_data": [
    {
      "id": 2,
      "parent_id": 1,
      "name": "Default Category",
      "is_active": true,
      "position": 1,
      "level": 1,
      "product_count": 0,
      "children_data": [
        {
          "id": 3,
          "parent_id": 2,
          "name": "Electronics",
          "is_active": true,
          "position": 1,
          "level": 2,
          "product_count": 2,
          "children_data": []
        }
      ]
    }
  ]
}


```


  

### 2.2 Get customer details by email
This action gets customer details through email addresses.
           
 **Node Input Params:**
 

| Field Name | Sample Input Name | Remarks |
| -------- | -------- | -------- |
| email     | jhon.doe@yellow.ai     | String Type     |


**Sample Response:**

```
 {"items": [
    {
      "id": 1,
      "group_id": 1,
      "default_billing": "1",
      "default_shipping": "1",
      "created_at": "2022-09-23 11:38:30",
      "updated_at": "2022-09-29 09:09:26",
      "created_in": "Default Store View",
      "email": "john.doe@yellow.ai",
      "firstname": "john",
      "lastname": "doe",
      "store_id": 1,
      "website_id": 1,
      "addresses": [
        {
          "id": 1,
          "customer_id": 1,
          "region": {
            "region_code": "AL",
            "region": "",
            "region_id": 43
          },
          "region_id": 343,
          "country_id": "IN",
          "street": [
            ""
          ],
          "telephone": "999999999",
          "postcode": "333333",
          "city": "",
          "firstname": "john",
          "lastname": "doe",
          "default_shipping": true,
          "default_billing": true
        }
      ],
      "disable_auto_group_change": 0,
      "extension_attributes": {
        "is_subscribed": false
      }
    }]}
```

### 2.3 Retrieve order details by order Id

Retrieves order details by order ID.

**Node Input Params:**


| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
| orderId     | 632910392     | String Type     |

**Sample Response:**

```
{

 "base_currency_code": "USD",
  "base_discount_amount": 0,
  "base_grand_total": 37,
  "base_discount_tax_compensation_amount": 0,
  "base_shipping_amount": 5,
  "base_shipping_discount_amount": 0,
  "base_shipping_discount_tax_compensation_amnt": 0,
  "base_shipping_incl_tax": 5,
  "base_shipping_tax_amount": 0,
  "base_subtotal": 32,
  "base_subtotal_incl_tax": 32,
  "base_tax_amount": 0,
  "base_total_due": 37,
  "base_to_global_rate": 1,
  "base_to_order_rate": 1,
  "billing_address_id": 2,
  "created_at": "2022-09-29 09:09:26",
  "customer_email": "john.johndoe@yellow.ai",
  "customer_firstname": "john",
  "customer_group_id": 1,
  "customer_id": 1,
  "customer_is_guest": 0,
  "customer_lastname": "johndoe",
  "customer_note_notify": 1,
  "discount_amount": 0,
  "entity_id": 1,
  "global_currency_code": "USD",
  "grand_total": 37,
  "discount_tax_compensation_amount": 0,
  "increment_id": "000000001",
  "is_virtual": 0,
  "order_currency_code": "USD",
  "protect_code": "43203977547c781b449c6ef4f5445d68",
  "quote_id": 1,
  "remote_ip": "172.18.0.1",
  "shipping_amount": 5,
  "shipping_description": "Flat Rate - Fixed",
  "shipping_discount_amount": 0,
  "shipping_discount_tax_compensation_amount": 0,
  "shipping_incl_tax": 5,
  "shipping_tax_amount": 0,
  "state": "new",
  "status": "pending",
  "store_currency_code": "USD",
  "store_id": 1,
  "store_name": "Main Website\\nMain Website Store\\nDefault Store View",
  "store_to_base_rate": 0,
  "store_to_order_rate": 0,
  "subtotal": 32,
  "subtotal_incl_tax": 32,
  "tax_amount": 0,
  "total_due": 37,
  "total_item_count": 1,
  "total_qty_ordered": 1,
  "updated_at": "2022-09-29 09:09:27",
  "weight": 5,
  "items": [
    {
      "amount_refunded": 0,
      "base_amount_refunded": 0,
      "base_discount_amount": 0,
      "base_discount_invoiced": 0,
      "base_discount_tax_compensation_amount": 0,
      "base_original_price": 32,
      "base_price": 32,
      "base_price_incl_tax": 32,
      "base_row_invoiced": 0,
      "base_row_total": 32,
      "base_row_total_incl_tax": 32,
      "base_tax_amount": 0,
      "base_tax_invoiced": 0,
      "created_at": "2022-09-29 09:09:26",
      "discount_amount": 0,
      "discount_invoiced": 0,
      "discount_percent": 0,
      "free_shipping": 0,
      "discount_tax_compensation_amount": 0,
      "is_qty_decimal": 0,
      "is_virtual": 0,
      "item_id": 1,
      "name": "Acer Laptop",
      "no_discount": 0,
      "order_id": 1,
      "original_price": 32,
      "price": 32,
      "price_incl_tax": 32,
      "product_id": 1,
      "product_type": "simple",
      "qty_canceled": 0,
      "qty_invoiced": 0,
      "qty_ordered": 1,
      "qty_refunded": 0,
      "qty_shipped": 0,
      "quote_item_id": 1,
      "row_invoiced": 0,
      "row_total": 32,
      "row_total_incl_tax": 32,
      "row_weight": 5,
      "sku": "Acer Laptop",
      "store_id": 1,
      }
    ],
  "billing_address": {...},
 "payment_additional_info": [
      {
        "key": "method_title",
        "value": "Check / Money order"
      }
    ],
    "applied_taxes": [],
    "item_applied_taxes": []}  
    }
```

### 2.4 Get Product Details by Product Id

Fetches the details of the specified product id.

**Node Input Params:**

| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
| productId     | 5     | String Type     |

**Sample Response:**

           {
    "items": [
        {
            "id": 1,
            "sku": "Acer Laptop",
            "name": "Acer Laptop",
            "attribute_set_id": 4,
            "price": 32,
            "status": 1,
            "visibility": 4,
            "type_id": "simple",
            "created_at": "2022-09-28 11:35:33",
            "updated_at": "2022-09-28 11:35:33",
            "weight": 5,
            "extension_attributes": {
                "website_ids": [
                    1
                ],
                "category_links": [
                    {
                        "position": 0,
                        "category_id": "3"
                    }
                ]
            },
            "product_links": [],
            "options": [],
            "media_gallery_entries": [],
            "tier_prices": [],
            "custom_attributes": [
                {
                    "attribute_code": "page_layout",
                    "value": "product-full-width"
                },
                {
                    "attribute_code": "options_container",
                    "value": "container2"
                },
                {
                    "attribute_code": "url_key",
                    "value": "acer-laptop"
                },
                {
                    "attribute_code": "msrp_display_actual_price_type",
                    "value": "0"
                },
                {
                    "attribute_code": "gift_message_available",
                    "value": "2"
                },
                {
                    "attribute_code": "required_options",
                    "value": "0"
                },
                {
                    "attribute_code": "has_options",
                    "value": "0"
                },
                {
                    "attribute_code": "meta_title",
                    "value": "Acer Laptop"
                },
                {
                    "attribute_code": "meta_keyword",
                    "value": "Acer Laptop"
                },
                {
                    "attribute_code": "meta_description",
                    "value": "Acer Laptop "
                },
                {
                    "attribute_code": "tax_class_id",
                    "value": "2"
                },
                {
                    "attribute_code": "category_ids",
                    "value": [
                        "3"
                    ]
                }
            ]
        }
    ],
    "search_criteria": {
        "filter_groups": [
            {
                "filters": [
                    {
                        "field": "entity_id",
                        "value": "1",
                        "condition_type": "eq"
                    }
                ]
            }
        ]
    },
    "total_count": 1
}

### 2.5 Get all the products

Retrieves the  list of all the available products.

**Sample Response:**

```
{
  "items": [
    {
      "id": 1,
      "sku": "Acer Laptop",
      "name": "Acer Laptop",
      "attribute_set_id": 4,
      "price": 32,
      "status": 1,
      "visibility": 4,
      "type_id": "simple",
      "created_at": "2022-09-28 11:35:33",
      "updated_at": "2022-09-28 11:35:33",
      "weight": 5,
      "extension_attributes": {
        "website_ids": [
          1
        ],
        "category_links": [
          {
            "position": 0,
            "category_id": "3"
          }
        ]
      },
      "product_links": [],
      "options": [],
      "media_gallery_entries": [],
      "tier_prices": [],
      "custom_attributes": [
        {
          "attribute_code": "page_layout",
          "value": "product-full-width"
        },
        {
          "attribute_code": "options_container",
          "value": "container2"
        },
        {
          "attribute_code": "url_key",
          "value": "acer-laptop"
        },
        {
          "attribute_code": "msrp_display_actual_price_type",
          "value": "0"
        },
        {
          "attribute_code": "gift_message_available",
          "value": "2"
        },
        {
          "attribute_code": "required_options",
          "value": "0"
        },
        {
          "attribute_code": "has_options",
          "value": "0"
        },
        {
          "attribute_code": "meta_title",
          "value": "Acer Laptop"
        },
        {
          "attribute_code": "meta_keyword",
          "value": "Acer Laptop"
        },
        {
          "attribute_code": "meta_description",
          "value": "Acer Laptop "
        },
        {
          "attribute_code": "tax_class_id",
          "value": "2"
        },
        {
          "attribute_code": "category_ids",
          "value": [
            "3"
          ]
        }
      ]
    },
    {
      "id": 2,
      "sku": "Samsung TV",
      "name": "Samsung TV",
      "attribute_set_id": 4,
      "price": 323,
      "status": 1,
      "visibility": 4,
      "type_id": "simple",
      "created_at": "2022-09-28 11:36:21",
      "updated_at": "2022-09-28 11:36:21",
      "weight": 424,
      "extension_attributes": {
        "website_ids": [
          1
        ],
        "category_links": [
          {
            "position": 0,
            "category_id": "3"
          }
        ]
      },
      "product_links": [],
      "options": [],
      "media_gallery_entries": [],
      "tier_prices": [],
      "custom_attributes": [
        {
          "attribute_code": "page_layout",
          "value": "product-full-width"
        },
        {
          "attribute_code": "options_container",
          "value": "container2"
        },
        {
          "attribute_code": "url_key",
          "value": "samsung-tv"
        },
        {
          "attribute_code": "msrp_display_actual_price_type",
          "value": "0"
        },
        {
          "attribute_code": "gift_message_available",
          "value": "2"
        },
        {
          "attribute_code": "required_options",
          "value": "0"
        },
        {
          "attribute_code": "has_options",
          "value": "0"
        },
        {
          "attribute_code": "meta_title",
          "value": "Samsung TV"
        },
        {
          "attribute_code": "meta_keyword",
          "value": "Samsung TV"
        },
        {
          "attribute_code": "meta_description",
          "value": "Samsung TV "
        },
        {
          "attribute_code": "tax_class_id",
          "value": "2"
        },
        {
          "attribute_code": "category_ids",
          "value": [
            "3"
          ]
        },
        {
          "attribute_code": "country_of_manufacture",
          "value": "IN"
        }
      ]
    }
  ],
  "search_criteria": {
    "filter_groups": []
  },
  "total_count": 2
}
```

### 2.6 Get all the products by category

Retrieves the products based on a specific category ID.

**Node Input Params:**

| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
| categoryId     | 2     | String     |

**Sample Response:**

```
       {
  "items": [
    {
      "id": 1,
      "sku": "Acer Laptop",
      "name": "Acer Laptop",
      "attribute_set_id": 4,
      "price": 32,
      "status": 1,
      "visibility": 4,
      "type_id": "simple",
      "created_at": "2022-09-28 11:35:33",
      "updated_at": "2022-09-28 11:35:33",
      "weight": 5,
      "extension_attributes": {
        "website_ids": [
          1
        ],
        "category_links": [
          {
            "position": 0,
            "category_id": "3"
          }
        ]
      },
      "product_links": [],
      "options": [],
      "media_gallery_entries": [],
      "tier_prices": [],
      "custom_attributes": [
        {
          "attribute_code": "page_layout",
          "value": "product-full-width"
        },
        {
          "attribute_code": "options_container",
          "value": "container2"
        },
        {
          "attribute_code": "url_key",
          "value": "acer-laptop"
        },
        {
          "attribute_code": "msrp_display_actual_price_type",
          "value": "0"
        },
        {
          "attribute_code": "gift_message_available",
          "value": "2"
        },
        {
          "attribute_code": "required_options",
          "value": "0"
        },
        {
          "attribute_code": "has_options",
          "value": "0"
        },
        {
          "attribute_code": "meta_title",
          "value": "Acer Laptop"
        },
        {
          "attribute_code": "meta_keyword",
          "value": "Acer Laptop"
        },
        {
          "attribute_code": "meta_description",
          "value": "Acer Laptop "
        },
        {
          "attribute_code": "tax_class_id",
          "value": "2"
        },
        {
          "attribute_code": "category_ids",
          "value": [
            "3"
          ]
        }
      ]
    },
    {
      "id": 2,
      "sku": "Samsung TV",
      "name": "Samsung TV",
      "attribute_set_id": 4,
      "price": 323,
      "status": 1,
      "visibility": 4,
      "type_id": "simple",
      "created_at": "2022-09-28 11:36:21",
      "updated_at": "2022-09-28 11:36:21",
      "weight": 424,
      "extension_attributes": {
        "website_ids": [
          1
        ],
        "category_links": [
          {
            "position": 0,
            "category_id": "3"
          }
        ]
      },
      "product_links": [],
      "options": [],
      "media_gallery_entries": [],
      "tier_prices": [],
      "custom_attributes": [
        {
          "attribute_code": "page_layout",
          "value": "product-full-width"
        },
        {
          "attribute_code": "options_container",
          "value": "container2"
        },
        {
          "attribute_code": "url_key",
          "value": "samsung-tv"
        },
        {
          "attribute_code": "msrp_display_actual_price_type",
          "value": "0"
        },
        {
          "attribute_code": "gift_message_available",
          "value": "2"
        },
        {
          "attribute_code": "required_options",
          "value": "0"
        },
        {
          "attribute_code": "has_options",
          "value": "0"
        },
        {
          "attribute_code": "meta_title",
          "value": "Samsung TV"
        },
        {
          "attribute_code": "meta_keyword",
          "value": "Samsung TV"
        },
        {
          "attribute_code": "meta_description",
          "value": "Samsung TV "
        },
        {
          "attribute_code": "tax_class_id",
          "value": "2"
        },
        {
          "attribute_code": "category_ids",
          "value": [
            "3"
          ]
        },
        {
          "attribute_code": "country_of_manufacture",
          "value": "IN"
        }
      ]
    }
  ],
  "search_criteria": {
    "filter_groups": []
  },
  "total_count": 2
}

```

### 2.7 Customer Login
 
 This action generates a token for the particular customer which is required for adding items to the cart and placing an order.

**Node Input Params:**

| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
| User Name | johndoe@gmail.com     | String Type     |
|password | yellow@123 | String Type|

**Show Response:**
```
eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.eyJ1aWQiOjEsInV0eXBpZCI6MywiaWF0IjoxNjY2MTczNDg5LCJleHAiOjE2NjYxNzcwODl9.e3T7G0MWKsWHaJMUkgAG6gMTAptjuE3isG0MLn6bFzg 

```
### 2.8 Create Cart

 This action generates a unique cartId(quote_id) for the particular customer.	
                
**Node Input Params:**

| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
| customertoken | eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.ey     | String Type <br/> Generated using customer login action    |

**Sample Response:**
```
{
  "body": "5"
}
```
### 2.9 Add product to cart

This action helps to add the products to customer's cart.

**Node Input Params:**

| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
| customertoken | eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.ey     | String Type <br/> Generated using customer login action    |
|Product Details |{<br/>Qty:3,<br/>Sku:”acer-laptop”<br/>..<br/>..<br/>}| Object Type |

**Sample Response:**
```
           {
  "item_id": 4,
  "sku": "Acer Laptop",
  "qty": 1,
  "name": "Acer Laptop",
  "price": 32,
  "product_type": "simple",
  "quote_id": "2"
}
```
### 2.10 Get Cart Items

Fetches the list of products that currently exist in the cart.

| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
| customertoken | eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.ey|String Type<br/>Generated using customer login action|

**Sample Response:**

```
            {
  "body": [
    {
      "item_id": 4,
      "sku": "Acer Laptop",
      "qty": 1,
      "name": "Acer Laptop",
      "price": 32,
      "product_type": "simple",
      "quote_id": "2"
    }
  ]
}

```
### 2.11 Get Countries

Retrieves a list of countries and their regions. This data helps in filling up the billing and shipping details while placing an order.

**Sample response:**
~~~
{
  "id": "IN",
  "two_letter_abbreviation": "IN",
  "three_letter_abbreviation": "IND",
  "full_name_locale": "India",
  "full_name_english": "India",
  "available_regions": [
    {
      "id": "569",
      "code": "AN",
      "name": "Andaman and Nicobar Islands"
    },
    {
      "id": "570",
      "code": "AP",
      "name": "Andhra Pradesh"
    },
    {
      "id": "571",
      "code": "AR",
      "name": "Arunachal Pradesh"
    },
    {
      "id": "572",
      "code": "AS",
      "name": "Assam"
    },
    {
      "id": "573",
      "code": "BR",
      "name": "Bihar"
    },
    {
      "id": "574",
      "code": "CH",
      "name": "Chandigarh"
    },
    {
      "id": "575",
      "code": "CT",
      "name": "Chhattisgarh"
    }
  ]
}
~~~

### 2.12 Estimate Shipping Cost

This action estimates the shipping cost for the products that exist in the cart and provides the available shipping methods.

**Node Input Params:**

| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
| customertoken | eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.ey|String Type<br/>Generated using customer login action|
|Address| {<br/> region:”IN”, region_code:”AP”,<br/> street:[“stree1”,”stree2”],<br/> firstname:”John”,<br/> lastname:”Doe”<br/>…<br/>…<br/>}<br/>| Object Type |

**Sample Response:**

```
{
  "body": [
    {
      "carrier_code": "flatrate",
      "method_code": "flatrate",
      "carrier_title": "Flat Rate",
      "method_title": "Fixed",
      "amount": 10,
      "base_amount": 10,
      "available": true,
      "error_message": "",
      "price_excl_tax": 10,
      "price_incl_tax": 10
    }
  ]
}
```
### 2.13 Set Shipping and Billing Info
Updates the shipping and billing information provided by the customer and displays the available payment methods to place an order.

**Node Input Params:**

| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
| customertoken | eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.ey|String Type<br/>Generated using customer login action|
|Address| {<br/> region:”IN”, region_code:”AP”,<br/> street:[“stree1”,”stree2”],<br/> firstname:”John”,<br/> lastname:”Doe”<br/>…<br/>…<br/>}<br/>| Object Type |

**Sample Response:**

```
{"payment_methods":[{"code":"checkmo","title":"Check / Money order"}],"totals":{"grand_total":74,"base_grand_total":74,"subtotal":64,"base_subtotal":64,"discount_amount":0,"base_discount_amount":0,"subtotal_with_discount":64,"base_subtotal_with_discount":64,"shipping_amount":10,"base_shipping_amount":10,"shipping_discount_amount":0,"base_shipping_discount_amount":0,"tax_amount":0,"base_tax_amount":0,"weee_tax_applied_amount":null,"shipping_tax_amount":0,"base_shipping_tax_amount":0,"subtotal_incl_tax":64,"shipping_incl_tax":10,"base_shipping_incl_tax":10,"base_currency_code":"USD","quote_currency_code":"USD","items_qty":2,"items":[{"item_id":9,"price":32,"base_price":32,"qty":2,"row_total":64,"base_row_total":64,"row_total_with_discount":0,"tax_amount":0,"base_tax_amount":0,"tax_percent":0,"discount_amount":0,"base_discount_amount":0,"discount_percent":0,"price_incl_tax":32,"base_price_incl_tax":32,"row_total_incl_tax":64,"base_row_total_incl_tax":64,"options":"[]","weee_tax_applied_amount":null,"weee_tax_applied":null,"name":"Acer Laptop"}],"total_segments":[{"code":"subtotal","title":"Subtotal","value":64},{"code":"shipping","title":"Shipping & Handling (Flat Rate - Fixed)","value":10},{"code":"tax","title":"Tax","value":0,"extension_attributes":{"tax_grandtotal_details":[]}},{"code":"grand_total","title":"Grand Total","value":74,"area":"footer"
}]}}
```
### 2.14 Edit Cart Item

This action helps in updating the quantity of a particular item in the cart.

**Node Input Params**:

| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
| customertoken | eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.ey|String Type<br/>Generated using customer login action|
|Address| {<br/> region:”IN”, region_code:”AP”,<br/> street:[“stree1”,”stree2”],<br/> firstname:”John”,<br/> lastname:”Doe”<br/>…<br/>…<br/>}<br/>| Object Type | 
|Cart Item| {<br/>sku:”acer-laptop”, qty:”5”,<br/> cartId:”4”<br/>}<br/>|Object Type |
|Item id|2|String Type<br/> Retrieve from get cart items action|

**Sample Response:**
```
              {
  "item_id": 4,
  "sku": "Acer Laptop",
  "qty": 3,
  "name": "Acer Laptop",
  "price": 32,
  "product_type": "simple",
  "quote_id": "2"
}
```
### 2.15 Delete Cart Item
Removes items from the cart.

**Node Input Params:**

| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
| customertoken | eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.ey|String Type<br/>Generated using customer login action|
|Item id|2|String Type <br/> Retrieve from get cart items action|

**Sample Response:**
```
"true"
```

### 2.16 Create Order

This action places an order for the products in the cart and generates an order ID.

**Node Input Params:**

| Field Name | Sample Input | Remarks |
| -------- | -------- | -------- |
| customertoken | eyJraWQiOiIxIiwiYWxnIjoiSFMyNTYifQ.ey|String Type<br/>Generated using customer login action|
|Payment Method|check|String Type <br/> Retrieve from “set shipping and billing info” action|
|Billing Address|{<br/>region:””, region_code:””<br/>}|Object Type|

**Sample Response:** 
```
5

```

