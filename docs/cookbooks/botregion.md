---
title: How to Determine the Region Where Your Bot is Hosted
sidebar_label : Bot region
---


This guide explains how to find out in which region your bot is hosted on the platform.

> To know the region of a bot, you must have **access** to the **Platform** and **Bot**. 

## Steps to identify bot region

### Method 1: Using the configure button

1. Login to the platform and open your bot.
2. Click on the **Configure** button located at the top right corner of the bot's home page. The region where the bot is hosted will be displayed.


<img src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXe_XTCN8_ji0WBoArQxBdy0-KO3uf9QGQ-spCAOA2ZuXMA4rmuL-IX6JtJMwhaF_VOnhEBRaYHFMGxOJhURsHDJqSKKUQ66huYZ7vSIu4ER30kHwWhww-IHv-_LnVTuj7gzHoxwBsM__HS-QgYhM-6nBtc?key=xTkWPmlh-46RdThnX_8ggQ" alt="drawing" width="50%"/> 


### Method 2: Using the Knowledge Base URL

1. Go to **Knowledge Base** of the bot.
2. Click on **Share** and then copy the URL. The region information is embedded in the URL as `region=`.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdtzX1dZEaqVUvDDo0JM8kw1GA43XFXQLMXb15LKYBmgzrp99WKjapzOLEW7aE-Tf-YnuBJ4w6W8YyProEmda2HyHSG4Yi_NYT91PEecEz5IPAi6OCfU9BMwr933pabQcUWib895-oPHzNdieT9MX-xvFic?key=xTkWPmlh-46RdThnX_8ggQ)**

### Method 3: Using Automation Flows

1. Navigate to **Automation > Build > Flows**.
2. Click on Preview. 

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfW7OCn2Lqbf_aF34xRfXkomi0hhocM-CtK2ewQwDYVdc2hSrvwPmc57YS8BRSWV8lCO84MsPAs_13Waa43Vmfqbtu13VRreSLLyBdQU5VgQUx2XyOa4xj-bimJCa_HC_wC9wMJzmQI3zPQySUpJ9UKCljb?key=xTkWPmlh-46RdThnX_8ggQ)**

3. In the preview window, click on the redirection arrow which will open a new page. Check the URL in the new page; the region will be indicated as `region=`.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfkD3UrKhpu4f1mFAy4mm4wnEmv2MiVxrM-1GWTX2E-G65a_jfiwNUgmAwYfbWRp0fn1AgMIk69cLIv7PYZSaAcVoRJuG0Ad4PUxNsg921fhvAl8Ev3vbsOGkm3Xcyx_JQ04Y2bJkITm8XdyqS8PRTPfRoT?key=xTkWPmlh-46RdThnX_8ggQ)**

**Sample URL Format** (In this URL, the region is specified after `region=`):
```
https://cloud.yellow.ai/liveBot/x1667286708237?region=4
```


The region codes in the URL correspond to the following locations:

| **Region Code** | **Location**   |
|-----------------|----------------|
| r0              | India          |
| r1              | MEA            |
| r2              | Jakarta        |
| r3              | Singapore      |
| r4              | USA            |
| r5              | Europe         |
