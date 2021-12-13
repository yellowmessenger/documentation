---
title : Google Chat
sidebar_label : Google Chat
---

# Google Chat Channel Setup Help Doc

> ## Introduction

---

This document will help you understand features and limitations of Google Chat channel, and guide you in setting up your own Google Chat chatbot on Yellow AI platform.

> ## Pre-requisites

---

**Before setting up a chatbot:**

- [Create a new Google Cloud Platform (GCP) project](https://developers.google.com/workspace/guides/create-project#create_a_new_google_cloud_platform_gcp_project) if you don’t have one.

![Screenshot 2021-12-09 at 4.13.52 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/5209602D-6F58-4EC0-BEF5-2ED88C1BEE07_2/Screenshot%202021-12-09%20at%204.13.52%20PM.png)


- Enable Service Account and Generate Keys:
   - In the navigation panel go to **IAM & Admin → Service Accounts**

![Screenshot 2021-12-09 at 4.21.32 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/1AE5CCA9-077B-4A0C-B0DC-9FD8823B1091_2/Screenshot%202021-12-09%20at%204.21.32%20PM.png)

- On the next screen click on **+ CREATE SERVICE ACCOUNT**

![Screenshot 2021-12-09 at 4.21.46 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/3FCC51F4-550E-4324-AA24-36F103711F38_2/Screenshot%202021-12-09%20at%204.21.46%20PM.png)

- Add the Service Account Details in Step 1. Skip Step 2 & 3.

![Screenshot 2021-12-09 at 4.22.15 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/770B11C7-1BDA-4AC3-B5B9-9EC74F6225DC_2/Screenshot%202021-12-09%20at%204.22.15%20PM.png)

![Screenshot 2021-12-09 at 4.22.28 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/B33EE2E1-9FAD-411A-8A78-40FE2DB6D87D_2/Screenshot%202021-12-09%20at%204.22.28%20PM.png)

- Once the service account is created, open it.
- Go to **KEYS** tab and click on **ADD KEY →** Create new key and select JSON. Please save this file carefully as this can not be recovered.

![Screenshot 2021-12-09 at 4.37.47 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/3C8E7187-B6C4-48AD-997F-CB2734BE8AC2_2/Screenshot%202021-12-09%20at%204.37.47%20PM.png)

![Screenshot 2021-12-09 at 4.38.05 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/97524A85-DDA8-4F58-8227-4CE5CCFFFEFD_2/Screenshot%202021-12-09%20at%204.38.05%20PM.png)

![Screenshot 2021-12-09 at 4.38.19 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/A30EC30C-57F2-4900-8398-1BC81923DE5B_2/Screenshot%202021-12-09%20at%204.38.19%20PM.png)

- Enable Google Chat API:
   - In navigation go click on **APIs & Services**

![Screenshot 2021-12-09 at 4.18.05 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/C7AAEBB4-7064-4865-941A-C9A480AE8BDE_2/Screenshot%202021-12-09%20at%204.18.05%20PM.png)

- Click on **+ ENABLE APIS AND SERVICES**

![Screenshot 2021-12-09 at 4.18.20 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/B7481934-6896-4B39-8A79-1893F7EB0C9F_2/Screenshot%202021-12-09%20at%204.18.20%20PM.png)

- Search for **Google Chat API**

![Screenshot 2021-12-09 at 4.18.38 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/2BD3DF66-6CE9-4390-A0A1-BDAE4E4EA5A1_2/Screenshot%202021-12-09%20at%204.18.38%20PM.png)

- **Enable** on Google Chat API:
   - Once enabled, go to **Configuration.**

![Screenshot 2021-12-09 at 4.18.47 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/C0DB5ACA-670F-4778-874B-41AC76472B5E_2/Screenshot%202021-12-09%20at%204.18.47%20PM.png)

![Screenshot 2021-12-09 at 4.42.26 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/D47ABAAE-533B-4101-9ECB-F69264705E33_2/Screenshot%202021-12-09%20at%204.42.26%20PM.png)

- Fill in all the details to configure your Google Chat Bot:
   - Please check both the options for **Functionality**
   - For **Connection setting** select “Bot URL” and add the following:
      - For `cloud.yellow.ai` → `https://cloud.yellowmessenger.com/integrations/googleChat/receive/[BOT ID]`
      - For `app.yellowmessenger.com` → `https://app.yellowmessenger.com/integrations/googleChat/receive/[BOT ID]`

![Screenshot 2021-12-09 at 4.43.47 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/E4909823-7968-4FE2-9F76-06CE93A50BB2_2/Screenshot%202021-12-09%20at%204.43.47%20PM.png)

> ## Channel setup on yellow.ai platform

---

1) To connect your Google Chat account, go to **Channels → Communication → Google Chat → Connect.**

![Screenshot 2021-12-10 at 1.09.18 PM.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/52FFDE5A-4E81-4AE0-86F0-78383E741894_2/Screenshot%202021-12-10%20at%201.09.18%20PM.png)

2) Enter the **Client Email** and **Private Key.** You will find this in the JSON file you had downloaded earlier.

![Image.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/722C1A3D-BC4D-438D-BDF0-D62850284AB0_2/Image.png)

![Image.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/88CCF5CF-BB04-4777-9032-B801146B9C0E_2/Image.png)

![Image.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/57CAC722-2F2F-4D02-A3B6-260C833E59FF_2/Image.png)

3) Your Google Chat Channel should now be configured successfully!!

![Image.png](https://res.craft.do/user/full/a59774be-e9f6-fe9e-e9df-69fe0168e698/doc/EFB52470-8157-44BF-A8AD-F0AAE6660654/F68A2ECF-346C-48C7-966A-C0775CAAFC46_2/Image.png)

