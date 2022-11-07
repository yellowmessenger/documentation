---
title: Regression Tests on Cloud
sidebar_label : Regression Tests on Cloud
---


The regression test feature enables the QA team to do the bulk testing of utterances to check whether it is triggering the expected journey/intent. It is available for both cloud/app bots.

**Use-case**

After the QA team has written the set of utterances, it takes a lot of time to manually execute those utterances one by one. Using this feature you can reduce the time taken for the execution of test utterances from days to hours.

:::note
This is an MVP and not enabled for multilingual and FAQs
:::

## 1. Demo for cloud bot

Follow the given steps to perform a regression test for cloud bots: 

1. **Prepare the Utterance List and write the expected intent.**

Even before going to the platform to use this feature, prepare the list of utterances and their respective expected intent. 

* QA Team will write the list of utterances.
* During handover studio devs will write the expected intent in the journey column. 
* Keep the utterance list ready with columns only as (utterance, journey, and tag).


:::note
- Make sure that it is written the same. These column names are case-sensitive. 
- Bug to be resolved: Intent name must be entered in the journey column (excel sheet).
:::

![](https://i.imgur.com/27smAMS.jpg)

2. **Upload the list (from the previous step)and Generate the report.**   


- Open **Studio** > **Regression** (on left sidebar).  

![](https://i.imgur.com/Ig2613P.png)

- Clicking regression will open the regression suite in a new tab.   

![](https://i.imgur.com/Q3OiT7x.jpg)
    
- Click **Utterance Management**. 

![](https://i.imgur.com/07JkyCG.png)
    
- Download the utterance list file generated in step 1 as CSV and upload it here.

![](https://i.imgur.com/fiongPq.jpg)
    
- Wait for the utterance 'report ready' icon to pop up and click **Reports**.

![](https://i.imgur.com/xS1mEQO.jpg)
    
- Download the report for the latest uploaded utterance list.

![](https://i.imgur.com/hNPOLjm.jpg)



:::note
If you are in Dev Environment it will open up the flows and intents in dev env only. It will give results based on the intent trained in the dev environment. If the bot is published on live, then you can select live env respectively. The same goes for sandbox, staging, and production.
:::

3. **Add Pass/Fail result.**

- Download the report.
- Add the downloaded data in the same file as a different sheet. Preferably named as “Report”.

![](https://i.imgur.com/zfBdrQs.jpg)


- Remove/hide columns Confidence, status, created from, and created date. Add a column “Result”

:::note
As mentioned above Journey here means expected intent & Predicted Journey means predicted intent.
:::

![](https://i.imgur.com/Va43gFR.jpg)


- Write formula in Column D. (=B2=C2) and drag down. It will populate the column with True/False. 


![](https://i.imgur.com/dUf08QW.jpg)


4. **Verify results**.

If the result is: 

- **True**: Expected Intent is the Predicted Intent. It confirms the correct intent will be triggered with the respective intent.

- **False**: Filter out the false results and check if you need to retrain the bot/or do some other corrective steps.






