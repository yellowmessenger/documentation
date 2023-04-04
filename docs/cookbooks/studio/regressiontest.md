---
title: Intents, FAQs and Utterances automated testing
sidebar_label : Intents and Utterances automated testing
---

Instead of creating utterances manually, you can now auto-generate them and run test utterances in bulk. Before publishing, you can test these utterances to check whether each one is mapped to the respective intents.

To try this, 

1. Go to **Studio** and click **Test bot**.

![](https://i.imgur.com/VsR4lqC.png)


You will see the following options. 

![](https://i.imgur.com/QIdy6nP.jpg)


Choose how you want to test your bot. 

1. [Import Intents](#1-import-intents)
2. [Upload Utterances](#2-upload-utterances)
 
 :::note
 To switch between **Upload Utterances** and **Import Intents**, click the arrow beside **Import Intents**.
 ![](https://i.imgur.com/PBebGxT.png)
 :::

## 1. Import intents

If you haven't uploaded utterances/FAQs to your bot and would like to import them and test them, click **Import Intents**.

### 1.1 Test intents

To test intents,

1. Click on any intent.
2. In the **Utterances** field, type any utterance and click **Generate utterances**. A list of utterances would be generated.

![](https://i.imgur.com/NKiWG2R.png)


3. Select the utterances you need to test and click **Test intent**.

![](https://i.imgur.com/ed5sIaV.png)


 The platform will run the prediction test and display results according to the confidence level. The result is pass if any utterance trigger has the same intent with high confidence, else it is fail. 
 
![](https://i.imgur.com/6Yp9J3B.png)
 
4. To test all the other intents, click the back arrow(on the top left next to the intent's name) and click **Test Intents**. 

This action will test the utterances for all the intents and give the status regressively. It's useful when you are making changes to your bot. You don't have to test each and every change, with a click you can collectively train the bot on all the changes.

![](https://i.imgur.com/iKGRhZP.png)

5. To download these tested utterances and access them offline click the **Download report** button. 

![](https://i.imgur.com/i1nW3Hn.png)

The downloaded report has the following details

* **utterance** - utterances generated for the intents
intent - intents that will get triggered through those utterances.
* **predictedIntent** - The intent that was triggered for that utterance.
* **predictedConfidence** - The % at which the respective intent gets triggered.
* **result** - result of the predictions, success- predicted successfully, fail - prediction failed.

### 1.2 Test FAQs

To test FAQs,

1. Click on any FAQ.
2. In the variations field, type any question/text and click **Generate variations**. A list of variations would be generated.

![](https://i.imgur.com/QvXdhqA.png)

3. Select the variations you need to test and click **Test FAQ**. 

![](https://i.imgur.com/0F9Is9F.png)

The platform will run the prediction test and display results according to the confidence level. The result is pass if any utterance trigger has the same intent with high confidence, else it is fail. 

![](https://i.imgur.com/FTXS4Gp.png)

4. Click the back arrow(on the top left next to the faq's name) and click **Test Intents** to test all the other intents. This will test the variations for all the FAQs and give the status regressively. It's useful when you are making changes to your bot, you don't have to test each and every change, with a click you can collectively train the bot on all the changes.

![](https://i.imgur.com/35gWFNY.png)


5. To download these tested utterances and access them offline click the **Download report** button on the same page. 

![](https://i.imgur.com/kPnJWSi.png)

The downloaded report has the following details

* **utterance** - utterances generated for the intents
* **intent** - intents that will get triggered through those utterances.
* **predictedIntent** - The intent that was triggered for that utterance.
* **predictedConfidence** - The % at which the respective intent gets triggered.
* **result** - result of the predictions, **success**- predicted successfully, **fail** - prediction failed.


## 2. Upload utterances 

If you already have a list of test utterances and want to just test them, click on  **Upload Utterances**. 

1. Click the download icon to download the template.
![](https://i.imgur.com/bj9voiI.png)
2. Populate your utterances in the template.

![](https://i.imgur.com/GPG0zVE.png)

**utterance** - utterance for your intent
**journey** - the journey/flow the utterances are associated with
**tag** - labels you add that helps in recognizing/filtering important journeys

4. Click the **Upload** button to upload this file.
5. Check the status of those utterances by downloading the report from the **REPORTS** section.

![](https://i.imgur.com/KIp9a0o.png)

The report has the following details,

* **utterance** - The utterances that were uploaded
* **Predicted Journey** - The journey to which the utterances were mapped.
* **Journey** - The journey that was uploaded in the template.
* **Status** - Success/failure which depends on the mapping of the utterance with the right journey.

![](https://i.imgur.com/bBeDZhn.png)




