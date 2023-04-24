---
title: Setup WhatsApp catalog
sidebar_label: Setup WhatsApp catalog
---

This document will guide you through how to create a WhatsApp catalog.

#### Prerequisites 

The following are the prerequisites to use WhatsApp Product node:

1. [Product Listed on Catalog](#21-create-product-catalog-on-facebook)

2. [Updated Business and Compliance Info](#23-business-and-compliance-info-mandatory-for-indian-number-waba)

3. Additional fields added incase of Indian businesses
4. [Catalog linked with the WABA](#22-link-catalog-to-a-waba)



#### Sample flow of WhatsApp single/multi product message (SPM/MPM)

* Currently, WhatsApp supports either a single product or a vertical carousel of up to 30 products in a single two way message.

   <img src="https://i.imgur.com/0Fc5Asl.png" width="350px"/>

   <img src="https://i.imgur.com/Nlw4IDw.png" width="350px"/>



* The recipient can click just on the view option to expand the product details or the vertical carousel of products as shown here.

   <img src="https://i.imgur.com/GnDzjeE.png" width="350px"/>

   <img src="https://i.imgur.com/CgEn4CB.png" width="350px"/>



* The recipient can add preferred products to the cart using the Add To Cart option or the + option across each item. Once the products are added to the cart, the recipient can send the cart to the business to proceed to the next step.

   <img src="https://i.imgur.com/ClYimi7.png" width="350px"/>



### Create product catalog on Facebook

The Facebook Commerce Manager (FCM) helps in listing the products to be used for SPM (Single Product Message) or MPM (Multi Product Message). It is not possible to send any product on WhatsApp without listing the products on the FB's Commerce Manager.

:::note
To use catalog, it's mandatory for the businesses to have a business manager account with Catalog.
:::


To create a Catalog in FB Commerce Manager for your Business:

1. Log on to [Facebook Business Manager](https://business.facebook.com/settings) and go to **Business Settings**. Use the client's BM to create Production Catalogs.

2. Navigate to **Data Sources** and click on **Catalog**.

   ![](https://i.imgur.com/kBNq6tm.png)


3. Select **Add** > **Create a New Catalog**.

   * If this will be your first catalog, click Get Started. Select **Create a catalog** and then click **Get Started**.
   * If you already have at least one catalog, you will see all of your catalogs listed. Select **+ Add Catalog** to create a new one.

   ![](https://i.imgur.com/EebkHmM.png)


4. Select the type of inventory you advertise or sell, then click **Next**.

5. Choose how you want to add items to your catalog - Upload product info or Connect a partner platform.

6. Select the Business Manager account that your catalog belongs to. This unlocks more ways to use your catalog than selecting a personal account and enables you to assign other people permission to work on the catalog. To select a Business Manager account, you must be a [business admin](https://en-gb.facebook.com/micro_site/url/?click_from_context_menu=true&country=IN&destination=https%3A%2F%2Fen-gb.facebook.com%2Fbusiness%2Fhelp%2F442345745885606&event_type=click&last_nav_impression_id=2bDTYoj64VaSUC2PQ&max_percent_page_viewed=52&max_viewport_height_px=711&max_viewport_width_px=1437&orig_http_referrer=https%3A%2F%2Fwww.google.com%2F&orig_request_uri=https%3A%2F%2Fen-gb.facebook.com%2Fbusiness%2Fhelp%2F1275400645914358&primary_cmsid=1275400645914358&primary_content_locale=en_GB&region=apac&scrolled=true&session_id=1QKGQufmtkRFBOVm3&site=fb4b&extra_data[view_type]=v3_initial_view&extra_data[site_section]=help&extra_data[placement]=%2Fbusiness%2Fhelp%2F1275400645914358).

7. Enter a name for your catalogue and click **Create**.

   ![](https://secure-res.craft.do/v2/L4WM1z6kJj18seBUUw2MuARGoGtYBZnsDbGiZ3oGKryUqPeWhxw6C4pK8vL23CmUiucQdeLh1YfYgmFg9TUaAhenEm6BPkxe7hedEtKwgZsKhiQfwNq9FEYvnMqZ96dCER56Nt13CzPmyRQJxCFRLsHNBTy1qh81pXxw1St8NXU9ZiCfaw29VfbfkiWo9vFZyGem8Evjc3CSBKnpgnaX2Yw1PqPq9UYVxQ6azZQvjfN6sg21tCgDLt2b1rr5N7WVz5V7vRJtawHHqbPh3H6Cvpcd6d56iRgRLURKGxB5TGGQY67ncV/Image.jpg)

:::note
For detailed instructions, see [Facebook's documentation](https://en-gb.facebook.com/business/help/1275400645914358?id=725943027795860).
:::

Once the Catalog is created, you can go to the Commerce Manager available on the top right and manage your Catalog from the Commerce Manager Dashboard.

You can add products to the Catalog either manually or through a [Data Feed](https://www.facebook.com/business/help/1898524300466211?id=725943027795860). 

An ideal way to manage your products is through Data Feed as it allows adding products with complete information using a CSV file, and sync the data through the Commerce Manager (CM). 

You can automate the sync based on your preferred cadence such as Hourly, Daily etc. To find the CSV headers and supported values on the Data Feed, see [here](https://www.facebook.com/business/help/120325381656392?id=725943027795860).


![](https://i.imgur.com/fL3D0n7.png)


It is important to note the following points in Catalog before using its products:

1. ContentID can be given from the business side or will be generated automatically from FB side. This ID needs to be unique and will be used as Product ID in the WhatsApp product message node.
2. It takes some time to update products when syncing the catalogs using the data feed. You cannot send products on WhatsApp until this process is completed.
3. For Businesses in India, it is mandatory to have these fields (origin_country, importer_name, and importer_address) filled in as per field specification before each product can be used as SPM/MPM. 
4. You can add the field values (origin_country, importer_name, and importer_address) in the CSV file or use a Data Rule to fill the values by default from the Data Feed settings page.

   ![](https://i.imgur.com/1oEGBny.png)



### Link Catalog to a WhatsApp business account

Once the Catalog is set up, the business has to share the Catalog access with the BSP (Yellow.ai) to use items from the Catalog in WABA accounts created by Yellow. 

To share Catalog access with the BSP and connect it to WABA - 

1. On the client's BM, go to **Catalog**  and select **Assign Partner**.

   ![](https://i.imgur.com/BCh7ZBZ.png)


2. Enter the BSP's (yellow.ai’s) BM ID to link to the Catalog of the business.

   <img src="https://i.imgur.com/kzQnZTG.png" width="70%"/>


3. The Businesses Catalog should show the BSPs name as a partner for the Catalog. Provide Manage Catalog Permission.

   ![](https://i.imgur.com/23bYVrY.png)


4. Once the access is shared, the BSP will get the Catalog listed at their end, as shown below.

   ![](https://i.imgur.com/XEcYZTy.png)


5. After getting access, the BSP has to link the Catalog to the WABA. To do this, the BSP has to go to the **Phone Number** page on the WABA account on BM, click on the **Cart** icon on the left pane, and then choose the Catalog that needs to be linked.

   <img src="https://i.imgur.com/5oJrzpP.png" width="70%"/>


6. Your Catalog should appear in the connected catalog list. This confirms that the Catalog is ready to be used on the WABA and the Phone number attached to this WABA.
 
 <img src="https://i.imgur.com/6NAB8Uy.png" width="70%"/>



### Compliance to use SPM/MPM on WhatsApp (Mandatory for Indian WABA)

It is mandatory for Indian businesses to provide the business and compliance information to use the SPM/MPM feature on their WABA accounts. This is mandatory for all Indian WhatsApp business accounts.

Log on to the [Cloud Platform](https://cloud.yellow.ai/) and go to **Channels** > **WhatsApp**, and fill in all the basic and additional details.

<img src="https://i.imgur.com/g7gw6v9.png" width="65%"/>



[](https://www.craft.do/s/0loidngTNNAzkK/b/8CA0C2DD-ECD2-437F-BBFB-C1303B7E0966/How_to_Create_an_End_to_End_Catalog_)

:::note
To create a new Catalog on the the Yellow.ai Platform, see [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#8-whatsapp-product-message).
:::


### FAQs

<details>
<summary>Is SPM/MPM supported on Cloud API?</summary>
<div>
 <br/>
 <div>Yes, WhatsApp SPM/MPM are now supported on Cloud API hosted WABAs as well.</div>
  </div>
</details>

<details>
<summary>Can we integrate the Catalog with the platform?</summary>
<div>
 <br/>
 <div>No, Catalog integration is not live yet and will be evaluated in Q1 2023.</div>
  </div>
</details>  

<details>
<summary>Can Shopify or other ecom platforms be used for syncing the products on FB Catalog?</summary>
<div>
 <br/>
 <div>Yes, Shopify Catalogs can be synced with WhatsApp Catalogs for the products uploaded on Shopify to be used on the SPM/MPM as well. Its requested to the client to get in touch with the Shopify Team to add the Sync of the products with WA Catalog to get started. The feature is available but not explored yet from Yellow’s side due to the limitation to access to an active Shopify instance.</div>
  </div>
</details> 

<details>
<summary>Can we upload or update the product quantity or availability from the Platform?</summary>
<div>
 <br/>
 <div>No, since there is no integration available for the CM and the platform, it is not currently possible to manage the catalog in any way from the platform.</div>
  </div>
</details> 

<details>
<summary>How many products can be added to a Catalog?</summary>
<div>
 <br/>
 <div>There is no limit as of now on the number of items that can be added to a catalog.</div>
  </div>
</details> 

<details>
<summary>How many products can be sent in a single message to the user?</summary>
<div>
 <br/>
 <div>Businesses can send up to 30 products on a MPM.</div>
  </div>
</details> 

<details>
<summary>Is the feature available similar to the Jio Mart WABA?</summary>
<div>
 <br/>
 <div>No, Jio Mart Catalog feature is a beta feature that is exclusive to JioMart and not available for GA or any other BSPs. There is no tentative timeline for the release of the feature.</div>
  </div>
</details> 

<details>
<summary>Can the business send dynamic pricing based on the user's location or other parameters?</summary>
<div>
 <br/>
 <div>No, product pricing is static and cannot be changed from user to user.</div>
  </div>
</details> 

<details>
<summary>Can the price or other mandatory fields be hidden if not required?</summary>
<div>
 <br/>
 <div>No, it's not possible to hide the mandatory fields like Image, Product Title, Description and Price can be hidden from the user while sending.</div>
  </div>
</details> 

<details>
<summary>Is it possible to send digital goods like recharges, Loan offers, and so on to be sent as a product message?</summary>
<div>
 <br/>
 <div> Yes, digital goods are allowed to be sent as SPM/MPM. BFSI customers can also use SPM/MPM to showcase card, load or other finance related products on SPM/MPM.</div>
  </div>
</details> 