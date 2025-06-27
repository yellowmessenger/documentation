---
title: File prompt node
sidebar_label: File prompt
---

**File prompt** node enables users to upload files directly within a conversation. It checks the uploaded files to ensure they meet the required format criteria.

This node is particularly useful in scenarios where users need to submit supporting files, such as documents, images, or videos, to complete actions or provide verification within the AI-agent flow.

### Supported file formats:

- **Images**: JPG, PNG, GIF  
- **Documents**: PDF, DOCX, PPTX, XLXS  
- **Multimedia**: MP4, MOV, HEVC, MP3, OGA, AMR  
- **Other**: MSG  

**Limitation of the File prompt node**

* The maximum file size allowed is 20 MB.

**Configure File promot node**

To configure File promot node, follow these steps:

1. Drag and drop the File promot node on the flow editor.

2. Enter the message for users to upload a file and in **If validation fails** field enter the message that will appear if the file validation fails.

     ![](https://imgur.com/3i8SFSo.png)
   
3. Enable **Advanced options** and define the following fields:
    * **Restrict invalid file upload**: Enable this option to restrict the inavlid file upload.
    * **Maximum size (in MB)**: Set the file size. The maximum file size is 20 MB.
    * **Supported types**: Select the file formats that the AI-agent should accept. If you do not select a file format that matches the uploaded file, the AI-agent will display an "invalid file format" message. For example, if you select JPG, PNG, and PDF as supported formats, but the user uploads a GIF or MP4, the AI-agent will display a message that the file format is invalid.
    * **Safeguard uploaded file**: Select this option to encrypted file paths instead of public URLs for secure data access. Both file name and file path will be captured.<br/> To access file name use, {{{variables.selected_variable.fileName}}}<br/>To access file path use,
{{{variables.selected_variable.filePath}}}
   * **Capture uploaded file name**: Enable this option to display the uploaded file name.

     <img src="https://imgur.com/AHBK12E.png" alt="drawing" width="70%"/>