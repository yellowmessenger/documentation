---
title: Export flow
sidebar_label: Export flow
---

You can export a bot template to the Marketplace by selecting flows that you have created in the Studio module. The exported flow can be used as a template while building bots in the future. Once you export the template, you can choose options for exporting the flows. Based on the selected options, you can access the templates.

:::note
- Export flow will work only for bots created after Oct 2021.
- Export flow will work for all the bots irrespective of region. While cloning flows to another bot, source and destination has to be of the same region.
:::



In this article, you will understand:

* [How to export bot template to Marketplace](#1-export-bot-template)
* [How to export flows via Access control](#2-export-flow-via-access-control)

## <a name="home"></a> 1. Export bot template

You can export a single flow or more flows from a bot as a template. You can also export data from databases and FAQs. To export the bot template, you must provide the mandatory details such as key features, channels supported, industry, description, and so on.

### 1.1 Export bot template from Studio

To export a bot template to Marketplace, follow the below steps:

1. On the **Overview** page, click **Studio** from the module switcher or click **Export flow template** under **Flows** section.
2. Click on the flow that you want to export.

   ![](https://i.imgur.com/pPJUHjM.png)

3. Click **Export flow template** under **Flows** section.

   ![](https://i.imgur.com/NcdTQDf.png)
4. Enter the following mandatory fields details:
<img src="https://i.imgur.com/d0BrkuS.png)" alt="drawing" width="60%"/>

| Name | Description |
|------|-------------|
| Template name | By default, you can view the name of the template. You can also modify the name of the template according to your business needs. |
| Overview | Enter the description of the selected flow. |
| Component type | Select the component type based on the flow that you have selected.<br/> <img src="https://i.imgur.com/44tq00E.png)" alt="drawing" width="50%"/> |
| Template icon | You can select a preconfigured template icon or you can upload the icon of your choice. ![](https://i.imgur.com/hPTOxCL.png) |
| Description | The description that you enter in this field is displayed on the preview page when you click on the template. |
| Flows | If you want to include the other flows in the same template, you can select flows that are displayed in the drop-down. ![](https://i.imgur.com/7deVwfk.png) |
| Add FAQs | You can export FAQs as part of the template by enabling the toggle button. ![](https://i.imgur.com/4fpQd4a.png) |
| Key features | You can add up to three key features to your template. The features that you add are displayed on the template cover. |
| Template tags | The tags that you enter in this field help you to improve the search when you try to search for the particular keyword in your use case. |
| Use cases | You can select up to three categories that are available in the drop-down that suit your template. ![](https://i.imgur.com/aVZJ3M7.png) |
| Languages | To view your template in multiple languages, you can select the language based on your choice. |
| Industries | You can select up to three industries that suit your flow. |
| Channels | Select the channel that you want your template to be integrated with. | 

5. Click **Next**.
   ![](https://i.imgur.com/gaVSXZh.jpg)
6. You can switch to other flows if you have selected more than one and preview the flow that you want to export.

   <img src="https://i.imgur.com/VbIYpfD.png)" alt="drawing" width="50%"/>

7. Select who can access this template by using the following options:


   * **Myself**: You can publish and reuse this template for yourself.
   * **Training**: Only the user who has access to the particular subscription can access the exported template.
   * **Public:** The template gets published in the Marketplace only if it approved by the admin.

   <img src="https://i.imgur.com/Oy5FoDN.png)" alt="drawing" width="50%"/>


### 1.2 View exported templates
Users can view the templates submitted for review Under **User account** > **Exports**. 
<img src="https://i.imgur.com/B3U98x6.png)" alt="drawing" width="100%"/>

Users can view the template status from this page.

![](https://i.imgur.com/oynJE4x.png)

### 1.3 Publish exported templates

The templates exported to a private marketplace are published automatically without a review process.

The templates exported for a subscription must be submitted for review and will be available on this page. The admin of the subscription will be able to view, test, and publish the templates.

The templates exported to the public marketplace must be submitted for review and will be available on this page. The admin of the public marketplace will be able to view, test, and publish the templates.

![](https://i.imgur.com/aAR4eF3.png)

### 1.4 View approved template in Marketplace
- You can now export templates to a private marketplace. These templates will be visible and can be imported only by the respective user. This will not be accessible to any external user.
- You can also export templates to a marketplace that is accessible only to members of a particular subscription. These templates will be visible and can be imported only by the users within the subscription.

![](https://i.imgur.com/e6T16cV.png)

## <a name="exportflow"></a> 2. Export flow via Access control

To export flow via Acces control, follow the given steps:

1. Click **Access Control**.

![](https://i.imgur.com/2LmTBoA.png)


2.  Click **Marketplace** > **Upload component** > **Journey**.  
      
![](https://i.imgur.com/L6ijwJK.png)

3. Fill in relevant details. Click **Next** > Next for Bot variables > **Submit**.  
      
![](https://i.imgur.com/yvJl50R.jpg)
      
![](https://i.imgur.com/3s6LBMN.png)
      
![](https://i.imgur.com/UGtIhmG.png)

4. Click  **Test** (Don’t click on “Submit for review”). Click on Test (again) > Select environment as **Staging** and the bot name where the flow needs to be copied. Click on **Import**.
  
:::note 
All the flows tagged to a particular category will also get copied to another bot along with the test flow. Thus, we recommend creating a different category for the flow that needs to be copied to other bots.  
:::

![](https://i.imgur.com/nNj4fLg.png)
  
![](https://i.imgur.com/anejKNs.png)

![](https://i.imgur.com/jPDf6T8.png)

![](https://i.imgur.com/JY4Sy85.png)

5. Check the bot to which the flow is copied. The copied flow is reflected with a red dot.  

:::note 
In case any other flows get copied along with the test flow, this would have happened because all the flows were tagged under a single category and unwanted flows can thus be deleted manually.  
:::
     
![](https://i.imgur.com/XF0tnuq.png)

