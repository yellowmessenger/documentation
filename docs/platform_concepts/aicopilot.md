---
title: Help Center 
sidebar_label : Help Center
---


## Overview

Yellow.ai’s AI Help Center is a plug-and-play widget that integrates seamlessly into customer websites, serving as an all-in-one support portal. It enables users to interact with an AI-powered agent, raise tickets, access KnowledgeBase articles, and connect with live agents. AI-Copilot consolidates several key functionalities from Yellow.ai’s Inbox, KnowledgeBase, and ticketing system into a single, unified interface.

![image](https://imgur.com/TlBfmPF.png)

**Key Benefits:**

* **Centralized ticket management**: AI Help Center allows users to view and manage all tickets they have created in one place. This eliminates the challenge of tracking multiple email tickets, which often get lost across various threads. With AI-Copilot, users can continue conversations on each specific ticket without confusion, improving clarity and streamlining support requests.
* **Unified experience**: Customers can seamlessly switch between interacting with an AI agent, browsing the KnowledgeBase, and communicating with live agents, all within one easy-to-use interface.ontinue conversations related to each specific issue.

> For support: Contact support@yellow.ai.


### Demo Experience

To explore the AI-Copilot features in action, please refer to the demo video below.

![AI Copilot GIF](./Getting%20Started/img/cdp/Copilot-3.gif)

> **Try it yourself!**: https://help.yellow.ai





-----

## Components of AI-Copilot

When the AI-Copilot widget is integrated into a website, it contains several important components designed to enhance the user experience:

### AI Agent interaction
Users can continue their interactions with an AI agent, receiving responses from pre-configured flows and KnowledgeBase articles.

![image](https://imgur.com/VD6SCq8.png)


### Suggested queries

A list of suggested queries (4) is available to help guide users through their support journey.

![image](https://imgur.com/PS6imUI.png)


### KnowledgeBase access

Users can ask questions, and the AI agent fetches relevant summarized answers with supported links from the KnowledgeBase.

![image](https://imgur.com/YClMjQW.png)

### Documentation access

Users can easily view Yellow.ai’s documentation by clicking the **Go to Documentation** button.

![image](https://imgur.com/qq5nmU0.png)


### Live chat integration

If the AI agent cannot resolve the issue, users can connect to a live agent through the built-in chat functionality. If the issue can't be resolved immediately, the agent can create a support ticket.
- You must provide your details such as Name, Contact number and Email ID to verify OTP before connecting you to a live agent. 


![image](https://imgur.com/eafaDFd.png)


### Account access

Sign in to your Copilot account using your **Yellow.ai credentials**. This allows you to access and manage your tickets.

![image](https://imgur.com/qNKbakN.png)


### Email ticket management

After signing into co-pilot with their yellow.ai  credentials, end users can view and manage their email tickets. 
- All email tickets created by users or Agents are available in the Copilot interface. 
- Users can view details (such as all the messages from that thread, ticket ID, Priority and created date) and ticket statuses in one location. 

![image](https://imgur.com/h8fMb1M.png)

![image](https://imgur.com/6zxqVkx.png)

### Ticket escalation

If a user needs additional support, they can escalate their existing ticket to the customer support team directly from the ticket details page.



![image](https://imgur.com/tPY3x9a.png)



-----


## Configure of AI-Copilot


Configuring the AI-Copilot is similar to setting up a normal AI agent on Yellow.ai. Ticket Escalation cab be additionally configured. 


### Configure ticket escalation

AI-Copilot includes the ability for users to escalate tickets to customer support teams. The escalation option is available on the ticket details page.

**Escalation Flow:**

When a user escalates a ticket, an event (`copilot-ui-escalate-ticket`) is triggered with the following data:
* **ticketId**: The ID of the ticket being escalated.
* **userId**: The CDP user ID of the individual escalating the ticket.

**Support Team Actions:**

The support team must configure their bot to handle this escalation event. For example, they may:
* Create an escalation flow that is triggered when the `copilot-ui-escalate-ticket` event is received.
* Inside this flow, they can add logic to alert the assigned support agent or initiate further investigation.


-------



## Copilot deployment

AI-Copilot is deployed on customer websites through the following steps:

1. **Add Stylesheet to the HTML `<head>` tag**: Place the following line at the end of the `<head>` tag in your HTML file:

```html
<link rel="stylesheet" href="https://cdn.yellowmessenger.com/plugin/copilot/latest/dist/assets/index.css" />
```

2. **Add configuration script:** Create the `window.__yc__` configuration script and place it at the bottom of the `<body>` tag:

```
    <script>
      window.__yc__ = {
        botId: "x1694470802970",  //Add your respective Bot ID
        host: "https://r4.cloud.yellow.ai", //Add link to the host URL, chamge the region if required 
        logo: {
          src: "https://cdn.yellowmessenger.com/assets/images/yellow-logo.svg", // Add link of your logo image and define its dimensions
          alt: "Yellow.ai",
          favicon: "https://cdn.yellowmessenger.com/assets/icons/glyph.png",
          width: 85,
          height: 20,
        },
      };
    </script>
  
```

3. **Add Copilot JavaScript to your website:** After the above script, add the following JavaScript tag just below the closing `</body>` tag:

`script src="https://cdn.yellowmessenger.com/plugin/copilot/latest/dist/index.js"></script>`

Once this code is added to your website, the Copilot widget will be deployed and ready for use.

**Example deployment code**:


```
<html>
  <head>
    <!-- Title of the page displayed in the browser tab -->
    <title>Yellow Help Center</title>

    <!-- Link to the Copilot widget's CSS stylesheet for styling -->
    <link rel="stylesheet" href="https://cdn.yellowmessenger.com/plugin/copilot/latest/dist/assets/index.css" />
  </head>
  <body>
    <!-- Script to configure the Copilot widget -->
    <script>
      window.__yc__ = {
        // The unique bot ID that identifies the specific bot to use
        botId: "x1694470802970",
        
        // Host URL where the bot's backend services are hosted
        host: "https://r4.cloud.yellow.ai",
        
        // Logo configuration for the Copilot widget
        logo: {
          // Source URL for the logo image
          src: "https://cdn.yellowmessenger.com/assets/images/yellow-logo.svg",
          
          // Alt text for the logo image
          alt: "Yellow.ai",
          
          // Favicon for the website, displayed in browser tabs
          favicon: "https://cdn.yellowmessenger.com/assets/icons/glyph.png",
          
          // Width and height settings for the logo image
          width: 85,
          height: 20,
        },
      };
    </script>

    <!-- Script to load and initialize the Copilot widget -->
    <script src="https://cdn.yellowmessenger.com/plugin/copilot/latest/dist/index.js"></script>
  </body>
</html>

```

        
### Existing customizations 
    
Once the deployment code has been added to the webpage (as mentioned earlier), the following elements can be customized:

* **AI-Agent configuration**: The same configuration used for Yellow.ai web widgets applies here, including language settings and other preferences.
* **Logo customization**: You can add a custom logo to the Copilot interface by modifying the `window.__yc__.logo` configuration in the script.
* **Translation**: Users can enable translation to switch the language of the AI-Agents messages, but the entire website will remain in English.


### Upcoming features and customizations

Currently, some customization options are controlled from the **backend**, but they will soon be made available for user configuration. These features include:

* **Suggested queries**: Customize the four default queries displayed to users.
* **Callout messages**: Ability to modify the “We are here to help you” message.
* **Documentation link**: Modify or add documentation links in the "Go to Documentation" button.
* **Website language**: Switch the language of the entire website, including the AI-agents’s messages and other fields.
* **Account access**: Currently, access is limited to Yellow.ai credentials. However, authentication can also be configured on the client’s end.

