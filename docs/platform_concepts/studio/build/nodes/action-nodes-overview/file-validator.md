---
title: File validator node
sidebar_label: File validator
---

File Validator node allows you to validate specific file formats that users upload during a bot conversation. It ensures that the uploaded documents, images, or other file types meet the required format standards.
 
The supported file formats are JPG, PNG, GIF, MSG, PDF, MP4, MOV, HEVC, DOCX, PPTX, XLXS, MP3, OGA, and AMR.

You can use this node when you want to ensure that the files uploaded by the users are in the correct format before the bot processes them. It is useful in scenarios such as job applications, customer support, and verification processes where specific file types (for example, PDF, DOCX, JPG) are needed.

**Use case:**

* **Job application process**: A chatbot guiding users through a job application asks them to upload their resume and cover letter. The File Validator node ensures that the uploaded files are in DOCX or PDF format before submission.
* **Customer support**: When a user contacts a support bot, they may need to upload a screenshot of an issue. The File Validator node verifies that the image is in a valid format like JPG or PNG and within the size limit.
* **Document verification**: In a financial services bot, users are required to upload their identification documents. The File Validator node ensures the files are in accepted formats (example, PDF or JPG) for processing the user's application.

**Limitation**

* The maximum file size allowed is 20 MB.

**Configure file validator node**

**Scenario**: When a user engages with a customer support chatbot to report a technical issue with a product. The bot asks the user to upload a screenshot or video of the issue for further assistance.

To configure file validator node, follow these steps:

1. Drag and drop the File validator node on the flow editor.

2. Enter the message that will appear if the file validation fails.

     ![](https://imgur.com/s1GtI5X.png)
   
3. Enable **Advanced options** and define the following fields:
    * **Restrict invalid file upload**: Enable this option to restrict the invalid file upload.
    * **Maximum size (in MB)**: Set the file size. The maximum file size is 20 MB.
    * **Supported types**: Select the supported file type formats.
    * **Safeguard uploaded file**: Select this option to encrypted file paths instead of public URLs for secure data access. Both file name and file path will be captured.<br/> To access file name use, `{{{variables.selected_variable.fileName}}}`<br/>To access file path use,
`{{{variables.selected_variable.filePath}}}`
   * Capture uploaded file name: Enable this option to display the uploaded file name.

     <img src="https://imgur.com/LU1cnA0.png" alt="drawing" width="70%"/>

Refer to the following GIF to see how the File validator node works: 

   ![](https://imgur.com/fewagOd.gif)
    