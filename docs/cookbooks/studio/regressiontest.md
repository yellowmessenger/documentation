---
title: Intents, FAQs and Utterances automated testing
sidebar_label : Intents and Utterances automated testing
---

Instead of manually training and testing intents, utterances, and FAQs, you can auto-generate and test them in bulk. This automation allows you to quickly train the AI-agent on all changes at once, saving time and reducing errors.

The platform will then run a prediction test and display results based on the confidence level. If the confidence level is low, the result will be displayed as a fail.

This guide will walk you through the process of testing intents, FAQs, and utterances in bulk via import.

### Test intents

You can upload all intents along with their associated utterances to your AI-agent and test them collectively. With a single click, you can train the AI-agent on all the changes at once. Based on the imported entities, the platform will then run a prediction test and display results based on the confidence level.

To test the intents, follow these steps:

1. Go to **Automation** > **Test**.

    ![](https://imgur.com/Bf7uPXz.png)
    
    
* You will see the following options. Choose your preferred options to test your AI-agent:
  * [Import Intents](#import-intents)
  * [Upload Utterances](#upload-utterances)

  ![](https://i.imgur.com/ziqOwM2.png)    
    
### Import Intents

1. Click the highlighted option below to import the entities from the Train section.

    ![](https://i.imgur.com/ddDV8rS.png)
    
2. Click **Sync and test intents** to test intents that are out of sync with the Train section.

     ![](https://i.imgur.com/PzNrLI8.png)
     
* This action will import intents from the Train section.

   ![](https://i.imgur.com/1PLaAfv.png)
   
3. Choose the intent you want to test.

     ![](https://i.imgur.com/F7q7NnZ.png)
     
4. In the Utterances field, type any utterance and click **Generate utterances**.   
     
   ![](https://i.imgur.com/0IlaXGd.png)
   
* A list of utterances will be generated.

5. Select the utterances that you need to test and click **+ Add utterances**.

    ![](https://i.imgur.com/ytU858S.png)
    
6. Click **Test intent**.

    ![](https://i.imgur.com/CbU9UNh.png)
    
* The platform will run a prediction test and display results based on the confidence level. If the confidence level is low, the status of the utterance is displayed as fail.

    ![](https://i.imgur.com/Pnnxxd2.png)
    
7. To test other intents, click the back arrow (on the top left next to the intent's name) and click **Test intents**.

    ![](https://i.imgur.com/RAwRUXF.png)
    
* This will test the utterances for all intents and display their status.

   ![](https://i.imgur.com/tBGbPhy.png)   
    
8. Click the **Download Report** button to download the tested utterances and access them offline.

     ![](https://i.imgur.com/i1nW3Hn.png)

The downloaded report includes the following details:

* **Utterance** - Utterances generated for the intents.
* **Intent** - Intents that will be triggered by those utterances.
* **predictedIntent** - The intent that was triggered for that utterance.
* **predictedConfidence** - The percentage at which the respective intent gets triggered.
* **Result** - Outcome of the predictions - **success** for successful predictions, **fail** for failed predictions.

### Upload Utterances 

You can upload a list of test utterances and  test it.

To upload utterances, follow these steps:

1. Click **Import entities** drop-down and select **Upload utterances**.

    ![](https://i.imgur.com/9VQJtCi.png)

2. Click the **Download icon** to download the template.

    ![](https://i.imgur.com/veg5wz0.png)
    
3. Fill in the template with the following details:
    * **Utterance**: The utterance for your intent.
    * **Journey**: The journey or flow associated with the utterances.
    * **Tag**: Labels that help recognize or filter important journeys.

     ![](https://imgur.com/BwRkJVn.png)
     
4. Click the **Upload file** button to upload your template.

    ![](https://i.imgur.com/RWIhioA.png)

5. Download the report from the **Reports** section to check the status of the uploaded utterances.

    ![](https://imgur.com/mRR7Pu5.png)

The report includes the following details:
   * **Utterance**: The utterances that were uploaded.
   * **Predicted Journey**: The journey to which the utterances were mapped.
   * **Journey**: The journey specified in the uploaded template.
   * **Status**: Indicates success or failure, based on the correct mapping of the utterance to the journey.


  ![](https://imgur.com/MewGlsn.png)

## Test FAQs

To test FAQs, follow these steps:

1. Click **Test FAQ** > below-highlighted icon to import the FAQs from train section.
  
    ![](https://i.imgur.com/FV3X7kl.jpeg)
    
2. Click **Sync and test FAQs**.

     ![](https://i.imgur.com/SKFtYIn.png)
     
* This action will import FAQs from the **Train** section.
     
     ![](https://i.imgur.com/fcGUYlT.png)

3. Click on any FAQ.

4. In the variations field, type any question or text and click **Generate variations**. 

      ![](https://i.imgur.com/j5BoMu2.png)
      
*  A list of variations will be generated.

   ![](https://i.imgur.com/aqv4mMa.png)
      

3. Select the variations you need to test and click **+ Add variations**. 

   ![](https://i.imgur.com/KieLjnZ.png)
   
* This will add the variations.   
   
4. Click Test FAQ.   

    ![](https://i.imgur.com/evcqhbo.png)

* The platform will run the prediction test and display results according to the confidence level. The result is pass if any utterance trigger has the same intent with high confidence, else it is fail. 

    ![](https://i.imgur.com/FTXS4Gp.png)

4. To test other FAQs, click the back arrow (on the top left next to the FAQ's name) and click **Test FAQ**.

    ![](https://i.imgur.com/fvOzfFs.png)
    
* This will test the FAQs and display their status.

   ![](https://i.imgur.com/qDZffjE.png)   
    
8. Click the **Download Report** button to download the tested FAQs and access them offline.

     ![](https://i.imgur.com/wgkPmli.png)

The downloaded report includes the following details:
  * **Utterance** - Utterances generated for the intents.
  * **Intent** - Intents that will be triggered by those utterances.
  * **predictedIntent** - The intent that was triggered for that utterance.
  * **predictedConfidence** - The percentage at which the respective intent gets triggered.
  * **Result** - Outcome of the predictions -  **success** for successful predictions, **fail** for failed predictions.


   ![](https://imgur.com/CgIklpw.png)

## Test KB

You can add a list of FAQs and upload it to generate answers based on the document uploaded in the KB section. Note that duplicate questions cannot be created and the answers will not be generated for them. You can include a maximum of 100 questions in an Excel template. 

To upload KB FAQs, follow these steps:

1. Choose Sandbox/Development environment.

2. Go to **Knowledge base**.

   ![](https://imgur.com/1ceNXU5.png)

3. Click **+ Add URL**. Add your website URL and click Save. 

    ![image](https://imgur.com/aEP8jvo.png) 
      
4. Go to **Automation** > **Test** > **Test KB**.

    ![](https://imgur.com/Bpw9GX9.png)

4. Click the download icon to download the template.

   ![](https://i.imgur.com/6gnZB8b.png)

5. Fill in the template with the following detail:

    * **Questions**: Enter the question for which you want to generate the answer.

      <img src="https://i.imgur.com/UC7kX3L.png" alt="drawing" width="40%"/>

6. Click **Upload questions** button to upload your template.

    ![](https://i.imgur.com/7fUf9YA.png)
    
* A report is generated with a percentage of answered questions.

    ![](https://i.imgur.com/QOI1Odx.png)

7. Download the report from the **Reports** section to check the status of the uploaded FAQs.

     ![](https://i.imgur.com/ngb8etC.png)

The report includes the following details:
   * **Questions**: The questions that were uploaded.
   * **Answers**: The answers are generated for the uploaded questions.
   * **Links**: Gnerates the links from where the answers are fetched from the uploaded document.
   
   ![](https://imgur.com/PuWMvcR.png)    
    
    

  
     


     