---
title: User inactivity
sidebar_label: User inactivity 
---

Sometimes, when a user is asked for an input, we might not get a response and would like to nudge them to share a response, otherwise the bot flow cannot move forward.

*Eg: You have asked user for their email address and they haven't shared it. You would like to ask the user if they're still available by their device or have they dropped off.*

## Use-cases
We treat a user as inactive when a prompt is asked from them, like:-
* Please share your email-ID
* Please select one of the options (Quick reply/Whatsapp List)
* What is your name?

If there is no response to such a prompt, we can trigger the Inactivity event

## Handling inactivity
We can handle inactivity in different ways depending on the conversational design and tone in which the flow moves forward in. A few methods are:-
* Sending a message asking the user if they are still active or not.
* Sending the above message followed by repeating the input requested for.
* Triggering a whole new journey for inactivity.


## Setup
This is a [lead generation template](https://cloud.yellow.ai/marketplace/d18654cb9537eeaf11c7511aff8f9bfe) that's available in the **Marketplace**![](https://i.imgur.com/RHprZir.png)

We take the following inputs from the users:-
* Email-id
* Product of interest

then, we insert the data into a Table which can be considered as a lead. 

Here, we wouldn't want the user to drop off just because they haven't entered their email-id. So if we see that the user is inactive for more than 5mins, we can ping them for their email-id once more.

### Configure
All user inactivity events have to be created in the same way
1. Go over to User Inactivtiy Event![](https://i.imgur.com/tKXrkjl.png)

2. Add an event
Here, You can set the amount of time taken for the event to be identified as inactive in both minutes and hours![](https://i.imgur.com/wqZPD1E.png)


### Types of responses
There are three different ways to set up the bot response when a user is inactive

1. Set up a nudge as a message
2. Set up the nudge followed by the question they dropped off at

![](https://i.imgur.com/Ko3xkH0.jpg)


![](https://i.imgur.com/erG3UqL.png)

3. Trigger a different flow to handle inactivity

![](https://i.imgur.com/BrzIHis.png)

4. Activate for specific steps in a specific flow
If we're observing consistent dropoff at a specfic step, you can set up a unique event exclusively for that step.

Eg: I want to handle a handle inactivity for email in a flow called moreinfo

![](https://i.imgur.com/leWMbX3.png)
This will trigger the event exclusively for the email step and won't be applicable globally.


If there are any specific use-cases around inactivity that you'd like to implement, raise it in our community and we'll have the entire yellow ecosystem to help you out!!
```
You can find our community here: https://community.yellow.ai/
```

Happy bot building!!
