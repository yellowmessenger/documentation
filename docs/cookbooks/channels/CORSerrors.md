---
title: Handling CORS errors for Chat Widget
sidebar_label: Handling CORS errors for Chat Widget
---

Websites often add CSP (Content Security Policy) to restrict loading of content from external sites, which leads to CORS (Cross-Origin Resource Sharing) errors. In such cases, the entire chat widget or specific components like fonts or icons may fail to load.

To resolve CORS errors and ensure the seamless functioning of the chat widget, add Yellow’s domain to the CSP headers of the website. The following domains should be included:

`https://*.yellow.ai`
`https://*.yellowmessenger.com`

To whitelist the WSS (WebSocket Secure) protocol, add the following:

`wss://*.app.yellow.ai`

By adding these domains in the CSP headers, you allow the necessary resources to be loaded, will then allow the bot to load on the website.