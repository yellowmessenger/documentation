---
title: Yellow.ai Search
sidebar_label: Yellow.ai Search 
---

## Yellow.ai Search overview

Yellow.ai offers a search engine powered by Document Cognition that can be deployed on any website. This enables website users to easily search for product information, documentation, and FAQs directly within the site.

To enable this search functionality on your website, you need to 
* share the data to be indexed via API. 
* After indexing, deploy the search engine on the parent website. 

This process ensures that the indexed data is accessible and searchable for website users.

## How does Yellow.ai Search work?

When users initiate a search query, the system fetches data from various categories and displays relevant results. You can customize categories to display on the search results page.

The out-of-the-box search bar has all the capabilities and you can customize the search bar’s appearance to match your website's branding.

   ![](https://i.imgur.com/lriNgEj.jpg)

The following are the features of Yellow.ai's Search:

* **Real-time search suggestions**: As users type in their search queries, the search feature provides up to 5 real-time suggestions. These suggestions include titles, brief descriptions, and image previews. If no image is available, a fallback image is displayed along with the title, description, and text. Keywords within the suggestions are highlighted for user clarity.
* **Efficient information categorization**: Easily locate relevant information with categorized search results. We organize results into different groups, streamlining your search experience.
* **Browsing made easy with pagination**: The search results page showcases 10 results at a time and offers pagination for easy navigation. It displays relevant information from the categories.
* **Direct search result access**: Every suggestion includes a direct link to its respective search results page, offering a shortcut to your desired information.

 <center><img src="https://i.imgur.com/u5B5g9X.png" width="80%"/></center>

If there are no results identified for a specific keyword, it displays the placeholder text that is configured.

   ![](https://i.imgur.com/cnu3Kk6.png)

## Install Yellow.ai Search on your website

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