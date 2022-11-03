---
title: Overview
sidebar_label: Overview

---


## Bot Performance


Benchmarking is done by calculating the same metric over the selected duration as well
as for a similar duration before the start Date. Selected duration and previous duration
are then compared.
Bold line represent the metric for the current duration and the dotted line represents
metrics for the previous duration.
Users: This shows the unique number of users who conversed with the bot.
Calculation logic: It is the unique count of users from the list of messages exchanged on
the bot. It is calculated using hyperloglog algorithm.

![](https://cdn.yellowmessenger.com/eVFM7lMkUViy1622804899337.png)

Messages: This shows the number of messages exchanged on the bot.
Calculation logic: It is the sum of all the messages exchanged. The count includes user,
bot, agent and notification messages.

![](https://cdn.yellowmessenger.com/LdsEGvyb96mJ1622804918681.png)

Sessions: This shows the number of sessions created by users on the bot.
Calculation logic: It is the sum of all the sessions created by the user in the selected
time span.

![](https://cdn.yellowmessenger.com/u5co9Y6jqH3R1622804922280.png)
Session Duration: Session duration is the average time for which the user has conversed
with the bot. A session can be a max of 30 mins if the user is continously conversing. A
new session is started after 30 mins.
Calculation logic: It is the average of the total time users conversed with the bot by the
total number of sessions. This metric is captured for all the sources.

![](https://cdn.yellowmessenger.com/QxkFoRcokoAa1622804925320.png)
Note: Detailed report can be seen by clicking on "BOT OVERVIEW" on the card.
This is calculated for all channels.

---

## Real Time Activity

This widget shows the real-time usage activity of the bot and which journeys are being
triggered by the user.
How does the calculation work?
Active Users: The frequency of unique users are aggregated and shown in minute
granularity for the last 30 minutes.
Journey: For every journey, the start event is being pushed. The count of those started
events is shown here for the last 1 hour.
This is calculated for all channels.
![](https://cdn.yellowmessenger.com/Y0a8IN4VsCA81622804928265.png)

## User Engagement Time Graph

The graph shows the user frequency for the selected period aggregated by hour.
How does the calculation work ?
The frequency of unique users messaging the bot is aggregated in hourly buckets for the
selected range.
This is calculated for all channels.
![](https://cdn.yellowmessenger.com/zMgomCBvnmyH1622804933557.png)

## User Acquisition

This widget shows the counts of the unique users conversing with the bot from various
sources.
Traffic Channel
The frequency of unique users messaging the bot is segregated by source, aggregated in
day-wise buckets for the selected date range.
It is calculated for all channels.
![](https://cdn.yellowmessenger.com/QuVgrerdDn6X1622804952878.png)

Platform / Medium
The frequency of unique users messaging the bot is segregated by the device they come
from, aggregated in day-wise buckets for the selected date range.
The count may be significantly lesser compared to the number of users since other
channels like WhatsApp, Facebook etc do not share this data device data. Hence, the
graph shows only the users on Yellow.ai bot.
![](https://cdn.yellowmessenger.com/SJJtCQdkdjj01622804956449.png)

## User By Country

This widget shows the counts of the unique users conversing with the bot from various
countries. The top 5 countries and their percentage contributions are shown.
How does the calculation work ?
The captured IP address of the user is translated to a standard location using the
standard ip2location database. The count may be significantly lesser compared to the
total number of users since it shows users only from the source Yellow.ai.
This is calculated for the Yellow.ai channel as the IP address can be captured only on this channel
![](https://cdn.yellowmessenger.com/lMlEOvdxe25Q1622804959921.png)

## User Devices

This widget shows the different kind of user devices from which the bot was accessed.
How does the calculation work?
The frequency of unique users messaging the bot is segregated by the device they come
from, aggregated for the selected date range. Also, device datails in available only for
Yellow.ai source. Other channels like WhatsApp, Facebook etc don’t share this
data.
This is calculated for the Yellow.ai channel.
![](https://cdn.yellowmessenger.com/rTpP5F7ma2O91622804963113.png)

## Bot Accuracy

This widget shows the bot accuracy based on metrics like how accurate the bot is in
terms of identifying customer intents, journey start, journey end and drop-offs. This can
be used to understand how accurately bot is serving the user queries.
Bot Accuracy: Bot accuracy tells you about the % age of user messages which
are being identified by the bot with a certain amount of confidence.

Calculation:
BA = [1 - (Unidetified user messages / Total User Messages)]*100
![](https://cdn.yellowmessenger.com/PR7kiayf3hWt1622804966128.png)
Goal Completion Rate: Goal completion rate is a measure of how many customer
intents are being fulfilled by the bot for every 100 intents started by the users.

Calculation: For every journey the user takes, the journey started and journey
completed event is being pushed. The GCR is measured as:

GCR = [(Journey Completed Events) / (Journey Started Events)]* 100
![](https://cdn.yellowmessenger.com/rPDdas3WwbjK1622804969598.png)
Human Takeover Rate : Human takeover rate is the % age of queries which the
bot was not able to resolve and the customer had to speak to the live agent. It
also includes cases where users directly asked to speak to the agent.

Calculation: For every conversation that happens on the bot, a human takeover
event is pushed when the user requests for a human or is automatically taken to
a human.

HTR = [(No of times Agent transfer happened) / (Journey Started Events)]*
100
![](https://cdn.yellowmessenger.com/Iju07Uznrh8b1622804973704.png)
Note: The detailed report can be viewed by clicking on "BOT ACCURACY" on the
card.
Channels this is calculated for : All channels.


## Journey Triggers

This widget shows the frequently triggered journeys by the users and the average time
users took to complete these journeys.
How does the calculation work?
For every journey, the completion event is being pushed. The count of those completed
events alongwith the time it took to complete those events are shown here for the
selected duration.

Note: The detailed report can be viewed by clicking "JOURNEY REPORT" on the card.
Channels this is calculated for : All channels.
![](https://cdn.yellowmessenger.com/Ik8tcCUrGT8P1622804978155.png)

## Unidentified Utterances

This widget shows an aggregation of all the top utterances by the users which the bot
could not identify.

How does the calculation work?

All the utterances which are not identified by the bot are collected and then clubbed
based on the type of utterance to show a picture of what utterances the bot is not able to
understand.

![](https://cdn.yellowmessenger.com/sOPjAP7yuAh31622804982301.png)

---