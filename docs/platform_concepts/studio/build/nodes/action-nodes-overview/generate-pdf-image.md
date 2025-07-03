---
title: Generate PDF/Image node
sidebar_label: Generate PDF/Image
---

The Generate PDF/Image node allows you to create PDF and image files (JPG, JPEG, PNG) from DOCX, HTML, or Base64-encoded files. You can use this node when you want to generate documents (PDF) or images (PNG, JPG, and JPEG) based on user inputs.

**Use cases**

* **Flight boarding pass**: Automatically generate a PDF of a boarding pass for users after booking a flight.
* **Medical prescription**: Generate a patient's prescription as a downloadable PDF or image that can be easily accessed after a consultation

**Configure Generate PDF/Image node**

1. Drag and drop the Generate PDF/Image node to the workflow in the flow editor.

    <img src="https://imgur.com/yY1xHYY.png" alt="drawing" width="80%"/>
    
2. You can select the following formats to convert:
* [docx (to PDF)](#to-convert-from-docx-to-pdf-format)
* [HTML (to PDF/JPG/JPEG/PNG)](#to-convert-html-to-pdfjpgjpeg-format)
* [Base64](#to-convert-from-base64)
    
### To convert from docx to PDF format

To convert docx to PDF format, follow these steps:

1. Choose the **Docs** option. 

    <img src="https://imgur.com/yY1xHYY.png" alt="drawing" width="80%"/>
    
2. Define the following fields:
    1. In **Template**: Click **Upload file** and upload the template based on which the PDF should be generated. This document should be in `.docx` format and have placeholder values wherever the dynamic data is to be inserted. The placeholder should be enclosed in single brackets, that is`{placeholdername}`. For example, The user name is {user name}.
   2. In **+ Add Variable Mapping**: Enter the placeholder name that you have included in docx without the brackets in the left column and select a variable (in which the value is collected from the user) in the right column. You can mutiple placeholder names.
   3. **Select an output format:** Choose the PDF option as that's the only available option for docs.   
   4. Store the response in an object variable. For example, 'pdf_response'. 
   
3. Include a text node and enter this syntax:`{{{variables.pdf_response.file.url}}}` to view the pdf file.

    <img src="https://imgur.com/9lq68qv.png" alt="drawing" width="70%"/>
   
Refer to the following gif to see how the docx format is converted to pdf.

   ![](https://imgur.com/t1lvWpt.gif)

### To convert HTML to PDF/JPG/JPEG format

1. Choose the **HTML** option.

   ![](https://i.imgur.com/IP7PcU4.png)

2. Define the following fields:
   i. In **Select variable containing HTML string**: Choose the variable that contains the HTML string.
   ii. In **Select an output format**, choose the format in which the file should be generated, **PDF**/**JPG**/**JPEG**/**PNG**.
   iii. Enable **Advanced options** to set the margin and dimensions based on which the file should be geenrated.
   <img src="https://i.imgur.com/JTS0zZ8.png" alt="drawing" width="50%"/>
   
   iv. Store the response in an object variable like 'pdf_response'. For example, **pdf_response**. 
   
3. Include a text node and enter this syntax:`{{{variables.pdf_response.file.url}}}` to view the file in pdf or image format.
   
Refer to the following gif to see how the HTML format is converted to PDF/JPG/JPEG format.

   ![](https://imgur.com/VadEPOc.gif)

### To convert from Base64

There are two ways by which you can convert Base64 files from:
* [APIs](#apis)
* [Variables](#variables)
  
#### APIs  

1. In **Input type** choose **API**.
2. In **API**, choose the API added to your bot. If your API has dynamic paramters, add nodes to collect that information from users.
3. In **Path to a BASE64 key**, enter the path to the BASE64 key. 
4. **Select an output format**: Choose the PDF option.

    ![](https://i.imgur.com/fVfihOO.png)
    
:::info
To display PDFs from an API response, store the response in  an object variable, for example **pdf_response**. Include a text node and enter this syntax ```{{{variables.pdf_response.file.url}}}``` 
:::

#### Variables

1. In **Input type** choose **Variable**.
2. In **Select variable**, choose the variable that contains the BASE64 file.
3. **Select an output format**: Choose the PDF option. 

Display the file through the [File node](https://docs.yellow.ai/docs/platform_concepts/studio/build/nodes/message-nodes1/file-node). Simply choose the relevant variable from the **fetch from variable** dropdown, it will send the dynamically generated file as a PDF to the user. 

### Generate PDF file from CDN url

When PDF URLs are retrieved from an API response or internal database, you can use a custom script to generate a downloadable PDF file and share it with the user. 

This is done by formatting the file details into a JavaScript object and storing it in a variable of type Object, which is then used in the File node to deliver the file to the user.

Let's say your API returns a PDF file URL like:

`https://cdn.yellowmessenger.com/PpfArbF4dxlI1744625393376.pdf`

You can format and return this URL in a structure supported by the [File node](https://docs/platform_concepts/studio/build/nodes/prompt-node-overview/file-prompt-node) using a script function.

#### Steps to implement

**Step 1**: Write a [Function](https://docs.yellow.ai/docs/platform_concepts/studio/build/code) to format the File object. Use a function node or logic node to write the following script. It consists of PDF link and file name inside an object format expected by the File node:

```c
return new Promise(resolve => {
    // Replace the static link with your logic to extract the PDF link from API/database
    // Example: let pdflink = data.variables.pdfLink;
    let pdflink = "https://cdn.yellowmessenger.com/PpfArbF4dxlI1744625393376.pdf";

    let obj = {
        "file": {
            "url": `${pdflink}`,
            "name": "file name"
        }
    };

    console.log(pdflink, "link of the file");
    resolve(obj);
});
```

**Note**:
* **url**: Provide the full PDF URL.
* **name**: Provide the file name that will appear to the user when they download it.

**Step 2**: Store the response in an object variable
   * Save the output of the above function in a variable.
   * The variable should be of type Object.
   * Example variable name: pdfFileObject.

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/filenodepdf.png)

**Step 3**: Use the Object Variable in a File Node
   * Add a File node to your conversation flow.
   * In the Fetch from section, select Variable.
   * Choose the variable name used in Step 2 (example, pdfFileObject).

   ![](https://cdn.yellowmessenger.com/assets/yellow-docs/objectdata.png)

