---
title : Embed chat widget on SharePoint 
sidebar_label : Embed chat widget on SharePoint
---

This guide outlines the process of embedding the Yellow.ai chat widget into your Microsoft SharePoint site using [SharePoint Framework](https://github.com/pnp/sp-dev-fx-webparts/tree/main/samples/react-script-editor) (SPFX) extensions. 

To proceed, ensure you have admin access to SharePoint. For more detailed information on SharePoint, click [here](https://support.microsoft.com/en-us/sharepoint).

## Add your chat widget to SharePoint site

To add your chat widget to SharePoint site, you need to perform the following steps:

1. [Add the Extension](#activate-the-extension-on-your-sharepoint-site)
2. Upload the extension to SharePoint admin center
3. Activate the extension on your SharePoint site
4. Embed the chat widget

### Step 1: Choose your extension and package it

Before proceeding, determine whether to utilize an existing extension or develop a new one, and ensure proper packaging.

1. **Select your extension**: Decide whether to use an existing extension or create a new one. You can explore various extensions in the Microsoft community-maintained GitHub repository. In this scenario, a `script editor web part for modern pages` extension is used.
   
   :::note
   If you want to develop your own extension, refer to the available tutorials and guides.
   :::

2. **Packaging instructions**: Follow the packaging instructions provided on the web part's GitHub page. For additional help, refer to the [Deploy your client-side web part to a SharePoint page](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/serve-your-web-part-in-a-sharepoint-page).
3. You can also use our existing [package](https://drive.google.com/file/d/1-VZdG7pinHCeBv2xJkHWWMmsXf5i8_Df/view?usp=sharing).

Once the packaging process is finished, you will receive a file with the `.sppkg` extension. This file contains your packaged extension, ready for deployment.

### Step 2: Upload the extension to the SharePoint admin center

Once you have packaged the extension, follow these instructions to upload it to your SharePoint site, as explained here:

1. Access your SharePoint admin center by appending `/admin` to your SharePoint site URL.

2. Navigate to the **Manage apps** page, where you can upload packages with the `.sppkg` extension. Ensure that the state of the package is set to **Enabled**.

   ![](https://i.imgur.com/5Akayfb.png)

* This will upload your extension to your SharePoint site. <br/>For assistance on uploading the package, refer to [Deploy your client-side web part to a SharePoint page](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/serve-your-web-part-in-a-sharepoint-page).

### Activate the extension on your SharePoint site

To enable the extension at the site level, follow these steps:

1. Navigate to the **Settings** on your SharePoint site.

    ![](https://imgur.com/0P7DCk8.png)

2. Click **Settings** icon, then select **Add an app**.

   <img src="https://imgur.com/ajHsJ2b.png" alt="drawing" width="40%"/>

3. Choose your app from the list, and click **Add**.

4. Go to **My apps** page to view the package that you have previously added under *Added apps*.

    ![](https://imgur.com/zNu2Nxi.png)

### Embed the Web Widget

Once your extension is activated, you can embed the chat widget on your page. Follow these steps:

1. Open the SharePoint page where you want to embed the chat Widget.

2. Click **Edit** to enter edit mode.

3. Navigate to the web section at the top of the page, then select the extension you added.

4. Click **Edit markup**, and then select **Edit HTML Code**.

5. In the script editor, add your widget script.

Here is the sample widget script:

```javascript
<script type="text/javascript">
      window.ymConfig = {"bot":"botID","host":"https://r0.cloud.yellow.ai"};
    (function() {
        var w = window,
            ic = w.YellowMessenger;
        if ("function" === typeof ic) ic("reattach_activator"), ic("update", ymConfig);
        else {
            var d = document,
                i = function() {
                    i.c(arguments)
                };
            function l() {
                var e = d.createElement("script");
                e.type = "text/javascript", e.async = !0, e.src = "https://cdn.yellowmessenger.com/plugin/widget-v2/latest/dist/main.min.js";
                var t = d.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t)
            }
            i.q = [], i.c = function(e) {
                i.q.push(e)
            }, w.YellowMessenger = i, w.attachEvent ? w.attachEvent("onload", l) : w.addEventListener("load", l, !1)}
    })();
</script>
```

The chat widget is integrated into your SharePoint page:

   ![](https://imgur.com/H4fuL7C.png)