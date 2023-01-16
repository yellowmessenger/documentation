---
title: Event-triggered Workflow campaign
sidebar_label: Event-triggered Workflow campaign
---

## 1. Introduction

Event-Triggered workflows enable you to trigger personalized campaigns based on user actions.  These workflow campaigns enable reaching out to your users on multiple channels at the right time, in the right context.

#### Use cases
The following are some examples of where you can use Event-Triggered workflows: 
* **Reducing cart abandonment** - Send reminders to complete the purchase to users who have added items to their cart and didn't proceed with the purchase.
* **Welcome mail to new users** - Welcome your new users after they have successfully signed up.
* **Driving up LTV** - Engaging loyal customers at critical moments to drive sales.


## 2. Create an Event-Triggered workflow campaign

### Step 1: **Add an event**:
To create a custom user event, follow these steps:
1. In Studio, go to the **Event** tab and click **Custom events** > **+Add event**.
2. In **Event name**, name the event.
3. In **Event description**, enter a brief description about the event.

<center>
   <img src="https://i.imgur.com/GhMQpyZ.png" width="400"/>
</center>

3. Click **Create event**.
4. Push the custom event data of a user using the [Push user event](https://documenter.getpostman.com/view/17583548/UVsEVUsg#00eb59cf-7f00-461e-8d53-94eafb056a9a) API. It needs the `userId` of the registered user. Events help you track user actions or trigger a Journey or Campaign for that user.

   If the `userId` does not exist on [yellow.ai](http://yellow.ai/)'s User360 module, you need to call the [User create API](https://documenter.getpostman.com/view/17583548/UVsEVUsg#e7271fa6-4122-4e0b-a535-fe0354462c35) and then [push the event](https://documenter.getpostman.com/view/17583548/UVsEVUsg#00eb59cf-7f00-461e-8d53-94eafb056a9a) data.

   You can use a phone number or email address as a UserID and needs to be unique. For more details, see [userId](/docs/platform_concepts/engagement/cdp/user_data/user_properties#13-user-id-userid-as-a-property).

### Step 2: Create Workflow

Workflow campaign is like a flow which you can trigger from the Engage Module. 

To create a Workflow campaign, follow these steps - 

1. Create a new flow to use in your Workflow campaign.

   From **Studio** >  **Create flow**. [OR]
   ![](https://i.imgur.com/owb39Q6.png)
   
   From **Studio** > **Flows** > **Create flow**.

    ![](https://i.imgur.com/KtDjtdm.png)

2. Set to trigger the flow when the event occurs. 

   ![](https://i.imgur.com/uiOAUyg.png)

3. To the Start node add a new **Action** node, **Outbound notification**. There is no need to configure the start node for workflows.

  .   ![](https://i.imgur.com/clEtIEw.png)

![](https://i.imgur.com/Eo7aEiZ.png)

4. Map **To** to a CDP attribute of the notification type (for example, phone for WhatsApp, email for Email).
5. Use various *Action* nodes in between flows to fetch notification status; use the Delay node to add timeout.

![](https://i.imgur.com/gL830m9.png)

6. Map Template params properly with CDP Attribute or Bot variable so that the Template can be sent to the user.

:::note
* There should be at least 1-2 minutes delay between an Outbound Node and Notification Status Node.
* It is recommended to have at least 2-3 channels configured in a bot for  Workflow Campaigns to have better fallbacks.
* Currently, not all the Action Nodes are supported in a Workflow. Basic functionalities such as Outbound Nodes, Delay Nodes, and DB Updates are compatible with Workflow Campaign.
:::



### Step 3: Schedule an event-triggered workflow

1. Once the flow configuration is completed, go to the **Engage** module > **Journeys**.

   ![](https://secure-res.craft.do/v2/fBLgv79om61Wkayxka4j4CN2DkH7RzhJqGLMgedFeUXayq6vGVewyUg8TvzoEJobPXBAc6huFJLc96a9p4n3NUizovumCGyAyBZNY3eGCaseAZ4KA1yvaQe356BHiNUKGQu2UJxEJSoLmiFg9aF4KnPCvn8AUcv1DCWApE8CpVKk3sgv8VmLhrY6WMEcB9B9wnHobhyxsXs3NXccjFwXWSw9woF4T8wcHG6gdmCj8U27niPYymAZKNDTTjS3uCnLD5qXyYbpHSEw7cJXXGvtWRTtC3ybgwup3BEj8NVU3EejhEC9Ko/Screenshot%202022-11-07%20at%2011.32.36%20PM.jpg)

2. Click **Create campaign**.
3. Enter a Journey trigger name.
4. Select a flow with the Outbound node that you want to associate with the campaign from the list of workflow journeys.
5. Click **Next**.

   ![](https://secure-res.craft.do/v2/fBLgv79om61Wkayxka4j4CN2DkH7RzhJqGLMgedFeUXayq6vGVewyUg8TvzoEJobPXBAc6huFJLc96a9p4n3NUizovumCGyAyBZNY3eGCaseAguydXRaQ38ggwZxWxHN8r7gFoF1pAbUWeDqa5pbGnUtdTrxeB3xv1s7QDGWCwZci7nAgjZAz79zrNU88ZoGpfNyYqW7UDPRVRZmdtfrqbT6oZCB8khJg1MsimiBExn2rMaFqvbaXGNvRQD2wYv9mbrkyQsmZZGY9UKaLLcbpkN71FEabfRAzRDaywMeM1csyY6wk7/Screenshot%202022-11-07%20at%2011.36.08%20PM.jpg)

6. Select your preferred target audience (segment). Make sure to add your users' CDP records to use for any type of campaign. Know more about [User 360](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/overview).

   ![](https://secure-res.craft.do/v2/fBLgv79om61Wkayxka4j4CN2DkH7RzhJqGLMgedFeUXayq6vGVewyUg8TvzoEJobPXBAc6huFJLc96a9p4n3NUizovumCGyAyBZNY3eGCaseAexxwNhm3cUPwjfz4eyDUF7C8ZbJzT6rbhW2jEE6AuduW7JNvdvJGRo31JiZbRjD3WMU39MzNcLTtqD6Zk2FPKY1j1Z7ueRtxQz6iLG7vPMmPExgDKYdBeQLWfiUMEHhVbWbVFb2VvrcrcSvJiPY9WiQ6eMvn9HwU612LekGELZ41FatuNDWEHoZvU48h8FY9RPCgg/Image.jpg)

7. On the **Schedule** screen, select *User event-based*. 
   
   ![](https://secure-res.craft.do/v2/fBLgv79om61Wkayxka4j4CN2DkH7RzhJqGLMgedFeUXayq6vGVewyUg8TvzoEJobPXBAc6huFJLc96a9p4n3NUizovumCGyAyBZNY3eGCaseAexxwNhm3cUPwjfz4eyDUF7C8ZbJzT6rbhW2jEE6AuduWCwCguonwTZ6skY2vMfRiLfjZtuFdzRJdsiAxytmc8A4gb8NZoVygcyMgUrP2mS3aFZfVE54TTh85mDT7isa3dnhcuL8RedxtHugsSnq5hampcAKUGiRZM4S8hd4JKaDm4Ro3hXysCfWQjQ8CZmJ91t7WC/Image.jpg)

Option | Description
-------- | ---------
Campaign triggers when user | Choose the event for which the campaign should trigger.
After the event, the campaign triggers | Choose when to trigger the event. <br/>**Immediately**: To trigger the event as soon as the event occurs.<br/>**At a specific time**: To trigger the event at your preferred time after the event occurred. <br/> **After a delay**: To trigger the campaign for the user after specific hours, minutes, or seconds from the event occurred time.
Run this campaign | Choose *Once per user* to trigger the campaign only once per user, and choose *Every time the event is fired* to trigger any number of times whenever the event occurs for the user.
Exclude if conversion has happened | Enable this to stop triggering the campaign when the conversation has happened, and choose the **Conversation event**. For example, for a Cart abandonment event, a transaction could be a Conversation event. 
Start this campaign | Choose when to start the campaign - *Now* or at a *Later* date and time.
End this campaign | Choose when to end the campaign. Choose a future date and time.