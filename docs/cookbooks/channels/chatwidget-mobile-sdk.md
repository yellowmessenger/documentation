---
title: Difference between Web widget and Mobile SDK
sidebar_label: Difference between Web widget and Mobile SDK
---

*** | Web widget | Mobile SDK |
-------|----------|------
Destination | Hosted on Website | Hosted on Mobile app
Entry point | Supports both floating bot icon and custom entry point | Supports only custom entry point
Hardware permission |The bot will inherit the same permissions as the browser | Need to define mic, location, storage, and other hardware permissions in the SDK
Optimisation | Better optimized for web browsers | Better optimized for mobile screens and keyboards, with native attachment button support.
Push notifications | Supports browser push notifications which require additional setup (service worker) | Supports Firebase push notifications even without the need of device token. <br/>Additionally, you can also configure `sendIOSEvent` to redirect users to any other screen within or outside the app
Navigation | Supports floating icon as an entry point | Supports native entry and exit.<br/>When you click on the link it will open in default browser, and upon clicking back, users are redirected to the app
Customisation |Supports custom script to override bot’s UI elements | Supports custom loader (while loading chatbot) 
Speech-to-text (STT) & Text-to-speech (TTS) | Supports both | Not supported <br/> **Note**: STT is not optimised for Mobile but mobile keypads support STT