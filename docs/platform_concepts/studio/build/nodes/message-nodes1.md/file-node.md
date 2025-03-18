---
title: File node
sidebar_label: File
---

File node allows you to share files with users. This node supports the file formats such as JPG, PDF, MP3, MP4, CSV, DOC, DOCX, TXT, HTML, PPT, and PPTX.

File node is used to share important documents, guides, or invoices, contracts, or promotional materials that the user can download.

**Limitaion**

* File size limit is 15 MB.

### Sharing static file through the File node

To configure static file format, follow these steps:

1. Drag and drop the file node in the flow editor.

    <img src="https://imgur.com/ugwN3mU.png" alt="drawing" width="90%"/>

2. Upload the file that you want to send to the user.

### Sharing dynamic file links with users using the File node

You can use File node to display the various file formats dynamically based on the user’s selection. For instance, when a user requests a copy of their insurance policy document. The AI-agent will prompt the user for details like their policy number to display the relevant file formats dynamically.

To display a dynamic file formats, follow these steps:

1. Go to **Functions** and add the below code to dynamically fetch the file format.

   ![](https://i.imgur.com/mPADcD2.png)

**Dynamic format**

```json
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

---


# Sending user-uploaded files to APIs


You can integrate file uploads within a chatbot workflow to enable collecting, processing, and transfering user-submitted files seamlessly. This section outlines how to export files uploaded by users via the chatbot and send them to third-party systems using APIs.

Once a user uploads a file—such as a file (document, image or video), the platform generates a file URL that can be used to transfer the file in different formats based on the receiving system’s requirements.

## Collecting user-uploaded files

The **File Prompt Node** allows users to upload their files through the chatbot. Each uploaded file generates a URL that is stored in a variable, enabling subsequent processing. You can then use the file URL to send the file data to external systems using one of the supported methods:

| Method                        | When to use                                                                                          |
| ----------------------------- | -------------------------------------------------------------------------------------------------- |
| 1. **Multipart Form-Data**       | Best for APIs that accept file uploads in a traditional form-data format. Supports multiple files. |
| 2. **Raw Binary (Octet-Stream)** | Ideal for APIs that require direct binary file input. Only supports one file per request.          |
| 3. **Base64-Encoded String**     | Suitable for APIs requiring file data within JSON or XML structures.                               |




### 1. Sending files via multipart form-data

The platform fetches the files from the provided URLs, downloads them, and includes their binary content in the form-data request before forwarding it to the API.


- This method is commonly used in browser-based form submissions.  
- The file is included as part of a `multipart/form-data` request.  
- Multiple files can be uploaded in a single request.  
- Additional form fields can be added if needed.  


#### Request Configuration

- Set the `Content-Type` header to `multipart/form-data`.
- Specify the file URL(s) in the form-data section.

#### Example Request


```plaintext
POST hhttps://sabl.execute-api.ap-south-1.amazonaws.com/UAT/upload-multipart

Content-Type: multipart/form-data

field1: value1
file1: {{url1}}
file2: {{url2}}
```


---

### 2. Sending Files as Raw Binary (Octet-Stream)

The platform retrieves the file content from the file URL and transmits its binary data as the request body.


- The file is sent as raw binary data in the request body.
- Suitable for APIs that accept direct binary file transfers.
- Supports only one file per request.
- Additional form fields are not supported.

#### Request Configuration

- Set the `Content-Type` header to `application/octet-stream`.
- The request body should contain the binary content of the file.

#### Example Request

```plaintext
POST https://sabl.execute-api.ap-south-1.amazonaws.com/UAT/upload-octet?filename=ss2.bin

Content-Type: application/octet-stream

{{file_url}}
```


---

### 3. Sending files as a Base64-encoded string

The platform fetches the file, converts it to Base64, and embeds it in the request payload before forwarding it to the API.

- The file is encoded in Base64 format and sent as a string.
- Useful for APIs requiring file data in JSON, XML, or other structured formats.
- Can be embedded within JSON request bodies or form fields.

#### Request Configuration

- Use the `$$toBase64()` function to convert the file URL into a Base64-encoded string.
- Insert the encoded file string into the request body.

#### Example Request

```html
POST https://sabl.execute-api.ap-south-1.amazonaws.com/UAT/upload-multipart
```

```json
{
  "file_name": "invoice.pdf",
  "file_content": "$$toBase64({{file_url}})"
}
```


---
