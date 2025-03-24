---
title: Image node
sidebar_label: Image
---

Image node allows you to display static or dynamic images directly to users during conversations on the bot interface.

Use this node to display the visual context such as:

* **Static images**: Display images like logos, product photos, or illustrations on the widget during conversations.
* **Dynamic images**: Generate images based on user inputs or contextual data, such as fetching a QR code from an external system.
* **Product display**: Showcase items from a catalog for users to browse.
* **Data visualization**: Share graphs, charts, or infographics to explain complex information.
* **Event promotion**: Highlight event posters or promotional materials.

#### Limitations of Image node

- **File size restriction**: The maximum supported file size for images is 10MB.
- **Media type restriction**: Only static image formats like JPG and PNG are supported; other media types such as videos, animated GIFs, or audio files are not supported. 
- **Dimensions**: Recommended image dimensions: Width - 248px and Height - 164.2px.

### How to add Static image

You can use a pre-uploaded or hardcoded image URL.
Example: A company logo, event poster, or product image stored on a server.

To add the static image node, follow these steps:

1. Drag and drop the Image node into the flow editor at the desired conversation point.

    <img  src="https://imgur.com/YhI6oTt.png"  alt="drawing"  width="70%"/>

2. Select and upload the image from your local device to display it to users.

### How to add Dynamic image

You can use dynamic data to generate image URLs dynamically based on user input or system data. For example, you can fetch a QR code image from an API for a specific transaction. Ensure the dynamic source is reliable and produces images in compatible formats.

To display a dynamic image, follow these steps:

1. Go to **Functions** and add the below code to fetch the image dynamically. To know more about how to create a Function, click [here](https://docs.yellow.ai/docs/platform_concepts/studio/build/code#create-functions-in-ai-agent-builder).

   ![](https://i.imgur.com/piibW7F.png)

**A sample dynamic format for web**

```
const imageVariable = [{
  options: {  
    caption: {  
      type: 'text',
      value: 'image caption here' 
    },
  },
  url: 'image_url_here'
}]
```

**A sample dynamic format for WhatsApp**

```
const imageVariable = [{
  options: {  
    caption: {  
      type: 'text',
      value: 'image caption here' 
    },
  },
  url: location.file.url
}]
```

2. Add a Function node to the flow editor.

   <img  src="https://i.imgur.com/UKXka6I.png"  alt="drawing"  width="50%"/>
 
3. Select the function name and add a variable to store the response.
 
   ![](https://imgur.com/hugTwmB.png)

4. Add an Image node and select the variable, which you have selected in step 2 to display the dynamic image.

      <img  src="https://i.imgur.com/Jik3IDG.png"  alt="drawing"  width="70%"/>

Refer to the following GIF to see how the static and dynamic image works.

   ![](https://imgur.com/hilWgph.gif)