---
title: File node
sidebar_label: File
---

File node allows you to share files with users. This node supports the file formats such as JPG, PDF, MP3, MP4, CSV, DOC, DOCX, TXT, HTML, PPT, and PPTX.

File node is used to share important documents, guides, or invoices, contracts, or promotional materials that the user can download.

**Limitaion**

* File size limit is 15 MB.

### How to configure static file format

To configure static file format, follow these steps:

1. Drag and drop the file node in the flow editor.

    <img src="https://imgur.com/ugwN3mU.png" alt="drawing" width="90%"/>

2. Upload the file that you want to send to the user.

### How to configure dynamic file format

You can use File node to display the various file formats dynamically based on the user’s selection. For instance, when a user requests a copy of their insurance policy document. The AI-agent will prompt the user for details like their policy number to display the relevant file formats dynamically.

To display a dynamic file formats, follow these steps:

1. Go to **Functions** and add the below code to dynamically fetch the file format.

   ![](https://i.imgur.com/mPADcD2.png)

**Dynamic format**

```c
{
    "file": {
        "name": "Product_Manual.pdf",
        "url": "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf",
        "urlEncoded": true/false
    }
}
```

2. Add a Function node to the flow editor.

   <img  src="https://i.imgur.com/hZoIM4I.png"  alt="drawing"  width="50%"/>
 
2. Select the function name and select a variable to store the response.
 
   ![](https://i.imgur.com/67ugrSj.png)

3. Add a File node and select the variable to display the dynamic file format.

     <img  src="https://i.imgur.com/xXwioa1.png"  alt="drawing"  width="50%"/>

Refer to the following GIF to see how the file node works.

   ![](https://imgur.com/bDNsdi0.gif)