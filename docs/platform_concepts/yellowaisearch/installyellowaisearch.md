---
title: Install Yellow.ai search on your website
sidebar_label: Install yellow.ai search 
---

To install Yellow.ai Search on your website, follow these steps:

1. In your HTML file, place the below CSS tag at the end of the `<head>` tag.
      
    ```html
    <link rel="stylesheet" href="<https://cdn.yellowmessenger.com/plugin/search/latest/dist/assets/index.css>" />
    ```
    
2. Create the `window._ys_` configuration script at the bottom of the `<body>` tag.

    ```js
    <script>
      window.__ys__ = {
        botId: "your_bot_id", //Enter the unique identifier of your bot.
        target: "search_target", // Specify the target where you want to place the search bar on your website.
        useDefaultSearchBar: true // Set this to true if you want to use Yellow's default search bar.
        categories: [ //
          {
            label: "Products",
            value: 'products, 
          }
          {
            label: "Knowledge Base",
            value: "articles", 
          },
          {
            label: "Downloads",
            value: "downloads"
          }
        ],
      };
    </script>
    ```

3. After creating the initialization script, add the below script inside the body tag.

  `<script src="<https://cdn.yellowmessenger.com/plugin/search/latest/dist/index.js>"></script>`   