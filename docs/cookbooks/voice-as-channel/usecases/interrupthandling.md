---
title: Understand Context-Aware Interruption Handling in voice bots 
sidebar_label : Interruption handling
---


(Available in Private-Beta)

Voice is a full duplex channel, i.e. even when the bot is speaking something, if the user has some clarification or doubts, they expect the bot to listen and answer those queries first. From a user behavior perspective, this is equivalent to a customer interrupting a Human-agent while the agent is speaking something on a call.

Our new design approach for the feature is influenced by the way humans process interruptions over call. Likewise, humans are smarter to listen to interruptions, judging the validity of all the interruptions in parallel and only stopping when a valid (intended) interruption is observed. In case an invalid interruption is observed, the bot will automatically ignore that and be on track with the ongoing conversation. Detailed conversational flow is demonstrated below for both valid and invalid interruptions.

To ensure that only relevant inputs from the callers are respected as Interruptions, the Voice Bot can now be configured to define what constitutes a Valid interruption:
1. **Positive case**: With the new feature of interruption, the bot will only stop speaking (moving away from the current conversation) when it’s a valid interruption (that is acceptable in the context of the conversation).

**![](https://lh5.googleusercontent.com/3tl6o_3FlCe8bcyp-OAvwf-c5wQ5SVN4JKBVXXSbatfrZ4P5yT07FsonlVFDxBySpqJhH4-BUi-uChd6X9LZowvrgdcYMa_1jHVWhqcQonPgu1fmvJq0s84z4KHLBBfd1D0Y3oQIjiwWIcPRo4t6CiI)**
2. **Negative case** : If there is a background conversation (unrelated to the current context of bot conversation) that gets picked up by the bot, it will be treated as an invalid interruption and the flow will not be broken (the interruption will be ignored).


**![](https://lh5.googleusercontent.com/VEtSe9A-IEX5ca7Wi1I4YNlOnFa3yz7Mh22hPCE7YvEKU2qUkoZiZJS9zi-3apb_OIHISoYOUZxYQmSMdpjeIMPXbWmVD6b0xSqmHc0T9TH4DQoNDloleTPAORsEXKGflcHB-Ee1ICKeJuJCkHyKi9Y)**


**Voice Options (to be used)**:

1. Set the below options to interject
```
interject = true; 
interject_early : true (optional)
```
2. Dynamically set the below option for a posted utterance to respond or ignore:

```interjection_response: "no_action"; (OR "take_action")```

:::note
1. This new feature is under private beta only and will only be enabled (on the bot) after evaluation of a valid use-case requirement.
2. Currently the platform doesn’t evaluate the validity of the interruption but instead needs to be handled via bot logic (ex - if entity = language then next node, else ignore)
3. Only 1 user interruption will be respected per node to start with under private beta.
:::
