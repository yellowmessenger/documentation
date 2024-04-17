---
title: Insights metrics
sidebar_label : Insights metrics
---

In **Insights > Metrics** page, you'll find user and message metrics. Here's how to analyze user traffic:

## Message count

* **Determine session type**: Right-click → Inspect → Network → search for "Insights" → refresh the page → Open any API call → payload. By default, it's a bot session.
* **For bot session**: Open Message events → Apply filter for Interaction type ≠ welcome-reply → Summarize data based on sum of count.
* **For user session**: Open Message events → Apply filter for Interaction type ≠ welcome → Summarize data based on sum of count.

## New users count

* **Identify session type**: Right-click → Inspect → Network → search for "Insights" → refresh the page → Open any API call → payload; typically, it's a bot session by default.
* **Bot session (New users)**: Users visited for Yellow Messenger or sent the first message for other channels.
* **User session (New users)**: First message across all channels.
* Apply filters in Data Explorer user engagement events for events and summarize the count; you can filter by channels and timestamps.

## Unique users count

* **Determine session type**: Right-click → Inspect → Network → search for "Insights" → refresh the page → Open any API call → payload; usually, it's a bot session by default.
* **For bot session**: Open Message events → Apply filter for bot message type → Summarize data based on distinct UID.
* **For user session**: Open Message events → Apply filter for User message type → Summarize data based on distinct UID.


## Sessions count

* **Identify session type**: Right-click → Inspect → Network → search for "Insights" → refresh the page → Open any API call → payload; typically, it's a bot session by default.
* **For bot session**: Open User Engagement events → Apply filter for event bot-session → Summarize count.
* **For user session**: Open User Engagement events → Apply filter for event user-session → Summarize count.

**Bot session**: event = bot session → Summarize count
**User session**: event = user session → Summarize count