---
title: Building custom apps with YApps SDK  
sidebar_label: Custom Apps with YApps  
---

## Introduction

The YApps SDK enables the integration of custom applications within the Yellow Cloud platform. These apps are embedded as iframes within the parent application, allowing for extended functionalities such as customer management, custom visualizations, and dynamic workflows. The SDK ensures secure communication between the parent app and custom apps while controlling embedding permissions and interactions.

## Building and deploying a custom app

This guide provides a step-by-step process for building and deploying a custom app named `color-picker` for a customer named `bluewall`.

## Deployment methods

Custom apps can be deployed using one of the following methods:

### 1. In-House deployment (Using yellow cloud infrastructure)

#### Step 1: Develop the custom app

To develop a custom app, follow these steps:

1. Clone the repository: `yellowdotai/chat-components`
2. Navigate to `yellowdotai/chat-components/views/yapps/`
3. Create a new folder with the customer name (`bluewall` in this case).
4. Place all the customer’s custom apps within this folder.

**Example directory structure:**

```
yellowdotai/chat-components/views/yapps/bluewall/color-picker
```

#### Step 2: Build the Custom App

1. Choose a tech stack such as React, Angular, or Vanilla JavaScript.
2. Ensure that the final build files are stored inside the `dist/` folder within the app directory.
3. Use a bundler such as Webpack or Vite for optimized builds.
4. Minify and optimize assets to reduce load time.
5. Implement cross-origin isolation to prevent security vulnerabilities.

#### Step 3: Deployment & Access

1. Create a Pull Request (PR) and submit it for review to the repository owners.
2. Use Jenkins CI/CD pipelines to automate the deployment.
3. Perform both static and dynamic security testing before merging the PR.
4. Deploy the custom app and access it using the following URL format:

```
https://app.yellowmessenger.com/components/{customerName}/{appName}
```

**Example:**

```
https://app.yellowmessenger.com/components/bluewall/color-picker
```

### 2. On-Prem deployment (Customer’s infrastructure)

- The app is hosted on the customer’s infrastructure instead of Yellow Cloud.
- The YApps SDK must be included using the following CDN:

```
https://cdn.yellowmessenger.com/yapps-sdk/v1.0.0/widget.js
```

- Ensure that the app is deployed to a publicly accessible URL.
- Implement strict security measures such as Content Security Policy (CSP) headers to prevent cross-site scripting (XSS) attacks.
- Enforce HTTPS and TLS encryption for secure communication.

-----


## Using the YApps SDK

The YApps SDK provides methods that allow custom apps to securely interact with the Yellow Cloud platform.

### Importing the SDK

To use the SDK in your custom app, import it as follows:

```javascript
import { YAppWidget } from "@yellow/yapps/dist/widget.js";
const yAppWidget = new YAppWidget();
```

### Available Methods

#### 1. Ticket Methods

**Fetch ticket details**:

```javascript
const ticket = await yAppWidget.getTicket();
```

#### 2. Ticket Custom Field Methods

**Fetch ticket custom fields**:

```javascript
const customFields = await yAppWidget.getTicketCF();
```

**Update ticket custom fields**:

```javascript
await yAppWidget.updateTicketCF({ key: "value" });
```

**Disable a custom field**:

```javascript
await yAppWidget.disableTicketCF("custom_field_1");
```

**Enable a custom field**:

```javascript
await yAppWidget.enableTicketCF("custom_field_1");
```

#### 3. Agent Methods

**Fetch agent details**:

```javascript
const agent = await yAppWidget.getAgent();
```

## Testing the Custom App on Cloud

After development, test the app by adding it as a custom app in the sandbox or staging environment of the customer’s bot on the Yellow Cloud platform.

## Custom App Configuration

The `custom-app-config` endpoint allows for the management of custom app settings via API requests (GET, POST, PATCH, DELETE).

### Example cURL request:

```sh
curl --location 'https://${regionCode}.cloud.yellow.ai/api/agents/settings/custom-app-config?bot=${botId}' \
--header 'Cookie: ym_xid=${ymXid}' \
--header 'Content-Type: application/json' \
--data '{
    "description": "Color Picker",
    "defaultContext": [],
    "enabled": true,
    "name": "bluewall color picker",
    "url": "https://app.yellowmessenger.com/components/bluewall/color-picker",
    "iconUrl": "https://cdn.yellowmessenger.com/assets/bluewall-logo.png",
    "trigger": "live-forever",
    "type": "ephemeral",
    "location": "inbox.email.ticket.sidebar"
}'
```

### Configuration Properties Explained

- `description`: A brief summary of the app’s purpose.
- `defaultContext`: Context parameters to pass to the app. Leave empty if not needed.
- `enabled`: Boolean flag to enable (`true`) or disable (`false`) the app.
- `name`: Display name of the custom app.
- `url`: The endpoint where the app is hosted.
- `iconUrl`: URL for the app icon (must be publicly accessible).
- `trigger`: Defines how the app is activated (e.g., click, hover). Leave empty for now.
- `type`:
  - `ephemeral`: Displays the app in the right sidebar of email or chat tickets.
  - `persistent`: Runs in the background without a visible UI.
- `location`: Determines where the app is displayed (e.g., `inbox.email.ticket.sidebar`).

After successful testing, update the configuration for production deployment.

## Deploying to production

To deploy the custom app to production, follow these best practices:

- Automate deployment using Jenkins or GitHub Actions.
- Implement rollback strategies to revert changes in case of deployment failures.
- Use monitoring tools such as Prometheus and Grafana for logging and tracking performance.
- Apply API rate limiting and other security measures to protect against excessive API calls.


----- 


The YApps SDK provides a structured and secure approach to building, deploying, and integrating custom applications on the Yellow Cloud platform. By following these best practices, developers can ensure a seamless and efficient extension of platform functionalities while maintaining high security and performance standards.

