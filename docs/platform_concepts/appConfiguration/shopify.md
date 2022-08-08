---
title : Shopify
sidebar_label : Shopify
---
## Scope of Integration

Yellow.ai Integration with Shopify allows you to seamlessly connect your Shopify app with the yellow.ai platform. Using this integration one can get collections, get products(by Collection, Title, Product ID), get customer details(by email), and get order details(by Customer ID). Apart from this, it also provides support for handling webhook events.


## Use-cases

Following are the use-cases which are currently accommodated in the Shopify Integration:

### Get All Collections:-
Get all Collections Node fetches all the available collections from shopify. For accessing all the collections one must enable the custom app to access **storefront data.**


### Get Products By Collection:-
Get products by collection integration node helps users in retrieving all the products from shopify based on the collection id provided.
#### Node Input Params:-
<table>
  <tr>
   <td>Parameter
   </td>
   <td>Type
   </td>
   <td>Sample Input
   </td>
  </tr>
  <tr>
   <td>collection_id
   </td>
   <td>String
   </td>
   <td><code><em>482865238</em></code>
   </td>
  </tr>
</table>


### Get Product Details:-
Get product details integration node helps users with retrieving the product details using the specified product id.
#### Node Input Params:-
<table>
  <tr>
   <td>Parameter
   </td>
   <td>Type
   </td>
   <td>Sample Input
   </td>
  </tr>
  <tr>
   <td>product_id
   </td>
   <td>Number
   </td>
   <td><code><em>632910392</em></code>
   </td>
  </tr>
</table>


### Get Products by Title:-
Get products by title integration node helps users with retrieving a list of products based on the specified title.
#### Node Input Params:-
<table>
  <tr>
   <td>Parameter
   </td>
   <td>Type
   </td>
   <td>Sample Input
   </td>
  </tr>
  <tr>
   <td>title
   </td>
   <td>String
   </td>
   <td><code><em>IPod Nano</em></code>
   </td>
  </tr>
</table>


### Get Product Variants:-
Get product variants helps users in retrieving a list of all the available variants based on the specified product id.
#### Node Input Params:-
<table>
  <tr>
   <td>Parameter
   </td>
   <td>Type
   </td>
   <td>Sample Input
   </td>
  </tr>
  <tr>
   <td>product_id
   </td>
   <td>Number
   </td>
   <td><code><em>632910392</em></code>
   </td>
  </tr>
</table>


### Get Order Details:-
Get order details integration node helps users with retrieving the details of the order based on the order id provided.
#### Node Input Params:-
<table>
  <tr>
   <td>Parameter
   </td>
   <td>Type
   </td>
   <td>Sample Input
   </td>
  </tr>
  <tr>
   <td>order_id
   </td>
   <td>Number
   </td>
   <td><code><em>450789469</em></code>
   </td>
  </tr>
</table>


### Find Customer by Email:-
Find customer by email integration node helps users with retrieving the details of the customer based on the provided email.
#### Node Input Params:-
<table>
  <tr>
   <td>Parameter
   </td>
   <td>Type
   </td>
   <td>Sample Input
   </td>
  </tr>
  <tr>
   <td>email
   </td>
   <td>String
   </td>
   <td><code><em>johndoe@gmail.com</em></code>
   </td>
  </tr>
</table>


### Get Orders by Customer ID:-
Get orders by customer id helps users with retrieving a list of all the available orders based on the customer id provided.
#### Node Input Params:-
<table>
  <tr>
   <td>Parameter
   </td>
   <td>Type
   </td>
   <td>Sample Input
   </td>
  </tr>
  <tr>
   <td>customer_id
   </td>
   <td>Number
   </td>
   <td><code><em>207119551</em></code>
   </td>
  </tr>
</table>



## Configuration

Configuring the integration with Shopify is straightforward.

Follow the steps defined below to start integrating:
### To get shopify Admin API Access Token and API Secret Key



1. Login into `shopify`
2. Go to your store
3. Go To Apps
   ![Shopify Apps](https://cdn.yellowmessenger.com/Juwo3hAYTvKA1650972582447.png)
4. Then click on `Develop apps for your store` and click on Create an app.
   ![Shopify Develop Apps](https://cdn.yellowmessenger.com/V7791fauviuE1650972835358.png)
5. Enter the name of the App and Emergency developer email id. click on Create app.
   ![Shopify Create App](https://cdn.yellowmessenger.com/IskNDOxC2G4x1650972595971.png)
6. Configure the necessary Admin Api read and write scope for Analytics, Assigned Fullfillment orders, customers, Discounts, Draft orders,  Fullfillment services, inventory,Merchant-managed-fullfillment orders, orders, product listing, Products and Storefront Api Scopes. Permission can be easily modified by the customer according to their need in private app.
7. Then copy the Admin Access Token and API Secret Key.
   ![Shopify Creds](https://cdn.yellowmessenger.com/qnS1UjQEQa6Q1650972607979.png)


### To integrate shopify with your bot on the platform:
1. Go to the integration section by selecting integrations from the switcher.
2. In Integration page search for the shopify .
   ![Yellow.ai Shopify Integration](https://cdn.yellowmessenger.com/GOIeBSXPTJdH1653913528873.png)
4. Enter the store name, Admin API Access Token and API Secret Key.
5. Click on Connect.
6. Once the integration is done successfully, You can find an Integration option available in addition to the existing nodes.
   ![Shopify Integration Node](https://cdn.yellowmessenger.com/O1CsKkYAtet01650972874113.png)

Following the above steps will connect your Shopify Store account with yellow.ai platform.

## Steps to perform if webhook deletion fails while disconnecting the integration:

1. Check if you can access the webhook page on the client dashboard
2. If you can access it, please try to delete it manually from the dashboard itself.
3. If you can't access it, please address the reason why you are not able to access it. (for example, the plan needs to be upgraded or the free trial expired).

- Navigate to Settings -> Notifications -> Webhooks.
- If you can see the existing webhooks like below, please try to delete them manually.

<img src="https://cdn.yellowmessenger.com/CW3EzE87AdRg1659352098947.png" alt="drawing" width="100%"/>


## References:-
1. [Shopify Custom Apps](https://help.shopify.com/en/manual/apps/custom-apps)
2. [Configuring Storefront data for getAllCollections integration node](https://community.shopify.com/c/shopify-apis-and-sdks/404-error-from-get-admin-collection-listings-json-for-one-store/m-p/367034/highlight/true#M19606)


## Sample Experience
Below is a video that depicts how this integration works

<**VIDEO WILL BE UPLOADED WITH UPDATED UI DESIGN LANGUAGE**>