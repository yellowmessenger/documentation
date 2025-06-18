---
title: Testing Voice agents using WebRTC feature 
sidebar_label : WebRTC for voice agents testing
---

This document is intended for **bot developers** for the purpose of testing voice agents.


While testing voice agents and previewing their output for customers outside India (using international numbers such as US, UK, or UAE), traditional methods have proven limiting:
- **Skype Enterprise plans** are expensive and not scalable for routine testing.  
- **Google Meet** supports only US & Canada numbers and can cause compatibility issues with voice agent functionalities.  
- Using multiple **DID** (Direct Inward Dialing) numbers for each country and manually switching between them is both time-consuming and costly.

To address these challenges, Yellow.ai now offers a **WebRTC** (Web Real-Time Communication) calling feature for voice agents. This enables browser-based calls directly from the platform—allowing you to test and experience agent interactions with Indian/non-Indian numbers without relying on external telephony systems.


:::note

WebRTC testing is enabled by default for the following regions: **R0, R2, R3, R4, and R5**.  To enable it for regions **R1, R6, or R7**, please contact the support team at [support@yellow.ai](mailto:support@yellow.ai).

:::


## Testing a voice agent using WebRTC

To test a voice agent using the WebRTC feature, follow these steps:

1. **Open the Preview Mode**  
   - Navigate to **Automation > Flows > Preview**.  
   - Select **Voice** from the dropdown.  

   ![Voice Preview Screenshot](https://hackmd.io/_uploads/HkpsjukVlx.png)

   > You cannot preview an individual flow for voice agents. When you click **Preview**, the entire agent is launched starting from the Welcome/Start flow.  Switching between flows during the session will disconnect the call.

2. **(Optional) Set a Caller Line Identity (CLI)**  
   - To display a test-friendly number instead of your personal/voice agent number, go to any **Node > Settings > Channels > Voice**.  
   - Under the **Caller Line Identity** field, enter the phone number you want to appear as the caller ID for the end user and **Save**.  

   ![CLI Screenshot](https://hackmd.io/_uploads/ryylMKJ4el.png)

3. **Start the Call**  
   - If not already granted, allow microphone access.
   - Click on the **Start Call** button.  
   - Enter the phone number you want to call (ideally your own or a end user’s number that you have access to).

   <img src="https://hackmd.io/_uploads/By7ThdJElx.png" alt="Phone Number Input" width="40%"/> <img src="https://hackmd.io/_uploads/SknwkFy4le.png" alt="Call Screen" width="35%"/>

4. **Answer and Test**  
   - Answer the call on the entered number/device.  
   - Begin interacting with the voice agents to test its flows, inputs (DTMF), and behaviors.

---


## Feature overview 

### Environment availability

WebRTC testing is only available in the following environments:
* Sandbox
* Staging
* Development


### Cost

No additional cost is involved in using WebRTC-based voice testing.

### Audio quality

Calls made using WebRTC will use 8kHz audio quality, matching standard telephony to help maintain parity between testing and production environments.

### DTMF input handling

WebRTC calls support DTMF INFO-based input transmission instead of audio tone detection.


### Network monitoring & feedback

* If **internet connectivity** drops or either party disconnects: The UI will display feedback indicating disconnection.
* If **packet loss or jitter** exceeds acceptable thresholds: Visual warnings will be shown to notify the developer.
* When making calls to numbers in different regions, you may experience latency, with the Round Trip Time (**RTT**) displayed. However, RTT isn't a direct indicator of connection quality. For example, a call from Region 0 to a voice agent hosted in Region 4 might show around 300ms RTT, even with excellent connectivity.

### Agent transfer during testing

When encountered with the **agent transfer** case during voice agent testing, calls will be allowed to continue for up to **2 minutes** before automatic termination by the system.

Before disconnection voice agent **developers must validate**:
* That the call is being successfully transferred or assigned to an agent.
* That relevant metadata (e.g., email, name, transcript) is passed correctly to the agent.

:::note
**Two testing scenarios**
* **Staging agent access available**: Developers can use staging agent credentials to log in and test full agent transfer flow.
* **No staging agent access**: Calls are routed to production agents, who will answer, announce "Yellow.ai Delivery Team is testing", and then disconnect.
:::
