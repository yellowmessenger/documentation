---
title: Setup WhatsApp catalog
sidebar_label: Setup WhatsApp catalog
---

WhatsApp product catalog enables businesses to showcase and sell their products directly within the WhatsApp messaging platform. In catalog, you can provide detailed information about their products, including the product name, description, website link, price, and product code.

Here is a simplified overview of using the WhatsApp catalog:

1. Organize your products into categories to make browsing easier for users.
2. When users inquire about products, share the Catalog link with them.
3. Users can click on the Catalog link to browse through the available products.
4. For each item, users can click on the "Add to Cart" or "+" option to add it to their shopping cart.
5. Users can complete their purchases directly within the chat interface, without having to leave the conversation.

Businesses can share products with users using two interactive message types:

1. **Single Product Messages** (SPM): These messages display a single product item from the business’ inventory in a Product Detail Page (PDP) format. 
   
   <img src="https://i.imgur.com/0Fc5Asl.png" width="50%"/><img src="https://i.imgur.com/Nlw4IDw.png" width="50%"/>

2. **Multi-Product Messages** (MPM): These messages showcase up to 30 items from the business’ inventory, allowing users to browse through multiple products at once.

    <img src="https://i.imgur.com/GnDzjeE.png" width="40%"/><img src="https://i.imgur.com/CgEn4CB.png" width="40%"/>


## Setup WhatsApp product catalog

To set up a WhatsApp product catalog, you need to create a catalog under each WhatsApp Business Account (WABA). Each catalog is assigned with a unique catalog ID. For detailed instructions, see [Facebook's documentation](https://en-gb.facebook.com/business/help/1275400645914358?id=725943027795860).

### Create a catalog 

To create a Catalog in FBM (Facebook Business Manager) for your business, follow these steps:

1. Log on to [Facebook Business Manager](https://business.facebook.com/settings).

2. Navigate to **Data Sources** > **Catalog**.

   ![](https://i.imgur.com/kBNq6tm.png)
   
3. Click **Add** > **Create a New Catalog**.

   * For the first time you are creating a catalog, click **Get Started**. Select **Create a catalog**, and then click **Get Started** again.
   * If you already have at least one catalog, you will see all of your catalogs listed. Select **+ Add Catalog** to create a new one.

    ![](https://i.imgur.com/EebkHmM.png)
    
4. Enter the **Catalog name**, select the **Type of catalog**, and click **Create catalog**.

   <img src="https://i.imgur.com/QbxvLO8.png" alt="drawing" width="80%"/>

* This will create a new catalog. Once the Catalog is created, you can add products to the Catalog either manually or through a [Data Feed](https://www.facebook.com/business/help/1898524300466211?id=725943027795860).

5. Click **Open in Commerce Manager** at the top right to add and manage your catalog from the Commerce Manager Dashboard.

   ![](https://i.imgur.com/Fe4XEJD.png)

6. Select your preferred option. Using a Data feed allows adding products with complete information using a CSV file and syncing the data through the Commerce Manager (CM). In this case, **Data feed** option is selected.

   ![](https://i.imgur.com/LlqPgBI.png)

7. Click **Download template** and choose your preferred file format to download.
  
   ![](https://i.imgur.com/Ykc6JH2.png)
   
* The excel template will be downloaded to your device folder.

8. Open the downloaded template (excel sheet) and enter your catalog details.

   ![](https://i.imgur.com/rPZIeCd.png)
   
9. Go back to **Data sources** and click **Next**.  

   ![](https://i.imgur.com/jHEL5PH.png)

10. Enter the URL of the downloaded template with all the details of your catalog or upload from your computer and click **Next**.

    ![](https://i.imgur.com/72BR3Hv.png)
    
* This will create a catalog for your business.
     
11. Navigate to **Catalouge** > **Items** to view and manage all the items in your catalog.

   ![](https://i.imgur.com/1dLSamM.png)   

12. Click **Data sources** to automate the sync based on your preferred cadence such as hourly, daily, and weekly. To find the CSV headers and supported values on the Data Feed, see [here](https://www.facebook.com/business/help/120325381656392?id=725943027795860).

    ![](https://i.imgur.com/SKFq5d5.png)

Before using products from the catalog, it is important to consider the following:

* **ContentID**: This ID can be provided by the business or generated automatically by Facebook. It must be unique and will serve as the Product ID in the WhatsApp product message node.
* **Syncing time**: When syncing catalogs using the data feed, it may take some time for products to update. Products cannot be sent on WhatsApp until this process is completed.
* **Mandatory fields for Indian businesses**: For businesses in India, certain fields (origin_country, importer_name, and importer_address) must be filled out according to field specifications before each product can be used as SPM/MPM.
* **Adding field values**: You can add field values (origin_country, importer_name, and importer_address) in the CSV file or use a Data Rule to fill the values by default from the *Data Feed settings* page.

   ![](https://i.imgur.com/1oEGBny.png)
   
### Link catalog to a WhatsApp business account

Once the catalog is set up, the business has to share the catalog access with the BSP (Yellow.ai) to use items from the catalog in WABA accounts created by Yellow. 

To share catalog access with the BSP and connect it to WABA: 

1. On the client's BM, go to **Catalog** > **Assign Partner**.

   ![](https://i.imgur.com/BCh7ZBZ.png)


2. Enter the BSP's (yellow.ai’s) BM ID(Business Manager) to link to the catalog of the business.

   <img src="https://i.imgur.com/kzQnZTG.png" width="70%"/>


3. Ensure that the BSP's name appears as a partner for the catalog, and enable **Manage catalog** permission.

   ![](https://i.imgur.com/23bYVrY.png)


4. Once the access is shared, the BSP will get the catalog listed at their end, as shown below.

   ![](https://i.imgur.com/XEcYZTy.png)


5. After getting access, the BSP has to link the catalog to the WABA. To do this, the BSP has to go to the **Phone Number** page on the WABA account on BM, click on the **Cart** icon on the left pane, and then choose the Catalog that needs to be linked.

   <img src="https://i.imgur.com/5oJrzpP.png" width="70%"/>


6. Your Catalog should appear in the connected catalog list. This confirms that the Catalog is ready to be used on the WABA and the phone number attached to this WABA.
 
 <img src="https://i.imgur.com/6NAB8Uy.png" width="70%"/>
 
### Connect catalog with WhatsApp chatbot

Once the catalog is linked to WABA, connect the catalog with the whatsApp chatbot.

##### Prerequisites

* Ensure your [WhatsApp business account is connected to the Yellow.ai platform](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/whatsapp-configuration).
* Copy the catalog ID from the **Catalogues** page that you want to connect to your WhatsApp chatbot.
* Create a flow in the Automation module using the [WhatsApp product message](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#9-whatsapp-product-message) node.



To connect catalog with WhatsApp chatbot, follow these steps:

1. On the left navigation bar, click **Extensions**.

    ![](https://imgur.com/PIOvT6K.png)

2. Click **Channels** > **Messaging** > **WhatsApp Messenger**. 

    ![](https://imgur.com/bB6nmTk.png)
    
2. Click on the below-highlighted icon and select **Edit** option. 

    ![](https://imgur.com/bpukhiK.png)
    
3. Paste the **Catalouge ID** that you have copied and click **Save**.

    <img src="https://i.imgur.com/7yTtZVD.png" alt="drawing" width="80%"/>
    
* This will connect your catalog to the chatbot.

4. In the Automation module, create a flow using the [WhatsApp product message](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes#9-whatsapp-product-message) node, using Single Product Messages (SPM) or Multi-Product Messages (MPM) based on your use case.

   ![](https://i.imgur.com/2VbCAhb.png)

5. [Test the WhatsApp chatbot](https://docs.yellow.ai/docs/platform_concepts/channelConfiguration/test-wa-bot) to ensure that the catalog items are displayed in the chat interface.

### Compliance to use SPM/MPM on WhatsApp (Mandatory for Indian WABA)

It is mandatory for Indian businesses to provide business and [compliance information](https://www.whatsapp.com/policies/commerce-policy/) to use the SPM/MPM feature on their WABA accounts. This is mandatory for all Indian WhatsApp business accounts.

Log on to the [Cloud Platform](https://cloud.yellow.ai/), go to **Channels** > **WhatsApp**, and fill in all the basic and additional details.

   <img src="https://i.imgur.com/g7gw6v9.png" width="70%"/>

   
## Best practices to setup a WhatsApp Business Catalog 

You need to consider the following best practices while setting up your WhatsApp product catalog:

* **Categorize products**: Use categories to systematically organize your products. This helps users to browse through the catalog items that they want to buy.
* **Add high-resolution images and product details**: Ensure that your catalog features high-resolution images and product details such as product name, description, product code, pricing, and a direct link to the website to showcase your products.
* **Optimize catalog size**: You can add up to 500 items to their product catalog. It is recommended to include only the best sellers and in demand products.
* **Update products regularly**: Keep each product listing up-to-date with correct pricing, product names, and availability to provide accurate information to build trust with customers.

## FAQs

<details>
<summary>Is SPM/MPM supported on Cloud API?</summary>
<div>
 <br/>
 <div>Yes, WhatsApp SPM/MPM are now supported on Cloud API hosted WABAs as well.</div>
  </div>
</details>

<details>
<summary> Is it possible to connect the catalog with WhatsApp chatbot?
</summary>
<div>
 <br/>
 <div>Yes, once the catalog is linked to WABA, you can connect it with the WhatsApp chatbot.</div>
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
 <div>No, it is not possible to hide mandatory fields like Image, Product Title, Description, and Price from the user while sending.</div>
  </div>
</details> 

<details>
<summary>Is it possible to send digital goods like recharges, Loan offers, and so on to be sent as a product message?</summary>
<div>
 <br/>
 <div> Yes, digital goods are allowed to be sent as SPM/MPM. BFSI customers can also use SPM/MPM to showcase card, load or other finance related products on SPM/MPM.</div>
  </div>
</details> 